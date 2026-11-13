/**
 * Komponen Pembaca Al-Qur'an (Quran Reader)
 * Mereplikasi tampilan Tampilan.2.jpeg:
 * - Header Halaman & Juz
 * - Tab navigasi Surah (105. Al-Fil, 104. Al-Humazah, 103. Al-'Asr)
 * - Ornamen kepala surah dengan ikon Ka'bah & jumlah ayat
 * - Basmalah kaligrafi
 * - Teks Arab Rasm Utsmani Kemenag RI + Terjemahan Kemenag RI
 * - Audio pemutar ayat merdu Syeikh Misyari Rasyid
 */

import { QURAN_SURAH_LIST } from '../data/quranMetadata.js';
import { QARI_LIST } from './SettingsModal.js';

export function cleanQuranArabic(text) {
  if (!text) return '';
  let s = String(text);

  // 1. Ganti SEMUA U+06E4 (ARABIC SMALL HIGH MADDA ۤ) dengan U+0653 (ARABIC MADDAH ABOVE ٓ)
  // Kemenag RI / equran.id mengodekan mad dengan U+06E4, sedangkan font Mushaf Madinah (UthmanicHafs)
  // memiliki glyph gelombang panjang autentik (Gambar 2) pada Glyph 109 (U+0653)!
  s = s.replace(/\u06E4/g, '\u0653');

  // 2. Ganti modern precomposed U+0622 (آ) dengan U+0627 + U+0653 (آ)
  s = s.replace(/آ/g, 'ا\u0653');

  // 3. Hapus tatweel yang menempel pada tanda mad (ـٓ atau ٓـ)
  s = s.replace(/\u0640*(\u0653)\u0640*/g, '$1');

  // 4. General rule untuk Mad Wajib Muttashil di seluruh 114 Surat:
  // Huruf berharakat Fathah (َ) diikuti Alif (ا) dan Hamzah (ء) dengan atau tanpa tatweel (ـ)
  // Contoh: جَاـءَهُمْ, جَاءَهُمْ -> جَآءَهُمْ
  //         وَرَاـءَهُ, وَرَاءَهُ -> وَرَآءَهُ
  //         اَنْبِيَاـءَ, اَنْبِيَاءَ -> اَنْبِيَآءَ
  //         شَاـءَ, شَاءَ -> شَآءَ
  //         سَمَاـءِ, سَمَاءِ -> سَمَآءِ
  //         مَاـءً, مَاءً -> مَآءً
  s = s.replace(/([\u064E][\u0651]?\s*ا)\u0640*([ء\u0674])/g, '$1\u0653$2');

  // Jika alif belum memiliki madda dan diikuti tatweel + hamzah
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

export function colorizeTajweed(arabicText, isActive = true) {
  if (!isActive || !arabicText) return arabicText;
  let t = String(arabicText);

  // 1. Mad (Maddah ٓ / آ) -> Red
  t = t.replace(/([\u0621-\u064A\u0670-\u0671]\u0653|آ)/g, '<span class="tajweed-mad">$1</span>');

  // 2. Ghunnah (Nun/Mim Tasydid: نّ / مّ) -> Cyan
  t = t.replace(/([نم]\u0651[\u064E-\u0650]?)/g, '<span class="tajweed-ghunnah">$1</span>');

  // 3. Iqlab (Tanda mim iqlab U+06E2 / tanwin / nun sukun sebelum ba) -> Blue
  t = t.replace(/([\u06E2]|(?:[\u064B-\u064D][اى\u0670]?|ن[\u0652]?)\s*ب)/g, '<span class="tajweed-iqlab">$1</span>');

  // 4. Qalqalah (Huruf baju di toko: ق ط ب ج د bersukun \u0652) -> Pink
  t = t.replace(/([قطبجد]\u0652)/g, '<span class="tajweed-qalqalah">$1</span>');

  // 5. Idgham (Tanwin / Nun sukun bertemu huruf يرملون) -> Purple
  t = t.replace(/((?:[\u064B-\u064D][\u06ED]?[اى\u0670]?|ن[\u0652]?)\s*[يرملون]\u0651?)/g, '<span class="tajweed-idgham">$1</span>');

  // 6. Ikhfa (Tanwin / Nun sukun bertemu huruf ikhfa: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك) -> Coral Red Sesuai Referensi
  t = t.replace(/((?:[\u064B-\u064D][\u06ED]?[اى\u0670]?|ن[\u0652]?)\s*[تثجدذزسشصضطظفقك][\u064B-\u0652]?)/g, '<span class="tajweed-ikhfa">$1</span>');

  return t;
}

export function renderQuranReader(surahData, settings, currentPlayingVerse, bookmarks, lastRead) {
  if (!surahData) {
    return `
      <div style="padding: 40px 20px; text-align: center; color: #FFF;">
        <div style="font-size: 24px; margin-bottom: 12px; color: var(--color-orange-primary);">Memuat Surah...</div>
        <p style="color: #94A3B8;">Mengambil teks Rasm Utsmani Standar Kemenag RI</p>
      </div>
    `;
  }

  const { number, name, arabic, meaning, versesCount, type, juz, page, bismillah, verses, isNotDownloaded } = surahData;
  const meta = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST : []).find(s => s.number === Number(number));
  // Prioritaskan master metadata resmi Kemenag RI QURAN_SURAH_LIST dengan tanda baca lengkap
  const surahArabicTitle = (meta && meta.arabic) ? meta.arabic : (arabic || '');
  const rawType = String((meta && meta.type) || type || '').toLowerCase();
  const isMadani = rawType.includes('madan') || String(surahData.tempatTurun || '').toLowerCase().includes('madin');
  const revelationLabel = isMadani ? 'Madaniyah' : 'Makkiyah';
  const nabawiDomeSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c-.3 0-.6.3-.7.6-.8 1.4-2.8 3.3-3.6 5.8-.9 2.7-.4 5.3 1.5 6.7v1.7h5.6v-1.7c1.9-1.4 2.4-4 1.5-6.7-.8-2.5-2.8-4.4-3.6-5.8-.1-.3-.4-.6-.7-.6zm-4 16.8h8v2H8zm-1 3h10v1.5H7z"/></svg>`;
  const kaabaSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6.5L12 3l8 3.5v11l-8 3.5-8-3.5v-11zm8-1.7L6.5 7.4 12 9.8l5.5-2.4L12 4.8zm-6.5 4v7.7l6.5 2.8v-7.8l-6.5-2.7zm8 10.5l6.5-2.8V8.8l-6.5 2.7v7.8z"/></svg>`;
  const revelationIcon = isMadani ? nabawiDomeSvg : kaabaSvg;
  const totalVerses = versesCount || (meta ? meta.verses : (verses ? verses.length : 0));

  const fontSize = (settings && settings.arabicFontSize) ? Math.max(28, Number(settings.arabicFontSize)) : 28;
  const latinFontSize = settings.latinFontSize || 13;
  const translationFontSize = settings.translationFontSize || 14;
  const currentLang = settings.language || 'id';

  // Jika surat belum diunduh ke IndexedDB & perangkat offline:
  // Jangan membuat ayat palsu/placeholder! Tampilkan kartu status unduh yang resmi
  if (isNotDownloaded) {
    return `
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div class="reader-header">
          <div class="reader-header-left">
            <button class="btn-icon-circle" onclick="window.app.navigate('home')" title="Kembali ke Beranda">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <div class="reader-page-title">${currentLang === 'en' ? 'Surah Not Downloaded' : 'Surat Belum Diunduh'}</div>
          </div>
        </div>
        <div class="reader-canvas" style="display: flex; align-items: center; justify-content: center; padding: 40px 20px; text-align: center;">
          <div style="background: rgba(17, 34, 51, 0.75); border: 1.5px solid rgba(234, 88, 12, 0.4); border-radius: 16px; padding: 28px 20px; max-width: 420px; width: 100%; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
            <div style="font-size: 42px; margin-bottom: 12px;">📖⚡</div>
            <div style="font-size: 24px; font-weight: 800; color: #FFFFFF; font-family: var(--font-arabic) !important; margin-bottom: 4px;">${surahArabicTitle}</div>
            <div style="font-size: 16px; font-weight: 800; color: var(--color-orange-primary); margin-bottom: 8px;">QS. ${name} (${totalVerses} Ayat)</div>
            <p style="font-size: 12px; color: #94A3B8; line-height: 1.6; margin-bottom: 20px;">
              ${currentLang === 'en' 
                ? 'This surah has not been downloaded for offline reading yet. Connect to the internet to download this surah or the complete 114 surahs.' 
                : 'Surat ini belum diunduh ke memori perangkat Anda. Hubungkan internet untuk mengunduh surat ini atau unduh seluruh 114 surat agar dapat dibaca offline selamanya.'}
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <button 
                class="btn-primary-offline"
                onclick="window.app.downloadSingleSurah(${number})"
                style="padding: 12px 18px; border-radius: 12px; font-weight: 800; font-size: 13px; border: none; background: linear-gradient(135deg, #EA580C, #C2410C); color: #FFF; cursor: pointer; box-shadow: 0 4px 12px rgba(234,88,12,0.35);">
                📥 ${currentLang === 'en' ? 'Download This Surah Now' : 'Unduh Surat Ini Sekarang'}
              </button>
              <button 
                class="btn-secondary-offline"
                onclick="window.app.openOfflineModal()"
                style="padding: 10px 18px; border-radius: 12px; font-weight: 700; font-size: 12px; border: 1.5px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); color: #60A5FA; cursor: pointer;">
                ⚙️ ${currentLang === 'en' ? 'Open Offline Manager (114 Surahs)' : 'Buka Pengelola Data Offline (114 Surat)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  const showLatin = settings.showLatin !== false;
  const showTranslation = settings.showTranslation !== false;
  const isTajweed = settings.coloredTajweed !== false;
  const isKeepScreenOn = settings.keepScreenOn === true;
  const qariId = settings.qari || 'alafasy';
  const activeQari = (typeof QARI_LIST !== 'undefined' ? QARI_LIST : []).find(q => q.id === qariId);
  const activeQariName = activeQari ? activeQari.name : "Syeikh Misyari Rasyid Al-Afasy";

  // Surah navigasi sebelum dan sesudah (untuk tab bar atas seperti di Tampilan.2)
  const prevNumber = number > 1 ? number - 1 : 114;
  const nextNumber = number < 114 ? number + 1 : 1;
  const prevSurahName = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST.find(s => s.number === prevNumber)?.name : '') || `Surat ${prevNumber}`;
  const nextSurahName = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST.find(s => s.number === nextNumber)?.name : '') || `Surat ${nextNumber}`;

  // Cek apakah ada di bookmarks
  const isBookmarked = (bookmarks || []).some(b => b.surahNumber === number);

  return `
    <div style="display: flex; flex-direction: column; height: 100%;">
      <!-- Top Header Bar (Sesuai Tampilan.2.jpeg) -->
      <div class="reader-header">
        <div class="reader-header-left">
          <button class="btn-icon-circle" onclick="window.app.navigate('home')" title="${currentLang === 'en' ? 'Back to Home' : 'Kembali ke Beranda'}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <div class="reader-header-center">
            <div class="reader-page-title">${currentLang === 'en' ? 'Page' : 'Halaman'} ${page || 601}</div>
            <div class="reader-juz-title">Juz ${juz || 30}</div>
          </div>
        </div>

        <div class="reader-header-right">
          <!-- Jump to Surah / Page Dialog -->
          <button class="btn-icon-circle" onclick="window.app.navigate('surahList')" title="${currentLang === 'en' ? 'Surah List' : 'Daftar Surah'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="14" y2="12"/>
              <line x1="4" y1="18" x2="18" y2="18"/>
            </svg>
          </button>

          <!-- Audio Play / Off Top Bar Button -->
          ${currentPlayingVerse ? `
            <button 
              class="btn-icon-circle btn-top-murottal-off" 
              id="btnTopBarPlaySurah" 
              onclick="window.app.stopAudio()" 
              title="${currentLang === 'en' ? 'Turn Off Audio (OFF)' : 'Matikan Murottal (OFF)'}"
              aria-label="${currentLang === 'en' ? 'Turn Off Audio (OFF)' : 'Matikan Murottal (OFF)'}"
            >
              <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                  <line x1="12" y1="2" x2="12" y2="12"></line>
                </svg>
                <span style="font-size: 8.5px; font-weight: 800; margin-top: 1.5px; letter-spacing: 0.5px; line-height: 1;">OFF</span>
              </div>
            </button>
          ` : `
            <button 
              class="btn-icon-circle" 
              id="btnTopBarPlaySurah" 
              onclick="window.app.togglePlaySurah(${number})" 
              title="${currentLang === 'en' ? 'Play Full Surah' : 'Putar Murottal Surah'}"
              aria-label="${currentLang === 'en' ? 'Play Full Surah' : 'Putar Murottal Surah'}"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </button>
          `}

          <!-- Bookmark Icon -->
          <button class="btn-icon-circle" onclick="window.app.toggleBookmarkSurah(${number}, 1)" title="${currentLang === 'en' ? 'Bookmark Surah' : 'Tandai Surah'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'var(--color-orange-primary)' : 'none'}" stroke="${isBookmarked ? 'var(--color-orange-primary)' : 'currentColor'}" stroke-width="2">
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </button>

          <!-- Keep Screen On Toggle Button in Reader Header -->
          <button 
            class="btn-icon-circle btn-reader-keepscreen ${isKeepScreenOn ? 'active-keepscreen' : ''}" 
            onclick="window.app.toggleKeepScreenOn()" 
            title="${isKeepScreenOn ? (currentLang === 'en' ? 'Keep Screen On: ACTIVE' : 'Layar Tetap Menyala: AKTIF') : (currentLang === 'en' ? 'Keep Screen On' : 'Biarkan Layar Tetap Menyala')}"
            aria-label="Biarkan Layar Tetap Menyala"
            style="${isKeepScreenOn ? 'color: var(--color-orange-primary); background: rgba(234, 88, 12, 0.15); border-color: var(--color-orange-primary);' : ''}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>

          <!-- Settings Icon -->
          <button class="btn-icon-circle" onclick="window.app.openSettingsModal()" title="Pengaturan Tampilan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Surah Horizontal Tab Slider (Sesuai Tampilan.2.jpeg: 105. Al-Fil, 104. Al-Humazah, 103. Al-'Asr) -->
      <div class="surah-nav-tabs">
        <div class="surah-nav-tab-item" onclick="window.app.loadSurah(${prevNumber}, 1)">
          ${prevNumber}. ${prevSurahName}
        </div>
        <div class="surah-nav-tab-item active">
          ${number}. ${name}
        </div>
        <div class="surah-nav-tab-item" onclick="window.app.loadSurah(${nextNumber}, 1)">
          ${nextNumber}. ${nextSurahName}
        </div>
      </div>

      <!-- Reading Canvas (Parchment Paper or Dark Mode) -->
      <div class="reader-canvas screen-container ${settings.coloredTajweed !== false ? 'tajweed-active' : ''}" id="readerScrollArea">
        <!-- Kepala Surah & Basmalah Terpadu Sesuai Gambar Referensi Mushaf Madinah -->
        <div class="mushaf-header-banner">
          <div class="surah-ornament-card">
            <!-- Left: Rounded Pill dengan HANYA Logo Saja (Tanpa Tulisan) -->
            <div class="mushaf-header-pill mushaf-header-left" title="${revelationLabel} (Tempat Turun)">
              <span class="mushaf-pill-icon">${revelationIcon}</span>
            </div>

            <!-- Left Islamic Floral Flourish -->
            <div class="mushaf-ornament-flourish flourish-left" aria-hidden="true">
              <svg width="30" height="20" viewBox="0 0 60 40" fill="none" stroke="currentColor">
                <path d="M50 20 C40 10, 25 12, 18 20 C10 28, 5 22, 2 18 M20 20 C25 25, 35 24, 45 16 M25 15 C30 8, 42 12, 48 20" stroke-width="1.6" stroke-linecap="round"/>
                <circle cx="10" cy="20" r="2.5" fill="currentColor"/>
                <circle cx="28" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>

            <!-- Center: Arched Cartouche HANYA Tulisan Arab Saja (Lengkap Tanda Baca 114 Surah) -->
            <div class="mushaf-header-center">
              <div class="mushaf-arabic-title">${surahArabicTitle}</div>
            </div>

            <!-- Right Islamic Floral Flourish -->
            <div class="mushaf-ornament-flourish flourish-right" aria-hidden="true">
              <svg width="30" height="20" viewBox="0 0 60 40" fill="none" stroke="currentColor" style="transform: scaleX(-1);">
                <path d="M50 20 C40 10, 25 12, 18 20 C10 28, 5 22, 2 18 M20 20 C25 25, 35 24, 45 16 M25 15 C30 8, 42 12, 48 20" stroke-width="1.6" stroke-linecap="round"/>
                <circle cx="10" cy="20" r="2.5" fill="currentColor"/>
                <circle cx="28" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>

            <!-- Right: Rounded Pill with Verse Count matching Image 3 -->
            <div class="mushaf-header-pill mushaf-header-right" title="${totalVerses} Ayat">
              <span class="mushaf-verses-num">${totalVerses}</span>
              <span class="mushaf-verses-label">Ayat</span>
            </div>
          </div>

          <!-- Basmalah Calligraphy (Digabung Sesuai Gambar Referensi) -->
          ${bismillah ? `
            <div class="bismillah-calligraphy-wrap">
              <div class="bismillah-text">
                بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Daftar Ayat (List of Verses) -->
        <div class="verses-list" id="versesListContainer">
          ${(verses || []).map(verse => {
            const isPlaying = currentPlayingVerse && currentPlayingVerse.surah === number && currentPlayingVerse.verse === verse.number;
            const isLastRead = (lastRead && Number(lastRead.surahNumber) === Number(number) && Number(lastRead.ayahNumber) === Number(verse.number));
            const formattedArabic = colorizeTajweed(cleanQuranArabic(verse.arabic), isTajweed);
            return `
              <div class="verse-item-card ${isPlaying ? 'active-playing' : ''} ${isLastRead ? 'active-last-read' : ''}" id="verse-${verse.number}">
                ${isLastRead ? `
                  <div class="badge-last-read-marker" style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                    <span style="background: rgba(249, 115, 22, 0.22); color: #F97316; font-size: 11px; font-weight: 800; padding: 3px 9px; border-radius: 6px; border: 1px solid rgba(249, 115, 22, 0.45); display: inline-flex; align-items: center; gap: 4px;">
                      ${currentLang === 'en' ? '📌 LAST READ' : '📌 TERAKHIR DIBACA'}
                    </span>
                  </div>
                ` : ''}
                <!-- Baris Teks Arab & Badge Nomor -->
                <div class="verse-arabic-row">
                  <!-- Ornamen Nomor Ayat Sisi Kiri (Kartus Kubah Islami 8 Lekukan Sesuai Gambar Referensi) -->
                  <div class="verse-badge-container ${verse.number >= 100 ? 'badge-3digits' : (verse.number >= 10 ? 'badge-2digits' : 'badge-1digit')}" title="Ayat ${verse.number}">
                    <svg class="verse-badge-svg" viewBox="0 0 34 36" fill="currentColor">
                      <path d="M 17 2 C 19.5 5, 23 5.5, 26 7.5 C 28 9, 29 11, 28 13.5 C 29.5 15, 32 16, 32 18 C 32 20, 29.5 21, 28 22.5 C 29 25, 28 27, 26 28.5 C 23 30.5, 19.5 31, 17 34 C 14.5 31, 11 30.5, 8 28.5 C 6 27, 5 25, 6 22.5 C 4.5 21, 2 20, 2 18 C 2 16, 4.5 15, 6 13.5 C 5 11, 6 9, 8 7.5 C 11 5.5, 14.5 5, 17 2 Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/>
                    </svg>
                    <span class="verse-badge-number">${verse.number}</span>
                  </div>

                  <!-- Teks Arab Rasm Utsmani Madinah Autentik -->
                  <div class="verse-arabic-text" style="font-size: ${fontSize}px;">
                    ${formattedArabic}
                  </div>
                </div>

                <!-- Teks Transliterasi Latin (Bisa di-toggle di pengaturan) -->
                ${showLatin && verse.latin ? `
                  <div class="verse-latin-text" style="font-family: 'Georgia', serif !important; font-style: italic !important; margin-bottom: 0.50rem !important; font-size: ${latinFontSize}px;">
                    ${verse.latin}
                  </div>
                ` : ''}

                <!-- Terjemahan Bahasa Indonesia Standar Kemenag RI / English Sahih International Standar Al-Qur'an Digital -->
                ${showTranslation ? `
                  <div class="verse-translation-text" style="font-family: 'Georgia', serif !important; font-size: ${translationFontSize}px;">
                    ${(currentLang === 'en' && (verse.translation_en || verse.translationEn)) ? (verse.translation_en || verse.translationEn) : verse.translation}
                  </div>
                ` : ''}

                <!-- Action Toolbar Per Ayat Sesuai Permintaan Pengguna -->
                <div class="verse-quick-actions">
                  <button class="btn-verse-tool ${isPlaying ? 'playing-now' : ''}" onclick="window.app.playSingleVerse(${number}, ${verse.number})" title="${currentLang === 'en' ? `Play Recitation (${activeQariName})` : `Putar Murottal ${activeQariName}`}">
                    ${isPlaying ? (currentPlayingVerse.status === 'loading' ? (currentLang === 'en' ? '⏳ Loading...' : '⏳ Memuat...') : (currentLang === 'en' ? '⏸ Pause' : '⏸ Jeda')) : (currentLang === 'en' ? '▶ Play' : '▶ Putar')}
                  </button>
                  <button class="btn-verse-tool ${isLastRead ? 'marked-last-read' : ''}" onclick="window.app.saveLastRead(${number}, ${verse.number})" title="${currentLang === 'en' ? 'Mark Last Read' : 'Tandai Terakhir Baca'}">
                    ${isLastRead ? (currentLang === 'en' ? '✓ Last Read' : '✓ Terakhir Baca') : (currentLang === 'en' ? '📌 Last Read' : '📌 Terakhir Baca')}
                  </button>
                  <button class="btn-verse-tool" onclick="window.app.copyVerse(${number}, ${verse.number})" title="${currentLang === 'en' ? 'Copy Verse & Translation' : 'Salin Ayat & Terjemahan'}">
                    ${currentLang === 'en' ? '📋 Copy' : '📋 Salin'}
                  </button>
                  <button class="btn-verse-tool tool-share" onclick="window.app.shareVerse(${number}, ${verse.number})" title="${currentLang === 'en' ? 'Share Verse' : 'Bagikan Ayat'}">
                    ${currentLang === 'en' ? '📤 Share' : '📤 Bagikan'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Tombol Navigasi Antar-Surah di Akhir Halaman Pembacaan (End-of-Surah Navigation) -->
        <div class="surah-footer-navigation" style="margin-top: 24px; margin-bottom: 40px; display: flex; flex-direction: column; gap: 12px; padding: 0 4px;">
          ${number < 114 ? `
            <button class="btn-next-surah-card" onclick="window.app.loadSurah(${nextNumber}, 1)" style="display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.05) 100%); border: 1.5px solid rgba(249, 115, 22, 0.4); border-radius: 14px; padding: 14px 18px; cursor: pointer; color: inherit; width: 100%; box-sizing: border-box; transition: all 0.2s ease;">
              <div style="text-align: left;">
                <div style="font-size: 11px; font-weight: 700; color: #F97316; letter-spacing: 0.5px; text-transform: uppercase;">
                  ${currentLang === 'en' ? 'Continue to Next Surah →' : 'Lanjut ke Surat Berikutnya →'}
                </div>
                <div style="font-size: 15px; font-weight: 800; margin-top: 2px;">
                  ${nextNumber}. ${nextSurahName}
                </div>
              </div>
              <div style="font-size: 20px; color: #F97316;">➔</div>
            </button>
          ` : `
            <button class="btn-next-surah-card" onclick="window.app.loadSurah(1, 1)" style="display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1.5px solid rgba(16, 185, 129, 0.4); border-radius: 14px; padding: 14px 18px; cursor: pointer; color: inherit; width: 100%; box-sizing: border-box;">
              <div style="text-align: left;">
                <div style="font-size: 11px; font-weight: 700; color: #10B981; letter-spacing: 0.5px; text-transform: uppercase;">
                  ${currentLang === 'en' ? '✨ Holy Quran Completed' : '✨ Khatam 114 Surat'}
                </div>
                <div style="font-size: 15px; font-weight: 800; margin-top: 2px;">
                  ${currentLang === 'en' ? 'Return to Surah Al-Fatihah' : 'Kembali ke Surat Al-Fatihah'}
                </div>
              </div>
              <div style="font-size: 20px; color: #10B981;">↺</div>
            </button>
          `}

          ${number > 1 ? `
            <button class="btn-prev-surah-card" onclick="window.app.loadSurah(${prevNumber}, 1)" style="display: flex; align-items: center; justify-content: flex-start; gap: 10px; background: rgba(148, 163, 184, 0.08); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 10px 16px; cursor: pointer; color: inherit; width: 100%; box-sizing: border-box; font-size: 13px; font-weight: 600;">
              <span>←</span>
              <span>${currentLang === 'en' ? 'Previous:' : 'Sebelumnya:'} ${prevNumber}. ${prevSurahName}</span>
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Floating Bottom Audio Player Bar jika sedang memutar audio -->
      ${currentPlayingVerse ? `
        <div class="floating-audio-bar">
          <div class="audio-bar-info">
            <div class="audio-bar-surah">${currentLang === 'en' ? 'Surah' : 'QS.'} ${name}: ${currentLang === 'en' ? 'Verse' : 'Ayat'} ${currentPlayingVerse.verse}</div>
            <div class="audio-bar-reciter">🎙️ ${activeQariName}</div>
          </div>
          <div class="audio-bar-controls">
            <button class="btn-audio-circle" onclick="window.app.stopAudio()" title="${currentLang === 'en' ? 'Stop Audio' : 'Hentikan Audio'}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
              </svg>
            </button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function toArabicNumerals(num) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).split('').map(d => arabicDigits[Number(d)] || d).join('');
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
