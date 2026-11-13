/**
 * Komponen Beranda / Home Screen
 * Mereplikasi tampilan Tampilan.1.jpeg dengan peningkatan modern,
 * kombinasi warna Biru Navy, Putih, Hitam, dan Orange.
 */

import { t } from '../data/i18n.js';

export function renderHomeScreen(state) {
  const lang = state?.settings?.language || "id";
  const isEn = lang === "en";

  const lastRead = state.lastRead || {
    surahNumber: 1,
    surahName: "Al-Fatihah",
    ayahNumber: 1,
    juz: 1,
    page: 1
  };

  const nextPrayerInfo = state.nextPrayerInfo || {
    cityName: isEn ? "Jakarta" : "DKI Jakarta",
    nextName: isEn ? "Dhuhr" : "Dzuhur",
    countdown: isEn ? "45m left" : "45m lagi",
    time: "11:43"
  };

  const prayerName = isEn 
    ? (t(nextPrayerInfo.nextKey || nextPrayerInfo.nextName?.toLowerCase(), 'en') || nextPrayerInfo.nextName) 
    : nextPrayerInfo.nextName;

  return `
    <div class="home-bg-wrapper">
      <!-- Ornamen Siluet Masjid & Bintang -->
      <div class="home-mosque-silhouette" style="background-image: radial-gradient(circle at 50% 30%, rgba(30, 62, 98, 0.4) 0%, transparent 70%);">
        <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="none" style="opacity: 0.25;">
          <!-- Siluet Kubah & Menara Masjid -->
          <path d="M 200,80 Q 230,140 240,190 L 160,190 Q 170,140 200,80 Z" fill="#38BDF8" />
          <circle cx="200" cy="72" r="4" fill="#F97316" />
          <path d="M 120,120 L 135,120 L 135,210 L 120,210 Z" fill="#38BDF8" />
          <path d="M 115,120 Q 127.5,95 140,120 Z" fill="#38BDF8" />
          <path d="M 265,120 L 280,120 L 280,210 L 265,210 Z" fill="#38BDF8" />
          <path d="M 260,120 Q 272.5,95 285,120 Z" fill="#38BDF8" />
        </svg>
      </div>

      <!-- Action Bar Atas: Brand AL-QUR'AN DIGITAL INDONESIA Terpusat di Bagian Tengah Saja -->
      <div class="home-top-action-bar">
        <div class="home-brand-pill">
          <span class="home-brand-dot"></span>
          <span class="home-brand-text">${isEn ? 'AL-QURAN DIGITAL INDONESIA' : "AL-QUR'AN DIGITAL INDONESIA"}</span>
        </div>
      </div>

      <!-- Header Kaligrafi & Icon Al-Qur'an (Sesuai Tampilan.1.jpeg) -->
      <div class="home-header">
        <div class="arabic-calligraphy-title">
          ٱلْقُرْآنُ ٱلْكَرِيمُ
        </div>
        
        <div class="quran-stand-icon-wrap">
          <!-- Logo Al-Qur'an & Rehal Vektor FHD / Ultra-HD (Tajam & Presisi Tinggi) -->
          <svg class="quran-stand-icon" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
            <defs>
              <linearGradient id="homeQStandTeal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#5EEAD4"/>
                <stop offset="50%" stop-color="#2DD4BF"/>
                <stop offset="100%" stop-color="#0D9488"/>
              </linearGradient>
              <linearGradient id="homeQStandPage" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(45, 212, 191, 0.28)"/>
                <stop offset="100%" stop-color="rgba(13, 148, 136, 0.12)"/>
              </linearGradient>
              <linearGradient id="homeQGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FDE68A"/>
                <stop offset="100%" stop-color="#D97706"/>
              </linearGradient>
            </defs>

            <!-- Halaman Mushaf Terbuka -->
            <path d="M12 28 C26 21, 41 23, 48 31 C55 23, 70 21, 84 28 L84 62 C70 56, 55 58, 48 66 C41 58, 26 56, 12 62 Z" 
                  fill="url(#homeQStandPage)" 
                  stroke="url(#homeQStandTeal)" 
                  stroke-width="3.5" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>

            <!-- Garis Tulang Tengah Mushaf -->
            <path d="M48 31 L48 66" stroke="url(#homeQStandTeal)" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Kontur Halaman Layer 2 (Efek Lembaran Kertas Bertingkat) -->
            <path d="M18 34 C28 29, 39 31, 45 37" stroke="url(#homeQStandTeal)" stroke-width="2" stroke-linecap="round" opacity="0.75"/>
            <path d="M78 34 C68 29, 57 31, 51 37" stroke="url(#homeQStandTeal)" stroke-width="2" stroke-linecap="round" opacity="0.75"/>

            <!-- Kaki Rehal Menyilang Bawah -->
            <path d="M32 66 L18 86" stroke="url(#homeQStandTeal)" stroke-width="3.8" stroke-linecap="round"/>
            <path d="M64 66 L78 86" stroke="url(#homeQStandTeal)" stroke-width="3.8" stroke-linecap="round"/>

            <!-- Palang Penopang Rehal Bawah -->
            <path d="M22 77 L74 77" stroke="url(#homeQStandTeal)" stroke-width="3.5" stroke-linecap="round"/>

            <!-- Ornamen Arch Mihrab Emas di Bawah Rehal -->
            <path d="M41 77 Q48 70 55 77" stroke="url(#homeQGoldAccent)" stroke-width="2.5" stroke-linecap="round" fill="none"/>

            <!-- Aksen Titik Emas Puncak Mushaf -->
            <circle cx="48" cy="22" r="2.2" fill="url(#homeQGoldAccent)"/>
          </svg>
        </div>
      </div>

      <!-- Mini Widget Jadwal Sholat -->
      <div class="prayer-mini-banner" onclick="window.app.navigate('prayer')">
        <div class="prayer-mini-info">
          <div class="prayer-mini-city">📍 ${nextPrayerInfo.cityName}</div>
          <div class="prayer-mini-next" id="homePrayerNextText">${isEn ? 'Time to Next Prayer:' : 'Menuju Waktu Sholat Berikutnya:'} <b>${prayerName}</b> (${nextPrayerInfo.countdown})</div>
        </div>
        <div class="prayer-mini-time" id="homePrayerTimeText">${nextPrayerInfo.time}</div>
      </div>

      <!-- Banner Status Data Al-Qur'an Offline (IndexedDB) -->
      <div class="offline-sync-badge-bar" onclick="window.app.openOfflineModal()">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 15px;">💾</span>
          <span class="offline-sync-text" id="homeOfflineSyncText">
            ${state.offlineDatasetStatus && state.offlineDatasetStatus.isComplete 
              ? (isEn ? '✓ Offline Data: 114/114 Surahs Ready (100%)' : '✓ Data Offline: 114/114 Surat Siap (100%)') 
              : (isEn ? `Offline Data: ${state.offlineDatasetStatus ? state.offlineDatasetStatus.downloadedCount : 10}/114 Surahs Saved` : `Data Offline: ${state.offlineDatasetStatus ? state.offlineDatasetStatus.downloadedCount : 10}/114 Surat Tersimpan`)}
          </span>
        </div>
        <span class="offline-sync-action-btn">
          ${state.offlineDatasetStatus && state.offlineDatasetStatus.isComplete ? (isEn ? 'Manage →' : 'Kelola →') : (isEn ? 'Download All →' : 'Unduh Lengkap →')}
        </span>
      </div>

      <!-- Tombol Menu Utama (6 Tombol: BACA QURAN, TERAKHIR BACA, PENCARIAN, JADWAL SHOLAT, PENGATURAN, HADITS SHAHIH) -->
      <div class="menu-buttons-list">
        <button class="menu-button-item" onclick="window.app.navigate('surahList')">
          📖 ${isEn ? 'READ QURAN' : 'BACA AL-QURAN'}
        </button>

        <button class="menu-button-item" onclick="window.app.continueLastRead()" style="display: flex; align-items: center; justify-content: space-between; padding: 0 16px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>🔖</span>
            <span>${isEn ? 'LAST READ' : 'TERAKHIR BACA'}</span>
          </div>
          ${lastRead && lastRead.surahNumber ? `
            <span style="font-size: 11.5px; background: rgba(249, 115, 22, 0.22); color: #F97316; padding: 3px 10px; border-radius: 8px; font-weight: 700; border: 1px solid rgba(249, 115, 22, 0.35);">
              ${isEn ? 'Surah' : 'QS.'} ${lastRead.surahName || (isEn ? 'Surah ' + lastRead.surahNumber : 'Surat ' + lastRead.surahNumber)}: ${lastRead.ayahNumber}
            </span>
          ` : ''}
        </button>

        <button class="menu-button-item" onclick="window.app.navigate('search')">
          🔍 ${isEn ? 'VERSE SEARCH' : 'PENCARIAN'}
        </button>

        <button class="menu-button-item" onclick="window.app.navigate('prayer')">
          🕌 ${isEn ? 'PRAYER TIMES' : 'JADWAL SHOLAT'}
        </button>

        <button class="menu-button-item" onclick="window.app.openSettingsModal()">
          ⚙️ ${isEn ? 'SETTINGS' : 'PENGATURAN'}
        </button>

        <button class="menu-button-item" onclick="window.app.openHadithModal()" style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2px; height: 48px; min-height: 48px; max-height: 48px; box-sizing: border-box; padding: 0 14px;" title="${isEn ? 'Authentic Hadiths from Bukhari & Muslim' : 'Kumpulan Hadits Shahih HR. Bukhari & Muslim'}">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span>📜</span>
            <span>${isEn ? 'SAHIH HADITHS' : 'HADITS SHAHIH'}</span>
          </div>
          <span style="font-size: 9.5px; font-weight: 600; letter-spacing: 0.3px; opacity: 0.8; text-transform: none;">${isEn ? '(Ref: Sahih Bukhari & Muslim)' : '(Rujukan: HR. Bukhari & Muslim)'}</span>
        </button>
      </div>

      <!-- Info Footer Legal & Standar Kemenag RI -->
      <div class="home-footer-info">
        <div class="kemenag-verified-badge" onclick="window.app.openKemenagModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
          ${isEn ? 'Indonesian Standard Mushaf & Islamic Guidance Standards' : 'Standar Mushaf Standar Indonesia & Bimas Islam'}
        </div>
      </div>
    </div>
  `;
}
