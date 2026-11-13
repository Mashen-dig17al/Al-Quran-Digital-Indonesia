/**
 * Quran API Service with Intelligent Offline-First Caching & IndexedDB
 * Mengutamakan penyimpanan IndexedDB, data bawaan offline, dan API Kemenag RI
 */
import { OFFLINE_SURAHS } from '../data/offlineSurahs.js';
import { QURAN_SURAH_LIST } from '../data/quranMetadata.js';
import { dbGetSurah, dbSaveSurah } from '../data/quranDb.js';

const CACHE_PREFIX = "quran_surah_v3_";

/**
 * Normalisasi dan perbaikan tanda mad Quranic autentik:
 * Menghilangkan broken tatweel (ـ) sebelum hamzah (ـء) dan menyempurnakan mad wajib / jaiz menggunakan U+0653 (جَآءَهُمْ, وَرَآءَهُ, اَنْبِيَآءَ)
 * Sesuai dengan Glyph ID 109 (Maddah Above) pada font resmi Mushaf Madinah (UthmanicHafs)
 */
export function cleanQuranArabic(text) {
  if (!text) return '';
  let s = String(text);

  // 1. Ganti SEMUA U+06E4 (ARABIC SMALL HIGH MADDA ۤ) dengan U+0653 (ARABIC MADDAH ABOVE ٓ)
  s = s.replace(/\u06E4/g, '\u0653');

  // 2. Ganti modern precomposed U+0622 (آ) dengan U+0627 + U+0653 (آ)
  s = s.replace(/آ/g, 'ا\u0653');

  // 3. Hapus tatweel yang menempel pada tanda mad (ـٓ atau ٓـ)
  s = s.replace(/\u0640*(\u0653)\u0640*/g, '$1');

  // 4. General rule untuk Mad Wajib Muttashil di seluruh 114 Surat:
  s = s.replace(/([\u064E][\u0651]?\s*ا)\u0640*([ء\u0674])/g, '$1\u0653$2');
  s = s.replace(/([ا])\u0640+([ء\u0674])/g, '$1\u0653$2');

  // 5. Dagger alif (ـٰ atau ٰ) diikuti tatweel dan hamzah -> ـٰٓء
  s = s.replace(/([\u0670])\u0640*([ء\u0674])/g, '$1\u0653$2');

  // 6. Waw dan Ya mad sebelum hamzah dengan tatweel (سُوـءَ -> سُوٓءَ, جِيـءَ -> جِيٓءَ)
  s = s.replace(/(و[\u0652]?)\u0640*([ء\u0674])/g, '$1\u0653$2');
  s = s.replace(/(ي[\u0652]?)\u0640*([ء\u0674])/g, '$1\u0653$2');

  // 7. Hapus semua sisa tatweel sebelum hamzah (ـء -> ء)
  s = s.replace(/\u0640+([ء\u0674])/g, '$1');

  // 8. Hapus tatweel di antara huruf mad dan hamzah
  s = s.replace(/([اآوياء])\u0640+([ء\u0674])/g, '$1$2');

  // 9. Rapikan jika ada dobel mad (ٓٓ -> ٓ)
  s = s.replace(/\u0653+/g, '\u0653');

  // 10. Standarisasi Rasm Utsmani Madinah Autentik (King Fahd Complex / Majma' Malik Fahd):
  // a. Dammah terbalik (U+0657 ٗ) -> dammah + small waw (U+06E5 ۥ)
  s = s.replace(/([هـ])\u0657/g, '$1\u064F\u06E5');
  s = s.replace(/\u0657/g, '\u06E5');

  // b. Kasrah terbalik (U+0656 ٖ) -> kasrah + small ya (U+06E6 ۦ)
  s = s.replace(/([هـ])\u0656/g, '$1\u0650\u06E6');
  s = s.replace(/\u0656/g, '\u06E6');

  // c. Normalisasi alif hamzah bawah & atas (اِ -> إِ, اَنْ -> أَنْ, اِنْ -> إِنْ)
  s = s.replace(/اِ/g, 'إِ');
  s = s.replace(/اَنْ/g, 'أَنْ');
  s = s.replace(/اَن/g, 'أَن');
  s = s.replace(/اِنْ/g, 'إِنْ');
  s = s.replace(/اِن/g, 'إِن');

  // d. Dagger alif pada ya maqsura (حَتّٰى -> حَتَّىٰ, عَلٰى -> عَلَىٰ, اِلٰى -> إِلَىٰ)
  s = s.replace(/تّٰى/g, 'تَّىٰ');
  s = s.replace(/ّٰى/g, 'َّىٰ');
  s = s.replace(/([^\s])ٰى/g, '$1َىٰ');

  // e. Pada Rasm Utsmani Mushaf Madinah, nun sakinah sebelum ikhfa atau idgham tidak bertanda sukun:
  s = s.replace(/نْ(\s*)([تثجدذزسشصضطظفقكيرملون])/g, 'ن$1$2');
  s = s.replace(/نْ([تثجدذزسشصضطظفقك])/g, 'ن$1');

  // f. Iqlab: buang sukun pada nun yang ber-meem iqlab (نْۢ -> نۢ)
  s = s.replace(/نْ([ۢ\u06E2])/g, 'ن$1');

  // g. Hapus sukun berlebih pada huruf mad waw & ya (حُدُوْدَ -> حُدُودَ, يُّقِيْمَا -> يُقِيمَا, يَعْلَمُوْنَ -> يَعْلَمُونَ)
  s = s.replace(/([ُ])و[\u0652]/g, '$1و');
  s = s.replace(/([ِ])ي[\u0652]/g, '$1ي');

  // h. Hilangkan tasydid awal pada idgham bighunnah ya / waw sesuai Rasm Utsmani Madinah
  s = s.replace(/(\s)يَّ/g, '$1يَ');
  s = s.replace(/(\s)يُّ/g, '$1يُ');
  s = s.replace(/(\s)يِّ/g, '$1يِ');

  // i. Nama Allah Ta'ala dengan waslah autentik (اللّٰهِ -> ٱللَّهِ)
  s = s.replace(/اللّٰهِ/g, 'ٱللَّهِ');
  s = s.replace(/اللّهِ/g, 'ٱللَّهِ');
  s = s.replace(/اللّٰهُ/g, 'ٱللَّهُ');
  s = s.replace(/اللّهُ/g, 'ٱللَّهُ');
  s = s.replace(/اللّٰهَ/g, 'ٱللَّهَ');
  s = s.replace(/اللّهَ/g, 'ٱللَّهَ');

  // j. Rapikan tanda waqaf (ۗ ۖ ۚ ۛ ۘ ۙ): menempel langsung pada kata sebelumnya (tanpa spasi di depan), hapus sukun nyasar, diikuti satu spasi
  s = s.replace(/\s*([ۗۖۚۛۘۙ])[\u0652\s]*/g, '$1 ');

  // k. Normalisasi spasi ganda menjadi spasi tunggal dan hilangkan spasi di ujung
  s = s.replace(/ {2,}/g, ' ').trim();

  return s;
}

/**
 * Validasi ketat integritas data surat Al-Qur'an terhadap metadata resmi Kemenag RI
 * Menolak jika:
 * 1. Nomor surat salah
 * 2. Jumlah ayat tidak persis sama dengan metadata
 * 3. Nomor ayat tidak urut dari 1 hingga N
 * 4. Teks Arab atau terjemahan kosong
 */
export function validateSurahIntegrity(surah, meta) {
  if (!surah || typeof surah !== 'object') {
    return { valid: false, reason: 'Data surat kosong atau bukan objek valid.' };
  }
  if (!meta || typeof meta !== 'object') {
    return { valid: false, reason: 'Metadata surat tidak ditemukan.' };
  }
  if (Number(surah.number) !== Number(meta.number)) {
    return { valid: false, reason: `Nomor surat tidak cocok: diterima ${surah.number}, seharusnya ${meta.number}.` };
  }
  if (!Array.isArray(surah.verses)) {
    return { valid: false, reason: 'Daftar ayat bukan array valid.' };
  }
  if (surah.verses.length !== meta.verses) {
    return { valid: false, reason: `Jumlah ayat tidak sesuai: diterima ${surah.verses.length}, seharusnya ${meta.verses}.` };
  }

  for (let i = 0; i < surah.verses.length; i++) {
    const v = surah.verses[i];
    const expectedNum = i + 1;
    if (!v || typeof v !== 'object') {
      return { valid: false, reason: `Ayat #${expectedNum} tidak valid.` };
    }
    if (Number(v.number) !== expectedNum) {
      return { valid: false, reason: `Urutan ayat rusak: ayat ke-${expectedNum} memiliki nomor ${v.number}.` };
    }
    if (!v.arabic || String(v.arabic).trim().length === 0) {
      return { valid: false, reason: `Teks Arab pada ayat #${expectedNum} kosong.` };
    }
    if (!v.translation || String(v.translation).trim().length === 0) {
      return { valid: false, reason: `Terjemahan pada ayat #${expectedNum} kosong.` };
    }
  }

  return { valid: true };
}

export async function getSurahData(surahNumber) {
  const num = Number(surahNumber);
  const meta = QURAN_SURAH_LIST.find(s => s.number === num);

  // 1. Cek IndexedDB (Primary Storage - Zero Latency, 100% Offline)
  try {
    const dbData = await dbGetSurah(num);
    if (dbData && meta) {
      const val = validateSurahIntegrity(dbData, meta);
      if (val.valid) {
        return dbData;
      } else {
        console.warn(`[quranApi] IndexedDB Surah ${num} data invalid: ${val.reason}`);
      }
    }
  } catch (e) {
    console.warn(`[quranApi] IndexedDB lookup error for Surah ${num}:`, e);
  }

  // 2. Cek Data Bawaan Offline (Instant zero-latency fallback)
  if (OFFLINE_SURAHS[num] && meta) {
    const offlineCopy = JSON.parse(JSON.stringify(OFFLINE_SURAHS[num]));
    if (Array.isArray(offlineCopy.verses)) {
      offlineCopy.verses.forEach(v => {
        v.arabic = cleanQuranArabic(v.arabic);
      });
    }
    const val = validateSurahIntegrity(offlineCopy, meta);
    if (val.valid) {
      try { await dbSaveSurah(offlineCopy); } catch(e) {}
      return offlineCopy;
    } else {
      console.warn(`[quranApi] Bundled Surah ${num} data invalid: ${val.reason}`);
    }
  }

  // 3. Cek LocalStorage Cache (Migrasi backward-compatible)
  const cached = localStorage.getItem(`${CACHE_PREFIX}${num}`);
  if (cached && meta) {
    try {
      const parsed = JSON.parse(cached);
      if (meta.arabic) parsed.arabic = meta.arabic;
      if (Array.isArray(parsed.verses)) {
        parsed.verses.forEach(v => {
          v.arabic = cleanQuranArabic(v.arabic);
        });
      }
      const val = validateSurahIntegrity(parsed, meta);
      if (val.valid) {
        try { await dbSaveSurah(parsed); } catch(e) {}
        return parsed;
      }
    } catch (e) {
      console.warn("Error parsing cached surah:", e);
    }
  }

  // 4. Jika Online, Fetch dari API equran.id & Validasi Ketat
  if (typeof navigator === 'undefined' || navigator.onLine) {
    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${num}`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(7000)
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.data && meta) {
          const raw = result.data;
          
          // Tolak jika nomor surat API tidak cocok dengan yang diminta
          if (Number(raw.nomor) !== num) {
            console.warn(`[quranApi] DITOLAK: Nomor surat API (${raw.nomor}) tidak cocok dengan permintaan (${num})`);
          } else {
            const normalized = {
              number: Number(raw.nomor),
              name: raw.namaLatin || meta.name,
              arabic: meta.arabic || raw.nama,
              meaning: raw.arti || meta.meaning,
              versesCount: Number(raw.jumlahAyat) || meta.verses,
              type: meta.type || ((raw.tempatTurun && raw.tempatTurun.toLowerCase().includes("madin")) ? "Madaniyyah" : "Makkiyyah"),
              juz: meta.juz || 1,
              page: meta.page || 1,
              bismillah: num !== 1 && num !== 9,
              description: raw.deskripsi || "",
              audioFull: raw.audioFull ? raw.audioFull["05"] || raw.audioFull["01"] : null,
              verses: (raw.ayat || []).map((a, idx) => ({
                number: Number(a.nomorAyat) || (idx + 1),
                arabic: cleanQuranArabic(a.teksArab),
                latin: a.teksLatin || "",
                translation: a.teksIndonesia || "",
                audio: a.audio ? a.audio["05"] || a.audio["01"] : null
              }))
            };

            // Validasi integritas ketat (jumlah ayat, urutan ayat 1..N, teks arab & terjemahan tidak kosong)
            const validation = validateSurahIntegrity(normalized, meta);
            if (validation.valid) {
              try {
                await dbSaveSurah(normalized);
              } catch (dbErr) {
                console.warn('[quranApi] Gagal menyimpan surah terverifikasi ke IndexedDB:', dbErr);
              }
              return normalized;
            } else {
              console.warn(`[quranApi] DITOLAK: Respons API Surah ${num} gagal validasi integritas: ${validation.reason}`);
              // PENTING: Dilarang mengembalikan data yang gagal validasi!
            }
          }
        }
      }
    } catch (err) {
      console.info(`Surah ${num} online fetch attempt error:`, err.message);
    }
  }

  // 5. Data belum tersedia secara offline atau gagal validasi & tidak ada internet
  // PERSYARATAN INTEGRITAS: Dilarang menggunakan teks placeholder tiruan/palsu!
  // Kembalikan objek status belum diunduh yang jujur dan autentik
  return {
    number: num,
    name: meta ? meta.name : `Surah ${num}`,
    arabic: meta ? meta.arabic : "سُورَةٌ",
    meaning: meta ? meta.meaning : "Surah Al-Qur'an",
    versesCount: meta ? meta.verses : 0,
    type: meta ? meta.type : "Makkiyyah",
    juz: meta ? meta.juz : 1,
    page: meta ? meta.page : 1,
    bismillah: num !== 1 && num !== 9,
    isNotDownloaded: true,
    verses: []
  };
}
