/**
 * Algoritma Hisab Waktu Sholat Presisi Standar Kementerian Agama RI (Kemenag RI)
 * - Sudut Depresi Subuh : 20.0°
 * - Sudut Depresi Isya  : 18.0°
 * - Ashar               : Standar Madzhab Syafi'i (Tinggi Bayangan = 1 + Tinggi Bayangan Zawal)
 * - Ihtiyat (Pengaman)  : +2 Menit (Standar Bimas Islam Kemenag RI)
 * - Imsak               : 10 Menit Sebelum Waktu Subuh
 * - Dhuha               : Ketinggian Matahari 4.5° di Atas Ufuk (~20 Menit Setelah Terbit)
 */

export const INDONESIA_CITIES = [
  { id: "jkt", name: "DKI Jakarta", province: "DKI Jakarta", lat: -6.2088, lng: 106.8456, tz: 7 },
  { id: "bdg", name: "Bandung", province: "Jawa Barat", lat: -6.9175, lng: 107.6191, tz: 7 },
  { id: "sby", name: "Surabaya", province: "Jawa Timur", lat: -7.2575, lng: 112.7521, tz: 7 },
  { id: "smg", name: "Semarang", province: "Jawa Tengah", lat: -6.9667, lng: 110.4167, tz: 7 },
  { id: "ygy", name: "Yogyakarta", province: "DI Yogyakarta", lat: -7.7956, lng: 110.3695, tz: 7 },
  { id: "mks", name: "Makassar", province: "Sulawesi Selatan", lat: -5.1477, lng: 119.4327, tz: 8 },
  { id: "mdn", name: "Medan", province: "Sumatera Utara", lat: 3.5952, lng: 98.6722, tz: 7 },
  { id: "plb", name: "Palembang", province: "Sumatera Selatan", lat: -2.9761, lng: 104.7754, tz: 7 },
  { id: "dps", name: "Denpasar", province: "Bali", lat: -8.6705, lng: 115.2126, tz: 8 },
  { id: "bpp", name: "Balikpapan", province: "Kalimantan Timur", lat: -1.2379, lng: 116.8529, tz: 8 },
  { id: "smr", name: "Samarinda", province: "Kalimantan Timur", lat: -0.5022, lng: 117.1536, tz: 8 },
  { id: "bjm", name: "Banjarmasin", province: "Kalimantan Selatan", lat: -3.3194, lng: 114.5908, tz: 8 },
  { id: "ptk", name: "Pontianak", province: "Kalimantan Barat", lat: -0.0263, lng: 109.3425, tz: 7 },
  { id: "pku", name: "Pekanbaru", province: "Riau", lat: 0.5071, lng: 101.4478, tz: 7 },
  { id: "btm", name: "Batam", province: "Kepulauan Riau", lat: 1.1293, lng: 104.0530, tz: 7 },
  { id: "pdg", name: "Padang", province: "Sumatera Barat", lat: -0.9471, lng: 100.4172, tz: 7 },
  { id: "ach", name: "Banda Aceh", province: "Aceh", lat: 5.5483, lng: 95.3238, tz: 7 },
  { id: "mnd", name: "Manado", province: "Sulawesi Utara", lat: 1.4748, lng: 124.8421, tz: 8 },
  { id: "mtr", name: "Mataram", province: "Nusa Tenggara Barat", lat: -8.5833, lng: 116.1167, tz: 8 },
  { id: "kpg", name: "Kupang", province: "Nusa Tenggara Timur", lat: -10.1772, lng: 123.6070, tz: 8 },
  { id: "jyp", name: "Jayapura", province: "Papua", lat: -2.5916, lng: 140.6690, tz: 9 },
  { id: "abn", name: "Ambon", province: "Maluku", lat: -3.6547, lng: 128.1906, tz: 9 },
  { id: "srn", name: "Sorong", province: "Papua Barat Daya", lat: -0.8762, lng: 131.2558, tz: 9 },
  { id: "lpg", name: "Bandar Lampung", province: "Lampung", lat: -5.3971, lng: 105.2668, tz: 7 }
];

// Ka'bah coordinates for Qibla calculation
const MECCA_LAT = 21.422487;
const MECCA_LNG = 39.826206;

/**
 * Konversi Derajat ke Radian & Sebaliknya
 */
const toRad = (deg) => (deg * Math.PI) / 180;
const toDeg = (rad) => (rad * 180) / Math.PI;

/**
 * Hitung Arah Kiblat dari Derajat Utara Sejati
 */
export function calculateQiblaDirection(latitude, longitude) {
  const phiK = toRad(MECCA_LAT);
  const lambdaK = toRad(MECCA_LNG);
  const phi = toRad(latitude);
  const lambda = toRad(longitude);

  const deltaL = lambdaK - lambda;
  const y = Math.sin(deltaL);
  const x = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(deltaL);

  let qibla = toDeg(Math.atan2(y, x));
  if (qibla < 0) qibla += 360;
  return Math.round(qibla * 10) / 10;
}

/**
 * Hitung Hisab Waktu Sholat Standar Kemenag RI
 * @param {Date} date 
 * @param {number} lat Latitude
 * @param {number} lng Longitude
 * @param {number} tz Timezone offset (7 for WIB, 8 for WITA, 9 for WIT)
 */
export function calculatePrayerTimes(date, lat, lng, tz) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Julian Day Calculation
  let a = Math.floor((14 - month) / 12);
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;
  let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  let d = jd - 2451545.0;

  // Deklinasi Matahari & Equation of Time (Perata Waktu)
  let q = 280.459 + 0.98564736 * d;
  let g = toRad((357.529 + 0.98560028 * d) % 360);
  let L = q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g);
  let R = toRad(L % 360);
  let e = 23.439 - 0.00000036 * d;
  let radE = toRad(e);

  // Deklinasi Matahari (delta)
  let sinDelta = Math.sin(radE) * Math.sin(R);
  let delta = Math.asin(sinDelta);

  // Equation of Time (EoT) dalam jam
  let RA = Math.atan2(Math.cos(radE) * Math.sin(R), Math.cos(R));
  if (RA < 0) RA += 2 * Math.PI;
  RA = toDeg(RA) / 15;
  let eqTime = (q / 15) - RA;
  while (eqTime > 1) eqTime -= 24;
  while (eqTime < -1) eqTime += 24;

  // Waktu Transit Matahari / Zawal (Waktu Tengah Hari Hakiki)
  let solarNoon = 12 + tz - (lng / 15) - eqTime;

  // Standar Kemenag RI
  const subuhAngle = 20.0; // 20 derajat depresi
  const isyaAngle = 18.0;  // 18 derajat depresi
  const ihtiyat = 2 / 60;  // 2 menit pengaman Kemenag
  const imsakOffset = 10 / 60; // 10 menit sebelum subuh

  const phi = toRad(lat);

  // Fungsi bantu sudut waktu (Hour Angle)
  const getHourAngle = (angleBelowHorizon) => {
    let alt = -toRad(angleBelowHorizon);
    let cosH = (Math.sin(alt) - Math.sin(phi) * Math.sin(delta)) / (Math.cos(phi) * Math.cos(delta));
    if (cosH > 1) return null;
    if (cosH < -1) return null;
    return toDeg(Math.acos(cosH)) / 15;
  };

  // Dzuhur
  let dzuhur = solarNoon + ihtiyat;

  // Ashar (Standar Syafi'i: bayangan benda = panjang benda + bayangan saat zawal)
  let zenithDiff = Math.abs(toDeg(phi) - toDeg(delta));
  let tanAsharAlt = 1 / (1 + Math.tan(toRad(zenithDiff)));
  let asharAlt = Math.atan(tanAsharAlt);
  let cosHAshar = (Math.sin(asharAlt) - Math.sin(phi) * Math.sin(delta)) / (Math.cos(phi) * Math.cos(delta));
  let hAshar = toDeg(Math.acos(Math.max(-1, Math.min(1, cosHAshar)))) / 15;
  let ashar = solarNoon + hAshar + ihtiyat;

  // Maghrib (Ketinggian piringan atas matahari ~ -1.0 derajat)
  let hMaghrib = getHourAngle(1.0);
  let maghrib = solarNoon + hMaghrib + ihtiyat;

  // Isya (Sudut 18 derajat Kemenag RI)
  let hIsya = getHourAngle(isyaAngle);
  let isya = solarNoon + hIsya + ihtiyat;

  // Terbit (Sunrise / Syuruq: -1.0 derajat)
  let hSunrise = getHourAngle(1.0);
  let sunrise = solarNoon - hSunrise - ihtiyat;

  // Subuh (Sudut 20 derajat Kemenag RI)
  let hSubuh = getHourAngle(subuhAngle);
  let subuh = solarNoon - hSubuh + ihtiyat;

  // Imsak (10 menit sebelum Subuh)
  let imsak = subuh - imsakOffset;

  // Dhuha (Ketinggian 4.5 derajat di atas ufuk)
  let altDhuha = toRad(4.5);
  let cosHDhuha = (Math.sin(altDhuha) - Math.sin(phi) * Math.sin(delta)) / (Math.cos(phi) * Math.cos(delta));
  let hDhuha = toDeg(Math.acos(Math.max(-1, Math.min(1, cosHDhuha)))) / 15;
  let dhuha = solarNoon - hDhuha + ihtiyat;

  const formatTime = (decimalHours) => {
    let totalMinutes = Math.round(decimalHours * 60);
    let h = Math.floor(totalMinutes / 60) % 24;
    let m = totalMinutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  return {
    imsak: formatTime(imsak),
    subuh: formatTime(subuh),
    terbit: formatTime(sunrise),
    dhuha: formatTime(dhuha),
    dzuhur: formatTime(dzuhur),
    ashar: formatTime(ashar),
    maghrib: formatTime(maghrib),
    isya: formatTime(isya),
    raw: { imsak, subuh, terbit: sunrise, dhuha, dzuhur, ashar, maghrib, isya },
    standard: "Kementerian Agama RI (Subuh 20°, Isya 18°, Ihtiyat +2m)"
  };
}

/**
 * Dapatkan Waktu Sholat Berikutnya & Hitungan Mundur
 */
export function getNextPrayer(schedule) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes() + now.getSeconds() / 60;

  const prayers = [
    { key: "imsak", name: "Imsak", time: schedule.imsak },
    { key: "subuh", name: "Subuh", time: schedule.subuh },
    { key: "terbit", name: "Terbit", time: schedule.terbit },
    { key: "dhuha", name: "Dhuha", time: schedule.dhuha },
    { key: "dzuhur", name: "Dzuhur", time: schedule.dzuhur },
    { key: "ashar", name: "Ashar", time: schedule.ashar },
    { key: "maghrib", name: "Maghrib", time: schedule.maghrib },
    { key: "isya", name: "Isya", time: schedule.isya }
  ];

  for (let p of prayers) {
    const [h, m] = p.time.split(":").map(Number);
    const pMinutes = h * 60 + m;
    if (pMinutes > currentMinutes) {
      const diffSec = Math.floor((pMinutes - currentMinutes) * 60);
      const hours = Math.floor(diffSec / 3600);
      const minutes = Math.floor((diffSec % 3600) / 60);
      const seconds = diffSec % 60;
      return {
        next: p,
        countdown: `${hours > 0 ? hours + "j " : ""}${minutes}m ${seconds}s lagi`,
        passed: prayers[(prayers.indexOf(p) - 1 + prayers.length) % prayers.length]
      };
    }
  }

  // Jika lewat Isya, sholat berikutnya adalah Imsak/Subuh esok hari
  const [firstH, firstM] = prayers[0].time.split(":").map(Number);
  const firstMinutes = 24 * 60 + firstH * 60 + firstM;
  const diffSec = Math.floor((firstMinutes - currentMinutes) * 60);
  const hours = Math.floor(diffSec / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  return {
    next: prayers[0],
    countdown: `${hours > 0 ? hours + "j " : ""}${minutes}m ${seconds}s lagi (Besok)`,
    passed: prayers[prayers.length - 1]
  };
}
