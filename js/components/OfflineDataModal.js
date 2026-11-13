/**
 * Komponen Pengelola Data Al-Qur'an & Audio Murottal Offline (IndexedDB Manager)
 * Al-Qur'an Digital Mashendig17al - Standar Kementerian Agama RI
 * 
 * Mengelola unduhan 114 surat teks dan audio murottal multi-qori independen ke IndexedDB.
 */

import { QARI_LIST } from './SettingsModal.js';

export function renderOfflineDataModal(
  status = {}, 
  isDownloading = false, 
  downloadProgress = {}, 
  verificationResult = null, 
  language = "id",
  audioData = {},
  currentSurahNum = 1
) {
  const isEn = language === "en";
  const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

  // Active Tab ('text' atau 'audio')
  const activeTab = audioData.activeTab || 'text';
  const selectedQariId = audioData.selectedQari || 'alafasy';
  const qariList = audioData.qariList || QARI_LIST || [];
  const currentQari = qariList.find(q => q.id === selectedQariId) || qariList[0] || { id: 'alafasy', name: 'Syeikh Misyari Rasyid Al-Afasy' };

  // Status Teks
  const total = status.total || 114;
  const downloadedCount = status.downloadedCount || 0;
  const missingCount = status.missingCount !== undefined ? status.missingCount : (total - downloadedCount);
  const percent = status.percent !== undefined ? status.percent : Math.round((downloadedCount / total) * 100);
  const isComplete = status.isComplete || downloadedCount === total;
  const sizeMb = status.estimatedSizeMb || (downloadedCount * 0.025).toFixed(1);

  // Progres Teks
  const activePercent = isDownloading ? (downloadProgress.percent || percent) : percent;
  const activeText = isDownloading
    ? (downloadProgress.statusText || (isEn ? `Downloading surahs... (${downloadProgress.current || 0}/${total})` : `Mengunduh surat... (${downloadProgress.current || 0}/${total})`))
    : (isComplete 
        ? (isEn ? "✓ All 114 Surahs (6,236 Verses) are 100% available offline." : "✓ Seluruh 114 Surat (6.236 Ayat) 100% siap dibaca tanpa internet.")
        : (isEn ? `${downloadedCount} of 114 surahs downloaded.` : `${downloadedCount} dari 114 surat tersimpan di IndexedDB.`));

  // Status Audio
  const downloadedAudioSurahs = audioData.downloadedSurahs || [];
  const audioSurahsCount = downloadedAudioSurahs.length;
  const audioStorageMb = audioData.storageSizeMb || "0.0";
  const audioVersesCount = audioData.audioVersesCount || 0;
  const isAudioDownloading = audioData.isAudioDownloading || false;
  const audioProgress = audioData.audioProgress || {};
  const audioPercent = isAudioDownloading ? (audioProgress.percent || 0) : Math.round((audioSurahsCount / 114) * 100);
  const isSurahAudioCached = downloadedAudioSurahs.includes(Number(currentSurahNum));

  return `
    <div class="modal-backdrop open" id="offlineDataModal" onclick="if(event.target===this) window.app.closeOfflineModal()">
      <div class="modal-dialog-box modal-offline-dialog" style="max-width: 500px; max-height: 90vh; overflow-y: auto;">
        
        <!-- Header Modal -->
        <div class="modal-header-bar" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px;">💾</span>
            <div>
              <div class="modal-header-title" style="font-size: 15px; font-weight: 800; color: #FFFFFF;">
                ${isEn ? 'Offline Data & Audio Manager' : 'Pengelola Data & Audio Offline'}
              </div>
              <div style="font-size: 11px; color: #94A3B8;">
                ${isEn ? 'IndexedDB Storage for Quran & Multi-Qari Murottal' : 'Penyimpanan Lokal Cepat IndexedDB (Teks & Audio)'}
              </div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="window.app.closeOfflineModal()" aria-label="Tutup" style="background: none; border: none; color: #94A3B8; font-size: 20px; cursor: pointer; padding: 4px;">✕</button>
        </div>

        <!-- Tab Navigasi: Teks Al-Qur'an vs Audio Murottal -->
        <div style="display: flex; gap: 8px; margin-bottom: 14px; background: rgba(0,0,0,0.25); padding: 4px; border-radius: 12px;">
          <button 
            type="button"
            onclick="window.app.setOfflineTab('text')"
            style="flex: 1; padding: 8px 12px; border-radius: 9px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s ease; ${activeTab === 'text' ? 'background: var(--color-orange-primary); color: #FFF; box-shadow: 0 2px 8px rgba(234, 88, 12, 0.4);' : 'background: transparent; color: #94A3B8;'}">
            📖 ${isEn ? 'Quran Text (114)' : 'Teks Al-Qur\'an'}
          </button>
          <button 
            type="button"
            onclick="window.app.setOfflineTab('audio')"
            style="flex: 1; padding: 8px 12px; border-radius: 9px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s ease; ${activeTab === 'audio' ? 'background: var(--color-orange-primary); color: #FFF; box-shadow: 0 2px 8px rgba(234, 88, 12, 0.4);' : 'background: transparent; color: #94A3B8;'}">
            🎧 ${isEn ? 'Offline Audio (Multi-Qari)' : 'Audio Murottal'}
          </button>
        </div>

        <!-- Baris Status Koneksi & Storage -->
        <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
          <span class="status-pill-badge ${isOnline ? 'pill-online' : 'pill-offline'}" id="offlineConnectionBadge" style="display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; ${isOnline ? 'background: rgba(34, 197, 94, 0.15); color: #4ADE80; border: 1px solid rgba(34, 197, 94, 0.3);' : 'background: rgba(239, 68, 68, 0.15); color: #F87171; border: 1px solid rgba(239, 68, 68, 0.3);'}">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: ${isOnline ? '#4ADE80' : '#F87171'};"></span>
            ${isOnline ? (isEn ? 'Online (Connected)' : 'Terhubung Internet (Online)') : (isEn ? 'Offline Mode' : 'Mode Offline (Tanpa Internet)')}
          </span>
          <span class="status-pill-badge" style="display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; background: rgba(59, 130, 246, 0.15); color: #60A5FA; border: 1px solid rgba(59, 130, 246, 0.3);">
            <span>📦</span> IndexedDB Database
          </span>
        </div>

        ${activeTab === 'text' ? `
          <!-- ================= TAB 1: TEKS AL-QUR'AN ================= -->
          <!-- Kartu Ringkasan Statistik Dataset Teks -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
            <div class="stat-mini-card" style="background: rgba(17, 34, 51, 0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
              <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">${isEn ? 'Stored Surahs' : 'Surat Tersimpan'}</div>
              <div style="font-size: 20px; font-weight: 800; color: #EA580C;" id="offlineDownloadedCount">
                ${downloadedCount} <span style="font-size: 12px; color: #94A3B8; font-weight: 600;">/ ${total}</span>
              </div>
              <div style="font-size: 10px; color: ${isComplete ? '#4ADE80' : '#F59E0B'}; font-weight: 700; margin-top: 2px;">
                ${isComplete ? (isEn ? '✓ 100% Complete' : '✓ 100% Lengkap') : (isEn ? `${missingCount} missing` : `${missingCount} belum tersimpan`)}
              </div>
            </div>

            <div class="stat-mini-card" style="background: rgba(17, 34, 51, 0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
              <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">${isEn ? 'Storage Usage' : 'Penggunaan Memori'}</div>
              <div style="font-size: 20px; font-weight: 800; color: #38BDF8;">
                ~${sizeMb} <span style="font-size: 12px; color: #94A3B8; font-weight: 600;">MB</span>
              </div>
              <div style="font-size: 10px; color: #94A3B8; margin-top: 2px;">
                ${isEn ? 'QuranOfflineDB' : 'Database Teks 6.236 Ayat'}
              </div>
            </div>
          </div>

          <!-- Wadah Progress Bar Teks -->
          <div style="background: rgba(17, 34, 51, 0.8); border: 1.5px solid ${isComplete ? 'rgba(34, 197, 94, 0.4)' : 'rgba(234, 88, 12, 0.3)'}; border-radius: 14px; padding: 14px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 12px; font-weight: 700; color: #FFFFFF;" id="offlineProgressTitle">
                ${isDownloading 
                  ? (isEn ? '📥 Downloading in progress...' : '📥 Proses Unduh Teks Sedang Berjalan...') 
                  : (isComplete ? (isEn ? '✅ Complete Offline Ready' : '✅ Siap Offline 100%') : (isEn ? '⚡ Offline Dataset Status' : '⚡ Status Dataset Offline'))
                }
              </span>
              <span style="font-size: 13px; font-weight: 800; color: ${isComplete ? '#4ADE80' : 'var(--color-orange-primary)'};" id="offlineProgressPercent">
                ${activePercent}%
              </span>
            </div>

            <div class="offline-progress-track" style="width: 100%; height: 10px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; position: relative;">
              <div class="offline-progress-bar" id="offlineProgressBar" style="width: ${activePercent}%; height: 100%; background: linear-gradient(90deg, #EA580C 0%, #F59E0B 100%); border-radius: 10px; transition: width 0.3s ease;"></div>
            </div>

            <div style="font-size: 11px; color: #94A3B8; margin-top: 8px; line-height: 1.4;" id="offlineStatusDetailText">
              ${activeText}
            </div>
          </div>

          <!-- Wadah Tombol Aksi Teks -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            ${!isComplete || isDownloading ? `
              <button 
                class="btn-offline-action btn-offline-primary" 
                id="btnToggleDownloadOffline"
                onclick="window.app.toggleOfflineDownload()"
                style="width: 100%; padding: 12px 16px; border-radius: 12px; font-size: 13px; font-weight: 800; cursor: pointer; border: none; background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%); color: #FFF; box-shadow: 0 4px 12px rgba(234, 88, 12, 0.35); display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
                <span>${isDownloading ? '⏸️' : '📥'}</span>
                <span>${isDownloading 
                  ? (isEn ? 'Pause / Stop Download' : 'Jeda / Hentikan Unduhan') 
                  : (downloadedCount > 0 
                      ? (isEn ? `Resume Download Remaining Surahs (${missingCount})` : `Lanjutkan Unduh Surat Tersisa (${missingCount} Surat)`) 
                      : (isEn ? 'Download All 114 Surahs (Full Offline)' : 'Unduh Seluruh 114 Surat (Offline Lengkap)'))
                }</span>
              </button>
            ` : ''}

            <button 
              class="btn-offline-action btn-offline-secondary" 
              onclick="window.app.verifyOfflineIntegrity()"
              style="width: 100%; padding: 10px 16px; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; border: 1.5px solid rgba(59, 130, 246, 0.4); background: rgba(59, 130, 246, 0.1); color: #60A5FA; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
              <span>🔍</span>
              <span>${isEn ? 'Verify Dataset Integrity (6,236 Verses)' : 'Periksa & Verifikasi Integritas Data (6.236 Ayat)'}</span>
            </button>

            <button 
              class="btn-offline-action btn-offline-danger" 
              onclick="window.app.resetOfflineData()"
              style="width: 100%; padding: 9px 16px; border-radius: 12px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.08); color: #F87171; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
              <span>🔄</span>
              <span>${isEn ? 'Re-download All / Reset Text Storage' : 'Unduh Ulang Data Teks / Reset Database'}</span>
            </button>
          </div>

          <!-- Kotak Hasil Verifikasi Integritas (Jika Ada) -->
          <div id="offlineVerificationResultArea">
            ${verificationResult ? renderVerificationResultHtml(verificationResult, isEn) : ''}
          </div>
        ` : `
          <!-- ================= TAB 2: AUDIO MUROTTAL (MULTI-QORI) ================= -->
          <!-- Pilihan Qori Audio -->
          <div style="background: rgba(17, 34, 51, 0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px; margin-bottom: 14px;">
            <div style="font-size: 11px; color: #94A3B8; font-weight: 700; margin-bottom: 8px;">
              🎙️ ${isEn ? 'Select Qari for Offline Download:' : 'Pilih Qori Murottal:'}
            </div>
            <select 
              id="offlineQariSelect" 
              onchange="window.app.setOfflineQari(this.value)"
              style="width: 100%; padding: 10px 12px; border-radius: 10px; background: #0B192C; color: #FFFFFF; border: 1.5px solid rgba(234, 88, 12, 0.4); font-size: 13px; font-weight: 700; cursor: pointer; outline: none;">
              ${qariList.map(q => `
                <option value="${q.id}" ${q.id === selectedQariId ? 'selected' : ''}>
                  ${q.icon || '🎙️'} ${q.name} (${q.quality || 'HD Studio'})
                </option>
              `).join('')}
            </select>
          </div>

          <!-- Statistik Audio Qori Terpilih -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
            <div class="stat-mini-card" style="background: rgba(17, 34, 51, 0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
              <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">${isEn ? 'Downloaded Surahs' : 'Surat Terunduh'}</div>
              <div style="font-size: 20px; font-weight: 800; color: #EA580C;">
                ${audioSurahsCount} <span style="font-size: 12px; color: #94A3B8; font-weight: 600;">/ 114</span>
              </div>
              <div style="font-size: 10px; color: #94A3B8; margin-top: 2px;">
                ${audioVersesCount} ${isEn ? 'verses cached' : 'ayat audio'}
              </div>
            </div>

            <div class="stat-mini-card" style="background: rgba(17, 34, 51, 0.6); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 12px;">
              <div style="font-size: 11px; color: #94A3B8; margin-bottom: 4px;">${isEn ? 'Audio Storage' : 'Memori Audio'}</div>
              <div style="font-size: 20px; font-weight: 800; color: #38BDF8;">
                ~${audioStorageMb} <span style="font-size: 12px; color: #94A3B8; font-weight: 600;">MB</span>
              </div>
              <div style="font-size: 10px; color: #94A3B8; margin-top: 2px;">
                ${isEn ? 'QuranAudioDB (Offline)' : 'QuranAudioDB Lokal'}
              </div>
            </div>
          </div>

          <!-- Wadah Progress Bar Audio -->
          <div style="background: rgba(17, 34, 51, 0.8); border: 1.5px solid ${audioSurahsCount === 114 ? 'rgba(34, 197, 94, 0.4)' : 'rgba(234, 88, 12, 0.3)'}; border-radius: 14px; padding: 14px; margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 12px; font-weight: 700; color: #FFFFFF;">
                ${isAudioDownloading 
                  ? (isEn ? '📥 Downloading audio in progress...' : '📥 Proses Unduh Audio Sedang Berjalan...') 
                  : (audioSurahsCount === 114 
                      ? (isEn ? '✅ All 114 Surahs Audio Offline' : '✅ Audio Seluruh 114 Surat Tersedia Offline') 
                      : (isEn ? '🎧 Qari Audio Offline Status' : '🎧 Status Unduhan Audio Qori'))
                }
              </span>
              <span style="font-size: 13px; font-weight: 800; color: ${audioSurahsCount === 114 ? '#4ADE80' : 'var(--color-orange-primary)'};">
                ${audioPercent}%
              </span>
            </div>

            <div class="offline-progress-track" style="width: 100%; height: 10px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; position: relative;">
              <div class="offline-progress-bar" style="width: ${audioPercent}%; height: 100%; background: linear-gradient(90deg, #EA580C 0%, #38BDF8 100%); border-radius: 10px; transition: width 0.3s ease;"></div>
            </div>

            <div style="font-size: 11px; color: #94A3B8; margin-top: 8px; line-height: 1.4;">
              ${isAudioDownloading 
                ? (audioProgress.statusText || (isEn ? `Downloading audio verses (${audioProgress.current || 0}/${audioProgress.total || 0})...` : `Mengunduh audio ayat (${audioProgress.current || 0}/${audioProgress.total || 0})...`))
                : (audioSurahsCount === 114 
                    ? (isEn ? `✓ Complete studio master audio for ${currentQari.name} is stored offline.` : `✓ Seluruh 114 surat audio untuk ${currentQari.name} siap diputar offline.`)
                    : (isEn ? `${audioSurahsCount} of 114 surahs audio cached for ${currentQari.name}.` : `${audioSurahsCount} dari 114 surat audio tersimpan untuk ${currentQari.name}.`))
              }
            </div>
          </div>

          <!-- Pilihan Unduh Surat Tertentu atau Seluruh Surat -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
            <!-- Tombol Unduh Surat Ini -->
            <button 
              class="btn-offline-action btn-offline-primary" 
              onclick="window.app.toggleSurahAudioDownload(${currentSurahNum})"
              style="width: 100%; padding: 12px 16px; border-radius: 12px; font-size: 12.5px; font-weight: 800; cursor: pointer; border: none; background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%); color: #FFF; box-shadow: 0 4px 12px rgba(234, 88, 12, 0.35); display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>${isSurahAudioCached ? '✅' : '📥'}</span>
              <span>
                ${isSurahAudioCached 
                  ? (isEn ? `Surah #${currentSurahNum} Audio Ready Offline (Re-download)` : `Audio Surat #${currentSurahNum} Sudah Tersimpan (Unduh Ulang)`)
                  : (isEn ? `Download Audio for Current Surah (#${currentSurahNum})` : `Unduh Audio Surat yang Sedang Dibuka (Surat #${currentSurahNum})`)
                }
              </span>
            </button>

            <!-- Tombol Unduh Seluruh 114 Surat Audio -->
            <button 
              class="btn-offline-action btn-offline-secondary" 
              onclick="window.app.toggleAllAudioDownload()"
              style="width: 100%; padding: 11px 16px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; border: 1.5px solid rgba(234, 88, 12, 0.4); background: rgba(234, 88, 12, 0.12); color: var(--color-orange-primary); display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>${isAudioDownloading ? '⏸️' : '🎧'}</span>
              <span>
                ${isAudioDownloading 
                  ? (isEn ? 'Pause / Stop Audio Download' : 'Jeda / Hentikan Unduhan Audio') 
                  : (audioSurahsCount > 0 
                      ? (isEn ? `Resume Download Remaining Audio (${114 - audioSurahsCount} Surahs)` : `Lanjutkan Unduh Audio Tersisa (${114 - audioSurahsCount} Surat)`) 
                      : (isEn ? `Download All 114 Surahs Audio (${currentQari.name})` : `Unduh Seluruh 114 Surat Audio (${currentQari.name})`))
                }
              </span>
            </button>

            <!-- Opsi Hapus Audio Surat Ini atau Seluruh Audio Qori Ini -->
            <div style="display: flex; gap: 8px; margin-top: 4px;">
              ${isSurahAudioCached ? `
                <button 
                  onclick="window.app.deleteSurahAudio(${currentSurahNum})"
                  style="flex: 1; padding: 8px 12px; border-radius: 10px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.35); background: rgba(239, 68, 68, 0.08); color: #F87171;">
                  🗑️ ${isEn ? `Delete Surah #${currentSurahNum}` : `Hapus Audio Surat #${currentSurahNum}`}
                </button>
              ` : ''}

              ${audioSurahsCount > 0 ? `
                <button 
                  onclick="window.app.deleteAllAudioForCurrentQari()"
                  style="flex: 1; padding: 8px 12px; border-radius: 10px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid rgba(239, 68, 68, 0.35); background: rgba(239, 68, 68, 0.08); color: #F87171;">
                  🗑️ ${isEn ? `Delete All Audio (${currentQari.name})` : `Hapus Seluruh Audio Qori Ini`}
                </button>
              ` : ''}
            </div>
          </div>
        `}

        <!-- Penjelasan Fitur & Keamanan Data -->
        <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 10px 12px; font-size: 11px; color: #94A3B8; line-height: 1.5; margin-top: 8px;">
          <div style="font-weight: 700; color: var(--color-orange-primary); margin-bottom: 2px;">
            ${isEn ? '💡 100% Offline Multi-Qari Guarantee' : '💡 Jaminan Audio Offline Multi-Qori'}
          </div>
          <div>
            ${isEn 
              ? '• Each Qari\'s audio is stored in an independent IndexedDB store.<br/>• Downloaded audio can be played completely offline without internet.<br/>• Updates will never overwrite or erase your offline Quran or audio collections.'
              : '• Setiap audio Qori disimpan secara terpisah dan independen di IndexedDB (QuranAudioDB).<br/>• Setelah terunduh, murottal dapat diputar lancar 100% tanpa sambungan internet.<br/>• Pembaruan aplikasi aman dan tidak akan menghapus data Al-Qur\'an maupun audio yang telah Anda unduh.'}
          </div>
        </div>

      </div>
    </div>
  `;
}

export function renderVerificationResultHtml(res, isEn = false) {
  if (!res) return '';

  if (res.isComplete) {
    return `
      <div style="background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.35); border-radius: 12px; padding: 12px; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; color: #4ADE80; font-weight: 800; font-size: 13px;">
          <span>✅</span>
          <span>${isEn ? 'Dataset Validated Successfully!' : 'Integritas Data Sempurna & Sahih!'}</span>
        </div>
        <div style="font-size: 11px; color: #E2E8F0; margin-top: 4px; line-height: 1.4;">
          ${isEn 
            ? `All 114 surahs and 6,236 verses are fully verified against official standard verse counts.` 
            : `Seluruh 114 surat dengan total 6.236 ayat telah diverifikasi lengkap dan valid sesuai standar Kementerian Agama RI.`}
        </div>
      </div>
    `;
  }

  return `
    <div style="background: rgba(234, 88, 12, 0.12); border: 1px solid rgba(234, 88, 12, 0.35); border-radius: 12px; padding: 12px; margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 8px; color: var(--color-orange-primary); font-weight: 800; font-size: 13px;">
        <span>ℹ️</span>
        <span>${isEn ? 'Dataset Status Summary' : 'Hasil Pemeriksaan Data'}</span>
      </div>
      <div style="font-size: 11px; color: #E2E8F0; margin-top: 4px; line-height: 1.4;">
        ${isEn 
          ? `Valid Surahs: ${res.validCount}/114 (${res.totalVerses} verses). Missing: ${res.missingCount}. Click download to complete remaining surahs.` 
          : `Surat Valid: ${res.validCount}/114 (${res.totalVerses} ayat). Belum diunduh: ${res.missingCount} surat. Silakan klik tombol unduh untuk melengkapi.`}
      </div>
    </div>
  `;
}
