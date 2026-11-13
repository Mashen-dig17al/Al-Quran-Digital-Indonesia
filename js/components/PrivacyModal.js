/**
 * Komponen Modal Kebijakan Privasi & Keamanan Data (Privacy & Data Safety Modal)
 * Standar Google Play Store & Privasi Pengguna
 * Al-Qur'an Digital Mashendig17al
 */

export function renderPrivacyModal(lang = 'id') {
  const isEn = lang === 'en';

  return `
    <div class="full-modal" id="privacyModal" style="z-index: 100;">
      <div class="modal-header-bar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.closePrivacyModal()" aria-label="Tutup Kebijakan Privasi">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="modal-header-title">
            ${isEn ? 'Privacy Policy & Data Safety' : 'Kebijakan Privasi & Keamanan Data'}
          </div>
        </div>
      </div>

      <div class="screen-container" style="padding: 16px 18px 80px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="font-size: 36px; margin-bottom: 8px;">🛡️</div>
          <div class="settings-card-title" style="font-size: 17px; font-weight: 800;">Al-Qur'an Digital Indonesia</div>
          <div style="font-size: 12px; color: var(--color-orange-primary); font-weight: 700; margin-top: 4px;">Zero Trackers • Zero Ads • 100% Offline First</div>
        </div>

        <!-- 1. Zero Personal Data Collection -->
        <div class="settings-card-box" style="padding: 16px; margin-bottom: 14px; border-left: 4px solid var(--color-orange-primary);">
          <div class="settings-card-title" style="font-weight: 700; font-size: 14px; margin-bottom: 6px;">
            ${isEn ? '1. Zero Personal Data Collection (Zero Tracking)' : '1. Tanpa Pengumpulan Data Pribadi (Zero Tracking)'}
          </div>
          <div class="settings-card-desc" style="font-size: 12px; line-height: 1.6;">
            ${isEn
              ? 'This application does not collect, record, or share your personal identity, device identifiers, or GPS location. No accounts or logins are required. Free from advertisements and analytics trackers.'
              : 'Aplikasi ini tidak pernah mengumpulkan, mencatat, atau membagikan identitas pribadi, pengenal perangkat, maupun lokasi GPS pengguna. Bebas iklan dan tanpa pelacak analitik apa pun.'}
          </div>
        </div>

        <!-- 2. Transparansi API Pihak Ketiga -->
        <div class="settings-card-box" style="padding: 16px; margin-bottom: 14px;">
          <div class="settings-card-title" style="font-weight: 700; font-size: 14px; margin-bottom: 6px;">
            ${isEn ? '2. Third-Party API & Audio CDN Transparency' : '2. Transparansi API Pihak Ketiga & Audio CDN'}
          </div>
          <div class="settings-card-desc" style="font-size: 12px; line-height: 1.6;">
            ${isEn
              ? 'Online Quran texts and Indonesian translations are downloaded via the open community API (equran.id) adhering to standard Indonesian Ministry of Religious Affairs (Kemenag RI) formats. Audio murottal files are retrieved from public repositories (everyayah.com / equran.id). No user profile data is ever transmitted during these requests.'
              : 'Teks Al-Qur\'an dan terjemahan Bahasa Indonesia yang diunduh secara online diambil melalui API komunitas terbuka (equran.id) yang mengacu pada susunan Mushaf Standar Indonesia Kemenag RI. Audio murottal diunduh dari repositori publik (everyayah.com / equran.id). Tidak ada data pengguna yang dikirimkan saat pengunduhan.'}
          </div>
        </div>

        <!-- 3. Penyimpanan Eksklusif Lokal -->
        <div class="settings-card-box" style="padding: 16px; margin-bottom: 14px;">
          <div class="settings-card-title" style="font-weight: 700; font-size: 14px; margin-bottom: 6px;">
            ${isEn ? '3. Local-Only Storage (IndexedDB & LocalStorage)' : '3. Penyimpanan Eksklusif Lokal di Perangkat'}
          </div>
          <div class="settings-card-desc" style="font-size: 12px; line-height: 1.6;">
            ${isEn
              ? 'All downloaded 114 Surahs, multi-qari audio blobs, reading bookmarks, and settings are saved locally on your device storage (IndexedDB & LocalStorage) for permanent offline use.'
              : 'Seluruh teks 114 surat, audio murottal yang diunduh, penanda baca (bookmark), dan preferensi tema tersimpan 100% di memori lokal HP Anda (IndexedDB & LocalStorage) agar dapat diakses kapan pun tanpa internet.'}
          </div>
        </div>

        <!-- 4. Izin Android -->
        <div class="settings-card-box" style="padding: 16px; margin-bottom: 14px;">
          <div class="settings-card-title" style="font-weight: 700; font-size: 14px; margin-bottom: 6px;">
            ${isEn ? '4. Android Permissions (Google Play Compliant)' : '4. Transparansi Izin Akses Android'}
          </div>
          <div class="settings-card-desc" style="font-size: 12px; line-height: 1.6;">
            ${isEn
              ? '• <b>USE_EXACT_ALARM & Notifications</b>: Solely used to trigger accurate prayer times (Subuh, Dzuhur, Ashar, Maghrib, Isya).<br>• <b>Network Access</b>: Used exclusively when user initiates download of Quran texts or audio murottal.'
              : '• <b>USE_EXACT_ALARM & Notifikasi</b>: Digunakan secara eksklusif untuk membunyikan pengingat waktu sholat tepat waktu atas izin Anda.<br>• <b>Internet</b>: Digunakan hanya ketika pengguna mengunduh teks surat atau murottal audio.'}
          </div>
        </div>

        <!-- 5. Hapus Data Mandiri -->
        <div class="settings-card-box" style="padding: 16px; margin-bottom: 20px;">
          <div class="settings-card-title" style="font-weight: 700; font-size: 14px; margin-bottom: 6px;">
            ${isEn ? '5. Clear All Local Data (User Control)' : '5. Kontrol Pengguna: Hapus Seluruh Data Lokal'}
          </div>
          <div class="settings-card-desc" style="font-size: 12px; line-height: 1.6; margin-bottom: 12px;">
            ${isEn
              ? 'You have complete control to wipe all cached data, downloaded audio files, and bookmarks from your device storage.'
              : 'Anda memiliki kendali penuh untuk menghapus seluruh data surat offline, audio murottal, dan riwayat penanda baca kapan saja.'}
          </div>
          <button 
            onclick="window.app.clearAllUserData()"
            style="background: rgba(239, 68, 68, 0.15); border: 1.5px solid #EF4444; color: #EF4444; padding: 10px 16px; border-radius: 10px; font-weight: 700; font-size: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
            🗑️ ${isEn ? 'Reset / Clear All App Data' : 'Reset / Bersihkan Semua Data Lokal'}
          </button>
        </div>

        <div style="text-align: center; font-size: 11px; color: #64748B;">
          <div>Pengembang: Hendra Setiawan (<b>@mashendig17al</b>)</div>
          <div style="margin-top: 4px;">Email: mashendig17al@gmail.com</div>
        </div>

      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  window.renderPrivacyModal = renderPrivacyModal;
}

