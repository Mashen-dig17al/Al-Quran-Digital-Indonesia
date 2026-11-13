/**
 * Komponen Pengaturan Aplikasi (Settings Modal)
 * 1. Bahasa: Indonesia / Inggris
 * 2. Tema: Terang / Gelap
 * 3. Tajwid Berwarna (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad)
 * 4. Ukuran Font: Arab (22px - 42px) & Terjemahan (12px - 22px)
 * 5. Qori Murottal: Pilihan Qori Studio Master Jernih (114 Surat Lengkap)
 * 6. Fitur Layar Penuh (Fullscreen Mode)
 */

export const QARI_LIST = [
  {
    id: "alafasy",
    name: "Syeikh Misyari Rasyid Al-Afasy",
    desc: "Studio Digital HD • Sangat Jernih & Merdu",
    quality: "128 kbps Studio Master • Kualitas Terjernih",
    icon: "🎙️",
    getUrls: (s, a) => [
      `https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/${s}${a}.mp3`,
      `https://audio.qurancdn.com/Alafasy/mp3/${s}${a}.mp3`,
      `https://everyayah.com/data/Alafasy_128kbps/${s}${a}.mp3`
    ]
  },
  {
    id: "sudais",
    name: "Syeikh Abdurrahman As-Sudais",
    desc: "Imam Masjidil Haram Makkah • Khas & Khusyuk",
    quality: "192 kbps High Bitrate Master",
    icon: "🕌",
    getUrls: (s, a) => [
      `https://cdn.equran.id/audio-partial/Abdurrahman-as-Sudais/${s}${a}.mp3`,
      `https://audio.qurancdn.com/Sudais/mp3/${s}${a}.mp3`,
      `https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/${s}${a}.mp3`
    ]
  },
  {
    id: "abdulbasit",
    name: "Syeikh Abdul Basit Abdul Samad",
    desc: "Qari Legendaris Dunia • Tajwid & Makhraj Presisi",
    quality: "192 kbps Studio Murattal",
    icon: "✨",
    getUrls: (s, a) => [
      `https://audio.qurancdn.com/AbdulBaset/Murattal/mp3/${s}${a}.mp3`,
      `https://everyayah.com/data/Abdul_Basit_Murattal_192kbps/${s}${a}.mp3`
    ]
  },
  {
    id: "aljuhany",
    name: "Syeikh Abdullah Al-Juhany",
    desc: "Imam Masjidil Haram Makkah • Irama Cepat & Fasih",
    quality: "Digital HD Official",
    icon: "📖",
    getUrls: (s, a) => [
      `https://cdn.equran.id/audio-partial/Abdullah-Al-Juhany/${s}${a}.mp3`,
      `https://audio.qurancdn.com/Shuraym/mp3/${s}${a}.mp3`
    ]
  },
  {
    id: "husary",
    name: "Syeikh Mahmud Khalil Al-Husary",
    desc: "Guru Besar Qiraat • Standar Emas Murottal Dunia",
    quality: "128 kbps Studio Master",
    icon: "📜",
    getUrls: (s, a) => [
      `https://audio.qurancdn.com/Minshawi/Murattal/mp3/${s}${a}.mp3`,
      `https://everyayah.com/data/Husary_128kbps/${s}${a}.mp3`
    ]
  }
];

export function renderSettingsModal(settings) {
  const currentLang = settings.language || 'id';
  const currentTheme = settings.theme || 'light';
  const isTajweed = settings.coloredTajweed !== false;
  const isKeepScreenOn = settings.keepScreenOn === true;
  const isFontSizeEnabled = settings.fontSizeSettingsEnabled !== false;
  const arabicFontSize = settings.arabicFontSize || 28;
  const latinFontSize = settings.latinFontSize || 13;
  const translationFontSize = settings.translationFontSize || 14;

  return `
    <div class="full-modal" id="settingsModal">
      <div class="modal-header-bar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.closeSettingsModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="modal-header-title">
            ${currentLang === 'id' ? 'Pengaturan Aplikasi' : 'Application Settings'}
          </div>
        </div>
      </div>

      <div class="screen-container" style="padding: 16px 18px 80px;">
        
        <!-- 1. BAHASA: INDONESIA / INGGRIS -->
        <div class="settings-section-heading" style="margin-top: 0;">
          1. ${currentLang === 'en' ? 'APPLICATION LANGUAGE' : 'BAHASA APLIKASI'}
        </div>
        <div class="settings-card-box" style="padding: 10px; display: flex; gap: 10px;">
          <button 
            class="btn-setting-toggle ${currentLang === 'id' ? 'active-orange' : ''}"
            onclick="window.app.updateSetting('language', 'id')">
            🇮🇩 Bahasa Indonesia
          </button>
          <button 
            class="btn-setting-toggle ${currentLang === 'en' ? 'active-orange' : ''}"
            onclick="window.app.updateSetting('language', 'en')">
            🇬🇧 English (UK/US)
          </button>
        </div>

        <!-- 2. TEMA: TERANG / GELAP -->
        <div class="settings-section-heading">
          2. ${currentLang === 'en' ? 'DISPLAY THEME' : 'TEMA TAMPILAN'}
        </div>
        <div class="settings-card-box" style="padding: 10px; display: flex; gap: 10px;">
          <button 
            class="btn-setting-toggle ${currentTheme === 'light' ? 'active-orange' : ''}"
            onclick="window.app.updateSetting('theme', 'light')">
            ☀️ ${currentLang === 'en' ? 'Light' : 'Terang'}
          </button>
          <button 
            class="btn-setting-toggle ${currentTheme === 'dark' ? 'active-orange' : ''}"
            onclick="window.app.updateSetting('theme', 'dark')">
            🌙 ${currentLang === 'en' ? 'Dark' : 'Gelap'}
          </button>
        </div>

        <!-- 3. TAJWID BERWARNA -->
        <div class="settings-section-heading">
          3. ${currentLang === 'en' ? 'COLORED TAJWEED' : 'TAJWID BERWARNA'}
        </div>
        <div 
          class="settings-card-box setting-tajweed-card ${isTajweed ? 'active-tajweed' : ''}" 
          id="settingTajweedCard"
          style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 14px 16px; border: 1.5px solid ${isTajweed ? 'var(--color-orange-primary)' : 'rgba(255,255,255,0.08)'}; background: ${isTajweed ? 'rgba(234, 88, 12, 0.08)' : 'rgba(17, 34, 51, 0.6)'}; border-radius: 14px; transition: all 0.25s ease;"
          onclick="window.app.toggleTajweed()"
        >
          <div style="padding-right: 12px; pointer-events: none;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="settings-card-title" style="color: ${isTajweed ? 'var(--color-orange-primary)' : 'inherit'}; font-weight: 700;">
                ${currentLang === 'en' ? 'Enable Colored Tajweed' : 'Aktifkan Tajwid Berwarna'}
              </span>
              <span class="tajweed-status-badge" id="tajweedStatusBadge" style="font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 10px; ${isTajweed ? 'background: rgba(234, 88, 12, 0.2); color: var(--color-orange-primary);' : 'background: rgba(148, 163, 184, 0.2); color: #94A3B8;'}">
                ${isTajweed ? (currentLang === 'en' ? 'ACTIVE' : 'AKTIF') : (currentLang === 'en' ? 'OFF' : 'NONAKTIF')}
              </span>
            </div>
            <div class="settings-card-desc" style="line-height: 1.4; margin-top: 4px; font-size: 11px; color: #94A3B8;">
              ${currentLang === 'en' ? 'Tajweed coloring: Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad' : 'Pewarnaan tajwid (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad)'}
            </div>
          </div>
          
          <!-- Modern Switch Toggle -->
          <div class="modern-toggle-switch ${isTajweed ? 'active' : ''}" id="switchTajweed" style="flex-shrink: 0;">
            <div class="toggle-knob"></div>
          </div>
        </div>

        <!-- 4. PENGATURAN UKURAN FONT -->
        <div class="settings-section-heading">
          4. ${currentLang === 'en' ? 'FONT SIZE' : 'UKURAN FONT'}
        </div>
        <div 
          class="settings-card-box setting-fontsize-card ${isFontSizeEnabled ? 'active-fontsize' : ''}" 
          id="settingFontSizeCard"
          style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 14px 16px; border: 1.5px solid ${isFontSizeEnabled ? 'var(--color-orange-primary)' : 'rgba(255,255,255,0.08)'}; background: ${isFontSizeEnabled ? 'rgba(234, 88, 12, 0.08)' : 'rgba(17, 34, 51, 0.6)'}; border-radius: 14px; transition: all 0.25s ease;"
          onclick="window.app.toggleFontSizeSettings()"
        >
          <div style="padding-right: 12px; pointer-events: none;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="settings-card-title" id="fontSizeTitleText" style="color: ${isFontSizeEnabled ? 'var(--color-orange-primary)' : 'inherit'}; font-weight: 700;">
                ${currentLang === 'en' ? 'Enable Font Size Settings' : 'Aktifkan Pengaturan Ukuran Font'}
              </span>
              <span class="fontsize-status-badge" id="fontSizeStatusBadge" style="font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 10px; ${isFontSizeEnabled ? 'background: rgba(234, 88, 12, 0.2); color: var(--color-orange-primary);' : 'background: rgba(148, 163, 184, 0.2); color: #94A3B8;'}">
                ${isFontSizeEnabled ? (currentLang === 'en' ? 'ACTIVE' : 'AKTIF') : (currentLang === 'en' ? 'OFF' : 'NONAKTIF')}
              </span>
            </div>
            <div class="settings-card-desc" style="line-height: 1.4; margin-top: 4px; font-size: 11px; color: #94A3B8;">
              ${currentLang === 'en' ? 'Show or hide font size settings.' : 'Tampilkan atau sembunyikan pengaturan ukuran font.'}
            </div>
          </div>
          
          <!-- Modern Switch Toggle -->
          <div class="modern-toggle-switch ${isFontSizeEnabled ? 'active' : ''}" id="switchFontSize" style="flex-shrink: 0;">
            <div class="toggle-knob"></div>
          </div>
        </div>

        <div id="fontSizeSlidersContainer" class="settings-card-box fontsize-sliders-collapsible ${isFontSizeEnabled ? 'expanded' : ''}" style="display: ${isFontSizeEnabled ? 'flex' : 'none'}; flex-direction: column; gap: 16px; margin-top: 10px; width: 100%; box-sizing: border-box; overflow: visible !important; height: auto !important; min-height: fit-content;">
          
          <!-- Slider Font Arab (22px s.d 42px) -->
          <div style="width: 100%; flex-shrink: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span class="settings-card-title" style="font-weight: 600;">${currentLang === 'en' ? 'Arabic Font Size' : 'Ukuran Font Arab'}</span>
              <span style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary);" id="arabicFontDisplay">${arabicFontSize}px</span>
            </div>
            <input 
              type="range" 
              min="22" 
              max="42" 
              value="${arabicFontSize}" 
              class="settings-range-slider"
              style="width: 100%; accent-color: var(--color-orange-primary); cursor: pointer;"
              oninput="window.app.updateSetting('arabicFontSize', Number(this.value))"
              onchange="window.app.updateSetting('arabicFontSize', Number(this.value))"
            />
          </div>

          <!-- Slider Font Latin (12px s.d 22px) -->
          <div style="width: 100%; flex-shrink: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span class="settings-card-title" style="font-weight: 600;">${currentLang === 'en' ? 'Latin Font Size' : 'Ukuran Font Latin'}</span>
              <span style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary);" id="latinFontDisplay">${latinFontSize}px</span>
            </div>
            <input 
              type="range" 
              min="12" 
              max="22" 
              value="${latinFontSize}" 
              class="settings-range-slider"
              style="width: 100%; accent-color: var(--color-orange-primary); cursor: pointer;"
              oninput="window.app.updateSetting('latinFontSize', Number(this.value))"
              onchange="window.app.updateSetting('latinFontSize', Number(this.value))"
            />
          </div>

          <!-- Slider Font Terjemahan (12px s.d 22px) -->
          <div style="width: 100%; flex-shrink: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span class="settings-card-title" style="font-weight: 600;">${currentLang === 'en' ? 'Translation Font Size' : 'Ukuran Font Terjemahan'}</span>
              <span style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary);" id="translationFontDisplay">${translationFontSize}px</span>
            </div>
            <input 
              type="range" 
              min="12" 
              max="22" 
              value="${translationFontSize}" 
              class="settings-range-slider"
              style="width: 100%; accent-color: var(--color-orange-primary); cursor: pointer;"
              oninput="window.app.updateSetting('translationFontSize', Number(this.value))"
              onchange="window.app.updateSetting('translationFontSize', Number(this.value))"
            />
          </div>

          <!-- Live Text Preview -->
          <div class="settings-preview-box" style="width: 100%; flex-shrink: 0; box-sizing: border-box;">
            <div id="previewArabicText" class="settings-preview-arabic" style="font-size: ${arabicFontSize}px;">
              وَيْلٌۭ لِّكُلِّ هُمَزَةٍۢ لُّمَزَةٍ ١
            </div>
            <div id="previewLatinText" class="settings-preview-latin" style="font-size: ${latinFontSize}px;">
              Wailul likulli humazatil-lumazah(tin).
            </div>
            <div id="previewTransText" class="settings-preview-trans" style="font-size: ${translationFontSize}px;">
              "Celakalah bagi setiap pengumpat dan pencela," (Standar Kemenag RI)
            </div>
          </div>
        </div>

        <!-- 5. QORI MUROTTAL BERKUALITAS TINGGI & JERNIH (114 SURAT) -->
        <div class="settings-section-heading">
          5. ${currentLang === 'en' ? 'QURAN RECITER' : 'QORI MUROTTAL AL-QUR\'AN'}
        </div>
        <div style="display: flex; flex-direction: column;">
          ${QARI_LIST.map(q => {
            const isSelected = (settings.qari === q.id) || (!settings.qari && q.id === 'alafasy');
            return `
              <div 
                class="qari-card-item ${isSelected ? 'active-qari' : ''}"
                onclick="window.app.updateSetting('qari', '${q.id}')"
              >
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="font-size: 24px;">${q.icon}</span>
                  <div>
                    <div class="qari-name-title" style="font-weight: 700; font-size: 13px; color: ${isSelected ? '#EA580C' : 'inherit'};">
                      ${q.name}
                    </div>
                    <div class="qari-desc-text" style="font-size: 11px; color: #94A3B8; margin-top: 2px;">
                      ${q.desc}
                    </div>
                    <div class="qari-quality-text" style="font-size: 10px; color: #10B981; font-weight: 600; margin-top: 2px;">
                      ✓ ${q.quality}
                    </div>
                  </div>
                </div>
                <div class="qari-badge-container" style="flex-shrink: 0; margin-left: 8px;">
                  ${isSelected ? `
                    <span class="qari-active-badge" style="background: linear-gradient(135deg, #EA580C, #C2410C); color: #fff; font-size: 10px; font-weight: 700; padding: 4px 9px; border-radius: 20px; box-shadow: 0 1px 4px rgba(234,88,12,0.3);">
                      ✓ ${currentLang === 'en' ? 'Active' : 'Aktif'}
                    </span>
                  ` : `
                    <span class="qari-select-btn" style="border: 1px solid rgba(148, 163, 184, 0.4); color: #94A3B8; font-size: 10px; padding: 3px 8px; border-radius: 20px;">
                      ${currentLang === 'en' ? 'Select' : 'Pilih'}
                    </span>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="settings-preview-box" style="font-size: 11px; line-height: 1.5; padding: 8px 12px; margin-top: 4px;">
          ${currentLang === 'en' 
            ? '✓ High-fidelity studio master audio with instant gapless playback between verses.' 
            : '✓ Kualitas suara jernih master studio dengan pemutaran lancar tanpa jeda antar ayat.'}
        </div>

        <!-- 6. BIARKAN LAYAR TETAP MENYALA (KEEP SCREEN ON) -->
        <div class="settings-section-heading">
          6. ${currentLang === 'en' ? 'KEEP SCREEN ON' : 'BIARKAN LAYAR TETAP MENYALA'}
        </div>
        <div 
          class="settings-card-box setting-keepscreen-card ${isKeepScreenOn ? 'active-keepscreen' : ''}" 
          id="settingKeepScreenCard"
          style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; padding: 14px 16px; border: 1.5px solid ${isKeepScreenOn ? 'var(--color-orange-primary)' : 'rgba(255,255,255,0.08)'}; background: ${isKeepScreenOn ? 'rgba(234, 88, 12, 0.08)' : 'rgba(17, 34, 51, 0.6)'}; border-radius: 14px; transition: all 0.25s ease;"
          onclick="window.app.toggleKeepScreenOn()"
        >
          <div style="padding-right: 12px; pointer-events: none;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="settings-card-title" style="color: ${isKeepScreenOn ? 'var(--color-orange-primary)' : 'inherit'}; font-weight: 700;">
                ${currentLang === 'en' ? 'Keep Screen On' : 'Biarkan Layar Tetap Menyala'}
              </span>
              <span class="keepscreen-status-badge" id="keepScreenStatusBadge" style="font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 10px; ${isKeepScreenOn ? 'background: rgba(234, 88, 12, 0.2); color: var(--color-orange-primary);' : 'background: rgba(148, 163, 184, 0.2); color: #94A3B8;'}">
                ${isKeepScreenOn ? (currentLang === 'en' ? 'ACTIVE' : 'AKTIF') : (currentLang === 'en' ? 'OFF' : 'NONAKTIF')}
              </span>
            </div>
            <div class="settings-card-desc" style="line-height: 1.4; margin-top: 4px; font-size: 11px; color: #94A3B8;">
              ${currentLang === 'en' ? 'Screen stays on while reading Al-Qur\'an without turning off automatically' : 'Layar HP terus menyala saat membaca Al-Qur\'an tanpa mati otomatis'}
            </div>
          </div>
          
          <!-- Modern Switch Toggle -->
          <div class="modern-toggle-switch ${isKeepScreenOn ? 'active' : ''}" id="switchKeepScreen" style="flex-shrink: 0;">
            <div class="toggle-knob"></div>
          </div>
        </div>
        <div class="settings-preview-box" style="font-size: 11px; line-height: 1.5; padding: 10px 12px; margin-top: 6px;">
          <div style="font-weight: 700; color: var(--color-orange-primary); margin-bottom: 4px;">
            ${currentLang === 'en' ? '💡 Smart Screen Timeout Control:' : '💡 Pengaturan Waktu Layar HP:'}
          </div>
          <div>
            ${currentLang === 'en'
              ? '• <b>When ON</b>: Screen stays illuminated continuously while reading Al-Qur\'an, preventing interruptions.<br/>• <b>When OFF</b>: Screen follows device system settings and turns off according to your phone\'s screen timeout.'
              : '• <b>Saat AKTIF</b>: Layar HP akan terus menyala tanpa redup saat Anda membaca Al-Qur\'an agar tilawah tidak terganggu.<br/>• <b>Saat NONAKTIF</b>: Layar akan mengikuti pengaturan standar HP sesuai batas waktu layar (screen timeout) yang berlaku.'
            }
          </div>
        </div>

        <!-- 7. DATA AL-QUR'AN OFFLINE (114 SURAT) -->
        <div class="settings-section-heading">
          7. ${currentLang === 'en' ? 'OFFLINE QURAN DATA (114 SURAHS)' : 'DATA AL-QUR\'AN OFFLINE (114 SURAT)'}
        </div>
        <div class="settings-card-box" style="padding: 14px 16px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 10px;">
            <div style="flex: 1; min-width: 0; padding-right: 4px;">
              <div class="settings-card-title" style="font-weight: 700;">
                ${currentLang === 'en' ? 'Local IndexedDB Database' : 'Database Lokal IndexedDB'}
              </div>
              <div class="settings-card-desc" style="font-size: 11px; color: #94A3B8; margin-top: 2px; line-height: 1.4;">
                ${currentLang === 'en' ? 'Store all 114 surahs to read offline without quota' : 'Simpan seluruh 114 surat agar dapat dibaca tanpa internet'}
              </div>
            </div>
            <button 
              class="btn-setting-action"
              onclick="window.app.openOfflineModal()"
              style="flex-shrink: 0; margin-left: auto;">
              💾 ${currentLang === 'en' ? 'Manage' : 'Kelola'}
            </button>
          </div>
          <div style="font-size: 11px; color: #64748B; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px; line-height: 1.4;">
            ${currentLang === 'en' 
              ? '✓ 6,236 Verses • High-speed IndexedDB caching • Zero internet required once downloaded' 
              : '✓ 6.236 Ayat Lengkap • Akses instan tanpa loading • Otomatis tersimpan permanen'}
          </div>
        </div>

        <!-- 8. KEBIJAKAN PRIVASI & KEAMANAN DATA -->
        <div class="settings-section-heading">
          8. ${currentLang === 'en' ? 'PRIVACY POLICY & DATA SECURITY' : 'KEBIJAKAN PRIVASI & KEAMANAN DATA'}
        </div>
        <div class="settings-card-box" onclick="window.app.openPrivacyModal()" style="padding: 14px 16px; margin-bottom: 20px; cursor: pointer;">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
            <div style="flex: 1; min-width: 0; padding-right: 4px;">
              <div class="settings-card-title" style="font-weight: 700;">
                ${currentLang === 'en' ? 'Privacy & Data Safety' : 'Privasi & Keamanan Data'}
              </div>
              <div class="settings-card-desc" style="font-size: 11px; color: #94A3B8; margin-top: 2px; line-height: 1.4;">
                ${currentLang === 'en' ? 'Zero data collection • 100% user privacy guaranteed' : 'Bebas pelacak & iklan • Data tersimpan di HP Anda'}
              </div>
            </div>
            <button 
              class="btn-setting-action"
              onclick="event.stopPropagation(); window.app.openPrivacyModal()"
              style="flex-shrink: 0; margin-left: auto;">
              🛡️ ${currentLang === 'en' ? 'View' : 'Lihat'}
            </button>
          </div>
        </div>

        <div style="text-align: center; margin-top: 26px; font-size: 11px; color: #64748B;">
          <div>Hak Cipta © Hendra Setiawan (<b>@mashendig17al</b>)</div>
          <div>Mushaf Standar Indonesia • Kemenag RI Compliant</div>
          <div style="margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
            <a href="https://instagram.com/mashendig17al" target="_blank" style="color: #38BDF8; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>@mashendig17al</span>
            </a>
            <span style="color: #64748B;">•</span>
            <a href="mailto:mashendig17al@gmail.com" style="color: #38BDF8; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>mashendig17al@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  `;
}
