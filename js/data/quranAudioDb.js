/**
 * Multi-Qari Offline Audio Database & Download Manager
 * Al-Qur'an Digital Mashendig17al
 * 
 * Mengelola penyimpanan offline audio murottal per-ayat ke IndexedDB (QuranAudioDB)
 * Mendukung multi-qori independen, unduh per-surat, unduh seluruh surat, cek status, dan hapus audio.
 */

const AUDIO_DB_NAME = 'QuranAudioDB';
const AUDIO_DB_VERSION = 1;
const STORE_AUDIO_VERSES = 'audio_verses';

/**
 * Buka atau inisialisasi IndexedDB untuk audio
 */
export function openAudioDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB tidak didukung pada browser ini.'));
    }

    const request = indexedDB.open(AUDIO_DB_NAME, AUDIO_DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_AUDIO_VERSES)) {
        const store = db.createObjectStore(STORE_AUDIO_VERSES, { keyPath: 'id' });
        store.createIndex('qari', 'qari', { unique: false });
        store.createIndex('qari_surah', ['qari', 'surah'], { unique: false });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error || new Error('Gagal membuka QuranAudioDB'));
  });
}

/**
 * Format ID unik per-ayat: {qariId}_{surah}_{verse}
 */
export function getAudioVerseKey(qariId, surah, verse) {
  return `${qariId}_${Number(surah)}_${Number(verse)}`;
}

/**
 * Simpan blob audio ayat ke IndexedDB dengan penanganan kuota penyimpanan
 */
export async function dbSaveVerseAudio(qariId, surah, verse, blob) {
  if (!qariId || !surah || !verse || !blob) return { success: false, reason: 'Invalid parameters' };
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readwrite');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const record = {
        id: getAudioVerseKey(qariId, surah, verse),
        qari: qariId,
        surah: Number(surah),
        verse: Number(verse),
        blob: blob,
        size: blob.size || 0,
        type: blob.type || 'audio/mp3',
        timestamp: Date.now()
      };
      store.put(record);

      tx.oncomplete = () => resolve({ success: true });
      tx.onerror = (e) => {
        const error = tx.error || (e.target && e.target.error);
        const isQuota = error && (error.name === 'QuotaExceededError' || error.code === 22);
        resolve({ success: false, quotaExceeded: isQuota, error: error ? error.message : 'Storage error' });
      };
      tx.onabort = () => {
        const error = tx.error;
        const isQuota = error && (error.name === 'QuotaExceededError');
        resolve({ success: false, quotaExceeded: isQuota, error: 'Transaction aborted' });
      };
    });
  } catch (err) {
    const isQuota = err && (err.name === 'QuotaExceededError');
    console.warn(`[AudioDB] Gagal menyimpan audio ${qariId} ${surah}:${verse}`, err);
    return { success: false, quotaExceeded: isQuota, error: err.message };
  }
}

/**
 * Ambil blob audio ayat dari IndexedDB
 */
export async function dbGetVerseAudio(qariId, surah, verse) {
  const key = getAudioVerseKey(qariId, surah, verse);
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readonly');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const req = store.get(key);
      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          resolve(req.result.blob);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (err) {
    return null;
  }
}

/**
 * Cek apakah ayat tertentu sudah tersedia secara offline
 */
export async function dbHasVerseAudio(qariId, surah, verse) {
  const blob = await dbGetVerseAudio(qariId, surah, verse);
  return blob !== null;
}

/**
 * Dapatkan jumlah ayat audio yang tersimpan untuk satu surat tertentu
 */
export async function dbGetSurahAudioCount(qariId, surah) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readonly');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari_surah');
      const req = index.count(IDBKeyRange.only([qariId, Number(surah)]));
      req.onsuccess = () => resolve(req.result || 0);
      req.onerror = () => resolve(0);
    });
  } catch (err) {
    return 0;
  }
}

/**
 * Cek apakah satu surat audio sudah diunduh lengkap dan seluruh nomor ayat (1..N) tersedia
 */
export async function dbIsSurahAudioDownloaded(qariId, surah, expectedVersesCount) {
  const count = await dbGetSurahAudioCount(qariId, surah);
  if (count < expectedVersesCount) return false;

  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readonly');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari_surah');
      const req = index.getAll(IDBKeyRange.only([qariId, Number(surah)]));

      req.onsuccess = () => {
        const records = req.result || [];
        if (records.length < expectedVersesCount) return resolve(false);
        const versesPresent = new Set(records.map(r => r.verse));
        for (let v = 1; v <= expectedVersesCount; v++) {
          if (!versesPresent.has(v)) {
            return resolve(false);
          }
        }
        resolve(true);
      };
      req.onerror = () => resolve(false);
    });
  } catch (err) {
    return false;
  }
}

/**
 * Dapatkan daftar nomor surat yang sudah terunduh untuk qori tertentu
 */
export async function dbGetDownloadedSurahsForQari(qariId, quranMetadataList) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readonly');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari');
      const req = index.getAll(IDBKeyRange.only(qariId));
      
      req.onsuccess = () => {
        const records = req.result || [];
        const countMap = {};
        records.forEach(r => {
          countMap[r.surah] = (countMap[r.surah] || 0) + 1;
        });

        const downloadedSurahs = [];
        for (const surahStr of Object.keys(countMap)) {
          const sNum = Number(surahStr);
          const meta = quranMetadataList ? quranMetadataList.find(m => m.number === sNum) : null;
          const expected = meta ? meta.verses : 0;
          if (expected > 0 && countMap[sNum] >= expected) {
            downloadedSurahs.push(sNum);
          }
        }
        resolve(downloadedSurahs.sort((a, b) => a - b));
      };
      req.onerror = () => resolve([]);
    });
  } catch (err) {
    return [];
  }
}

/**
 * Dapatkan estimasi total penyimpanan audio untuk qori tertentu
 */
export async function dbGetQariStorageEstimate(qariId) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readonly');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari');
      const req = index.getAll(IDBKeyRange.only(qariId));

      req.onsuccess = () => {
        const records = req.result || [];
        let totalBytes = 0;
        records.forEach(r => {
          totalBytes += (r.size || (r.blob ? r.blob.size : 0) || 0);
        });
        const sizeMb = (totalBytes / (1024 * 1024)).toFixed(1);
        resolve({
          versesCount: records.length,
          totalBytes,
          sizeMb
        });
      };
      req.onerror = () => resolve({ versesCount: 0, totalBytes: 0, sizeMb: "0.0" });
    });
  } catch (err) {
    return { versesCount: 0, totalBytes: 0, sizeMb: "0.0" };
  }
}

/**
 * Hapus seluruh audio satu surat untuk qori tertentu
 */
export async function dbDeleteSurahAudio(qariId, surah) {
  const sNum = Number(surah);
  try {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readwrite');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari_surah');
      const req = index.openCursor(IDBKeyRange.only([qariId, sNum]));

      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        }
      };

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn(`[AudioDB] Gagal menghapus audio surat ${sNum}:`, err);
    return false;
  }
}

/**
 * Hapus seluruh audio untuk qori tertentu
 */
export async function dbDeleteAllAudioForQari(qariId) {
  try {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readwrite');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const index = store.index('qari');
      const req = index.openCursor(IDBKeyRange.only(qariId));

      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        }
      };

      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn(`[AudioDB] Gagal menghapus seluruh audio ${qariId}:`, err);
    return false;
  }
}

/**
 * Hapus seluruh audio dari semua qori (Pembersihan Total Penyimpanan Audio)
 */
export async function dbDeleteAllAudio() {
  try {
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_AUDIO_VERSES, 'readwrite');
      const store = tx.objectStore(STORE_AUDIO_VERSES);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('[AudioDB] Gagal membersihkan seluruh audio:', err);
    return false;
  }
}

/**
 * Unduh single audio file dengan timeout, fallback URL, dan validasi integritas biner ketat
 * - Memeriksa status HTTP
 * - Memeriksa Content-Type (menolak text/html, json, xml)
 * - Memeriksa ukuran payload (> 1024 bytes)
 * - Memeriksa magic bytes biner (mendeteksi tag HTML / JSON / bukan audio)
 * - Memvalidasi format MP3 (ID3 tag atau MPEG frame sync header)
 */
export async function fetchAudioWithFallback(urls, timeoutMs = 12000) {
  if (!Array.isArray(urls)) urls = [urls];
  
  for (const url of urls) {
    if (!url) continue;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);

      const resp = await fetch(url, {
        signal: controller.signal,
        cache: 'force-cache'
      });
      clearTimeout(timer);

      if (!resp.ok) continue;

      // 1. Validasi Content-Type header
      const contentType = (resp.headers.get('content-type') || '').toLowerCase();
      if (
        contentType.includes('text/html') || 
        contentType.includes('application/json') || 
        contentType.includes('application/xml') || 
        contentType.includes('text/plain')
      ) {
        console.warn(`[AudioDB] Header Content-Type bukan audio (${contentType}) dari: ${url}`);
        continue;
      }

      const blob = await resp.blob();
      // 2. Validasi ukuran minimal berkas audio (> 1 KB)
      if (!blob || blob.size < 1024) {
        console.warn(`[AudioDB] Ukuran payload audio terlalu kecil (${blob ? blob.size : 0} bytes) dari: ${url}`);
        continue;
      }

      // 3. Validasi magic bytes biner
      const slice = blob.slice(0, 16);
      const buffer = await slice.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      if (bytes.length < 4) continue;

      // Tolak teks/HTML captive portal: '<' (0x3C), '{' (0x7B), '[' (0x5B)
      if (bytes[0] === 0x3C || bytes[0] === 0x7B || bytes[0] === 0x5B) {
        console.warn(`[AudioDB] Format biner payload adalah teks/HTML (bukan audio) dari: ${url}`);
        continue;
      }

      // Cek header format audio MP3 yang valid:
      // ID3 tag: 'ID3' (0x49, 0x44, 0x33)
      // MPEG frame sync: byte pertama 0xFF dan 3 bit teratas byte kedua 111 (0xE0)
      const isID3 = bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33;
      const isMpegSync = bytes[0] === 0xFF && (bytes[1] & 0xE0) === 0xE0;
      const isOgg = bytes[0] === 0x4F && bytes[1] === 0x67 && bytes[2] === 0x67 && bytes[3] === 0x53; // 'OggS'
      const isRiff = bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46; // 'RIFF'

      if (!isID3 && !isMpegSync && !isOgg && !isRiff) {
        console.warn(`[AudioDB] Header magic byte audio tidak dikenal dari: ${url}`);
        continue;
      }

      // Normalisasi blob type ke audio/mpeg jika belum disetel
      const finalBlob = (blob.type && blob.type.startsWith('audio/')) 
        ? blob 
        : new Blob([blob], { type: 'audio/mpeg' });

      return finalBlob;
    } catch (e) {
      // Coba fallback URL berikutnya
    }
  }
  return null;
}
