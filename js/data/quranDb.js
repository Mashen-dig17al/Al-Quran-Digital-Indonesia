/**
 * IndexedDB Database Manager for Full Offline Quran Dataset (114 Surahs)
 * Al-Qur'an Digital Mashendig17al - Standar Kementerian Agama RI
 * 
 * Dilengkapi Verifikasi Integritas SHA-256 Kriptografis Penuh (FIPS 180-4)
 * dan Pencocokan terhadap Dataset Referensi Resmi Kemenag RI (6.236 Ayat)
 */

import { QURAN_SURAH_LIST } from './quranMetadata.js';
import { VERIFIED_SURAH_HASHES } from './surahHashes.js';

const DB_NAME = 'QuranOfflineDB';
const DB_VERSION = 1;
const STORE_SURAHS = 'surahs';
const STORE_META = 'sync_meta';

/**
 * Standard Pure JavaScript SHA-256 Hash Implementation (FIPS 180-4)
 * Berjalan sinkron, deterministik, tanpa dependensi eksternal, kompatibel di semua WebView & Node.
 */
export function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }

  const lengthProperty = 'length';
  let i, j;
  let result = '';

  const words = [];

  let hash = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];

  const k = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];

  // Encode UTF-8 cleanly
  const utf8 = unescape(encodeURIComponent(String(ascii || '')));
  const utf8Length = utf8[lengthProperty];
  const utf8BitLength = utf8Length * 8;

  for (i = 0; i < utf8Length; i++) {
    words[i >> 2] |= (utf8.charCodeAt(i) & 0xff) << ((3 - (i % 4)) * 8);
  }

  // Append '1' bit and zeros
  words[utf8Length >> 2] |= 0x80 << ((3 - (utf8Length % 4)) * 8);
  words[(((utf8Length + 8) >> 6) << 4) + 15] = utf8BitLength;

  for (i = 0; i < words.length; i += 16) {
    const w = [];
    for (j = 0; j < 16; j++) {
      w[j] = words[i + j] || 0;
    }
    for (j = 16; j < 64; j++) {
      const s0 = rightRotate(w[j - 15], 7) ^ rightRotate(w[j - 15], 18) ^ (w[j - 15] >>> 3);
      const s1 = rightRotate(w[j - 2], 17) ^ rightRotate(w[j - 2], 19) ^ (w[j - 2] >>> 10);
      w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
    }

    let a = hash[0];
    let b = hash[1];
    let c = hash[2];
    let d = hash[3];
    let e = hash[4];
    let f = hash[5];
    let g = hash[6];
    let h = hash[7];

    for (j = 0; j < 64; j++) {
      const s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = (e & f) ^ ((~e) & g);
      const temp1 = (h + s1 + ch + k[j] + w[j]) | 0;
      const s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (s0 + maj) | 0;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) | 0;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) | 0;
    }

    hash[0] = (hash[0] + a) | 0;
    hash[1] = (hash[1] + b) | 0;
    hash[2] = (hash[2] + c) | 0;
    hash[3] = (hash[3] + d) | 0;
    hash[4] = (hash[4] + e) | 0;
    hash[5] = (hash[5] + f) | 0;
    hash[6] = (hash[6] + g) | 0;
    hash[7] = (hash[7] + h) | 0;
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j >= 0; j--) {
      const b = (hash[i] >> (8 * j)) & 255;
      result += (b < 16 ? '0' : '') + b.toString(16);
    }
  }

  return result;
}

/**
 * Serialisasi kanonikal data surat untuk penghitungan SHA-256.
 * Menyertakan nomor surat, jumlah ayat, serta nomor ayat, teks Arab lengkap, dan terjemahan lengkap setiap ayat.
 * Perubahan 1 karakter apapun pada teks Arab atau terjemahan akan mengubah hash secara total.
 */
export function serializeSurahForSha256(surah) {
  if (!surah || !Array.isArray(surah.verses)) return '';
  const num = Number(surah.number);
  const lines = [`surah:${num}`, `total_verses:${surah.verses.length}`];
  for (let i = 0; i < surah.verses.length; i++) {
    const v = surah.verses[i];
    const vNum = Number(v.number) || (i + 1);
    const ar = String(v.arabic || '').trim();
    const tr = String(v.translation || '').trim();
    lines.push(`${vNum}|${ar}|${tr}`);
  }
  return lines.join('\n');
}

/**
 * Hitung SHA-256 heksadesimal 64-karakter untuk data keseluruhan surat
 */
export function computeSurahSha256(surah) {
  const serialized = serializeSurahForSha256(surah);
  if (!serialized) return '';
  return sha256(serialized);
}

/**
 * Alias untuk kompatibilitas ke belakang
 */
export function computeSurahChecksum(surah) {
  return computeSurahSha256(surah);
}

/**
 * Buka atau inisialisasi IndexedDB
 */
export function openQuranDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB is not supported in this environment.'));
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_SURAHS)) {
        const surahsStore = db.createObjectStore(STORE_SURAHS, { keyPath: 'number' });
        surahsStore.createIndex('name', 'name', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error || new Error('Failed to open IndexedDB'));
  });
}

/**
 * Validasi integritas struktur surat sebelum disimpan
 */
function validateSurahBeforeSave(surahData, meta) {
  if (!surahData || typeof surahData !== 'object') {
    return { valid: false, reason: 'Data surat kosong atau bukan objek.' };
  }

  const num = Number(surahData.number);
  if (!num || num < 1 || num > 114) {
    return { valid: false, reason: `Nomor surat tidak valid: ${surahData.number}.` };
  }

  if (!Array.isArray(surahData.verses) || surahData.verses.length === 0) {
    return { valid: false, reason: 'Daftar ayat bukan array valid atau kosong.' };
  }

  if (meta && meta.verses && surahData.verses.length !== meta.verses) {
    return { valid: false, reason: `Jumlah ayat (${surahData.verses.length}) tidak sesuai standar Kemenag RI (${meta.verses}).` };
  }

  for (let i = 0; i < surahData.verses.length; i++) {
    const v = surahData.verses[i];
    const expectedNum = i + 1;
    if (!v || typeof v !== 'object') {
      return { valid: false, reason: `Ayat ke-${expectedNum} tidak valid.` };
    }
    if (Number(v.number) !== expectedNum) {
      return { valid: false, reason: `Urutan ayat rusak: nomor ${v.number} pada indeks ${expectedNum}.` };
    }
    if (!v.arabic || String(v.arabic).trim().length === 0) {
      return { valid: false, reason: `Teks Arab pada ayat ke-${expectedNum} kosong.` };
    }
    if (!v.translation || String(v.translation).trim().length === 0) {
      return { valid: false, reason: `Terjemahan pada ayat ke-${expectedNum} kosong.` };
    }
  }

  return { valid: true };
}

/**
 * Ambil single surah dari IndexedDB berdasarkan nomor (1 - 114)
 */
export async function dbGetSurah(surahNumber) {
  const num = Number(surahNumber);
  if (!num || num < 1 || num > 114) return null;

  try {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SURAHS, 'readonly');
      const store = tx.objectStore(STORE_SURAHS);
      const req = store.get(num);

      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn(`[IndexedDB] Error getting surah #${num}:`, err);
    return null;
  }
}

/**
 * Simpan atau perbarui single surah di IndexedDB:
 * 1. Validasi struktural ketat
 * 2. Hitung SHA-256 keseluruhan data surat
 * 3. Validasi terhadap hash referensi terverifikasi (jika tersedia)
 * 4. Tulis ke IndexedDB
 * 5. Baca ulang (read-back) dan verifikasi SHA-256 ulang
 */
export async function dbSaveSurah(surahData, meta) {
  if (!surahData || !surahData.number) return false;
  surahData.number = Number(surahData.number);

  const resolvedMeta = meta || (QURAN_SURAH_LIST ? QURAN_SURAH_LIST.find(m => m.number === surahData.number) : null);
  const validation = validateSurahBeforeSave(surahData, resolvedMeta);
  if (!validation.valid) {
    console.warn(`[IndexedDB] DITOLAK dbSaveSurah #${surahData.number}: ${validation.reason}`);
    return false;
  }

  // Hitung SHA-256 komprehensif
  const computedSha = computeSurahSha256(surahData);
  if (!computedSha) {
    console.warn(`[IndexedDB] Gagal menghitung SHA-256 untuk surat #${surahData.number}`);
    return false;
  }

  // Validasi terhadap hash referensi resmi Kemenag RI jika tersedia
  const refHashes = (typeof VERIFIED_SURAH_HASHES !== 'undefined' ? VERIFIED_SURAH_HASHES : (typeof window !== 'undefined' ? window.VERIFIED_SURAH_HASHES : null));
  if (refHashes && refHashes[surahData.number]) {
    const expectedHash = refHashes[surahData.number];
    if (computedSha !== expectedHash) {
      console.warn(`[IndexedDB] DITOLAK dbSaveSurah #${surahData.number}: Hash SHA-256 (${computedSha}) tidak cocok dengan hash referensi resmi (${expectedHash})`);
      return false;
    }
  }

  // Sematkan hash SHA-256 dan waktu simpan
  surahData._sha256 = computedSha;
  surahData._checksum = computedSha;
  surahData._savedAt = new Date().toISOString();

  try {
    const db = await openQuranDB();

    // 1. Transaksi tulis
    await new Promise((resolve, reject) => {
      const tx = db.transaction([STORE_SURAHS, STORE_META], 'readwrite');
      const store = tx.objectStore(STORE_SURAHS);
      store.put(surahData);

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });

    // 2. Read-back verification: baca ulang dan verifikasi keutuhan
    const readBack = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SURAHS, 'readonly');
      const store = tx.objectStore(STORE_SURAHS);
      const req = store.get(surahData.number);

      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });

    if (!readBack || !Array.isArray(readBack.verses) || readBack.verses.length !== surahData.verses.length) {
      console.warn(`[IndexedDB] Verifikasi pembacaan ulang gagal untuk surat #${surahData.number}`);
      try {
        const delTx = db.transaction(STORE_SURAHS, 'readwrite');
        delTx.objectStore(STORE_SURAHS).delete(surahData.number);
      } catch (e) {}
      return false;
    }

    // Verifikasi hash SHA-256 pembacaan ulang
    const readBackSha = computeSurahSha256(readBack);
    if (!readBack._sha256 || readBackSha !== readBack._sha256 || readBackSha !== computedSha) {
      console.warn(`[IndexedDB] SHA-256 mismatch pada pembacaan ulang surat #${surahData.number}`);
      try {
        const delTx = db.transaction(STORE_SURAHS, 'readwrite');
        delTx.objectStore(STORE_SURAHS).delete(surahData.number);
      } catch (e) {}
      return false;
    }

    return true;
  } catch (err) {
    console.warn(`[IndexedDB] Error saving surah #${surahData.number}:`, err);
    return false;
  }
}

/**
 * Simpan kumpulan surat secara batch
 */
export async function dbSaveAllSurahs(surahsList, quranMetadataList) {
  if (!Array.isArray(surahsList) || surahsList.length === 0) return false;

  let allSuccess = true;
  for (const s of surahsList) {
    if (s && s.number) {
      const meta = quranMetadataList ? quranMetadataList.find(m => m.number === Number(s.number)) : null;
      const ok = await dbSaveSurah(s, meta);
      if (!ok) allSuccess = false;
    }
  }
  return allSuccess;
}

/**
 * Ambil seluruh surat dari IndexedDB
 */
export async function dbGetAllSurahs() {
  try {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_SURAHS, 'readonly');
      const store = tx.objectStore(STORE_SURAHS);
      const req = store.getAll();

      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[IndexedDB] Error getting all surahs:', err);
    return [];
  }
}

/**
 * Ambil nomor surat yang tersimpan di IndexedDB
 */
export async function dbGetDownloadedSurahNumbers() {
  try {
    const db = await openQuranDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_SURAHS, 'readonly');
      const store = tx.objectStore(STORE_SURAHS);
      const req = store.getAllKeys();

      req.onsuccess = () => {
        const keys = (req.result || []).map(k => Number(k)).sort((a, b) => a - b);
        resolve(keys);
      };
      req.onerror = () => resolve([]);
    });
  } catch (err) {
    return [];
  }
}

/**
 * Hapus seluruh surat dan metadata sinkronisasi
 */
export async function dbDeleteAllSurahs() {
  try {
    const db = await openQuranDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([STORE_SURAHS, STORE_META], 'readwrite');
      tx.objectStore(STORE_SURAHS).clear();
      tx.objectStore(STORE_META).clear();

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('[IndexedDB] Error clearing database:', err);
    return false;
  }
}

/**
 * Verifikasi integritas ketat seluruh surat:
 * - Menolak data tanpa checksum SHA-256
 * - Memeriksa kecocokan SHA-256 terhadap data ayat
 * - Memeriksa kecocokan SHA-256 terhadap hash referensi resmi Kemenag RI
 * - Memeriksa kelengkapan dan urutan ayat 1..N
 * - Memeriksa teks Arab dan terjemahan tidak boleh kosong
 */
export async function dbVerifyIntegrity(quranMetadataList) {
  const metaList = quranMetadataList || QURAN_SURAH_LIST || (typeof window !== 'undefined' ? window.QURAN_SURAH_LIST : null);
  const refHashes = (typeof VERIFIED_SURAH_HASHES !== 'undefined' ? VERIFIED_SURAH_HASHES : (typeof window !== 'undefined' ? window.VERIFIED_SURAH_HASHES : null));
  const allSurahs = await dbGetAllSurahs();
  const surahsMap = new Map();
  allSurahs.forEach(s => surahsMap.set(Number(s.number), s));

  const validSurahs = [];
  const invalidSurahs = [];
  const missingSurahs = [];
  let totalVerses = 0;

  for (let i = 1; i <= 114; i++) {
    const meta = metaList ? metaList.find(m => m.number === i) : null;
    const expectedVerses = meta ? meta.verses : 0;
    const surah = surahsMap.get(i);

    if (!surah) {
      missingSurahs.push({ number: i, name: meta ? meta.name : `Surah ${i}`, reason: 'Belum diunduh' });
      continue;
    }

    const verses = surah.verses || [];
    let hasEmptyVerse = false;
    let hasSequentialError = false;

    // 1. Validasi keberadaan checksum SHA-256 (Dilarang menganggap data tanpa checksum sebagai valid)
    const storedSha = surah._sha256 || surah._checksum;
    if (!storedSha) {
      invalidSurahs.push({
        number: i,
        name: surah.name || (meta ? meta.name : `Surah ${i}`),
        reason: 'Data tidak memiliki checksum SHA-256 (belum terverifikasi)'
      });
      continue;
    }

    // 2. Validasi jumlah ayat
    if (expectedVerses > 0 && verses.length !== expectedVerses) {
      invalidSurahs.push({
        number: i,
        name: surah.name || (meta ? meta.name : `Surah ${i}`),
        expected: expectedVerses,
        actual: verses.length,
        reason: `Jumlah ayat tidak sesuai (terdapat ${verses.length}, seharusnya ${expectedVerses})`
      });
      continue;
    }

    // 3. Validasi setiap ayat
    for (let idx = 0; idx < verses.length; idx++) {
      const v = verses[idx];
      if (!v || typeof v !== 'object') {
        hasEmptyVerse = true;
        break;
      }
      if (Number(v.number) !== (idx + 1)) {
        hasSequentialError = true;
        break;
      }
      if (!v.arabic || String(v.arabic).trim().length === 0 || !v.translation || String(v.translation).trim().length === 0) {
        hasEmptyVerse = true;
        break;
      }
    }

    if (hasSequentialError) {
      invalidSurahs.push({
        number: i,
        name: surah.name || (meta ? meta.name : `Surah ${i}`),
        reason: 'Urutan nomor ayat tidak berurutan secara sekuensial (1..N)'
      });
      continue;
    }

    if (hasEmptyVerse) {
      invalidSurahs.push({
        number: i,
        name: surah.name || (meta ? meta.name : `Surah ${i}`),
        reason: 'Terdapat ayat dengan teks Arab atau terjemahan kosong'
      });
      continue;
    }

    // 4. Verifikasi kriptografis SHA-256 terhadap konten aktual
    const actualSha = computeSurahSha256(surah);
    if (actualSha !== storedSha) {
      invalidSurahs.push({
        number: i,
        name: surah.name || (meta ? meta.name : `Surah ${i}`),
        reason: 'Checksum SHA-256 tidak cocok (data ayat termodifikasi/rusak)'
      });
      continue;
    }

    // 5. Verifikasi terhadap dataset referensi resmi Kemenag RI jika tersedia
    if (refHashes && refHashes[i]) {
      const expectedRefHash = refHashes[i];
      if (actualSha !== expectedRefHash) {
        invalidSurahs.push({
          number: i,
          name: surah.name || (meta ? meta.name : `Surah ${i}`),
          reason: 'Hash SHA-256 tidak cocok dengan dataset referensi resmi Kemenag RI'
        });
        continue;
      }
    }

    validSurahs.push(i);
    totalVerses += verses.length;
  }

  const isComplete = validSurahs.length === 114 && invalidSurahs.length === 0 && totalVerses === 6236;

  return {
    total: 114,
    validCount: validSurahs.length,
    invalidCount: invalidSurahs.length,
    missingCount: missingSurahs.length,
    totalVerses,
    isComplete,
    validSurahs,
    invalidSurahs,
    missingSurahs,
    timestamp: new Date().toISOString()
  };
}

/**
 * Dapatkan status komprehensif dataset offline berdasarkan verifikasi nyata
 */
export async function dbGetDatasetStatus(quranMetadataList) {
  const metaList = quranMetadataList || QURAN_SURAH_LIST || (typeof window !== 'undefined' ? window.QURAN_SURAH_LIST : null);
  const integrity = await dbVerifyIntegrity(metaList);

  const invalidNumbers = integrity.invalidSurahs.map(s => s.number);
  const missingNumbers = integrity.missingSurahs.map(s => s.number);

  // Targets to download = both missing AND invalid surahs
  const needDownloadNumbers = [...new Set([...missingNumbers, ...invalidNumbers])].sort((a, b) => a - b);

  // Hitung estimasi penggunaan penyimpanan
  let estimatedBytes = 0;
  if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.estimate) {
    try {
      const est = await navigator.storage.estimate();
      estimatedBytes = est.usage || 0;
    } catch(e) {}
  }

  // Fallback: estimasi 26KB per valid surah
  if (!estimatedBytes && integrity.validCount > 0) {
    estimatedBytes = integrity.validCount * 26000;
  }

  const percent = Math.round((integrity.validCount / 114) * 100);

  return {
    total: 114,
    validCount: integrity.validCount,
    invalidCount: integrity.invalidCount,
    missingCount: integrity.missingCount,
    totalVerses: integrity.totalVerses,
    downloadedCount: integrity.validCount, // Status WAJIB mencerminkan surat yang lolos validasi SHA-256
    downloadedNumbers: integrity.validSurahs,
    missingNumbers,
    invalidNumbers,
    needDownloadNumbers,
    isComplete: integrity.isComplete,
    percent,
    estimatedSizeMb: (estimatedBytes / (1024 * 1024)).toFixed(1),
    timestamp: integrity.timestamp
  };
}

/**
 * Inisialisasi seeding surat bawaan offline ke IndexedDB:
 * - Menyimpan seluruh surat bawaan lengkap dengan SHA-256
 * - Jika data yang ada di IndexedDB tidak memiliki SHA-256 atau rusak, timpakan dengan versi valid
 */
export async function dbSeedBundledSurahs(offlineSurahsMap, quranMetadataList) {
  if (!offlineSurahsMap) return 0;
  const metaList = quranMetadataList || QURAN_SURAH_LIST || (typeof window !== 'undefined' ? window.QURAN_SURAH_LIST : null);
  let seededCount = 0;

  try {
    for (const key of Object.keys(offlineSurahsMap)) {
      const num = Number(key);
      const surahData = offlineSurahsMap[key];
      const meta = metaList ? metaList.find(m => m.number === num) : null;

      if (!surahData || !Array.isArray(surahData.verses)) continue;

      // Periksa data yang ada di IndexedDB
      const existing = await dbGetSurah(num);
      let needsSeed = false;

      if (!existing) {
        needsSeed = true;
      } else {
        // Jika data lama tidak memiliki SHA-256, atau jumlah ayat tidak sesuai, atau hash tidak cocok:
        const existingSha = existing._sha256 || existing._checksum;
        if (!existingSha) {
          needsSeed = true;
        } else if (meta && (!Array.isArray(existing.verses) || existing.verses.length !== meta.verses)) {
          needsSeed = true;
        } else if (computeSurahSha256(existing) !== existingSha) {
          needsSeed = true;
        }
      }

      if (needsSeed && meta && surahData.verses.length === meta.verses) {
        const copy = JSON.parse(JSON.stringify(surahData));
        const ok = await dbSaveSurah(copy, meta);
        if (ok) {
          seededCount++;
        }
      }
    }
  } catch (e) {
    console.warn('[IndexedDB] Auto-seed bundled surahs failed:', e);
  }

  return seededCount;
}
