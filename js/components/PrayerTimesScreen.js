/**
 * Komponen Jadwal Sholat Standar Kemenag RI
 * Menghitung waktu sholat presisi wilayah Indonesia & Arah Kiblat
 */
import { INDONESIA_CITIES, calculatePrayerTimes, calculateQiblaDirection, getNextPrayer } from '../data/prayerTimes.js';

export function renderPrayerTimesScreen(selectedCityId, language = "id") {
  const isEn = language === "en";
  const city = INDONESIA_CITIES.find(c => c.id === selectedCityId) || INDONESIA_CITIES[0];
  const now = new Date();
  const schedule = calculatePrayerTimes(now, city.lat, city.lng, city.tz);
  const nextInfo = getNextPrayer(schedule);
  const qiblaAngle = calculateQiblaDirection(city.lat, city.lng);
  const isNotifEnabled = (window.app && typeof window.app.getPersistentData === 'function')
    ? (window.app.getPersistentData('prayer_notif_enabled') === 'true')
    : (typeof localStorage !== 'undefined' && localStorage.getItem('prayer_notif_enabled') === 'true');

  const prayerItems = [
    { key: "imsak", name: "Imsak", time: schedule.imsak, icon: "🌙" },
    { key: "subuh", name: isEn ? "Fajr" : "Subuh", time: schedule.subuh, icon: "🌅" },
    { key: "terbit", name: isEn ? "Sunrise" : "Terbit (Syuruq)", time: schedule.terbit, icon: "☀️" },
    { key: "dhuha", name: isEn ? "Duha" : "Dhuha", time: schedule.dhuha, icon: "🌤️" },
    { key: "dzuhur", name: isEn ? "Dhuhr" : "Dzuhur", time: schedule.dzuhur, icon: "☀️" },
    { key: "ashar", name: isEn ? "Asr" : "Ashar", time: schedule.ashar, icon: "🌇" },
    { key: "maghrib", name: "Maghrib", time: schedule.maghrib, icon: "🌆" },
    { key: "isya", name: isEn ? "Isha" : "Isya", time: schedule.isya, icon: "🌃" }
  ];

  const currentDateString = now.toLocaleDateString(isEn ? "en-US" : "id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const nextPrayerName = isEn 
    ? (prayerItems.find(p => p.key === nextInfo.next.key)?.name || nextInfo.next.name)
    : nextInfo.next.name;

  return `
    <div class="screen-container" style="background: #0B192C; padding-bottom: 40px;">
      <!-- Header -->
      <div class="modal-header-bar" style="position: sticky; top: 0; z-index: 20;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.navigate('home')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="modal-header-title">${isEn ? "Prayer Times & Qibla" : "Jadwal Sholat Indonesia"}</div>
        </div>

        <button class="btn-icon-circle ${isNotifEnabled ? 'active-orange' : ''}" onclick="window.app.togglePrayerPhoneNotification()" title="${isNotifEnabled ? (isEn ? 'Prayer Notification: ACTIVE' : 'Notifikasi Bilah Atas HP Aktif (Tanpa Suara Adzan)') : (isEn ? 'Enable Prayer Notification' : 'Aktifkan Notifikasi Bilah Atas HP (Tanpa Suara Adzan)')}">
          <span style="font-size: 16px;">${isNotifEnabled ? '🔔' : '🔕'}</span>
        </button>
      </div>

      <!-- Pemilih Kota / Wilayah Indonesia -->
      <div style="padding: 14px 18px 6px;">
        <label style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #94A3B8; letter-spacing: 0.5px;">
          ${isEn ? "Select Region / City" : "Pilih Wilayah / Kabupaten Kota"}
        </label>
        <select 
          style="width: 100%; margin-top: 6px; background: #122238; border: 1.5px solid #1E3E62; border-radius: 12px; padding: 12px 14px; color: #FFF; font-size: 14px; font-weight: 600; outline: none; cursor: pointer;"
          onchange="window.app.selectPrayerCity(this.value)">
          ${INDONESIA_CITIES.map(c => `
            <option value="${c.id}" ${c.id === city.id ? 'selected' : ''}>
              ${c.name} (${c.province})
            </option>
          `).join('')}
        </select>
      </div>

      <!-- Main Prayer Hero Card -->
      <div class="prayer-screen-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 12px; color: #94A3B8;">${currentDateString}</span>
          <span style="font-size: 11px; background: rgba(249, 115, 22, 0.2); color: var(--color-orange-primary); font-weight: 700; padding: 2px 8px; border-radius: 10px;">
            GMT +${city.tz}
          </span>
        </div>

        <div style="text-align: center; padding: 14px 0;">
          <div style="font-size: 13px; color: #94A3B8; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">
            ${isEn ? "Time to Next Prayer" : "Menuju Waktu Sholat Berikutnya"}
          </div>
          <div style="font-size: 32px; font-weight: 800; color: var(--color-orange-primary); margin: 4px 0;" id="prayerHeroNext">
            ${nextPrayerName} • ${nextInfo.next.time}
          </div>
          <div style="font-size: 14px; color: #F1F5F9; font-weight: 600;" id="prayerHeroCountdown">
            ⏳ ${nextInfo.countdown}
          </div>
        </div>

        <!-- Grid Waktu Sholat -->
        <div class="prayer-grid">
          ${prayerItems.map(p => {
            const isNext = nextInfo.next.key === p.key;
            return `
              <div class="prayer-box ${isNext ? 'active' : ''}">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span>${p.icon}</span>
                  <span class="prayer-name">${p.name}</span>
                </div>
                <span class="prayer-time-val">${p.time}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Kompas Arah Kiblat - Modern High-Precision Gyroscope Compass -->
      <div style="margin: 0 18px; background: #122238; border: 1.5px solid #1E3E62; border-radius: 20px; padding: 20px 16px; text-align: center;">
        <div style="font-size: 15px; font-weight: 700; color: #FFF; margin-bottom: 2px;">
          ${isEn ? `Qibla Direction from ${city.name}` : `Arah Kiblat dari ${city.name}`}
        </div>
        <div style="font-size: 12px; color: #94A3B8; margin-bottom: 16px;">
          ${isEn ? `Coordinates: ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}° • Kaaba in Makkah` : `Koordinat: ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}° • Ka'bah di Makkah`}
        </div>

        <!-- Interactive Compass Container -->
        <div class="qibla-interactive-compass">
          <!-- Compass Bezel with Top Alignment Pointer (Arah Hadap HP) -->
          <div class="qibla-compass-bezel">
            <div class="qibla-top-pointer" title="${isEn ? 'Device Heading' : 'Arah Hadap HP'}"></div>
            
            <!-- Rotating Disc (Bergerak otomatis mengikuti sensor Gyroscope / Kompas HP) -->
            <div class="qibla-compass-disc" id="qiblaCompassDisc">
              <!-- Titik Mata Angin -->
              <span class="qibla-cardinal qibla-cardinal-n">${isEn ? 'N' : 'U'}</span>
              <span class="qibla-cardinal qibla-cardinal-e">${isEn ? 'E' : 'T'}</span>
              <span class="qibla-cardinal qibla-cardinal-s">${isEn ? 'S' : 'S'}</span>
              <span class="qibla-cardinal qibla-cardinal-w">${isEn ? 'W' : 'B'}</span>
              
              <!-- Lingkaran Ticks & Derajat Presisi SVG -->
              <svg class="qibla-ticks-svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
                <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
              </svg>

              <!-- Pin Ka'bah pada Sudut Kiblat (${qiblaAngle}°) Terhadap Utara -->
              <div class="qibla-kaaba-marker" style="transform: rotate(${qiblaAngle}deg);" title="${isEn ? `Kaaba Direction ${qiblaAngle}° N` : `Arah Ka'bah ${qiblaAngle}° U`}">
                <div class="qibla-kaaba-icon-badge">
                  <span class="qibla-kaaba-emoji">🕋</span>
                  <div class="qibla-kaaba-beam"></div>
                </div>
              </div>
            </div>

            <!-- Hub Tengah dengan Target Derajat Kiblat -->
            <div class="qibla-needle-hub">
              <div class="qibla-center-core">
                <span id="qiblaTargetPill" style="font-size: 11px; font-weight: 800; color: #FFF; background: rgba(11,25,44,0.92); padding: 3px 8px; border-radius: 10px; border: 1px solid var(--color-orange-primary); white-space: nowrap;">
                  ${qiblaAngle}° ${isEn ? 'N' : 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Real-time Orientation & Alignment Guidance -->
        <div style="margin-top: 16px;">
          <!-- Badge Panduan Presisi Real-Time -->
          <div id="qiblaStatusBadge" class="qibla-status-badge">
            <span class="qibla-status-pulse"></span>
            <span id="qiblaStatusText">${isEn ? "🔄 Rotate device to align with Kaaba" : "🔄 Goyangkan / Putar HP untuk mengarahkan ke Ka'bah"}</span>
          </div>

          <!-- Rincian Sudut Derajat -->
          <div style="display: flex; justify-content: center; gap: 16px; margin-top: 12px; font-size: 12px;">
            <div style="color: #94A3B8;">
              ${isEn ? 'Device Heading:' : 'Arah HP:'} <b id="qiblaHeadingText" style="color: #FFF;">--° (${isEn ? 'Sensor Ready' : 'Sensor Siap'})</b>
            </div>
            <div style="color: #F97316; font-weight: 700;">
              ${isEn ? 'Target Qibla:' : 'Target Kiblat:'} <b>${qiblaAngle}° ${isEn ? 'N' : 'U'}</b>
            </div>
          </div>

          <!-- Panduan Kalibrasi Gyroscope HP -->
          <div style="margin-top: 12px; font-size: 11px; color: #94A3B8; line-height: 1.5; background: rgba(0,0,0,0.25); padding: 8px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.06);">
            ${isEn 
              ? '🧭 <b>Gyroscope & Compass Active</b>: Hold phone flat horizontally. Move device in a figure <b>8</b> in the air if recalibration is needed.' 
              : '🧭 <b>Sensor Gyroscope & Kompas Aktif</b>: Pegang HP mendatar sejajar lantai. Goyangkan HP membentuk angka <b>8</b> di udara bila sensor membutuhkan kalibrasi ulang.'}
          </div>
        </div>
      </div>

      <!-- Legal Kemenag Notice -->
      <div style="padding: 18px 24px 0; text-align: center;">
        <p style="font-size: 11px; color: #64748B; line-height: 1.5;">
          ${isEn 
            ? 'Prayer times calculated using official <b>Ministry of Religious Affairs (Kemenag RI)</b> parameters: Fajr angle 20°, Isha angle 18°, +2 minutes precautionary buffer, and Shafi\'i madhhab.' 
            : 'Perhitungan waktu sholat menggunakan parameter resmi <b>Kementerian Agama Republik Indonesia</b>: Sudut Subuh 20°, Sudut Isya 18°, Ihtiyat +2 menit, dan Madzhab Syafi\'i.'}
        </p>
      </div>
    </div>
  `;
}
