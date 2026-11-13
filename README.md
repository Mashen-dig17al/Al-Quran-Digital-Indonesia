# 🕌 Al-Qur'an Digital Indonesia

**Package ID:** `com.mashendig17al.quranpro`  
**Versi:** `1.0.1` (Version Code `3`)  
**Target Platform:** Web (HTML5/PWA) & Android (APK / Android App Bundle)  

Aplikasi Al-Qur'an digital modern, elegan, dan komprehensif yang dirancang untuk **ibadah harian** dan memiliki standar kepatuhan **Google Play Store (Target SDK 35 / Android 15)**, **Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Kemenag RI**, serta arsitektur multiplatform (**Web PWA & Native Android APK / AAB**).

---

## 🌟 Fitur Utama & Kepatuhan Standar

| No | Spesifikasi & Fitur | Implementasi & Standar Resmi |
|---|---|---|
| **1** | **Teks Rasm Utsmani Standar Indonesia** | Menggunakan **Mushaf Standar Indonesia (MSI) Rasm Utsmani** riwayat Hafsh 'an 'Ashim. Didukung font resmi *Uthmanic Hafs* (KFGQPC), harakat presisi, penomoran ayat angka latin standar Indonesia (bebas angka arab dalam teks dan tanpa rosette kosong). |
| **2** | **Terjemahan Resmi Dwibahasa** | - **Bahasa Indonesia**: Terjemahan Resmi Al-Qur'an Edisi Penyempurnaan Kementerian Agama RI (Kemenag RI).<br>- **English**: Saheeh International Translation bersumber terpercaya. |
| **3** | **Skema Warna Modern** | - **Biru Navy (`#0B192C`, `#122238`)**: Elemen Islami elegan, bilah navigasi, dan latar belakang agung.<br>- **Putih / Kanvas Cerah (`#FFFFFF`, `#FFFDF9`)**: Lembar baca mushaf nyaman di mata.<br>- **Orange (`#FF6B00`, `#F97316`)**: Aksen modern, pin penanda terakhir baca, tab aktif, dan tombol interaktif. |
| **4** | **Jadwal Salat & Kompas Kiblat** | Menghitung waktu sholat presisi untuk **seluruh kabupaten/kota di 38 provinsi Indonesia** (WIB, WITA, WIT) secara offline & online (Sudut Subuh 20°, Sudut Isya 18°, Ihtiyat +2 menit standar Ditjen Bimas Islam Kemenag RI) beserta **Arah Kiblat presisi**. |
| **5** | **Penanda Terakhir Baca (Single Source of Truth)** | Hanya memiliki **SATU penanda PIN aktif secara global**. Ketika berpindah membaca surah/ayat lain (misal dari Al-Baqarah 286 ke Ali 'Imran 30), penanda lama otomatis terhapus dan tersinkronisasi instan. |
| **6** | **Fitur Salin & Bagikan Amanah** | Teks Arab ditampilkan dengan ukuran baku **28px** yang terbaca jelas. Format keluaran salin/bagikan telah dioptimalkan: **Teks Arab + Terjemahan Kemenag RI**, tanpa transliterasi Latin yang rancu, serta bebas teks "undefined". |
| **7** | **Audio Murottal 30 Juz Penuh** | Dilengkapi pemutar audio murottal resmi oleh **Syaikh Abdurrahman As-Sudais** (Imam Masjidil Haram Makkah) lengkap 114 Surah & 6.236 Ayat. |
| **8** | **Pengaturan & Personalisasi Penuh** | - **Pilihan Bahasa**: Bahasa Indonesia & English.<br>- **Tema Tampilan**: Mode Terang (Light) & Mode Gelap (Dark).<br>- **Tajwid Berwarna**: Opsi On/Off dengan legenda warna kaidah tajwid.<br>- **Ukuran Font**: Slider teks Arab (12px–28px) dengan toggle switch On/Off.<br>- **Keep Screen On**: Layar tetap menyala saat membaca Al-Qur'an. |

---

## 🔒 Audit Keamanan & Google Play Protect Compliance

Aplikasi ini telah melalui proses *security hardening* menyeluruh agar 100% aman dan bersih dari deteksi *harmful app* oleh Google Play Protect:

1. **Zero-Risk Permissions:**
   Manifest Android (`AndroidManifest.xml`) hanya menggunakan izin fungsional minimal:
   - `android.permission.INTERNET`
   - `android.permission.ACCESS_NETWORK_STATE`
   - `android.permission.POST_NOTIFICATIONS`
   - `android.permission.VIBRATE`
   - `android.permission.SCHEDULE_EXACT_ALARM`
   *(Izin berisiko tinggi seperti `WAKE_LOCK`, `RECEIVE_BOOT_COMPLETED`, dan `USE_EXACT_ALARM` telah ditiadakan).*

2. **Hardened WebView Architecture:**
   - `MIXED_CONTENT_NEVER_ALLOW`: Memblokir seluruh insecure HTTP content.
   - Strict Scheme Whitelisting pada `shouldOverrideUrlLoading`: Hanya mengizinkan protokol `https`, `http`, `mailto`, `tel`, dan `whatsapp`.

3. **Android 15 (Target SDK 35) & Modern Build Tooling:**
   - `compileSdk = 35`
   - `targetSdk = 35`
   - `versionCode = 3`, `versionName = "1.0.1"`
   - Ditandatangani menggunakan sertifikat rilis resmi (`v1`, `v2`, dan `v3` APK Signature Schemes valid).

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Buka Langsung di Browser (Tanpa Instalasi)
Anda dapat langsung membuka file `index.html` atau `alquran-mobile.html` di browser Google Chrome, Microsoft Edge, atau Mozilla Firefox.

### 2. Jalankan via Server Lokal Node.js (Disarankan)
Aplikasi menyediakan server bawaan ringan:
```bash
npm start
# atau
node server.js
```
Akses melalui peramban: `http://localhost:3000`

### 3. Progressive Web App (PWA) di Smartphone
1. Sambungkan HP dan Laptop ke jaringan WiFi yang sama.
2. Buka alamat IP lokal laptop Anda di browser HP (contoh: `http://192.168.1.x:3000`).
3. Pilih menu browser &rarr; **"Tambahkan ke Layar Utama" (Add to Home screen)** / **"Instal Aplikasi"**.
4. Aplikasi akan terinstal mandiri dengan mode fullscreen dan cache offline penuh.

---

## 📱 Build Android (APK & Android App Bundle - AAB)

Proyek ini menggunakan arsitektur Android Gradle bawaan (`android/`):

### Membangun Berkas Rilis:
```bash
# Sinkronisasi aset web terbaru ke Android
npm run build

# Masuk ke direktori Android dan bangun Release APK & AAB
cd android
./gradlew assembleRelease bundleRelease
```

Hasil build akan otomatis tersedia di:
- **APK Rilis:** `android/app/build/outputs/apk/release/app-release.apk` (atau di root: `Al-Quran-Digital-Indonesia.apk`)
- **AAB Rilis (Play Store):** `android/app/build/outputs/bundle/release/app-release.aab` (atau di root: `Al-Quran-Digital-Indonesia.aab`)

---

## 📁 Struktur Berkas Repositori

```
Project-Aplikasi-Al-Quran-Indonesia/
├── index.html                  # Aplikasi Web PWA Utama
├── alquran-mobile.html          # Bundle HTML mandiri terkompilasi
├── manifest.json               # Konfigurasi PWA Web App Manifest
├── sw.js                       # Service Worker Caching Offline
├── server.js                   # Server Node.js lokal
├── package.json                # Skrip & konfigurasi npm
├── .gitignore                  # Sanitasi file build, scratch, dan keystore
├── README.md                   # Dokumentasi resmi proyek
│
├── css/
│   └── app.css                 # Styling tema Navy, White, Dark, & Uthmanic typography
│
├── js/
│   ├── app.js                  # Controller utama, single source of truth, & event handling
│   ├── app.bundle.js           # Bundle JavaScript terkompilasi untuk WebView Android
│   ├── api/
│   │   └── quranApi.js         # Abstraksi fetching & offline caching
│   ├── data/
│   │   ├── quranMetadata.js    # 114 Surah, 6.236 Ayat, & Juz metadata
│   │   ├── offlineSurahs.js    # Data teks Rasm Utsmani & terjemahan offline
│   │   ├── surahHashes.js      # 114 SHA-256 reference hashes untuk validasi data
│   │   ├── prayerTimes.js      # Hisab waktu salat Kemenag RI & arah kiblat
│   │   ├── quranAudioDb.js     # Sumber audio murottal Syaikh As-Sudais 30 Juz
│   │   └── i18n.js             # Kamus multibahasa (ID & EN)
│   └── components/
│       ├── HomeScreen.js       # Layar Beranda Islami
│       ├── QuranReader.js      # Reader kanvas mushaf, font 28px, & audio bar
│       ├── SurahListModal.js   # Daftar 114 Surah dengan penanda PIN tunggal
│       ├── SearchModal.js      # Modul pencarian ayat & terjemahan
│       ├── PrayerTimesScreen.js# Layar jadwal salat & kompas kiblat
│       ├── SettingsModal.js    # Modal pengaturan bahasa, font, & tajwid
│       ├── PrivacyModal.js     # Kebijakan Privasi resmi
│       └── HadithModal.js      # Kumpulan hadits shahih tematik
│
├── assets/
│   ├── fonts/                  # Font resmi KFGQPC Uthmanic Hafs
│   └── icons/                  # Aset ikon dan logo aplikasi
│
└── android/                    # Proyek Native Android Studio (Gradle)
    ├── build.gradle            # Konfigurasi Gradle root
    └── app/
        ├── build.gradle        # Target SDK 35, Version 1.0.1 (Code 3)
        └── src/main/
            ├── AndroidManifest.xml # Izin minimal zero-risk
            ├── java/.../MainActivity.java # WebView dengan keamanan tinggi
            └── assets/www/index.html # Aset web tersinkronisasi
```

---

## 🛡️ Kebijakan Keamanan Pre-GitHub & Lisensi

- **Perlindungan Keystore:** File `release.keystore` telah dikecualikan di `.gitignore` untuk mencegah kebocoran kunci tanda tangan ke publik. Gunakan *GitHub Secrets* dan *CI/CD environment variables* untuk penandatanganan otomatis di cloud.
- **Integritas Data Syar'i:** Teks suci Al-Qur'an dilindungi secara kriptografis menggunakan 114 SHA-256 hashes untuk menjamin tidak ada perubahan harakat atau kata.
- **Lisensi:** Copyright &copy; 2026 Hendra Setiawan (Mashendig17al). All rights reserved.
