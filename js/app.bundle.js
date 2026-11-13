/**
 * Al-Qur'an Indonesia Pro - Standalone Application Bundle
 * Dilengkapi Pengaturan Lengkap:
 * 1. Bahasa: Indonesia / Inggris
 * 2. Tema: Terang / Gelap
 * 3. Tajwid Berwarna
 * 4. Ukuran Font Arabic & Terjemahan (12px s.d 28px)
 * 5. Qori Murottal: Syeikh Abdurrahman As-Sudais dari Madinah (Lengkap 114 Surat)
 * 6. Informasi Kontak Log: Hendra Setiawan (mashendig17al@gmail.com, +62 812 9726 8207)
 */

(function () {
  'use strict';

  // ==========================================================================
  // CENTRALIZED INTERNATIONALIZATION (i18n) & SURAH MEANINGS
  // ==========================================================================

/**
 * Centralized Internationalization (i18n) Module
 * Al-Qur'an Digital Indonesia
 * 
 * Mendukung pergantian bahasa dinamis penuh antara Bahasa Indonesia (id) dan English (en).
 */

const SURAH_MEANINGS_EN = {
  1: "The Opening",
  2: "The Cow",
  3: "Family of Imran",
  4: "The Women",
  5: "The Table Spread",
  6: "The Cattle",
  7: "The Heights",
  8: "The Spoils of War",
  9: "The Repentance",
  10: "Jonah",
  11: "Hud",
  12: "Joseph",
  13: "The Thunder",
  14: "Abraham",
  15: "The Rocky Tract",
  16: "The Bee",
  17: "The Night Journey",
  18: "The Cave",
  19: "Mary",
  20: "Ta-Ha",
  21: "The Prophets",
  22: "The Pilgrimage",
  23: "The Believers",
  24: "The Light",
  25: "The Criterion",
  26: "The Poets",
  27: "The Ant",
  28: "The Stories",
  29: "The Spider",
  30: "The Romans",
  31: "Luqman",
  32: "The Prostration",
  33: "The Combined Forces",
  34: "Sheba",
  35: "Originator",
  36: "Ya-Sin",
  37: "Those Who Set the Ranks",
  38: "The Letter Saad",
  39: "The Troops",
  40: "The Forgiver",
  41: "Explained in Detail",
  42: "The Consultation",
  43: "The Ornaments of Gold",
  44: "The Smoke",
  45: "The Crouching",
  46: "The Wind-Curved Sandhills",
  47: "Muhammad",
  48: "The Victory",
  49: "The Rooms",
  50: "The Letter Qaf",
  51: "The Winnowing Winds",
  52: "The Mount",
  53: "The Star",
  54: "The Moon",
  55: "The Beneficent",
  56: "The Inevitable",
  57: "The Iron",
  58: "The Pleading Woman",
  59: "The Exile",
  60: "She That Is to Be Examined",
  61: "The Ranks",
  62: "The Congregation",
  63: "The Hypocrites",
  64: "The Mutual Disillusion",
  65: "The Divorce",
  66: "The Prohibition",
  67: "The Sovereignty",
  68: "The Pen",
  69: "The Inevitable Reality",
  70: "The Ascending Stairways",
  71: "Noah",
  72: "The Jinn",
  73: "The Enshrouded One",
  74: "The Cloaked One",
  75: "The Resurrection",
  76: "Man",
  77: "The Emissaries",
  78: "The Tidings",
  79: "Those Who Drag Forth",
  80: "He Frowned",
  81: "The Overthrowing",
  82: "The Cleaving",
  83: "The Defrauding",
  84: "The Splitting Open",
  85: "The Mansions of the Stars",
  86: "The Morning Star",
  87: "The Most High",
  88: "The Overwhelming",
  89: "The Dawn",
  90: "The City",
  91: "The Sun",
  92: "The Night",
  93: "The Morning Hours",
  94: "The Relief",
  95: "The Fig",
  96: "The Clot",
  97: "The Power",
  98: "The Clear Proof",
  99: "The Earthquake",
  100: "The Courser",
  101: "The Calamity",
  102: "The Rivalry in World Increase",
  103: "The Declining Day",
  104: "The Traducer",
  105: "The Elephant",
  106: "Quraysh",
  107: "Small Kindnesses",
  108: "Abundance",
  109: "The Disbelievers",
  110: "The Divine Support",
  111: "The Palm Fiber",
  112: "The Sincerity",
  113: "The Daybreak",
  114: "Mankind"
};

const I18N = {
  id: {
    // Header & Brand
    appName: "Al-Qur'an Digital Indonesia",
    tagline: "Standar Kementerian Agama RI",
    searchPlaceholder: "Cari surah, ayat, juz, atau terjemahan...",

    // Navigation Bottom Bar
    navHome: "Beranda",
    navQuran: "Al-Qur'an",
    navSearch: "Pencarian",
    navPrayer: "Sholat",
    navSettings: "Pengaturan",

    // Home Quick Menu Buttons
    menuReadQuran: "BACA AL-QUR'AN",
    menuLastRead: "TERAKHIR DIBACA",
    menuSearch: "PENCARIAN AYAT",
    menuPrayerTimes: "JADWAL SHOLAT",
    menuSettings: "PENGATURAN",
    menuHadith: "HADITS SHAHIH",

    // Home Section Headers & Cards
    lastReadTitle: "Terakhir Dibaca",
    lastReadContinue: "Lanjutkan Membaca",
    lastReadEmpty: "Belum ada riwayat bacaan. Mulai membaca dari Surat Al-Fatihah.",
    lastReadSubtitle: "Surat {surah} • Ayat {ayah}",
    dailyVerseTitle: "Ayat Pilihan Hari Ini",
    dailyHadithTitle: "Hadits Pilihan Hari Ini",
    btnReadSurah: "Baca Surat",
    btnViewHadith: "Lihat Hadits",

    // Tabs & Surah List
    tabSurah: "Daftar Surat",
    tabJuz: "30 Juz",
    versesCount: "{count} Ayat",
    surahTypeMakkiyyah: "Makkiyyah",
    surahTypeMadaniyyah: "Madaniyyah",
    revelationPlace: "Tempat Turun",
    pageLabel: "Halaman {page}",
    juzLabel: "Juz {juz}",

    // Quran Reader
    backToHome: "Kembali ke Beranda",
    surahListTooltip: "Daftar Surah",
    bookmarkSurah: "Tandai Surah",
    keepScreenOnActive: "Layar Tetap Menyala: AKTIF",
    keepScreenOnInactive: "Biarkan Layar Tetap Menyala",
    customDisplaySettings: "Pengaturan Tampilan",
    markedLastReadBadge: "📌 TERAKHIR DIBACA",
    playVerse: "▶ Putar",
    pauseVerse: "⏸ Jeda",
    loadingAudio: "⏳ Memuat...",
    markLastRead: "📌 Terakhir Baca",
    isMarkedLastRead: "✓ Terakhir Baca",
    copyVerse: "📋 Salin",
    shareVerse: "📤 Bagikan",
    stopAudio: "Hentikan",
    playAllSurah: "Putar Murottal",
    floatingReciterPrefix: "🎙️",
    surahNotDownloadedTitle: "Surat Belum Diunduh",
    surahNotDownloadedDesc: "Surat ini belum diunduh ke memori perangkat Anda. Hubungkan internet untuk mengunduh surat ini atau unduh seluruh 114 surat agar dapat dibaca offline selamanya.",
    btnDownloadThisSurah: "📥 Unduh Surat Ini Sekarang",
    btnOpenOfflineManager: "⚙️ Buka Pengelola Data Offline (114 Surat)",

    // Settings Modal
    settingsTitle: "Pengaturan",
    settingsSubtitle: "Sesuaikan Tampilan & Audio Al-Qur'an",
    secLanguage: "1. BAHASA APLIKASI",
    secTheme: "2. TEMA WARNA",
    themeLightTitle: "Mode Terang",
    themeLightDesc: "Latar kertas mushaf gading hangat",
    themeDarkTitle: "Mode Gelap",
    themeDarkDesc: "Latar gelap hemat baterai",
    secTajweed: "3. TAJWID BERWARNA",
    enableTajweedTitle: "Aktifkan Tajwid Berwarna",
    enableTajweedDesc: "Pewarnaan tajwid (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad)",
    secFontSize: "4. UKURAN FONT",
    enableFontSizeTitle: "Aktifkan Pengaturan Ukuran Font",
    enableFontSizeDesc: "Tampilkan atau sembunyikan pengaturan ukuran font.",
    arabicFontSizeLabel: "Ukuran Font Arab",
    latinFontSizeLabel: "Ukuran Font Latin",
    translationFontSizeLabel: "Ukuran Font Terjemahan",
    secQari: "5. QORI MUROTTAL",
    secKeepScreen: "6. BIARKAN LAYAR TETAP MENYALA",
    keepScreenTitle: "Biarkan Layar Tetap Menyala",
    keepScreenDesc: "Layar HP tidak akan otomatis mati (sleep) saat Anda membaca Al-Qur'an",
    secOfflineData: "7. DATA AL-QUR'AN OFFLINE (114 SURAT)",
    offlineDataTitle: "Database Lokal IndexedDB",
    offlineDataDesc: "Simpan seluruh 114 surat agar dapat dibaca tanpa internet",
    offlineStatsBadge: "✓ 6.236 Ayat Lengkap • Akses instan tanpa loading • Otomatis tersimpan permanen",
    btnManage: "💾 Kelola",
    secPrivacy: "8. KEBIJAKAN PRIVASI & KEAMANAN DATA",
    privacyTitle: "Privasi & Keamanan Data",
    privacyDesc: "Bebas pelacak & iklan • Data tersimpan di HP Anda",
    btnView: "🛡️ Lihat",
    secAbout: "9. TENTANG APLIKASI",
    aboutTitle: "Al-Qur'an Standar Indonesia",
    aboutDesc: "Mushaf Standar Indonesia (MSI) Kementerian Agama RI",
    aboutKemenagLink: "Standar Kemenag RI",
    statusActive: "AKTIF",
    statusInactive: "NONAKTIF",
    statusConnected: "Terhubung Internet (Online)",
    statusOffline: "Mode Offline (Tanpa Internet)",

    // Prayer Times Screen
    prayerTitle: "Jadwal Salat & Kiblat",
    prayerCityLabel: "Wilayah Waktu Salat:",
    nextPrayerPrefix: "Menuju Salat",
    nextPrayerIn: "dalam",
    fajr: "Subuh",
    sunrise: "Terbit",
    dhuhr: "Dzuhur",
    asr: "Ashar",
    maghrib: "Maghrib",
    isha: "Isya",
    prayerAlarmTitle: "Pengingat Adzan Otomatis",
    prayerAlarmDesc: "Alarm bunyi adzan saat waktu salat tiba",
    prayerAlarmOn: "Notifikasi Adzan: AKTIF",
    prayerAlarmOff: "Notifikasi Adzan: NONAKTIF",
    qiblaTitle: "Arah Kiblat",
    qiblaDesc: "Arahkan perangkat hingga jarum Ka'bah lurus menghadap ke atas.",
    qiblaAngleLabel: "Derajat Kiblat dari Utara:",
    qiblaAccuracyNote: "Pastikan GPS aktif & kalibrasi kompas dengan memutar perangkat angka 8 jika perlu.",

    // Search Modal
    searchModalTitle: "Pencarian Al-Qur'an",
    searchFilterAll: "Semua",
    searchFilterSurah: "Nama Surat",
    searchFilterTranslation: "Terjemahan",
    searchResultsCount: "Ditemukan {count} hasil pencarian",
    searchNoResults: "Tidak ada ayat atau surat yang cocok dengan kata kunci.",
    searchPlaceholderInput: "Ketik kata pencarian (contoh: sabar, sholat, rahmat)...",

    // Last Read Modal
    viewAsSurahOption: "Lihat sebagai Surah",
    viewAsJuzOption: "Lihat sebagai Juz (Juz {juz})",
    btnClose: "Tutup",

    // Offline Manager Modal
    offlineModalTitle: "Pengelola Data & Audio Offline",
    offlineModalSubtitle: "Penyimpanan Lokal Cepat IndexedDB (Teks & Audio)",
    tabTextManager: "📖 Teks Al-Qur'an",
    tabAudioManager: "🎧 Audio Murottal",
    storedSurahsCard: "Surat Tersimpan",
    storageUsageCard: "Penggunaan Memori",
    btnDownloadAllSurahs: "Unduh Seluruh 114 Surat (Offline Lengkap)",
    btnResumeDownloadSurahs: "Lanjutkan Unduh Surat Tersisa ({count} Surat)",
    btnPauseDownload: "Jeda / Hentikan Unduhan",
    btnVerifyDataset: "Periksa & Verifikasi Integritas Data (6.236 Ayat)",
    btnResetDataset: "Unduh Ulang Data Teks / Reset Database",
    selectQariLabel: "Pilih Qori Murottal:",
    btnDownloadAllAudio: "Unduh Seluruh Audio ({count} Surat)",
    btnResumeAudio: "Lanjutkan Unduh Audio ({count} Surat)",
    btnDeleteQariAudio: "Hapus Seluruh Audio Qori Ini",

    // Hadith Modal
    hadithModalTitle: "Hadits Shahih Pilihan",
    hadithModalSubtitle: "Kumpulan Hadits Bukhari, Muslim & Sunan Terpercaya",
    btnCopyHadith: "Salin Teks",
    btnShareHadith: "Bagikan",
    hadithCategoryAll: "Semua Kategori",

    // Copy & Share Output Format
    copyShareHeader: "AL-QUR'AN DIGITAL INDONESIA",
    copyShareSurahPrefix: "QS.",
    copyShareSource: "Sumber: Al-Qur'an Standar Kemenag RI",
    toastCopySuccess: "Berhasil menyalin ayat Al-Qur'an.",
    toastCopyFailed: "Gagal memuat data ayat untuk disalin.",
    toastShareFallback: "Teks ayat disalin ke clipboard untuk dibagikan ke WhatsApp.",
    toastLanguageSwitched: "Bahasa diubah ke Bahasa Indonesia!",
    toastBookmarkAdded: "⭐ QS. {surah} ditandai di Bookmark!",
    toastBookmarkRemoved: "Bookmark QS. {surah} dihapus",
    toastScreenOnActive: "Layar akan tetap menyala selama membaca Al-Qur'an.",
    toastScreenOnInactive: "Layar akan mengikuti waktu tunggu layar (timeout) HP Anda.",

    // Dialogs
    confirmResetOffline: "Apakah Anda yakin ingin mereset database Al-Qur'an offline? Surat yang belum diunduh ulang akan memerlukan internet.",
    confirmDeleteAudioQari: "Hapus semua audio tersimpan untuk qori ini?",
  },

  en: {
    // Header & Brand
    appName: "Al-Quran Digital Indonesia",
    tagline: "Ministry of Religious Affairs Standards",
    searchPlaceholder: "Search surahs, verses, juz, or translation...",

    // Navigation Bottom Bar
    navHome: "Home",
    navQuran: "Quran",
    navSearch: "Search",
    navPrayer: "Prayer",
    navSettings: "Settings",

    // Home Quick Menu Buttons
    menuReadQuran: "READ QURAN",
    menuLastRead: "LAST READ",
    menuSearch: "VERSE SEARCH",
    menuPrayerTimes: "PRAYER TIMES",
    menuSettings: "SETTINGS",
    menuHadith: "SAHIH HADITHS",

    // Home Section Headers & Cards
    lastReadTitle: "Last Read",
    lastReadContinue: "Continue Reading",
    lastReadEmpty: "No reading history yet. Start reading from Surah Al-Fatihah.",
    lastReadSubtitle: "Surah {surah} • Verse {ayah}",
    dailyVerseTitle: "Featured Verse of the Day",
    dailyHadithTitle: "Featured Hadith of the Day",
    btnReadSurah: "Read Surah",
    btnViewHadith: "View Hadith",

    // Tabs & Surah List
    tabSurah: "Surah List",
    tabJuz: "30 Juz",
    versesCount: "{count} Verses",
    surahTypeMakkiyyah: "Meccan",
    surahTypeMadaniyyah: "Medinan",
    revelationPlace: "Revelation Place",
    pageLabel: "Page {page}",
    juzLabel: "Juz {juz}",

    // Quran Reader
    backToHome: "Back to Home",
    surahListTooltip: "Surah List",
    bookmarkSurah: "Bookmark Surah",
    keepScreenOnActive: "Keep Screen On: ACTIVE",
    keepScreenOnInactive: "Keep Screen On",
    customDisplaySettings: "Display Settings",
    markedLastReadBadge: "📌 LAST READ",
    playVerse: "▶ Play",
    pauseVerse: "⏸ Pause",
    loadingAudio: "⏳ Loading...",
    markLastRead: "📌 Mark Last Read",
    isMarkedLastRead: "✓ Last Read",
    copyVerse: "📋 Copy",
    shareVerse: "📤 Share",
    stopAudio: "Stop",
    playAllSurah: "Play Full Surah",
    floatingReciterPrefix: "🎙️",
    surahNotDownloadedTitle: "Surah Not Downloaded",
    surahNotDownloadedDesc: "This surah has not been downloaded for offline reading yet. Connect to the internet to download this surah or the complete 114 surahs.",
    btnDownloadThisSurah: "📥 Download This Surah Now",
    btnOpenOfflineManager: "⚙️ Open Offline Manager (114 Surahs)",

    // Settings Modal
    settingsTitle: "Settings",
    settingsSubtitle: "Customize Quran Display & Audio",
    secLanguage: "1. APPLICATION LANGUAGE",
    secTheme: "2. COLOR THEME",
    themeLightTitle: "Light Mode",
    themeLightDesc: "Warm parchment paper background",
    themeDarkTitle: "Dark Mode",
    themeDarkDesc: "Battery-saving midnight dark theme",
    secTajweed: "3. COLOR-CODED TAJWEED",
    enableTajweedTitle: "Enable Color-Coded Tajweed",
    enableTajweedDesc: "Color rules (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad)",
    secFontSize: "4. FONT SIZE",
    enableFontSizeTitle: "Enable Font Size Settings",
    enableFontSizeDesc: "Show or hide font size adjustment sliders.",
    arabicFontSizeLabel: "Arabic Font Size",
    latinFontSizeLabel: "Latin Font Size",
    translationFontSizeLabel: "Translation Font Size",
    secQari: "5. AUDIO RECITATION (QARI)",
    secKeepScreen: "6. KEEP SCREEN ON",
    keepScreenTitle: "Keep Screen On",
    keepScreenDesc: "Screen will remain awake while reading the Quran",
    secOfflineData: "7. OFFLINE QURAN DATA (114 SURAHS)",
    offlineDataTitle: "Local IndexedDB Storage",
    offlineDataDesc: "Save all 114 surahs to read anytime without internet",
    offlineStatsBadge: "✓ 6,236 Complete Verses • Instant access without loading • Saved permanently",
    btnManage: "💾 Manage",
    secPrivacy: "8. PRIVACY POLICY & DATA SECURITY",
    privacyTitle: "Privacy & Data Security",
    privacyDesc: "Zero trackers & ads • Data stored locally on your device",
    btnView: "🛡️ View",
    secAbout: "9. ABOUT APPLICATION",
    aboutTitle: "Indonesian Standard Quran",
    aboutDesc: "Standard Indonesian Mushaf (MSI) Ministry of Religious Affairs RI",
    aboutKemenagLink: "Kemenag RI Standards",
    statusActive: "ACTIVE",
    statusInactive: "OFF",
    statusConnected: "Online (Connected)",
    statusOffline: "Offline Mode (No Internet)",

    // Prayer Times Screen
    prayerTitle: "Prayer Times & Qibla",
    prayerCityLabel: "Prayer Times Region:",
    nextPrayerPrefix: "Time to",
    nextPrayerIn: "in",
    fajr: "Fajr",
    sunrise: "Sunrise",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    prayerAlarmTitle: "Automatic Adhan Reminders",
    prayerAlarmDesc: "Play adhan notification when prayer time arrives",
    prayerAlarmOn: "Adhan Reminder: ACTIVE",
    prayerAlarmOff: "Adhan Reminder: OFF",
    qiblaTitle: "Qibla Direction",
    qiblaDesc: "Rotate your device until the Kaaba needle points straight upward.",
    qiblaAngleLabel: "Qibla Angle from North:",
    qiblaAccuracyNote: "Ensure GPS is active & calibrate compass by moving device in figure 8 if needed.",

    // Search Modal
    searchModalTitle: "Quran Search",
    searchFilterAll: "All",
    searchFilterSurah: "Surah Names",
    searchFilterTranslation: "Translations",
    searchResultsCount: "Found {count} search results",
    searchNoResults: "No verses or surahs matched your search query.",
    searchPlaceholderInput: "Type search keywords (e.g., patience, prayer, mercy)...",

    // Last Read Modal
    viewAsSurahOption: "View as Surah",
    viewAsJuzOption: "View as Juz (Juz {juz})",
    btnClose: "Close",

    // Offline Manager Modal
    offlineModalTitle: "Offline Data & Audio Manager",
    offlineModalSubtitle: "Fast Local IndexedDB Storage (Text & Audio)",
    tabTextManager: "📖 Quran Text",
    tabAudioManager: "🎧 Offline Audio",
    storedSurahsCard: "Stored Surahs",
    storageUsageCard: "Storage Usage",
    btnDownloadAllSurahs: "Download All 114 Surahs (Full Offline)",
    btnResumeDownloadSurahs: "Resume Download Remaining ({count} Surahs)",
    btnPauseDownload: "Pause / Stop Download",
    btnVerifyDataset: "Verify Dataset Integrity (6,236 Verses)",
    btnResetDataset: "Re-download All / Reset Text Storage",
    selectQariLabel: "Select Qari for Offline Download:",
    btnDownloadAllAudio: "Download All Audio ({count} Surahs)",
    btnResumeAudio: "Resume Download Audio ({count} Surahs)",
    btnDeleteQariAudio: "Delete All Stored Audio for This Qari",

    // Hadith Modal
    hadithModalTitle: "Selected Sahih Hadiths",
    hadithModalSubtitle: "Authentic Collections from Bukhari, Muslim & Sunan",
    btnCopyHadith: "Copy Text",
    btnShareHadith: "Share",
    hadithCategoryAll: "All Categories",

    // Copy & Share Output Format
    copyShareHeader: "AL-QURAN DIGITAL INDONESIA",
    copyShareSurahPrefix: "Surah",
    copyShareSource: "Source: Ministry of Religious Affairs RI / Sahih International Translation",
    toastCopySuccess: "Quran verse copied successfully.",
    toastCopyFailed: "Failed to load verse data to copy.",
    toastShareFallback: "Verse text copied to clipboard to share on WhatsApp.",
    toastLanguageSwitched: "Language switched to English!",
    toastBookmarkAdded: "⭐ Surah {surah} bookmarked!",
    toastBookmarkRemoved: "Bookmark for Surah {surah} removed",
    toastScreenOnActive: "Screen will stay awake while reading the Quran.",
    toastScreenOnInactive: "Screen will follow your device's screen timeout settings.",

    // Dialogs
    confirmResetOffline: "Are you sure you want to reset offline Quran database? Surahs not yet re-downloaded will require internet.",
    confirmDeleteAudioQari: "Delete all stored audio for this reciter?",
  }
};

/**
 * Helper terjemahan terpusat dengan interpolasi parameter
 */
function t(key, lang = "id", params = {}) {
  const currentLang = (lang === "en") ? "en" : "id";
  const dict = I18N[currentLang] || I18N.id;
  let text = dict[key] || I18N.id[key] || key;

  if (params && typeof params === "object") {
    Object.keys(params).forEach(pKey => {
      text = text.replace(new RegExp(`\\{${pKey}\\}`, "g"), params[pKey]);
    });
  }

  return text;
}

/**
 * Mengambil arti surat dalam bahasa yang dipilih
 */
function getSurahMeaning(surahNumber, lang = "id", fallbackMeaning = "") {
  const num = Number(surahNumber);
  if (lang === "en" && SURAH_MEANINGS_EN[num]) {
    return SURAH_MEANINGS_EN[num];
  }
  return fallbackMeaning || (SURAH_MEANINGS_EN[num] || "");
}


  // ==========================================================================
  // METADATA 114 SURAH
  // ==========================================================================

  const QURAN_SURAH_LIST = [
    { number: 1, name: "Al-Fatihah", arabic: "الفَاتِحَةُ", meaning: "Pembukaan", verses: 7, type: "Makkiyyah", juz: 1, page: 1 },
    { number: 2, name: "Al-Baqarah", arabic: "البَقَرَةُ", meaning: "Sapi Betina", verses: 286, type: "Madaniyyah", juz: 1, page: 2 },
    { number: 3, name: "Ali 'Imran", arabic: "آلُ عِمْرَانَ", meaning: "Keluarga Imran", verses: 200, type: "Madaniyyah", juz: 3, page: 50 },
    { number: 4, name: "An-Nisa'", arabic: "النِّسَاءُ", meaning: "Wanita", verses: 176, type: "Madaniyyah", juz: 4, page: 77 },
    { number: 5, name: "Al-Ma'idah", arabic: "المَائِدَةُ", meaning: "Hidangan", verses: 120, type: "Madaniyyah", juz: 6, page: 106 },
    { number: 6, name: "Al-An'am", arabic: "الأَنْعَامُ", meaning: "Binatang Ternak", verses: 165, type: "Makkiyyah", juz: 7, page: 128 },
    { number: 7, name: "Al-A'raf", arabic: "الأَعْرَافُ", meaning: "Tempat Tertinggi", verses: 206, type: "Makkiyyah", juz: 8, page: 151 },
    { number: 8, name: "Al-Anfal", arabic: "الأَنْفَالُ", meaning: "Rampasan Perang", verses: 75, type: "Madaniyyah", juz: 9, page: 177 },
    { number: 9, name: "At-Taubah", arabic: "التَّوْبَةُ", meaning: "Pengampunan", verses: 129, type: "Madaniyyah", juz: 10, page: 187 },
    { number: 10, name: "Yunus", arabic: "يُونُسُ", meaning: "Yunus", verses: 109, type: "Makkiyyah", juz: 11, page: 208 },
    { number: 11, name: "Hud", arabic: "هُودٌ", meaning: "Hud", verses: 123, type: "Makkiyyah", juz: 11, page: 221 },
    { number: 12, name: "Yusuf", arabic: "يُوسُفُ", meaning: "Yusuf", verses: 111, type: "Makkiyyah", juz: 12, page: 235 },
    { number: 13, name: "Ar-Ra'd", arabic: "الرَّعْدُ", meaning: "Guruh", verses: 43, type: "Madaniyyah", juz: 13, page: 249 },
    { number: 14, name: "Ibrahim", arabic: "إِبْرَاهِيمُ", meaning: "Ibrahim", verses: 52, type: "Makkiyyah", juz: 13, page: 255 },
    { number: 15, name: "Al-Hijr", arabic: "الحِجْرُ", meaning: "Bukit Pasir", verses: 99, type: "Makkiyyah", juz: 14, page: 262 },
    { number: 16, name: "An-Nahl", arabic: "النَّحْلُ", meaning: "Lebah", verses: 128, type: "Makkiyyah", juz: 14, page: 267 },
    { number: 17, name: "Al-Isra'", arabic: "الإِسْرَاءُ", meaning: "Memperjalankan Malam Hari", verses: 111, type: "Makkiyyah", juz: 15, page: 282 },
    { number: 18, name: "Al-Kahf", arabic: "الكَهْفُ", meaning: "Gua", verses: 110, type: "Makkiyyah", juz: 15, page: 293 },
    { number: 19, name: "Maryam", arabic: "مَرْيَمُ", meaning: "Maryam", verses: 98, type: "Makkiyyah", juz: 16, page: 305 },
    { number: 20, name: "Ta-Ha", arabic: "طٰهٰ", meaning: "Ta-Ha", verses: 135, type: "Makkiyyah", juz: 16, page: 312 },
    { number: 21, name: "Al-Anbiya'", arabic: "الأَنْبِيَاءُ", meaning: "Para Nabi", verses: 112, type: "Makkiyyah", juz: 17, page: 322 },
    { number: 22, name: "Al-Hajj", arabic: "الحَجُّ", meaning: "Haji", verses: 78, type: "Madaniyyah", juz: 17, page: 332 },
    { number: 23, name: "Al-Mu'minun", arabic: "المُؤْمِنُونَ", meaning: "Orang-Orang Mukmin", verses: 118, type: "Makkiyyah", juz: 18, page: 342 },
    { number: 24, name: "An-Nur", arabic: "النُّورُ", meaning: "Cahaya", verses: 64, type: "Madaniyyah", juz: 18, page: 350 },
    { number: 25, name: "Al-Furqan", arabic: "الفُرْقَانُ", meaning: "Pembeda", verses: 77, type: "Makkiyyah", juz: 18, page: 359 },
    { number: 26, name: "Asy-Syu'ara'", arabic: "الشُّعَرَاءُ", meaning: "Para Penyair", verses: 227, type: "Makkiyyah", juz: 19, page: 367 },
    { number: 27, name: "An-Naml", arabic: "النَّمْلُ", meaning: "Semut", verses: 93, type: "Makkiyyah", juz: 19, page: 377 },
    { number: 28, name: "Al-Qasas", arabic: "القَصَصُ", meaning: "Kisah-Kisah", verses: 88, type: "Makkiyyah", juz: 20, page: 385 },
    { number: 29, name: "Al-'Ankabut", arabic: "العَنْكَبُوتُ", meaning: "Laba-Laba", verses: 69, type: "Makkiyyah", juz: 20, page: 396 },
    { number: 30, name: "Ar-Rum", arabic: "الرُّومُ", meaning: "Bangsa Romawi", verses: 60, type: "Makkiyyah", juz: 21, page: 404 },
    { number: 31, name: "Luqman", arabic: "لُقْمَانُ", meaning: "Luqman", verses: 34, type: "Makkiyyah", juz: 21, page: 411 },
    { number: 32, name: "As-Sajdah", arabic: "السَّجْدَةُ", meaning: "Sujud", verses: 30, type: "Makkiyyah", juz: 21, page: 415 },
    { number: 33, name: "Al-Ahzab", arabic: "الأَحْزَابُ", meaning: "Golongan yang Bersekutu", verses: 73, type: "Madaniyyah", juz: 21, page: 418 },
    { number: 34, name: "Saba'", arabic: "سَبَأٌ", meaning: "Kaum Saba'", verses: 54, type: "Makkiyyah", juz: 22, page: 428 },
    { number: 35, name: "Fatir", arabic: "فَاطِرٌ", meaning: "Pencipta", verses: 45, type: "Makkiyyah", juz: 22, page: 434 },
    { number: 36, name: "Ya-Sin", arabic: "يٰسٓ", meaning: "Ya-Sin", verses: 83, type: "Makkiyyah", juz: 22, page: 440 },
    { number: 37, name: "As-Saffat", arabic: "الصَّافَّاتُ", meaning: "Barisan-Barisan", verses: 182, type: "Makkiyyah", juz: 23, page: 446 },
    { number: 38, name: "Sad", arabic: "صٓ", meaning: "Shad", verses: 88, type: "Makkiyyah", juz: 23, page: 453 },
    { number: 39, name: "Az-Zumar", arabic: "الزُّمَرُ", meaning: "Rombongan-Rombongan", verses: 75, type: "Makkiyyah", juz: 23, page: 458 },
    { number: 40, name: "Ghafir", arabic: "غَافِرٌ", meaning: "Maha Pengampun", verses: 85, type: "Makkiyyah", juz: 24, page: 467 },
    { number: 41, name: "Fussilat", arabic: "فُصِّلَتْ", meaning: "Dijelaskan", verses: 54, type: "Makkiyyah", juz: 24, page: 477 },
    { number: 42, name: "Asy-Syura", arabic: "الشُّورَىٰ", meaning: "Musyawarah", verses: 53, type: "Makkiyyah", juz: 25, page: 483 },
    { number: 43, name: "Az-Zukhruf", arabic: "الزُّخْرُفُ", meaning: "Perhiasan", verses: 89, type: "Makkiyyah", juz: 25, page: 489 },
    { number: 44, name: "Ad-Dukhan", arabic: "الدُّخَانُ", meaning: "Kabut", verses: 59, type: "Makkiyyah", juz: 25, page: 496 },
    { number: 45, name: "Al-Jasiyah", arabic: "الجَاثِيَةُ", meaning: "Yang Berlutut", verses: 37, type: "Makkiyyah", juz: 25, page: 499 },
    { number: 46, name: "Al-Ahqaf", arabic: "الأَحْقَافُ", meaning: "Bukit-Bukit Pasir", verses: 35, type: "Makkiyyah", juz: 26, page: 502 },
    { number: 47, name: "Muhammad", arabic: "مُحَمَّدٌ", meaning: "Nabi Muhammad", verses: 38, type: "Madaniyyah", juz: 26, page: 507 },
    { number: 48, name: "Al-Fath", arabic: "الفَتْحُ", meaning: "Kemenangan", verses: 29, type: "Madaniyyah", juz: 26, page: 511 },
    { number: 49, name: "Al-Hujurat", arabic: "الحُجُرَاتُ", meaning: "Kamar-Kamar", verses: 18, type: "Madaniyyah", juz: 26, page: 515 },
    { number: 50, name: "Qaf", arabic: "قٓ", meaning: "Qaf", verses: 45, type: "Makkiyyah", juz: 26, page: 518 },
    { number: 51, name: "Az-Zariyat", arabic: "الذَّارِيَاتُ", meaning: "Angin yang Menerbangkan", verses: 60, type: "Makkiyyah", juz: 26, page: 520 },
    { number: 52, name: "At-Tur", arabic: "الطُّورُ", meaning: "Bukit", verses: 49, type: "Makkiyyah", juz: 27, page: 523 },
    { number: 53, name: "An-Najm", arabic: "النَّجْمُ", meaning: "Bintang", verses: 62, type: "Makkiyyah", juz: 27, page: 526 },
    { number: 54, name: "Al-Qamar", arabic: "القَمَرُ", meaning: "Bulan", verses: 55, type: "Makkiyyah", juz: 27, page: 528 },
    { number: 55, name: "Ar-Rahman", arabic: "الرَّحْمٰنُ", meaning: "Maha Pengasih", verses: 78, type: "Madaniyyah", juz: 27, page: 531 },
    { number: 56, name: "Al-Waqi'ah", arabic: "الوَاقِعَةُ", meaning: "Hari Kiamat", verses: 96, type: "Makkiyyah", juz: 27, page: 534 },
    { number: 57, name: "Al-Hadid", arabic: "الحَدِيدُ", meaning: "Besi", verses: 29, type: "Madaniyyah", juz: 27, page: 537 },
    { number: 58, name: "Al-Mujadilah", arabic: "المُجَادَلَةُ", meaning: "Gugatan", verses: 22, type: "Madaniyyah", juz: 28, page: 542 },
    { number: 59, name: "Al-Hasyr", arabic: "الحَشْرُ", meaning: "Pengusiran", verses: 24, type: "Madaniyyah", juz: 28, page: 545 },
    { number: 60, name: "Al-Mumtahanah", arabic: "المُمْتَحَنَةُ", meaning: "Wanita yang Diuji", verses: 13, type: "Madaniyyah", juz: 28, page: 549 },
    { number: 61, name: "As-Saff", arabic: "الصَّفُّ", meaning: "Barisan", verses: 14, type: "Madaniyyah", juz: 28, page: 551 },
    { number: 62, name: "Al-Jumu'ah", arabic: "الجُمُعَةُ", meaning: "Hari Jumat", verses: 11, type: "Madaniyyah", juz: 28, page: 553 },
    { number: 63, name: "Al-Munafiqun", arabic: "المُنَافِقُونَ", meaning: "Orang-Orang Munafik", verses: 11, type: "Madaniyyah", juz: 28, page: 554 },
    { number: 64, name: "At-Tagabun", arabic: "التَّغَابُنُ", meaning: "Pengungkapan Kesalahan", verses: 18, type: "Madaniyyah", juz: 28, page: 556 },
    { number: 65, name: "At-Talaq", arabic: "الطَّلَاقُ", meaning: "Perceraian", verses: 12, type: "Madaniyyah", juz: 28, page: 558 },
    { number: 66, name: "At-Tahrim", arabic: "التَّحْرِيمُ", meaning: "Pengharaman", verses: 12, type: "Madaniyyah", juz: 28, page: 560 },
    { number: 67, name: "Al-Mulk", arabic: "المُلْكُ", meaning: "Kerajaan", verses: 30, type: "Makkiyyah", juz: 29, page: 562 },
    { number: 68, name: "Al-Qalam", arabic: "القَلَمُ", meaning: "Pena", verses: 52, type: "Makkiyyah", juz: 29, page: 564 },
    { number: 69, name: "Al-Haqqah", arabic: "الحَاقَّةُ", meaning: "Hari Kiamat", verses: 52, type: "Makkiyyah", juz: 29, page: 566 },
    { number: 70, name: "Al-Ma'arij", arabic: "المَعَارِجُ", meaning: "Tempat Naik", verses: 44, type: "Makkiyyah", juz: 29, page: 568 },
    { number: 71, name: "Nuh", arabic: "نُوحٌ", meaning: "Nabi Nuh", verses: 28, type: "Makkiyyah", juz: 29, page: 570 },
    { number: 72, name: "Al-Jinn", arabic: "الجِنُّ", meaning: "Jin", verses: 28, type: "Makkiyyah", juz: 29, page: 572 },
    { number: 73, name: "Al-Muzzammil", arabic: "المُزَّمِّلُ", meaning: "Orang yang Berselimut", verses: 20, type: "Makkiyyah", juz: 29, page: 574 },
    { number: 74, name: "Al-Muddassir", arabic: "المُدَّثِّرُ", meaning: "Orang yang Berkemul", verses: 56, type: "Makkiyyah", juz: 29, page: 575 },
    { number: 75, name: "Al-Qiyamah", arabic: "القِيَامَةُ", meaning: "Hari Kebangkitan", verses: 40, type: "Makkiyyah", juz: 29, page: 577 },
    { number: 76, name: "Al-Insan", arabic: "الإِنْسَانُ", meaning: "Manusia", verses: 31, type: "Madaniyyah", juz: 29, page: 578 },
    { number: 77, name: "Al-Mursalat", arabic: "المُرْسَلَاتُ", meaning: "Malaikat yang Diutus", verses: 50, type: "Makkiyyah", juz: 29, page: 580 },
    { number: 78, name: "An-Naba'", arabic: "النَّبَأُ", meaning: "Berita Besar", verses: 40, type: "Makkiyyah", juz: 30, page: 582 },
    { number: 79, name: "An-Nazi'at", arabic: "النَّازِعَاتُ", meaning: "Malaikat yang Mencabut", verses: 46, type: "Makkiyyah", juz: 30, page: 583 },
    { number: 80, name: "'Abasa", arabic: "عَبَسَ", meaning: "Ia Bermuka Masam", verses: 42, type: "Makkiyyah", juz: 30, page: 585 },
    { number: 81, name: "At-Takwir", arabic: "التَّكْوِيرُ", meaning: "Menggulung", verses: 29, type: "Makkiyyah", juz: 30, page: 586 },
    { number: 82, name: "Al-Infitar", arabic: "الإِنْفِطَارُ", meaning: "Terbelah", verses: 19, type: "Makkiyyah", juz: 30, page: 587 },
    { number: 83, name: "Al-Mutaffifin", arabic: "المُطَفِّفِينَ", meaning: "Orang-Orang Curang", verses: 36, type: "Makkiyyah", juz: 30, page: 587 },
    { number: 84, name: "Al-Insyiqaq", arabic: "الإِنْشِقَاقُ", meaning: "Terbelah", verses: 25, type: "Makkiyyah", juz: 30, page: 589 },
    { number: 85, name: "Al-Buruj", arabic: "البُرُوجُ", meaning: "Gugusan Bintang", verses: 22, type: "Makkiyyah", juz: 30, page: 590 },
    { number: 86, name: "At-Tariq", arabic: "الطَّارِقُ", meaning: "Yang Datang di Malam Hari", verses: 17, type: "Makkiyyah", juz: 30, page: 591 },
    { number: 87, name: "Al-A'la", arabic: "الأَعْلَىٰ", meaning: "Maha Tinggi", verses: 19, type: "Makkiyyah", juz: 30, page: 591 },
    { number: 88, name: "Al-Ghasyiyah", arabic: "الغَاشِيَةُ", meaning: "Hari Pembalasan", verses: 26, type: "Makkiyyah", juz: 30, page: 592 },
    { number: 89, name: "Al-Fajr", arabic: "الفَجْرُ", meaning: "Fajar", verses: 30, type: "Makkiyyah", juz: 30, page: 593 },
    { number: 90, name: "Al-Balad", arabic: "البَلَدُ", meaning: "Negeri", verses: 20, type: "Makkiyyah", juz: 30, page: 594 },
    { number: 91, name: "Asy-Syams", arabic: "الشَّمْسُ", meaning: "Matahari", verses: 15, type: "Makkiyyah", juz: 30, page: 595 },
    { number: 92, name: "Al-Lail", arabic: "اللَّيْلُ", meaning: "Malam", verses: 21, type: "Makkiyyah", juz: 30, page: 595 },
    { number: 93, name: "Ad-Duha", arabic: "الضُّحَىٰ", meaning: "Waktu Duha", verses: 11, type: "Makkiyyah", juz: 30, page: 596 },
    { number: 94, name: "Asy-Syarh", arabic: "الشَّرْحُ", meaning: "Kelapangan", verses: 8, type: "Makkiyyah", juz: 30, page: 596 },
    { number: 95, name: "At-Tin", arabic: "التِّينُ", meaning: "Buah Tin", verses: 8, type: "Makkiyyah", juz: 30, page: 597 },
    { number: 96, name: "Al-'Alaq", arabic: "العَلَقُ", meaning: "Segumpal Darah", verses: 19, type: "Makkiyyah", juz: 30, page: 597 },
    { number: 97, name: "Al-Qadr", arabic: "القَدْرُ", meaning: "Kemuliaan", verses: 5, type: "Makkiyyah", juz: 30, page: 598 },
    { number: 98, name: "Al-Bayyinah", arabic: "البَيِّنَةُ", meaning: "Bukti Nyata", verses: 8, type: "Madaniyyah", juz: 30, page: 598 },
    { number: 99, name: "Az-Zalzalah", arabic: "الزَّلْزَلَةُ", meaning: "Keguncangan", verses: 8, type: "Madaniyyah", juz: 30, page: 599 },
    { number: 100, name: "Al-'Adiyat", arabic: "العَادِيَاتُ", meaning: "Kuda Perang Berlari Kencang", verses: 11, type: "Makkiyyah", juz: 30, page: 599 },
    { number: 101, name: "Al-Qari'ah", arabic: "القَارِعَةُ", meaning: "Hari Kiamat yang Menggemparkan", verses: 11, type: "Makkiyyah", juz: 30, page: 600 },
    { number: 102, name: "At-Takasur", arabic: "التَّكَاثُرُ", meaning: "Bermegah-Megahan", verses: 8, type: "Makkiyyah", juz: 30, page: 600 },
    { number: 103, name: "Al-'Asr", arabic: "العَصْرُ", meaning: "Masa / Waktu", verses: 3, type: "Makkiyyah", juz: 30, page: 601 },
    { number: 104, name: "Al-Humazah", arabic: "الهُمَزَةُ", meaning: "Pengumpat", verses: 9, type: "Makkiyyah", juz: 30, page: 601 },
    { number: 105, name: "Al-Fil", arabic: "الفِيلُ", meaning: "Gajah", verses: 5, type: "Makkiyyah", juz: 30, page: 601 },
    { number: 106, name: "Quraisy", arabic: "قُرَيْشٌ", meaning: "Suku Quraisy", verses: 4, type: "Makkiyyah", juz: 30, page: 602 },
    { number: 107, name: "Al-Ma'un", arabic: "المَاعُونُ", meaning: "Barang-Barang yang Berguna", verses: 7, type: "Makkiyyah", juz: 30, page: 602 },
    { number: 108, name: "Al-Kausar", arabic: "الكَوْثَرُ", meaning: "Nikmat yang Banyak", verses: 3, type: "Makkiyyah", juz: 30, page: 602 },
    { number: 109, name: "Al-Kafirun", arabic: "الكَاَفِرُونَ", meaning: "Orang-Orang Kafir", verses: 6, type: "Makkiyyah", juz: 30, page: 603 },
    { number: 110, name: "An-Nasr", arabic: "النَّصْرُ", meaning: "Pertolongan", verses: 3, type: "Madaniyyah", juz: 30, page: 603 },
    { number: 111, name: "Al-Lahab", arabic: "المَسَدُ", meaning: "Gejolak Api", verses: 5, type: "Makkiyyah", juz: 30, page: 603 },
    { number: 112, name: "Al-Ikhlas", arabic: "الإِخْلَاصُ", meaning: "Keesaan Allah", verses: 4, type: "Makkiyyah", juz: 30, page: 604 },
    { number: 113, name: "Al-Falaq", arabic: "الفَلَقُ", meaning: "Waktu Subuh", verses: 5, type: "Makkiyyah", juz: 30, page: 604 },
    { number: 114, name: "An-Nas", arabic: "النَّاسُ", meaning: "Manusia", verses: 6, type: "Makkiyyah", juz: 30, page: 604 }
  ];

  const QURAN_JUZ_LIST = [
    { juz: 1, name: "Juz 1", startSurah: 1, startAyat: 1, endSurah: 2, endAyat: 141, page: 1 },
    { juz: 2, name: "Juz 2", startSurah: 2, startAyat: 142, endSurah: 2, endAyat: 252, page: 22 },
    { juz: 3, name: "Juz 3", startSurah: 2, startAyat: 253, endSurah: 3, endAyat: 92, page: 42 },
    { juz: 4, name: "Juz 4", startSurah: 3, startAyat: 93, endSurah: 4, endAyat: 23, page: 62 },
    { juz: 5, name: "Juz 5", startSurah: 4, startAyat: 24, endSurah: 4, endAyat: 147, page: 82 },
    { juz: 6, name: "Juz 6", startSurah: 4, startAyat: 148, endSurah: 5, endAyat: 81, page: 102 },
    { juz: 7, name: "Juz 7", startSurah: 5, startAyat: 82, endSurah: 6, endAyat: 110, page: 121 },
    { juz: 8, name: "Juz 8", startSurah: 6, startAyat: 111, endSurah: 7, endAyat: 87, page: 142 },
    { juz: 9, name: "Juz 9", startSurah: 7, startAyat: 88, endSurah: 8, endAyat: 40, page: 162 },
    { juz: 10, name: "Juz 10", startSurah: 8, startAyat: 41, endSurah: 9, endAyat: 92, page: 182 },
    { juz: 11, name: "Juz 11", startSurah: 9, startAyat: 93, endSurah: 11, endAyat: 5, page: 201 },
    { juz: 12, name: "Juz 12", startSurah: 11, startAyat: 6, endSurah: 12, endAyat: 52, page: 222 },
    { juz: 13, name: "Juz 13", startSurah: 12, startAyat: 53, endSurah: 14, endAyat: 52, page: 242 },
    { juz: 14, name: "Juz 14", startSurah: 15, startAyat: 1, endSurah: 16, endAyat: 128, page: 262 },
    { juz: 15, name: "Juz 15", startSurah: 17, startAyat: 1, endSurah: 18, endAyat: 74, page: 282 },
    { juz: 16, name: "Juz 16", startSurah: 18, startAyat: 75, endSurah: 20, endAyat: 135, page: 302 },
    { juz: 17, name: "Juz 17", startSurah: 21, startAyat: 1, endSurah: 22, endAyat: 78, page: 322 },
    { juz: 18, name: "Juz 18", startSurah: 23, startAyat: 1, endSurah: 25, endAyat: 20, page: 342 },
    { juz: 19, name: "Juz 19", startSurah: 25, startAyat: 21, endSurah: 27, endAyat: 55, page: 362 },
    { juz: 20, name: "Juz 20", startSurah: 27, startAyat: 56, endSurah: 29, endAyat: 45, page: 382 },
    { juz: 21, name: "Juz 21", startSurah: 29, startAyat: 46, endSurah: 33, endAyat: 30, page: 402 },
    { juz: 22, name: "Juz 22", startSurah: 33, startAyat: 31, endSurah: 36, endAyat: 27, page: 422 },
    { juz: 23, name: "Juz 23", startSurah: 36, startAyat: 28, endSurah: 39, endAyat: 31, page: 442 },
    { juz: 24, name: "Juz 24", startSurah: 39, startAyat: 32, endSurah: 41, endAyat: 46, page: 462 },
    { juz: 25, name: "Juz 25", startSurah: 41, startAyat: 47, endSurah: 45, endAyat: 37, page: 482 },
    { juz: 26, name: "Juz 26", startSurah: 46, startAyat: 1, endSurah: 51, endAyat: 30, page: 502 },
    { juz: 27, name: "Juz 27", startSurah: 51, startAyat: 31, endSurah: 57, endAyat: 29, page: 522 },
    { juz: 28, name: "Juz 28", startSurah: 58, startAyat: 1, endSurah: 66, endAyat: 12, page: 542 },
    { juz: 29, name: "Juz 29", startSurah: 67, startAyat: 1, endSurah: 77, endAyat: 50, page: 562 },
    { juz: 30, name: "Juz 30", startSurah: 78, startAyat: 1, endSurah: 114, endAyat: 6, page: 582 }
  ];

  // ==========================================================================
  // DATA SURAH OFFLINE (10 SURAT LENGKAP & AL-BAQARAH 286 AYAT)
  // ==========================================================================

const OFFLINE_SURAHS = {
  "1": {
    "number": 1,
    "name": "Al-Fatihah",
    "arabic": "الفَاتِحَةُ",
    "meaning": "Pembukaan",
    "versesCount": 7,
    "type": "Makkiyyah",
    "juz": 1,
    "page": 1,
    "bismillah": false,
    "verses": [
      {
        "number": 1,
        "arabic": "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        "latin": "Bismillāhir-raḥmānir-raḥīm.",
        "translation": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001001.mp3",
        "translation_en": "In the name of Allah, the Entirely Merciful, the Especially Merciful."
      },
      {
        "number": 2,
        "arabic": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
        "latin": "Al-ḥamdu lillāhi rabbil-'ālamīn.",
        "translation": "Segala puji bagi Allah, Tuhan seluruh alam,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001002.mp3",
        "translation_en": "[All] praise is [due] to Allah, Lord of the worlds -"
      },
      {
        "number": 3,
        "arabic": "ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
        "latin": "Ar-raḥmānir-raḥīm.",
        "translation": "Yang Maha Pengasih, Maha Penyayang,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001003.mp3",
        "translation_en": "The Entirely Merciful, the Especially Merciful,"
      },
      {
        "number": 4,
        "arabic": "مَـٰلِكِ يَوْمِ ٱلدِّينِ",
        "latin": "Māliki yaumid-dīn.",
        "translation": "Pemilik hari pembalasan.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001004.mp3",
        "translation_en": "Sovereign of the Day of Recompense."
      },
      {
        "number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "latin": "Iyyāka na'budu wa iyyāka nasta'īn.",
        "translation": "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001005.mp3",
        "translation_en": "It is You we worship and You we ask for help."
      },
      {
        "number": 6,
        "arabic": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
        "latin": "Ihdinaṣ-ṣirāṭal-mustaqīm.",
        "translation": "Tunjukilah kami jalan yang lurus,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001006.mp3",
        "translation_en": "Guide us to the straight path -"
      },
      {
        "number": 7,
        "arabic": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
        "latin": "Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim wa laḍ-ḍāllīn.",
        "translation": "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/001007.mp3",
        "translation_en": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray."
      }
    ]
  },
  "2": {
    "number": 2,
    "name": "Al-Baqarah",
    "arabic": "البَقَرَةُ",
    "meaning": "Sapi Betina",
    "versesCount": 286,
    "type": "Madaniyyah",
    "juz": 1,
    "page": 2,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "الۤمّۤ ۚ",
        "latin": "Alif lām mīm. ",
        "translation": "Alif Lām Mīm.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002001.mp3",
        "translation_en": "Alif, Lam, Meem."
      },
      {
        "number": 2,
        "arabic": "ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَۙ",
        "latin": "Żālikal-kitābu lā raiba fīh(i), hudal lil-muttaqīn(a). ",
        "translation": "Kitab (Al-Qur’an) ini tidak ada keraguan di dalamnya; (ia merupakan) petunjuk bagi orang-orang yang bertakwa,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002002.mp3",
        "translation_en": "This is the Book about which there is no doubt, a guidance for those conscious of Allah -"
      },
      {
        "number": 3,
        "arabic": "الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ ۙ",
        "latin": "Al-lażīna yu'minūna bil-gaibi wa yuqīmūnaṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn(a). ",
        "translation": "(yaitu) orang-orang yang beriman pada yang gaib, menegakkan salat, dan menginfakkan sebagian rezeki yang Kami anugerahkan kepada mereka,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002003.mp3",
        "translation_en": "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,"
      },
      {
        "number": 4,
        "arabic": "وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ ۚ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَۗ",
        "latin": "Wal-lażīna yu'minūna bimā unzila ilaika wa mā unzila min qablik(a), wabil-ākhirati hum yūqinūn(a). ",
        "translation": "dan mereka yang beriman pada (Al-Qur’an) yang diturunkan kepadamu (Nabi Muhammad) dan (kitab-kitab suci) yang telah diturunkan sebelum engkau dan mereka yakin akan adanya akhirat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002004.mp3",
        "translation_en": "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith]."
      },
      {
        "number": 5,
        "arabic": "اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ",
        "latin": "Ulā'ika ‘alā hudam mir rabbihim wa ulā'ika humul-mufliḥūn(a). ",
        "translation": "Merekalah yang mendapat petunjuk dari Tuhannya dan mereka itulah orang-orang yang beruntung.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002005.mp3",
        "translation_en": "Those are upon [right] guidance from their Lord, and it is those who are the successful."
      },
      {
        "number": 6,
        "arabic": "اِنَّ الَّذِيْنَ كَفَرُوْا سَوَاۤءٌ عَلَيْهِمْ ءَاَنْذَرْتَهُمْ اَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُوْنَ",
        "latin": "Innal-lażīna kafarū sawā'un ‘alaihim a'anżartahum am lam tunżirhum lā yu'minūn(a). ",
        "translation": "Sesungguhnya orang-orang yang kufur itu sama saja bagi mereka, apakah engkau (Nabi Muhammad) beri peringatan atau tidak engkau beri peringatan, mereka tidak akan beriman.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002006.mp3",
        "translation_en": "Indeed, those who disbelieve - it is all the same for them whether you warn them or do not warn them - they will not believe."
      },
      {
        "number": 7,
        "arabic": "خَتَمَ اللّٰهُ عَلٰى قُلُوْبِهِمْ وَعَلٰى سَمْعِهِمْ ۗ وَعَلٰٓى اَبْصَارِهِمْ غِشَاوَةٌ وَّلَهُمْ عَذَابٌ عَظِيْمٌ ࣖ ",
        "latin": "Khatamallāhu ‘alā qulūbihim wa ‘alā sam‘ihim wa ‘alā abṣārihim gisyāwatuw wa lahum ‘ażābun ‘aẓīm(un). ",
        "translation": "Allah telah mengunci hati dan pendengaran mereka. Pada penglihatan mereka ada penutup, dan bagi mereka azab yang sangat berat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002007.mp3",
        "translation_en": "Allah has set a seal upon their hearts and upon their hearing, and over their vision is a veil. And for them is a great punishment."
      },
      {
        "number": 8,
        "arabic": "وَمِنَ النَّاسِ مَنْ يَّقُوْلُ اٰمَنَّا بِاللّٰهِ وَبِالْيَوْمِ الْاٰخِرِ وَمَا هُمْ بِمُؤْمِنِيْنَۘ",
        "latin": "Wa minan-nāsi may yaqūlu āmannā billāhi wa bil-yaumil-ākhiri wa mā hum bimu'minīn(a). ",
        "translation": "Di antara manusia ada yang berkata, “Kami beriman kepada Allah dan hari Akhir,” padahal sesungguhnya mereka itu bukanlah orang-orang mukmin.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002008.mp3",
        "translation_en": "And of the people are some who say, \"We believe in Allah and the Last Day,\" but they are not believers."
      },
      {
        "number": 9,
        "arabic": "يُخٰدِعُوْنَ اللّٰهَ وَالَّذِيْنَ اٰمَنُوْا ۚ وَمَا يَخْدَعُوْنَ اِلَّآ اَنْفُسَهُمْ وَمَا يَشْعُرُوْنَۗ",
        "latin": "Yukhādi‘ūnallāha wal-lażīna āmanū wa mā yakhda‘ūna illā anfusahum wa mā yasy‘urūn(a). ",
        "translation": "Mereka menipu Allah dan orang-orang yang beriman, padahal mereka hanyalah menipu diri sendiri tanpa mereka sadari.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002009.mp3",
        "translation_en": "They [think to] deceive Allah and those who believe, but they deceive not except themselves and perceive [it] not."
      },
      {
        "number": 10,
        "arabic": "فِيْ قُلُوْبِهِمْ مَّرَضٌۙ فَزَادَهُمُ اللّٰهُ مَرَضًاۚ وَلَهُمْ عَذَابٌ اَلِيْمٌ ۢ ەۙ بِمَا كَانُوْا يَكْذِبُوْنَ",
        "latin": "Fī qulūbihim maraḍun fa zādahumullāhu maraḍā(n), wa lahum ‘ażābun alīmum bimā kānū yakżibūn(a). ",
        "translation": "Dalam hati mereka ada penyakit, lalu Allah menambah penyakitnya dan mereka mendapat azab yang sangat pedih karena mereka selalu berdusta.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002010.mp3",
        "translation_en": "In their hearts is disease, so Allah has increased their disease; and for them is a painful punishment because they [habitually] used to lie."
      },
      {
        "number": 11,
        "arabic": "وَاِذَا قِيْلَ لَهُمْ لَا تُفْسِدُوْا فِى الْاَرْضِۙ قَالُوْٓا اِنَّمَا نَحْنُ مُصْلِحُوْنَ",
        "latin": "Wa iżā qīla lahum lā tufsidū fil-arḍ(i), qālū innamā naḥnu muṣliḥūn(a). ",
        "translation": "Apabila dikatakan kepada mereka, “Janganlah berbuat kerusakan di bumi,” mereka menjawab, “Sesungguhnya kami hanyalah orang-orang yang melakukan perbaikan.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002011.mp3",
        "translation_en": "And when it is said to them, \"Do not cause corruption on the earth,\" they say, \"We are but reformers.\""
      },
      {
        "number": 12,
        "arabic": "اَلَآ اِنَّهُمْ هُمُ الْمُفْسِدُوْنَ وَلٰكِنْ لَّا يَشْعُرُوْنَ",
        "latin": "Alā innahum humul-mufsidūna wa lākil lā yasy‘urūn(a). ",
        "translation": "Ingatlah, sesungguhnya merekalah yang berbuat kerusakan, tetapi mereka tidak menyadari.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002012.mp3",
        "translation_en": "Unquestionably, it is they who are the corrupters, but they perceive [it] not."
      },
      {
        "number": 13,
        "arabic": "وَاِذَا قِيْلَ لَهُمْ اٰمِنُوْا كَمَآ اٰمَنَ النَّاسُ قَالُوْٓا اَنُؤْمِنُ كَمَآ اٰمَنَ السُّفَهَاۤءُ ۗ اَلَآ اِنَّهُمْ هُمُ السُّفَهَاۤءُ وَلٰكِنْ لَّا يَعْلَمُوْنَ ",
        "latin": "Wa iżā qīla lahum āminū kamā āmanan nāsu qālū anu'minu kamā āmanas-sufahā'(u), alā innahum humus-sufahā'u wa lākil lā ya‘lamūn(a). ",
        "translation": "Apabila dikatakan kepada mereka, “Berimanlah kamu sebagaimana orang lain telah beriman,” mereka menjawab, “Apakah kami akan beriman seperti orang-orang yang picik akalnya itu beriman?” Ingatlah, sesungguhnya mereka itulah orang-orang yang picik akalnya, tetapi mereka tidak tahu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002013.mp3",
        "translation_en": "And when it is said to them, \"Believe as the people have believed,\" they say, \"Should we believe as the foolish have believed?\" Unquestionably, it is they who are the foolish, but they know [it] not."
      },
      {
        "number": 14,
        "arabic": "وَاِذَا لَقُوا الَّذِيْنَ اٰمَنُوْا قَالُوْٓا اٰمَنَّا ۚ وَاِذَا خَلَوْا اِلٰى شَيٰطِيْنِهِمْ ۙ قَالُوْٓا اِنَّا مَعَكُمْ  ۙاِنَّمَا نَحْنُ مُسْتَهْزِءُوْنَ",
        "latin": "Wa iżā laqul-lażīna āmanū qālū āmannā, wa iżā khalau ilā syayāṭīnihim qālū innā ma‘akum, innamā naḥnu mustahzi'ūn(a). ",
        "translation": "Apabila mereka berjumpa dengan orang yang beriman, mereka berkata, “Kami telah beriman.” Akan tetapi apabila mereka menyendiri dengan setan-setan (para pemimpin) mereka, mereka berkata, “Sesungguhnya kami bersama kamu, kami hanya pengolok-olok.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002014.mp3",
        "translation_en": "And when they meet those who believe, they say, \"We believe\"; but when they are alone with their evil ones, they say, \"Indeed, we are with you; we were only mockers.\""
      },
      {
        "number": 15,
        "arabic": " اَللّٰهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِيْ طُغْيَانِهِمْ يَعْمَهُوْنَ ",
        "latin": "Allāhu yastahzi'u bihim wa yamudduhum fī ṭugyānihim ya‘mahūn(a). ",
        "translation": "Allah akan memperolok-olokkan dan membiarkan mereka terombang-ambing dalam kesesatan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002015.mp3",
        "translation_en": "[But] Allah mocks them and prolongs them in their transgression [while] they wander blindly."
      },
      {
        "number": 16,
        "arabic": "اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الضَّلٰلَةَ بِالْهُدٰىۖ فَمَا رَبِحَتْ تِّجَارَتُهُمْ وَمَا كَانُوْا مُهْتَدِيْنَ",
        "latin": "Ulā'ikal-lażīnasytarawuḍ-ḍalālata bil-hudā, famā rabiḥat tijāratuhum wa mā kānū muhtadīn(a). ",
        "translation": "Mereka itulah orang-orang yang membeli kesesatan dengan petunjuk. Maka, tidaklah beruntung perniagaannya dan mereka bukanlah orang-orang yang mendapatkan petunjuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002016.mp3",
        "translation_en": "Those are the ones who have purchased error [in exchange] for guidance, so their transaction has brought no profit, nor were they guided."
      },
      {
        "number": 17,
        "arabic": "مَثَلُهُمْ كَمَثَلِ الَّذِى اسْتَوْقَدَ نَارًا ۚ فَلَمَّآ اَضَاۤءَتْ مَا حَوْلَهٗ ذَهَبَ اللّٰهُ بِنُوْرِهِمْ وَتَرَكَهُمْ فِيْ ظُلُمٰتٍ لَّا يُبْصِرُوْنَ",
        "latin": "Maṡaluhum kamaṡalil-lażistauqada nārā(n), falammā aḍā'at mā ḥaulahūū  żahaballāhu binūrihim wa tarakahum fī ẓulumātil lā yubṣirūn(a). ",
        "translation": "Perumpamaan mereka seperti orang yang menyalakan api. Setelah (api itu) menerangi sekelilingnya, Allah melenyapkan cahaya (yang menyinari) mereka dan membiarkan mereka dalam kegelapan, tidak dapat melihat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002017.mp3",
        "translation_en": "Their example is that of one who kindled a fire, but when it illuminated what was around him, Allah took away their light and left them in darkness [so] they could not see."
      },
      {
        "number": 18,
        "arabic": "صُمٌّ ۢ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُوْنَۙ",
        "latin": "Ṣummum bukmun ‘umyun fahum lā yarji‘ūn(a).",
        "translation": "(Mereka) tuli, bisu, lagi buta, sehingga mereka tidak dapat kembali.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002018.mp3",
        "translation_en": "Deaf, dumb and blind - so they will not return [to the right path]."
      },
      {
        "number": 19,
        "arabic": "اَوْ كَصَيِّبٍ مِّنَ السَّمَاۤءِ فِيْهِ ظُلُمٰتٌ وَّرَعْدٌ وَّبَرْقٌۚ يَجْعَلُوْنَ اَصَابِعَهُمْ فِيْٓ اٰذَانِهِمْ مِّنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِۗ وَاللّٰهُ مُحِيْطٌۢ بِالْكٰفِرِيْنَ",
        "latin": "Au kaṣayyibim minas-samā'i fīhi ẓulumātuw wa ra‘duw wa barq(un), yaj‘alūna aṣābi‘ahum fī āżānihim minaṣ-ṣawā‘iqi ḥażaral-maut(i), wallāhu muḥīṭum bil- kāfirīn(a). ",
        "translation": "Atau, seperti (orang yang ditimpa) hujan lebat dari langit yang disertai berbagai kegelapan, petir, dan kilat. Mereka menyumbat telinga dengan jari-jarinya (untuk menghindari) suara petir itu karena takut mati. Allah meliputi orang-orang yang kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002019.mp3",
        "translation_en": "Or [it is] like a rainstorm from the sky within which is darkness, thunder and lightning. They put their fingers in their ears against the thunderclaps in dread of death. But Allah is encompassing of the disbelievers."
      },
      {
        "number": 20,
        "arabic": "يَكَادُ الْبَرْقُ يَخْطَفُ اَبْصَارَهُمْ ۗ كُلَّمَآ اَضَاۤءَ لَهُمْ مَّشَوْا فِيْهِ ۙ وَاِذَآ اَظْلَمَ عَلَيْهِمْ قَامُوْا ۗوَلَوْ شَاۤءَ اللّٰهُ لَذَهَبَ بِسَمْعِهِمْ وَاَبْصَارِهِمْ ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ࣖ",
        "latin": "Yakādul-barqu yakhṭafu abṣārahum, kullamā aḍā'a lahum masyau fīh(i), wa iżā aẓlama ‘alaihim qāmū, wa lau syā'allāhu lażahaba bisam‘ihim wa abṣārihim, innallāha ‘alā kulli syai'in qadīr(un).  ",
        "translation": "Hampir saja kilat itu menyambar penglihatan mereka. Setiap kali (kilat itu) menyinari, mereka berjalan di bawah (sinar) itu. Apabila gelap menerpa mereka, mereka berdiri (tidak bergerak). Sekiranya Allah menghendaki, niscaya Dia menghilangkan pendengaran dan penglihatan mereka. Sesungguhnya Allah Maha Kuasa atas segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002020.mp3",
        "translation_en": "The lightning almost snatches away their sight. Every time it lights [the way] for them, they walk therein; but when darkness comes over them, they stand [still]. And if Allah had willed, He could have taken away their hearing and their sight. Indeed, Allah is over all things competent."
      },
      {
        "number": 21,
        "arabic": " يٰٓاَيُّهَا النَّاسُ اعْبُدُوْا رَبَّكُمُ الَّذِيْ خَلَقَكُمْ وَالَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ",
        "latin": "Yā ayyuhan-nāsu‘budū rabbakumul-lażī khalaqakum wal-lażīna min qablikum la‘allakum tattaqūn(a). ",
        "translation": "Wahai manusia, sembahlah Tuhanmu yang telah menciptakan kamu dan orang-orang yang sebelum kamu agar kamu bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002021.mp3",
        "translation_en": "O mankind, worship your Lord, who created you and those before you, that you may become righteous -"
      },
      {
        "number": 22,
        "arabic": " الَّذِيْ جَعَلَ لَكُمُ الْاَرْضَ فِرَاشًا وَّالسَّمَاۤءَ بِنَاۤءً  ۖوَّاَنْزَلَ مِنَ السَّمَاۤءِ مَاۤءً فَاَخْرَجَ بِهٖ مِنَ الثَّمَرٰتِ رِزْقًا لَّكُمْ ۚ فَلَا تَجْعَلُوْا لِلّٰهِ اَنْدَادًا وَّاَنْتُمْ تَعْلَمُوْنَ ",
        "latin": "Allażī ja‘ala lakumul-arḍa firāsyaw was-samā'a binā'ā(n), wa anzala minas-samā'i mā'an fa akhraja bihī minaṡ-ṡamarāti rizqal lakum, falā taj‘alū lillāhi andādaw wa antum ta‘lamūn(a). ",
        "translation": "(Dialah) yang menjadikan bagimu bumi (sebagai) hamparan dan langit sebagai atap, dan Dialah yang menurunkan air (hujan) dari langit, lalu Dia menghasilkan dengan (hujan) itu buah-buahan sebagai rezeki untuk kamu. Oleh karena itu, janganlah kamu mengadakan tandingan-tandingan bagi Allah, padahal kamu mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002022.mp3",
        "translation_en": "[He] who made for you the earth a bed [spread out] and the sky a ceiling and sent down from the sky, rain and brought forth thereby fruits as provision for you. So do not attribute to Allah equals while you know [that there is nothing similar to Him]."
      },
      {
        "number": 23,
        "arabic": "وَاِنْ كُنْتُمْ فِيْ رَيْبٍ مِّمَّا نَزَّلْنَا عَلٰى عَبْدِنَا فَأْتُوْا بِسُوْرَةٍ مِّنْ مِّثْلِهٖ ۖ وَادْعُوْا شُهَدَاۤءَكُمْ مِّنْ دُوْنِ اللّٰهِ اِنْ كُنْتُمْ صٰدِقِيْنَ ",
        "latin": "Wa in kuntum fī raibim mimmā nazzalnā ‘alā ‘abdinā fa'tū bisūratim mim miṡlih(ī), wad‘ū syuhadā'akum min dūnillāhi in kuntum ṣādiqīn(a).  ",
        "translation": "Jika kamu (tetap) dalam keraguan tentang apa (Al-Qur’an) yang Kami turunkan kepada hamba Kami (Nabi Muhammad), buatlah satu surah yang semisal dengannya dan ajaklah penolong-penolongmu selain Allah, jika kamu orang-orang yang benar.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002023.mp3",
        "translation_en": "And if you are in doubt about what We have sent down upon Our Servant [Muhammad], then produce a surah the like thereof and call upon your witnesses other than Allah, if you should be truthful."
      },
      {
        "number": 24,
        "arabic": "فَاِنْ لَّمْ تَفْعَلُوْا وَلَنْ تَفْعَلُوْا فَاتَّقُوا النَّارَ الَّتِيْ وَقُوْدُهَا النَّاسُ وَالْحِجَارَةُ ۖ اُعِدَّتْ لِلْكٰفِرِيْنَ",
        "latin": "Fa'illam taf‘alū wa lan taf‘alū fattaqun-nāral-latī waqūduhan-nāsu wal-ḥijārah(tu), u‘iddat lil-kāfirīn(a). ",
        "translation": "Jika kamu tidak (mampu) membuat(-nya) dan (pasti) kamu tidak akan (mampu) membuat(-nya), takutlah pada api neraka yang bahan bakarnya adalah manusia dan batu yang disediakan bagi orang-orang kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002024.mp3",
        "translation_en": "But if you do not - and you will never be able to - then fear the Fire, whose fuel is men and stones, prepared for the disbelievers."
      },
      {
        "number": 25,
        "arabic": "وَبَشِّرِ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اَنَّ لَهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۗ كُلَّمَا رُزِقُوْا مِنْهَا مِنْ ثَمَرَةٍ رِّزْقًا ۙ قَالُوْا هٰذَا الَّذِيْ رُزِقْنَا مِنْ قَبْلُ  وَاُتُوْا بِهٖ مُتَشَابِهًا ۗوَلَهُمْ فِيْهَآ اَزْوَاجٌ مُّطَهَّرَةٌ  وَّهُمْ فِيْهَا خٰلِدُوْنَ",
        "latin": "Wa basysyiril-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti anna lahum jannātin tajrī min taḥtihal- anhār(u), kullamā ruziqū minhā min ṡamaratir rizqā(n), qālū hāżal-lażī ruziqnā min qablu wa utū bihī mutasyābihā(n), wa lahum fīhā azwājum muṭahharatuw wa hum fīhā khālidūn(a). ",
        "translation": "Sampaikanlah kabar gembira kepada orang-orang yang beriman dan beramal saleh bahwa untuk mereka (disediakan) surga-surga yang di bawahnya mengalir sungai-sungai. Setiap kali diberi rezeki buah-buahan darinya, mereka berkata, “Inilah rezeki yang diberikan kepada kami sebelumnya.” Mereka telah diberi (buah-buahan) yang serupa dan di sana mereka (memperoleh) pasangan-pasangan yang disucikan. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002025.mp3",
        "translation_en": "And give good tidings to those who believe and do righteous deeds that they will have gardens [in Paradise] beneath which rivers flow. Whenever they are provided with a provision of fruit therefrom, they will say, \"This is what we were provided with before.\" And it is given to them in likeness. And they will have therein purified spouses, and they will abide therein eternally."
      },
      {
        "number": 26,
        "arabic": "۞ اِنَّ اللّٰهَ لَا يَسْتَحْيٖٓ اَنْ يَّضْرِبَ مَثَلًا مَّا بَعُوْضَةً فَمَا فَوْقَهَا ۗ فَاَمَّا الَّذِيْنَ اٰمَنُوْا فَيَعْلَمُوْنَ اَنَّهُ الْحَقُّ مِنْ رَّبِّهِمْ ۚ وَاَمَّا الَّذِيْنَ كَفَرُوْا فَيَقُوْلُوْنَ مَاذَآ اَرَادَ اللّٰهُ بِهٰذَا مَثَلًا ۘ يُضِلُّ بِهٖ كَثِيْرًا وَّيَهْدِيْ بِهٖ كَثِيْرًا ۗ وَمَا يُضِلُّ بِهٖٓ اِلَّا الْفٰسِقِيْنَۙ",
        "latin": "Innallāha lā yastaḥyī ay yaḍriba maṡalam mā ba‘ūḍatan famā fauqahā, fa'ammal- lażīna āmanū faya‘lamūna annahul-ḥaqqu mir rabbihim, wa ammal-lażīna kafarū fayaqūlūna māżā arādallāhu bihāżā maṡalā(n), yuḍillu bihī kaṡīraw wa yahdī bihī kaṡīrā(n), wa mā yuḍillu bihī illal-fāsiqīn(a). ",
        "translation": "Sesungguhnya Allah tidak segan membuat perumpamaan seekor nyamuk atau yang lebih kecil daripada itu. Adapun orang-orang yang beriman mengetahui bahwa itu kebenaran dari Tuhannya. Akan tetapi, orang-orang kafir berkata, “Apa maksud Allah dengan perumpamaan ini?” Dengan (perumpamaan) itu banyak orang yang disesatkan-Nya. Dengan itu pula banyak orang yang diberi-Nya petunjuk. Namun, tidak ada yang Dia sesatkan dengan (perumpamaan) itu, selain orang-orang fasik,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002026.mp3",
        "translation_en": "Indeed, Allah is not timid to present an example - that of a mosquito or what is smaller than it. And those who have believed know that it is the truth from their Lord. But as for those who disbelieve, they say, \"What did Allah intend by this as an example?\" He misleads many thereby and guides many thereby. And He misleads not except the defiantly disobedient,"
      },
      {
        "number": 27,
        "arabic": "الَّذِيْنَ يَنْقُضُوْنَ عَهْدَ اللّٰهِ مِنْۢ بَعْدِ مِيْثَاقِهٖۖ وَيَقْطَعُوْنَ مَآ اَمَرَ اللّٰهُ بِهٖٓ اَنْ يُّوْصَلَ وَيُفْسِدُوْنَ فِى الْاَرْضِۗ  اُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ ",
        "latin": "Allażīna yanquḍūna ‘ahdallāhi mim ba‘di mīṡāqih(ī), wa yaqṭa‘ūna mā amarallāhu bihī ay yūṣala wa yufsidūna fil-arḍ(i), ulā'ika humul-khāsirūn(a). ",
        "translation": "(yaitu) orang-orang yang melanggar perjanjian Allah setelah (perjanjian) itu diteguhkan, memutuskan apa yang diperintahkan Allah untuk disambungkan (silaturahmi), dan berbuat kerusakan di bumi. Mereka itulah orang-orang yang rugi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002027.mp3",
        "translation_en": "Who break the covenant of Allah after contracting it and sever that which Allah has ordered to be joined and cause corruption on earth. It is those who are the losers."
      },
      {
        "number": 28,
        "arabic": "كَيْفَ تَكْفُرُوْنَ بِاللّٰهِ وَكُنْتُمْ اَمْوَاتًا فَاَحْيَاكُمْۚ  ثُمَّ يُمِيْتُكُمْ ثُمَّ يُحْيِيْكُمْ ثُمَّ اِلَيْهِ تُرْجَعُوْنَ ",
        "latin": "Kaifa takfurūna billāhi wa kuntum amwātan fa'aḥyākum, ṡumma yumītukum ṡumma yuḥyīkum ṡumma ilaihi turja‘ūn(a).  ",
        "translation": "Bagaimana kamu ingkar kepada Allah, padahal kamu (tadinya) mati, lalu Dia menghidupkan kamu, kemudian Dia akan mematikan kamu, Dia akan menghidupkan kamu kembali, dan kepada-Nyalah kamu dikembalikan?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002028.mp3",
        "translation_en": "How can you disbelieve in Allah when you were lifeless and He brought you to life; then He will cause you to die, then He will bring you [back] to life, and then to Him you will be returned."
      },
      {
        "number": 29,
        "arabic": "هُوَ الَّذِيْ خَلَقَ لَكُمْ مَّا فِى الْاَرْضِ جَمِيْعًا ثُمَّ اسْتَوٰٓى اِلَى السَّمَاۤءِ فَسَوّٰىهُنَّ سَبْعَ سَمٰوٰتٍ ۗ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ ࣖ",
        "latin": "Huwal-lażī khalaqa lakum mā fil-arḍi jamī‘ā(n), ṡummastawā ilas-samā'i fasawwāhunna sab‘a samāwāt(in), wa huwa bikulli syai'in ‘alīm(un). ",
        "translation": "Dialah (Allah) yang menciptakan segala yang ada di bumi untukmu, kemudian Dia menuju ke langit, lalu Dia menyempurnakannya menjadi tujuh langit. Dia Maha Mengetahui segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002029.mp3",
        "translation_en": "It is He who created for you all of that which is on the earth. Then He directed Himself to the heaven, [His being above all creation], and made them seven heavens, and He is Knowing of all things."
      },
      {
        "number": 30,
        "arabic": "وَاِذْ قَالَ رَبُّكَ لِلْمَلٰۤىِٕكَةِ اِنِّيْ جَاعِلٌ فِى الْاَرْضِ خَلِيْفَةً ۗ قَالُوْٓا اَتَجْعَلُ فِيْهَا مَنْ يُّفْسِدُ فِيْهَا وَيَسْفِكُ الدِّمَاۤءَۚ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۗ قَالَ اِنِّيْٓ اَعْلَمُ مَا لَا تَعْلَمُوْنَ",
        "latin": "Wa iż qāla rabbuka lil-malā'ikati innī jā‘ilun fil-arḍi khalīfah(tan), qālū ataj‘alu fīhā may yufsidu fīhā wa yasfikud-dimā'(a), wa naḥnu nusabbiḥu biḥamdika wa nuqaddisu lak(a), qāla innī a‘lamu mā lā ta‘lamūn(a). ",
        "translation": "(Ingatlah) ketika Tuhanmu berfirman kepada para malaikat, “Aku hendak menjadikan khalifah di bumi.” Mereka berkata, “Apakah Engkau hendak menjadikan orang yang merusak dan menumpahkan darah di sana, sedangkan kami bertasbih memuji-Mu dan menyucikan nama-Mu?” Dia berfirman, “Sesungguhnya Aku mengetahui apa yang tidak kamu ketahui.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002030.mp3",
        "translation_en": "And [mention, O Muhammad], when your Lord said to the angels, \"Indeed, I will make upon the earth a successive authority.\" They said, \"Will You place upon it one who causes corruption therein and sheds blood, while we declare Your praise and sanctify You?\" Allah said, \"Indeed, I know that which you do not know.\""
      },
      {
        "number": 31,
        "arabic": "وَعَلَّمَ اٰدَمَ الْاَسْمَاۤءَ كُلَّهَا ثُمَّ عَرَضَهُمْ عَلَى الْمَلٰۤىِٕكَةِ فَقَالَ اَنْۢبِـُٔوْنِيْ بِاَسْمَاۤءِ هٰٓؤُلَاۤءِ اِنْ كُنْتُمْ صٰدِقِيْنَ",
        "latin": "Wa ‘allama ādamal-asmā'a kullahā ṡumma ‘araḍahum ‘alal-malā'ikati faqāla ambi'ūnī bi'asmā'i hā'ulā'i in kuntum ṣādiqīn(a). ",
        "translation": "Dia mengajarkan kepada Adam nama-nama (benda) seluruhnya, kemudian Dia memperlihatkannya kepada para malaikat, seraya berfirman, “Sebutkan kepada-Ku nama-nama (benda) ini jika kamu benar!”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002031.mp3",
        "translation_en": "And He taught Adam the names - all of them. Then He showed them to the angels and said, \"Inform Me of the names of these, if you are truthful.\""
      },
      {
        "number": 32,
        "arabic": "قَالُوْا سُبْحٰنَكَ لَا عِلْمَ لَنَآ اِلَّا مَا عَلَّمْتَنَا ۗاِنَّكَ اَنْتَ الْعَلِيْمُ الْحَكِيْمُ ",
        "latin": "Qālū subḥānaka lā ‘ilma lanā illā mā ‘allamtanā, innaka antal-‘alīmul-ḥakīm(u). ",
        "translation": "Mereka menjawab, “Maha Suci Engkau. Tidak ada pengetahuan bagi kami, selain yang telah Engkau ajarkan kepada kami. Sesungguhnya Engkaulah Yang Maha Mengetahui lagi Maha Bijaksana.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002032.mp3",
        "translation_en": "They said, \"Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the Knowing, the Wise.\""
      },
      {
        "number": 33,
        "arabic": "قَالَ يٰٓاٰدَمُ اَنْۢبِئْهُمْ بِاَسْمَاۤىِٕهِمْ ۚ فَلَمَّآ اَنْۢبَاَهُمْ بِاَسْمَاۤىِٕهِمْۙ قَالَ اَلَمْ اَقُلْ لَّكُمْ اِنِّيْٓ اَعْلَمُ غَيْبَ السَّمٰوٰتِ وَالْاَرْضِۙ وَاَعْلَمُ مَا تُبْدُوْنَ وَمَا كُنْتُمْ تَكْتُمُوْنَ ",
        "latin": "Qāla yā ādamu ambi'hum bi'asmā'ihim, falammā amba'ahum bi'asmā'ihim, qāla alam aqul lakum innī a‘lamu gaibas-samāwāti wal-arḍ(i), wa a‘lamu mā tubdūna wa mā kuntum taktumūn(a). ",
        "translation": "Dia (Allah) berfirman, “Wahai Adam, beri tahukanlah kepada mereka nama-nama benda itu!” Setelah dia (Adam) menyebutkan nama-nama itu, Dia berfirman, “Bukankah telah Kukatakan kepadamu bahwa Aku mengetahui rahasia langit dan bumi, dan Aku mengetahui apa yang kamu nyatakan dan apa yang selalu kamu sembunyikan?”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002033.mp3",
        "translation_en": "He said, \"O Adam, inform them of their names.\" And when he had informed them of their names, He said, \"Did I not tell you that I know the unseen [aspects] of the heavens and the earth? And I know what you reveal and what you have concealed.\""
      },
      {
        "number": 34,
        "arabic": "وَاِذْ قُلْنَا لِلْمَلٰۤىِٕكَةِ اسْجُدُوْا لِاٰدَمَ فَسَجَدُوْٓا اِلَّآ اِبْلِيْسَۗ  اَبٰى وَاسْتَكْبَرَۖ وَكَانَ مِنَ الْكٰفِرِيْنَ",
        "latin": "Wa iż qulnā lil-malā'ikatisjudū li ādama fasajadū illā iblīs(a), abā wastakbara wa kāna minal-kāfirīn(a). ",
        "translation": "(Ingatlah) ketika Kami berfirman kepada para malaikat, “Sujudlah kamu kepada Adam!” Maka, mereka pun sujud, kecuali Iblis. Ia menolaknya dan menyombongkan diri, dan ia termasuk golongan kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002034.mp3",
        "translation_en": "And [mention] when We said to the angels, \"Prostrate before Adam\"; so they prostrated, except for Iblees. He refused and was arrogant and became of the disbelievers."
      },
      {
        "number": 35,
        "arabic": "وَقُلْنَا يٰٓاٰدَمُ اسْكُنْ اَنْتَ وَزَوْجُكَ الْجَنَّةَ وَكُلَا مِنْهَا رَغَدًا حَيْثُ شِئْتُمَاۖ وَلَا تَقْرَبَا هٰذِهِ الشَّجَرَةَ فَتَكُوْنَا مِنَ الظّٰلِمِيْنَ ",
        "latin": "Wa qulnā yā ādamuskun anta wa zaujukal-jannata wa kulā minhā ragadan ḥaiṡu syi'tumā,  wa lā taqrabā hāżihisy-syajarata fa takūnā minaẓ-ẓālimīn(a). ",
        "translation": "Kami berfirman, “Wahai Adam, tinggallah engkau dan istrimu di dalam surga, makanlah dengan nikmat (berbagai makanan) yang ada di sana sesukamu, dan janganlah kamu dekati pohon ini, sehingga kamu termasuk orang-orang zalim!”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002035.mp3",
        "translation_en": "And We said, \"O Adam, dwell, you and your wife, in Paradise and eat therefrom in [ease and] abundance from wherever you will. But do not approach this tree, lest you be among the wrongdoers.\""
      },
      {
        "number": 36,
        "arabic": "فَاَزَلَّهُمَا الشَّيْطٰنُ عَنْهَا فَاَخْرَجَهُمَا مِمَّا كَانَا فِيْهِ ۖ وَقُلْنَا اهْبِطُوْا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ ۚ وَلَكُمْ فِى الْاَرْضِ مُسْتَقَرٌّ وَّمَتَاعٌ اِلٰى حِيْنٍ",
        "latin": "Fa'azallahumasy-syaiṭānu ‘anhā fa akhrajahumā mimmā kānā fīh(i), wa qulnahbiṭū ba‘ḍukum liba‘ḍin ‘aduww(un), wa lakum fil-arḍi mustaqarruw wa matā‘un ilā ḥīn(in). ",
        "translation": "Lalu, setan menggelincirkan keduanya darinya sehingga keduanya dikeluarkan dari segala kenikmatan ketika keduanya ada di sana (surga). Kami berfirman, “Turunlah kamu! Sebagian kamu menjadi musuh bagi yang lain serta bagi kamu ada tempat tinggal dan kesenangan di bumi sampai waktu yang ditentukan.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002036.mp3",
        "translation_en": "But Satan caused them to slip out of it and removed them from that [condition] in which they had been. And We said, \"Go down, [all of you], as enemies to one another, and you will have upon the earth a place of settlement and provision for a time.\""
      },
      {
        "number": 37,
        "arabic": "فَتَلَقّٰٓى اٰدَمُ مِنْ رَّبِّهٖ كَلِمٰتٍ فَتَابَ عَلَيْهِ ۗ اِنَّهٗ هُوَ التَّوَّابُ الرَّحِيْمُ ",
        "latin": "Fatalaqqā ādamu mir rabbihī kalimātin fatāba ‘alaih(i), innahū huwat-tawwābur- raḥīm(u). ",
        "translation": "Kemudian, Adam menerima beberapa kalimat dari Tuhannya, lalu Dia pun menerima tobatnya. Sesungguhnya Dialah Yang Maha Penerima tobat lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002037.mp3",
        "translation_en": "Then Adam received from his Lord [some] words, and He accepted his repentance. Indeed, it is He who is the Accepting of repentance, the Merciful."
      },
      {
        "number": 38,
        "arabic": "قُلْنَا اهْبِطُوْا مِنْهَا جَمِيْعًا ۚ فَاِمَّا يَأْتِيَنَّكُمْ مِّنِّيْ هُدًى فَمَنْ تَبِعَ هُدَايَ فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ",
        "latin": "Qulnahbiṭū minhā jamī‘ā(n), fa'immā ya'tiyannakum minnī hudan faman tabi‘a hudāya falā khaufun ‘alaihim wa lā hum yaḥzanūn(a).  ",
        "translation": "Kami berfirman, “Turunlah kamu semua dari surga! Lalu, jika benar-benar datang petunjuk-Ku kepadamu, siapa saja yang mengikuti petunjuk-Ku tidak ada rasa takut yang menimpa mereka dan mereka pun tidak bersedih hati.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002038.mp3",
        "translation_en": "We said, \"Go down from it, all of you. And when guidance comes to you from Me, whoever follows My guidance - there will be no fear concerning them, nor will they grieve."
      },
      {
        "number": 39,
        "arabic": "وَالَّذِيْنَ كَفَرُوْا وَكَذَّبُوْا بِاٰيٰتِنَآ اُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ ࣖ",
        "latin": "Wal-lażīna kafarū wa każżabū bi'āyātinā ulā'ika aṣḥābun-nār(i), hum fīhā khālidūn(a).  ",
        "translation": "(Sementara itu,) orang-orang yang mengingkari dan mendustakan ayat-ayat Kami, mereka itulah penghuni neraka. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002039.mp3",
        "translation_en": "And those who disbelieve and deny Our signs - those will be companions of the Fire; they will abide therein eternally.\""
      },
      {
        "number": 40,
        "arabic": "يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَوْفُوْا بِعَهْدِيْٓ اُوْفِ بِعَهْدِكُمْۚ وَاِيَّايَ فَارْهَبُوْنِ",
        "latin": "Yā banī isrā'īlażkurū ni‘matiyal-latī an‘amtu ‘alaikum wa aufū bi‘ahdī ūfi bi‘ahdikum, wa iyyāya farhabūn(i).  ",
        "translation": "Wahai Bani Israil, ingatlah nikmat-Ku yang telah Aku berikan kepadamu dan penuhilah janjimu kepada-Ku, niscaya Aku penuhi janji-Ku kepadamu. Hanya kepada-Ku hendaknya kamu takut.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002040.mp3",
        "translation_en": "O Children of Israel, remember My favor which I have bestowed upon you and fulfill My covenant [upon you] that I will fulfill your covenant [from Me], and be afraid of [only] Me."
      },
      {
        "number": 41,
        "arabic": "وَاٰمِنُوْا بِمَآ اَنْزَلْتُ مُصَدِّقًا لِّمَا مَعَكُمْ وَلَا تَكُوْنُوْٓا اَوَّلَ كَافِرٍۢ بِهٖ ۖ وَلَا تَشْتَرُوْا بِاٰيٰتِيْ ثَمَنًا قَلِيْلًا  ۖوَّاِيَّايَ فَاتَّقُوْنِ ",
        "latin": "Wa āminū bimā anzaltu muṣaddiqal limā ma‘akum wa lā takūnū awwala kāfirim bih(ī), wa lā tasytarū bi'āyātī ṡamanan qalīlā(n), wa iyyāya fattaqūn(i). ",
        "translation": "Berimanlah kamu kepada apa (Al-Qur’an) yang telah Aku turunkan sebagai pembenar bagi apa yang ada pada kamu (Taurat) dan janganlah kamu menjadi orang yang pertama kafir kepadanya. Janganlah kamu menukarkan ayat-ayat-Ku dengan harga murah dan bertakwalah hanya kepada-Ku.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002041.mp3",
        "translation_en": "And believe in what I have sent down confirming that which is [already] with you, and be not the first to disbelieve in it. And do not exchange My signs for a small price, and fear [only] Me."
      },
      {
        "number": 42,
        "arabic": "وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَاَنْتُمْ تَعْلَمُوْنَ ",
        "latin": "Wa lā talbisul-ḥaqqa bil-bāṭili wa taktumul-ḥaqqa wa antum ta‘lamūn(a).  ",
        "translation": "Janganlah kamu campuradukkan kebenaran dengan kebatilan dan (jangan pula) kamu sembunyikan kebenaran, sedangkan kamu mengetahui(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002042.mp3",
        "translation_en": "And do not mix the truth with falsehood or conceal the truth while you know [it]."
      },
      {
        "number": 43,
        "arabic": "وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ",
        "latin": "Wa aqīmuṣ-ṣalāta wa ātuz-zakāta warka‘ū ma‘ar-rāki‘īn(a). ",
        "translation": "Tegakkanlah salat, tunaikanlah zakat, dan rukuklah beserta orang-orang yang rukuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002043.mp3",
        "translation_en": "And establish prayer and give zakah and bow with those who bow [in worship and obedience]."
      },
      {
        "number": 44,
        "arabic": "۞ اَتَأْمُرُوْنَ النَّاسَ بِالْبِرِّ وَتَنْسَوْنَ اَنْفُسَكُمْ وَاَنْتُمْ تَتْلُوْنَ الْكِتٰبَ ۗ اَفَلَا تَعْقِلُوْنَ ",
        "latin": "Ata'murūnan-nāsa bil-birri wa tansauna anfusakum wa antum tatlūnal-kitāb(a), afalā ta‘qilūn(a).  ",
        "translation": "Mengapa kamu menyuruh orang lain untuk (mengerjakan) kebajikan, sedangkan kamu melupakan dirimu sendiri, padahal kamu membaca kitab suci (Taurat)? Tidakkah kamu mengerti?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002044.mp3",
        "translation_en": "Do you order righteousness of the people and forget yourselves while you recite the Scripture? Then will you not reason?"
      },
      {
        "number": 45,
        "arabic": "وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ وَاِنَّهَا لَكَبِيْرَةٌ اِلَّا عَلَى الْخٰشِعِيْنَۙ",
        "latin": "Wasta‘īnū biṣ-ṣabri waṣ-ṣalāh(ti), wa innahā lakabīratun illā ‘alal-khāsyi‘īn(a). ",
        "translation": "Mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sesungguhnya (salat) itu benar-benar berat, kecuali bagi orang-orang yang khusyuk,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002045.mp3",
        "translation_en": "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah]"
      },
      {
        "number": 46,
        "arabic": "الَّذِيْنَ يَظُنُّوْنَ اَنَّهُمْ مُّلٰقُوْا رَبِّهِمْ وَاَنَّهُمْ اِلَيْهِ رٰجِعُوْنَ ࣖ",
        "latin": "Allażīna yaẓunnūna annahum mulāqū rabbihim wa annahum ilaihi rāji‘ūn(a).  ",
        "translation": "(yaitu) orang-orang yang meyakini bahwa mereka akan menemui Tuhannya dan hanya kepada-Nya mereka kembali.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002046.mp3",
        "translation_en": "Who are certain that they will meet their Lord and that they will return to Him."
      },
      {
        "number": 47,
        "arabic": "يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَنِّيْ فَضَّلْتُكُمْ عَلَى الْعٰلَمِيْنَ",
        "latin": "Yā banī isrā'īlażkurū ni‘matiyal-latī an‘amtu ‘alaikum wa annī faḍḍaltukum ‘alal- ‘ālamīn(a). ",
        "translation": "Wahai Bani Israil, ingatlah nikmat-Ku yang telah Aku anugerahkan kepadamu dan sesungguhnya Aku telah melebihkan kamu daripada semua umat di alam ini (pada masa itu).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002047.mp3",
        "translation_en": "O Children of Israel, remember My favor that I have bestowed upon you and that I preferred you over the worlds."
      },
      {
        "number": 48,
        "arabic": "وَاتَّقُوْا يَوْمًا لَّا تَجْزِيْ نَفْسٌ عَنْ نَّفْسٍ شَيْـًٔا وَّلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَّلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَّلَا هُمْ يُنْصَرُوْنَ ",
        "latin": "Wattaqū yaumal lā tajzī nafsun ‘an nafsin syai'aw wa lā yuqbalu minhā syafā‘atuw wa lā yu'khażu minhā ‘adluw wa lā hum yunṣarūn(a). ",
        "translation": "Takutlah kamu pada suatu hari (kiamat) yang seseorang tidak dapat membela orang lain sedikit pun, syafaat dan tebusan apa pun darinya tidak diterima, dan mereka tidak akan ditolong.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002048.mp3",
        "translation_en": "And fear a Day when no soul will suffice for another soul at all, nor will intercession be accepted from it, nor will compensation be taken from it, nor will they be aided."
      },
      {
        "number": 49,
        "arabic": "وَاِذْ نَجَّيْنٰكُمْ مِّنْ اٰلِ فِرْعَوْنَ يَسُوْمُوْنَكُمْ سُوْۤءَ الْعَذَابِ يُذَبِّحُوْنَ اَبْنَاۤءَكُمْ وَيَسْتَحْيُوْنَ نِسَاۤءَكُمْ ۗ وَفِيْ ذٰلِكُمْ بَلَاۤءٌ مِّنْ رَّبِّكُمْ عَظِيْمٌ ",
        "latin": "Wa iż najjainākum min āli fir‘auna yasūmūnakum sū'al-‘ażābi yużabbiḥūna abnā'akum wa yastaḥyūna nisā'akum, wa fī żālikum balā'um mir rabbikum ‘aẓīm(un).  ",
        "translation": "(Ingatlah) ketika Kami menyelamatkan kamu dari (Fir‘aun dan) pengikut-pengikut Fir‘aun. Mereka menimpakan siksaan yang sangat berat kepadamu. Mereka menyembelih anak-anak laki-lakimu dan membiarkan hidup anak-anak perempuanmu. Pada yang demikian terdapat cobaan yang sangat besar dari Tuhanmu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002049.mp3",
        "translation_en": "And [recall] when We saved your forefathers from the people of Pharaoh, who afflicted you with the worst torment, slaughtering your [newborn] sons and keeping your females alive. And in that was a great trial from your Lord."
      },
      {
        "number": 50,
        "arabic": "وَاِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَاَنْجَيْنٰكُمْ وَاَغْرَقْنَآ اٰلَ فِرْعَوْنَ وَاَنْتُمْ تَنْظُرُوْنَ ",
        "latin": "Wa iż faraqnā bikumul-baḥra fa'anjainākum wa agraqnā āla fir‘auna wa antum tanẓurūn(a).  ",
        "translation": "(Ingatlah) ketika Kami membelah laut untukmu, lalu Kami menyelamatkanmu dan menenggelamkan (Fir‘aun dan) pengikut-pengikut Fir‘aun, sedangkan kamu menyaksikan(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002050.mp3",
        "translation_en": "And [recall] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on."
      },
      {
        "number": 51,
        "arabic": "وَاِذْ وٰعَدْنَا مُوْسٰىٓ اَرْبَعِيْنَ لَيْلَةً ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِنْۢ بَعْدِهٖ وَاَنْتُمْ ظٰلِمُوْنَ",
        "latin": "Wa iż wā‘adnā mūsā arba‘īna lailatan ṡummattakhażtumul-‘ijla mim ba‘dihī wa antum ẓālimūn(a). ",
        "translation": "(Ingatlah) ketika Kami menjanjikan (petunjuk Taurat) kepada Musa (melalui munajat selama) empat puluh malam. Kemudian, kamu (Bani Israil) menjadikan (patung) anak sapi (sebagai sembahan) setelah (kepergian)-nya, dan kamu (menjadi) orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002051.mp3",
        "translation_en": "And [recall] when We made an appointment with Moses for forty nights. Then you took [for worship] the calf after him, while you were wrongdoers."
      },
      {
        "number": 52,
        "arabic": "ثُمَّ عَفَوْنَا عَنْكُمْ مِّنْۢ بَعْدِ ذٰلِكَ لَعَلَّكُمْ تَشْكُرُوْنَ",
        "latin": "Ṡumma ‘afaunā ‘ankum mim ba‘di żālika la‘allakum tasykurūn(a).  ",
        "translation": "Setelah itu, Kami memaafkan kamu agar kamu bersyukur.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002052.mp3",
        "translation_en": "Then We forgave you after that so perhaps you would be grateful."
      },
      {
        "number": 53,
        "arabic": "وَاِذْ اٰتَيْنَا مُوْسَى الْكِتٰبَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُوْنَ",
        "latin": "Wa iż ātainā mūsal-kitāba wal-furqāna la‘allakum tahtadūn(a). ",
        "translation": "(Ingatlah) ketika Kami memberikan kitab (Taurat) dan furqān kepada Musa agar kamu memperoleh petunjuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002053.mp3",
        "translation_en": "And [recall] when We gave Moses the Scripture and criterion that perhaps you would be guided."
      },
      {
        "number": 54,
        "arabic": "وَاِذْ قَالَ مُوْسٰى لِقَوْمِهٖ يٰقَوْمِ اِنَّكُمْ ظَلَمْتُمْ اَنْفُسَكُمْ بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوْبُوْٓا اِلٰى بَارِىِٕكُمْ فَاقْتُلُوْٓا اَنْفُسَكُمْۗ ذٰلِكُمْ خَيْرٌ لَّكُمْ عِنْدَ بَارِىِٕكُمْۗ فَتَابَ عَلَيْكُمْ ۗ اِنَّهٗ هُوَ التَّوَّابُ الرَّحِيْمُ ",
        "latin": "Wa iż qāla mūsā liqaumihī yā qaumi innakum ẓalamtum anfusakum bittikhāżikumul- ‘ijla fatūbū ilā bāri'ikum faqtulū anfusakum, żālikum khairul lakum ‘inda bāri'ikum, fatāba ‘alaikum, innahū huwat-tawwābur-raḥīm(u).  ",
        "translation": "(Ingatlah) ketika Musa berkata kepada kaumnya, “Wahai kaumku, sesungguhnya kamu telah menzalimi dirimu sendiri dengan menjadikan (patung) anak sapi (sebagai sembahan). Oleh karena itu, bertobatlah kepada Penciptamu dan bunuhlah dirimu. Itu lebih baik bagimu dalam pandangan Penciptamu. Dia akan menerima tobatmu. Sesungguhnya Dialah Yang Maha Penerima Tobat lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002054.mp3",
        "translation_en": "And [recall] when Moses said to his people, \"O my people, indeed you have wronged yourselves by your taking of the calf [for worship]. So repent to your Creator and kill yourselves. That is best for [all of] you in the sight of your Creator.\" Then He accepted your repentance; indeed, He is the Accepting of repentance, the Merciful."
      },
      {
        "number": 55,
        "arabic": "وَاِذْ قُلْتُمْ يٰمُوْسٰى لَنْ نُّؤْمِنَ لَكَ حَتّٰى نَرَى اللّٰهَ جَهْرَةً فَاَخَذَتْكُمُ الصّٰعِقَةُ وَاَنْتُمْ تَنْظُرُوْنَ",
        "latin": "Wa iż qultum yā mūsā lan nu'mina laka ḥattā narallāha jahratan fa'akhażatkumuṣ-ṣā‘iqatu wa antum tanẓurūn(a). ",
        "translation": "(Ingatlah) ketika kamu berkata, “Wahai Musa, kami tidak akan beriman kepadamu sebelum melihat Allah dengan jelas.” Maka, halilintar menyambarmu dan kamu menyaksikan(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002055.mp3",
        "translation_en": "And [recall] when you said, \"O Moses, we will never believe you until we see Allah outright\"; so the thunderbolt took you while you were looking on."
      },
      {
        "number": 56,
        "arabic": "ثُمَّ بَعَثْنٰكُمْ مِّنْۢ بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُوْنَ",
        "latin": "Ṡumma ba‘aṡnākum mim ba‘di mautikum la‘allakum tasykurūn(a). ",
        "translation": "Kemudian, Kami membangkitkan kamu setelah kematianmu agar kamu bersyukur.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002056.mp3",
        "translation_en": "Then We revived you after your death that perhaps you would be grateful."
      },
      {
        "number": 57,
        "arabic": "وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَاَنْزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوٰى ۗ كُلُوْا مِنْ طَيِّبٰتِ مَا رَزَقْنٰكُمْ ۗ وَمَا ظَلَمُوْنَا وَلٰكِنْ كَانُوْٓا اَنْفُسَهُمْ يَظْلِمُوْنَ",
        "latin": "Wa ẓallalnā ‘alaikumul-gamāma wa anzalnā ‘alaikumul-manna was-salwā, kulū min ṭayyibāti mā razaqnākum, wa mā ẓalamūnā wa lākin kānū anfusahum yaẓlimūn(a). ",
        "translation": "Kami menaungi kamu dengan awan dan Kami menurunkan kepadamu manna dan salwa. Makanlah (makanan) yang baik-baik dari rezeki yang telah Kami berikan kepadamu. Mereka tidak menzalimi Kami, tetapi justru merekalah yang menzalimi diri sendiri.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002057.mp3",
        "translation_en": "And We shaded you with clouds and sent down to you manna and quails, [saying], \"Eat from the good things with which We have provided you.\" And they wronged Us not - but they were [only] wronging themselves."
      },
      {
        "number": 58,
        "arabic": "وَاِذْ قُلْنَا ادْخُلُوْا هٰذِهِ الْقَرْيَةَ فَكُلُوْا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَّادْخُلُوا الْبَابَ سُجَّدًا وَّقُوْلُوْا حِطَّةٌ نَّغْفِرْ لَكُمْ خَطٰيٰكُمْ ۗ وَسَنَزِيْدُ الْمُحْسِنِيْنَ ",
        "latin": "Wa iż qulnadkhulū hāżihil-qaryata fakulū minhā ḥaiṡu syi'tum ragadaw wadkhulul- bāba sujjadaw wa qūlū ḥiṭṭatun nagfir lakum khaṭāyākum, wa sanazīdul-muḥsinīn(a).  ",
        "translation": "(Ingatlah) ketika Kami berfirman, “Masuklah ke negeri ini (Baitulmaqdis). Lalu, makanlah dengan nikmat (berbagai makanan) yang ada di sana sesukamu. Masukilah pintu gerbangnya sambil membungkuk dan katakanlah, ‘Bebaskanlah kami (dari dosa-dosa kami),’ niscaya Kami mengampuni kesalahan-kesalahanmu. Kami akan menambah (karunia) kepada orang-orang yang berbuat kebaikan.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002058.mp3",
        "translation_en": "And [recall] when We said, \"Enter this city and eat from it wherever you will in [ease and] abundance, and enter the gate bowing humbly and say, 'Relieve us of our burdens.' We will [then] forgive your sins for you, and We will increase the doers of good [in goodness and reward].\""
      },
      {
        "number": 59,
        "arabic": "فَبَدَّلَ الَّذِيْنَ ظَلَمُوْا قَوْلًا غَيْرَ الَّذِيْ قِيْلَ لَهُمْ فَاَنْزَلْنَا عَلَى الَّذِيْنَ ظَلَمُوْا رِجْزًا مِّنَ السَّمَاۤءِ بِمَا كَانُوْا يَفْسُقُوْنَ ࣖ",
        "latin": "Fabaddalal-lażīna ẓalamū qaulan gairal-lażī qīla lahum fa anzalnā ‘alal-lażīna ẓalamū rijzam minas-samā'i bimā kānū yafsuqūn(a). ",
        "translation": "Lalu, orang-orang yang zalim mengganti perintah dengan (perintah lain) yang tidak diperintahkan kepada mereka. Maka, Kami menurunkan malapetaka dari langit kepada orang-orang yang zalim itu karena mereka selalu berbuat fasik.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002059.mp3",
        "translation_en": "But those who wronged changed [those words] to a statement other than that which had been said to them, so We sent down upon those who wronged a punishment from the sky because they were defiantly disobeying."
      },
      {
        "number": 60,
        "arabic": "۞ وَاِذِ اسْتَسْقٰى مُوْسٰى لِقَوْمِهٖ فَقُلْنَا اضْرِبْ بِّعَصَاكَ الْحَجَرَۗ  فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۗ قَدْ عَلِمَ كُلُّ اُنَاسٍ مَّشْرَبَهُمْ ۗ كُلُوْا وَاشْرَبُوْا مِنْ رِّزْقِ اللّٰهِ وَلَا تَعْثَوْا فِى الْاَرْضِ مُفْسِدِيْنَ",
        "latin": "Wa iżistasqā mūsā liqaumihī faqulnaḍrib bi‘aṣākal-ḥajar(a), fanfajarat minhuṡnatā ‘asyrata ‘ainā(n), qad ‘alima kullu unāsim masyrabahum, kulū wasyrabū mir rizqillāhi wa lā ta‘ṡau fil-arḍi mufsidīn(a).  ",
        "translation": "(Ingatlah) ketika Musa memohon (curahan) air untuk kaumnya. Lalu, Kami berfirman, “Pukullah batu itu dengan tongkatmu!” Maka, memancarlah darinya (batu itu) dua belas mata air. Setiap suku telah mengetahui tempat minumnya (masing-masing). Makan dan minumlah rezeki (yang diberikan) Allah dan janganlah melakukan kejahatan di bumi dengan berbuat kerusakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002060.mp3",
        "translation_en": "And [recall] when Moses prayed for water for his people, so We said, \"Strike with your staff the stone.\" And there gushed forth from it twelve springs, and every people knew its watering place. \"Eat and drink from the provision of Allah, and do not commit abuse on the earth, spreading corruption.\""
      },
      {
        "number": 61,
        "arabic": "وَاِذْ قُلْتُمْ يٰمُوْسٰى لَنْ نَّصْبِرَ عَلٰى طَعَامٍ وَّاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنْۢبِتُ الْاَرْضُ مِنْۢ بَقْلِهَا وَقِثَّاۤىِٕهَا وَفُوْمِهَا وَعَدَسِهَا وَبَصَلِهَا ۗ قَالَ اَتَسْتَبْدِلُوْنَ الَّذِيْ هُوَ اَدْنٰى بِالَّذِيْ هُوَ خَيْرٌ ۗ اِهْبِطُوْا مِصْرًا فَاِنَّ لَكُمْ مَّا سَاَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ وَبَاۤءُوْ بِغَضَبٍ مِّنَ اللّٰهِ ۗ ذٰلِكَ بِاَنَّهُمْ كَانُوْا يَكْفُرُوْنَ بِاٰيٰتِ اللّٰهِ وَيَقْتُلُوْنَ النَّبِيّٖنَ بِغَيْرِ الْحَقِّ ۗ ذٰلِكَ بِمَا عَصَوْا وَّكَانُوْا يَعْتَدُوْنَ ࣖ",
        "latin": "Wa iż qultum yā mūsā lan naṣbira ‘alā ṭa‘āmiw wāḥidin fad‘u lanā rabbaka yukhrij lanā mimmā tumbitul-arḍu mim baqlihā wa qiṡṡā'ihā wa fūmihā wa ‘adasihā wa baṣalihā, qāla atastabdilūnal-lażī huwa adnā bil-lażī huwa khair(un), ihbiṭū miṣran fa inna lakum mā sa'altum, wa ḍuribat ‘alaihimuż-żillatu wal-maskanatu wa bā'ū bigaḍabim minallāh(i), żālika bi'annahum kānū yakfurūna bi'āyātillāhi wa yaqtulūnan- nabiyyīna bi gairil-ḥaqq(i), żālika bimā ‘aṣaw wa kānū ya‘tadūn(a). ",
        "translation": "(Ingatlah) ketika kamu berkata, “Wahai Musa, kami tidak tahan hanya (makan) dengan satu macam makanan. Maka, mohonkanlah kepada Tuhanmu untuk kami agar Dia memberi kami apa yang ditumbuhkan bumi, seperti sayur-mayur, mentimun, bawang putih, kacang adas, dan bawang merah.” Dia (Musa) menjawab, “Apakah kamu meminta sesuatu yang buruk sebagai ganti dari sesuatu yang baik? Pergilah ke suatu kota. Pasti kamu akan memperoleh apa yang kamu minta.” Kemudian, mereka ditimpa kenistaan dan kemiskinan, dan mereka (kembali) mendapat kemurkaan dari Allah. Hal itu (terjadi) karena sesungguhnya mereka selalu mengingkari ayat-ayat Allah dan membunuh para nabi tanpa hak (alasan yang benar). Yang demikian itu ditimpakan karena mereka durhaka dan selalu melampaui batas.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002061.mp3",
        "translation_en": "And [recall] when you said, \"O Moses, we can never endure one [kind of] food. So call upon your Lord to bring forth for us from the earth its green herbs and its cucumbers and its garlic and its lentils and its onions.\" [Moses] said, \"Would you exchange what is better for what is less? Go into [any] settlement and indeed, you will have what you have asked.\" And they were covered with humiliation and poverty and returned with anger from Allah [upon them]. That was because they [repeatedly] disbelieved in the signs of Allah and killed the prophets without right. That was because they disobeyed and were [habitually] transgressing."
      },
      {
        "number": 62,
        "arabic": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَالَّذِيْنَ هَادُوْا وَالنَّصٰرٰى وَالصَّابِــِٕيْنَ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَعَمِلَ صَالِحًا فَلَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ",
        "latin": "Innal-lażīna āmanū wal-lażīna hādū wan-naṣārā waṣ-ṣābi'īna man āmana billāhi wal- yaumil-ākhiri wa ‘amila ṣāliḥan fa lahum ajruhum ‘inda rabbihim, wa lā khaufun ‘alaihim wa lā hum yaḥzanūn(a). ",
        "translation": "Sesungguhnya orang-orang yang beriman, orang-orang Yahudi, orang-orang Nasrani, dan orang-orang Sabiin, siapa saja (di antara mereka) yang beriman kepada Allah dan hari Akhir serta melakukan kebajikan (pasti) mendapat pahala dari Tuhannya, tidak ada rasa takut yang menimpa mereka dan mereka pun tidak bersedih hati.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002062.mp3",
        "translation_en": "Indeed, those who believed and those who were Jews or Christians or Sabeans [before Prophet Muhammad] - those [among them] who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord, and no fear will there be concerning them, nor will they grieve."
      },
      {
        "number": 63,
        "arabic": "وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّوْرَۗ خُذُوْا مَآ اٰتَيْنٰكُمْ بِقُوَّةٍ وَّاذْكُرُوْا مَا فِيْهِ لَعَلَّكُمْ تَتَّقُوْنَ",
        "latin": "Wa iż akhażnā mīṡāqakum wa rafa‘nā fauqakumuṭ-ṭūr(a), khużū mā ātainākum biquwwatiw ważkurū mā fīhi la‘allakum tattaqūn(a). ",
        "translation": "(Ingatlah) ketika Kami mengambil janjimu dan Kami angkat gunung (Sinai) di atasmu (seraya berfirman), “Pegang teguhlah apa yang telah Kami berikan kepadamu dan ingatlah apa yang ada di dalamnya agar kamu bertakwa.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002063.mp3",
        "translation_en": "And [recall] when We took your covenant, [O Children of Israel, to abide by the Torah] and We raised over you the mount, [saying], \"Take what We have given you with determination and remember what is in it that perhaps you may become righteous.\""
      },
      {
        "number": 64,
        "arabic": "ثُمَّ تَوَلَّيْتُمْ مِّنْۢ بَعْدِ ذٰلِكَ  فَلَوْلَا فَضْلُ اللّٰهِ عَلَيْكُمْ وَرَحْمَتُهٗ لَكُنْتُمْ مِّنَ الْخٰسِرِيْنَ",
        "latin": "Ṡumma tawallaitum mim ba‘di żālika falau lā faḍlullāhi ‘alaikum wa raḥmatuhū lakuntum minal-khāsirīn(a).  ",
        "translation": "Setelah itu, kamu berpaling. Maka, seandainya bukan karena karunia Allah dan rahmat-Nya kepadamu, pasti kamu termasuk orang yang rugi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002064.mp3",
        "translation_en": "Then you turned away after that. And if not for the favor of Allah upon you and His mercy, you would have been among the losers."
      },
      {
        "number": 65,
        "arabic": "وَلَقَدْ عَلِمْتُمُ الَّذِيْنَ اعْتَدَوْا مِنْكُمْ فِى السَّبْتِ فَقُلْنَا لَهُمْ كُوْنُوْا قِرَدَةً خٰسِـِٕيْنَ",
        "latin": "Wa laqad ‘alimtumul-lażīna‘tadau minkum fis-sabti faqulnā lahum kūnū qiradatan khāsi'īn(a).  ",
        "translation": "Sungguh, kamu benar-benar telah mengetahui orang-orang yang melakukan pelanggaran di antara kamu pada hari Sabat, lalu Kami katakan kepada mereka, “Jadilah kamu kera yang hina!”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002065.mp3",
        "translation_en": "And you had already known about those who transgressed among you concerning the sabbath, and We said to them, \"Be apes, despised.\""
      },
      {
        "number": 66,
        "arabic": "  فَجَعَلْنٰهَا نَكَالًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةً لِّلْمُتَّقِيْنَ",
        "latin": "Faja‘alnāhā nakālal limā baina yadaihā wa mā khalfahā wa mau‘iẓatal lil-muttaqīn(a). ",
        "translation": "Maka, Kami jadikan (yang demikian) itu sebagai peringatan bagi orang-orang pada masa itu dan bagi mereka yang datang kemudian, serta menjadi pelajaran bagi orang-orang yang bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002066.mp3",
        "translation_en": "And We made it a deterrent punishment for those who were present and those who succeeded [them] and a lesson for those who fear Allah."
      },
      {
        "number": 67,
        "arabic": "وَاِذْ قَالَ مُوْسٰى لِقَوْمِهٖٓ اِنَّ اللّٰهَ يَأْمُرُكُمْ اَنْ تَذْبَحُوْا بَقَرَةً ۗ قَالُوْٓا اَتَتَّخِذُنَا هُزُوًا ۗ قَالَ اَعُوْذُ بِاللّٰهِ اَنْ اَكُوْنَ مِنَ الْجٰهِلِيْنَ ",
        "latin": "Wa iż qāla mūsā liqaumihī innallāha ya'murukum an tażbaḥū baqarah(tan), qālū atattakhiżunā huzuwā(n), qāla a‘ūżu billāhi an akūna minal-jāhilīn(a). ",
        "translation": "(Ingatlah) ketika Musa berkata kepada kaumnya, “Allah memerintahkan kamu agar menyembelih seekor sapi.” Mereka bertanya, “Apakah engkau akan menjadikan kami sebagai ejekan?” Dia menjawab, “Aku berlindung kepada Allah agar tidak termasuk orang-orang yang jahil.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002067.mp3",
        "translation_en": "And [recall] when Moses said to his people, \"Indeed, Allah commands you to slaughter a cow.\" They said, \"Do you take us in ridicule?\" He said, \"I seek refuge in Allah from being among the ignorant.\""
      },
      {
        "number": 68,
        "arabic": "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا هِيَ ۗ قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَّلَا بِكْرٌۗ عَوَانٌۢ بَيْنَ ذٰلِكَ ۗ فَافْعَلُوْا مَا تُؤْمَرُوْنَ ",
        "latin": "Qālud‘u lanā rabbaka yubayyil lanā mā hiy(a), qāla innahū yaqūlu innahā baqaratul lā fāriḍuw wa lā bikr(un), ‘awānum baina żālik(a), faf‘alū mā tu'marūn(a).  ",
        "translation": "Mereka berkata, “Mohonkanlah kepada Tuhanmu untuk kami agar Dia menjelaskan kepada kami tentang (sapi) itu.” Dia (Musa) menjawab, “Dia (Allah) berfirman bahwa sapi itu tidak tua dan tidak muda, (tetapi) pertengahan antara itu. Maka, kerjakanlah apa yang diperintahkan kepadamu.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002068.mp3",
        "translation_en": "They said, \"Call upon your Lord to make clear to us what it is.\" [Moses] said, \"[Allah] says, 'It is a cow which is neither old nor virgin, but median between that,' so do what you are commanded.\""
      },
      {
        "number": 69,
        "arabic": "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا لَوْنُهَا ۗ قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ صَفْرَاۤءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ النّٰظِرِيْنَ",
        "latin": "Qālud‘u lanā rabbaka yubayyil lanā mā launuhā, qāla innahū yaqūlu innahā baqaratun ṣafrā'u fāqi‘ul launuhā tasurrun-nāẓirīn(a). ",
        "translation": "Mereka berkata, “Mohonkanlah kepada Tuhanmu untuk kami agar Dia menjelaskan kepada kami apa warnanya.” Dia (Musa) menjawab, “Dia (Allah) berfirman bahwa (sapi) itu adalah sapi yang warnanya kuning tua, yang menyenangkan orang-orang yang memandang(-nya).”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002069.mp3",
        "translation_en": "They said, \"Call upon your Lord to show us what is her color.\" He said, \"He says, 'It is a yellow cow, bright in color - pleasing to the observers.' \""
      },
      {
        "number": 70,
        "arabic": "قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّنْ لَّنَا مَا هِيَۙ اِنَّ الْبَقَرَ تَشٰبَهَ عَلَيْنَاۗ وَاِنَّآ اِنْ شَاۤءَ اللّٰهُ لَمُهْتَدُوْنَ",
        "latin": "Qālud‘u lanā rabbaka yubayyil lanā mā hiy(a), innal-baqara tasyābaha ‘alainā, wa innā in syā'allāhu lamuhtadūn(a). ",
        "translation": "Mereka berkata, “Mohonkanlah kepada Tuhanmu untuk kami agar Dia menjelaskan kepada kami tentang (sapi) itu. (Karena) sesungguhnya sapi itu belum jelas bagi kami, dan jika Allah menghendakinya, niscaya kami mendapat petunjuk.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002070.mp3",
        "translation_en": "They said, \"Call upon your Lord to make clear to us what it is. Indeed, [all] cows look alike to us. And indeed we, if Allah wills, will be guided.\""
      },
      {
        "number": 71,
        "arabic": "قَالَ اِنَّهٗ يَقُوْلُ اِنَّهَا بَقَرَةٌ لَّا ذَلُوْلٌ تُثِيْرُ الْاَرْضَ وَلَا تَسْقِى الْحَرْثَۚ مُسَلَّمَةٌ لَّاشِيَةَ فِيْهَا ۗ قَالُوا الْـٰٔنَ جِئْتَ بِالْحَقِّ  فَذَبَحُوْهَا وَمَا كَادُوْا يَفْعَلُوْنَ ࣖ",
        "latin": "Qāla innahū yaqūlu innahā baqaratul lā żalūlun tuṡīrul-arḍa wa lā tasqil-ḥarṡ(a), musallamatul lā syiyata fīhā, qālul-'āna ji'ta bil-ḥaqqi fażabaḥūhā wa mā kādū yaf‘alūn(a). ",
        "translation": "Dia (Musa) menjawab, “Dia (Allah) berfirman bahwa (sapi) itu adalah sapi yang belum pernah dipakai untuk membajak tanah dan tidak (pula) untuk mengairi tanaman, sehat, dan tanpa belang.” Mereka berkata, “Sekarang barulah engkau menerangkan (hal) yang sebenarnya.” Lalu, mereka menyembelihnya, dan hampir saja mereka tidak melaksanakan (perintah) itu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002071.mp3",
        "translation_en": "He said, \"He says, 'It is a cow neither trained to plow the earth nor to irrigate the field, one free from fault with no spot upon her.' \" They said, \"Now you have come with the truth.\" So they slaughtered her, but they could hardly do it."
      },
      {
        "number": 72,
        "arabic": "وَاِذْ قَتَلْتُمْ نَفْسًا فَادّٰرَءْتُمْ فِيْهَا ۗ وَاللّٰهُ مُخْرِجٌ مَّا كُنْتُمْ تَكْتُمُوْنَ ۚ",
        "latin": "Wa iż qultum nafsan faddāra'tum fīhā, wallāhu mukhrijum mā kuntum taktumūn(a). ",
        "translation": "(Ingatlah) ketika kamu membunuh seseorang lalu kamu saling tuduh tentang itu. Akan tetapi, Allah menyingkapkan apa yang selalu kamu sembunyikan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002072.mp3",
        "translation_en": "And [recall] when you slew a man and disputed over it, but Allah was to bring out that which you were concealing."
      },
      {
        "number": 73,
        "arabic": "فَقُلْنَا اضْرِبُوْهُ بِبَعْضِهَاۗ  كَذٰلِكَ يُحْيِ اللّٰهُ الْمَوْتٰى وَيُرِيْكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَعْقِلُوْنَ",
        "latin": "Faqulnaḍribūhu biba‘ḍihā, każālika yuḥyillāhul-mautā wa yurīkum āyātihī la‘allakum ta‘qilūn(a). ",
        "translation": "Lalu, Kami berfirman, “Pukullah (mayat) itu dengan bagian dari (sapi) itu!” Demikianlah Allah menghidupkan (orang) yang telah mati, dan Dia memperlihatkan kepadamu tanda-tanda (kekuasaan-Nya) agar kamu mengerti.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002073.mp3",
        "translation_en": "So, We said, \"Strike the slain man with part of it.\" Thus does Allah bring the dead to life, and He shows you His signs that you might reason."
      },
      {
        "number": 74,
        "arabic": "ثُمَّ قَسَتْ قُلُوْبُكُمْ مِّنْۢ بَعْدِ ذٰلِكَ فَهِيَ كَالْحِجَارَةِ اَوْ اَشَدُّ قَسْوَةً ۗ وَاِنَّ مِنَ الْحِجَارَةِ لَمَا يَتَفَجَّرُ مِنْهُ الْاَنْهٰرُ ۗ وَاِنَّ مِنْهَا لَمَا يَشَّقَّقُ فَيَخْرُجُ مِنْهُ الْمَاۤءُ  ۗوَاِنَّ مِنْهَا لَمَا يَهْبِطُ مِنْ خَشْيَةِ اللّٰهِ ۗوَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ",
        "latin": "Ṡumma qasat qulūbukum mim ba‘di żālika fahiya kal-ḥijārati au asyaddu qaswah(tan), wa inna minal-ḥijārati lamā yatafajjaru minhul-anhār(u), wa inna minhā lamā yasysyaqqaqu fayakhruju minhul-mā'(u), wa inna minhā lamā yahbiṭu min khasy-yatillāh(i), wa mallāhu bigāfilin ‘ammā ta‘malūn(a). ",
        "translation": "Setelah itu, hatimu menjadi keras sehingga ia (hatimu) seperti batu, bahkan lebih keras. Padahal, dari batu-batu itu pasti ada sungai-sungai yang (airnya) memancar. Ada pula yang terbelah, lalu keluarlah mata air darinya, dan ada lagi yang meluncur jatuh karena takut kepada Allah. Allah tidaklah lengah terhadap apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002074.mp3",
        "translation_en": "Then your hearts became hardened after that, being like stones or even harder. For indeed, there are stones from which rivers burst forth, and there are some of them that split open and water comes out, and there are some of them that fall down for fear of Allah. And Allah is not unaware of what you do."
      },
      {
        "number": 75,
        "arabic": "۞ اَفَتَطْمَعُوْنَ اَنْ يُّؤْمِنُوْا لَكُمْ وَقَدْ كَانَ فَرِيْقٌ مِّنْهُمْ يَسْمَعُوْنَ كَلَامَ اللّٰهِ ثُمَّ يُحَرِّفُوْنَهٗ مِنْۢ بَعْدِ مَا عَقَلُوْهُ وَهُمْ يَعْلَمُوْنَ ",
        "latin": "Afa taṭma‘ūna ay yu'minū lakum wa qad kāna farīqum minhum yasma‘ūna kalāmallāhi ṡumma yuḥarrifūnahū mim ba‘di mā ‘aqalūhu wa hum ya‘lamūn(a). ",
        "translation": "Maka, apakah kamu (muslimin) sangat mengharapkan mereka agar percaya kepadamu, sedangkan segolongan mereka mendengar firman Allah lalu mereka mengubahnya setelah memahaminya, padahal mereka mengetahui(-nya)?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002075.mp3",
        "translation_en": "Do you covet [the hope, O believers], that they would believe for you while a party of them used to hear the words of Allah and then distort the Torah after they had understood it while they were knowing?"
      },
      {
        "number": 76,
        "arabic": "وَاِذَا لَقُوا الَّذِيْنَ اٰمَنُوْا قَالُوْٓا اٰمَنَّاۚ وَاِذَا خَلَا بَعْضُهُمْ اِلٰى بَعْضٍ قَالُوْٓا اَتُحَدِّثُوْنَهُمْ بِمَا فَتَحَ اللّٰهُ عَلَيْكُمْ لِيُحَاۤجُّوْكُمْ بِهٖ عِنْدَ رَبِّكُمْ ۗ اَفَلَا تَعْقِلُوْنَ",
        "latin": "Wa iżā laqul-lażīna āmanū qālū āmannā, wa iżā khalā ba‘ḍuhum ilā ba‘ḍin qālū atuḥaddiṡūnahum bimā fataḥallāhu ‘alaikum liyuḥājjūkum bihī ‘inda rabbikum, afalā ta‘qilūn(a).  ",
        "translation": "Apabila berjumpa dengan orang-orang yang beriman, mereka berkata, “Kami telah beriman.” Akan tetapi, apabila kembali kepada sesamanya, mereka bertanya, “Apakah akan kamu ceritakan kepada mereka apa yang telah diterangkan Allah kepadamu sehingga mereka dapat menyanggah kamu di hadapan Tuhanmu? Apakah kamu tidak mengerti?”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002076.mp3",
        "translation_en": "And when they meet those who believe, they say, \"We have believed\"; but when they are alone with one another, they say, \"Do you talk to them about what Allah has revealed to you so they can argue with you about it before your Lord?\" Then will you not reason?"
      },
      {
        "number": 77,
        "arabic": "اَوَلَا يَعْلَمُوْنَ اَنَّ اللّٰهَ يَعْلَمُ مَا يُسِرُّوْنَ وَمَا يُعْلِنُوْنَ",
        "latin": "Awalā ya‘lamūna annallāha ya‘lamu mā yusirrūna wa mā yu‘linūn(a).  ",
        "translation": "Tidakkah mereka tahu bahwa Allah mengetahui apa yang mereka sembunyikan dan apa yang mereka nyatakan?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002077.mp3",
        "translation_en": "But do they not know that Allah knows what they conceal and what they declare?"
      },
      {
        "number": 78,
        "arabic": " وَمِنْهُمْ اُمِّيُّوْنَ لَا يَعْلَمُوْنَ الْكِتٰبَ اِلَّآ اَمَانِيَّ وَاِنْ هُمْ اِلَّا يَظُنُّوْنَ",
        "latin": "Wa minhum umiyyūna lā ya‘lamūnal-kitāba illā amāniyya wa in hum illā yaẓunnūn(a).  ",
        "translation": "Di antara mereka ada yang umi (buta huruf), tidak memahami Kitab (Taurat), kecuali hanya berangan-angan dan mereka hanya menduga-duga.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002078.mp3",
        "translation_en": "And among them are unlettered ones who do not know the Scripture except in wishful thinking, but they are only assuming."
      },
      {
        "number": 79,
        "arabic": "فَوَيْلٌ لِّلَّذِيْنَ يَكْتُبُوْنَ الْكِتٰبَ بِاَيْدِيْهِمْ ثُمَّ يَقُوْلُوْنَ هٰذَا مِنْ عِنْدِ اللّٰهِ لِيَشْتَرُوْا بِهٖ ثَمَنًا قَلِيْلًا ۗفَوَيْلٌ لَّهُمْ مِّمَّا كَتَبَتْ اَيْدِيْهِمْ وَوَيْلٌ لَّهُمْ مِّمَّا يَكْسِبُوْنَ ",
        "latin": "Fawailul lil-lażīna yaktubūnal-kitāba bi'aidīhim ṡumma yaqūlūna hāżā min ‘indillāhi liyasytarū bihī ṡamanan qalīlā(n), fawailul lahum mimmā katabat aidīhim wa wailul lahum mimmā yaksibūn(a).",
        "translation": "Celakalah orang-orang yang menulis kitab dengan tangan mereka (sendiri), kemudian berkata, “Ini dari Allah,” (dengan maksud) untuk menjualnya dengan harga murah. Maka, celakalah mereka karena tulisan tangan mereka dan celakalah mereka karena apa yang mereka perbuat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002079.mp3",
        "translation_en": "So woe to those who write the \"scripture\" with their own hands, then say, \"This is from Allah,\" in order to exchange it for a small price. Woe to them for what their hands have written and woe to them for what they earn."
      },
      {
        "number": 80,
        "arabic": "وَقَالُوْا لَنْ تَمَسَّنَا النَّارُ اِلَّآ اَيَّامًا مَّعْدُوْدَةً ۗ قُلْ اَتَّخَذْتُمْ عِنْدَ اللّٰهِ عَهْدًا فَلَنْ يُّخْلِفَ اللّٰهُ عَهْدَهٗٓ اَمْ تَقُوْلُوْنَ عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ ",
        "latin": "Wa qālū lan tamassanan-nāru illā ayyāmam ma‘dūdah (tan), qul attakhażtum ‘indallāhi ‘ahdan falay yukhlifallāhu ‘ahdahū am taqūlūna ‘alallāhi mā lā ta‘lamūn(a).  ",
        "translation": "Mereka berkata, “Neraka tidak akan menyentuh kami, kecuali beberapa hari saja.” Katakanlah, “Sudahkah kamu menerima janji dari Allah sehingga Allah tidak akan mengingkari janji-Nya ataukah kamu berkata tentang Allah sesuatu yang tidak kamu ketahui?”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002080.mp3",
        "translation_en": "And they say, \"Never will the Fire touch us, except for a few days.\" Say, \"Have you taken a covenant with Allah? For Allah will never break His covenant. Or do you say about Allah that which you do not know?\""
      },
      {
        "number": 81,
        "arabic": "بَلٰى مَنْ كَسَبَ سَيِّئَةً وَّاَحَاطَتْ بِهٖ خَطِيْۤـَٔتُهٗ فَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ ",
        "latin": "Balā man kasaba sayyi'ataw wa aḥāṭat bihī khaṭī'atuhū fa ulā'ika aṣḥābun-nār(i), hum fīhā khālidūn(a).  ",
        "translation": "Bukan demikian! Siapa yang berbuat keburukan dan dosanya telah menenggelamkannya, mereka itulah penghuni neraka. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002081.mp3",
        "translation_en": "Yes, whoever earns evil and his sin has encompassed him - those are the companions of the Fire; they will abide therein eternally."
      },
      {
        "number": 82,
        "arabic": "وَالَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اُولٰۤىِٕكَ اَصْحٰبُ الْجَنَّةِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ ࣖ",
        "latin": "Wal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti ulā'ika aṣḥābul-jannah(ti), hum fīhā khālidūn(a).  ",
        "translation": "Adapun orang-orang yang beriman dan beramal saleh, mereka itulah penghuni surga. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002082.mp3",
        "translation_en": "But they who believe and do righteous deeds - those are the companions of Paradise; they will abide therein eternally."
      },
      {
        "number": 83,
        "arabic": "وَاِذْ اَخَذْنَا مِيْثَاقَ بَنِيْٓ اِسْرَاۤءِيْلَ لَا تَعْبُدُوْنَ اِلَّا اللّٰهَ وَبِالْوَالِدَيْنِ اِحْسَانًا وَّذِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَقُوْلُوْا لِلنَّاسِ حُسْنًا وَّاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَۗ  ثُمَّ تَوَلَّيْتُمْ اِلَّا قَلِيْلًا مِّنْكُمْ وَاَنْتُمْ مُّعْرِضُوْنَ ",
        "latin": "Wa iż akhażnā mīṡāqa banī isrā'īla lā ta‘budūna illallāha wa bil-wālidaini iḥsānaw wa żil-qurbā wal-yatāmā wal-masākīni wa qūlū lin-nāsi ḥusnaw wa aqīmuṣ-ṣalāta wa ātuz-zakāh(ta), ṡumma tawallaitum illā qalīlam minkum wa antum mu‘riḍūn(a).  ",
        "translation": "(Ingatlah) ketika Kami mengambil perjanjian dari Bani Israil, “Janganlah kamu menyembah selain Allah, dan berbuatbaiklah kepada kedua orang tua, kerabat, anak-anak yatim, dan orang-orang miskin. Selain itu, bertutur katalah yang baik kepada manusia, laksanakanlah salat, dan tunaikanlah zakat.” Akan tetapi, kamu berpaling (mengingkarinya), kecuali sebagian kecil darimu, dan kamu (masih menjadi) pembangkang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002083.mp3",
        "translation_en": "And [recall] when We took the covenant from the Children of Israel, [enjoining upon them], \"Do not worship except Allah; and to parents do good and to relatives, orphans, and the needy. And speak to people good [words] and establish prayer and give zakah.\" Then you turned away, except a few of you, and you were refusing."
      },
      {
        "number": 84,
        "arabic": "وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ لَا تَسْفِكُوْنَ دِمَاۤءَكُمْ وَلَا تُخْرِجُوْنَ اَنْفُسَكُمْ مِّنْ دِيَارِكُمْ ۖ ثُمَّ اَقْرَرْتُمْ وَاَنْتُمْ تَشْهَدُوْنَ ",
        "latin": "Wa iż akhażnā mīṡāqakum lā tasfikūna dimā'akum wa lā tukhrijūna anfusakum min diyārikum ṡumma aqrartum wa antum tasyhadūn(a).  ",
        "translation": "(Ingatlah) ketika Kami mengambil perjanjianmu (agar) kamu tidak menumpahkan darahmu (membunuh orang) dan mengusir dirimu (saudara sebangsamu) dari kampung halamanmu. Kemudian, kamu berikrar dan bersaksi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002084.mp3",
        "translation_en": "And [recall] when We took your covenant, [saying], \"Do not shed each other's blood or evict one another from your homes.\" Then you acknowledged [this] while you were witnessing."
      },
      {
        "number": 85,
        "arabic": "ثُمَّ اَنْتُمْ هٰٓؤُلَاۤءِ تَقْتُلُوْنَ اَنْفُسَكُمْ وَتُخْرِجُوْنَ فَرِيْقًا مِّنْكُمْ مِّنْ دِيَارِهِمْۖ تَظٰهَرُوْنَ عَلَيْهِمْ بِالْاِثْمِ وَالْعُدْوَانِۗ وَاِنْ يَّأْتُوْكُمْ اُسٰرٰى تُفٰدُوْهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ اِخْرَاجُهُمْ ۗ اَفَتُؤْمِنُوْنَ بِبَعْضِ الْكِتٰبِ وَتَكْفُرُوْنَ بِبَعْضٍۚ  فَمَا جَزَاۤءُ مَنْ يَّفْعَلُ ذٰلِكَ مِنْكُمْ اِلَّا خِزْيٌ فِى الْحَيٰوةِ الدُّنْيَا ۚوَيَوْمَ الْقِيٰمَةِ يُرَدُّوْنَ اِلٰٓى  اَشَدِّ الْعَذَابِۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ ",
        "latin": "Ṡumma antum hā'ulā'i taqtulūna anfusakum wa tukhrijūna farīqam minkum min diyārihim taẓāharūna ‘alaihim bil-iṡmi wal-‘udwān(i), wa iy ya'tūkum usārā tufādūhum wa huwa muḥarramun ‘alaikum ikhrājuhum, afa tu'minūna biba‘ḍil-kitābi wa takfurūna bi ba‘ḍ(in), famā jazā'u may yaf‘alu żālika minkum illā khizyun fil-ḥayātid-dun-yā, wa yaumal-qiyāmati yuraddūna ilā asyaddil-‘ażāb(i), wa mallāhu bigāfilin ‘ammā ta‘malūn(a).  ",
        "translation": "Kemudian, kamu (Bani Israil) membunuh dirimu (sesamamu) dan mengusir segolongan darimu dari kampung halamannya. Kamu saling membantu (menghadapi) mereka dalam kejahatan dan permusuhan. Jika mereka datang kepadamu sebagai tawanan, kamu tebus mereka, padahal kamu dilarang mengusir mereka. Apakah kamu beriman pada sebagian Kitab (Taurat) dan ingkar pada sebagian (yang lain)? Maka, tidak ada balasan (yang pantas) bagi orang yang berbuat demikian di antaramu, selain kenistaan dalam kehidupan dunia dan pada hari Kiamat mereka dikembalikan pada azab yang paling berat. Allah tidak lengah terhadap apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002085.mp3",
        "translation_en": "Then, you are those [same ones who are] killing one another and evicting a party of your people from their homes, cooperating against them in sin and aggression. And if they come to you as captives, you ransom them, although their eviction was forbidden to you. So do you believe in part of the Scripture and disbelieve in part? Then what is the recompense for those who do that among you except disgrace in worldly life; and on the Day of Resurrection they will be sent back to the severest of punishment. And Allah is not unaware of what you do."
      },
      {
        "number": 86,
        "arabic": " اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الْحَيٰوةَ الدُّنْيَا بِالْاٰخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْصَرُوْنَ ࣖ",
        "latin": "Ulā'ikal-lażīnasytarawul-ḥayātad-dun-yā bil-ākhirah(ti), falā yukhaffafu ‘anhumul-‘ażābu wa lā hum yunṣarūn(a).  ",
        "translation": "Mereka itulah orang-orang yang membeli kehidupan dunia dengan (kehidupan) akhirat. Maka, azabnya tidak akan diringankan dan mereka tidak akan ditolong.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002086.mp3",
        "translation_en": "Those are the ones who have bought the life of this world [in exchange] for the Hereafter, so the punishment will not be lightened for them, nor will they be aided."
      },
      {
        "number": 87,
        "arabic": "وَلَقَدْ اٰتَيْنَا مُوْسَى الْكِتٰبَ وَقَفَّيْنَا مِنْۢ بَعْدِهٖ بِالرُّسُلِ ۖ وَاٰتَيْنَا عِيْسَى ابْنَ مَرْيَمَ الْبَيِّنٰتِ وَاَيَّدْنٰهُ بِرُوْحِ الْقُدُسِۗ  اَفَكُلَّمَا جَاۤءَكُمْ رَسُوْلٌۢ بِمَا لَا تَهْوٰىٓ اَنْفُسُكُمُ اسْتَكْبَرْتُمْ ۚ فَفَرِيْقًا كَذَّبْتُمْ وَفَرِيْقًا تَقْتُلُوْنَ ",
        "latin": "Wa laqad ātainā mūsal-kitāba wa qaffainā mim ba‘dihī bir-rusul(i), wa ātainā ‘īsabna maryamal-bayyināti wa ayyadnāhu birūḥil-qudus(i), afakullamā jā'akum rasūlum bimā lā tahwā anfusukumustakbartum, fafarīqan każżabtum wa farīqan taqtulūn(a).  ",
        "translation": "Sungguh, Kami benar-benar telah menganugerahkan Kitab (Taurat) kepada Musa dan Kami menyusulkan setelahnya rasul-rasul. Kami juga telah menganugerahkan kepada Isa, putra Maryam, bukti-bukti kebenaran, serta Kami perkuat dia dengan Ruhulkudus (Jibril). Mengapa setiap kali rasul datang kepadamu (membawa) sesuatu (pelajaran) yang tidak kamu inginkan, kamu menyombongkan diri? Lalu, sebagian(-nya) kamu dustakan dan sebagian (yang lain) kamu bunuh?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002087.mp3",
        "translation_en": "And We did certainly give Moses the Torah and followed up after him with messengers. And We gave Jesus, the son of Mary, clear proofs and supported him with the Pure Spirit. But is it [not] that every time a messenger came to you, [O Children of Israel], with what your souls did not desire, you were arrogant? And a party [of messengers] you denied and another party you killed."
      },
      {
        "number": 88,
        "arabic": "وَقَالُوْا قُلُوْبُنَا غُلْفٌ ۗ بَلْ لَّعَنَهُمُ اللّٰهُ بِكُفْرِهِمْ فَقَلِيْلًا مَّا يُؤْمِنُوْنَ ",
        "latin": "Wa qālū qulūbunā gulf(un), bal la‘anahumullāhu bikufrihim faqalīlam mā yu'minūn(a).  ",
        "translation": "Mereka berkata, “Hati kami tertutup.” Tidak! Allah telah melaknat mereka itu karena keingkaran mereka, tetapi sedikit sekali mereka yang beriman.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002088.mp3",
        "translation_en": "And they said, \"Our hearts are wrapped.\" But, [in fact], Allah has cursed them for their disbelief, so little is it that they believe."
      },
      {
        "number": 89,
        "arabic": "وَلَمَّا جَاۤءَهُمْ كِتٰبٌ مِّنْ عِنْدِ اللّٰهِ مُصَدِّقٌ لِّمَا مَعَهُمْۙ وَكَانُوْا مِنْ قَبْلُ يَسْتَفْتِحُوْنَ عَلَى الَّذِيْنَ كَفَرُوْاۚ فَلَمَّا جَاۤءَهُمْ مَّا عَرَفُوْا كَفَرُوْا بِهٖ ۖ فَلَعْنَةُ اللّٰهِ عَلَى الْكٰفِرِيْنَ ",
        "latin": "Wa lammā jā'akum kitābum min ‘indillāhi muṣaddiqul limā ma‘ahum, wa kānū min qablu yastaftiḥūna ‘alal-lażīna kafarū, falammā jā'ahum mā ‘arafū kafarū bih(ī), fala‘natullāhi ‘alal-kāfirīn(a).  ",
        "translation": "Setelah sampai kepada mereka Kitab (Al-Qur’an) dari Allah yang membenarkan apa yang ada pada mereka, sedangkan sebelumnya mereka memohon kemenangan atas orang-orang kafir, ternyata setelah sampai kepada mereka apa yang telah mereka ketahui itu, mereka mengingkarinya. Maka, laknat Allahlah terhadap orang-orang yang ingkar.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002089.mp3",
        "translation_en": "And when there came to them a Book from Allah confirming that which was with them - although before they used to pray for victory against those who disbelieved - but [then] when there came to them that which they recognized, they disbelieved in it; so the curse of Allah will be upon the disbelievers."
      },
      {
        "number": 90,
        "arabic": "  بِئْسَمَا اشْتَرَوْا بِهٖٓ اَنْفُسَهُمْ اَنْ يَّكْفُرُوْا بِمَآ اَنْزَلَ اللّٰهُ بَغْيًا اَنْ يُّنَزِّلَ اللّٰهُ مِنْ فَضْلِهٖ عَلٰى مَنْ يَّشَاۤءُ مِنْ عِبَادِهٖ ۚ فَبَاۤءُوْ بِغَضَبٍ عَلٰى غَضَبٍۗ وَلِلْكٰفِرِيْنَ عَذَابٌ مُّهِيْنٌ",
        "latin": "Bi'samasytarau bihī anfusahum ay yakfurū bimā anzalallāhu bagyan ay yunazzilallāhu min faḍlihī ‘alā may yasyā'u min ‘ibādih(ī), fabā'ū bigaḍabin ‘alā gaḍab(in), wa lil-kāfirīna ‘ażābum muhīn(un).  ",
        "translation": "Buruk sekali (perbuatan) mereka menjual dirinya dengan mengingkari apa yang diturunkan Allah karena dengki bahwa Allah menurunkan karunia-Nya kepada siapa yang Dia kehendaki di antara hamba-hamba-Nya. Oleh karena itu, mereka menanggung kemurkaan demi kemurkaan. Kepada orang-orang kafir (ditimpakan) azab yang menghinakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002090.mp3",
        "translation_en": "How wretched is that for which they sold themselves - that they would disbelieve in what Allah has revealed through [their] outrage that Allah would send down His favor upon whom He wills from among His servants. So they returned having [earned] wrath upon wrath. And for the disbelievers is a humiliating punishment."
      },
      {
        "number": 91,
        "arabic": "وَاِذَا قِيْلَ لَهُمْ اٰمِنُوْا بِمَآ اَنْزَلَ اللّٰهُ قَالُوْا نُؤْمِنُ بِمَآ اُنْزِلَ عَلَيْنَا وَيَكْفُرُوْنَ بِمَا وَرَاۤءَهٗ وَهُوَ الْحَقُّ مُصَدِّقًا لِّمَا مَعَهُمْ ۗ قُلْ فَلِمَ تَقْتُلُوْنَ اَنْۢبِيَاۤءَ اللّٰهِ مِنْ قَبْلُ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ",
        "latin": "Wa iżā qīla lahum āminū bimā anzalallāhu qālū nu'minu bimā unzila ‘alainā wa yakfurūna bimā warā'ah(ū), wa huwal-ḥaqqu muṣaddiqal limā ma‘ahum, qul falima taqtulūna ambiyā'allāhi min qablu in kuntum mu'minīn(a).  ",
        "translation": "Apabila dikatakan kepada mereka, “Berimanlah pada apa yang diturunkan Allah (Al-Qur’an),” mereka menjawab, “Kami beriman pada apa yang diturunkan kepada kami.” Mereka ingkar pada apa yang setelahnya, padahal (Al-Qur’an) itu adalah kebenaran yang membenarkan apa yang ada pada mereka. Katakanlah (Nabi Muhammad), “Mengapa kamu dahulu membunuh nabi-nabi Allah jika kamu orang-orang mukmin?”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002091.mp3",
        "translation_en": "And when it is said to them, \"Believe in what Allah has revealed,\" they say, \"We believe [only] in what was revealed to us.\" And they disbelieve in what came after it, while it is the truth confirming that which is with them. Say, \"Then why did you kill the prophets of Allah before, if you are [indeed] believers?\""
      },
      {
        "number": 92,
        "arabic": "۞ وَلَقَدْ جَاۤءَكُمْ مُّوْسٰى بِالْبَيِّنٰتِ ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِنْۢ بَعْدِهٖ وَاَنْتُمْ ظٰلِمُوْنَ",
        "latin": "Wa laqad jā'akum mūsā bil-bayyināti ṡummattakhażtumul-‘ijla mim ba‘dihī wa antum ẓālimūn(a).  ",
        "translation": "Sungguh, Musa benar-benar telah datang kepadamu dengan bukti-bukti kebenaran. Kemudian, kamu mengambil (patung) anak sapi (sebagai sembahan) setelah (kepergian)-nya dan kamu (menjadi) orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002092.mp3",
        "translation_en": "And Moses had certainly brought you clear proofs. Then you took the calf [in worship] after that, while you were wrongdoers."
      },
      {
        "number": 93,
        "arabic": "وَاِذْ اَخَذْنَا مِيْثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّوْرَۗ خُذُوْا مَآ اٰتَيْنٰكُمْ بِقُوَّةٍ وَّاسْمَعُوْا ۗ قَالُوْا سَمِعْنَا وَعَصَيْنَا وَاُشْرِبُوْا فِيْ قُلُوْبِهِمُ الْعِجْلَ بِكُفْرِهِمْ ۗ قُلْ بِئْسَمَا يَأْمُرُكُمْ بِهٖٓ اِيْمَانُكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ ",
        "latin": "Wa iż akhażnā mīṡāqakum wa rafa‘nā fauqakumuṭ-ṭūr(a), khużū mā ātainākum biquwwatiw wasma‘ū, qālū sami‘nā wa ‘aṣainā, wa usyribū fī qulūbihimul-‘ijla bikufrihim, qul bi'samā ya'murukum bihī īmānukum in kuntum mu'minīn(a).  ",
        "translation": "(Ingatlah) ketika Kami mengambil janjimu dan Kami angkat gunung (Sinai) di atasmu (seraya berfirman), “Pegang teguhlah apa yang Kami berikan kepadamu dan dengarkanlah!” Mereka menjawab, “Kami mendengarkannya, tetapi kami tidak menaatinya.” Diresapkanlah ke dalam hati mereka itu (kecintaan menyembah patung) anak sapi karena kekufuran mereka. Katakanlah, “Sangat buruk apa yang diperintahkan oleh keimananmu kepadamu jika kamu orang-orang mukmin!”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002093.mp3",
        "translation_en": "And [recall] when We took your covenant and raised over you the mount, [saying], \"Take what We have given you with determination and listen.\" They said [instead], \"We hear and disobey.\" And their hearts absorbed [the worship of] the calf because of their disbelief. Say, \"How wretched is that which your faith enjoins upon you, if you should be believers.\""
      },
      {
        "number": 94,
        "arabic": " قُلْ اِنْ كَانَتْ لَكُمُ الدَّارُ الْاٰخِرَةُ عِنْدَ اللّٰهِ خَالِصَةً مِّنْ دُوْنِ النَّاسِ فَتَمَنَّوُا الْمَوْتَ اِنْ كُنْتُمْ صٰدِقِيْنَ ",
        "latin": "Qul in kānat lakumud-dārul-ākhiratu ‘indallāhi khāliṣatam min dūnin-nāsi fatamannawul-mauta in kuntum ṣādiqīn(a).  ",
        "translation": "Katakanlah (Nabi Muhammad), “Jika negeri akhirat di sisi Allah khusus untukmu, bukan untuk orang lain, mintalah kematian jika kamu orang-orang benar.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002094.mp3",
        "translation_en": "Say, [O Muhammad], \"If the home of the Hereafter with Allah is for you alone and not the [other] people, then wish for death, if you should be truthful."
      },
      {
        "number": 95,
        "arabic": "وَلَنْ يَّتَمَنَّوْهُ اَبَدًاۢ بِمَا قَدَّمَتْ اَيْدِيْهِمْ ۗ وَاللّٰهُ عَلِيْمٌ ۢ بِالظّٰلِمِيْنَ ",
        "latin": "Wa lay yatamannauhu abadam bima qaddamat aidīhim, wallāhu ‘alīmum biẓ-ẓālimīn(a).  ",
        "translation": "Akan tetapi, mereka tidak akan menginginkan kematian itu sama sekali karena (dosa-dosa) yang telah dilakukan oleh tangan-tangan mereka. Allah Maha Mengetahui orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002095.mp3",
        "translation_en": "But they will never wish for it, ever, because of what their hands have put forth. And Allah is Knowing of the wrongdoers."
      },
      {
        "number": 96,
        "arabic": "وَلَتَجِدَنَّهُمْ اَحْرَصَ النَّاسِ عَلٰى حَيٰوةٍ ۛوَمِنَ الَّذِيْنَ اَشْرَكُوْا ۛيَوَدُّ اَحَدُهُمْ لَوْ يُعَمَّرُ اَلْفَ سَنَةٍۚ وَمَا هُوَ بِمُزَحْزِحِهٖ مِنَ الْعَذَابِ اَنْ يُّعَمَّرَۗ وَاللّٰهُ بَصِيْرٌۢ بِمَا يَعْمَلُوْنَ ࣖ",
        "latin": "Wa latajidannahum aḥraṣan-nāsi ‘alā ḥayāh(tin), wa minal-lażīna asyrakū, yawaddu aḥaduhum lau yu‘ammaru alfa sanah(tin), wa mā huwa bi muzaḥziḥihī minal-‘ażābi ay yu‘ammar(a), wallāhu baṣīrum bimā ya‘malūn(a).  ",
        "translation": "Engkau (Nabi Muhammad) sungguh-sungguh akan mendapati mereka (orang-orang Yahudi) sebagai manusia yang paling tamak akan kehidupan (dunia), bahkan (lebih tamak) daripada orang-orang musyrik. Tiap-tiap orang (dari) mereka ingin diberi umur seribu tahun, padahal umur panjang itu tidak akan menjauhkan mereka dari azab. Allah Maha Melihat apa yang mereka kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002096.mp3",
        "translation_en": "And you will surely find them the most greedy of people for life - [even] more than those who associate others with Allah. One of them wishes that he could be granted life a thousand years, but it would not remove him in the least from the [coming] punishment that he should be granted life. And Allah is Seeing of what they do."
      },
      {
        "number": 97,
        "arabic": " قُلْ مَنْ كَانَ عَدُوًّا لِّجِبْرِيْلَ فَاِنَّهٗ نَزَّلَهٗ عَلٰى قَلْبِكَ بِاِذْنِ اللّٰهِ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَهُدًى وَّبُشْرٰى لِلْمُؤْمِنِيْنَ ",
        "latin": "Qul man kāna ‘aduwwal lijibrīla fa'innahū nazzalahū ‘alā qalbika bi iżnillāhi muṣaddiqal limā baina yadaihi wa hudaw wa busyrā lil-mu'minīn(a).  ",
        "translation": "Katakanlah (Nabi Muhammad), “Siapa yang menjadi musuh Jibril?” Padahal, dialah yang telah menurunkan (Al-Qur’an) ke dalam hatimu dengan izin Allah sebagai pembenaran terhadap apa (kitab-kitab) yang terdahulu, dan petunjuk serta berita gembira bagi orang-orang beriman.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002097.mp3",
        "translation_en": "Say, \"Whoever is an enemy to Gabriel - it is [none but] he who has brought the Qur'an down upon your heart, [O Muhammad], by permission of Allah, confirming that which was before it and as guidance and good tidings for the believers.\""
      },
      {
        "number": 98,
        "arabic": "مَنْ كَانَ عَدُوًّا لِّلّٰهِ وَمَلٰۤىِٕكَتِهٖ وَرُسُلِهٖ وَجِبْرِيْلَ وَمِيْكٰىلَ فَاِنَّ اللّٰهَ عَدُوٌّ لِّلْكٰفِرِيْنَ",
        "latin": "Man kāna ‘aduwwal lillāhi wa malā'ikatihī wa rusulihī wa jibrīla wa mīkāla fa innallāha ‘aduwwul lil-kāfirīn(a).  ",
        "translation": "Siapa yang menjadi musuh Allah, malaikat-malaikat-Nya, rasul-rasul-Nya, Jibril, dan Mikail, sesungguhnya Allah adalah musuh orang-orang kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002098.mp3",
        "translation_en": "Whoever is an enemy to Allah and His angels and His messengers and Gabriel and Michael - then indeed, Allah is an enemy to the disbelievers."
      },
      {
        "number": 99,
        "arabic": "وَلَقَدْ اَنْزَلْنَآ اِلَيْكَ اٰيٰتٍۢ بَيِّنٰتٍۚ وَمَا يَكْفُرُ بِهَآ اِلَّا الْفٰسِقُوْنَ",
        "latin": "Wa laqad anzalnā ilaika āyātim bayyināt(in), wa mā yakfuru bihā illal-fāsiqūn(a).  ",
        "translation": "Sungguh, Kami benar-benar telah menurunkan ayat-ayat yang jelas kepadamu (Nabi Muhammad), dan tidaklah ada yang mengingkarinya selain orang-orang fasik.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002099.mp3",
        "translation_en": "And We have certainly revealed to you verses [which are] clear proofs, and no one would deny them except the defiantly disobedient."
      },
      {
        "number": 100,
        "arabic": "اَوَكُلَّمَا عٰهَدُوْا عَهْدًا نَّبَذَهٗ فَرِيْقٌ مِّنْهُمْ ۗ بَلْ اَكْثَرُهُمْ لَا يُؤْمِنُوْنَ",
        "latin": "Awa kullamā ‘āhadū ‘ahdan nabażahū farīqum minhum, bal akṡaruhum lā yu'minūn(a).  ",
        "translation": "Mengapa setiap kali mereka mengikat janji, sekelompok mereka melanggarnya? Bahkan, sebagian besar mereka tidak beriman.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002100.mp3",
        "translation_en": "Is it not [true] that every time they took a covenant a party of them threw it away? But, [in fact], most of them do not believe."
      },
      {
        "number": 101,
        "arabic": " وَلَمَّا جَاۤءَهُمْ رَسُوْلٌ مِّنْ عِنْدِ اللّٰهِ مُصَدِّقٌ لِّمَا مَعَهُمْ نَبَذَ فَرِيْقٌ مِّنَ الَّذِيْنَ اُوْتُوا الْكِتٰبَۙ  كِتٰبَ اللّٰهِ وَرَاۤءَ ظُهُوْرِهِمْ كَاَنَّهُمْ لَا يَعْلَمُوْنَۖ",
        "latin": "Wa lammā jā'ahum rasūlum min ‘indillāhi muṣaddiqul limā ma‘ahum nabaża farīqum minal-lażīna ūtul-kitāb(a), kitāballāhi warā'a ẓuhūrihim ka'annahum lā ya‘lamūn(a).  ",
        "translation": "Setelah datang kepada mereka Rasul (Nabi Muhammad) dari Allah yang membenarkan apa yang ada pada mereka, sebagian orang yang diberi Kitab (Taurat) melemparkan Kitab Allah itu ke belakang punggung (tidak menggubrisnya) seakan-akan mereka tidak tahu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002101.mp3",
        "translation_en": "And when a messenger from Allah came to them confirming that which was with them, a party of those who had been given the Scripture threw the Scripture of Allah behind their backs as if they did not know [what it contained]."
      },
      {
        "number": 102,
        "arabic": "وَاتَّبَعُوْا مَا تَتْلُوا الشَّيٰطِيْنُ عَلٰى مُلْكِ سُلَيْمٰنَ ۚ وَمَا كَفَرَ سُلَيْمٰنُ وَلٰكِنَّ الشَّيٰطِيْنَ كَفَرُوْا يُعَلِّمُوْنَ النَّاسَ السِّحْرَ وَمَآ اُنْزِلَ عَلَى الْمَلَكَيْنِ بِبَابِلَ هَارُوْتَ وَمَارُوْتَ ۗ وَمَا يُعَلِّمٰنِ مِنْ اَحَدٍ حَتّٰى يَقُوْلَآ اِنَّمَا نَحْنُ فِتْنَةٌ فَلَا تَكْفُرْ ۗ فَيَتَعَلَّمُوْنَ مِنْهُمَا مَا يُفَرِّقُوْنَ بِهٖ بَيْنَ الْمَرْءِ وَزَوْجِهٖ ۗ وَمَا هُمْ بِضَاۤرِّيْنَ بِهٖ مِنْ اَحَدٍ اِلَّا بِاِذْنِ اللّٰهِ ۗ وَيَتَعَلَّمُوْنَ مَا يَضُرُّهُمْ وَلَا يَنْفَعُهُمْ ۗ وَلَقَدْ عَلِمُوْا لَمَنِ اشْتَرٰىهُ مَا لَهٗ فِى الْاٰخِرَةِ مِنْ خَلَاقٍ ۗ وَلَبِئْسَ مَاشَرَوْا بِهٖٓ اَنْفُسَهُمْ ۗ  لَوْ كَانُوْا يَعْلَمُوْنَ ",
        "latin": "Wattaba‘ū mā tatlusy-syayāṭīnu ‘alā mulki sulaimān(a), wa mā kafara sulaimānu wa lākinnnasy-syayāṭīna kafarū yu‘allimūnan-nāsas siḥr(a), wa mā unzila ‘alal-malakaini bibābila hārūta wa mārūt(a), wa mā yu‘allimāni min aḥadin ḥattā yaqūlā innamā naḥnu fitnatun falā takfur, fayata‘allamūna minhumā mā yufarriqūna bihī bainal-mar'i wa zaujih(ī), wa mā hum biḍarrīna bihī min aḥadin illā bi'iżnillāh(i), wa yata‘allamūna mā yaḍurruhum wa lā yanfa‘uhum, wa laqad ‘alimū lamanisytarāhu mā lahū fil-ākhirati min khalāq(in), wa labi'sa mā syarau bihī anfusahum, lau kānū ya‘lamūn(a).  ",
        "translation": "Mereka mengikuti apa yang dibaca oleh setan-setan pada masa Kerajaan Sulaiman. Sulaiman itu tidak kufur, tetapi setan-setan itulah yang kufur. Mereka mengajarkan sihir kepada manusia dan apa yang diturunkan kepada dua malaikat di negeri Babilonia, yaitu Harut dan Marut. Padahal, keduanya tidak mengajarkan sesuatu kepada seseorang sebelum mengatakan, “Sesungguhnya kami hanyalah fitnah (cobaan bagimu) oleh sebab itu janganlah kufur!” Maka, mereka mempelajari dari keduanya (malaikat itu) apa yang (dapat) memisahkan antara seorang (suami) dan istrinya. Mereka tidak akan dapat mencelakakan seseorang dengan (sihir)-nya, kecuali dengan izin Allah. Mereka mempelajari sesuatu yang mencelakakan dan tidak memberi manfaat kepada mereka. Sungguh, mereka benar-benar sudah mengetahui bahwa siapa yang membeli (menggunakan sihir) itu niscaya tidak akan mendapat keuntungan di akhirat. Sungguh, buruk sekali perbuatan mereka yang menjual dirinya dengan sihir jika mereka mengetahui(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002102.mp3",
        "translation_en": "And they followed [instead] what the devils had recited during the reign of Solomon. It was not Solomon who disbelieved, but the devils disbelieved, teaching people magic and that which was revealed to the two angels at Babylon, Harut and Marut. But the two angels do not teach anyone unless they say, \"We are a trial, so do not disbelieve [by practicing magic].\" And [yet] they learn from them that by which they cause separation between a man and his wife. But they do not harm anyone through it except by permission of Allah. And the people learn what harms them and does not benefit them. But the Children of Israel certainly knew that whoever purchased the magic would not have in the Hereafter any share. And wretched is that for which they sold themselves, if they only knew."
      },
      {
        "number": 103,
        "arabic": "وَلَوْ اَنَّهُمْ اٰمَنُوْا وَاتَّقَوْا لَمَثُوْبَةٌ مِّنْ عِنْدِ اللّٰهِ خَيْرٌ ۗ  لَوْ كَانُوْا يَعْلَمُوْنَ ࣖ",
        "latin": "Wa lau annahum āmanū wattaqau lamaṡūbatum min ‘indillāhi khair(un), lau kānū ya‘lamūn(a).  ",
        "translation": "Seandainya mereka benar-benar beriman dan bertakwa, pahala dari Allah pasti lebih baik, seandainya mereka mengetahui(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002103.mp3",
        "translation_en": "And if they had believed and feared Allah, then the reward from Allah would have been [far] better, if they only knew."
      },
      {
        "number": 104,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تَقُوْلُوْا رَاعِنَا وَقُوْلُوا انْظُرْنَا وَاسْمَعُوْا  وَلِلْكٰفِرِيْنَ عَذَابٌ اَلِيْمٌ",
        "latin": "Yā ayyuhal-lażīna āmanū lā taqūlū rā‘inā wa qūlunẓurnā wasma‘ū wa lil-kāfirīna ‘ażābun alīm(un).  ",
        "translation": "Wahai orang-orang yang beriman, janganlah kamu katakan, “Rā‘inā.” Akan tetapi, katakanlah, “Unẓurnā” dan dengarkanlah. Orang-orang kafir akan mendapat azab yang pedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002104.mp3",
        "translation_en": "O you who have believed, say not [to Allah 's Messenger], \"Ra'ina\" but say, \"Unthurna\" and listen. And for the disbelievers is a painful punishment."
      },
      {
        "number": 105,
        "arabic": "مَا يَوَدُّ الَّذِيْنَ كَفَرُوْا مِنْ اَهْلِ الْكِتٰبِ وَلَا الْمُشْرِكِيْنَ اَنْ يُّنَزَّلَ عَلَيْكُمْ مِّنْ خَيْرٍ مِّنْ رَّبِّكُمْ ۗ وَاللّٰهُ يَخْتَصُّ بِرَحْمَتِهٖ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ ذُو الْفَضْلِ الْعَظِيْمِ ",
        "latin": "Mā yawaddul-lażīna kafarū min ahlil-kitābi wa lal-musyrikīna ay yunazzila ‘alaikum min khairim mir rabbikum, wallāhu yakhtaṣṣu biraḥmatihī may yasyā'(u), wallāhu żul faḍlil-‘aẓīm(i).  ",
        "translation": "Orang-orang kafir dari golongan Ahlulkitab dan orang-orang musyrik tidak menginginkan diturunkannya kepadamu suatu kebaikan dari Tuhanmu. Akan tetapi, secara khusus Allah memberikan rahmat-Nya kepada orang yang Dia kehendaki. Allah pemilik karunia yang besar.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002105.mp3",
        "translation_en": "Neither those who disbelieve from the People of the Scripture nor the polytheists wish that any good should be sent down to you from your Lord. But Allah selects for His mercy whom He wills, and Allah is the possessor of great bounty."
      },
      {
        "number": 106,
        "arabic": "۞ مَا نَنْسَخْ مِنْ اٰيَةٍ اَوْ نُنْسِهَا نَأْتِ بِخَيْرٍ مِّنْهَآ اَوْ مِثْلِهَا ۗ اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
        "latin": "Mā nansakh min āyatin au nunsihā na'ti bi khairim minhā au miṡlihā, alam ta‘lam annallāha ‘alā kulli syai'in qadīr(un).    ",
        "translation": "Ayat yang Kami nasakh (batalkan) atau Kami jadikan (manusia) lupa padanya, pasti Kami ganti dengan yang lebih baik atau yang sebanding dengannya. Apakah engkau tidak mengetahui bahwa Allah Maha Kuasa atas segala sesuatu?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002106.mp3",
        "translation_en": "We do not abrogate a verse or cause it to be forgotten except that We bring forth [one] better than it or similar to it. Do you not know that Allah is over all things competent?"
      },
      {
        "number": 107,
        "arabic": "اَلَمْ تَعْلَمْ اَنَّ اللّٰهَ لَهٗ مُلْكُ السَّمٰوٰتِ وَالْاَرْضِ ۗ وَمَا لَكُمْ مِّنْ دُوْنِ اللّٰهِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ ",
        "latin": "Alam ta‘lam annallāha lahū mulkus-samāwāti wal arḍ(i), wa mā lakum min dūnillāhi miw waliyyiw wa lā naṣīr(in).  ",
        "translation": "Apakah engkau tidak mengetahui bahwa Allah memiliki kerajaan langit dan bumi? (Ketahuilah bahwa) tidak ada bagimu pelindung dan penolong selain Allah.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002107.mp3",
        "translation_en": "Do you not know that to Allah belongs the dominion of the heavens and the earth and [that] you have not besides Allah any protector or any helper?"
      },
      {
        "number": 108,
        "arabic": "اَمْ تُرِيْدُوْنَ اَنْ تَسْـَٔلُوْا رَسُوْلَكُمْ كَمَا سُىِٕلَ مُوْسٰى مِنْ قَبْلُ ۗوَمَنْ يَّتَبَدَّلِ الْكُفْرَ بِالْاِيْمَانِ فَقَدْ ضَلَّ سَوَاۤءَ السَّبِيْلِ",
        "latin": "Am turīdūna an tas'alū rasūlakum kamā su'ila mūsā min qabl(u), wa may yatabaddalil-kufra bil-īmāni faqad ḍalla sawā'as-sabīl(i).  ",
        "translation": "Ataukah kamu menghendaki untuk meminta Rasulmu (Nabi Muhammad) seperti halnya Musa (pernah) diminta (Bani Israil) dahulu? Siapa yang mengganti iman dengan kekufuran, sungguh, dia telah tersesat dari jalan yang lurus.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002108.mp3",
        "translation_en": "Or do you intend to ask your Messenger as Moses was asked before? And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way."
      },
      {
        "number": 109,
        "arabic": "وَدَّ كَثِيْرٌ مِّنْ اَهْلِ الْكِتٰبِ لَوْ يَرُدُّوْنَكُمْ مِّنْۢ بَعْدِ اِيْمَانِكُمْ كُفَّارًاۚ حَسَدًا مِّنْ عِنْدِ اَنْفُسِهِمْ مِّنْۢ بَعْدِ مَا تَبَيَّنَ لَهُمُ الْحَقُّ ۚ فَاعْفُوْا وَاصْفَحُوْا حَتّٰى يَأْتِيَ اللّٰهُ بِاَمْرِهٖ ۗ اِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ",
        "latin": "Wadda kaṡīrum min ahlil-kitābi lau yaruddūnakum mim ba‘di īmānikum kuffārā(n), ḥasadam min ‘indi anfusihim mim ba‘di mā tabayyana lahumul-ḥaqq(u), fa‘fū waṣfaḥū ḥattā ya'tiyallāhu bi amrih(ī), innallāha ‘alā kulli syai'in qadīr(un).  ",
        "translation": "Banyak di antara Ahlulkitab menginginkan agar mereka dapat mengembalikan kamu setelah kamu beriman menjadi kafir kembali karena rasa dengki dalam diri mereka setelah kebenaran jelas bagi mereka. Maka, maafkanlah (biarkanlah) dan berlapang dadalah (berpalinglah dari mereka) sehingga Allah memberikan perintah-Nya. Sesungguhnya Allah Maha Kuasa atas segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002109.mp3",
        "translation_en": "Many of the People of the Scripture wish they could turn you back to disbelief after you have believed, out of envy from themselves [even] after the truth has become clear to them. So pardon and overlook until Allah delivers His command. Indeed, Allah is over all things competent."
      },
      {
        "number": 110,
        "arabic": " وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ ۗ وَمَا تُقَدِّمُوْا لِاَنْفُسِكُمْ مِّنْ خَيْرٍ تَجِدُوْهُ عِنْدَ اللّٰهِ ۗ اِنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ",
        "latin": "Wa aqīmuṣ-ṣalāta wa ātuz-zakāh(ta), wa mā tuqaddimū li'anfusikum min khairin tajidūhu ‘indallāh(i), innallāha bimā ta‘malūna baṣīr(un).  ",
        "translation": "Dirikanlah salat dan tunaikanlah zakat. Segala kebaikan yang kamu kerjakan untuk dirimu akan kamu dapatkan (pahalanya) di sisi Allah. Sesungguhnya Allah Maha Melihat apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002110.mp3",
        "translation_en": "And establish prayer and give zakah, and whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah of what you do, is Seeing."
      },
      {
        "number": 111,
        "arabic": "وَقَالُوْا لَنْ يَّدْخُلَ الْجَنَّةَ اِلَّا مَنْ كَانَ هُوْدًا اَوْ نَصٰرٰى ۗ تِلْكَ اَمَانِيُّهُمْ ۗ قُلْ هَاتُوْا بُرْهَانَكُمْ اِنْ كُنْتُمْ صٰدِقِيْنَ",
        "latin": "Wa qālū lay yadkhulal-jannata illā man kāna hūdan au naṣārā, tilka amāniyyuhum, qul hātū burhānakum in kuntum ṣādiqīn(a).  ",
        "translation": "Mereka (Yahudi dan Nasrani) berkata, “Tidak akan masuk surga kecuali orang Yahudi atau Nasrani.” Itu (hanya) angan-angan mereka. Katakanlah (Nabi Muhammad), “Tunjukkan bukti kebenaranmu jika kamu orang-orang yang benar.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002111.mp3",
        "translation_en": "And they say, \"None will enter Paradise except one who is a Jew or a Christian.\" That is [merely] their wishful thinking, Say, \"Produce your proof, if you should be truthful.\""
      },
      {
        "number": 112,
        "arabic": "بَلٰى مَنْ اَسْلَمَ وَجْهَهٗ لِلّٰهِ وَهُوَ مُحْسِنٌ فَلَهٗٓ اَجْرُهٗ عِنْدَ رَبِّهٖۖ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ ࣖ",
        "latin": "Balā man aslama wajhahū lillāhi wa huwa muḥsinun falahū ajruhū ‘inda rabbih(i), wa lā khaufun ‘alaihim wa lā hum yaḥzanūn(a).  ",
        "translation": "Tidak demikian! Orang yang menyerahkan diri sepenuhnya kepada Allah serta berbuat ihsan, akan mendapat pahala di sisi Tuhannya, tidak ada rasa takut yang menimpa mereka, dan mereka pun tidak bersedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002112.mp3",
        "translation_en": "Yes [on the contrary], whoever submits his face in Islam to Allah while being a doer of good will have his reward with his Lord. And no fear will there be concerning them, nor will they grieve."
      },
      {
        "number": 113,
        "arabic": "وَقَالَتِ الْيَهُوْدُ لَيْسَتِ النَّصٰرٰى عَلٰى شَيْءٍۖ وَّقَالَتِ النَّصٰرٰى لَيْسَتِ الْيَهُوْدُ عَلٰى شَيْءٍۙ وَّهُمْ يَتْلُوْنَ الْكِتٰبَۗ  كَذٰلِكَ قَالَ الَّذِيْنَ لَا يَعْلَمُوْنَ مِثْلَ قَوْلِهِمْ ۚ فَاللّٰهُ يَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيٰمَةِ فِيْمَا كَانُوْا فِيْهِ يَخْتَلِفُوْنَ ",
        "latin": "Wa qālatil-yahūdu laisatin-naṣārā  ‘alā syai'(in), wa qālatin-naṣārā laisatil-yahūdu ‘alā syai'(in), wa hum yatlūnal-kitāb(a), każālika qālal-lażīna lā ya‘lamūna  miṡla qaulihim, fallāhu yaḥkumu bainahum yaumal-qiyāmati fīmā kānū fīhi yakhtalifūn(a).  ",
        "translation": "Orang Yahudi berkata, “Orang Nasrani itu tidak menganut sesuatu (agama yang benar)” dan orang-orang Nasrani (juga) berkata, “Orang-orang Yahudi tidak menganut sesuatu (agama yang benar),” padahal mereka membaca Kitab. Demikian pula orang-orang yang tidak berilmu (musyrik Arab) berkata seperti ucapan mereka itu. Allah akan memberi putusan di antara mereka pada hari Kiamat tentang apa (agama) yang mereka perselisihkan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002113.mp3",
        "translation_en": "The Jews say \"The Christians have nothing [true] to stand on,\" and the Christians say, \"The Jews have nothing to stand on,\" although they [both] recite the Scripture. Thus the polytheists speak the same as their words. But Allah will judge between them on the Day of Resurrection concerning that over which they used to differ."
      },
      {
        "number": 114,
        "arabic": "وَمَنْ اَظْلَمُ مِمَّنْ مَّنَعَ مَسٰجِدَ اللّٰهِ اَنْ يُّذْكَرَ فِيْهَا اسْمُهٗ وَسَعٰى فِيْ خَرَابِهَاۗ اُولٰۤىِٕكَ مَا كَانَ لَهُمْ اَنْ يَّدْخُلُوْهَآ اِلَّا خَاۤىِٕفِيْنَ ەۗ لَهُمْ فِى الدُّنْيَا خِزْيٌ وَّلَهُمْ فِى الْاٰخِرَةِ عَذَابٌ عَظِيْمٌ",
        "latin": "Wa man aẓlamu mim mam mana‘a masājidallāhi ay yużkara fīhasmuhū wa sa‘ā fī kharābihā, ulā'ika mā kāna lahum ay yadkhulūhā illā khā'ifīn(a), lahum fid-dun-yā khizyuw wa lahum fil-ākhirati ‘ażābun ‘aẓīm(un).  ",
        "translation": "Siapakah yang lebih zalim daripada orang yang melarang masjid-masjid Allah digunakan sebagai tempat berzikir di dalamnya dan berusaha merobohkannya? Mereka itu tidak pantas memasukinya, kecuali dengan rasa takut (kepada Allah). Mereka mendapat kehinaan di dunia dan mendapat azab yang berat di akhirat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002114.mp3",
        "translation_en": "And who are more unjust than those who prevent the name of Allah from being mentioned in His mosques and strive toward their destruction. It is not for them to enter them except in fear. For them in this world is disgrace, and they will have in the Hereafter a great punishment."
      },
      {
        "number": 115,
        "arabic": "وَلِلّٰهِ الْمَشْرِقُ وَالْمَغْرِبُ  فَاَيْنَمَا تُوَلُّوْا فَثَمَّ وَجْهُ اللّٰهِ ۗ اِنَّ اللّٰهَ وَاسِعٌ عَلِيْمٌ ",
        "latin": "Wa lillāhil-masyriqu wal-magrib(u), fa'ainamā tuwallū faṡamma wajhullāh(i), innallāha wāsi‘un ‘alīm(un).  ",
        "translation": "Hanya milik Allah timur dan barat. Ke mana pun kamu menghadap, di sanalah wajah Allah. Sesungguhnya Allah Maha Luas lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002115.mp3",
        "translation_en": "And to Allah belongs the east and the west. So wherever you [might] turn, there is the Face of Allah. Indeed, Allah is all-Encompassing and Knowing."
      },
      {
        "number": 116,
        "arabic": "وَقَالُوا اتَّخَذَ اللّٰهُ وَلَدًا ۙسُبْحٰنَهٗ ۗ بَلْ لَّهٗ مَا فِى السَّمٰوٰتِ وَالْاَرْضِۗ  كُلٌّ لَّهٗ قٰنِتُوْنَ ",
        "latin": "Wa qāluttakhażallāhu waladan subḥānah(ū), bal lahū mā fis-samāwāti wal-arḍ(i), kullul lahū qānitūn(a).  ",
        "translation": "Mereka berkata, “Allah mengangkat anak.” Maha Suci Allah, bahkan milik-Nyalah apa yang di langit dan di bumi. Semua tunduk kepada-Nya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002116.mp3",
        "translation_en": "They say, \"Allah has taken a son.\" Exalted is He! Rather, to Him belongs whatever is in the heavens and the earth. All are devoutly obedient to Him,"
      },
      {
        "number": 117,
        "arabic": "بَدِيْعُ السَّمٰوٰتِ وَالْاَرْضِۗ وَاِذَا قَضٰٓى اَمْرًا فَاِنَّمَا يَقُوْلُ لَهٗ كُنْ فَيَكُوْنُ",
        "latin": "Badī‘us-samāwāti wal-arḍ(i), wa iżā qaḍā amran fa'innamā yaqūlu lahū kun fayakūn(u).  ",
        "translation": "(Allah) pencipta langit dan bumi. Apabila Dia hendak menetapkan sesuatu, Dia hanya berkata kepadanya, “Jadilah!” Maka, jadilah sesuatu itu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002117.mp3",
        "translation_en": "Originator of the heavens and the earth. When He decrees a matter, He only says to it, \"Be,\" and it is."
      },
      {
        "number": 118,
        "arabic": "وَقَالَ الَّذِيْنَ لَا يَعْلَمُوْنَ لَوْلَا يُكَلِّمُنَا اللّٰهُ اَوْ تَأْتِيْنَآ اٰيَةٌ  ۗ كَذٰلِكَ قَالَ الَّذِيْنَ مِنْ قَبْلِهِمْ مِّثْلَ قَوْلِهِمْ ۗ تَشَابَهَتْ قُلُوْبُهُمْ ۗ قَدْ بَيَّنَّا الْاٰيٰتِ لِقَوْمٍ يُّوْقِنُوْنَ",
        "latin": "Wa qālal-lażīna lā ya‘lamūna lau lā yukallimunallāhu au ta'tīnā āyah(tun), każālika qālal-lażīna min qablihim miṡla qaulihim, tasyābahat qulūbuhum, qad bayyannal-āyāti liqaumiy yūqinūn(a).  ",
        "translation": "Orang-orang yang tidak mengetahui berkata, “Mengapa Allah tidak berbicara dengan kita atau datang tanda-tanda (kekuasaan-Nya) kepada kita?” Demikian pula orang-orang yang sebelum mereka telah berkata seperti ucapan mereka itu. Hati mereka serupa. Sungguh, telah Kami jelaskan tanda-tanda (kekuasaan Kami) kepada kaum yang yakin.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002118.mp3",
        "translation_en": "Those who do not know say, \"Why does Allah not speak to us or there come to us a sign?\" Thus spoke those before them like their words. Their hearts resemble each other. We have shown clearly the signs to a people who are certain [in faith]."
      },
      {
        "number": 119,
        "arabic": "اِنَّآ اَرْسَلْنٰكَ بِالْحَقِّ بَشِيْرًا وَّنَذِيْرًاۙ وَّلَا تُسْـَٔلُ عَنْ اَصْحٰبِ الْجَحِيْمِ",
        "latin": "Innā arsalnāka bil-ḥaqqi basyīraw wa nażīrā(n), wa lā tus'alu ‘an aṣḥābil-jaḥīm(i).  ",
        "translation": "Sesungguhnya Kami telah mengutusmu (Nabi Muhammad) dengan hak sebagai pembawa berita gembira dan pemberi peringatan. Engkau tidak akan dimintai (pertanggungjawaban) tentang penghuni-penghuni neraka.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002119.mp3",
        "translation_en": "Indeed, We have sent you, [O Muhammad], with the truth as a bringer of good tidings and a warner, and you will not be asked about the companions of Hellfire."
      },
      {
        "number": 120,
        "arabic": "وَلَنْ تَرْضٰى عَنْكَ الْيَهُوْدُ وَلَا النَّصٰرٰى حَتّٰى تَتَّبِعَ مِلَّتَهُمْ ۗ قُلْ اِنَّ هُدَى اللّٰهِ هُوَ الْهُدٰى ۗ وَلَىِٕنِ اتَّبَعْتَ اَهْوَاۤءَهُمْ بَعْدَ الَّذِيْ جَاۤءَكَ مِنَ الْعِلْمِ ۙ مَا لَكَ مِنَ اللّٰهِ مِنْ وَّلِيٍّ وَّلَا نَصِيْرٍ",
        "latin": "Wa lan tarḍā ‘ankal-yahūdu wa lan-naṣārā ḥattā tattabi‘a millatahum, qul inna hudallāhi huwal-hudā, wa la'inittaba‘ta ahwā'ahum ba‘dal-lażī jā'aka minal-‘ilm(i), mā laka minallāhi miw waliyyiw wa lā naṣīr(in).  ",
        "translation": "Orang-orang Yahudi dan Nasrani tidak akan pernah rela kepadamu (Nabi Muhammad) sehingga engkau mengikuti agama mereka. Katakanlah, “Sesungguhnya petunjuk Allah itulah petunjuk (yang sebenarnya).” Sungguh, jika engkau mengikuti hawa nafsu mereka setelah ilmu (kebenaran) sampai kepadamu, tidak ada bagimu pelindung dan penolong dari (azab) Allah.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002120.mp3",
        "translation_en": "And never will the Jews or the Christians approve of you until you follow their religion. Say, \"Indeed, the guidance of Allah is the [only] guidance.\" If you were to follow their desires after what has come to you of knowledge, you would have against Allah no protector or helper."
      },
      {
        "number": 121,
        "arabic": "اَلَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَتْلُوْنَهٗ حَقَّ تِلَاوَتِهٖۗ اُولٰۤىِٕكَ يُؤْمِنُوْنَ بِهٖ ۗ وَمَنْ يَّكْفُرْ بِهٖ فَاُولٰۤىِٕكَ هُمُ الْخٰسِرُوْنَ ࣖ",
        "latin": "Allażīna ātaināhumul-kitāba yatlūnahū ḥaqqa tilāwatih(ī), ulā'ika yu'minūna bih(ī), wa may yakfur bihī fa ulā'ika humul-khāsirūn(a).  ",
        "translation": "Orang-orang yang telah Kami beri kitab suci, mereka membacanya sebagaimana mestinya, itulah orang-orang yang beriman padanya. Siapa yang ingkar padanya, merekalah orang-orang yang rugi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002121.mp3",
        "translation_en": "Those to whom We have given the Book recite it with its true recital. They [are the ones who] believe in it. And whoever disbelieves in it - it is they who are the losers."
      },
      {
        "number": 122,
        "arabic": "يٰبَنِيْٓ اِسْرَاۤءِيْلَ اذْكُرُوْا نِعْمَتِيَ الَّتِيْٓ اَنْعَمْتُ عَلَيْكُمْ وَاَنِّيْ فَضَّلْتُكُمْ عَلَى الْعٰلَمِيْنَ ",
        "latin": "Yā banī isrā'īlażkurū ni‘matiyal-latī an‘amtu ‘alaikum wa annī faḍḍaltukum ‘alal-‘ālamīn(a).  ",
        "translation": "Wahai Bani Israil, ingatlah nikmat-Ku yang telah Aku anugerahkan kepadamu dan sesungguhnya Aku telah melebihkan kamu daripada semua umat di alam ini (pada masa itu).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002122.mp3",
        "translation_en": "O Children of Israel, remember My favor which I have bestowed upon you and that I preferred you over the worlds."
      },
      {
        "number": 123,
        "arabic": "وَاتَّقُوْا يَوْمًا لَّا تَجْزِيْ نَفْسٌ عَنْ نَّفْسٍ شَيْـًٔا وَّلَا يُقْبَلُ مِنْهَا عَدْلٌ وَّلَا تَنْفَعُهَا شَفَاعَةٌ وَّلَا هُمْ يُنْصَرُوْنَ ",
        "latin": "Wattaqū yaumal lā tajzī nafsun ‘an nafsin syai'aw wa lā yuqbalu minhā ‘adluw wa lā tanfa‘uhā syafā‘atuw wa lā hum yunṣarūn(a). ",
        "translation": "Takutlah kamu pada hari (ketika) tidak seorang pun dapat menggantikan (membela) orang lain sedikit pun, tebusannya tidak diterima, syafaat tidak berguna baginya, dan mereka tidak akan ditolong.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002123.mp3",
        "translation_en": "And fear a Day when no soul will suffice for another soul at all, and no compensation will be accepted from it, nor will any intercession benefit it, nor will they be aided."
      },
      {
        "number": 124,
        "arabic": "۞ وَاِذِ ابْتَلٰٓى اِبْرٰهٖمَ رَبُّهٗ بِكَلِمٰتٍ فَاَتَمَّهُنَّ ۗ قَالَ اِنِّيْ جَاعِلُكَ لِلنَّاسِ اِمَامًا ۗ قَالَ وَمِنْ ذُرِّيَّتِيْ ۗ قَالَ لَا يَنَالُ عَهْدِى الظّٰلِمِيْنَ",
        "latin": "Wa iżibtalā ibrāhīma rabbuhū bikalimātin fa atammahunn(a), qāla innī jā‘iluka lin-nāsi imāmā(n), qāla wa min żurriyyatī, qāla lā yanālu ‘ahdiẓ-ẓālimīn(a).  ",
        "translation": "(Ingatlah) ketika Ibrahim diuji Tuhannya dengan beberapa kalimat, lalu dia melaksanakannya dengan sempurna. Dia (Allah) berfirman, “Sesungguhnya Aku menjadikan engkau sebagai pemimpin bagi seluruh manusia.” Dia (Ibrahim) berkata, “(Aku mohon juga) dari sebagian keturunanku.” Allah berfirman, “(Doamu Aku kabulkan, tetapi) janji-Ku tidak berlaku bagi orang-orang zalim.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002124.mp3",
        "translation_en": "And [mention, O Muhammad], when Abraham was tried by his Lord with commands and he fulfilled them. [Allah] said, \"Indeed, I will make you a leader for the people.\" [Abraham] said, \"And of my descendants?\" [Allah] said, \"My covenant does not include the wrongdoers.\""
      },
      {
        "number": 125,
        "arabic": "وَاِذْ جَعَلْنَا الْبَيْتَ مَثَابَةً لِّلنَّاسِ وَاَمْنًاۗ وَاتَّخِذُوْا مِنْ مَّقَامِ اِبْرٰهٖمَ مُصَلًّىۗ  وَعَهِدْنَآ اِلٰٓى اِبْرٰهٖمَ وَاِسْمٰعِيْلَ اَنْ طَهِّرَا بَيْتِيَ لِلطَّاۤىِٕفِيْنَ وَالْعٰكِفِيْنَ وَالرُّكَّعِ السُّجُوْدِ ",
        "latin": "Wa iż ja‘alnal-baita maṡābatal lin-nāsi wa amnā(n), wattakhiżū mim maqāmi ibrāhīma muṣallā(n), wa ‘ahidnā ilā ibrāhīma wa ismā‘īla an ṭahhirā baitiya liṭ-ṭā'ifīna  wal-‘ākifīna war-rukka‘is-sujūd(i).  ",
        "translation": "(Ingatlah) ketika Kami menjadikan rumah itu (Ka‘bah) tempat berkumpul dan tempat yang aman bagi manusia. (Ingatlah ketika Aku katakan,) “Jadikanlah sebagian Maqam Ibrahim sebagai tempat salat.” (Ingatlah ketika) Kami wasiatkan kepada Ibrahim dan Ismail, “Bersihkanlah rumah-Ku untuk orang-orang yang tawaf, yang iktikaf, serta yang rukuk dan sujud (salat)!”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002125.mp3",
        "translation_en": "And [mention] when We made the House a place of return for the people and [a place of] security. And take, [O believers], from the standing place of Abraham a place of prayer. And We charged Abraham and Ishmael, [saying], \"Purify My House for those who perform Tawaf and those who are staying [there] for worship and those who bow and prostrate [in prayer].\""
      },
      {
        "number": 126,
        "arabic": "وَاِذْ قَالَ اِبْرٰهٖمُ رَبِّ اجْعَلْ هٰذَا بَلَدًا اٰمِنًا وَّارْزُقْ اَهْلَهٗ مِنَ الثَّمَرٰتِ مَنْ اٰمَنَ مِنْهُمْ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِۗ قَالَ وَمَنْ كَفَرَ فَاُمَتِّعُهٗ قَلِيْلًا ثُمَّ اَضْطَرُّهٗٓ اِلٰى عَذَابِ النَّارِ ۗ وَبِئْسَ الْمَصِيْرُ ",
        "latin": "Wa iż qāla ibrāhīmu rabbij‘al hāżā baladan āminaw warzuq ahlahū minaṡ-ṡamarāti man āmana minhum billāhi wal-yaumil-ākhir(i), qāla wa man kafara fa umatti‘uhū qalīlan ṡumma aḍṭarruhū ilā ‘ażābin-nār(i), wa bi'sal-maṣīr(u).  ",
        "translation": "(Ingatlah) ketika Ibrahim berdoa, “Ya Tuhanku, jadikanlah (negeri Makkah) ini negeri yang aman dan berilah rezeki berupa buah-buahan (hasil tanaman, tumbuhan yang bisa dimakan) kepada penduduknya, yaitu orang yang beriman di antara mereka kepada Allah dan hari Akhir.” Dia (Allah) berfirman, “Siapa yang kufur akan Aku beri kesenangan sementara, kemudian akan Aku paksa dia ke dalam azab neraka. Itulah seburuk-buruk tempat kembali.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002126.mp3",
        "translation_en": "And [mention] when Abraham said, \"My Lord, make this a secure city and provide its people with fruits - whoever of them believes in Allah and the Last Day.\" [Allah] said. \"And whoever disbelieves - I will grant him enjoyment for a little; then I will force him to the punishment of the Fire, and wretched is the destination.\""
      },
      {
        "number": 127,
        "arabic": "وَاِذْ يَرْفَعُ اِبْرٰهٖمُ الْقَوَاعِدَ مِنَ الْبَيْتِ وَاِسْمٰعِيْلُۗ رَبَّنَا تَقَبَّلْ مِنَّا ۗ اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ ",
        "latin": "Wa iż yarfa‘u ibrāhīmul-qawā‘ida minal-baiti wa ismā‘īl(u), rabbanā taqabbal minnā, innaka antas-samī‘ul-‘alīm(u).  ",
        "translation": "(Ingatlah) ketika Ibrahim meninggikan fondasi Baitullah bersama Ismail (seraya berdoa), “Ya Tuhan kami, terimalah (amal) dari kami. Sesungguhnya Engkaulah Yang Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002127.mp3",
        "translation_en": "And [mention] when Abraham was raising the foundations of the House and [with him] Ishmael, [saying], \"Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing."
      },
      {
        "number": 128,
        "arabic": "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَآ اُمَّةً مُّسْلِمَةً لَّكَۖ وَاَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا ۚ اِنَّكَ اَنْتَ التَّوَّابُ الرَّحِيْمُ ",
        "latin": "Rabbanā waj‘alnā muslimaini laka wa min żurriyyatinā ummatam muslimatal lak(a), wa arinā manāsikanā wa tub ‘alainā, innaka antat-tawwābur-raḥīm(u).  ",
        "translation": "Ya Tuhan kami, jadikanlah kami berdua orang yang berserah diri kepada-Mu, (jadikanlah) dari keturunan kami umat yang berserah diri kepada-Mu, tunjukkanlah kepada kami cara-cara melakukan manasik (rangkaian ibadah) haji, dan terimalah tobat kami. Sesungguhnya Engkaulah Yang Maha Penerima Tobat lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002128.mp3",
        "translation_en": "Our Lord, and make us Muslims [in submission] to You and from our descendants a Muslim nation [in submission] to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful."
      },
      {
        "number": 129,
        "arabic": "رَبَّنَا وَابْعَثْ فِيْهِمْ رَسُوْلًا مِّنْهُمْ يَتْلُوْا عَلَيْهِمْ اٰيٰتِكَ وَيُعَلِّمُهُمُ الْكِتٰبَ وَالْحِكْمَةَ وَيُزَكِّيْهِمْ ۗ اِنَّكَ اَنْتَ الْعَزِيْزُ الْحَكِيْمُ ࣖ",
        "latin": "Rabbanā  wab‘aṡ fīhim rasūlam minhum yatlū ‘alaihim āyātika wa yu‘allimuhumul-kitāba wal-ḥikmata wa yuzakkīhim, innaka antal-‘azīzul-ḥakīm(u).  ",
        "translation": "Ya Tuhan kami, utuslah di antara mereka seorang rasul dari kalangan mereka, yang membacakan kepada mereka ayat-ayat-Mu, mengajarkan kitab suci dan hikmah (sunah) kepada mereka, dan menyucikan mereka. Sesungguhnya Engkaulah Yang Maha Perkasa lagi Maha Bijaksana.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002129.mp3",
        "translation_en": "Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.\""
      },
      {
        "number": 130,
        "arabic": "وَمَنْ يَّرْغَبُ عَنْ مِّلَّةِ اِبْرٰهٖمَ اِلَّا مَنْ سَفِهَ نَفْسَهٗ ۗوَلَقَدِ اصْطَفَيْنٰهُ فِى الدُّنْيَا ۚوَاِنَّهٗ فِى الْاٰخِرَةِ لَمِنَ الصّٰلِحِيْنَ",
        "latin": "Wa may yargabu ‘an millati ibrāhīma illā man safiha nafsah(ū), wa laqad-iṣṭafaināhu fid-dun-yā, wa innahū fil-ākhirati laminaṣ-ṣāliḥīn(a).  ",
        "translation": "Siapa yang membenci agama Ibrahim selain orang yang memperbodoh dirinya sendiri? Kami benar-benar telah memilihnya (Ibrahim) di dunia ini dan sesungguhnya di akhirat dia termasuk orang-orang saleh.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002130.mp3",
        "translation_en": "And who would be averse to the religion of Abraham except one who makes a fool of himself. And We had chosen him in this world, and indeed he, in the Hereafter, will be among the righteous."
      },
      {
        "number": 131,
        "arabic": "اِذْ قَالَ لَهٗ رَبُّهٗٓ اَسْلِمْۙ  قَالَ اَسْلَمْتُ لِرَبِّ الْعٰلَمِيْنَ",
        "latin": "Iż qāla lahū rabbuhū aslim, qāla aslamtu lirabbil-‘ālamīn(a).  ",
        "translation": "(Ingatlah) ketika Tuhan berfirman kepadanya (Ibrahim), “Berserahdirilah!” Dia menjawab, “Aku berserah diri kepada Tuhan seluruh alam.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002131.mp3",
        "translation_en": "When his Lord said to him, \"Submit\", he said \"I have submitted [in Islam] to the Lord of the worlds.\""
      },
      {
        "number": 132,
        "arabic": "وَوَصّٰى بِهَآ اِبْرٰهٖمُ بَنِيْهِ وَيَعْقُوْبُۗ يٰبَنِيَّ اِنَّ اللّٰهَ اصْطَفٰى لَكُمُ الدِّيْنَ فَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ ۗ",
        "latin": "Wa waṣṣā bihā ibrāhīmu banīhi wa ya‘qūb(u), yā baniyya innallāhaṣṭafā lakumud-dīna falā tamūtunna illā wa antum muslimūn(a).  ",
        "translation": "Ibrahim mewasiatkan (ucapan) itu kepada anak-anaknya dan demikian pula Ya‘qub, “Wahai anak-anakku, sesungguhnya Allah telah memilih agama ini untukmu. Janganlah kamu mati kecuali dalam keadaan muslim.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002132.mp3",
        "translation_en": "And Abraham instructed his sons [to do the same] and [so did] Jacob, [saying], \"O my sons, indeed Allah has chosen for you this religion, so do not die except while you are Muslims.\""
      },
      {
        "number": 133,
        "arabic": "اَمْ كُنْتُمْ شُهَدَاۤءَ اِذْ حَضَرَ يَعْقُوْبَ الْمَوْتُۙ اِذْ قَالَ لِبَنِيْهِ مَا تَعْبُدُوْنَ مِنْۢ بَعْدِيْۗ قَالُوْا نَعْبُدُ اِلٰهَكَ وَاِلٰهَ اٰبَاۤىِٕكَ اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ اِلٰهًا وَّاحِدًاۚ وَنَحْنُ لَهٗ مُسْلِمُوْنَ ",
        "latin": "Am kuntum syuhadā'a iż ḥaḍara ya‘qūbal-maut(u), iż qāla libanīhi mā ta‘budūna mim ba‘dī, qālū na‘budu ilāhaka wa ilāha ābā'ika ibrāhīma wa ismā‘īla wa isḥāqa ilāhaw wāḥidā(n), wa naḥnu lahū muslimūn(a).  ",
        "translation": "Apakah kamu (hadir) menjadi saksi menjelang kematian Ya‘qub ketika dia berkata kepada anak-anaknya, “Apa yang kamu sembah sepeninggalku?” Mereka menjawab, “Kami akan menyembah Tuhanmu dan Tuhan nenek moyangmu: Ibrahim, Ismail, dan Ishaq, (yaitu) Tuhan Yang Maha Esa dan (hanya) kepada-Nya kami berserah diri.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002133.mp3",
        "translation_en": "Or were you witnesses when death approached Jacob, when he said to his sons, \"What will you worship after me?\" They said, \"We will worship your God and the God of your fathers, Abraham and Ishmael and Isaac - one God. And we are Muslims [in submission] to Him.\""
      },
      {
        "number": 134,
        "arabic": "تِلْكَ اُمَّةٌ قَدْ خَلَتْ ۚ لَهَا مَا كَسَبَتْ وَلَكُمْ مَّا كَسَبْتُمْ ۚ وَلَا تُسْـَٔلُوْنَ عَمَّا كَانُوْا يَعْمَلُوْنَ",
        "latin": "Tilka ummatun qad khalat, lahā mā kasabat wa lakum mā kasabtum, wa lā tus'alūna ‘ammā kānū ya‘malūn(a).  ",
        "translation": "Itulah umat yang telah lalu. Baginya apa yang telah mereka usahakan dan bagimu apa yang telah kamu usahakan. Kamu tidak akan diminta pertanggungjawaban tentang apa yang telah mereka kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002134.mp3",
        "translation_en": "That was a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned. And you will not be asked about what they used to do."
      },
      {
        "number": 135,
        "arabic": "وَقَالُوْا كُوْنُوْا هُوْدًا اَوْ نَصٰرٰى تَهْتَدُوْا ۗ قُلْ بَلْ مِلَّةَ اِبْرٰهٖمَ حَنِيْفًا ۗوَمَا كَانَ مِنَ الْمُشْرِكِيْنَ ",
        "latin": "Wa qālū kūnū hūdan au naṣārā tahtadū, qul bal millata ibrāhīma ḥanīfā(n), wa mā kāna minal-musyrikīn(a).  ",
        "translation": "Mereka berkata, “Jadilah kamu (penganut) Yahudi atau Nasrani, niscaya kamu mendapat petunjuk.” Katakanlah, “(Tidak.) Akan tetapi, (kami mengikuti) agama Ibrahim yang lurus dan dia tidak termasuk orang-orang musyrik.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002135.mp3",
        "translation_en": "They say, \"Be Jews or Christians [so] you will be guided.\" Say, \"Rather, [we follow] the religion of Abraham, inclining toward truth, and he was not of the polytheists.\""
      },
      {
        "number": 136,
        "arabic": "قُوْلُوْٓا اٰمَنَّا بِاللّٰهِ وَمَآ اُنْزِلَ اِلَيْنَا وَمَآ اُنْزِلَ اِلٰٓى اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطِ وَمَآ اُوْتِيَ مُوْسٰى وَعِيْسٰى وَمَآ اُوْتِيَ النَّبِيُّوْنَ مِنْ رَّبِّهِمْۚ  لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْهُمْۖ وَنَحْنُ لَهٗ مُسْلِمُوْنَ ",
        "latin": "Qūlū āmannā billāhi wa mā unzila ilainā wa mā unzila ilā ibrāhīma wa ismā‘īla wa isḥāqa  wa ya‘qūba wal-asbāṭi wa mā ūtiya mūsā wa ‘īsā wa mā ūtiyan-nabiyyūna mir rabbihim, lā nufarriqu baina aḥadim minhum wa naḥnu lahū muslimūn(a).  ",
        "translation": "Katakanlah (wahai orang-orang yang beriman), “Kami beriman kepada Allah, pada apa yang diturunkan kepada kami, pada apa yang diturunkan kepada Ibrahim, Ismail, Ishaq, Ya‘qub dan keturunannya, pada apa yang diberikan kepada Musa dan Isa, serta pada apa yang diberikan kepada nabi-nabi dari Tuhan mereka. Kami tidak membeda-bedakan seorang pun di antara mereka dan (hanya) kepada-Nya kami berserah diri.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002136.mp3",
        "translation_en": "Say, [O believers], \"We have believed in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [in submission] to Him.\""
      },
      {
        "number": 137,
        "arabic": "فَاِنْ اٰمَنُوْا بِمِثْلِ مَآ اٰمَنْتُمْ بِهٖ فَقَدِ اهْتَدَوْا ۚوَاِنْ تَوَلَّوْا فَاِنَّمَا هُمْ فِيْ شِقَاقٍۚ فَسَيَكْفِيْكَهُمُ اللّٰهُ ۚوَهُوَ السَّمِيْعُ الْعَلِيْمُ ۗ ",
        "latin": "Fa'in āmanū bimiṡli mā āmantum bihī faqadihtadau, wa in tawallau fa'innamā hum fī syiqāq(in), fasayakfīkahumullāh(u), wa huwas-samī‘ul-‘alīm(u). ",
        "translation": "Jika mereka telah mengimani apa yang kamu imani, sungguh mereka telah mendapat petunjuk. Akan tetapi, jika mereka berpaling, sesungguhnya mereka berada dalam permusuhan (denganmu). Maka, Allah akan mencukupkanmu (dengan pelindungan-Nya) dari (kejahatan) mereka. Dia Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002137.mp3",
        "translation_en": "So if they believe in the same as you believe in, then they have been [rightly] guided; but if they turn away, they are only in dissension, and Allah will be sufficient for you against them. And He is the Hearing, the Knowing."
      },
      {
        "number": 138,
        "arabic": "صِبْغَةَ اللّٰهِ ۚ وَمَنْ اَحْسَنُ مِنَ اللّٰهِ صِبْغَةً ۖ وَّنَحْنُ لَهٗ عٰبِدُوْنَ ",
        "latin": "Ṣibgatallāh(i), wa man aḥsanu minallāhi ṣibgataw wa naḥnu lahū ‘ābidūn(a).  ",
        "translation": "(Peliharalah) sibgah Allah. Siapa yang lebih baik sibgahnya daripada Allah? Hanya kepada-Nya kami menyembah.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002138.mp3",
        "translation_en": "[And say, \"Ours is] the religion of Allah. And who is better than Allah in [ordaining] religion? And we are worshippers of Him.\""
      },
      {
        "number": 139,
        "arabic": "قُلْ اَتُحَاۤجُّوْنَنَا فِى اللّٰهِ وَهُوَ رَبُّنَا وَرَبُّكُمْۚ وَلَنَآ اَعْمَالُنَا وَلَكُمْ اَعْمَالُكُمْۚ وَنَحْنُ لَهٗ مُخْلِصُوْنَ ۙ",
        "latin": "Qul atuḥājjūnanā fillāhi wa huwa rabbunā wa rabbukum, wa lanā a‘mālunā wa lakum a‘mālukum, wa naḥnu lahū mukhliṣūn(a).  ",
        "translation": "Katakanlah (Nabi Muhammad), “Apakah kamu (Yahudi dan Nasrani) hendak berdebat dengan kami tentang Allah? Padahal, Dia adalah Tuhan kami dan Tuhan kamu. Bagi kami amalan kami, bagi kamu amalan kamu. Hanya kepada-Nya kami dengan tulus mengabdikan diri.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002139.mp3",
        "translation_en": "Say, [O Muhammad], \"Do you argue with us about Allah while He is our Lord and your Lord? For us are our deeds, and for you are your deeds. And we are sincere [in deed and intention] to Him.\""
      },
      {
        "number": 140,
        "arabic": "اَمْ تَقُوْلُوْنَ اِنَّ اِبْرٰهٖمَ وَاِسْمٰعِيْلَ وَاِسْحٰقَ وَيَعْقُوْبَ وَالْاَسْبَاطَ كَانُوْا هُوْدًا اَوْ نَصٰرٰى ۗ قُلْ ءَاَنْتُمْ اَعْلَمُ اَمِ اللّٰهُ ۗ وَمَنْ اَظْلَمُ مِمَّنْ كَتَمَ شَهَادَةً عِنْدَهٗ مِنَ اللّٰهِ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ ",
        "latin": "Am taqūlūna inna ibrāhīma wa ismā‘īla wa isḥāqa  wa ya‘qūba wal-asbāṭa kānū hūdan au naṣārā, qul a'antum a‘lamu amillāh(u), wa man aẓlamu mimman katama syahādatan ‘indahū minallāh(i), wa mallāhu bigāfilin ‘ammā ta‘malūn(a).  ",
        "translation": "Apakah kamu juga berkata bahwa Ibrahim, Ismail, Ishaq, Ya‘qub, dan keturunannya adalah penganut Yahudi atau Nasrani? Katakanlah, “Apakah kamu yang lebih mengetahui ataukah Allah? Siapakah yang lebih zalim daripada orang yang menyembunyikan kesaksian dari Allah yang ada padanya?” Allah sama sekali tidak lengah dari apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002140.mp3",
        "translation_en": "Or do you say that Abraham and Ishmael and Isaac and Jacob and the Descendants were Jews or Christians? Say, \"Are you more knowing or is Allah?\" And who is more unjust than one who conceals a testimony he has from Allah? And Allah is not unaware of what you do."
      },
      {
        "number": 141,
        "arabic": "تِلْكَ اُمَّةٌ قَدْ خَلَتْ ۚ لَهَا مَا كَسَبَتْ وَلَكُمْ مَّا كَسَبْتُمْ ۚ وَلَا تُسْـَٔلُوْنَ عَمَّا كَانُوْا يَعْمَلُوْنَ ࣖ   ۔",
        "latin": "Tilka ummatun qad khalat, lahā mā kasabat wa lakum mā kasabtum, wa lā tus'alūna ‘ammā kānū ya‘malūn(a).  ",
        "translation": "Itulah umat yang telah lalu. Baginya apa yang telah mereka usahakan dan bagimu apa yang telah kamu usahakan. Kamu tidak akan diminta pertanggungjawaban tentang apa yang telah mereka kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002141.mp3",
        "translation_en": "That is a nation which has passed on. It will have [the consequence of] what it earned, and you will have what you have earned. And you will not be asked about what they used to do."
      },
      {
        "number": 142,
        "arabic": "۞ سَيَقُوْلُ السُّفَهَاۤءُ مِنَ النَّاسِ مَا وَلّٰىهُمْ عَنْ قِبْلَتِهِمُ الَّتِيْ كَانُوْا عَلَيْهَا ۗ قُلْ لِّلّٰهِ الْمَشْرِقُ وَالْمَغْرِبُۗ يَهْدِيْ مَنْ يَّشَاۤءُ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ ",
        "latin": "Sayāqūlus-sufahā'u minan-nāsi mā wallāhum ‘an qiblatihimul-latī kānū ‘alaihā, qul lillāhil-masyriqu wal-magrib(u), yahdī may yasyā'u ilā ṣirāṭim mustaqīm(in).  ",
        "translation": "Orang-orang yang kurang akal di antara manusia akan berkata, “Apakah yang memalingkan mereka (kaum muslim) dari kiblat yang dahulu mereka (berkiblat) kepadanya?” Katakanlah (Nabi Muhammad), “Milik Allahlah timur dan barat. Dia memberi petunjuk kepada siapa yang Dia kehendaki ke jalan yang lurus (berdasarkan kesiapannya untuk menerima petunjuk).”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002142.mp3",
        "translation_en": "The foolish among the people will say, \"What has turned them away from their qiblah, which they used to face?\" Say, \"To Allah belongs the east and the west. He guides whom He wills to a straight path.\""
      },
      {
        "number": 143,
        "arabic": "وَكَذٰلِكَ جَعَلْنٰكُمْ اُمَّةً وَّسَطًا لِّتَكُوْنُوْا شُهَدَاۤءَ عَلَى النَّاسِ وَيَكُوْنَ الرَّسُوْلُ عَلَيْكُمْ شَهِيْدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِيْ كُنْتَ عَلَيْهَآ اِلَّا لِنَعْلَمَ مَنْ يَّتَّبِعُ الرَّسُوْلَ مِمَّنْ يَّنْقَلِبُ عَلٰى عَقِبَيْهِۗ  وَاِنْ كَانَتْ لَكَبِيْرَةً اِلَّا عَلَى الَّذِيْنَ هَدَى اللّٰهُ  ۗوَمَا كَانَ اللّٰهُ لِيُضِيْعَ اِيْمَانَكُمْ ۗ اِنَّ اللّٰهَ بِالنَّاسِ لَرَءُوْفٌ رَّحِيْمٌ  ",
        "latin": "Wa każālika ja‘alnākum  ummataw wasaṭal litakūnū syuhadā'a ‘alan-nāsi wa yakūnar-rasūlu ‘alaikum syahīdā(n), wa mā ja‘alnal-qiblatal-latī kunta ‘alaihā illā lina‘lama may yattabi‘ur-rasūla mimmay yanqalibu ‘alā ‘aqibaih(i), wa in kānat lakabīratan illā ‘alal-lażīna hadallāh(u), wa mā kānallāhu liyuḍī‘a īmānakum, innallāha bin-nāsi lara'ūfur raḥīm(un).  ",
        "translation": "Demikian pula Kami telah menjadikan kamu (umat Islam) umat pertengahan agar kamu menjadi saksi atas (perbuatan) manusia dan agar Rasul (Nabi Muhammad) menjadi saksi atas (perbuatan) kamu. Kami tidak menetapkan kiblat (Baitulmaqdis) yang (dahulu) kamu berkiblat kepadanya, kecuali agar Kami mengetahui (dalam kenyataan) siapa yang mengikuti Rasul dan siapa yang berbalik ke belakang. Sesungguhnya (pemindahan kiblat) itu sangat berat, kecuali bagi orang yang telah diberi petunjuk oleh Allah. Allah tidak akan menyia-nyiakan imanmu. Sesungguhnya Allah benar-benar Maha Pengasih lagi Maha Penyayang kepada manusia.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002143.mp3",
        "translation_en": "And thus we have made you a just community that you will be witnesses over the people and the Messenger will be a witness over you. And We did not make the qiblah which you used to face except that We might make evident who would follow the Messenger from who would turn back on his heels. And indeed, it is difficult except for those whom Allah has guided. And never would Allah have caused you to lose your faith. Indeed Allah is, to the people, Kind and Merciful."
      },
      {
        "number": 144,
        "arabic": "قَدْ نَرٰى تَقَلُّبَ وَجْهِكَ فِى السَّمَاۤءِۚ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضٰىهَا ۖ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوْا وُجُوْهَكُمْ شَطْرَهٗ ۗ وَاِنَّ الَّذِيْنَ اُوْتُوا الْكِتٰبَ لَيَعْلَمُوْنَ اَنَّهُ الْحَقُّ مِنْ رَّبِّهِمْ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا يَعْمَلُوْنَ",
        "latin": "Qad narā taqallubaka wajhika fis-samā'(i), fa lanuwalliyannaka qiblatan tarḍāhā, fawalli wajhaka syaṭral-masjidil-ḥarām(i), wa ḥaiṡumā kuntum fawallū wujūhakum syaṭrah(ū), wa innal-lażīna ūtul-kitāba laya‘lamūna annahul-ḥaqqu mir rabbihim, wa mallāhu bigāfilin ‘ammā ya‘malūn(a).  ",
        "translation": "Sungguh, Kami melihat wajahmu (Nabi Muhammad) sering menengadah ke langit. Maka, pasti akan Kami palingkan engkau ke kiblat yang engkau sukai. Lalu, hadapkanlah wajahmu ke arah Masjidilharam. Di mana pun kamu sekalian berada, hadapkanlah wajahmu ke arah itu. Sesungguhnya orang-orang yang diberi kitab benar-benar mengetahui bahwa (pemindahan kiblat ke Masjidilharam) itu adalah kebenaran dari Tuhan mereka. Allah tidak lengah terhadap apa yang mereka kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002144.mp3",
        "translation_en": "We have certainly seen the turning of your face, [O Muhammad], toward the heaven, and We will surely turn you to a qiblah with which you will be pleased. So turn your face toward al-Masjid al-Haram. And wherever you [believers] are, turn your faces toward it [in prayer]. Indeed, those who have been given the Scripture well know that it is the truth from their Lord. And Allah is not unaware of what they do."
      },
      {
        "number": 145,
        "arabic": "وَلَىِٕنْ اَتَيْتَ الَّذِيْنَ اُوْتُوا الْكِتٰبَ بِكُلِّ اٰيَةٍ مَّا تَبِعُوْا قِبْلَتَكَ ۚ وَمَآ اَنْتَ بِتَابِعٍ قِبْلَتَهُمْ ۚ وَمَا بَعْضُهُمْ بِتَابِعٍ قِبْلَةَ بَعْضٍۗ وَلَىِٕنِ اتَّبَعْتَ اَهْوَاۤءَهُمْ مِّنْۢ بَعْدِ مَاجَاۤءَكَ مِنَ الْعِلْمِ ۙ اِنَّكَ اِذًا لَّمِنَ الظّٰلِمِيْنَ ۘ ",
        "latin": "Wa la'in ataital-lażīna ūtul-kitāba bikulli āyatim mā tabi‘ū qiblatak(a), wa mā anta bitābi‘in qiblatahum, wa mā ba‘ḍuhum bitābi‘in qiblata ba‘ḍ(in), wa la'inittaba‘ta ahwā'ahum mim ba‘di mā jā'aka minal-‘ilm(i), innaka iżal laminaẓ-ẓālimīn(a).  ",
        "translation": "Sungguh, jika engkau (Nabi Muhammad) mendatangkan ayat-ayat (keterangan) kepada orang-orang yang diberi kitab itu, mereka tidak akan mengikuti kiblatmu. Engkau pun tidak akan mengikuti kiblat mereka. Sebagian mereka (pun) tidak akan mengikuti kiblat sebagian yang lain. Sungguh, jika engkau mengikuti keinginan mereka setelah sampai ilmu kepadamu, niscaya engkau termasuk orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002145.mp3",
        "translation_en": "And if you brought to those who were given the Scripture every sign, they would not follow your qiblah. Nor will you be a follower of their qiblah. Nor would they be followers of one another's qiblah. So if you were to follow their desires after what has come to you of knowledge, indeed, you would then be among the wrongdoers."
      },
      {
        "number": 146,
        "arabic": "اَلَّذِيْنَ اٰتَيْنٰهُمُ الْكِتٰبَ يَعْرِفُوْنَهٗ كَمَا يَعْرِفُوْنَ اَبْنَاۤءَهُمْ ۗ وَاِنَّ فَرِيْقًا مِّنْهُمْ لَيَكْتُمُوْنَ الْحَقَّ وَهُمْ يَعْلَمُوْنَ",
        "latin": "Allażīna ātaināhumul-kitāba ya‘rifūnahū kamā ya‘rifūna abnā'ahum, wa inna farīqam minhum layaktumūnal-ḥaqqa wa hum ya‘lamūn(a).  ",
        "translation": "Orang-orang yang telah Kami anugerahi Kitab (Taurat dan Injil) mengenalnya (Nabi Muhammad) seperti mereka mengenal anak-anak mereka sendiri. Sesungguhnya sekelompok dari mereka pasti menyembunyikan kebenaran, sedangkan mereka mengetahui(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002146.mp3",
        "translation_en": "Those to whom We gave the Scripture know him as they know their own sons. But indeed, a party of them conceal the truth while they know [it]."
      },
      {
        "number": 147,
        "arabic": "اَلْحَقُّ مِنْ رَّبِّكَ فَلَا تَكُوْنَنَّ مِنَ الْمُمْتَرِيْنَ ࣖ",
        "latin": "Al-ḥaqqu mir rabbika falā takūnanna minal-mumtarīn(a).  ",
        "translation": "Kebenaran itu dari Tuhanmu. Maka, janganlah sekali-kali engkau (Nabi Muhammad) termasuk orang-orang yang ragu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002147.mp3",
        "translation_en": "The truth is from your Lord, so never be among the doubters."
      },
      {
        "number": 148,
        "arabic": "وَلِكُلٍّ وِّجْهَةٌ هُوَ مُوَلِّيْهَا فَاسْتَبِقُوا الْخَيْرٰتِۗ اَيْنَ مَا تَكُوْنُوْا يَأْتِ بِكُمُ اللّٰهُ جَمِيْعًا ۗاِنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ",
        "latin": "Wa likulliw wijhatun huwa muwallīhā fastabiqul-khairāt(i), aina mā takūnū ya'ti bikumullāhu jamī‘ā(n), innallāha ‘alā kulli syai'in qadīr(un).  ",
        "translation": "Bagi setiap umat ada kiblat yang dia menghadap ke arahnya. Maka, berlomba-lombalah kamu dalam berbagai kebajikan. Di mana saja kamu berada, pasti Allah akan mengumpulkan kamu semuanya. Sesungguhnya Allah Maha Kuasa atas segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002148.mp3",
        "translation_en": "For each [religious following] is a direction toward which it faces. So race to [all that is] good. Wherever you may be, Allah will bring you forth [for judgement] all together. Indeed, Allah is over all things competent."
      },
      {
        "number": 149,
        "arabic": "وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَاِنَّهٗ لَلْحَقُّ مِنْ رَّبِّكَ ۗ وَمَا اللّٰهُ بِغَافِلٍ عَمَّا تَعْمَلُوْنَ",
        "latin": "Wa min ḥaiṡu kharajta fawalli wajhaka syaṭral-masjidil-ḥarām(i), wa innahū lal-ḥaqqu mir rabbik(a), wa mallāhu bigāfilin ‘ammā ta‘malūn(a).  ",
        "translation": "Dari mana pun engkau (Nabi Muhammad) keluar, hadapkanlah wajahmu ke arah Masjidilharam. Sesungguhnya (hal) itu benar-benar (ketentuan) yang hak (pasti, yang tidak diragukan lagi) dari Tuhanmu. Allah tidak lengah terhadap apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002149.mp3",
        "translation_en": "So from wherever you go out [for prayer, O Muhammad] turn your face toward al- Masjid al-Haram, and indeed, it is the truth from your Lord. And Allah is not unaware of what you do."
      },
      {
        "number": 150,
        "arabic": "وَمِنْ حَيْثُ خَرَجْتَ فَوَلِّ وَجْهَكَ شَطْرَ الْمَسْجِدِ الْحَرَامِ ۗ وَحَيْثُ مَا كُنْتُمْ فَوَلُّوْا وُجُوْهَكُمْ شَطْرَهٗ ۙ لِئَلَّا يَكُوْنَ لِلنَّاسِ عَلَيْكُمْ حُجَّةٌ اِلَّا الَّذِيْنَ ظَلَمُوْا مِنْهُمْ فَلَا تَخْشَوْهُمْ وَاخْشَوْنِيْ وَلِاُتِمَّ نِعْمَتِيْ عَلَيْكُمْ وَلَعَلَّكُمْ تَهْتَدُوْنَۙ",
        "latin": "Wa min ḥaiṡu kharajta fa walli wajhaka syaṭral-masjidil-ḥarām(i), wa ḥaiṡumā kuntum fawallū wujūhakum syaṭrah(ū), li'allā yakūna lin-nāsi ‘alaikum ḥujjatun illal-lażīna ẓalamū minhum, falā takhsyauhum wakhsyaunī, wa li'utimma ni‘matī  ‘alaikum wa la‘allakum tahtadūn(a).  ",
        "translation": "Dari mana pun engkau (Nabi Muhammad) keluar, maka hadapkanlah wajahmu ke arah Masjidilharam. Di mana saja kamu berada, maka hadapkanlah wajahmu ke arahnya agar tidak ada alasan bagi manusia (untuk menentangmu), kecuali orang-orang yang zalim di antara mereka. Maka, janganlah kamu takut kepada mereka, tetapi takutlah kepada-Ku agar Aku sempurnakan nikmat-Ku kepadamu dan agar kamu mendapat petunjuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002150.mp3",
        "translation_en": "And from wherever you go out [for prayer], turn your face toward al-Masjid al-Haram. And wherever you [believers] may be, turn your faces toward it in order that the people will not have any argument against you, except for those of them who commit wrong; so fear them not but fear Me. And [it is] so I may complete My favor upon you and that you may be guided."
      },
      {
        "number": 151,
        "arabic": "كَمَآ اَرْسَلْنَا فِيْكُمْ رَسُوْلًا مِّنْكُمْ يَتْلُوْا عَلَيْكُمْ اٰيٰتِنَا وَيُزَكِّيْكُمْ وَيُعَلِّمُكُمُ الْكِتٰبَ وَالْحِكْمَةَ وَيُعَلِّمُكُمْ مَّا لَمْ تَكُوْنُوْا تَعْلَمُوْنَۗ",
        "latin": "Kamā arsalnā fīkum rasūlam minkum yatlū ‘alaikum āyātinā wa yuzakkīkum wa yu‘allimukumul-kitāba wal-ḥikmata wa yu‘allimukum mā lam takūnū ta‘lamūn(a).  ",
        "translation": "Sebagaimana (Kami telah menyempurnakan nikmat kepadamu), Kami pun mengutus kepadamu seorang Rasul (Nabi Muhammad) dari (kalangan) kamu yang membacakan kepadamu ayat-ayat Kami, menyucikan kamu, dan mengajarkan kepadamu Kitab (Al-Qur’an) dan hikmah (sunah), serta mengajarkan apa yang belum kamu ketahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002151.mp3",
        "translation_en": "Just as We have sent among you a messenger from yourselves reciting to you Our verses and purifying you and teaching you the Book and wisdom and teaching you that which you did not know."
      },
      {
        "number": 152,
        "arabic": "فَاذْكُرُوْنِيْٓ اَذْكُرْكُمْ وَاشْكُرُوْا لِيْ وَلَا تَكْفُرُوْنِ ࣖ ",
        "latin": "Fażkurūnī ażkurkum wasykurū lī wa lā takfurūn(i).  ",
        "translation": "Maka, ingatlah kepada-Ku, Aku pun akan ingat kepadamu. Bersyukurlah kepada-Ku dan janganlah kamu ingkar kepada-Ku.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002152.mp3",
        "translation_en": "So remember Me; I will remember you. And be grateful to Me and do not deny Me."
      },
      {
        "number": 153,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ",
        "latin": "Yā ayyuhal-lażīna āmanusta‘īnū biṣ-ṣabri waṣ-ṣalāh(ti), innallāha ma‘aṣ-ṣābirīn(a).  ",
        "translation": "Wahai orang-orang yang beriman, mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sesungguhnya Allah beserta orang-orang yang sabar.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002153.mp3",
        "translation_en": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient."
      },
      {
        "number": 154,
        "arabic": "وَلَا تَقُوْلُوْا لِمَنْ يُّقْتَلُ فِيْ سَبِيْلِ اللّٰهِ اَمْوَاتٌ ۗ بَلْ اَحْيَاۤءٌ وَّلٰكِنْ لَّا تَشْعُرُوْنَ",
        "latin": "Wa lā taqūlū limay yuqtalu fī sabīlillāhi amwāt(un), bal aḥyā'uw wa lākil lā tasy‘urūn(a).  ",
        "translation": "Janganlah kamu mengatakan bahwa orang-orang yang terbunuh di jalan Allah (mereka) telah mati. Namun, (sebenarnya mereka) hidup, tetapi kamu tidak menyadarinya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002154.mp3",
        "translation_en": "And do not say about those who are killed in the way of Allah, \"They are dead.\" Rather, they are alive, but you perceive [it] not."
      },
      {
        "number": 155,
        "arabic": "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوْعِ وَنَقْصٍ مِّنَ الْاَمْوَالِ وَالْاَنْفُسِ وَالثَّمَرٰتِۗ وَبَشِّرِ الصّٰبِرِيْنَ",
        "latin": "Wa lanabluwannakum bisyai'im minal-khaufi wal-jū‘i wa naqaṣim minal-amwāli wal-anfusi waṡ-ṡamarāt(i), wa basysyiriṣ-ṣābirīn(a). ",
        "translation": "Kami pasti akan mengujimu dengan sedikit ketakutan dan kelaparan, kekurangan harta, jiwa, dan buah-buahan. Sampaikanlah (wahai Nabi Muhammad,) kabar gembira kepada orang-orang sabar,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002155.mp3",
        "translation_en": "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient,"
      },
      {
        "number": 156,
        "arabic": "اَلَّذِيْنَ اِذَآ اَصَابَتْهُمْ مُّصِيْبَةٌ ۗ قَالُوْٓا اِنَّا لِلّٰهِ وَاِنَّآ اِلَيْهِ رٰجِعُوْنَۗ",
        "latin": "Allażīna iżā aṣābathum muṣībah(tun), qālū innā lillāhi wa innā ilaihi rāji‘ūn(a).  ",
        "translation": "(yaitu) orang-orang yang apabila ditimpa musibah, mereka mengucapkan “Innā lillāhi wa innā ilaihi rāji‘ūn” (sesungguhnya kami adalah milik Allah dan sesungguhnya hanya kepada-Nya kami akan kembali).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002156.mp3",
        "translation_en": "Who, when disaster strikes them, say, \"Indeed we belong to Allah, and indeed to Him we will return.\""
      },
      {
        "number": 157,
        "arabic": "اُولٰۤىِٕكَ عَلَيْهِمْ صَلَوٰتٌ مِّنْ رَّبِّهِمْ وَرَحْمَةٌ  ۗوَاُولٰۤىِٕكَ هُمُ الْمُهْتَدُوْنَ",
        "latin": "Ulā'ika ‘alaihim ṣalawātum mir rabbihim wa raḥmah(tun), wa ulā'ika humul-muhtadūn(a). ",
        "translation": "Mereka itulah yang memperoleh ampunan dan rahmat dari Tuhannya dan mereka itulah orang-orang yang mendapat petunjuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002157.mp3",
        "translation_en": "Those are the ones upon whom are blessings from their Lord and mercy. And it is those who are the [rightly] guided."
      },
      {
        "number": 158,
        "arabic": "۞ اِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَاۤىِٕرِ اللّٰهِ ۚ فَمَنْ حَجَّ الْبَيْتَ اَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ اَنْ يَّطَّوَّفَ بِهِمَا ۗ وَمَنْ تَطَوَّعَ خَيْرًاۙ فَاِنَّ اللّٰهَ شَاكِرٌ عَلِيْمٌ ",
        "latin": "Innaṣ-ṣafā wal-marwata min sya‘ā'irillāh(i), faman ḥajjal-baita awi‘tamara falā junāḥa ‘alaihi ay yaṭṭawwafa bihimā, wa man taṭawwa‘a khairan fa innallāha syākirun ‘alīm(un).  ",
        "translation": "Sesungguhnya Safa dan Marwah merupakan sebagian syiar (agama) Allah. Maka, siapa beribadah haji ke Baitullah atau berumrah, tidak ada dosa baginya mengerjakan sai antara keduanya. Siapa yang dengan kerelaan hati mengerjakan kebajikan, maka sesungguhnya Allah Maha Mensyukuri, lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002158.mp3",
        "translation_en": "Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'umrah - there is no blame upon him for walking between them. And whoever volunteers good - then indeed, Allah is appreciative and Knowing."
      },
      {
        "number": 159,
        "arabic": "اِنَّ الَّذِيْنَ يَكْتُمُوْنَ مَآ اَنْزَلْنَا مِنَ الْبَيِّنٰتِ وَالْهُدٰى مِنْۢ بَعْدِ مَا بَيَّنّٰهُ لِلنَّاسِ فِى الْكِتٰبِۙ اُولٰۤىِٕكَ يَلْعَنُهُمُ اللّٰهُ وَيَلْعَنُهُمُ اللّٰعِنُوْنَۙ",
        "latin": "Innal-lażīna yaktumūna mā anzalnā minal-bayyināti wal-hudā mim ba‘di mā bayyannāhu lin-nāsi fil-kitāb(i), ulā'ika yal‘anuhumullāhu wa yal‘anuhumul-lā‘inūn(a).  ",
        "translation": "Sesungguhnya orang-orang yang menyembunyikan apa yang telah Kami turunkan berupa keterangan-keterangan dan petunjuk, setelah Kami jelaskan kepada manusia dalam Kitab (Al-Qur’an), mereka itulah yang dilaknat Allah dan dilaknat (pula) oleh mereka yang melaknat,",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002159.mp3",
        "translation_en": "Indeed, those who conceal what We sent down of clear proofs and guidance after We made it clear for the people in the Scripture - those are cursed by Allah and cursed by those who curse,"
      },
      {
        "number": 160,
        "arabic": "اِلَّا الَّذِيْنَ تَابُوْا وَاَصْلَحُوْا وَبَيَّنُوْا فَاُولٰۤىِٕكَ اَتُوْبُ عَلَيْهِمْ ۚ وَاَنَا التَّوَّابُ الرَّحِيْمُ ",
        "latin": "Illal-lażīna tābū wa aṣlaḥū wa bayyanū fa'ulā'ika atūbu ‘alaihim, wa anat-tawwābur-raḥīm(u). ",
        "translation": "kecuali orang-orang yang telah bertobat, mengadakan perbaikan, dan menjelaskan(-nya). Mereka itulah yang Aku terima tobatnya. Akulah Yang Maha Penerima Tobat lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002160.mp3",
        "translation_en": "Except for those who repent and correct themselves and make evident [what they concealed]. Those - I will accept their repentance, and I am the Accepting of repentance, the Merciful."
      },
      {
        "number": 161,
        "arabic": "اِنَّ الَّذِيْنَ كَفَرُوْا وَمَاتُوْا وَهُمْ كُفَّارٌ اُولٰۤىِٕكَ عَلَيْهِمْ لَعْنَةُ اللّٰهِ وَالْمَلٰۤىِٕكَةِ وَالنَّاسِ اَجْمَعِيْنَۙ",
        "latin": "Innal-lażīna kafarū wa mātū wa hum kuffārun ulā'ika ‘alaihim la‘natullāhi wal-malā'ikati wan-nāsi ajma‘īn(a).  ",
        "translation": "Sesungguhnya orang-orang yang kufur dan mati dalam keadaan kafir, mereka itu mendapat laknat Allah, para malaikat, dan manusia seluruhnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002161.mp3",
        "translation_en": "Indeed, those who disbelieve and die while they are disbelievers - upon them will be the curse of Allah and of the angels and the people, all together,"
      },
      {
        "number": 162,
        "arabic": "خٰلِدِيْنَ فِيْهَا ۚ لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنْظَرُوْنَ",
        "latin": "Khālidīna fīhā, lā yukhaffafu ‘anhumul-‘ażābu wa lā hum yunẓarūn(a). ",
        "translation": "Mereka kekal di dalamnya (laknat). Tidak akan diringankan azab dari mereka, dan mereka tidak diberi penangguhan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002162.mp3",
        "translation_en": "Abiding eternally therein. The punishment will not be lightened for them, nor will they be reprieved."
      },
      {
        "number": 163,
        "arabic": "وَاِلٰهُكُمْ اِلٰهٌ وَّاحِدٌۚ  لَآاِلٰهَ اِلَّا هُوَ الرَّحْمٰنُ الرَّحِيْمُ ࣖ",
        "latin": "Wa ilāhukum ilāhuw wāḥid(un), lā ilāha illā huwar-raḥmānur-raḥīm(u). ",
        "translation": "Tuhan kamu adalah Tuhan Yang Maha Esa. Tidak ada tuhan selain Dia Yang Maha Pengasih lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002163.mp3",
        "translation_en": "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful."
      },
      {
        "number": 164,
        "arabic": "اِنَّ فِيْ خَلْقِ السَّمٰوٰتِ وَالْاَرْضِ وَاخْتِلَافِ الَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِيْ تَجْرِيْ فِى الْبَحْرِ بِمَا يَنْفَعُ النَّاسَ وَمَآ اَنْزَلَ اللّٰهُ مِنَ السَّمَاۤءِ مِنْ مَّاۤءٍ فَاَحْيَا بِهِ الْاَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيْهَا مِنْ كُلِّ دَاۤبَّةٍ ۖ وَّتَصْرِيْفِ الرِّيٰحِ وَالسَّحَابِ الْمُسَخَّرِ بَيْنَ السَّمَاۤءِ وَالْاَرْضِ لَاٰيٰتٍ لِّقَوْمٍ يَّعْقِلُوْنَ",
        "latin": "Inna fī khalqis-samāwāti wal-arḍi wakhtilāfil-laili wan-nahāri wal-fulkil-latī tajrī fil-baḥri bimā yanfa‘un-nāsa wa mā anzalallāhu minas-samā'i mim mā'in fa aḥyā bihil-arḍa ba‘da mautihā wa baṡṡa fīhā min kulli dābbah(tin), wa taṣrīfir-riyāḥi was-saḥābil-musakhkhari bainas-samā'i wal-arḍi la'āyātil liqaumiy ya‘qilūn(a). ",
        "translation": "Sesungguhnya pada penciptaan langit dan bumi, pergantian malam dan siang, bahtera yang berlayar di laut dengan (muatan) yang bermanfaat bagi manusia, apa yang Allah turunkan dari langit berupa air, lalu dengannya Dia menghidupkan bumi setelah mati (kering), dan Dia menebarkan di dalamnya semua jenis hewan, dan pengisaran angin dan awan yang dikendalikan antara langit dan bumi, (semua itu) sungguh merupakan tanda-tanda (kebesaran Allah) bagi kaum yang mengerti.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002164.mp3",
        "translation_en": "Indeed, in the creation of the heavens and earth, and the alternation of the night and the day, and the [great] ships which sail through the sea with that which benefits people, and what Allah has sent down from the heavens of rain, giving life thereby to the earth after its lifelessness and dispersing therein every [kind of] moving creature, and [His] directing of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason."
      },
      {
        "number": 165,
        "arabic": "وَمِنَ النَّاسِ مَنْ يَّتَّخِذُ مِنْ دُوْنِ اللّٰهِ اَنْدَادًا يُّحِبُّوْنَهُمْ كَحُبِّ اللّٰهِ ۗ وَالَّذِيْنَ اٰمَنُوْٓا اَشَدُّ حُبًّا لِّلّٰهِ ۙوَلَوْ يَرَى الَّذِيْنَ ظَلَمُوْٓا اِذْ يَرَوْنَ الْعَذَابَۙ اَنَّ الْقُوَّةَ لِلّٰهِ جَمِيْعًا ۙوَّاَنَّ اللّٰهَ شَدِيْدُ الْعَذَابِ ",
        "latin": "Wa minan-nāsi may yattakhiżu min dūnillāhi andāday yuḥibbūnahum kaḥubbillāh(i), wal-lażīna āmanū asyaddu ḥubbal lillāh(i), wa lau yaral-lażīna ẓalamū iż yaraunal-‘ażāb(a), annal-quwwata lillāhi jamī‘ā(n), wa annallāha syadīdul-‘ażāb(i).  ",
        "translation": "Di antara manusia ada yang menjadikan (sesuatu) selain Allah sebagai tandingan-tandingan (bagi-Nya) yang mereka cintai seperti mencintai Allah. Adapun orang-orang yang beriman sangat kuat cinta mereka kepada Allah. Sekiranya orang-orang yang berbuat zalim itu melihat, ketika mereka melihat azab (pada hari Kiamat), bahwa kekuatan itu semuanya milik Allah dan bahwa Allah sangat keras azab-Nya, (niscaya mereka menyesal).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002165.mp3",
        "translation_en": "And [yet], among the people are those who take other than Allah as equals [to Him]. They love them as they [should] love Allah. But those who believe are stronger in love for Allah. And if only they who have wronged would consider [that] when they see the punishment, [they will be certain] that all power belongs to Allah and that Allah is severe in punishment."
      },
      {
        "number": 166,
        "arabic": "اِذْ تَبَرَّاَ الَّذِيْنَ اتُّبِعُوْا مِنَ الَّذِيْنَ اتَّبَعُوْا وَرَاَوُا الْعَذَابَ وَتَقَطَّعَتْ بِهِمُ الْاَسْبَابُ",
        "latin": "Iż tabarra'al-lażīnattubi‘ū minal-lażīnattaba‘ū wa ra'awul-‘ażāba wa taqaṭṭa‘at bihimul-asbāb(u).  ",
        "translation": "(Yaitu) ketika orang-orang yang diikuti berlepas tangan dari orang-orang yang mengikuti saat mereka (orang-orang yang diikuti) melihat azab, dan (ketika) segala hubungan antara mereka terputus.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002166.mp3",
        "translation_en": "[And they should consider that] when those who have been followed disassociate themselves from those who followed [them], and they [all] see the punishment, and cut off from them are the ties [of relationship],"
      },
      {
        "number": 167,
        "arabic": "وَقَالَ الَّذِيْنَ اتَّبَعُوْا لَوْ اَنَّ لَنَا كَرَّةً فَنَتَبَرَّاَ مِنْهُمْ ۗ كَمَا تَبَرَّءُوْا مِنَّا ۗ كَذٰلِكَ يُرِيْهِمُ اللّٰهُ اَعْمَالَهُمْ حَسَرٰتٍ عَلَيْهِمْ ۗ وَمَا هُمْ بِخٰرِجِيْنَ مِنَ النَّارِ ࣖ",
        "latin": "Wa qālal-lażīnattaba‘ū lau anna lanā karratan fa natabarra'a minhum, kamā tabarra'ū minnā, każālika yurīhimullāhu a‘mālahum ḥasarātin ‘alaihim, wa mā hum bikhārijīna minan-nār(i). ",
        "translation": "Orang-orang yang mengikuti berkata, “Andaikan saja kami mendapat kesempatan kembali (ke dunia), tentu kami akan berlepas tangan dari mereka sebagaimana mereka berlepas tangan dari kami.” Demikianlah Allah memperlihatkan kepada mereka amal perbuatan mereka sebagai penyesalan bagi mereka. Mereka sungguh tidak akan keluar dari neraka.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002167.mp3",
        "translation_en": "Those who followed will say, \"If only we had another turn [at worldly life] so we could disassociate ourselves from them as they have disassociated themselves from us.\" Thus will Allah show them their deeds as regrets upon them. And they are never to emerge from the Fire."
      },
      {
        "number": 168,
        "arabic": "يٰٓاَيُّهَا النَّاسُ كُلُوْا مِمَّا فِى الْاَرْضِ حَلٰلًا طَيِّبًا ۖوَّلَا تَتَّبِعُوْا خُطُوٰتِ الشَّيْطٰنِۗ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ",
        "latin": "Yā ayyuhan-nāsu kulū mimmā fil-arḍi ḥalālan ṭayyibā(n), wa lā tattabi‘ū khuṭuwātisy-syaiṭān(i), innahū lakum ‘aduwwum mubīn(un). ",
        "translation": "Wahai manusia, makanlah sebagian (makanan) di bumi yang halal lagi baik dan janganlah mengikuti langkah-langkah setan. Sesungguhnya ia bagimu merupakan musuh yang nyata.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002168.mp3",
        "translation_en": "O mankind, eat from whatever is on earth [that is] lawful and good and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."
      },
      {
        "number": 169,
        "arabic": "اِنَّمَا يَأْمُرُكُمْ بِالسُّوْۤءِ وَالْفَحْشَاۤءِ وَاَنْ تَقُوْلُوْا عَلَى اللّٰهِ مَا لَا تَعْلَمُوْنَ",
        "latin": "Innamā ya'murukum bis-sū'i wal-faḥsyā'i wa an taqūlū ‘alallāhi mā lā ta‘lamūn(a).  ",
        "translation": "Sesungguhnya (setan) hanya menyuruh kamu untuk berbuat jahat dan keji serta mengatakan tentang Allah apa yang tidak kamu ketahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002169.mp3",
        "translation_en": "He only orders you to evil and immorality and to say about Allah what you do not know."
      },
      {
        "number": 170,
        "arabic": "وَاِذَا قِيْلَ لَهُمُ اتَّبِعُوْا مَآ اَنْزَلَ اللّٰهُ قَالُوْا بَلْ نَتَّبِعُ مَآ اَلْفَيْنَا عَلَيْهِ اٰبَاۤءَنَا ۗ اَوَلَوْ كَانَ اٰبَاۤؤُهُمْ لَا يَعْقِلُوْنَ شَيْـًٔا وَّلَا يَهْتَدُوْنَ",
        "latin": "Wa iżā qīla lahumuttabi‘ū mā anzalallāhu qālū bal nattabi‘u mā alfainā ‘alaihi ābā'anā, awalau kāna ābā'uhum lā ya‘qilūna syai'aw wa lā yahtadūn(a). ",
        "translation": "Apabila dikatakan kepada mereka, “Ikutilah apa yang telah diturunkan Allah,” mereka menjawab, “Tidak. Kami tetap mengikuti kebiasaan yang kami dapati pada nenek moyang kami.” Apakah (mereka akan mengikuti juga) walaupun nenek moyang mereka (itu) tidak mengerti apa pun dan tidak mendapat petunjuk?",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002170.mp3",
        "translation_en": "And when it is said to them, \"Follow what Allah has revealed,\" they say, \"Rather, we will follow that which we found our fathers doing.\" Even though their fathers understood nothing, nor were they guided?"
      },
      {
        "number": 171,
        "arabic": "وَمَثَلُ الَّذِيْنَ كَفَرُوْا كَمَثَلِ الَّذِيْ يَنْعِقُ بِمَا لَا يَسْمَعُ اِلَّا دُعَاۤءً وَّنِدَاۤءً ۗ صُمٌّ ۢ بُكْمٌ عُمْيٌ فَهُمْ لَا يَعْقِلُوْنَ ",
        "latin": "Wa maṡalul-lażīna kafarū kamaṡalil-lażī yan‘iqu bimā lā yasma‘u illā du‘ā'aw wa nidā'ā(n), ṣummum bukmun ‘umyun fahum lā ya‘qilūn(a).  ",
        "translation": "Perumpamaan (penyeru) orang-orang yang kufur adalah seperti (penggembala) yang meneriaki (gembalaannya) yang tidak mendengar (memahami) selain panggilan dan teriakan (saja). (Mereka) tuli, bisu, dan buta sehingga mereka tidak mengerti.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002171.mp3",
        "translation_en": "The example of those who disbelieve is like that of one who shouts at what hears nothing but calls and cries cattle or sheep - deaf, dumb and blind, so they do not understand."
      },
      {
        "number": 172,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُلُوْا مِنْ طَيِّبٰتِ مَا رَزَقْنٰكُمْ وَاشْكُرُوْا لِلّٰهِ اِنْ كُنْتُمْ اِيَّاهُ تَعْبُدُوْنَ ",
        "latin": "Yā ayyuhal-lażīna āmanū kulū min ṭayyibāti mā razaqnākum wasykurū lillāhi in kuntum iyyāhu ta‘budūn(a). ",
        "translation": "Wahai orang-orang yang beriman, makanlah apa-apa yang baik yang Kami anugerahkan kepadamu dan bersyukurlah kepada Allah jika kamu benar-benar hanya menyembah kepada-Nya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002172.mp3",
        "translation_en": "O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship."
      },
      {
        "number": 173,
        "arabic": "اِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيْرِ وَمَآ اُهِلَّ بِهٖ لِغَيْرِ اللّٰهِ ۚ فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَّلَا عَادٍ فَلَآ اِثْمَ عَلَيْهِ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ",
        "latin": "Innamā ḥarrama ‘alaikumul-maitata wad-dama wa laḥmal-khinzīri wa mā uhilla bihī ligairillāh(i), fa maniḍṭurra gaira bāgiw wa lā ‘ādin falā iṡma ‘alaih(i), innallāha gafūrur raḥīm(un). ",
        "translation": "Sesungguhnya Dia hanya mengharamkan atasmu bangkai, darah, daging babi, dan (daging) hewan yang disembelih dengan (menyebut nama) selain Allah. Akan tetapi, siapa yang terpaksa (memakannya), bukan karena menginginkannya dan tidak (pula) melampaui batas, maka tidak ada dosa baginya. Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002173.mp3",
        "translation_en": "He has only forbidden to you dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah. But whoever is forced [by necessity], neither desiring [it] nor transgressing [its limit], there is no sin upon him. Indeed, Allah is Forgiving and Merciful."
      },
      {
        "number": 174,
        "arabic": "اِنَّ الَّذِيْنَ يَكْتُمُوْنَ مَآ اَنْزَلَ اللّٰهُ مِنَ الْكِتٰبِ وَيَشْتَرُوْنَ بِهٖ ثَمَنًا قَلِيْلًاۙ اُولٰۤىِٕكَ مَا يَأْكُلُوْنَ فِيْ بُطُوْنِهِمْ اِلَّا النَّارَ وَلَا يُكَلِّمُهُمُ اللّٰهُ يَوْمَ الْقِيٰمَةِ وَلَا يُزَكِّيْهِمْ ۚوَلَهُمْ عَذَابٌ اَلِيْمٌ ",
        "latin": "Innal-lażīna yaktumūna mā anzalallāhu minal-kitābi wa yasytarūna bihī ṡamanan qalīlā(n), ulā'ika mā ya'kulūna fī buṭūnihim illan-nāra wa lā yukallimuhumullāhu yaumal-qiyāmati wa lā yuzakkīhim, wa lahum ‘ażābun alīm(un).  ",
        "translation": "Sesungguhnya orang-orang yang menyembunyikan apa yang telah diturunkan Allah, yaitu Kitab (Taurat), dan menukarkannya dengan harga murah, mereka hanya menelan api neraka ke dalam perutnya. Allah tidak akan menyapa mereka pada hari Kiamat dan tidak akan menyucikan mereka. Bagi mereka azab yang sangat pedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002174.mp3",
        "translation_en": "Indeed, they who conceal what Allah has sent down of the Book and exchange it for a small price - those consume not into their bellies except the Fire. And Allah will not speak to them on the Day of Resurrection, nor will He purify them. And they will have a painful punishment."
      },
      {
        "number": 175,
        "arabic": "اُولٰۤىِٕكَ الَّذِيْنَ اشْتَرَوُا الضَّلٰلَةَ بِالْهُدٰى وَالْعَذَابَ بِالْمَغْفِرَةِ ۚ فَمَآ اَصْبَرَهُمْ عَلَى النَّارِ ",
        "latin": "Ulā'ikal-lażīnasytarawuḍ-ḍalālata bil-hudā wal-‘ażāba bil-magfirah(ti), famā aṣbarahum ‘alan-nār(i).  ",
        "translation": "Mereka itulah yang membeli kesesatan dengan petunjuk dan azab dengan ampunan. Maka, alangkah beraninya mereka menentang api neraka.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002175.mp3",
        "translation_en": "Those are the ones who have exchanged guidance for error and forgiveness for punishment. How patient they are in pursuit of the Fire!"
      },
      {
        "number": 176,
        "arabic": "ذٰلِكَ بِاَنَّ اللّٰهَ نَزَّلَ الْكِتٰبَ بِالْحَقِّ ۗ وَاِنَّ الَّذِيْنَ اخْتَلَفُوْا فِى الْكِتٰبِ لَفِيْ شِقَاقٍۢ بَعِيْدٍ ࣖ",
        "latin": "Żālika bi'annallāha nazzalal-kitāba bil-ḥaqq(i), wa innal-lażīnakhtalafū fil-kitābi lafī syiqāqim ba‘īd(in). ",
        "translation": "Yang demikian itu disebabkan Allah telah menurunkan kitab suci dengan hak. Sesungguhnya orang-orang yang berselisih paham tentang (kebenaran) kitab suci itu benar-benar dalam perpecahan yang jauh.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002176.mp3",
        "translation_en": "That is [deserved by them] because Allah has sent down the Book in truth. And indeed, those who differ over the Book are in extreme dissension."
      },
      {
        "number": 177,
        "arabic": "۞ لَيْسَ الْبِرَّاَنْ تُوَلُّوْا وُجُوْهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلٰكِنَّ الْبِرَّ مَنْ اٰمَنَ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ وَالْمَلٰۤىِٕكَةِ وَالْكِتٰبِ وَالنَّبِيّٖنَ ۚ وَاٰتَى الْمَالَ عَلٰى حُبِّهٖ ذَوِى الْقُرْبٰى وَالْيَتٰمٰى وَالْمَسٰكِيْنَ وَابْنَ السَّبِيْلِۙ وَالسَّاۤىِٕلِيْنَ وَفىِ الرِّقَابِۚ وَاَقَامَ الصَّلٰوةَ وَاٰتَى الزَّكٰوةَ ۚ وَالْمُوْفُوْنَ بِعَهْدِهِمْ اِذَا عَاهَدُوْا ۚ وَالصّٰبِرِيْنَ فِى الْبَأْسَاۤءِ وَالضَّرَّاۤءِ وَحِيْنَ الْبَأْسِۗ اُولٰۤىِٕكَ الَّذِيْنَ صَدَقُوْا ۗوَاُولٰۤىِٕكَ هُمُ الْمُتَّقُوْنَ ",
        "latin": "Laisal-birra an tuwallū wujūhakum qibalal-masyriqi wal-magribi wa lākinnal-birra man āmana billāhi wal-yaumil ākhiri wal-malā'ikati wal-kitābi wan-nabiyyīn(a), wa ātal-māla ‘alā ḥubbihī żawil-qurbā wal-yatāmā wal-masākīna wabnas-sabīl(i), was-sā'ilīna wa fir-riqāb(i), wa aqāmaṣ-ṣalāta wa ātaz-zakāh(ta), wal mūfūna bi‘ahdihim iżā ‘āhadū, waṣ-ṣābirīna fil-ba'sā'i waḍ-ḍarrā'i wa ḥīnal-ba's(i), ulā'ikal-lażīna ṣadaqū, wa ulā'ika humul-muttaqūn(a).   ",
        "translation": "Kebajikan itu bukanlah menghadapkan wajahmu ke arah timur dan barat, melainkan kebajikan itu ialah (kebajikan) orang yang beriman kepada Allah, hari Akhir, malaikat-malaikat, kitab suci, dan nabi-nabi; memberikan harta yang dicintainya kepada kerabat, anak yatim, orang miskin, musafir, peminta-minta, dan (memerdekakan) hamba sahaya; melaksanakan salat; menunaikan zakat; menepati janji apabila berjanji; sabar dalam kemelaratan, penderitaan, dan pada masa peperangan. Mereka itulah orang-orang yang benar dan mereka itulah orang-orang yang bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002177.mp3",
        "translation_en": "Righteousness is not that you turn your faces toward the east or the west, but [true] righteousness is [in] one who believes in Allah, the Last Day, the angels, the Book, and the prophets and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask [for help], and for freeing slaves; [and who] establishes prayer and gives zakah; [those who] fulfill their promise when they promise; and [those who] are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous."
      },
      {
        "number": 178,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الْقِصَاصُ فِى الْقَتْلٰىۗ اَلْحُرُّ بِالْحُرِّ وَالْعَبْدُ بِالْعَبْدِ وَالْاُنْثٰى بِالْاُنْثٰىۗ فَمَنْ عُفِيَ لَهٗ مِنْ اَخِيْهِ شَيْءٌ فَاتِّبَاعٌ ۢبِالْمَعْرُوْفِ وَاَدَاۤءٌ اِلَيْهِ بِاِحْسَانٍ ۗ ذٰلِكَ تَخْفِيْفٌ مِّنْ رَّبِّكُمْ وَرَحْمَةٌ  ۗفَمَنِ اعْتَدٰى بَعْدَ ذٰلِكَ فَلَهٗ عَذَابٌ اَلِيْمٌ ",
        "latin": "Yā ayyuhal-lażīna āmanū kutiba ‘alaikumul-qiṣāṣu fil-qatlā, al-ḥurru bil-ḥurri wal-‘abdu bil-‘abdi wal-unṡā bil-unṡā, faman ‘ufiya lahū min akhīhi syai'un fattibā‘um bil-ma‘rūfi wa adā'un ilaihi bi iḥsān(in), żālika takhfīfum mir rabbikum wa raḥmah(tun), fa mani‘tadā ba‘da żālika fa lahū ‘ażābun alīm(un).  ",
        "translation": "Wahai orang-orang yang beriman, diwajibkan kepadamu (melaksanakan) kisas berkenaan dengan orang-orang yang dibunuh. Orang merdeka dengan orang merdeka, hamba sahaya dengan hamba sahaya, dan perempuan dengan perempuan. Siapa yang memperoleh maaf dari saudaranya hendaklah mengikutinya dengan cara yang patut dan hendaklah menunaikan kepadanya dengan cara yang baik. Yang demikian itu adalah keringanan dan rahmat dari Tuhanmu. Siapa yang melampaui batas setelah itu, maka ia akan mendapat azab yang sangat pedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002178.mp3",
        "translation_en": "O you who have believed, prescribed for you is legal retribution for those murdered - the free for the free, the slave for the slave, and the female for the female. But whoever overlooks from his brother anything, then there should be a suitable follow-up and payment to him with good conduct. This is an alleviation from your Lord and a mercy. But whoever transgresses after that will have a painful punishment."
      },
      {
        "number": 179,
        "arabic": "وَلَكُمْ فِى الْقِصَاصِ حَيٰوةٌ يّٰٓاُولِى الْاَلْبَابِ لَعَلَّكُمْ تَتَّقُوْنَ ",
        "latin": "Wa lakum fil-qiṣāṣi ḥayātuy yā ulil-albābi la‘allakum tattaqūn(a).  ",
        "translation": "Dalam kisas itu ada (jaminan) kehidupan bagimu, wahai orang-orang yang berakal agar kamu bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002179.mp3",
        "translation_en": "And there is for you in legal retribution [saving of] life, O you [people] of understanding, that you may become righteous."
      },
      {
        "number": 180,
        "arabic": "كُتِبَ عَلَيْكُمْ اِذَا حَضَرَ اَحَدَكُمُ الْمَوْتُ اِنْ تَرَكَ خَيْرًا ۖ ۨالْوَصِيَّةُ لِلْوَالِدَيْنِ وَالْاَقْرَبِيْنَ بِالْمَعْرُوْفِۚ حَقًّا عَلَى الْمُتَّقِيْنَ ۗ  ",
        "latin": "Kutiba ‘alaikum iżā ḥaḍara aḥadakumul-mautu in taraka kahirā(n), al-waṣiyyatu lil-wālidaini wal-aqrabīna bil-ma‘rūf(i), ḥaqqan ‘alal-muttaqīn(a).  ",
        "translation": "Diwajibkan kepadamu, apabila seseorang di antara kamu didatangi (tanda-tanda) maut sedang dia meninggalkan kebaikan (harta yang banyak), berwasiat kepada kedua orang tua dan karib kerabat dengan cara yang patut (sebagai) kewajiban bagi orang-orang yang bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002180.mp3",
        "translation_en": "Prescribed for you when death approaches [any] one of you if he leaves wealth [is that he should make] a bequest for the parents and near relatives according to what is acceptable - a duty upon the righteous."
      },
      {
        "number": 181,
        "arabic": "فَمَنْۢ بَدَّلَهٗ بَعْدَمَا سَمِعَهٗ فَاِنَّمَآ اِثْمُهٗ عَلَى الَّذِيْنَ يُبَدِّلُوْنَهٗ ۗ اِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ ۗ  ",
        "latin": "Famam baddalahū ba‘da mā sami‘ahū fa innamā iṡmuhū ‘alal-lażīna yubaddilūnah(ū), innallāha samī‘un ‘alīm(un).  ",
        "translation": "Siapa yang mengubahnya (wasiat itu), setelah mendengarnya, sesungguhnya dosanya hanya bagi orang yang mengubahnya. Sesungguhnya Allah Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002181.mp3",
        "translation_en": "Then whoever alters the bequest after he has heard it - the sin is only upon those who have altered it. Indeed, Allah is Hearing and Knowing."
      },
      {
        "number": 182,
        "arabic": "فَمَنْ خَافَ مِنْ مُّوْصٍ جَنَفًا اَوْ اِثْمًا فَاَصْلَحَ بَيْنَهُمْ فَلَآ اِثْمَ عَلَيْهِ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ ࣖ ",
        "latin": "Faman khāfa mim mūṣin janafan au iṡman fa aṣlaḥa bainahum falā iṡma ‘alaih(i), innallāha gafūrur raḥīm(un).  ",
        "translation": "Akan tetapi, siapa yang khawatir terhadap pewasiat (akan berlaku) tidak adil atau berbuat dosa, lalu dia mendamaikan mereka, dia tidak berdosa. Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002182.mp3",
        "translation_en": "But if one fears from the bequeather [some] error or sin and corrects that which is between them, there is no sin upon him. Indeed, Allah is Forgiving and Merciful."
      },
      {
        "number": 183,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ",
        "latin": "Yā ayyuhal-lażīna āmanū kutiba ‘alaikumuṣ-ṣiyāmu kamā kutiba ‘alal-lażīna min qablikum la‘allakum tattaqūn(a).  ",
        "translation": "Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002183.mp3",
        "translation_en": "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -"
      },
      {
        "number": 184,
        "arabic": "اَيَّامًا مَّعْدُوْدٰتٍۗ فَمَنْ كَانَ مِنْكُمْ مَّرِيْضًا اَوْ عَلٰى سَفَرٍ فَعِدَّةٌ مِّنْ اَيَّامٍ اُخَرَ ۗوَعَلَى الَّذِيْنَ يُطِيْقُوْنَهٗ فِدْيَةٌ طَعَامُ مِسْكِيْنٍۗ فَمَنْ تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَّهٗ ۗوَاَنْ تَصُوْمُوْا خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ تَعْلَمُوْنَ",
        "latin": "Ayyāmam ma‘dūdāt(in), faman kāna minkum marīḍan au ‘alā safarin fa ‘iddatum min ayyāmin ukhar(a), wa ‘alal-lażīna yuṭīqūnahū fidyatun ṭa‘āmu miskīn(in), faman taṭawwa‘a khairan fahuwa khairul lah(ū), wa an taṣūmū khairul lakum in kuntum ta‘lamūn(a). ",
        "translation": "(Yaitu) beberapa hari tertentu. Maka, siapa di antara kamu sakit atau dalam perjalanan (lalu tidak berpuasa), (wajib mengganti) sebanyak hari (yang dia tidak berpuasa itu) pada hari-hari yang lain. Bagi orang yang berat menjalankannya, wajib membayar fidyah, (yaitu) memberi makan seorang miskin. Siapa dengan kerelaan hati mengerjakan kebajikan, itu lebih baik baginya dan berpuasa itu lebih baik bagimu jika kamu mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002184.mp3",
        "translation_en": "[Fasting for] a limited number of days. So whoever among you is ill or on a journey [during them] - then an equal number of days [are to be made up]. And upon those who are able [to fast, but with hardship] - a ransom [as substitute] of feeding a poor person [each day]. And whoever volunteers excess - it is better for him. But to fast is best for you, if you only knew."
      },
      {
        "number": 185,
        "arabic": "شَهْرُ رَمَضَانَ الَّذِيْٓ اُنْزِلَ فِيْهِ الْقُرْاٰنُ هُدًى لِّلنَّاسِ وَبَيِّنٰتٍ مِّنَ الْهُدٰى وَالْفُرْقَانِۚ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ ۗوَمَنْ كَانَ مَرِيْضًا اَوْ عَلٰى سَفَرٍ فَعِدَّةٌ مِّنْ اَيَّامٍ اُخَرَ ۗيُرِيْدُ اللّٰهُ بِكُمُ الْيُسْرَ وَلَا يُرِيْدُ بِكُمُ الْعُسْرَ ۖوَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللّٰهَ عَلٰى مَا هَدٰىكُمْ وَلَعَلَّكُمْ تَشْكُرُوْنَ ",
        "latin": "Syahru ramaḍānal-lażī unzila fīhil-qur'ānu hudal lin-nāsi wa bayyinātim minal-hudā wal-furqān(i), faman syahida minkumusy-syahra falyaṣumh(u) wa man kāna marīḍan au ‘alā safarin fa ‘iddatum min ayyāmin ukhar(a), yurīdullāhu bikumul-yusra wa lā yurīdu bikumul-‘usr(a), wa litukmilul-‘iddata wa litukabbirullāha ‘alā mā hadākum wa la‘allakum tasykurūn(a).  ",
        "translation": "Bulan Ramadan adalah (bulan) yang di dalamnya diturunkan Al-Qur’an sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu serta pembeda (antara yang hak dan yang batil). Oleh karena itu, siapa di antara kamu hadir (di tempat tinggalnya atau bukan musafir) pada bulan itu, berpuasalah. Siapa yang sakit atau dalam perjalanan (lalu tidak berpuasa), maka (wajib menggantinya) sebanyak hari (yang ditinggalkannya) pada hari-hari yang lain. Allah menghendaki kemudahan bagimu dan tidak menghendaki kesukaran. Hendaklah kamu mencukupkan bilangannya dan mengagungkan Allah atas petunjuk-Nya yang diberikan kepadamu agar kamu bersyukur.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002185.mp3",
        "translation_en": "The month of Ramadhan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion. So whoever sights [the new moon of] the month, let him fast it; and whoever is ill or on a journey - then an equal number of other days. Allah intends for you ease and does not intend for you hardship and [wants] for you to complete the period and to glorify Allah for that [to] which He has guided you; and perhaps you will be grateful."
      },
      {
        "number": 186,
        "arabic": "وَاِذَا سَاَلَكَ عِبَادِيْ عَنِّيْ فَاِنِّيْ قَرِيْبٌ ۗ اُجِيْبُ دَعْوَةَ الدَّاعِ اِذَا دَعَانِۙ فَلْيَسْتَجِيْبُوْا لِيْ وَلْيُؤْمِنُوْا بِيْ لَعَلَّهُمْ يَرْشُدُوْنَ ",
        "latin": "Wa iżā sa'alaka ‘ibādī ‘annī fa innī qarīb(un),  ujību da‘watad-dā‘i iżā da‘ān(i), falyastajībū lī walyu'minū bī la‘allahum yarsyudūn(a).  ",
        "translation": "Apabila hamba-hamba-Ku bertanya kepadamu (Nabi Muhammad) tentang Aku, sesungguhnya Aku dekat. Aku mengabulkan permohonan orang yang berdoa apabila dia berdoa kepada-Ku. Maka, hendaklah mereka memenuhi (perintah)-Ku dan beriman kepada-Ku agar mereka selalu berada dalam kebenaran.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002186.mp3",
        "translation_en": "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided."
      },
      {
        "number": 187,
        "arabic": "اُحِلَّ لَكُمْ لَيْلَةَ الصِّيَامِ الرَّفَثُ اِلٰى نِسَاۤىِٕكُمْ ۗ هُنَّ لِبَاسٌ لَّكُمْ وَاَنْتُمْ لِبَاسٌ لَّهُنَّ ۗ عَلِمَ اللّٰهُ اَنَّكُمْ كُنْتُمْ تَخْتَانُوْنَ اَنْفُسَكُمْ فَتَابَ عَلَيْكُمْ وَعَفَا عَنْكُمْ ۚ فَالْـٰٔنَ بَاشِرُوْهُنَّ وَابْتَغُوْا مَا كَتَبَ اللّٰهُ لَكُمْ ۗ وَكُلُوْا وَاشْرَبُوْا حَتّٰى يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْاَبْيَضُ مِنَ الْخَيْطِ الْاَسْوَدِ مِنَ الْفَجْرِۖ  ثُمَّ اَتِمُّوا الصِّيَامَ اِلَى الَّيْلِۚ وَلَا تُبَاشِرُوْهُنَّ وَاَنْتُمْ عٰكِفُوْنَۙ فِى الْمَسٰجِدِ ۗ تِلْكَ حُدُوْدُ اللّٰهِ فَلَا تَقْرَبُوْهَاۗ  كَذٰلِكَ يُبَيِّنُ اللّٰهُ اٰيٰتِهٖ لِلنَّاسِ لَعَلَّهُمْ يَتَّقُوْنَ",
        "latin": "Uḥilla lakum lailataṣ-ṣiyāmir-rafaṡu ilā nisā'ikum, hunna libāsul lakum wa antum libāsul lahunn(a), ‘alimallāhu annakum kuntum takhtānūna anfusakum fatāba ‘alaikum wa ‘afā ‘ankum, fal-āna bāsyirūhunna wabtagū mā kataballāhu lakum, wa kulū wasyrabū ḥattā yatabayyana lakumul-khaiṭul-abyaḍu minal-khaiṭil-aswadi minal-fajr(i), ṡumma atimmuṣ-ṣiyāma ilal-lail(i), wa lā tubāsyirūhunna wa antum ‘ākifūna fil-masājid(i) tilka ḥudūdullāhi falā taqrabūhā, każālika yubayyinullāhu āyātihī lin-nāsi la‘allahum yattaqūn(a).  ",
        "translation": "Dihalalkan bagimu pada malam puasa bercampur dengan istrimu. Mereka adalah pakaian bagimu dan kamu adalah pakaian bagi mereka. Allah mengetahui bahwa kamu tidak dapat menahan dirimu sendiri, tetapi Dia menerima tobatmu dan memaafkanmu. Maka, sekarang campurilah mereka dan carilah apa yang telah ditetapkan Allah bagimu. Makan dan minumlah hingga jelas bagimu (perbedaan) antara benang putih dan benang hitam, yaitu fajar. Kemudian, sempurnakanlah puasa sampai (datang) malam. Akan tetapi, jangan campuri mereka ketika kamu (dalam keadaan) beriktikaf di masjid. Itulah batas-batas (ketentuan) Allah. Maka, janganlah kamu mendekatinya. Demikianlah Allah menerangkan ayat-ayat-Nya kepada manusia agar mereka bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002187.mp3",
        "translation_en": "It has been made permissible for you the night preceding fasting to go to your wives [for sexual relations]. They are clothing for you and you are clothing for them. Allah knows that you used to deceive yourselves, so He accepted your repentance and forgave you. So now, have relations with them and seek that which Allah has decreed for you. And eat and drink until the white thread of dawn becomes distinct to you from the black thread [of night]. Then complete the fast until the sunset. And do not have relations with them as long as you are staying for worship in the mosques. These are the limits [set by] Allah, so do not approach them. Thus does Allah make clear His ordinances to the people that they may become righteous."
      },
      {
        "number": 188,
        "arabic": "وَلَا تَأْكُلُوْٓا اَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوْا بِهَآ اِلَى الْحُكَّامِ لِتَأْكُلُوْا فَرِيْقًا مِّنْ اَمْوَالِ النَّاسِ بِالْاِثْمِ وَاَنْتُمْ تَعْلَمُوْنَ ࣖ",
        "latin": "Wa lā ta'kulū amwālakum bainakum bil-bāṭili wa tudlū bihā ilal-ḥukkāmi lita'kulū farīqam min amwālin-nāsi bil-iṡmi wa antum ta‘lamūn(a).  ",
        "translation": "Janganlah kamu makan harta di antara kamu dengan jalan yang batil dan (janganlah) kamu membawa (urusan) harta itu kepada para hakim dengan maksud agar kamu dapat memakan sebagian harta orang lain itu dengan jalan dosa, padahal kamu mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002188.mp3",
        "translation_en": "And do not consume one another's wealth unjustly or send it [in bribery] to the rulers in order that [they might aid] you [to] consume a portion of the wealth of the people in sin, while you know [it is unlawful]."
      },
      {
        "number": 189,
        "arabic": "۞ يَسْـَٔلُوْنَكَ عَنِ الْاَهِلَّةِ ۗ قُلْ هِيَ مَوَاقِيْتُ لِلنَّاسِ وَالْحَجِّ ۗ وَلَيْسَ الْبِرُّ بِاَنْ تَأْتُوا الْبُيُوْتَ مِنْ ظُهُوْرِهَا وَلٰكِنَّ الْبِرَّ مَنِ اتَّقٰىۚ وَأْتُوا الْبُيُوْتَ مِنْ اَبْوَابِهَا ۖ وَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُوْنَ ",
        "latin": "Yas'alūnaka ‘anil-ahillah(ti), qul hiya mawāqītu lin-nāsi wal-ḥajj(i), wa laisal-birru  bi'an ta'tul-buyūta  min ẓuhūrihā  wa lākinnal-birra manittaqā, wa'tul-buyūta min abwābihā, wattaqullāha la‘allakum tufliḥūn(a). ",
        "translation": "Mereka bertanya kepadamu (Nabi Muhammad) tentang bulan sabit. Katakanlah, “Itu adalah (penunjuk) waktu bagi manusia dan (ibadah) haji.” Bukanlah suatu kebajikan memasuki rumah dari belakangnya, tetapi kebajikan itu adalah (kebajikan) orang yang bertakwa. Masukilah rumah-rumah dari pintu-pintunya, dan bertakwalah kepada Allah agar kamu beruntung.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002189.mp3",
        "translation_en": "They ask you, [O Muhammad], about the new moons. Say, \"They are measurements of time for the people and for Hajj.\" And it is not righteousness to enter houses from the back, but righteousness is [in] one who fears Allah. And enter houses from their doors. And fear Allah that you may succeed."
      },
      {
        "number": 190,
        "arabic": "وَقَاتِلُوْا فِيْ سَبِيْلِ اللّٰهِ الَّذِيْنَ يُقَاتِلُوْنَكُمْ وَلَا تَعْتَدُوْا ۗ اِنَّ اللّٰهَ لَا يُحِبُّ الْمُعْتَدِيْنَ ",
        "latin": "Wa qātilū fī sabīlillāhil-lażīna yuqātilūnakum wa lā ta‘tadū, innallāha lā yuḥibbul-mu‘tadīn(a).  ",
        "translation": "Perangilah di jalan Allah orang-orang yang memerangi kamu dan jangan melampaui batas. Sesungguhnya Allah tidak menyukai orang-orang yang melampaui batas.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002190.mp3",
        "translation_en": "Fight in the way of Allah those who fight you but do not transgress. Indeed. Allah does not like transgressors."
      },
      {
        "number": 191,
        "arabic": "وَاقْتُلُوْهُمْ حَيْثُ ثَقِفْتُمُوْهُمْ وَاَخْرِجُوْهُمْ مِّنْ حَيْثُ اَخْرَجُوْكُمْ وَالْفِتْنَةُ اَشَدُّ مِنَ الْقَتْلِ ۚ وَلَا تُقٰتِلُوْهُمْ عِنْدَ الْمَسْجِدِ الْحَرَامِ حَتّٰى يُقٰتِلُوْكُمْ فِيْهِۚ فَاِنْ قٰتَلُوْكُمْ فَاقْتُلُوْهُمْۗ  كَذٰلِكَ جَزَاۤءُ الْكٰفِرِيْنَ ",
        "latin": "Waqtulūhum ḥaiṡu ṡaqiftumūhum wa akhrijūhum min ḥaiṡu akhrajūkum wal-fitnatu asyaddu minal-qatl(i), wa lā tuqātilūhum ‘indal-masjidil-ḥarāmi ḥattā yuqātilūkum fīh(i), fa'in qātalūkum faqtulūhum,  każālika jazā'ul-kāfirīn(a).  ",
        "translation": "Bunuhlah mereka (yang memerangimu) di mana pun kamu jumpai dan usirlah mereka dari tempat mereka mengusirmu. Padahal, fitnah itu lebih kejam daripada pembunuhan. Lalu janganlah kamu perangi mereka di Masjidilharam, kecuali jika mereka memerangimu di tempat itu. Jika mereka memerangimu, maka perangilah mereka. Demikianlah balasan bagi orang-orang kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002191.mp3",
        "translation_en": "And kill them wherever you overtake them and expel them from wherever they have expelled you, and fitnah is worse than killing. And do not fight them at al-Masjid al- Haram until they fight you there. But if they fight you, then kill them. Such is the recompense of the disbelievers."
      },
      {
        "number": 192,
        "arabic": "فَاِنِ انْتَهَوْا فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ ",
        "latin": "Fa'inintahau fa'innallāha gafūrur raḥīm(un). ",
        "translation": "Namun, jika mereka berhenti (memusuhimu), sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002192.mp3",
        "translation_en": "And if they cease, then indeed, Allah is Forgiving and Merciful."
      },
      {
        "number": 193,
        "arabic": "وَقٰتِلُوْهُمْ حَتّٰى لَا تَكُوْنَ فِتْنَةٌ وَّيَكُوْنَ الدِّيْنُ لِلّٰهِ ۗ فَاِنِ انْتَهَوْا فَلَا عُدْوَانَ اِلَّا عَلَى الظّٰلِمِيْنَ",
        "latin": "Wa qātilūhum ḥattā lā takūna fitnatuw wa yakūnad-dīnu lillāh(i), fa inintahau falā ‘udwāna illā ‘alaẓ-ẓālimīn(a).  ",
        "translation": "Perangilah mereka itu sampai tidak ada lagi fitnah dan agama (ketaatan) hanya bagi Allah semata. Jika mereka berhenti (melakukan fitnah), tidak ada (lagi) permusuhan, kecuali terhadap orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002193.mp3",
        "translation_en": "Fight them until there is no [more] fitnah and [until] worship is [acknowledged to be] for Allah. But if they cease, then there is to be no aggression except against the oppressors."
      },
      {
        "number": 194,
        "arabic": "اَلشَّهْرُ الْحَرَامُ بِالشَّهْرِ الْحَرَامِ وَالْحُرُمٰتُ قِصَاصٌۗ فَمَنِ اعْتَدٰى عَلَيْكُمْ فَاعْتَدُوْا عَلَيْهِ بِمِثْلِ مَا اعْتَدٰى عَلَيْكُمْ ۖ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ مَعَ الْمُتَّقِيْنَ ",
        "latin": "Asy-syahrul-ḥarāmu bisy-syahril-ḥarāmi wal-ḥurumātu qiṣāṣ(un), famani‘tadā ‘alaikum fa‘tadū ‘alaihi bimiṡli ma‘tadā ‘alaikum, wattaqullāha wa‘lamū annallāha ma‘al-muttaqīn(a).  ",
        "translation": "Bulan haram dengan bulan haram dan (terhadap) sesuatu yang dihormati berlaku (hukum) kisas. Oleh sebab itu, siapa yang menyerang kamu, seranglah setimpal dengan serangannya terhadapmu. Bertakwalah kepada Allah dan ketahuilah bahwa Allah bersama orang-orang yang bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002194.mp3",
        "translation_en": "[Fighting in] the sacred month is for [aggression committed in] the sacred month, and for [all] violations is legal retribution. So whoever has assaulted you, then assault him in the same way that he has assaulted you. And fear Allah and know that Allah is with those who fear Him."
      },
      {
        "number": 195,
        "arabic": "وَاَنْفِقُوْا فِيْ سَبِيْلِ اللّٰهِ وَلَا تُلْقُوْا بِاَيْدِيْكُمْ اِلَى التَّهْلُكَةِ ۛ وَاَحْسِنُوْا ۛ اِنَّ اللّٰهَ يُحِبُّ الْمُحْسِنِيْنَ ",
        "latin": "Wa anfiqū fī sabīlillāhi wa lā tulqū bi'aidīkum ilat-tahlukah(ti), wa aḥsinū, innallāha yuḥibbul-muḥsinīn(a).  ",
        "translation": "Berinfaklah di jalan Allah, janganlah jerumuskan dirimu ke dalam kebinasaan, dan berbuatbaiklah. Sesungguhnya Allah menyukai orang-orang yang berbuat baik.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002195.mp3",
        "translation_en": "And spend in the way of Allah and do not throw [yourselves] with your [own] hands into destruction [by refraining]. And do good; indeed, Allah loves the doers of good."
      },
      {
        "number": 196,
        "arabic": "وَاَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلّٰهِ ۗ فَاِنْ اُحْصِرْتُمْ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِۚ وَلَا تَحْلِقُوْا رُءُوْسَكُمْ حَتّٰى يَبْلُغَ الْهَدْيُ مَحِلَّهٗ ۗ فَمَنْ كَانَ مِنْكُمْ مَّرِيْضًا اَوْ بِهٖٓ اَذًى مِّنْ رَّأْسِهٖ فَفِدْيَةٌ مِّنْ صِيَامٍ اَوْ صَدَقَةٍ اَوْ نُسُكٍ ۚ فَاِذَآ اَمِنْتُمْ ۗ فَمَنْ تَمَتَّعَ بِالْعُمْرَةِ اِلَى الْحَجِّ فَمَا اسْتَيْسَرَ مِنَ الْهَدْيِۚ فَمَنْ لَّمْ يَجِدْ فَصِيَامُ ثَلٰثَةِ اَيَّامٍ فِى الْحَجِّ وَسَبْعَةٍ اِذَا رَجَعْتُمْ ۗ تِلْكَ عَشَرَةٌ كَامِلَةٌ  ۗذٰلِكَ لِمَنْ لَّمْ يَكُنْ اَهْلُهٗ حَاضِرِى الْمَسْجِدِ الْحَرَامِ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ ࣖ",
        "latin": "Wa atimmul-ḥajja wal-‘umrata lillāh(i), fa'in uḥṣirtum famastaisara minal-hady(i), wa lā taḥliqū ru'ūsakum ḥattā yablugal-hadyu maḥillah(ū), faman kāna minkum marīḍan au bihī ażam mir ra'sihī fafidyatum min ṣiyāmin au ṣadaqatin au nusuk(in), fa'iżā amintum, faman tamatta‘a bil-‘umrati ilal-ḥajji famastaisara minal-hady(i), famal lam yajid faṣiyāmu ṡalāṡati ayyāmin fil-ḥajji wa sab‘atin iżā raja‘tum, tilka ‘asyaratun kāmilah(tun), żālika limal lam yakun ahluhū ḥāḍiril-masjidil-ḥarām(i), wattaqullāha wa‘lamū annallāha syadīdul-‘iqāb(i).  ",
        "translation": "Sempurnakanlah ibadah haji dan umrah karena Allah. Akan tetapi, jika kamu terkepung (oleh musuh), (sembelihlah) hadyu yang mudah didapat dan jangan mencukur (rambut) kepalamu sebelum hadyu sampai di tempat penyembelihannya. Jika ada di antara kamu yang sakit atau ada gangguan di kepala (lalu dia bercukur), dia wajib berfidyah, yaitu berpuasa, bersedekah, atau berkurban. Apabila kamu dalam keadaan aman, siapa yang mengerjakan umrah sebelum haji (tamatu’), dia (wajib menyembelih) hadyu yang mudah didapat. Akan tetapi, jika tidak mendapatkannya, dia (wajib) berpuasa tiga hari dalam (masa) haji dan tujuh (hari) setelah kamu kembali. Itulah sepuluh hari yang sempurna. Ketentuan itu berlaku bagi orang yang keluarganya tidak menetap di sekitar Masjidilharam. Bertakwalah kepada Allah dan ketahuilah bahwa Allah Maha Keras hukuman-Nya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002196.mp3",
        "translation_en": "And complete the Hajj and 'umrah for Allah. But if you are prevented, then [offer] what can be obtained with ease of sacrificial animals. And do not shave your heads until the sacrificial animal has reached its place of slaughter. And whoever among you is ill or has an ailment of the head [making shaving necessary must offer] a ransom of fasting [three days] or charity or sacrifice. And when you are secure, then whoever performs 'umrah [during the Hajj months] followed by Hajj [offers] what can be obtained with ease of sacrificial animals. And whoever cannot find [or afford such an animal] - then a fast of three days during Hajj and of seven when you have returned [home]. Those are ten complete [days]. This is for those whose family is not in the area of al-Masjid al-Haram. And fear Allah and know that Allah is severe in penalty."
      },
      {
        "number": 197,
        "arabic": "اَلْحَجُّ اَشْهُرٌ مَّعْلُوْمٰتٌ ۚ فَمَنْ فَرَضَ فِيْهِنَّ الْحَجَّ فَلَا رَفَثَ وَلَا فُسُوْقَ وَلَا جِدَالَ فِى الْحَجِّ ۗ وَمَا تَفْعَلُوْا مِنْ خَيْرٍ يَّعْلَمْهُ اللّٰهُ ۗ وَتَزَوَّدُوْا فَاِنَّ خَيْرَ الزَّادِ التَّقْوٰىۖ وَاتَّقُوْنِ يٰٓاُولِى الْاَلْبَابِ",
        "latin": "Al-ḥajju asyhurum ma‘lūmāt(un), faman faraḍa fīhinnal-ḥajja falā rafaṡa wa lā fusūqa wa lā jidāla fil-ḥajj(i), wa mā taf‘alū min khairiy ya‘lamhullāh(u), wa tazawwadū fa'inna khairaz-zādit-taqwā, wattaqūni yā ulil-albāb(i).  ",
        "translation": "(Musim) haji itu (berlangsung pada) bulan-bulan yang telah dimaklumi. Siapa yang mengerjakan (ibadah) haji dalam (bulan-bulan) itu, janganlah berbuat rafaṡ, berbuat maksiat, dan bertengkar dalam (melakukan ibadah) haji. Segala kebaikan yang kamu kerjakan (pasti) Allah mengetahuinya. Berbekallah karena sesungguhnya sebaik-baik bekal adalah takwa. Bertakwalah kepada-Ku wahai orang-orang yang mempunyai akal sehat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002197.mp3",
        "translation_en": "Hajj is [during] well-known months, so whoever has made Hajj obligatory upon himself therein [by entering the state of ihram], there is [to be for him] no sexual relations and no disobedience and no disputing during Hajj. And whatever good you do - Allah knows it. And take provisions, but indeed, the best provision is fear of Allah. And fear Me, O you of understanding."
      },
      {
        "number": 198,
        "arabic": "لَيْسَ عَلَيْكُمْ جُنَاحٌ اَنْ تَبْتَغُوْا فَضْلًا مِّنْ رَّبِّكُمْ ۗ فَاِذَآ اَفَضْتُمْ مِّنْ عَرَفٰتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ ۖ وَاذْكُرُوْهُ كَمَا هَدٰىكُمْ ۚ وَاِنْ كُنْتُمْ مِّنْ قَبْلِهٖ لَمِنَ الضَّاۤلِّيْنَ ",
        "latin": "Laisa ‘alaikum junāḥun an tabtagū faḍlam mir rabbikum, fa'iżā afaḍtum min ‘arafātin fażkurullāha ‘indal-masy‘aril-ḥarām(i), ważkurūhu kamā hadākum, wa in kuntum min qablihī laminaḍ-ḍāllīn(a).  ",
        "translation": "Bukanlah suatu dosa bagimu mencari karunia dari Tuhanmu (pada musim haji). Apabila kamu bertolak dari Arafah, berzikirlah kepada Allah di Masyarilharam. Berzikirlah kepada-Nya karena Dia telah memberi petunjuk kepadamu meskipun sebelumnya kamu benar-benar termasuk orang-orang yang sesat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002198.mp3",
        "translation_en": "There is no blame upon you for seeking bounty from your Lord [during Hajj]. But when you depart from 'Arafat, remember Allah at al- Mash'ar al-Haram. And remember Him, as He has guided you, for indeed, you were before that among those astray."
      },
      {
        "number": 199,
        "arabic": "ثُمَّ اَفِيْضُوْا مِنْ حَيْثُ اَفَاضَ النَّاسُ وَاسْتَغْفِرُوا اللّٰهَ ۗ اِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ",
        "latin": "Ṡumma afīḍū min ḥaiṡu afāḍan-nāsu wastagfirullāh(a), innallāha gafūrur raḥīm(un).  ",
        "translation": "Kemudian, bertolaklah kamu dari tempat orang-orang bertolak (Arafah) dan mohonlah ampunan kepada Allah. Sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002199.mp3",
        "translation_en": "Then depart from the place from where [all] the people depart and ask forgiveness of Allah. Indeed, Allah is Forgiving and Merciful."
      },
      {
        "number": 200,
        "arabic": "فَاِذَا قَضَيْتُمْ مَّنَاسِكَكُمْ فَاذْكُرُوا اللّٰهَ كَذِكْرِكُمْ اٰبَاۤءَكُمْ اَوْ اَشَدَّ ذِكْرًا ۗ فَمِنَ النَّاسِ مَنْ يَّقُوْلُ رَبَّنَآ اٰتِنَا فِى الدُّنْيَا وَمَا لَهٗ فِى الْاٰخِرَةِ مِنْ خَلَاقٍ ",
        "latin": "Fa iżā qaḍaitum manāsikakum fażkurullāha każikrikum ābā'akum au asyadda żikrā(n), faminan-nāsi may yaqūlu rabbanā ātinā fid-dun-yā wa mā lahū fil-ākhirati min khalāq(in).  ",
        "translation": "Apabila kamu telah menyelesaikan manasik (rangkaian ibadah) haji, berzikirlah kepada Allah sebagaimana kamu menyebut-nyebut nenek moyang kamu, bahkan berzikirlah lebih dari itu. Di antara manusia ada yang berdoa, “Ya Tuhan kami, berilah kami (kebaikan) di dunia,” sedangkan di akhirat dia tidak memperoleh bagian apa pun.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002200.mp3",
        "translation_en": "And when you have completed your rites, remember Allah like your [previous] remembrance of your fathers or with [much] greater remembrance. And among the people is he who says, \"Our Lord, give us in this world,\" and he will have in the Hereafter no share."
      },
      {
        "number": 201,
        "arabic": "وَمِنْهُمْ مَّنْ يَّقُوْلُ رَبَّنَآ اٰتِنَا فِى الدُّنْيَا حَسَنَةً وَّفِى الْاٰخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ ",
        "latin": "Wa minhum may yaqūlu rabbanā ātinā fid-dun-yā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā ‘ażāban-nār(i).  ",
        "translation": "Di antara mereka ada juga yang berdoa, “Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat serta lindungilah kami dari azab neraka.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002201.mp3",
        "translation_en": "But among them is he who says, \"Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.\""
      },
      {
        "number": 202,
        "arabic": "اُولٰۤىِٕكَ لَهُمْ نَصِيْبٌ مِّمَّا كَسَبُوْا ۗ وَاللّٰهُ سَرِيْعُ الْحِسَابِ ",
        "latin": "Ulā'ika lahum naṣībum mimmā kasabū, wallāhu sarī‘ul-ḥisāb(i).  ",
        "translation": "Mereka itulah yang memperoleh bagian dari apa yang telah mereka kerjakan. Allah Maha Cepat perhitungan-Nya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002202.mp3",
        "translation_en": "Those will have a share of what they have earned, and Allah is swift in account."
      },
      {
        "number": 203,
        "arabic": "۞ وَاذْكُرُوا اللّٰهَ فِيْٓ اَيَّامٍ مَّعْدُوْدٰتٍ ۗ فَمَنْ تَعَجَّلَ فِيْ يَوْمَيْنِ فَلَآ اِثْمَ عَلَيْهِ ۚوَمَنْ تَاَخَّرَ فَلَآ اِثْمَ عَلَيْهِۙ لِمَنِ اتَّقٰىۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّكُمْ اِلَيْهِ تُحْشَرُوْنَ ",
        "latin": "Ważkurullāha fī ayyāmim ma‘dūdāt(in), faman ta‘ajjala fī yaumaini falā iṡma ‘alaih(i), wa man ta'akhkhara falā iṡma ‘alaihi limanittaqā, wattaqullāha wa‘lamū annakum ilaihi tuḥsyarūn(a). ",
        "translation": "Berzikirlah kepada Allah pada hari yang telah ditentukan jumlahnya. Siapa yang mempercepat (meninggalkan Mina) setelah dua hari, tidak ada dosa baginya. Siapa yang mengakhirkannya tidak ada dosa (pula) baginya, (yakni) bagi orang yang bertakwa. Bertakwalah kepada Allah dan ketahuilah bahwa hanya kepada-Nya kamu akan dikumpulkan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002203.mp3",
        "translation_en": "And remember Allah during [specific] numbered days. Then whoever hastens [his departure] in two days - there is no sin upon him; and whoever delays [until the third] - there is no sin upon him - for him who fears Allah. And fear Allah and know that unto Him you will be gathered."
      },
      {
        "number": 204,
        "arabic": "وَمِنَ النَّاسِ مَنْ يُّعْجِبُكَ قَوْلُهٗ فِى الْحَيٰوةِ الدُّنْيَا وَيُشْهِدُ اللّٰهَ عَلٰى مَا فِيْ قَلْبِهٖ ۙ وَهُوَ اَلَدُّ الْخِصَامِ ",
        "latin": "Wa minan-nāsi may yu‘jibuka qauluhū fil-ḥayātid-dun-yā wa yusyhidullāha ‘alā mā fī qalbih(ī), wa huwa aladdul-khiṣām(i).  ",
        "translation": "Di antara manusia ada yang pembicaraannya tentang kehidupan dunia mengagumkan engkau (Nabi Muhammad) dan dia menjadikan Allah sebagai saksi atas (kebenaran) isi hatinya. Padahal, dia adalah penentang yang paling keras.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002204.mp3",
        "translation_en": "And of the people is he whose speech pleases you in worldly life, and he calls Allah to witness as to what is in his heart, yet he is the fiercest of opponents."
      },
      {
        "number": 205,
        "arabic": "وَاِذَا تَوَلّٰى سَعٰى فِى الْاَرْضِ لِيُفْسِدَ فِيْهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ ۗ وَ اللّٰهُ لَا يُحِبُّ الْفَسَادَ ",
        "latin": "Wa iżā tawallā sa‘ā fil-arḍi liyufsida fīhā wa yuhlikal-ḥarṡa wan-nasl(a), wallāhu lā yuḥibbul-fasād(a).  ",
        "translation": "Apabila berpaling (dari engkau atau berkuasa), dia berusaha untuk berbuat kerusakan di bumi serta merusak tanam-tanaman dan ternak. Allah tidak menyukai kerusakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002205.mp3",
        "translation_en": "And when he goes away, he strives throughout the land to cause corruption therein and destroy crops and animals. And Allah does not like corruption."
      },
      {
        "number": 206,
        "arabic": "وَاِذَا قِيْلَ لَهُ اتَّقِ اللّٰهَ اَخَذَتْهُ الْعِزَّةُ بِالْاِثْمِ فَحَسْبُهٗ جَهَنَّمُ ۗ وَلَبِئْسَ الْمِهَادُ ",
        "latin": "Wa iżā qīla lahuttaqillāha akhażathul-‘izzatu bil-iṡmi faḥasbuhū jahannam(u), wa labi'sal-mihād(u).  ",
        "translation": "Apabila dikatakan kepadanya, “Bertakwalah kepada Allah,” bangkitlah kesombongan yang menyebabkan dia berbuat dosa (lebih banyak lagi). Maka, cukuplah (balasan) baginya (neraka) Jahanam. Sungguh (neraka Jahanam) itu seburuk-buruk tempat tinggal.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002206.mp3",
        "translation_en": "And when it is said to him, \"Fear Allah,\" pride in the sin takes hold of him. Sufficient for him is Hellfire, and how wretched is the resting place."
      },
      {
        "number": 207,
        "arabic": "وَمِنَ النَّاسِ مَنْ يَّشْرِيْ نَفْسَهُ ابْتِغَاۤءَ مَرْضَاتِ اللّٰهِ ۗوَاللّٰهُ رَءُوْفٌۢ بِالْعِبَادِ ",
        "latin": "Wa minan-nāsi may yasyrī nafsahubtigā'a marḍātillāh(i), wallāhu ra'ūfum bil-‘ibād(i). ",
        "translation": "Di antara manusia ada orang yang mengorbankan dirinya untuk mencari rida Allah. Allah Maha Penyantun kepada hamba-hamba(-Nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002207.mp3",
        "translation_en": "And of the people is he who sells himself, seeking means to the approval of Allah. And Allah is kind to [His] servants."
      },
      {
        "number": 208,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا ادْخُلُوْا فِى السِّلْمِ كَاۤفَّةً  ۖوَّلَا تَتَّبِعُوْا خُطُوٰتِ الشَّيْطٰنِۗ اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِيْنٌ",
        "latin": "Yā ayyuhal-lażīna āmanudkhulū fis-silmi kāffah(tan), wa lā tattabi‘ū khuṭuwātisy-syaiṭān(i), innahū lakum ‘aduwwum mubīn(un).  ",
        "translation": "Wahai orang-orang yang beriman, masuklah ke dalam Islam (kedamaian) secara menyeluruh dan janganlah ikuti langkah-langkah setan! Sesungguhnya ia musuh yang nyata bagimu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002208.mp3",
        "translation_en": "O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."
      },
      {
        "number": 209,
        "arabic": "فَاِنْ زَلَلْتُمْ مِّنْۢ بَعْدِ مَا جَاۤءَتْكُمُ الْبَيِّنٰتُ فَاعْلَمُوْٓا اَنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ ",
        "latin": "Fa'in zalaltum mim ba‘di mā jā'atkumul-bayyinātu fa‘lamū annallāha ‘azīzun ḥakīm(un). ",
        "translation": "Maka, jika kamu menyimpang (dari jalan Allah) setelah bukti-bukti kebenaran yang nyata sampai kepadamu, ketahuilah bahwa Allah Maha Perkasa lagi Maha Bijaksana.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002209.mp3",
        "translation_en": "But if you deviate after clear proofs have come to you, then know that Allah is Exalted in Might and Wise."
      },
      {
        "number": 210,
        "arabic": "هَلْ يَنْظُرُوْنَ اِلَّآ اَنْ يَّأْتِيَهُمُ اللّٰهُ فِيْ ظُلَلٍ مِّنَ الْغَمَامِ وَالْمَلٰۤىِٕكَةُ وَقُضِيَ الْاَمْرُ ۗ وَاِلَى اللّٰهِ تُرْجَعُ الْاُمُوْرُ ࣖ",
        "latin": "Hal yanẓurūna illā ay ya'tiyahumullāhu fī ẓulalim minal-gamāmi wal-malā'ikatu wa quḍiyal-amr(u), wa ilallāhi turja‘ul-umūr(u).  ",
        "translation": "Tidak ada yang mereka tunggu-tunggu (pada hari Kiamat), kecuali kedatangan Allah dalam naungan awan bersama malaikat (untuk melakukan perhitungan), sedangkan perkara (mereka) telah diputuskan. Kepada Allahlah segala perkara dikembalikan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002210.mp3",
        "translation_en": "Do they await but that Allah should come to them in covers of clouds and the angels [as well] and the matter is [then] decided? And to Allah [all] matters are returned."
      },
      {
        "number": 211,
        "arabic": "سَلْ بَنِيْٓ اِسْرَاۤءِيْلَ كَمْ اٰتَيْنٰهُمْ مِّنْ اٰيَةٍ ۢ بَيِّنَةٍ ۗ وَمَنْ يُّبَدِّلْ نِعْمَةَ اللّٰهِ مِنْۢ بَعْدِ مَا جَاۤءَتْهُ فَاِنَّ اللّٰهَ  شَدِيْدُ الْعِقَابِ ",
        "latin": "Sal banī isrā'īla kam ātaināhum min āyatim bayyinah(tin), wa may yubaddil ni‘matallāhi mim ba‘di mā jā'athu fa innallāha syadīdul-‘iqāb(i).  ",
        "translation": "Tanyakanlah kepada Bani Israil, “Berapa banyak bukti nyata (kebenaran) yang telah Kami anugerahkan kepada mereka?” Siapa yang menukar nikmat Allah (dengan kekufuran) setelah (nikmat itu) datang kepadanya, sesungguhnya Allah Maha Keras hukuman-Nya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002211.mp3",
        "translation_en": "Ask the Children of Israel how many a sign of evidence We have given them. And whoever exchanges the favor of Allah [for disbelief] after it has come to him - then indeed, Allah is severe in penalty."
      },
      {
        "number": 212,
        "arabic": "زُيِّنَ لِلَّذِيْنَ كَفَرُوا الْحَيٰوةُ الدُّنْيَا وَيَسْخَرُوْنَ مِنَ الَّذِيْنَ اٰمَنُوْا ۘ وَالَّذِيْنَ اتَّقَوْا فَوْقَهُمْ يَوْمَ الْقِيٰمَةِ ۗ وَاللّٰهُ يَرْزُقُ مَنْ يَّشَاۤءُ بِغَيْرِ حِسَابٍ",
        "latin": "Zuyyina lil-lażīna kafarul-ḥayātud-dun-yā wa yaskharūna minal-lażīna āmanū, wal-lażīnattaqau fauqahum yaumal-qiyāmah(ti), wallāhu yarzuqu may yasyā'u bigairi ḥisāb(in).  ",
        "translation": "Kehidupan dunia dijadikan terasa indah dalam pandangan orang-orang yang kufur dan mereka (terus) menghina orang-orang yang beriman. Padahal orang-orang yang bertakwa itu berada di atas mereka pada hari Kiamat. Allah memberi rezeki kepada orang yang Dia kehendaki tanpa perhitungan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002212.mp3",
        "translation_en": "Beautified for those who disbelieve is the life of this world, and they ridicule those who believe. But those who fear Allah are above them on the Day of Resurrection. And Allah gives provision to whom He wills without account."
      },
      {
        "number": 213,
        "arabic": "كَانَ النَّاسُ اُمَّةً وَّاحِدَةً ۗ فَبَعَثَ اللّٰهُ النَّبِيّٖنَ مُبَشِّرِيْنَ وَمُنْذِرِيْنَ ۖ وَاَنْزَلَ مَعَهُمُ الْكِتٰبَ بِالْحَقِّ لِيَحْكُمَ بَيْنَ النَّاسِ فِيْمَا اخْتَلَفُوْا فِيْهِ ۗ وَمَا اخْتَلَفَ فِيْهِ اِلَّا الَّذِيْنَ اُوْتُوْهُ مِنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنٰتُ بَغْيًا ۢ بَيْنَهُمْ ۚ فَهَدَى اللّٰهُ الَّذِيْنَ اٰمَنُوْا لِمَا اخْتَلَفُوْا فِيْهِ مِنَ الْحَقِّ بِاِذْنِهٖ ۗ وَاللّٰهُ يَهْدِيْ مَنْ يَّشَاۤءُ اِلٰى صِرَاطٍ مُّسْتَقِيْمٍ ",
        "latin": "Kānan-nāsu ummataw wāḥidah(tan), fa ba‘aṡallāhun-nabiyyīna mubasysyirīna wa munżirīn(a), wa anzala ma‘ahumul-kitāba bil-ḥaqqi liyaḥkuma bainan-nāsi fīmakhtalafū fīh(i), wa makhtalafa fīhi illal-lażīna ūtūhu mim ba‘di mā jā'athumul-bayyinātu bagyam bainahum, fahadallāhul-lażīna āmanū limakhtalafū fīhi minal-ḥaqqi bi'iżnih(ī), wallāhu yahdī may yasyā'u ilā ṣirāṭim mustaqīm(in).  ",
        "translation": "Manusia itu (dahulunya) umat yang satu (dalam ketauhidan). (Setelah timbul perselisihan,) lalu Allah mengutus para nabi (untuk) menyampaikan kabar gembira dan peringatan. Allah menurunkan bersama mereka Kitab yang mengandung kebenaran untuk memberi keputusan di antara manusia tentang perkara yang mereka perselisihkan. Tidak ada yang berselisih tentangnya, kecuali orang-orang yang telah diberi (Kitab) setelah bukti-bukti yang nyata sampai kepada mereka, karena kedengkian di antara mereka sendiri. Maka, dengan kehendak-Nya, Allah memberi petunjuk kepada mereka yang beriman tentang kebenaran yang mereka perselisihkan. Allah memberi petunjuk kepada siapa yang Dia kehendaki ke jalan yang lurus (berdasarkan kesiapannya untuk menerima petunjuk).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002213.mp3",
        "translation_en": "Mankind was [of] one religion [before their deviation]; then Allah sent the prophets as bringers of good tidings and warners and sent down with them the Scripture in truth to judge between the people concerning that in which they differed. And none differed over the Scripture except those who were given it - after the clear proofs came to them - out of jealous animosity among themselves. And Allah guided those who believed to the truth concerning that over which they had differed, by His permission. And Allah guides whom He wills to a straight path."
      },
      {
        "number": 214,
        "arabic": "اَمْ حَسِبْتُمْ اَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُمْ مَّثَلُ الَّذِيْنَ خَلَوْا مِنْ قَبْلِكُمْ ۗ مَسَّتْهُمُ الْبَأْسَاۤءُ وَالضَّرَّاۤءُ وَزُلْزِلُوْا حَتّٰى يَقُوْلَ الرَّسُوْلُ وَالَّذِيْنَ اٰمَنُوْا مَعَهٗ مَتٰى نَصْرُ اللّٰهِ ۗ اَلَآ اِنَّ نَصْرَ اللّٰهِ قَرِيْبٌ ",
        "latin": "Am ḥasibtum an tadkhulul-jannata wa lammā ya'tikum maṡalul-lażīna khalau min qablikum, massathumul-ba'sā'u waḍ-ḍarrā'u wa zulzilū ḥattā yaqūlar-rasūlu wal-lażīna āmanū ma‘ahū matā naṣrullāh(i), alā inna naṣrallāhi qarīb(un).  ",
        "translation": "Apakah kamu mengira bahwa kamu akan masuk surga, padahal belum datang kepadamu (cobaan) seperti (yang dialami) orang-orang terdahulu sebelum kamu. Mereka ditimpa kemelaratan, penderitaan, dan diguncang (dengan berbagai cobaan) sehingga Rasul dan orang-orang yang beriman bersamanya berkata, “Kapankah datang pertolongan Allah?” Ingatlah, sesungguhnya pertolongan Allah itu dekat.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002214.mp3",
        "translation_en": "Or do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until [even their] messenger and those who believed with him said, \"When is the help of Allah?\" Unquestionably, the help of Allah is near."
      },
      {
        "number": 215,
        "arabic": "يَسْـَٔلُوْنَكَ مَاذَا يُنْفِقُوْنَ ۗ قُلْ مَآ اَنْفَقْتُمْ مِّنْ خَيْرٍ فَلِلْوَالِدَيْنِ وَالْاَقْرَبِيْنَ وَالْيَتٰمٰى وَالْمَسٰكِيْنِ وَابْنِ السَّبِيْلِ ۗ وَمَا تَفْعَلُوْا مِنْ خَيْرٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ ",
        "latin": "Yas'alūnaka māżā yunfiqūn(a), qul mā anfaqtum min khairin falil-wālidaini wal-aqrabīna wal-yatāmā wal-masākīni wabnis-sabīl(i), wa mā taf‘alū min khairin fa innallāha bihī ‘alīm(un).  ",
        "translation": "Mereka bertanya kepadamu (Nabi Muhammad) tentang apa yang harus mereka infakkan. Katakanlah, “Harta apa saja yang kamu infakkan, hendaknya diperuntukkan bagi kedua orang tua, kerabat, anak-anak yatim, orang-orang miskin, dan orang yang dalam perjalanan (dan membutuhkan pertolongan).” Kebaikan apa saja yang kamu kerjakan, sesungguhnya Allah Maha Mengetahuinya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002215.mp3",
        "translation_en": "They ask you, [O Muhammad], what they should spend. Say, \"Whatever you spend of good is [to be] for parents and relatives and orphans and the needy and the traveler. And whatever you do of good - indeed, Allah is Knowing of it.\""
      },
      {
        "number": 216,
        "arabic": "كُتِبَ عَلَيْكُمُ الْقِتَالُ وَهُوَ كُرْهٌ لَّكُمْ ۚ وَعَسٰٓى اَنْ تَكْرَهُوْا شَيْـًٔا وَّهُوَ خَيْرٌ لَّكُمْ ۚ وَعَسٰٓى اَنْ تُحِبُّوْا شَيْـًٔا وَّهُوَ شَرٌّ لَّكُمْ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ ࣖ",
        "latin": "Kutiba ‘alaikumul-qitālu wa huwa kurhul lakum, wa ‘asā an takrahū syai'aw wa huwa khairul lakum, wa ‘asā an tuḥibbū syai'aw wa huwa syarrul lakum, wallāhu ya‘lamu wa antum lā ta‘lamūn(a).  ",
        "translation": "Diwajibkan atasmu berperang, padahal itu kamu benci. Boleh jadi kamu membenci sesuatu, padahal itu baik bagimu dan boleh jadi kamu menyukai sesuatu, padahal itu buruk bagimu. Allah mengetahui, sedangkan kamu tidak mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002216.mp3",
        "translation_en": "Fighting has been enjoined upon you while it is hateful to you. But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah Knows, while you know not."
      },
      {
        "number": 217,
        "arabic": "يَسْـَٔلُوْنَكَ عَنِ الشَّهْرِ الْحَرَامِ قِتَالٍ فِيْهِۗ  قُلْ قِتَالٌ فِيْهِ كَبِيْرٌ ۗ وَصَدٌّ عَنْ سَبِيْلِ اللّٰهِ وَكُفْرٌۢ بِهٖ وَالْمَسْجِدِ الْحَرَامِ وَاِخْرَاجُ اَهْلِهٖ مِنْهُ اَكْبَرُ عِنْدَ اللّٰهِ ۚ وَالْفِتْنَةُ اَكْبَرُ مِنَ الْقَتْلِ ۗ وَلَا يَزَالُوْنَ يُقَاتِلُوْنَكُمْ حَتّٰى يَرُدُّوْكُمْ عَنْ دِيْنِكُمْ اِنِ اسْتَطَاعُوْا ۗ وَمَنْ يَّرْتَدِدْ مِنْكُمْ عَنْ دِيْنِهٖ فَيَمُتْ وَهُوَ كَافِرٌ فَاُولٰۤىِٕكَ حَبِطَتْ اَعْمَالُهُمْ فِى الدُّنْيَا وَالْاٰخِرَةِ ۚ وَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِۚ هُمْ فِيْهَا خٰلِدُوْنَ ",
        "latin": "Yas'alūnaka ‘anisy-syahril-ḥarāmi qitālin fīh(i), qul qitālun fīhi kabīr(un), wa ṣaddun ‘an sabīlillāhi wa kufrum bihī wal-masjidil-ḥarām(i), wa ikhrāju ahlihī minhu akbaru ‘indallāh(i), wal-fitnatu akbaru minal-qatl(i), wa lā yazālūna yuqātilūnakum ḥattā yaruddūkum ‘an dīnikum inistaṭā‘ū, wa may yartadid minkum  ‘an dīnihī fa yamut wa huwa kāfirun fa ulā'ika ḥabiṭat a‘māluhum fid-dun-yā wal-ākhirah(ti), wa ulā'ika aṣḥābun-nār(i), hum fīhā khālidūn(a).  ",
        "translation": "Mereka bertanya kepadamu (Nabi Muhammad) tentang berperang pada bulan haram. Katakanlah, “Berperang dalam bulan itu adalah (dosa) besar. Namun, menghalangi (orang) dari jalan Allah, ingkar kepada-Nya, (menghalangi orang masuk) Masjidilharam, dan mengusir penduduk dari sekitarnya, lebih besar (dosanya) dalam pandangan Allah. Fitnah (pemusyrikan dan penindasan) lebih kejam daripada pembunuhan.” Mereka tidak akan berhenti memerangi kamu sampai kamu murtad (keluar) dari agamamu jika mereka sanggup. Siapa di antara kamu yang murtad dari agamanya lalu dia mati dalam kekafiran, sia-sialah amal mereka di dunia dan akhirat. Mereka itulah penghuni neraka. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002217.mp3",
        "translation_en": "They ask you about the sacred month - about fighting therein. Say, \"Fighting therein is great [sin], but averting [people] from the way of Allah and disbelief in Him and [preventing access to] al-Masjid al-Haram and the expulsion of its people therefrom are greater [evil] in the sight of Allah. And fitnah is greater than killing.\" And they will continue to fight you until they turn you back from your religion if they are able. And whoever of you reverts from his religion [to disbelief] and dies while he is a disbeliever - for those, their deeds have become worthless in this world and the Hereafter, and those are the companions of the Fire, they will abide therein eternally."
      },
      {
        "number": 218,
        "arabic": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَالَّذِيْنَ هَاجَرُوْا وَجَاهَدُوْا فِيْ سَبِيْلِ اللّٰهِ ۙ اُولٰۤىِٕكَ يَرْجُوْنَ رَحْمَتَ اللّٰهِ ۗوَاللّٰهُ غَفُوْرٌ رَّحِيْمٌ ",
        "latin": "Innal-lażīna āmanū wal-lażīna hājarū wa jāhadū fī sabīlillāh(i), ulā'ika yarjūna raḥmatallāh(i), wallāhu gafūrur raḥīm(un).  ",
        "translation": "Sesungguhnya orang-orang yang beriman serta orang-orang yang berhijrah dan berjihad di jalan Allah, mereka itu mengharapkan rahmat Allah. Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002218.mp3",
        "translation_en": "Indeed, those who have believed and those who have emigrated and fought in the cause of Allah - those expect the mercy of Allah. And Allah is Forgiving and Merciful."
      },
      {
        "number": 219,
        "arabic": "۞ يَسْـَٔلُوْنَكَ عَنِ الْخَمْرِ وَالْمَيْسِرِۗ قُلْ فِيْهِمَآ اِثْمٌ كَبِيْرٌ وَّمَنَافِعُ لِلنَّاسِۖ وَاِثْمُهُمَآ اَكْبَرُ مِنْ نَّفْعِهِمَاۗ وَيَسْـَٔلُوْنَكَ مَاذَا يُنْفِقُوْنَ ەۗ قُلِ الْعَفْوَۗ  كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمُ الْاٰيٰتِ لَعَلَّكُمْ تَتَفَكَّرُوْنَۙ",
        "latin": "Yas'alūnaka ‘anil-khamri wal-maisir(i), qul fīhimā iṡmun kabīrw wa manāfi‘u lin nās(i), wa iṡmuhumā akbaru min naf‘ihimā, wa yas'alūnaka māżā yunfiqūn(a), qulil-‘afw(a), każālika yubayyinullāhu lakumul-āyāti la‘allakum tatafakkarūn(a).  ",
        "translation": "Mereka bertanya kepadamu (Nabi Muhammad) tentang khamar dan judi. Katakanlah, “Pada keduanya terdapat dosa besar dan beberapa manfaat bagi manusia. (Akan tetapi,) dosa keduanya lebih besar daripada manfaatnya.” Mereka (juga) bertanya kepadamu (tentang) apa yang mereka infakkan. Katakanlah, “(Yang diinfakkan adalah) kelebihan (dari apa yang diperlukan).” Demikianlah Allah menerangkan ayat-ayat-Nya kepadamu agar kamu berpikir",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002219.mp3",
        "translation_en": "They ask you about wine and gambling. Say, \"In them is great sin and [yet, some] benefit for people. But their sin is greater than their benefit.\" And they ask you what they should spend. Say, \"The excess [beyond needs].\" Thus Allah makes clear to you the verses [of revelation] that you might give thought."
      },
      {
        "number": 220,
        "arabic": "فِى الدُّنْيَا وَالْاٰخِرَةِ ۗ وَيَسْـَٔلُوْنَكَ عَنِ الْيَتٰمٰىۗ قُلْ اِصْلَاحٌ لَّهُمْ خَيْرٌ ۗ وَاِنْ تُخَالِطُوْهُمْ فَاِخْوَانُكُمْ ۗ وَاللّٰهُ يَعْلَمُ الْمُفْسِدَ مِنَ الْمُصْلِحِ ۗ وَلَوْ شَاۤءَ اللّٰهُ لَاَعْنَتَكُمْ اِنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ ",
        "latin": "Fid-dun-yā wal-ākhirah(ti), wa yas'alūnaka ‘anil-yatāmā, qul iṣlāḥul lahum khair(un), wa in tukhāliṭūhum fa'ikhwānukum, wallāhu ya‘lamul-mufsida minal-muṣliḥ(i), wa lau syā'allāhu la'a‘natakum innallāha ‘azizun ḥakīm(un).  ",
        "translation": "tentang dunia dan akhirat. Mereka bertanya kepadamu (Nabi Muhammad) tentang anak-anak yatim. Katakanlah, “Memperbaiki keadaan mereka adalah baik.” Jika kamu mempergauli mereka, mereka adalah saudara-saudaramu. Allah mengetahui orang yang berbuat kerusakan dan yang berbuat kebaikan. Seandainya Allah menghendaki, niscaya Dia mendatangkan kesulitan kepadamu. Sesungguhnya Allah Maha Perkasa lagi Maha Bijaksana.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002220.mp3",
        "translation_en": "To this world and the Hereafter. And they ask you about orphans. Say, \"Improvement for them is best. And if you mix your affairs with theirs - they are your brothers. And Allah knows the corrupter from the amender. And if Allah had willed, He could have put you in difficulty. Indeed, Allah is Exalted in Might and Wise."
      },
      {
        "number": 221,
        "arabic": "وَلَا تَنْكِحُوا الْمُشْرِكٰتِ حَتّٰى يُؤْمِنَّ ۗ وَلَاَمَةٌ مُّؤْمِنَةٌ خَيْرٌ مِّنْ مُّشْرِكَةٍ وَّلَوْ اَعْجَبَتْكُمْ ۚ وَلَا تُنْكِحُوا الْمُشْرِكِيْنَ حَتّٰى يُؤْمِنُوْا ۗ وَلَعَبْدٌ مُّؤْمِنٌ خَيْرٌ مِّنْ مُّشْرِكٍ وَّلَوْ اَعْجَبَكُمْ ۗ اُولٰۤىِٕكَ يَدْعُوْنَ اِلَى النَّارِ ۖ وَاللّٰهُ يَدْعُوْٓا اِلَى الْجَنَّةِ وَالْمَغْفِرَةِ بِاِذْنِهٖۚ وَيُبَيِّنُ اٰيٰتِهٖ لِلنَّاسِ لَعَلَّهُمْ يَتَذَكَّرُوْنَ ࣖ",
        "latin": "Wa lā tankiḥul-musyrikāti ḥattā yu'minn(a), wa la'amatum mu'minatun khairum mim musyrikatiw wa lau a‘jabatkum, wa lā tunkiḥul-musyrikīna ḥattā yu'minū, wa la‘abdum mu'minun khairum mim musyrikiw wa lau a‘jabakum,  ulā'ika yad‘ūna ilan-nār(i), wallāhu yad‘ū ilal-jannati wal-magfirati bi'iżnih(ī), wa yubayyinu āyātihī lin-nāsi la‘allahum yatażakkarūn(a). ",
        "translation": "Janganlah kamu menikahi perempuan musyrik hingga mereka beriman! Sungguh, hamba sahaya perempuan yang beriman lebih baik daripada perempuan musyrik, meskipun dia menarik hatimu. Jangan pula kamu menikahkan laki-laki musyrik (dengan perempuan yang beriman) hingga mereka beriman. Sungguh, hamba sahaya laki-laki yang beriman lebih baik daripada laki-laki musyrik meskipun dia menarik hatimu. Mereka mengajak ke neraka, sedangkan Allah mengajak ke surga dan ampunan dengan izin-Nya. (Allah) menerangkan ayat-ayat-Nya kepada manusia agar mereka mengambil pelajaran.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002221.mp3",
        "translation_en": "And do not marry polytheistic women until they believe. And a believing slave woman is better than a polytheist, even though she might please you. And do not marry polytheistic men [to your women] until they believe. And a believing slave is better than a polytheist, even though he might please you. Those invite [you] to the Fire, but Allah invites to Paradise and to forgiveness, by His permission. And He makes clear His verses to the people that perhaps they may remember."
      },
      {
        "number": 222,
        "arabic": "وَيَسْـَٔلُوْنَكَ عَنِ الْمَحِيْضِ ۗ  قُلْ هُوَ اَذًىۙ فَاعْتَزِلُوا النِّسَاۤءَ فِى الْمَحِيْضِۙ وَلَا تَقْرَبُوْهُنَّ حَتّٰى يَطْهُرْنَ ۚ فَاِذَا تَطَهَّرْنَ فَأْتُوْهُنَّ مِنْ حَيْثُ اَمَرَكُمُ اللّٰهُ ۗ اِنَّ اللّٰهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ الْمُتَطَهِّرِيْنَ ",
        "latin": "Wa yas'alūnaka ‘anil-maḥīḍ(i), qul huwa ażā(n), fa‘tazilun-nisā'a fil-maḥīḍ(i), wa lā taqrabūhunna ḥattā yaṭhurn(a), fa'iżā taṭahharna fa'tūhunna min ḥaiṡu amarakumullāh(u), innallāha yuḥibbut-tawwābīna wa yuḥibbul-mutaṭahhirīn(a).  ",
        "translation": "Mereka bertanya kepadamu (Nabi Muhammad) tentang haid. Katakanlah, “Itu adalah suatu kotoran.” Maka, jauhilah para istri (dari melakukan hubungan intim) pada waktu haid dan jangan kamu dekati mereka (untuk melakukan hubungan intim) hingga mereka suci (habis masa haid). Apabila mereka benar-benar suci (setelah mandi wajib), campurilah mereka sesuai dengan (ketentuan) yang diperintahkan Allah kepadamu. Sesungguhnya Allah menyukai orang-orang yang bertobat dan menyukai orang-orang yang menyucikan diri.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002222.mp3",
        "translation_en": "And they ask you about menstruation. Say, \"It is harm, so keep away from wives during menstruation. And do not approach them until they are pure. And when they have purified themselves, then come to them from where Allah has ordained for you. Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.\""
      },
      {
        "number": 223,
        "arabic": "نِسَاۤؤُكُمْ حَرْثٌ لَّكُمْ ۖ فَأْتُوْا حَرْثَكُمْ اَنّٰى شِئْتُمْ ۖ وَقَدِّمُوْا لِاَنْفُسِكُمْ ۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّكُمْ مُّلٰقُوْهُ ۗ وَبَشِّرِ الْمُؤْمِنِيْنَ ",
        "latin": "Nisā'ukum ḥarṡul lakum, fa'tū ḥarṡakum annā syi'tum, wa qaddimū li anfusikum, wattaqullāha wa‘lamū annakum mulāqūh(u), wa basysyiril-mu'minīn(a).  ",
        "translation": "Istrimu adalah ladang bagimu. Maka, datangilah ladangmu itu (bercampurlah dengan benar dan wajar) kapan dan bagaimana yang kamu sukai. Utamakanlah (hal yang terbaik) untuk dirimu. Bertakwalah kepada Allah dan ketahuilah bahwa kamu (kelak) akan menghadap kepada-Nya. Sampaikanlah kabar gembira kepada orang-orang mukmin.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002223.mp3",
        "translation_en": "Your wives are a place of sowing of seed for you, so come to your place of cultivation however you wish and put forth [righteousness] for yourselves. And fear Allah and know that you will meet Him. And give good tidings to the believers."
      },
      {
        "number": 224,
        "arabic": "وَلَا تَجْعَلُوا اللّٰهَ عُرْضَةً لِّاَيْمَانِكُمْ اَنْ تَبَرُّوْا وَتَتَّقُوْا وَتُصْلِحُوْا بَيْنَ النَّاسِۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ ",
        "latin": "Wa lā taj‘alullāha ‘urḍatal li'aimānikum an tabarrū wa tattaqū wa tuṣliḥū bainan-nās(i), wallāhu samī‘un ‘alīm(un). ",
        "translation": "Janganlah kamu jadikan (nama) Allah dalam sumpahmu sebagai penghalang dari berbuat baik, bertakwa, dan menciptakan kedamaian di antara manusia. Allah Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002224.mp3",
        "translation_en": "And do not make [your oath by] Allah an excuse against being righteous and fearing Allah and making peace among people. And Allah is Hearing and Knowing."
      },
      {
        "number": 225,
        "arabic": "لَا يُؤَاخِذُكُمُ اللّٰهُ بِاللَّغْوِ فِيْٓ اَيْمَانِكُمْ وَلٰكِنْ يُّؤَاخِذُكُمْ بِمَا كَسَبَتْ قُلُوْبُكُمْ ۗ وَاللّٰهُ غَفُوْرٌ حَلِيْمٌ ",
        "latin": "Lā yu'ākhiżukumullāhu bil-lagwi fī aimānikum wa lākiy yu'ākhiżukum bimā kasabat qulūbukum, wallāhu gafūrun ḥalīm(un). ",
        "translation": "Allah tidak menghukummu karena sumpahmu yang tidak kamu sengaja, tetapi Dia menghukummu karena sumpah yang diniatkan oleh hatimu. Allah Maha Pengampun lagi Maha Penyantun.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002225.mp3",
        "translation_en": "Allah does not impose blame upon you for what is unintentional in your oaths, but He imposes blame upon you for what your hearts have earned. And Allah is Forgiving and Forbearing."
      },
      {
        "number": 226,
        "arabic": "لِلَّذِيْنَ يُؤْلُوْنَ مِنْ نِّسَاۤىِٕهِمْ تَرَبُّصُ اَرْبَعَةِ اَشْهُرٍۚ فَاِنْ فَاۤءُوْ فَاِنَّ اللّٰهَ غَفُوْرٌ رَّحِيْمٌ ",
        "latin": "Lil-lażīna yu'lūna min nisā'ihim tarabbuṣu arba‘ati asyhur(in), fa'in fā'ū fa'innalāha gafūrur raḥīm(un). ",
        "translation": "Orang yang meng-ila’ (bersumpah tidak mencampuri) istrinya diberi tenggang waktu empat bulan. Jika mereka kembali (mencampuri istrinya), sesungguhnya Allah Maha Pengampun lagi Maha Penyayang.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002226.mp3",
        "translation_en": "For those who swear not to have sexual relations with their wives is a waiting time of four months, but if they return [to normal relations] - then indeed, Allah is Forgiving and Merciful."
      },
      {
        "number": 227,
        "arabic": "وَاِنْ عَزَمُوا الطَّلَاقَ فَاِنَّ اللّٰهَ سَمِيْعٌ عَلِيْمٌ ",
        "latin": "Wa in ‘azamuṭ-ṭalāqa fa innallāha samī‘un ‘alīm(un). ",
        "translation": "Jika mereka berketetapan hati untuk bercerai, sesungguhnya Allah Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002227.mp3",
        "translation_en": "And if they decide on divorce - then indeed, Allah is Hearing and Knowing."
      },
      {
        "number": 228,
        "arabic": "وَالْمُطَلَّقٰتُ يَتَرَبَّصْنَ بِاَنْفُسِهِنَّ ثَلٰثَةَ قُرُوْۤءٍۗ وَلَا يَحِلُّ لَهُنَّ اَنْ يَّكْتُمْنَ مَا خَلَقَ اللّٰهُ فِيْٓ اَرْحَامِهِنَّ اِنْ كُنَّ يُؤْمِنَّ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِۗ وَبُعُوْلَتُهُنَّ اَحَقُّ بِرَدِّهِنَّ فِيْ ذٰلِكَ اِنْ اَرَادُوْٓا اِصْلَاحًا ۗوَلَهُنَّ مِثْلُ الَّذِيْ عَلَيْهِنَّ بِالْمَعْرُوْفِۖ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ  ۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ ࣖ",
        "latin": "Wal-muṭallaqātu yatarabbaṣna bi anfusihinna ṡalāṡata qurū'(in), wa lā yaḥillu lahunna ay yaktumna mā khalaqallāhu fī arḥāmihinna in kunna yu'minna billāhi wal-yaumil-ākhir(i), wa bu‘ūlatuhunna aḥaqqu biraddiūhinna fī żālika in arādū iṣlāḥā(n), wa lahunna miṡlul-lażī ‘alaihinna bil-ma‘rūf(i), wa lir-rijāli ‘alaihinna darajah(tun), wallāhu ‘azīzun ḥakīm(un). ",
        "translation": "Para istri yang diceraikan (wajib) menahan diri mereka (menunggu) tiga kali qurū’ (suci atau haid). Tidak boleh bagi mereka menyembunyikan apa yang diciptakan Allah dalam rahim mereka, jika mereka beriman kepada Allah dan hari Akhir. Suami-suami mereka lebih berhak untuk kembali kepada mereka dalam (masa) itu, jika mereka menghendaki perbaikan. Mereka (para perempuan) mempunyai hak seimbang dengan kewajibannya menurut cara yang patut. Akan tetapi, para suami mempunyai kelebihan atas mereka. Allah Maha Perkasa lagi Maha Bijaksana.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002228.mp3",
        "translation_en": "Divorced women remain in waiting for three periods, and it is not lawful for them to conceal what Allah has created in their wombs if they believe in Allah and the Last Day. And their husbands have more right to take them back in this [period] if they want reconciliation. And due to the wives is similar to what is expected of them, according to what is reasonable. But the men have a degree over them [in responsibility and authority]. And Allah is Exalted in Might and Wise."
      },
      {
        "number": 229,
        "arabic": "اَلطَّلَاقُ مَرَّتٰنِ ۖ فَاِمْسَاكٌۢ بِمَعْرُوْفٍ اَوْ تَسْرِيْحٌۢ بِاِحْسَانٍ ۗ وَلَا يَحِلُّ لَكُمْ اَنْ تَأْخُذُوْا مِمَّآ اٰتَيْتُمُوْهُنَّ شَيْـًٔا اِلَّآ اَنْ يَّخَافَآ اَلَّا يُقِيْمَا حُدُوْدَ اللّٰهِ ۗ فَاِنْ خِفْتُمْ اَلَّا يُقِيْمَا حُدُوْدَ اللّٰهِ ۙ فَلَا جُنَاحَ عَلَيْهِمَا فِيْمَا افْتَدَتْ بِهٖ ۗ تِلْكَ حُدُوْدُ اللّٰهِ فَلَا تَعْتَدُوْهَا ۚوَمَنْ يَّتَعَدَّ حُدُوْدَ اللّٰهِ فَاُولٰۤىِٕكَ هُمُ الظّٰلِمُوْنَ",
        "latin": "Aṭ-ṭalāqu marratān(i), fa imsākum bima‘rūfin au tasrīḥum bi'iḥsān(in), wa lā yaḥillu lakum an ta'khużū  mimmā ātaitumūhunna syai'an illā ay yakhāfā allā yuqīmā ḥudūdullāh(i), fa in khiftum allā yuqīmā ḥudūdullāh(i) falā junāḥa ‘alaihimā fīmaftadat bih(ī), tilka ḥudūdullāhi falā ta‘tadūhā, wa may yata‘adda ḥudūdullāhi fa'ulā'ika humuẓ-ẓālimūn(a). ",
        "translation": "Talak (yang dapat dirujuk) itu dua kali. (Setelah itu suami dapat) menahan (rujuk) dengan cara yang patut atau melepaskan (menceraikan) dengan baik. Tidak halal bagi kamu mengambil kembali sesuatu (mahar) yang telah kamu berikan kepada mereka, kecuali keduanya (suami dan istri) khawatir tidak mampu menjalankan batas-batas ketentuan Allah. Jika kamu (wali) khawatir bahwa keduanya tidak mampu menjalankan batas-batas (ketentuan) Allah, maka keduanya tidak berdosa atas bayaran yang (harus) diberikan (oleh istri) untuk menebus dirinya. Itulah batas-batas (ketentuan) Allah, janganlah kamu melanggarnya. Siapa yang melanggar batas-batas (ketentuan) Allah, mereka itulah orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002229.mp3",
        "translation_en": "Divorce is twice. Then, either keep [her] in an acceptable manner or release [her] with good treatment. And it is not lawful for you to take anything of what you have given them unless both fear that they will not be able to keep [within] the limits of Allah. But if you fear that they will not keep [within] the limits of Allah, then there is no blame upon either of them concerning that by which she ransoms herself. These are the limits of Allah, so do not transgress them. And whoever transgresses the limits of Allah - it is those who are the wrongdoers."
      },
      {
        "number": 230,
        "arabic": "فَاِنْ طَلَّقَهَا فَلَا تَحِلُّ لَهٗ مِنْۢ بَعْدُ حَتّٰى تَنْكِحَ زَوْجًا غَيْرَهٗ ۗ فَاِنْ طَلَّقَهَا فَلَا جُنَاحَ عَلَيْهِمَآ اَنْ يَّتَرَاجَعَآ اِنْ ظَنَّآ اَنْ يُّقِيْمَا حُدُوْدَ اللّٰهِ ۗ وَتِلْكَ حُدُوْدُ اللّٰهِ يُبَيِّنُهَا لِقَوْمٍ يَّعْلَمُوْنَ ",
        "latin": "Fa'in ṭallaqahā falā taḥillu lahū mim ba‘du ḥattā tankiḥa zaujan gairah(ū), fa'in ṭallaqahā falā junāḥa ‘alaihimā ay yatarāja‘ā in ẓannā ay yuqīmā ḥudūdullāh(i), tilka ḥudūdullāhi yubayyinuhā liqaumiy ya‘lamūn(a).  ",
        "translation": "Jika dia menceraikannya kembali (setelah talak kedua), perempuan itu tidak halal lagi baginya hingga dia menikah dengan laki-laki yang lain. Jika (suami yang lain itu) sudah menceraikannya, tidak ada dosa bagi keduanya (suami pertama dan mantan istri) untuk menikah kembali jika keduanya menduga akan dapat menjalankan hukum-hukum Allah. Itulah ketentuan-ketentuan Allah yang diterangkan-Nya kepada orang-orang yang (mau) mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002230.mp3",
        "translation_en": "And if he has divorced her [for the third time], then she is not lawful to him afterward until [after] she marries a husband other than him. And if the latter husband divorces her [or dies], there is no blame upon the woman and her former husband for returning to each other if they think that they can keep [within] the limits of Allah. These are the limits of Allah, which He makes clear to a people who know."
      },
      {
        "number": 231,
        "arabic": "وَاِذَا طَلَّقْتُمُ النِّسَاۤءَ فَبَلَغْنَ اَجَلَهُنَّ فَاَمْسِكُوْهُنَّ بِمَعْرُوْفٍ اَوْ سَرِّحُوْهُنَّ بِمَعْرُوْفٍۗ وَلَا تُمْسِكُوْهُنَّ ضِرَارًا لِّتَعْتَدُوْا ۚ وَمَنْ يَّفْعَلْ ذٰلِكَ فَقَدْ ظَلَمَ نَفْسَهٗ ۗ وَلَا تَتَّخِذُوْٓا اٰيٰتِ اللّٰهِ هُزُوًا وَّاذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْ وَمَآ اَنْزَلَ عَلَيْكُمْ مِّنَ الْكِتٰبِ وَالْحِكْمَةِ يَعِظُكُمْ بِهٖ ۗوَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيْمٌ ࣖ",
        "latin": "Wa iżā ṭallaqtumun-nisā'a fabalagna ajalahunna fa'amsikūhunna bima‘rūfin au sarriḥūhunna bima‘rūf(in),  wa lā tumsikūhunna ḍirāral lita‘tadū, wa may yaf‘al  żālika faqad ẓalama nafasah(ū), wa lā tattakhiżū āyātillāhi huzuwaw ważkurū ni‘matallāhi ‘alaikum wa mā anzala ‘alaikum minal-kitābi wal-ḥikmati ya‘iẓukum bih(ī), wattaqullāha wa‘lamū  annallāha bikulli syai'in ‘alīm(un).  ",
        "translation": "Apabila kamu menceraikan istri(-mu), hingga (hampir) berakhir masa idahnya, tahanlah (rujuk) mereka dengan cara yang patut atau ceraikanlah mereka dengan cara yang patut (pula). Janganlah kamu menahan (rujuk) mereka untuk memberi kemudaratan sehingga kamu melampaui batas. Siapa yang melakukan demikian, dia sungguh telah menzalimi dirinya sendiri. Janganlah kamu jadikan ayat-ayat (hukum-hukum) Allah sebagai bahan ejekan. Ingatlah nikmat Allah kepadamu dan apa yang telah diturunkan Allah kepadamu, yaitu Kitab (Al-Qur’an) dan Hikmah (Sunah), untuk memberi pengajaran kepadamu. Bertakwalah kepada Allah dan ketahuilah bahwa sesungguhnya Allah Maha Mengetahui segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002231.mp3",
        "translation_en": "And when you divorce women and they have [nearly] fulfilled their term, either retain them according to acceptable terms or release them according to acceptable terms, and do not keep them, intending harm, to transgress [against them]. And whoever does that has certainly wronged himself. And do not take the verses of Allah in jest. And remember the favor of Allah upon you and what has been revealed to you of the Book and wisdom by which He instructs you. And fear Allah and know that Allah is Knowing of all things."
      },
      {
        "number": 232,
        "arabic": "وَاِذَا طَلَّقْتُمُ النِّسَاۤءَ فَبَلَغْنَ اَجَلَهُنَّ فَلَا تَعْضُلُوْهُنَّ اَنْ يَّنْكِحْنَ اَزْوَاجَهُنَّ اِذَا تَرَاضَوْا بَيْنَهُمْ بِالْمَعْرُوْفِ ۗ ذٰلِكَ يُوْعَظُ بِهٖ مَنْ كَانَ مِنْكُمْ يُؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِ ۗ ذٰلِكُمْ اَزْكٰى لَكُمْ وَاَطْهَرُ ۗ وَاللّٰهُ يَعْلَمُ وَاَنْتُمْ لَا تَعْلَمُوْنَ ",
        "latin": "Wa iżā ṭallaqtumun-nisā'a fabalagna ajalahunna falā ta‘ḍulūhunna ay yankiḥna azwājahunna iżā tarāḍau bainahum bil-ma‘rūf(i), żālika yū‘aẓu bihī man kāna minkum yu'minu billāhi wal-yaumil-ākhir(i), żālikum azkā lakum wa aṭhar(u), wallāhu ya‘lamu wa antum lā ta‘lamūn(a).  ",
        "translation": "Apabila kamu (sudah) menceraikan istri(-mu) lalu telah sampai (habis) masa idahnya, janganlah kamu menghalangi mereka untuk menikah dengan (calon) suaminya apabila telah terdapat kerelaan di antara mereka dengan cara yang patut. Itulah yang dinasihatkan kepada orang-orang di antara kamu yang beriman kepada Allah dan hari Akhir. Hal itu lebih bersih bagi (jiwa)-mu dan lebih suci (bagi kehormatanmu). Allah mengetahui, sedangkan kamu tidak mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002232.mp3",
        "translation_en": "And when you divorce women and they have fulfilled their term, do not prevent them from remarrying their [former] husbands if they agree among themselves on an acceptable basis. That is instructed to whoever of you believes in Allah and the Last Day. That is better for you and purer, and Allah knows and you know not."
      },
      {
        "number": 233,
        "arabic": "۞ وَالْوٰلِدٰتُ يُرْضِعْنَ اَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ لِمَنْ اَرَادَ اَنْ يُّتِمَّ الرَّضَاعَةَ ۗ وَعَلَى الْمَوْلُوْدِ لَهٗ رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِالْمَعْرُوْفِۗ  لَا تُكَلَّفُ نَفْسٌ اِلَّا وُسْعَهَا ۚ لَا تُضَاۤرَّ وَالِدَةٌ ۢبِوَلَدِهَا وَلَا مَوْلُوْدٌ لَّهٗ بِوَلَدِهٖ وَعَلَى الْوَارِثِ مِثْلُ ذٰلِكَ ۚ فَاِنْ اَرَادَا فِصَالًا عَنْ تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ فَلَا جُنَاحَ عَلَيْهِمَا ۗوَاِنْ اَرَدْتُّمْ اَنْ تَسْتَرْضِعُوْٓا اَوْلَادَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ اِذَا سَلَّمْتُمْ مَّآ اٰتَيْتُمْ بِالْمَعْرُوْفِۗ وَاتَّقُوا اللّٰهَ وَاعْلَمُوْٓا اَنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ ",
        "latin": "Wal-wālidātu yurḍi‘na aulādahunna ḥaulaini kāmilaini liman arāda ay yutimmar-raḍā‘ah(ta), wa ‘alal-maulūdi lahū rizquhunna wa kiswatuhunna bil-ma‘rūf(i), lā tukallafu nafsun illā wus‘ahā, lā tuḍārra wālidatum biwaladihā wa lā maulūdul lahū biwaladihī wa ‘alal-wāriṡi miṡlu żālik(a), fa'in arādā fiṣālan ‘an tarāḍim minhumā wa tasyāwurin falā junāḥa ‘alaihimā, wa in arattum an tastarḍi‘ū aulādakum falā junāḥa  ‘alaikum iżā sallamtum mā ātaitum bil-ma‘rūf(i), wattaqullāha wa‘lamū annallāha bimā ta‘malūna baṣīr(un).  ",
        "translation": "Ibu-ibu hendaklah menyusui anak-anaknya selama dua tahun penuh, bagi yang ingin menyempurnakan penyusuan. Kewajiban ayah menanggung makan dan pakaian mereka dengan cara yang patut. Seseorang tidak dibebani, kecuali sesuai dengan kemampuannya. Janganlah seorang ibu dibuat menderita karena anaknya dan jangan pula ayahnya dibuat menderita karena anaknya. Ahli waris pun seperti itu pula. Apabila keduanya ingin menyapih (sebelum dua tahun) berdasarkan persetujuan dan musyawarah antara keduanya, tidak ada dosa atas keduanya. Apabila kamu ingin menyusukan anakmu (kepada orang lain), tidak ada dosa bagimu jika kamu memberikan pembayaran dengan cara yang patut. Bertakwalah kepada Allah dan ketahuilah bahwa sesungguhnya Allah Maha Melihat apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002233.mp3",
        "translation_en": "Mothers may breastfeed their children two complete years for whoever wishes to complete the nursing [period]. Upon the father is the mothers' provision and their clothing according to what is acceptable. No person is charged with more than his capacity. No mother should be harmed through her child, and no father through his child. And upon the [father's] heir is [a duty] like that [of the father]. And if they both desire weaning through mutual consent from both of them and consultation, there is no blame upon either of them. And if you wish to have your children nursed by a substitute, there is no blame upon you as long as you give payment according to what is acceptable. And fear Allah and know that Allah is Seeing of what you do."
      },
      {
        "number": 234,
        "arabic": "وَالَّذِيْنَ يُتَوَفَّوْنَ مِنْكُمْ وَيَذَرُوْنَ اَزْوَاجًا يَّتَرَبَّصْنَ بِاَنْفُسِهِنَّ اَرْبَعَةَ اَشْهُرٍ وَّعَشْرًا ۚ فَاِذَا بَلَغْنَ اَجَلَهُنَّ فَلَا جُنَاحَ عَلَيْكُمْ فِيْمَا فَعَلْنَ فِيْٓ اَنْفُسِهِنَّ بِالْمَعْرُوْفِۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ ",
        "latin": "Wal-lażīna yutawaffauna minkum wa yażarūna azwājay yatarabbaṣna bi'anfusihinna arba‘ata asyhuriw wa ‘asyrā(n), fa'iżā balagna ajalahunna falā junāḥa ‘alaikum fīmā fa‘alna fī anfusihinna bil-ma‘rūf(i),wallāhu bimā ta‘malūna khabīr(un).  ",
        "translation": "Orang-orang yang mati di antara kamu dan meninggalkan istri-istri hendaklah mereka (istri-istri) menunggu dirinya (beridah) empat bulan sepuluh hari. Kemudian, apabila telah sampai (akhir) idah mereka, tidak ada dosa bagimu (wali) mengenai apa yang mereka lakukan terhadap diri mereka menurut cara yang patut. Allah Maha Mengetahui apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002234.mp3",
        "translation_en": "And those who are taken in death among you and leave wives behind - they, [the wives, shall] wait four months and ten [days]. And when they have fulfilled their term, then there is no blame upon you for what they do with themselves in an acceptable manner. And Allah is [fully] Acquainted with what you do."
      },
      {
        "number": 235,
        "arabic": "وَلَا جُنَاحَ عَلَيْكُمْ فِيْمَا عَرَّضْتُمْ بِهٖ مِنْ خِطْبَةِ النِّسَاۤءِ اَوْ اَكْنَنْتُمْ فِيْٓ اَنْفُسِكُمْ ۗ عَلِمَ اللّٰهُ اَنَّكُمْ سَتَذْكُرُوْنَهُنَّ وَلٰكِنْ لَّا تُوَاعِدُوْهُنَّ سِرًّا اِلَّآ اَنْ تَقُوْلُوْا قَوْلًا مَّعْرُوْفًا ەۗ وَلَا تَعْزِمُوْا عُقْدَةَ النِّكَاحِ حَتّٰى يَبْلُغَ الْكِتٰبُ اَجَلَهٗ ۗوَاعْلَمُوْٓا اَنَّ اللّٰهَ يَعْلَمُ مَا فِيْٓ اَنْفُسِكُمْ فَاحْذَرُوْهُ ۚوَاعْلَمُوْٓا اَنَّ اللّٰهَ غَفُوْرٌ حَلِيْمٌ ࣖ",
        "latin": "Wa lā junāḥa ‘alaikum fīmā ‘arraḍtum bihī min khiṭbatin-nisā'i au aknantum fī anfusikum, ‘alimallāhu annakum satażkurūnahunna wa lākil lā tuwā‘idūhunna sirran illā an taqūlū qaulam ma‘rūfā(n), wa lā ta‘zimū ‘uqdatan-nikāḥi ḥattā yablugal-kitābu ajalah(ū), wa‘lamū annallāha ya‘lamu mā fī anfusikum faḥżarūh(u), wa‘lamū annallāha gafūrun ḥalīm(un). ",
        "translation": "Tidak ada dosa bagimu atas kata sindiran untuk meminang perempuan-perempuan atau (keinginan menikah) yang kamu sembunyikan dalam hati. Allah mengetahui bahwa kamu akan menyebut-nyebut mereka. Akan tetapi, janganlah kamu berjanji secara diam-diam untuk (menikahi) mereka, kecuali sekadar mengucapkan kata-kata yang patut (sindiran). Jangan pulalah kamu menetapkan akad nikah sebelum berakhirnya masa idah. Ketahuilah bahwa Allah mengetahui apa yang ada dalam hatimu. Maka, takutlah kepada-Nya. Ketahuilah bahwa Allah Maha Pengampun lagi Maha Penyantun.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002235.mp3",
        "translation_en": "There is no blame upon you for that to which you [indirectly] allude concerning a proposal to women or for what you conceal within yourselves. Allah knows that you will have them in mind. But do not promise them secretly except for saying a proper saying. And do not determine to undertake a marriage contract until the decreed period reaches its end. And know that Allah knows what is within yourselves, so beware of Him. And know that Allah is Forgiving and Forbearing."
      },
      {
        "number": 236,
        "arabic": "لَا جُنَاحَ عَلَيْكُمْ اِنْ طَلَّقْتُمُ النِّسَاۤءَ مَا لَمْ تَمَسُّوْهُنَّ اَوْ تَفْرِضُوْا لَهُنَّ فَرِيْضَةً ۖ وَّمَتِّعُوْهُنَّ عَلَى الْمُوْسِعِ قَدَرُهٗ وَعَلَى الْمُقْتِرِ قَدَرُهٗ ۚ مَتَاعًا ۢبِالْمَعْرُوْفِۚ حَقًّا عَلَى الْمُحْسِنِيْنَ ",
        "latin": "Lā junāḥa ‘alaikum in ṭallaqtumun-nisā'a mā lam tamassūhunna au tafriḍū lahunna farīḍah(tan), wa matti‘ūhunna ‘alal-mūsi‘i qadaruhū wa ‘alal-muqtiri qadaruhū matā‘am bil-ma‘rūf(i), ḥaqqan ‘alal-muḥsinīn(a). ",
        "translation": "Tidak ada dosa bagimu (untuk tidak membayar mahar) jika kamu menceraikan istri-istrimu yang belum kamu sentuh (campuri) atau belum kamu tentukan maharnya. Berilah mereka mut‘ah, bagi yang kaya sesuai dengan kemampuannya dan bagi yang miskin sesuai dengan kemampuannya pula, sebagai pemberian dengan cara yang patut dan ketentuan bagi orang-orang yang berbuat ihsan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002236.mp3",
        "translation_en": "There is no blame upon you if you divorce women you have not touched nor specified for them an obligation. But give them [a gift of] compensation - the wealthy according to his capability and the poor according to his capability - a provision according to what is acceptable, a duty upon the doers of good."
      },
      {
        "number": 237,
        "arabic": "وَاِنْ طَلَّقْتُمُوْهُنَّ مِنْ قَبْلِ اَنْ تَمَسُّوْهُنَّ وَقَدْ فَرَضْتُمْ لَهُنَّ فَرِيْضَةً فَنِصْفُ مَا فَرَضْتُمْ اِلَّآ اَنْ يَّعْفُوْنَ اَوْ يَعْفُوَا الَّذِيْ بِيَدِهٖ عُقْدَةُ النِّكَاحِ ۗ وَاَنْ تَعْفُوْٓا اَقْرَبُ لِلتَّقْوٰىۗ وَلَا تَنْسَوُا الْفَضْلَ بَيْنَكُمْ ۗ اِنَّ اللّٰهَ بِمَا تَعْمَلُوْنَ بَصِيْرٌ ",
        "latin": "Wa in ṭallaqtumūhunna min qabli an tamassūhunna wa qad faraḍtum lahunna farīḍatan faniṣfu mā faraḍtum illā ay ya‘fūna au ya‘fuwal-lażī biyadihī ‘uqdatun-nikāḥ(i), wa an ta‘fū aqrabu lit-taqwā, wa lā tansawul-faḍla bainakum, innallāha bimā ta‘malūna baṣīr(un).  ",
        "translation": "Jika kamu menceraikan mereka sebelum kamu sentuh (campuri), padahal kamu sudah menentukan maharnya, maka (bayarlah) separuh dari apa yang telah kamu tentukan, kecuali jika mereka atau pihak yang memiliki kewenangan nikah (suami atau wali) membebaskannya. Pembebasanmu itu lebih dekat pada ketakwaan. Janganlah melupakan kebaikan di antara kamu. Sesungguhnya Allah Maha Melihat apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002237.mp3",
        "translation_en": "And if you divorce them before you have touched them and you have already specified for them an obligation, then [give] half of what you specified - unless they forego the right or the one in whose hand is the marriage contract foregoes it. And to forego it is nearer to righteousness. And do not forget graciousness between you. Indeed Allah, of whatever you do, is Seeing."
      },
      {
        "number": 238,
        "arabic": "حَافِظُوْا عَلَى الصَّلَوٰتِ وَالصَّلٰوةِ الْوُسْطٰى وَقُوْمُوْا لِلّٰهِ قٰنِتِيْنَ ",
        "latin": "Ḥāfiẓū ‘alaṣ-ṣalawāti waṣ-ṣalātil-wusṭā, wa qūmū lillāhi qānitīn(a).   ",
        "translation": "Peliharalah semua salat (fardu) dan salat Wusṭā. Berdirilah karena Allah (dalam salat) dengan khusyuk.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002238.mp3",
        "translation_en": "Maintain with care the [obligatory] prayers and [in particular] the middle prayer and stand before Allah, devoutly obedient."
      },
      {
        "number": 239,
        "arabic": "فَاِنْ خِفْتُمْ فَرِجَالًا اَوْ رُكْبَانًا ۚ فَاِذَآ اَمِنْتُمْ فَاذْكُرُوا اللّٰهَ كَمَا عَلَّمَكُمْ مَّا لَمْ تَكُوْنُوْا تَعْلَمُوْنَ ",
        "latin": "Fa'in khiftum farijālan au rukbānā(n), fa'iżā amintum fażkurullāha kamā ‘allamakum mā lam takūnū ta‘lamūn(a). ",
        "translation": "Jika kamu berada dalam keadaan takut, salatlah dengan berjalan kaki atau berkendaraan. Lalu, apabila kamu telah aman, ingatlah Allah (salatlah) sebagaimana Dia telah mengajarkan kepadamu apa yang tidak kamu ketahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002239.mp3",
        "translation_en": "And if you fear [an enemy, then pray] on foot or riding. But when you are secure, then remember Allah [in prayer], as He has taught you that which you did not [previously] know."
      },
      {
        "number": 240,
        "arabic": "وَالَّذِيْنَ يُتَوَفَّوْنَ مِنْكُمْ وَيَذَرُوْنَ اَزْوَاجًاۖ وَّصِيَّةً لِّاَزْوَاجِهِمْ مَّتَاعًا اِلَى الْحَوْلِ غَيْرَ اِخْرَاجٍ ۚ فَاِنْ خَرَجْنَ فَلَا جُنَاحَ عَلَيْكُمْ فِيْ مَا فَعَلْنَ فِيْٓ اَنْفُسِهِنَّ مِنْ مَّعْرُوْفٍۗ وَاللّٰهُ عَزِيْزٌ حَكِيْمٌ ",
        "latin": "Wal-lażīna yutawaffauna minkum wa yażarūna azwājā(n), waṣiyyatal li'azwājihim matā‘an ilal-ḥauli gaira ikhrāj(in), fa'in kharajna falā junāḥa ‘alaikum fī mā fa‘alna fī anfusihinna mim ma‘rūf(in), wallāhu ‘azīzun ḥakīm(un).  ",
        "translation": "Orang-orang yang akan mati di antara kamu dan meninggalkan istri-istri hendaklah membuat wasiat untuk istri-istrinya, (yaitu) nafkah sampai setahun tanpa mengeluarkannya (dari rumah). Akan tetapi, jika mereka keluar (sendiri), tidak ada dosa bagimu mengenai hal-hal yang patut yang mereka lakukan terhadap diri mereka sendiri. Allah Maha Perkasa lagi Maha Bijaksana.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002240.mp3",
        "translation_en": "And those who are taken in death among you and leave wives behind - for their wives is a bequest: maintenance for one year without turning [them] out. But if they leave [of their own accord], then there is no blame upon you for what they do with themselves in an acceptable way. And Allah is Exalted in Might and Wise."
      },
      {
        "number": 241,
        "arabic": "وَلِلْمُطَلَّقٰتِ مَتَاعٌ ۢبِالْمَعْرُوْفِۗ حَقًّا عَلَى الْمُتَّقِيْنَ ",
        "latin": "Wa lil-muṭallaqāti matā‘um bil-ma‘rūf(i),  ḥaqqan ‘alal-muttaqīn(a).  ",
        "translation": "Bagi istri-istri yang diceraikan terdapat hak mut‘ah dengan cara yang patut. Demikian ini adalah ketentuan bagi orang-orang yang bertakwa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002241.mp3",
        "translation_en": "And for divorced women is a provision according to what is acceptable - a duty upon the righteous."
      },
      {
        "number": 242,
        "arabic": "كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمْ اٰيٰتِهٖ لَعَلَّكُمْ تَعْقِلُوْنَ ࣖ",
        "latin": "Każālika yubayyinullāhu lakum āyātihī la‘allakum ta‘qilūn(a).  ",
        "translation": "Demikianlah Allah menerangkan kepadamu ayat-ayat-Nya agar kamu mengerti.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002242.mp3",
        "translation_en": "Thus does Allah make clear to you His verses that you might use reason."
      },
      {
        "number": 243,
        "arabic": "۞ اَلَمْ تَرَ اِلَى الَّذِيْنَ خَرَجُوْا مِنْ دِيَارِهِمْ وَهُمْ اُلُوْفٌ حَذَرَ الْمَوْتِۖ  فَقَالَ لَهُمُ اللّٰهُ مُوْتُوْا ۗ ثُمَّ اَحْيَاهُمْ ۗ اِنَّ اللّٰهَ لَذُوْ فَضْلٍ عَلَى النَّاسِ وَلٰكِنَّ اَكْثَرَ النَّاسِ لَا يَشْكُرُوْنَ ",
        "latin": "Alam tara ilal-lażīna kharajū min diyārihim wa hum ulūfun ḥażaral-maut(i), faqāla lahumullāhu mūtū, ṡumma aḥyāhum, inallāha lażū faḍlin ‘alan-nāsi wa lākinna akṡaran-nāsi lā yasykurūn(a). ",
        "translation": "Tidakkah kamu memperhatikan orang-orang yang keluar dari kampung halamannya dalam jumlah ribuan karena takut mati? Lalu, Allah berfirman kepada mereka, “Matilah kamu!” Kemudian, Allah menghidupkan mereka. Sesungguhnya Allah Pemberi karunia kepada manusia, tetapi kebanyakan manusia tidak bersyukur.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002243.mp3",
        "translation_en": "Have you not considered those who left their homes in many thousands, fearing death? Allah said to them, \"Die\"; then He restored them to life. And Allah is full of bounty to the people, but most of the people do not show gratitude."
      },
      {
        "number": 244,
        "arabic": "وَقَاتِلُوْا فِيْ سَبِيْلِ اللّٰهِ وَاعْلَمُوْٓا اَنَّ اللّٰهَ  سَمِيْعٌ عَلِيْمٌ ",
        "latin": "Wa qātilū fī sabīlillāhi wa‘lamū annallāha samī‘un ‘alīm(un).  ",
        "translation": "Berperanglah kamu di jalan Allah dan ketahuilah bahwa Allah Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002244.mp3",
        "translation_en": "And fight in the cause of Allah and know that Allah is Hearing and Knowing."
      },
      {
        "number": 245,
        "arabic": "مَنْ ذَا الَّذِيْ يُقْرِضُ اللّٰهَ قَرْضًا حَسَنًا فَيُضٰعِفَهٗ لَهٗٓ اَضْعَافًا كَثِيْرَةً ۗوَاللّٰهُ يَقْبِضُ وَيَبْصُۣطُۖ وَاِلَيْهِ تُرْجَعُوْنَ",
        "latin": "Man żal-lażī yuqriḍullāha qarḍan ḥasanan fayuḍā‘ifahū lahū aḍ‘āfan kaṡīrah(tan), wallāhu yaqbiḍu wa yabsuṭ(u), wa ilaihi turja‘ūn(a).  ",
        "translation": "Siapakah yang mau memberi pinjaman yang baik kepada Allah? Dia akan melipatgandakan (pembayaran atas pinjaman itu) baginya berkali-kali lipat. Allah menyempitkan dan melapangkan (rezeki). Kepada-Nyalah kamu dikembalikan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002245.mp3",
        "translation_en": "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who withholds and grants abundance, and to Him you will be returned."
      },
      {
        "number": 246,
        "arabic": "اَلَمْ تَرَ اِلَى الْمَلَاِ مِنْۢ بَنِيْٓ اِسْرَاۤءِيْلَ مِنْۢ بَعْدِ مُوْسٰىۘ اِذْ قَالُوْا لِنَبِيٍّ لَّهُمُ ابْعَثْ لَنَا مَلِكًا نُّقَاتِلْ فِيْ سَبِيْلِ اللّٰهِ ۗ قَالَ هَلْ عَسَيْتُمْ اِنْ كُتِبَ عَلَيْكُمُ الْقِتَالُ اَلَّا تُقَاتِلُوْا ۗ قَالُوْا وَمَا لَنَآ اَلَّا نُقَاتِلَ فِيْ سَبِيْلِ اللّٰهِ وَقَدْاُخْرِجْنَا مِنْ دِيَارِنَا وَاَبْنَاۤىِٕنَا ۗ فَلَمَّا كُتِبَ عَلَيْهِمُ الْقِتَالُ تَوَلَّوْا اِلَّا قَلِيْلًا مِّنْهُمْ ۗوَاللّٰهُ عَلِيْمٌ ۢبِالظّٰلِمِيْنَ ",
        "latin": "Alam tara ilal-mala'i mim banī isrā'īla mim ba‘di mūsā, iż qālū linabiyyil lahumub‘aṡ lanā malikan nuqātil fī sabīlillāh(i), qāla hal ‘asaitum in kutiba ‘alaikumul-qitālu allā tuqātilū, qālū wa mā lanā allā nuqātila fī sabīlillāhi wa qad ukhrijnā min diyārinā wa abnā'inā, falammā kutiba ‘alaihimul-qitālu tawallau illā qalīlam minhum, wallāhu ‘alīmum biẓ-ẓālimīn(a). ",
        "translation": "Tidakkah kamu perhatikan para pemuka Bani Israil setelah Musa wafat, (yaitu) ketika mereka berkata kepada seorang nabi mereka, “Angkatlah seorang raja untuk kami, niscaya kami berperang di jalan Allah.” Dia menjawab, “Jangan-jangan jika diwajibkan atasmu berperang, kamu tidak akan berperang juga.” Mereka menjawab, “Mengapa kami tidak akan berperang di jalan Allah, sedangkan sungguh kami telah diusir dari kampung halaman kami dan (dipisahkan dari) anak-anak kami?” Akan tetapi, ketika perang diwajibkan atas mereka, mereka berpaling, kecuali sebagian kecil dari mereka. Allah Maha Mengetahui orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002246.mp3",
        "translation_en": "Have you not considered the assembly of the Children of Israel after [the time of] Moses when they said to a prophet of theirs, \"Send to us a king, and we will fight in the way of Allah \"? He said, \"Would you perhaps refrain from fighting if fighting was prescribed for you?\" They said, \"And why should we not fight in the cause of Allah when we have been driven out from our homes and from our children?\" But when fighting was prescribed for them, they turned away, except for a few of them. And Allah is Knowing of the wrongdoers."
      },
      {
        "number": 247,
        "arabic": "وَقَالَ لَهُمْ نَبِيُّهُمْ اِنَّ اللّٰهَ قَدْ بَعَثَ لَكُمْ طَالُوْتَ مَلِكًا ۗ قَالُوْٓا اَنّٰى يَكُوْنُ لَهُ الْمُلْكُ عَلَيْنَا وَنَحْنُ اَحَقُّ بِالْمُلْكِ مِنْهُ وَلَمْ يُؤْتَ سَعَةً مِّنَ الْمَالِۗ قَالَ اِنَّ اللّٰهَ اصْطَفٰىهُ عَلَيْكُمْ وَزَادَهٗ بَسْطَةً فِى الْعِلْمِ وَالْجِسْمِ ۗ وَاللّٰهُ يُؤْتِيْ مُلْكَهٗ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ ",
        "latin": "Wa qāla lahum nabiyyuhum innallāha qad ba‘aṡa lakum ṭālūta malikā(n), qālū annā yakūnu lahul-mulku ‘alainā wa naḥnu aḥaqqu bil-mulki minhu wa lam yu'ta sa‘atam minal-māl(i), qāla innallāhaṣṭafāhu ‘alaikum wa zādahū basṭatan fil-‘ilmi wal-jism(i), wallāhu yu'tī mulkahū may yasyā'(u), wallāhu wāsi‘un ‘alīm(un).  ",
        "translation": "Nabi mereka berkata kepada mereka, “Sesungguhnya Allah telah mengangkat Talut menjadi rajamu.” Mereka menjawab, “Bagaimana (mungkin) dia memperoleh kerajaan (kekuasaan) atas kami, sedangkan kami lebih berhak atas kerajaan itu daripadanya dan dia tidak diberi kekayaan yang banyak?” (Nabi mereka) menjawab, “Sesungguhnya Allah telah memilihnya (menjadi raja) kamu dan memberikan kepadanya kelebihan ilmu dan fisik.” Allah menganugerahkan kerajaan-Nya kepada siapa yang Dia kehendaki. Allah Maha Luas (kekuasaan dan rezeki-Nya) lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002247.mp3",
        "translation_en": "And their prophet said to them, \"Indeed, Allah has sent to you Saul as a king.\" They said, \"How can he have kingship over us while we are more worthy of kingship than him and he has not been given any measure of wealth?\" He said, \"Indeed, Allah has chosen him over you and has increased him abundantly in knowledge and stature. And Allah gives His sovereignty to whom He wills. And Allah is all-Encompassing [in favor] and Knowing.\""
      },
      {
        "number": 248,
        "arabic": "وَقَالَ لَهُمْ نَبِيُّهُمْ اِنَّ اٰيَةَ مُلْكِهٖٓ اَنْ يَّأْتِيَكُمُ التَّابُوْتُ فِيْهِ سَكِيْنَةٌ مِّنْ رَّبِّكُمْ وَبَقِيَّةٌ مِّمَّا تَرَكَ اٰلُ مُوْسٰى وَاٰلُ هٰرُوْنَ تَحْمِلُهُ الْمَلٰۤىِٕكَةُ ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيَةً لَّكُمْ اِنْ كُنْتُمْ مُّؤْمِنِيْنَ ࣖ",
        "latin": "Wa qāla lahum nabiyyuhum inna āyata mulkihī ay ya'tiyakumut-tābūtu fīhi sakīnatum mir rabbikum wa baqiyyatum mimmā taraka ālu mūsā wa ālu hārūna taḥmiluhul-malā'ikah(tu), inna fī żālika la āyatal lakum in kuntum mu'minīn(a). ",
        "translation": "Nabi mereka berkata kepada mereka, “Sesungguhnya tanda kerajaannya ialah datangnya Tabut kepadamu yang di dalamnya terdapat ketenangan dari Tuhanmu dan sisa dari apa yang ditinggalkan oleh keluarga Musa dan keluarga Harun yang dibawa oleh para malaikat. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda (kebesaran Allah) bagimu jika kamu orang-orang mukmin.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002248.mp3",
        "translation_en": "And their prophet said to them, \"Indeed, a sign of his kingship is that the chest will come to you in which is assurance from your Lord and a remnant of what the family of Moses and the family of Aaron had left, carried by the angels. Indeed in that is a sign for you, if you are believers.\""
      },
      {
        "number": 249,
        "arabic": "فَلَمَّا فَصَلَ طَالُوْتُ بِالْجُنُوْدِ قَالَ اِنَّ اللّٰهَ مُبْتَلِيْكُمْ بِنَهَرٍۚ فَمَنْ شَرِبَ مِنْهُ فَلَيْسَ مِنِّيْۚ وَمَنْ لَّمْ يَطْعَمْهُ فَاِنَّهٗ مِنِّيْٓ اِلَّا مَنِ اغْتَرَفَ غُرْفَةً ۢبِيَدِهٖ ۚ فَشَرِبُوْا مِنْهُ اِلَّا قَلِيْلًا مِّنْهُمْ ۗ فَلَمَّا جَاوَزَهٗ هُوَ وَالَّذِيْنَ اٰمَنُوْا مَعَهٗۙ قَالُوْا لَا طَاقَةَ لَنَا الْيَوْمَ بِجَالُوْتَ وَجُنُوْدِهٖ ۗ قَالَ الَّذِيْنَ يَظُنُّوْنَ اَنَّهُمْ مُّلٰقُوا اللّٰهِ ۙ كَمْ مِّنْ فِئَةٍ قَلِيْلَةٍ غَلَبَتْ فِئَةً كَثِيْرَةً ۢبِاِذْنِ اللّٰهِ ۗ وَاللّٰهُ مَعَ الصّٰبِرِيْنَ ",
        "latin": "Falammā faṣala ṭālūtu bil-junūd(i), qāla innallāha mubtalīkum binahar(in), faman syariba minhu falaisa minnī, wa mal lam yaṭ‘amhu fa innahū minnī illā manigtarafa gurfatam biyadih(ī), fa syaribū minhu illā qalīlam minhum, falammā jāwazahū huwa wal-lażīna āmanū ma‘ah(ū), qālū lā ṭāqata lanal-yauma bijālūta wa junūdih(ī), qālal-lażīna yaẓunnūna annahum mulāqullāh(i), kam min fi'atin qalīlatin galabat fi'atan kaṡīratam bi'iżnillāh(i), wallāhu ma‘aṣ-ṣābirīn(a). ",
        "translation": "Maka, ketika Talut keluar membawa bala tentara(-nya), dia berkata, “Sesungguhnya Allah akan mengujimu dengan sebuah sungai. Maka, siapa yang meminum (airnya), sesungguhnya dia tidak termasuk (golongan)-ku. Siapa yang tidak meminumnya, sesungguhnya dia termasuk (golongan)-ku kecuali menciduk seciduk dengan tangan.” Akan tetapi, mereka meminumnya kecuali sebagian kecil di antara mereka. Ketika dia (Talut) dan orang-orang yang beriman bersamanya menyeberangi sungai itu, mereka berkata, “Kami tidak kuat lagi pada hari ini melawan Jalut dan bala tentaranya.” Mereka yang meyakini bahwa mereka akan menemui Allah berkata, “Betapa banyak kelompok kecil mengalahkan kelompok besar dengan izin Allah.” Allah bersama orang-orang yang sabar.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002249.mp3",
        "translation_en": "And when Saul went forth with the soldiers, he said, \"Indeed, Allah will be testing you with a river. So whoever drinks from it is not of me, and whoever does not taste it is indeed of me, excepting one who takes [from it] in the hollow of his hand.\" But they drank from it, except a [very] few of them. Then when he had crossed it along with those who believed with him, they said, \"There is no power for us today against Goliath and his soldiers.\" But those who were certain that they would meet Allah said, \"How many a small company has overcome a large company by permission of Allah. And Allah is with the patient.\""
      },
      {
        "number": 250,
        "arabic": "وَلَمَّا بَرَزُوْا لِجَالُوْتَ وَجُنُوْدِهٖ قَالُوْا رَبَّنَآ اَفْرِغْ عَلَيْنَا صَبْرًا وَّثَبِّتْ اَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ ۗ ",
        "latin": "Wa lammā barazū lijālūta wa junūdihī qālū rabbanā afrig ‘alainā ṣabraw wa ṡabbit aqdāmanā wanṣurnā ‘alal-qaumil-kāfirīn(a).  ",
        "translation": "Ketika mereka maju melawan Jalut dan bala tentaranya, mereka berdoa, “Ya Tuhan kami, limpahkanlah kesabaran kepada kami, kukuhkanlah langkah kami, dan menangkanlah kami atas kaum yang kafir.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002250.mp3",
        "translation_en": "And when they went forth to [face] Goliath and his soldiers, they said, \"Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.\""
      },
      {
        "number": 251,
        "arabic": "فَهَزَمُوْهُمْ بِاِذْنِ اللّٰهِ  ۗوَقَتَلَ دَاوٗدُ جَالُوْتَ وَاٰتٰىهُ اللّٰهُ الْمُلْكَ وَالْحِكْمَةَ وَعَلَّمَهٗ مِمَّا يَشَاۤءُ ۗ وَلَوْلَا دَفْعُ اللّٰهِ النَّاسَ بَعْضَهُمْ بِبَعْضٍ لَّفَسَدَتِ الْاَرْضُ وَلٰكِنَّ اللّٰهَ ذُوْ فَضْلٍ عَلَى الْعٰلَمِيْنَ ",
        "latin": "Fahazamūhum bi'iżnillāh(i), wa qatala dāwūdu jālūta wa ātāhullāhul-mulka wal-ḥikmata wa ‘allamahū mimmā yasyā'(u), wa lau lā daf‘ullāhin-nāsa ba‘ḍahum biba‘ḍil lafasadatil-arḍu wa lākinnallāha żū faḍlin ‘alal-‘ālamīn(a). ",
        "translation": "Mereka (tentara Talut) mengalahkan tentara Jalut dengan izin Allah dan Daud membunuh Jalut. Kemudian, Allah menganugerahinya (Daud) kerajaan dan hikmah (kenabian); Dia (juga) mengajarinya apa yang Dia kehendaki. Seandainya Allah tidak menolak (keganasan) sebagian manusia dengan sebagian yang lain, niscaya rusaklah bumi ini. Akan tetapi, Allah mempunyai karunia (yang dilimpahkan-Nya) atas seluruh alam.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002251.mp3",
        "translation_en": "So they defeated them by permission of Allah, and David killed Goliath, and Allah gave him the kingship and prophethood and taught him from that which He willed. And if it were not for Allah checking [some] people by means of others, the earth would have been corrupted, but Allah is full of bounty to the worlds."
      },
      {
        "number": 252,
        "arabic": "تِلْكَ اٰيٰتُ اللّٰهِ نَتْلُوْهَا عَلَيْكَ بِالْحَقِّ ۗ وَاِنَّكَ لَمِنَ الْمُرْسَلِيْنَ  ۔",
        "latin": "Tilka āyātullāhi natlūhā ‘alaika bil-ḥaqq(i), wa innaka laminal-mursalīn(a).  ",
        "translation": "Itulah ayat-ayat Allah. Kami membacakannya kepadamu (Nabi Muhammad) dengan benar. Sesungguhnya engkau benar-benar termasuk di antara para rasul.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002252.mp3",
        "translation_en": "These are the verses of Allah which We recite to you, [O Muhammad], in truth. And indeed, you are from among the messengers."
      },
      {
        "number": 253,
        "arabic": "۞ تِلْكَ الرُّسُلُ فَضَّلْنَا بَعْضَهُمْ عَلٰى بَعْضٍۘ مِنْهُمْ مَّنْ كَلَّمَ اللّٰهُ وَرَفَعَ بَعْضَهُمْ دَرَجٰتٍۗ وَاٰتَيْنَا عِيْسَى ابْنَ مَرْيَمَ الْبَيِّنٰتِ وَاَيَّدْنٰهُ بِرُوْحِ الْقُدُسِۗ وَلَوْ شَاۤءَ اللّٰهُ مَا اقْتَتَلَ الَّذِيْنَ مِنْۢ بَعْدِهِمْ مِّنْۢ بَعْدِ مَا جَاۤءَتْهُمُ الْبَيِّنٰتُ وَلٰكِنِ اخْتَلَفُوْا فَمِنْهُمْ مَّنْ اٰمَنَ وَمِنْهُمْ مَّنْ كَفَرَ ۗوَلَوْ شَاۤءَ اللّٰهُ مَا اقْتَتَلُوْاۗ وَلٰكِنَّ اللّٰهَ يَفْعَلُ مَا يُرِيْدُ ࣖ",
        "latin": "Tilkar-rusulu faḍḍalnā ba‘ḍahum ‘alā ba‘ḍ(in), minhum man kallamallāhu wa rafa‘a ba‘ḍahum darajāt(in), wa ātainā ‘īsabna maryamal-bayyināti wa ayyadnāhu birūḥil-qudus(i), wa lau syā'allāhu maqtatalal-lażīna mim ba‘dihim mim ba‘di mā jā'athumul-bayyinātu wa lākinikhtalafū fa minhum man āmana wa minhum man kafar(a),  wa lau syā'allāhu maqtatalū, wa lākinnallāha yaf‘alu mā yurīd(u).  ",
        "translation": "Para rasul itu Kami lebihkan sebagian mereka atas sebagian (yang lain). Di antara mereka ada yang Allah berbicara (langsung) dengannya dan sebagian lagi Dia tinggikan beberapa derajat. Kami telah menganugerahkan kepada Isa putra Maryam bukti-bukti yang sangat jelas (mukjizat) dan Kami memperkuat dia dengan Ruhulkudus (Jibril). Seandainya Allah menghendaki, niscaya orang-orang setelah mereka tidak akan saling membunuh setelah bukti-bukti sampai kepada mereka. Akan tetapi, mereka berselisih sehingga ada di antara mereka yang beriman dan ada (pula) yang kufur. Andaikata Allah menghendaki, tidaklah mereka saling membunuh. Namun, Allah melakukan apa yang Dia kehendaki.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002253.mp3",
        "translation_en": "Those messengers - some of them We caused to exceed others. Among them were those to whom Allah spoke, and He raised some of them in degree. And We gave Jesus, the Son of Mary, clear proofs, and We supported him with the Pure Spirit. If Allah had willed, those [generations] succeeding them would not have fought each other after the clear proofs had come to them. But they differed, and some of them believed and some of them disbelieved. And if Allah had willed, they would not have fought each other, but Allah does what He intends."
      },
      {
        "number": 254,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَنْفِقُوْا مِمَّا رَزَقْنٰكُمْ مِّنْ قَبْلِ اَنْ يَّأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيْهِ وَلَا خُلَّةٌ وَّلَا شَفَاعَةٌ  ۗوَالْكٰفِرُوْنَ هُمُ الظّٰلِمُوْنَ",
        "latin": "Yā ayyuhal-lażīna āmanū anfiqū mimmā razaqnākum min qabli ay ya'tiya yaumul lā bai‘un fīhi wa lā khullatuw wa lā syafā‘ah(tun), wal-kāfirūna humuẓ-ẓālimūn(a).  ",
        "translation": "Wahai orang-orang yang beriman, infakkanlah sebagian dari rezeki yang telah Kami anugerahkan kepadamu sebelum datang hari (Kiamat) yang tidak ada (lagi) jual beli padanya (hari itu), tidak ada juga persahabatan yang akrab, dan tidak ada pula syafaat. Orang-orang kafir itulah orang-orang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002254.mp3",
        "translation_en": "O you who have believed, spend from that which We have provided for you before there comes a Day in which there is no exchange and no friendship and no intercession. And the disbelievers - they are the wrongdoers."
      },
      {
        "number": 255,
        "arabic": "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ  لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
        "latin": "Allāhu lā ilāha illā huw(a), al-ḥayyul-qayyūm(u), lā ta'khużuhū sinatuw wa lā naum(un), lahū mā fis-samāwāti wa mā fil-arḍ(i), man żal-lażī yasyfa‘u ‘indahū illā bi'iżnih(ī), ya‘lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭūna bisyai'im min ‘ilmihī illā bimā syā'(a), wasi‘a kursiyyuhus-samāwāti wal-arḍ(a), wa lā ya'ūduhū ḥifẓuhumā, wa huwal-‘aliyyul-‘aẓīm(u).  ",
        "translation": "Allah, tidak ada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus (makhluk-Nya). Dia tidak dilanda oleh kantuk dan tidak (pula) oleh tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya, kecuali apa yang Dia kehendaki. Kursi-Nya (ilmu dan kekuasaan-Nya) meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dialah yang Maha Tinggi lagi Maha Agung.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002255.mp3",
        "translation_en": "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."
      },
      {
        "number": 256,
        "arabic": "لَآ اِكْرَاهَ فِى الدِّيْنِۗ  قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَا ۗوَاللّٰهُ سَمِيْعٌ عَلِيْمٌ",
        "latin": "Lā ikrāha fid-dīn(i), qat tabayyanar-rusydu minal-gayy(i), famay yakfur biṭ-ṭāgūti wa yu'mim billāhi fa qadistamsaka bil-‘urwatil-wuṡqā, lanfiṣāma lahā, wallāhu samī‘un ‘alīm(un).  ",
        "translation": "Tidak ada paksaan dalam (menganut) agama (Islam). Sungguh, telah jelas jalan yang benar dari jalan yang sesat. Siapa yang ingkar kepada tagut dan beriman kepada Allah sungguh telah berpegang teguh pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002256.mp3",
        "translation_en": "There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing."
      },
      {
        "number": 257,
        "arabic": "اَللّٰهُ وَلِيُّ الَّذِيْنَ اٰمَنُوْا يُخْرِجُهُمْ مِّنَ الظُّلُمٰتِ اِلَى النُّوْرِۗ وَالَّذِيْنَ كَفَرُوْٓا اَوْلِيَاۤؤُهُمُ الطَّاغُوْتُ يُخْرِجُوْنَهُمْ مِّنَ النُّوْرِ اِلَى الظُّلُمٰتِۗ  اُولٰۤىِٕكَ اَصْحٰبُ النَّارِۚ هُمْ فِيْهَا خٰلِدُوْنَ ࣖ",
        "latin": "Allāhu waliyyul-lażīna āmanū yukhrijuhum minaẓ-ẓulumāti ilan-nūr(i), wal-lażīna kafarū auliyā'uhumuṭ-ṭāgūtu yukhrijuhum minan-nūri ilaẓ-ẓulumāt(i), ulā'ika aṣḥābun-nār(i), hum fīhā khālidūn(a).  ",
        "translation": "Allah adalah pelindung orang-orang yang beriman. Dia mengeluarkan mereka dari aneka kegelapan menuju cahaya (iman). Sedangkan orang-orang yang kufur, pelindung-pelindung mereka adalah tagut. Mereka (tagut) mengeluarkan mereka (orang-orang kafir itu) dari cahaya menuju aneka kegelapan. Mereka itulah para penghuni neraka. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002257.mp3",
        "translation_en": "Allah is the ally of those who believe. He brings them out from darknesses into the light. And those who disbelieve - their allies are Taghut. They take them out of the light into darknesses. Those are the companions of the Fire; they will abide eternally therein."
      },
      {
        "number": 258,
        "arabic": "اَلَمْ تَرَ اِلَى الَّذِيْ حَاۤجَّ اِبْرٰهٖمَ فِيْ رَبِّهٖٓ اَنْ اٰتٰىهُ اللّٰهُ الْمُلْكَ ۘ اِذْ قَالَ اِبْرٰهٖمُ رَبِّيَ الَّذِيْ يُحْيٖ وَيُمِيْتُۙ قَالَ اَنَا۠ اُحْيٖ وَاُمِيْتُ ۗ قَالَ اِبْرٰهٖمُ فَاِنَّ اللّٰهَ يَأْتِيْ بِالشَّمْسِ مِنَ الْمَشْرِقِ فَأْتِ بِهَا مِنَ الْمَغْرِبِ فَبُهِتَ الَّذِيْ كَفَرَ ۗوَاللّٰهُ لَا يَهْدِى الْقَوْمَ الظّٰلِمِيْنَۚ",
        "latin": "Alam tara ilal-lażī ḥājja ibrāhīma fī rabbihī an ātāhullāhul-mulk(a), iż qāla ibrāhīmu rabbiyal-lażī yuḥyī wa yumīt(u), qāla ana uḥyī wa umīt(u), qāla ibrāhīmu fa innallāha ya'tī bisy-syamsi minal-masyriqi fa'ti bihā minal-magribi fabuhital-lażī kafar(a), wallāhu lā yahdil-qaumaẓ-ẓālimīn(a).  ",
        "translation": "Tidakkah kamu memperhatikan orang yang mendebat Ibrahim mengenai Tuhannya karena Allah telah menganugerahkan kepadanya (orang itu) kerajaan (kekuasaan), (yakni) ketika Ibrahim berkata, “Tuhankulah yang menghidupkan dan mematikan.” (Orang itu) berkata, “Aku (pun) dapat menghidupkan dan mematikan.” Ibrahim berkata, “Kalau begitu, sesungguhnya Allah menerbitkan matahari dari timur. Maka, terbitkanlah ia dari barat.” Akhirnya, bingunglah orang yang kufur itu. Allah tidak memberi petunjuk kepada kaum yang zalim.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002258.mp3",
        "translation_en": "Have you not considered the one who argued with Abraham about his Lord [merely] because Allah had given him kingship? When Abraham said, \"My Lord is the one who gives life and causes death,\" he said, \"I give life and cause death.\" Abraham said, \"Indeed, Allah brings up the sun from the east, so bring it up from the west.\" So the disbeliever was overwhelmed [by astonishment], and Allah does not guide the wrongdoing people."
      },
      {
        "number": 259,
        "arabic": "اَوْ كَالَّذِيْ مَرَّ عَلٰى قَرْيَةٍ وَّهِيَ خَاوِيَةٌ عَلٰى عُرُوْشِهَاۚ قَالَ اَنّٰى يُحْيٖ هٰذِهِ اللّٰهُ بَعْدَ مَوْتِهَا ۚ فَاَمَاتَهُ اللّٰهُ مِائَةَ عَامٍ ثُمَّ بَعَثَهٗ ۗ قَالَ كَمْ لَبِثْتَ ۗ قَالَ لَبِثْتُ يَوْمًا اَوْ بَعْضَ يَوْمٍۗ قَالَ بَلْ لَّبِثْتَ مِائَةَ عَامٍ فَانْظُرْ اِلٰى طَعَامِكَ وَشَرَابِكَ لَمْ يَتَسَنَّهْ ۚ وَانْظُرْ اِلٰى حِمَارِكَۗ وَلِنَجْعَلَكَ اٰيَةً لِّلنَّاسِ وَانْظُرْ اِلَى الْعِظَامِ كَيْفَ نُنْشِزُهَا ثُمَّ نَكْسُوْهَا لَحْمًا ۗ فَلَمَّا تَبَيَّنَ لَهٗ ۙ قَالَ اَعْلَمُ اَنَّ اللّٰهَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
        "latin": "Au kal-lażī marra ‘alā qaryatiw wa hiya khāwiyatun ‘alā ‘urūsyihā, qāla annā yuḥyī hāżihillāhu ba‘da mautihā, fa'amātahullāhu mi'ata ‘āmin ṡumma ba‘aṡah(ū), qāla kam labiṡt(a), qāla labiṡtu yauman au ba‘ḍa yaum(in), qāla bal labiṡta mi'ata ‘āmin fanẓur ilā ṭa‘āmika wa syarābika lam yatasannah, wanẓur ilā ḥimārik(a), wa linaj‘alaka āyatal lin-nāsi wanẓur ilal-‘iẓāmi kaifa nunsyizuhā ṡumma naksūhā laḥmā(n), falammā tabayyana lah(ū), qāla a‘lamu annallāha ‘alā kulli syai'in qadīr(un).  ",
        "translation": "Atau, seperti orang yang melewati suatu negeri yang (bangunan-bangunannya) telah roboh menutupi (reruntuhan) atap-atapnya. Dia berkata, “Bagaimana Allah menghidupkan kembali (negeri) ini setelah kehancurannya?” Lalu, Allah mematikannya selama seratus tahun, kemudian membangkitkannya (kembali). Dia (Allah) bertanya, “Berapa lama engkau tinggal (di sini)?” Dia menjawab, “Aku tinggal (di sini) sehari atau setengah hari.” Allah berfirman, “Sebenarnya engkau telah tinggal selama seratus tahun. Lihatlah makanan dan minumanmu yang belum berubah, (tetapi) lihatlah keledaimu (yang telah menjadi tulang-belulang) dan Kami akan menjadikanmu sebagai tanda (kekuasaan Kami) bagi manusia. Lihatlah tulang-belulang (keledai itu), bagaimana Kami menyusunnya kembali, kemudian Kami membalutnya dengan daging (sehingga hidup kembali).” Maka, ketika telah nyata baginya, dia pun berkata, “Aku mengetahui bahwa Allah Maha Kuasa atas segala sesuatu.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002259.mp3",
        "translation_en": "Or [consider such an example] as the one who passed by a township which had fallen into ruin. He said, \"How will Allah bring this to life after its death?\" So Allah caused him to die for a hundred years; then He revived him. He said, \"How long have you remained?\" The man said, \"I have remained a day or part of a day.\" He said, \"Rather, you have remained one hundred years. Look at your food and your drink; it has not changed with time. And look at your donkey; and We will make you a sign for the people. And look at the bones [of this donkey] - how We raise them and then We cover them with flesh.\" And when it became clear to him, he said, \"I know that Allah is over all things competent.\""
      },
      {
        "number": 260,
        "arabic": "وَاِذْ قَالَ اِبْرٰهٖمُ رَبِّ اَرِنِيْ كَيْفَ تُحْيِ الْمَوْتٰىۗ قَالَ اَوَلَمْ تُؤْمِنْ ۗقَالَ بَلٰى وَلٰكِنْ لِّيَطْمَىِٕنَّ قَلْبِيْ ۗقَالَ فَخُذْ اَرْبَعَةً مِّنَ الطَّيْرِ فَصُرْهُنَّ اِلَيْكَ ثُمَّ اجْعَلْ عَلٰى كُلِّ جَبَلٍ مِّنْهُنَّ جُزْءًا ثُمَّ ادْعُهُنَّ يَأْتِيْنَكَ سَعْيًا ۗوَاعْلَمْ اَنَّ اللّٰهَ عَزِيْزٌ حَكِيْمٌ ࣖ",
        "latin": "Wa iż qāla ibrāhīmu rabbi arinī kaifa tuḥyil-mautā, qāla awalam tu'min, qāla balā wa lākil liyaṭma'inna qalbī, qāla fakhuż arba‘atam minaṭ-ṭairi faṣurhunna ilaika ṡummaj‘al ‘alā kulli jabalim minhunna  juz'an ṡummad‘uhunna ya'tīnaka sa‘yā(n), wa‘lam annallāha ‘azīzun ḥakīm(un).  ",
        "translation": "(Ingatlah) ketika Ibrahim berkata, “Ya Tuhanku, perlihatkanlah kepadaku bagaimana Engkau menghidupkan orang-orang mati.” Dia (Allah) berfirman, “Belum percayakah engkau?” Dia (Ibrahim) menjawab, “Aku percaya, tetapi agar hatiku tenang.” Dia (Allah) berfirman, “Kalau begitu, ambillah empat ekor burung, lalu dekatkanlah kepadamu (potong-potonglah). Kemudian, letakkanlah di atas setiap bukit satu bagian dari tiap-tiap burung. Selanjutnya, panggillah mereka, niscaya mereka datang kepadamu dengan segera.” Ketahuilah bahwa Allah Maha Perkasa lagi Maha Bijaksana.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002260.mp3",
        "translation_en": "And [mention] when Abraham said, \"My Lord, show me how You give life to the dead.\" [Allah] said, \"Have you not believed?\" He said, \"Yes, but [I ask] only that my heart may be satisfied.\" [Allah] said, \"Take four birds and commit them to yourself. Then [after slaughtering them] put on each hill a portion of them; then call them - they will come [flying] to you in haste. And know that Allah is Exalted in Might and Wise.\""
      },
      {
        "number": 261,
        "arabic": "مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللّٰهُ يُضٰعِفُ لِمَنْ يَّشَاۤءُ ۗوَاللّٰهُ وَاسِعٌ عَلِيْمٌ",
        "latin": "Maṡalul-lażīna yunfiqūna amwālahum fī sabīlillāhi kamaṡali ḥabbatin ambatat sab‘a sanābila fī kulli sumbulatim mi'atu ḥabbah(tin), wallāhu yuḍā‘ifu limay yasyā'(u), wallāhu wāsi‘un ‘alīm(un).  ",
        "translation": "Perumpamaan orang-orang yang menginfakkan hartanya di jalan Allah adalah seperti (orang-orang yang menabur) sebutir biji (benih) yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan (pahala) bagi siapa yang Dia kehendaki. Allah Maha Luas lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002261.mp3",
        "translation_en": "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills. And Allah is all-Encompassing and Knowing."
      },
      {
        "number": 262,
        "arabic": "اَلَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ ثُمَّ لَا يُتْبِعُوْنَ مَآ اَنْفَقُوْا مَنًّا وَّلَآ اَذًىۙ  لَّهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ",
        "latin": "Allażīna yunfiqūna amwālahum fī sabīlillāhi ṡumma lā yutbi‘ūna mā anfaqū mannaw wa lā ażā(n), lahum ajruhum ‘inda rabbihim, wa lā khaufun ‘alaihim wa lā hum yaḥzanūn(a).  ",
        "translation": "Orang-orang yang menginfakkan harta mereka di jalan Allah, kemudian tidak mengiringi apa yang mereka infakkan itu dengan menyebut-nyebutnya dan menyakiti (perasaan penerima), bagi mereka pahala di sisi Tuhan mereka. Tidak ada rasa takut pada mereka dan mereka tidak bersedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002262.mp3",
        "translation_en": "Those who spend their wealth in the way of Allah and then do not follow up what they have spent with reminders [of it] or [other] injury will have their reward with their Lord, and there will be no fear concerning them, nor will they grieve."
      },
      {
        "number": 263,
        "arabic": "۞ قَوْلٌ مَّعْرُوْفٌ وَّمَغْفِرَةٌ خَيْرٌ مِّنْ صَدَقَةٍ يَّتْبَعُهَآ اَذًى ۗ وَاللّٰهُ غَنِيٌّ حَلِيْمٌ",
        "latin": "Qaulum ma‘rūfuw wa magfiratun khairum min ṣadaqatiy yatba‘uhā ażā(n), wallāhu ganiyyun ḥalīm(un).  ",
        "translation": "Perkataan yang baik dan pemberian maaf itu lebih baik daripada sedekah yang diiringi tindakan yang menyakiti. Allah Maha Kaya lagi Maha Penyantun.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002263.mp3",
        "translation_en": "Kind speech and forgiveness are better than charity followed by injury. And Allah is Free of need and Forbearing."
      },
      {
        "number": 264,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا لَا تُبْطِلُوْا صَدَقٰتِكُمْ بِالْمَنِّ وَالْاَذٰىۙ  كَالَّذِيْ يُنْفِقُ مَالَهٗ رِئَاۤءَ النَّاسِ وَلَا يُؤْمِنُ بِاللّٰهِ وَالْيَوْمِ الْاٰخِرِۗ  فَمَثَلُهٗ كَمَثَلِ صَفْوَانٍ عَلَيْهِ تُرَابٌ فَاَصَابَهٗ وَابِلٌ فَتَرَكَهٗ صَلْدًا ۗ  لَا يَقْدِرُوْنَ عَلٰى شَيْءٍ مِّمَّا كَسَبُوْا ۗ وَاللّٰهُ لَا يَهْدِى الْقَوْمَ الْكٰفِرِيْنَ",
        "latin": "Yā ayyuhal-lażīna āmanū lā tubṭilū ṣadaqātikum bil-manni wal-ażā, kal-lażī yunfiqu mālahū ri'ā'an-nāsi wa lā yu'minu billāhi wal-yaumil-ākhir(i), fa maṡaluhū kamaṡali ṣafwānin ‘alaihi turābun fa'aṣābahū wābilun fatarakahū ṣaldā(n), lā yaqdirūna ‘alā syai'im mimmā kasabū, wallāhu lā yahdil-qaumal-kāfirīn(a).  ",
        "translation": "Wahai orang-orang yang beriman, jangan membatalkan (pahala) sedekahmu dengan menyebut-nyebutnya dan menyakiti (perasaan penerima), seperti orang yang menginfakkan hartanya karena riya (pamer) kepada manusia, sedangkan dia tidak beriman kepada Allah dan hari Akhir. Perumpamaannya (orang itu) seperti batu licin yang di atasnya ada debu, lalu batu itu diguyur hujan lebat sehingga tinggallah (batu) itu licin kembali. Mereka tidak menguasai sesuatu pun dari apa yang mereka usahakan. Allah tidak memberi petunjuk kepada kaum kafir.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002264.mp3",
        "translation_en": "O you who have believed, do not invalidate your charities with reminders or injury as does one who spends his wealth [only] to be seen by the people and does not believe in Allah and the Last Day. His example is like that of a [large] smooth stone upon which is dust and is hit by a downpour that leaves it bare. They are unable [to keep] anything of what they have earned. And Allah does not guide the disbelieving people."
      },
      {
        "number": 265,
        "arabic": "وَمَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمُ ابْتِغَاۤءَ مَرْضَاتِ اللّٰهِ وَتَثْبِيْتًا مِّنْ اَنْفُسِهِمْ كَمَثَلِ جَنَّةٍۢ بِرَبْوَةٍ اَصَابَهَا وَابِلٌ فَاٰتَتْ اُكُلَهَا ضِعْفَيْنِۚ فَاِنْ لَّمْ يُصِبْهَا وَابِلٌ فَطَلٌّ  ۗوَاللّٰهُ بِمَا تَعْمَلُوْنَ بَصِيْرٌ",
        "latin": "Wa maṡalul-lażīna yunfiqūna amwālahumubtigā'a marḍātillāhi wa taṡbītam min anfusihim kamaṡali jannatim birabwatin aṣābahā wābilun fa'ātat ukulahā ḍi‘fain(i), fa'illam yuṣibhā wābilun faṭall(un), wallāhu bimā ta‘malūna baṣīr(un).  ",
        "translation": "Perumpamaan orang-orang yang menginfakkan harta mereka untuk mencari rida Allah dan memperteguh jiwa mereka adalah seperti sebuah kebun di dataran tinggi yang disiram oleh hujan lebat, lalu ia (kebun itu) menghasilkan buah-buahan dua kali lipat. Jika hujan lebat tidak menyiraminya, hujan gerimis (pun memadai). Allah Maha Melihat apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002265.mp3",
        "translation_en": "And the example of those who spend their wealth seeking means to the approval of Allah and assuring [reward for] themselves is like a garden on high ground which is hit by a downpour - so it yields its fruits in double. And [even] if it is not hit by a downpour, then a drizzle [is sufficient]. And Allah, of what you do, is Seeing."
      },
      {
        "number": 266,
        "arabic": "اَيَوَدُّ اَحَدُكُمْ اَنْ تَكُوْنَ لَهٗ جَنَّةٌ مِّنْ نَّخِيْلٍ وَّاَعْنَابٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُۙ  لَهٗ فِيْهَا مِنْ كُلِّ الثَّمَرٰتِۙ وَاَصَابَهُ الْكِبَرُ وَلَهٗ ذُرِّيَّةٌ ضُعَفَاۤءُۚ فَاَصَابَهَآ اِعْصَارٌ فِيْهِ نَارٌ فَاحْتَرَقَتْ ۗ  كَذٰلِكَ يُبَيِّنُ اللّٰهُ لَكُمُ الْاٰيٰتِ لَعَلَّكُمْ تَتَفَكَّرُوْنَ ࣖ",
        "latin": "Ayawaddu aḥadukum an takūna lahū jannatum min nakhīliw wa a‘nābin tajrī min taḥtihal-anhār(u), lahū fīhā min kulliṡ-ṡamarāt(i), wa aṣābahul-kibaru wa lahū żurriyyatun ḍu‘afā'(u), fa'aṣābahā i‘ṣārun fīhi nārun faḥtaraqat, każālika yubayyinullāhu lakumul-āyāti la‘allakum tatafakkarūn(a).  ",
        "translation": "Apakah salah seorang di antara kamu ingin memiliki kebun kurma dan anggur yang mengalir di bawahnya sungai-sungai, di sana dia memiliki segala macam buah-buahan. Kemudian, datanglah masa tua, sedangkan dia memiliki keturunan yang masih kecil-kecil. Lalu, kebun itu ditiup angin kencang yang mengandung api sehingga terbakar. Demikianlah Allah menerangkan ayat-ayat-Nya kepadamu agar kamu memikirkan(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002266.mp3",
        "translation_en": "Would one of you like to have a garden of palm trees and grapevines underneath which rivers flow in which he has from every fruit? But he is afflicted with old age and has weak offspring, and it is hit by a whirlwind containing fire and is burned. Thus does Allah make clear to you [His] verses that you might give thought."
      },
      {
        "number": 267,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اَنْفِقُوْا مِنْ طَيِّبٰتِ مَا كَسَبْتُمْ وَمِمَّآ اَخْرَجْنَا لَكُمْ مِّنَ الْاَرْضِ ۗ وَلَا تَيَمَّمُوا الْخَبِيْثَ مِنْهُ تُنْفِقُوْنَ وَلَسْتُمْ بِاٰخِذِيْهِ اِلَّآ اَنْ تُغْمِضُوْا فِيْهِ ۗ وَاعْلَمُوْٓا اَنَّ اللّٰهَ غَنِيٌّ حَمِيْدٌ",
        "latin": "Yā ayyuhal-lażīna āmanū anfiqū min ṭayyibāti mā kasabtum wa mimmā akhrajnā lakum minal-arḍ(i), wa lā tayammamul-khabīṡa minhu tunfiqūna wa lastum bi'ākhiżīhi illā an tugmiḍū fīh(i), wa‘lamū annallāha ganiyyun ḥamīd(un).  ",
        "translation": "Wahai orang-orang yang beriman, infakkanlah sebagian dari hasil usahamu yang baik-baik dan sebagian dari apa yang Kami keluarkan dari bumi untukmu. Janganlah kamu memilih yang buruk untuk kamu infakkan, padahal kamu tidak mau mengambilnya, kecuali dengan memicingkan mata (enggan) terhadapnya. Ketahuilah bahwa Allah Maha Kaya lagi Maha Terpuji.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002267.mp3",
        "translation_en": "O you who have believed, spend from the good things which you have earned and from that which We have produced for you from the earth. And do not aim toward the defective therefrom, spending [from that] while you would not take it [yourself] except with closed eyes. And know that Allah is Free of need and Praiseworthy."
      },
      {
        "number": 268,
        "arabic": "اَلشَّيْطٰنُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُمْ بِالْفَحْشَاۤءِ ۚ وَاللّٰهُ يَعِدُكُمْ مَّغْفِرَةً مِّنْهُ وَفَضْلًا ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ ۖ ",
        "latin": "Asy-syaiṭānu ya‘idukumul-faqra wa ya'murukum bil-faḥsyā'(i), wallāhu ya‘idukum magfiratam minhu wa faḍlā(n), wallāhu wāsi'un ‘alīm(un).  ",
        "translation": "Setan menjanjikan (menakut-nakuti) kamu kemiskinan dan menyuruh kamu berbuat keji (kikir), sedangkan Allah menjanjikan kamu ampunan dan karunia-Nya. Allah Maha Luas lagi Maha Mengetahui.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002268.mp3",
        "translation_en": "Satan threatens you with poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty. And Allah is all-Encompassing and Knowing."
      },
      {
        "number": 269,
        "arabic": "يُّؤْتِى الْحِكْمَةَ مَنْ يَّشَاۤءُ ۚ وَمَنْ يُّؤْتَ الْحِكْمَةَ فَقَدْ اُوْتِيَ خَيْرًا كَثِيْرًا ۗ وَمَا يَذَّكَّرُ اِلَّآ اُولُوا الْاَلْبَابِ",
        "latin": "Yu'til-ḥikmata may yasyā'(u), wa may yu'tal-ḥikmata faqad ūtiya khairan kaṡīrā(n), wa mā yażżakkaru ilā ulul-albāb(i).  ",
        "translation": "Dia (Allah) menganugerahkan hikmah kepada siapa yang Dia kehendaki. Siapa yang dianugerahi hikmah, sungguh dia telah dianugerahi kebaikan yang banyak. Tidak ada yang dapat mengambil pelajaran (darinya), kecuali ululalbab.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002269.mp3",
        "translation_en": "He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good. And none will remember except those of understanding."
      },
      {
        "number": 270,
        "arabic": "وَمَآ اَنْفَقْتُمْ مِّنْ نَّفَقَةٍ اَوْ نَذَرْتُمْ مِّنْ نَّذْرٍ فَاِنَّ اللّٰهَ يَعْلَمُهٗ ۗ وَمَا لِلظّٰلِمِيْنَ مِنْ اَنْصَارٍ",
        "latin": "Wa mā anfaqtum min nafaqatin au nażartum min nażrin fa innallāha ya‘lamuh(ū), wa mā liẓ-ẓālimīna min anṣār(in).  ",
        "translation": "Infak apa pun yang kamu berikan atau nazar apa pun yang kamu janjikan sesungguhnya Allah mengetahuinya. Bagi orang-orang zalim tidak ada satu pun penolong (dari azab Allah).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002270.mp3",
        "translation_en": "And whatever you spend of expenditures or make of vows - indeed, Allah knows of it. And for the wrongdoers there are no helpers."
      },
      {
        "number": 271,
        "arabic": "اِنْ تُبْدُوا الصَّدَقٰتِ فَنِعِمَّا هِيَۚ وَاِنْ تُخْفُوْهَا وَتُؤْتُوْهَا الْفُقَرَاۤءَ فَهُوَ خَيْرٌ لَّكُمْ ۗ وَيُكَفِّرُ عَنْكُمْ مِّنْ سَيِّاٰتِكُمْ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌ",
        "latin": "In tubduṣ-ṣadaqāti fani‘immā hiy(a), wa in tukhfūhā wa tu'tūhal-fuqarā'a fahuwa khairul lakum, wa yukaffiru ‘ankum min sayyi'ātikum, wallāhu bimā ta‘malūna khabīr(un).  ",
        "translation": "Jika kamu menampakkan sedekahmu, itu baik. (Akan tetapi,) jika kamu menyembunyikannya dan memberikannya kepada orang-orang fakir, itu lebih baik bagimu. Allah akan menghapus sebagian kesalahanmu. Allah Maha Teliti terhadap apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002271.mp3",
        "translation_en": "If you disclose your charitable expenditures, they are good; but if you conceal them and give them to the poor, it is better for you, and He will remove from you some of your misdeeds [thereby]. And Allah, with what you do, is [fully] Acquainted."
      },
      {
        "number": 272,
        "arabic": "۞ لَيْسَ عَلَيْكَ هُدٰىهُمْ وَلٰكِنَّ اللّٰهَ يَهْدِيْ مَنْ يَّشَاۤءُ ۗوَمَا تُنْفِقُوْا مِنْ خَيْرٍ فَلِاَنْفُسِكُمْ ۗوَمَا تُنْفِقُوْنَ اِلَّا ابْتِغَاۤءَ وَجْهِ اللّٰهِ ۗوَمَا تُنْفِقُوْا مِنْ خَيْرٍ يُّوَفَّ اِلَيْكُمْ وَاَنْتُمْ لَا تُظْلَمُوْنَ",
        "latin": "Laisa ‘alaika hudāhum wa lākinnallāha yahdī may yasyā'(u), wa mā tunfiqū min khairin fa li'anfusikum, wa mā tunfiqūna illabtigā'a wajhillāh(i), wa mā tunfiqū min khairiy yuwaffa ilaikum wa antum lā tuẓlamūn(a).  ",
        "translation": "Bukanlah kewajibanmu (Nabi Muhammad) menjadikan mereka mendapat petunjuk, tetapi Allahlah yang memberi petunjuk kepada siapa yang Dia kehendaki (berdasarkan kesiapannya untuk menerima petunjuk). Kebaikan apa pun yang kamu infakkan, (manfaatnya) untuk dirimu (sendiri). Kamu (orang-orang mukmin) tidak berinfak, kecuali karena mencari rida Allah. Kebaikan apa pun yang kamu infakkan, niscaya kamu akan diberi (pahala) secara penuh dan kamu tidak akan dizalimi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002272.mp3",
        "translation_en": "Not upon you, [O Muhammad], is [responsibility for] their guidance, but Allah guides whom He wills. And whatever good you [believers] spend is for yourselves, and you do not spend except seeking the countenance of Allah. And whatever you spend of good - it will be fully repaid to you, and you will not be wronged."
      },
      {
        "number": 273,
        "arabic": "لِلْفُقَرَاۤءِ الَّذِيْنَ اُحْصِرُوْا فِيْ سَبِيْلِ اللّٰهِ لَا يَسْتَطِيْعُوْنَ ضَرْبًا فِى الْاَرْضِۖ يَحْسَبُهُمُ الْجَاهِلُ اَغْنِيَاۤءَ مِنَ التَّعَفُّفِۚ  تَعْرِفُهُمْ بِسِيْمٰهُمْۚ  لَا يَسْـَٔلُوْنَ النَّاسَ اِلْحَافًا ۗوَمَا تُنْفِقُوْا مِنْ خَيْرٍ فَاِنَّ اللّٰهَ بِهٖ عَلِيْمٌ ࣖ",
        "latin": "Lil-fuqarā'il-lażīna uḥṣirū fī sabīlillāhi lā yastaṭī‘ūna ḍarban fil-arḍi yaḥsabuhumul-jāhilu  agniyā'a minat-ta‘affuf(i), ta‘rifuhum bisīmāhum, lā yas'alūnan-nāsa ilḥāfā(n), wa mā tunfiqū min khairin fa innallāha bihī ‘alīm(un).  ",
        "translation": "(Apa pun yang kamu infakkan) diperuntukkan bagi orang-orang fakir yang terhalang (usahanya karena jihad) di jalan Allah dan mereka tidak dapat berusaha di bumi. Orang yang tidak mengetahuinya mengira bahwa mereka adalah orang-orang kaya karena mereka memelihara diri dari mengemis. Engkau (Nabi Muhammad) mengenal mereka dari ciri-cirinya (karena) mereka tidak meminta secara paksa kepada orang lain. Kebaikan apa pun yang kamu infakkan, sesungguhnya Allah Maha Tahu tentang itu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002273.mp3",
        "translation_en": "[Charity is] for the poor who have been restricted for the cause of Allah, unable to move about in the land. An ignorant [person] would think them self-sufficient because of their restraint, but you will know them by their [characteristic] sign. They do not ask people persistently [or at all]. And whatever you spend of good - indeed, Allah is Knowing of it."
      },
      {
        "number": 274,
        "arabic": "اَلَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ بِالَّيْلِ وَالنَّهَارِ سِرًّا وَّعَلَانِيَةً فَلَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْۚ  وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ",
        "latin": "Allażīna yunfiqūna amwālahum bil-laili wan-nahāri sirraw wa ‘alāniyatan falahum ajruhum ‘inda rabbihim, wa lā khaufun ‘alaihim wa lā hum yaḥzanūn(a).  ",
        "translation": "Orang-orang yang menginfakkan hartanya pada malam dan siang hari, baik secara rahasia maupun terang-terangan, mereka mendapat pahala di sisi Tuhannya. Tidak ada rasa takut pada mereka dan tidak (pula) mereka bersedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002274.mp3",
        "translation_en": "Those who spend their wealth [in Allah 's way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve."
      },
      {
        "number": 275,
        "arabic": "اَلَّذِيْنَ يَأْكُلُوْنَ الرِّبٰوا لَا يَقُوْمُوْنَ اِلَّا كَمَا يَقُوْمُ الَّذِيْ يَتَخَبَّطُهُ الشَّيْطٰنُ مِنَ الْمَسِّۗ ذٰلِكَ بِاَنَّهُمْ قَالُوْٓا اِنَّمَا الْبَيْعُ مِثْلُ الرِّبٰواۘ وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰواۗ  فَمَنْ جَاۤءَهٗ مَوْعِظَةٌ مِّنْ رَّبِّهٖ فَانْتَهٰى فَلَهٗ مَا سَلَفَۗ وَاَمْرُهٗٓ اِلَى اللّٰهِ ۗ وَمَنْ عَادَ فَاُولٰۤىِٕكَ اَصْحٰبُ النَّارِ ۚ هُمْ فِيْهَا خٰلِدُوْنَ",
        "latin": "Allażīna ya'kulūnar-ribā lā yaqūmūna illā kamā yaqūmul-lażī yatakhabbaṭuhusy-syaiṭānu minal-mass(i), żālika bi'annahum qālū innamal-bai‘u miṡlur-ribā, wa aḥallallāhul-bai‘a wa ḥarramar-ribā, faman jā'ahū mau‘iẓatum mir rabbihī fantahā falahū mā salaf(a), wa amruhū ilallāh(i), wa man ‘āda fa ulā'ika aṣḥābun-nār(i), hum fīhā khālidūn(a).  ",
        "translation": "Orang-orang yang memakan (bertransaksi dengan) riba tidak dapat berdiri, kecuali seperti orang yang berdiri sempoyongan karena kesurupan setan. Demikian itu terjadi karena mereka berkata bahwa jual beli itu sama dengan riba. Padahal, Allah telah menghalalkan jual beli dan mengharamkan riba. Siapa pun yang telah sampai kepadanya peringatan dari Tuhannya (menyangkut riba), lalu dia berhenti sehingga apa yang telah diperolehnya dahulu menjadi miliknya dan urusannya (terserah) kepada Allah. Siapa yang mengulangi (transaksi riba), mereka itulah penghuni neraka. Mereka kekal di dalamnya.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002275.mp3",
        "translation_en": "Those who consume interest cannot stand [on the Day of Resurrection] except as one stands who is being beaten by Satan into insanity. That is because they say, \"Trade is [just] like interest.\" But Allah has permitted trade and has forbidden interest. So whoever has received an admonition from his Lord and desists may have what is past, and his affair rests with Allah. But whoever returns to [dealing in interest or usury] - those are the companions of the Fire; they will abide eternally therein."
      },
      {
        "number": 276,
        "arabic": "يَمْحَقُ اللّٰهُ الرِّبٰوا وَيُرْبِى الصَّدَقٰتِ ۗ وَاللّٰهُ لَا يُحِبُّ كُلَّ كَفَّارٍ اَثِيْمٍ",
        "latin": "Yamḥaqullāhur-ribā wa yurbiṣ-ṣadaqāt(i), wallāhu lā yuḥibbu kulla kaffārin aṡīm(in).  ",
        "translation": "Allah menghilangkan (keberkahan dari) riba dan menyuburkan sedekah. Allah tidak menyukai setiap orang yang sangat kufur lagi bergelimang dosa.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002276.mp3",
        "translation_en": "Allah destroys interest and gives increase for charities. And Allah does not like every sinning disbeliever."
      },
      {
        "number": 277,
        "arabic": "اِنَّ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَاَقَامُوا الصَّلٰوةَ وَاٰتَوُا الزَّكٰوةَ لَهُمْ اَجْرُهُمْ عِنْدَ رَبِّهِمْۚ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُوْنَ",
        "latin": "Innal-lażīna āmanū wa ‘amiluṣ-ṣāliḥāti wa aqāmuṣ-ṣalāta wa ātuz-zakāta lahum ajruhum ‘inda rabbihim, wa lā khaufun ‘alaihim wa lā hum yaḥzanūn(a).  ",
        "translation": "Sesungguhnya orang-orang yang beriman, beramal saleh, menegakkan salat, dan menunaikan zakat, mereka mendapat pahala di sisi Tuhannya. Tidak ada rasa takut pada mereka dan tidak (pula) mereka bersedih.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002277.mp3",
        "translation_en": "Indeed, those who believe and do righteous deeds and establish prayer and give zakah will have their reward with their Lord, and there will be no fear concerning them, nor will they grieve."
      },
      {
        "number": 278,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَذَرُوْا مَا بَقِيَ مِنَ الرِّبٰوٓا اِنْ كُنْتُمْ مُّؤْمِنِيْنَ",
        "latin": "Yā ayyuhal-lażīna āmanuttaqullāha wa żarū mā baqiya minar-ribā in kuntum mu'minīn(a). ",
        "translation": "Wahai orang-orang yang beriman, bertakwalah kepada Allah dan tinggalkan sisa riba (yang belum dipungut) jika kamu orang-orang mukmin.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002278.mp3",
        "translation_en": "O you who have believed, fear Allah and give up what remains [due to you] of interest, if you should be believers."
      },
      {
        "number": 279,
        "arabic": "فَاِنْ لَّمْ تَفْعَلُوْا فَأْذَنُوْا بِحَرْبٍ مِّنَ اللّٰهِ وَرَسُوْلِهٖۚ وَاِنْ تُبْتُمْ فَلَكُمْ رُءُوْسُ اَمْوَالِكُمْۚ  لَا تَظْلِمُوْنَ وَلَا تُظْلَمُوْنَ",
        "latin": "Fa'illam taf‘alū fa'żanū biḥarbim minallāhi wa rasūlih(ī), wa in tubtum falakum ru'ūsu amwālikum, lā taẓlimūna wa lā tuẓlamūn(a). ",
        "translation": "Jika kamu tidak melaksanakannya, ketahuilah akan terjadi perang (dahsyat) dari Allah dan Rasul-Nya. Akan tetapi, jika kamu bertobat, kamu berhak atas pokok hartamu. Kamu tidak berbuat zalim (merugikan) dan tidak dizalimi (dirugikan).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002279.mp3",
        "translation_en": "And if you do not, then be informed of a war [against you] from Allah and His Messenger. But if you repent, you may have your principal - [thus] you do no wrong, nor are you wronged."
      },
      {
        "number": 280,
        "arabic": "وَاِنْ كَانَ ذُوْ عُسْرَةٍ فَنَظِرَةٌ اِلٰى مَيْسَرَةٍ ۗ وَاَنْ تَصَدَّقُوْا خَيْرٌ لَّكُمْ اِنْ كُنْتُمْ تَعْلَمُوْنَ",
        "latin": "Wa in kāna żū ‘usratin fanaẓiratun ilā maisarah(tin), wa an taṣaddaqū khairul lakum in kuntum ta‘lamūn(a).  ",
        "translation": "Jika dia (orang yang berutang itu) dalam kesulitan, berilah tenggang waktu sampai dia memperoleh kelapangan. Kamu bersedekah (membebaskan utang) itu lebih baik bagimu apabila kamu mengetahui(-nya).",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002280.mp3",
        "translation_en": "And if someone is in hardship, then [let there be] postponement until [a time of] ease. But if you give [from your right as] charity, then it is better for you, if you only knew."
      },
      {
        "number": 281,
        "arabic": "وَاتَّقُوْا يَوْمًا تُرْجَعُوْنَ فِيْهِ اِلَى اللّٰهِ ۗثُمَّ تُوَفّٰى كُلُّ نَفْسٍ مَّا كَسَبَتْ وَهُمْ لَا يُظْلَمُوْنَ ࣖ",
        "latin": "Wattaqū yauman turja‘ūna fīhi ilallāh(i), ṡumma tuwaffā kullu nafsim mā kasabat wa hum lā yuẓlamūn(a).  ",
        "translation": "Waspadalah terhadap suatu hari (kiamat) yang padanya kamu semua dikembalikan kepada Allah. Kemudian, setiap orang diberi balasan yang sempurna sesuai dengan apa yang telah dilakukannya dan mereka tidak dizalimi.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002281.mp3",
        "translation_en": "And fear a Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be treated unjustly."
      },
      {
        "number": 282,
        "arabic": "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا تَدَايَنْتُمْ بِدَيْنٍ اِلٰٓى اَجَلٍ مُّسَمًّى فَاكْتُبُوْهُۗ وَلْيَكْتُبْ بَّيْنَكُمْ كَاتِبٌۢ بِالْعَدْلِۖ وَلَا يَأْبَ كَاتِبٌ اَنْ يَّكْتُبَ كَمَا عَلَّمَهُ اللّٰهُ فَلْيَكْتُبْۚ وَلْيُمْلِلِ الَّذِيْ عَلَيْهِ الْحَقُّ وَلْيَتَّقِ اللّٰهَ رَبَّهٗ وَلَا يَبْخَسْ مِنْهُ شَيْـًٔاۗ  فَاِنْ كَانَ الَّذِيْ عَلَيْهِ الْحَقُّ سَفِيْهًا اَوْ ضَعِيْفًا اَوْ لَا يَسْتَطِيْعُ اَنْ يُّمِلَّ هُوَ فَلْيُمْلِلْ وَلِيُّهٗ بِالْعَدْلِۗ وَاسْتَشْهِدُوْا شَهِيْدَيْنِ مِنْ رِّجَالِكُمْۚ فَاِنْ لَّمْ يَكُوْنَا رَجُلَيْنِ فَرَجُلٌ وَّامْرَاَتٰنِ مِمَّنْ تَرْضَوْنَ مِنَ الشُّهَدَۤاءِ اَنْ تَضِلَّ اِحْدٰىهُمَا فَتُذَكِّرَ اِحْدٰىهُمَا الْاُخْرٰىۗ وَلَا يَأْبَ الشُّهَدَۤاءُ اِذَا مَا دُعُوْا ۗ وَلَا تَسْـَٔمُوْٓا اَنْ تَكْتُبُوْهُ صَغِيْرًا اَوْ كَبِيْرًا اِلٰٓى اَجَلِهٖۗ ذٰلِكُمْ اَقْسَطُ عِنْدَ اللّٰهِ وَاَقْوَمُ لِلشَّهَادَةِ وَاَدْنٰىٓ اَلَّا تَرْتَابُوْٓا اِلَّآ اَنْ تَكُوْنَ تِجَارَةً حَاضِرَةً تُدِيْرُوْنَهَا بَيْنَكُمْ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ اَلَّا تَكْتُبُوْهَاۗ وَاَشْهِدُوْٓا اِذَا تَبَايَعْتُمْ ۖ وَلَا يُضَاۤرَّ كَاتِبٌ وَّلَا شَهِيْدٌ ەۗ وَاِنْ تَفْعَلُوْا فَاِنَّهٗ فُسُوْقٌۢ بِكُمْ ۗ وَاتَّقُوا اللّٰهَ ۗ وَيُعَلِّمُكُمُ اللّٰهُ ۗ وَاللّٰهُ بِكُلِّ شَيْءٍ عَلِيْمٌ",
        "latin": "Yā ayyuhal-lażīna āmanū iżā tadāyantum bidainin ilā ajalim musamman faktubūh(u), walyaktub bainakum kātibum bil-‘adl(i), wa lā ya'ba kātibun ay yaktuba kamā ‘allamahullāhu falyaktub, walyumlilil-lażī ‘alaihil-ḥaqqu walyattaqillāha rabbahū wa lā yabkhas minhu syai'ā(n), fa'in kānal-lażī ‘alaihil-ḥaqqu safīhan au ḍa‘īfan au lā yastaṭī‘u ay yumilla huwa falyumlil waliyyuhū bil-‘adl(i), wastasyhidū syahīdaini mir rijāliūkum, fa'illam yakūnā rajulaini farajuluw wamra'atāni mimman tarḍauna minasy-syuhadā'i an taḍilla iḥdāhumā fatużakkira iḥdāhumal-ukhrā, wa lā ya'basy-syuhadā'u iżā mā du‘ū, wa lā tas'amū an taktubūhu ṣagīran au kabīran ilā ajalih(ī), żālikum aqsaṭu ‘indallāhi wa aqwamu lisy-syahādati wa adnā allā tartābū illā an takūna tijāratan ḥāḍiratan tudīrūnahā bainakum falaisa ‘alaikum junāḥun allā taktubūhā, wa asyhidū iżā tabāya‘tum, wa lā yuḍārra kātibuw wa lā syahīd(un), wa in taf‘alū fa'innahū fusūqum bikum, wattaqullāh(a), wa yu‘allimukumullāh(u), wallāhu bikulli syai'in ‘alīm(un).  ",
        "translation": "Wahai orang-orang yang beriman, apabila kamu berutang piutang untuk waktu yang ditentukan, hendaklah kamu mencatatnya. Hendaklah seorang pencatat di antara kamu menuliskannya dengan benar. Janganlah pencatat menolak untuk menuliskannya sebagaimana Allah telah mengajar-kan kepadanya. Hendaklah dia mencatat(-nya) dan orang yang berutang itu mendiktekan(-nya). Hendaklah dia bertakwa kepada Allah, Tuhannya, dan janganlah dia menguranginya sedikit pun. Jika yang berutang itu orang yang kurang akalnya, lemah (keadaannya), atau tidak mampu mendiktekan sendiri, hendaklah walinya mendiktekannya dengan benar. Mintalah kesaksian dua orang saksi laki-laki di antara kamu. Jika tidak ada (saksi) dua orang laki-laki, (boleh) seorang laki-laki dan dua orang perempuan di antara orang-orang yang kamu sukai dari para saksi (yang ada) sehingga jika salah seorang (saksi perempuan) lupa, yang lain mengingatkannya. Janganlah saksi-saksi itu menolak apabila dipanggil. Janganlah kamu bosan mencatatnya sampai batas waktunya, baik (utang itu) kecil maupun besar. Yang demikian itu lebih adil di sisi Allah, lebih dapat menguatkan kesaksian, dan lebih mendekatkan kamu pada ketidakraguan, kecuali jika hal itu merupakan perniagaan tunai yang kamu jalankan di antara kamu. Maka, tidak ada dosa bagi kamu jika kamu tidak mencatatnya. Ambillah saksi apabila kamu berjual beli dan janganlah pencatat mempersulit (atau dipersulit), begitu juga saksi. Jika kamu melakukan (yang demikian), sesungguhnya hal itu suatu kefasikan padamu. Bertakwalah kepada Allah, Allah memberikan pengajaran kepadamu dan Allah Maha Mengetahui segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002282.mp3",
        "translation_en": "O you who have believed, when you contract a debt for a specified term, write it down. And let a scribe write [it] between you in justice. Let no scribe refuse to write as Allah has taught him. So let him write and let the one who has the obligation dictate. And let him fear Allah, his Lord, and not leave anything out of it. But if the one who has the obligation is of limited understanding or weak or unable to dictate himself, then let his guardian dictate in justice. And bring to witness two witnesses from among your men. And if there are not two men [available], then a man and two women from those whom you accept as witnesses - so that if one of the women errs, then the other can remind her. And let not the witnesses refuse when they are called upon. And do not be [too] weary to write it, whether it is small or large, for its [specified] term. That is more just in the sight of Allah and stronger as evidence and more likely to prevent doubt between you, except when it is an immediate transaction which you conduct among yourselves. For [then] there is no blame upon you if you do not write it. And take witnesses when you conclude a contract. Let no scribe be harmed or any witness. For if you do so, indeed, it is [grave] disobedience in you. And fear Allah. And Allah teaches you. And Allah is Knowing of all things."
      },
      {
        "number": 283,
        "arabic": "۞ وَاِنْ كُنْتُمْ عَلٰى سَفَرٍ وَّلَمْ تَجِدُوْا كَاتِبًا فَرِهٰنٌ مَّقْبُوْضَةٌ  ۗفَاِنْ اَمِنَ بَعْضُكُمْ بَعْضًا فَلْيُؤَدِّ الَّذِى اؤْتُمِنَ اَمَانَتَهٗ وَلْيَتَّقِ اللّٰهَ رَبَّهٗ ۗ وَلَا تَكْتُمُوا الشَّهَادَةَۗ وَمَنْ يَّكْتُمْهَا فَاِنَّهٗٓ اٰثِمٌ قَلْبُهٗ ۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ عَلِيْمٌ ࣖ",
        "latin": "Wa in kuntum ‘alā safariw wa lam tajidū kātiban fa riḥānum maqbūḍah(tun), fa'in amina ba‘ḍukum ba‘ḍan falyu'addil-lażi'tumina amānatahū walyattaqillāha rabbah(ū), wa lā taktumusy syahādah(ta), wa may yaktumhā fa'innahū āṡimun qalbuh(ū), wallāhu bimā ta‘malūna  ‘alīm(un).  ",
        "translation": "Jika kamu dalam perjalanan, sedangkan kamu tidak mendapatkan seorang pencatat, hendaklah ada barang jaminan yang dipegang. Akan tetapi, jika sebagian kamu memercayai sebagian yang lain, hendaklah yang dipercayai itu menunaikan amanatnya (utangnya) dan hendaklah dia bertakwa kepada Allah, Tuhannya. Janganlah kamu menyembunyikan kesaksian karena siapa yang menyembunyikannya, sesungguhnya hatinya berdosa. Allah Maha Mengetahui apa yang kamu kerjakan.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002283.mp3",
        "translation_en": "And if you are on a journey and cannot find a scribe, then a security deposit [should be] taken. And if one of you entrusts another, then let him who is entrusted discharge his trust [faithfully] and let him fear Allah, his Lord. And do not conceal testimony, for whoever conceals it - his heart is indeed sinful, and Allah is Knowing of what you do."
      },
      {
        "number": 284,
        "arabic": " لِلّٰهِ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ وَاِنْ تُبْدُوْا مَا فِيْٓ اَنْفُسِكُمْ اَوْ تُخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللّٰهُ ۗ فَيَغْفِرُ لِمَنْ يَّشَاۤءُ وَيُعَذِّبُ مَنْ يَّشَاۤءُ ۗ وَاللّٰهُ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ",
        "latin": "Lillāhi mā fis-samāwāti wa mā fil-arḍ(i), wa in tubdū mā fī anfusikum au tukhfūhu yuḥāsibkum bihillāh(u), fayagfiru limay yasyā'u wa yu‘ażżibu may yasyā'(u), wallāhu ‘alā kulli syai'in qadīr(un).  ",
        "translation": "Milik Allahlah apa yang ada di langit dan apa yang ada di bumi. Jika kamu menyatakan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah memperhitungkannya bagimu. Dia mengampuni siapa saja yang Dia kehendaki dan mengazab siapa pun yang Dia kehendaki. Allah Maha Kuasa atas segala sesuatu.",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002284.mp3",
        "translation_en": "To Allah belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allah is over all things competent."
      },
      {
        "number": 285,
        "arabic": "اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ  كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ  لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ",
        "latin": "Āmanar-rasūlu bimā unzila ilaihi mir rabbihī wal-mu'minūn(a), kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih(ī), lā nufarriqu baina aḥadim mir rusulih(ī), wa qālū sami‘nā wa aṭa‘nā, gufrānaka rabbanā wa ilaikal-maṣīr(u). ",
        "translation": "Rasul (Muhammad) beriman pada apa (Al-Qur’an) yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang mukmin. Masing-masing beriman kepada Allah, malaikat-malaikat-Nya, kitab kitab-Nya, dan rasul-rasul-Nya. (Mereka berkata,) “Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya.” Mereka juga berkata, “Kami dengar dan kami taat. Ampunilah kami, wahai Tuhan kami. Hanya kepada-Mu tempat (kami) kembali.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002285.mp3",
        "translation_en": "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], \"We make no distinction between any of His messengers.\" And they say, \"We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.\""
      },
      {
        "number": 286,
        "arabic": "لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا ۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖۚ وَاعْفُ عَنَّاۗ وَاغْفِرْ لَنَاۗ وَارْحَمْنَا ۗ اَنْتَ مَوْلٰىنَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ ࣖ",
        "latin": "Lā yukallifullāhu nafsan illā wus‘ahā, lahā mā kasabat wa ‘alaihā maktasabat, rabbanā lā tu'ākhiżnā in nasīnā au akhṭa'nā, rabbanā wa lā taḥmil ‘alainā iṣran kamā ḥamaltahū ‘alal-lażīna min qablinā, rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih(ī), wa‘fu ‘annā, wagfir lanā, warḥamnā, anta maulānā fanṣurnā ‘alal qaumil-kāfirīn(a).  ",
        "translation": "Allah tidak membebani seseorang, kecuali menurut kesanggupannya. Baginya ada sesuatu (pahala) dari (kebajikan) yang diusahakannya dan terhadapnya ada (pula) sesuatu (siksa) atas (kejahatan) yang diperbuatnya. (Mereka berdoa,) “Wahai Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami salah. Wahai Tuhan kami, janganlah Engkau bebani kami dengan beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Wahai Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tidak sanggup kami memikulnya. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami. Maka, tolonglah kami dalam menghadapi kaum kafir.”",
        "audio": "https://cdn.equran.id/audio-partial/Misyari-Rasyid-Al-Afasi/002286.mp3",
        "translation_en": "Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. \"Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.\""
      }
    ]
  },
  "67": {
    "number": 67,
    "name": "Al-Mulk",
    "arabic": "المُلْكُ",
    "meaning": "Kerajaan",
    "versesCount": 30,
    "type": "Makkiyyah",
    "juz": 29,
    "page": 562,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "تَبَـٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
        "latin": "Tabārakallażī biyadihil-mulku wa huwa 'alā kulli syai'in qadīr.",
        "translation": "Mahasuci Allah yang menguasai (segala) kerajaan, dan Dia Mahakuasa atas segala sesuatu.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067001.mp3",
        "translation_en": "Blessed is He in whose hand is dominion, and He is over all things competent -"
      },
      {
        "number": 2,
        "arabic": "ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًۭا ۚ وَهُوَ ٱلْعَزِيزُ ٱلْغَفُورُ",
        "latin": "Allażī khalaqal-mauta wal-ḥayāta liyabluwakum ayyukum aḥsanu 'amalā, wa huwal-'azīzul-gafūr.",
        "translation": "Yang menciptakan mati dan hidup, untuk menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dan Dia Mahaperkasa, Maha Pengampun.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067002.mp3",
        "translation_en": "[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving -"
      },
      {
        "number": 3,
        "arabic": "ٱلَّذِى خَلَقَ سَبْعَ سَمَـٰوَٰتٍۢ طِبَاقًۭا ۖ مَّا تَرَىٰ فِى خَلْقِ ٱلرَّحْمَـٰنِ مِن تَفَـٰوُتٍۢ ۖ فَٱرْجِعِ ٱلْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍۢ",
        "latin": "Allażī khalaqa sab'a samāwātin ṭibāqā, mā tarā fī khalqir-raḥmāni min tafāwut, farji'il-baṣara hal tarā min fuṭūr.",
        "translation": "Yang menciptakan tujuh langit berlapis-lapis. Tidak akan kamu lihat sesuatu yang tidak seimbang pada ciptaan Tuhan Yang Maha Pengasih. Maka lihatlah sekali lagi, adakah kamu lihat sesuatu yang cacat?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067003.mp3",
        "translation_en": "[And] who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?"
      },
      {
        "number": 4,
        "arabic": "ثُمَّ ٱرْجِعِ ٱلْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ ٱلْبَصَرُ خَاسِئًۭا وَهُوَ حَسِيرٌۭ",
        "latin": "Ṡummarji'il-baṣara karrataini yanqalib ilaikal-baṣaru khāsi'aw wa huwa ḥasīr.",
        "translation": "Kemudian ulangi pandangan(mu) sekali lagi (dan) sekali lagi, niscaya pandanganmu akan kembali kepadamu tanpa menemukan cacat dan ia (pandanganmu) dalam keadaan letih.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067004.mp3",
        "translation_en": "Then return [your] vision twice again. [Your] vision will return to you humbled while it is fatigued."
      },
      {
        "number": 5,
        "arabic": "وَلَقَدْ زَيَّنَّا ٱلسَّمَآءَ ٱلدُّنْيَا بِمَصَـٰبِيحَ وَجَعَلْنَـٰهَا رُجُومًۭا لِّلشَّيَـٰطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ ٱلسَّعِيرِ",
        "latin": "Wa laqad zayyannas-samā'ad-dunyā bimaṣābīḥa wa ja'alnāhā rujūmal lisy-syayāṭīni wa a'tadnā lahum 'ażābas-sa'īr.",
        "translation": "Dan sungguh, telah Kami hiasi langit yang dekat, dengan bintang-bintang dan Kami jadikannya (bintang-bintang itu) sebagai alat-alat pelempar setan, dan Kami sediakan bagi mereka azab neraka yang menyala-nyala.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067005.mp3",
        "translation_en": "And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils and have prepared for them the punishment of the Blaze."
      },
      {
        "number": 6,
        "arabic": "وَلِلَّذِينَ كَفَرُوا۟ بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ ٱلْمَصِيرُ",
        "latin": "Wa lil-lażīna kafarū birabbihim 'ażābu jahannama wa bi'sal-maṣīr.",
        "translation": "Orang-orang yang kufur kepada Tuhannya akan mendapat azab (neraka) Jahanam. Itulah seburuk-buruk tempat kembali.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067006.mp3",
        "translation_en": "And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination."
      },
      {
        "number": 7,
        "arabic": "إِذَآ أُلْقُوا۟ فِيهَا سَمِعُوا۟ لَهَا شَهِيقًۭا وَهِىَ تَفُورُ",
        "latin": "Iżā ulqū fīhā sami'ū lahā syahīqaw wa hiya tafūr.",
        "translation": "Apabila dilemparkan ke dalamnya (neraka), mereka pasti mendengar suaranya yang mengerikan saat ia membara,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067007.mp3",
        "translation_en": "When they are thrown into it, they hear from it a dreadful inhaling while it boils up."
      },
      {
        "number": 8,
        "arabic": "تَكَادُ تَمَيَّزُ مِنَ ٱلْغَيْظِ ۖ كُلَّمَآ أُلْقِىَ فِيهَا فَوْجٌۭ سَأَلَهُمْ خَزَنَتُهَآ أَلَمْ يَأْتِكُمْ نَذِيرٌۭ",
        "latin": "Takādu tamayyazu minal-gaīẓ, kullamā ulqiya fīhā faujun sa'alahum khazanatuhā alam ya'tikum nażīr.",
        "translation": "(Neraka itu) hampir meledak karena marah. Setiap kali ada sekumpulan (orang kafir) dilemparkan ke dalamnya, penjaga-penjaganya bertanya kepada mereka, \"Tidak pernahkah seorang pemberi peringatan datang kepadamu?\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067008.mp3",
        "translation_en": "It almost bursts with rage. Every time a company is thrown into it, its keepers ask them, \"Did there not come to you a warner?\""
      },
      {
        "number": 9,
        "arabic": "قَالُوا۟ بَلَىٰ قَدْ جَآءَنَا نَذِيرٌۭ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ ٱللَّهُ مِن شَىْءٍ إِنْ أَنتُمْ إِلَّا فِى ضَلَٰلٍۢ كَبِيرٍۢ",
        "latin": "Qālū balā qad jā'anā nażīrun fa każżabnā wa qulnā mā nazzalallāhu min syai'in in antum illā fī ḍalālin kabīr.",
        "translation": "Mereka menjawab, \"Pernah! Sungguh, seorang pemberi peringatan telah datang kepada kami, tetapi kami mendustakan(-nya) dan mengatakan, 'Allah tidak menurunkan sesuatu apa pun.' Kamu tidak lain hanyalah dalam kesesatan yang besar.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067009.mp3",
        "translation_en": "They will say,\" Yes, a warner had come to us, but we denied and said, 'Allah has not sent down anything. You are not but in great error.'\""
      },
      {
        "number": 10,
        "arabic": "وَقَالُوا۟ لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِىٓ أَصْحَٰبِ ٱلسَّعِيرِ",
        "latin": "Wa qālū lau kunnā nasma'u au na'qilu mā kunnā fī aṣḥābis-sa'īr.",
        "translation": "Dan mereka berkata, \"Sekiranya (dahulu) kami mendengarkan atau memikirkan (peringatan itu) niscaya tidaklah kami termasuk penghuni neraka yang menyala-nyala.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067010.mp3",
        "translation_en": "And they will say, \"If only we had been listening or reasoning, we would not be among the companions of the Blaze.\""
      },
      {
        "number": 11,
        "arabic": "فَٱعْتَرَفُوا۟ بِذَنۢبِهِمْ فَسُحْقًۭا لِّأَصْحَٰبِ ٱلسَّعِيرِ",
        "latin": "Fa'tarafū biżambihim fa suḥqal li'aṣḥābis-sa'īr.",
        "translation": "Mereka mengakui dosanya. Maka kebinasaanlah bagi penghuni neraka Sa'ir yang menyala-nyala.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067011.mp3",
        "translation_en": "And they will admit their sin, so [it is] alienation for the companions of the Blaze."
      },
      {
        "number": 12,
        "arabic": "إِنَّ ٱلَّذِينَ يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ لَهُم مَّغْفِرَةٌۭ وَأَجْرٌۭ كَبِيرٌۭ",
        "latin": "Innal-lażīna yakhsyauna rabbahum bil-gaibi lahum magfiratuw wa ajrun kabīr.",
        "translation": "Sesungguhnya orang-orang yang takut kepada Tuhannya yang tidak terlihat oleh mereka, mereka akan memperoleh ampunan dan pahala yang besar.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067012.mp3",
        "translation_en": "Indeed, those who fear their Lord unseen will have forgiveness and great reward."
      },
      {
        "number": 13,
        "arabic": "وَأَسِرُّوا۟ قَوْلَكُمْ أَوِ ٱجْهَرُوا۟ بِهِۦٓ ۖ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
        "latin": "Wa asirrū qaulakum awijharū bihī, innahū 'alīmum biżātiṣ-ṣudūr.",
        "translation": "Dan rahasiakanlah perkataanmu atau lahirkanlah; sungguh Dia Maha Mengetahui segala isi hati.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067013.mp3",
        "translation_en": "And conceal your speech or publicize it; indeed, He is Knowing of that within the breasts."
      },
      {
        "number": 14,
        "arabic": "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ ٱللَّطِيفُ ٱلْخَبِيرُ",
        "latin": "Alā ya'lamu man khalaqa wa huwal-laṭīful-khabīr.",
        "translation": "Apakah (pantas) Allah yang menciptakan itu tidak mengetahui? Dan Dia Mahahalus, Maha Mengetahui.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067014.mp3",
        "translation_en": "Does He who created not know, while He is the Subtle, the Acquainted?"
      },
      {
        "number": 15,
        "arabic": "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًۭا فَٱمْشُوا۟ فِى مَنَاكِبِهَا وَكُلُوا۟ مِن رِّزْقِهِۦ ۖ وَإِلَيْهِ ٱلنُّشُورُ",
        "latin": "Huwal-lażī ja'ala lakumul-arḍa żalūlan famsyū fī manākibihā wa kulū mir rizqihī, wa ilaihin-nusyūr.",
        "translation": "Dialah yang menjadikan bumi untuk kamu dalam keadaan mudah dimanfaatkan. Maka jelajahilah segala penjurunya dan makanlah sebagian dari rezeki-Nya. Dan hanya kepada-Nyalah kamu (kembali setelah) dibangkitkan.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067015.mp3",
        "translation_en": "It is He who made the earth tame for you - so walk among its slopes and eat of His provision - and to Him is the resurrection."
      },
      {
        "number": 16,
        "arabic": "ءَأَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يَخْسِفَ بِكُمُ ٱلْأَرْضَ فَإِذَا هِىَ تَمُورُ",
        "latin": "A amintum man fis-samā'i ay yakhsifa bikumul-arḍa fa iżā hiya tamūr.",
        "translation": "Sudah merasa amankah kamu, bahwa Dia yang di langit tidak akan membuat kamu ditelan bumi ketika tiba-tiba ia terguncang?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067016.mp3",
        "translation_en": "Do you feel secure that He who [has ordained their being] in the heaven would not cause the earth to swallow you and suddenly it would sway?"
      },
      {
        "number": 17,
        "arabic": "أَمْ أَمِنتُم مَّن فِى ٱلسَّمَآءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًۭا ۖ فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
        "latin": "Am amintum man fis-samā'i ay yursila 'alaikum ḥāṣibā, fa sata'lamūna kaifa nażīr.",
        "translation": "Atau sudah merasa amankah kamu, bahwa Dia yang di langit tidak akan mengirimkan badai yang berbatu kepadamu? Maka kelak kamu akan mengetahui bagaimana (akibat mendustakan) peringatan-Ku.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067017.mp3",
        "translation_en": "Or do you feel secure that He who [has ordained their being] in the heaven would not send against you a storm of stones? Then you would know how [severe] was My warning."
      },
      {
        "number": 18,
        "arabic": "وَلَقَدْ كَذَّبَ ٱلَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
        "latin": "Wa laqad każżabal-lażīna min qablihim fa kaifa kāna nakīr.",
        "translation": "Dan sungguh, orang-orang yang sebelum mereka pun telah mendustakan (rasul-rasul-Nya). Maka betapa hebatnya kemurkaan-Ku!",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067018.mp3",
        "translation_en": "And already had those before them denied, and how [terrible] was My reproach."
      },
      {
        "number": 19,
        "arabic": "أَوَلَمْ يَرَوْا۟ إِلَى ٱلطَّيْرِ فَوْقَهُمْ صَٰٓفَّٰتٍۢ وَيَقْبِضْنَ ۚ مَا يُمْسِكُهُنَّ إِلَّا ٱلرَّحْمَٰنُ ۚ إِنَّهُۥ بِكُلِّ شَىْءٍۭ بَصِيرٌ",
        "latin": "Awalam yarau ilaṭ-ṭairi fauqahum ṣāffātiw wa yaqbiḍna, mā yumsikuhunna illar-raḥmān, innahū bikulli syai'im baṣīr.",
        "translation": "Tidakkah mereka memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pengasih. Sungguh, Dia Maha Melihat segala sesuatu.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067019.mp3",
        "translation_en": "Do they not see the birds above them with wings outspread and [sometimes] folded in? None holds them [alight] except the Most Merciful. Indeed, He is, of all things, Seeing."
      },
      {
        "number": 20,
        "arabic": "أَمَّنْ هَٰذَا ٱلَّذِى هُوَ جُندٌۭ لَّكُمْ يَنصُرُكُم مِّن دُونِ ٱلرَّحْمَٰنِ ۚ إِنِ ٱلْكَٰفِرُونَ إِلَّا فِى غُرُورٍ",
        "latin": "Amman hāżal-lażī huwa jundul lakum yanṣurukum min dūnir-raḥmān, inil-kāfirūna illā fī gurūr.",
        "translation": "Atau siapakah yang akan menjadi bala tentara bagimu yang dapat membelamu selain (Allah) Yang Maha Pengasih? Orang-orang kafir itu hanyalah dalam (keadaan) tertipu.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067020.mp3",
        "translation_en": "Or who is it that could be an army for you to aid you other than the Most Merciful? The disbelievers are not but in delusion."
      },
      {
        "number": 21,
        "arabic": "أَمَّنْ هَٰذَا ٱلَّذِى يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُۥ ۚ بَل لَّجُّوا۟ فِى عُتُوٍّۢ وَنُفُورٍ",
        "latin": "Amman hāżal-lażī yarzuqukum in amsaka rizqah, bal lajjū fī 'utuwwiw wa nufūr.",
        "translation": "Atau siapakah yang dapat memberimu rezeki jika Dia menahan rezeki-Nya? Bahkan mereka terus-menerus dalam kesombongan dan menjauhkan diri (dari kebenaran).",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067021.mp3",
        "translation_en": "Or who is it that could provide for you if He withheld His provision? But they have persisted in insolence and aversion."
      },
      {
        "number": 22,
        "arabic": "أَفَمَن يَمْشِى مُكِبًّا عَلَىٰ وَجْهِهِۦٓ أَهْدَىٰٓ أَمَّن يَمْشِى سَوِيًّا عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ",
        "latin": "Afamay yamsyī mukibban 'alā wajhihī ahdā ammay yamsyī sawiyyan 'alā ṣirāṭim mustaqīm.",
        "translation": "Apakah orang yang merangkak dengan wajah tertelungkup yang lebih terpimpin (dalam kebenaran) ataukah orang yang berjalan tegap di atas jalan yang lurus?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067022.mp3",
        "translation_en": "Then is one who walks fallen on his face better guided or one who walks erect on a straight path?"
      },
      {
        "number": 23,
        "arabic": "قُلْ هُوَ ٱلَّذِىٓ أَنشَأَكُمْ وَجَعَلَ لَكُمُ ٱلسَّمْعَ وَٱلْأَبْصَٰرَ وَٱلْأَفْـِٔدَةَ ۖ قَلِيلًۭا مَّا تَشْكُرُونَ",
        "latin": "Qul huwal-lażī ansya'akum wa ja'ala lakumus-sam'a wal-abṣāra wal-af'idah, qalīlam mā tasykurūn.",
        "translation": "Katakanlah, \"Dialah yang menciptakan kamu dan menjadikan pendengaran, penglihatan dan hati nurani bagi kamu. (Tetapi) sedikit sekali kamu bersyukur.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067023.mp3",
        "translation_en": "Say, \"It is He who has produced you and made for you hearing and vision and hearts; little are you grateful.\""
      },
      {
        "number": 24,
        "arabic": "قُلْ هُوَ ٱلَّذِى ذَرَأَكُمْ فِى ٱلْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
        "latin": "Qul huwal-lażī żara'akum fil-arḍi wa ilaihi tuḥsyarūn.",
        "translation": "Katakanlah, \"Dialah yang menjadikan kamu berkembang biak di muka bumi dan kepada-Nyalah kamu akan dikumpulkan.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067024.mp3",
        "translation_en": "Say, \"It is He who has multiplied you throughout the earth, and to Him you will be gathered.\""
      },
      {
        "number": 25,
        "arabic": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ",
        "latin": "Wa yaqūlūna matā hāżal-wa'du in kuntum ṣādiqīn.",
        "translation": "Dan mereka berkata, \"Kapankah (datangnya) janji (azab) ini jika kamu orang-orang benar?\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067025.mp3",
        "translation_en": "And they say, \"When is this promise, if you should be truthful?\""
      },
      {
        "number": 26,
        "arabic": "قُلْ إِنَّمَا ٱلْعِلْمُ عِندَ ٱللَّهِ وَإِنَّمَآ أَنَا۠ نَذِيرٌۭ مُّبِينٌۭ",
        "latin": "Qul innamal-'ilmu 'indallāhi wa innamā ana nażīrum mubīn.",
        "translation": "Katakanlah (Muhammad), \"Sesungguhnya ilmu (tentang hari Kiamat itu) hanya ada pada Allah. Dan aku hanyalah seorang pemberi peringatan yang menjelaskan.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067026.mp3",
        "translation_en": "Say, \"The knowledge is only with Allah, and I am only a clear warner.\""
      },
      {
        "number": 27,
        "arabic": "فَلَمَّا رَأَوْهُ زُلْفَةًۭ سِيٓـَٔتْ وُجُوهُ ٱلَّذِينَ كَفَرُوا۟ وَقِيلَ هَٰذَا ٱلَّذِى كُنتُم بِهِۦ تَدَّعُونَ",
        "latin": "Falammā ra'auhu zulfatan sī'at wujūhul-lażīna kafarū wa qīla hāżal-lażī kuntum bihī tadda'ūn.",
        "translation": "Maka ketika mereka melihat azab (pada hari Kiamat) sudah dekat, wajah orang-orang kafir itu menjadi muram. Dan dikatakan (kepada mereka), \"Inilah (azab) yang dahulunya kamu minta.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067027.mp3",
        "translation_en": "But when they see it approaching, the faces of those who disbelieve will be distressed, and it will be said, \"This is that which you used to call for.\""
      },
      {
        "number": 28,
        "arabic": "قُلْ أَرَءَيْتُمْ إِنْ أَهْلَكَنِىَ ٱللَّهُ وَمَن مَّعِىَ أَوْ رَحِمَنَا فَمَن يُجِيرُ ٱلْكَٰفِرِينَ مِنْ عَذَابٍ أَلِيمٍۢ",
        "latin": "Qul ara'aitum in ahlakaniyallāhu wa mam ma'iya au raḥimanā famay yujīrul-kāfirīna min 'ażābin alīm.",
        "translation": "Katakanlah (Muhammad), \"Tahukah kamu jika Allah mematikan aku dan orang-orang yang bersamaku atau memberi rahmat kepada kami, (maka kami akan masuk surga), lalu siapa yang dapat melindungi orang-orang kafir dari azab yang pedih?\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067028.mp3",
        "translation_en": "Say, [O Muhammad], \"Have you considered: whether Allah should cause my death and those with me or have mercy upon us, who can protect the disbelievers from a painful punishment?\""
      },
      {
        "number": 29,
        "arabic": "قُلْ هُوَ ٱلرَّحْمَٰنُ ءَامَنَّا بِهِۦ وَعَلَيْهِ تَوَكَّلْنَا ۖ فَسَتَعْلَمُونَ مَنْ هُوَ فِى ضَلَٰلٍۢ مُّبِينٍۢ",
        "latin": "Qul huwar-raḥmānu āmannā bihī wa 'alaihi tawakkalnā, fasata'lamūna man huwa fī ḍalālim mubīn.",
        "translation": "Katakanlah, \"Dialah Yang Maha Pengasih, kami beriman kepada-Nya dan kepada-Nya kami bertawakal. Maka kelak kamu akan tahu siapa yang berada dalam kesesatan yang nyata.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067029.mp3",
        "translation_en": "Say, \"He is the Most Merciful; we have believed in Him, and upon Him we have relied. And you will [come to] know who it is that is in clear error.\""
      },
      {
        "number": 30,
        "arabic": "قُلْ أَرَءَيْتُمْ إِنْ أَصْبَحَ مَآؤُكُمْ غَوْرًۭا فَمَن يَأْتِيكُم بِمَآءٍۢ مَّعِينٍۭ",
        "latin": "Qul ara'aitum in aṣbaḥa mā'ukum gauran famay ya'tīkum bimā'im ma'īn.",
        "translation": "Katakanlah (Muhammad), \"Terangkanlah kepadaku jika sumber air kamu menjadi kering; maka siapa yang akan memberimu air yang mengalir?\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/067030.mp3",
        "translation_en": "Say, \"Have you considered: if your water was to become sunken [into the earth], then who could bring you flowing water?\""
      }
    ]
  },
  "103": {
    "number": 103,
    "name": "Al-'Asr",
    "arabic": "العَصْرُ",
    "meaning": "Masa / Waktu",
    "versesCount": 3,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 601,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "وَٱلْعَصْرِ",
        "latin": "Wal-'aṣr.",
        "translation": "Demi masa,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/103001.mp3",
        "translation_en": "By time,"
      },
      {
        "number": 2,
        "arabic": "إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ",
        "latin": "Innal-insāna lafī khusr.",
        "translation": "sungguh, manusia berada dalam kerugian,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/103002.mp3",
        "translation_en": "Indeed, mankind is in loss,"
      },
      {
        "number": 3,
        "arabic": "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ",
        "latin": "Illallażīna āmanū wa 'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr.",
        "translation": "kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/103003.mp3",
        "translation_en": "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."
      }
    ]
  },
  "104": {
    "number": 104,
    "name": "Al-Humazah",
    "arabic": "الهُمَزَةُ",
    "meaning": "Pengumpat",
    "versesCount": 9,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 601,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "وَيْلٌۭ لِّكُلِّ هُمَزَةٍۢ لُّمَزَةٍ",
        "latin": "Wailul likulli humazatil lumazah.",
        "translation": "Celakalah bagi setiap pengumpat dan pencela,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104001.mp3",
        "translation_en": "Woe to every scorner and mocker"
      },
      {
        "number": 2,
        "arabic": "ٱلَّذِى جَمَعَ مَالًۭا وَعَدَّدَهُۥ",
        "latin": "Alladzī jama'a mālaw wa 'addadah.",
        "translation": "yang mengumpulkan harta dan menghitung-hitungnya,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104002.mp3",
        "translation_en": "Who collects wealth and [continuously] counts it."
      },
      {
        "number": 3,
        "arabic": "يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ",
        "latin": "Yaḥsabu anna mālahū akhladah.",
        "translation": "dia (manusia) mengira bahwa hartanya itu dapat mengekalkannya.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104003.mp3",
        "translation_en": "He thinks that his wealth will make him immortal."
      },
      {
        "number": 4,
        "arabic": "كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ",
        "latin": "Kallā layumbażanna fil-ḥuṭamah.",
        "translation": "Sekali-kali tidak! Pasti dia akan dilemparkan ke dalam (Neraka) Hutamah.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104004.mp3",
        "translation_en": "No! He will surely be thrown into the Crusher."
      },
      {
        "number": 5,
        "arabic": "وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ",
        "latin": "Wa mā adrāka mal-ḥuṭamah.",
        "translation": "Dan tahukah kamu apakah (Neraka) Hutamah itu?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104005.mp3",
        "translation_en": "And what can make you know what is the Crusher?"
      },
      {
        "number": 6,
        "arabic": "نَارُ ٱللَّهِ ٱلْمُوقَدَةُ",
        "latin": "Nārullāhil-mūqadah.",
        "translation": "(Yaitu) api (azab) Allah yang dinyalakan,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104006.mp3",
        "translation_en": "It is the fire of Allah, [eternally] fueled,"
      },
      {
        "number": 7,
        "arabic": "ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ",
        "latin": "Allatī taṭṭali'u 'alal-af'idah.",
        "translation": "yang (membakar) naik sampai ke hati.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104007.mp3",
        "translation_en": "Which mounts directed at the hearts."
      },
      {
        "number": 8,
        "arabic": "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌۭ",
        "latin": "Innahā 'alaihim mu'ṣadah.",
        "translation": "Sungguh, api itu ditutup rapat atas (diri) mereka,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104008.mp3",
        "translation_en": "Indeed, Hellfire will be closed down upon them"
      },
      {
        "number": 9,
        "arabic": "فِى عَمَدٍۢ مُّمَدَّدَةٍۭ",
        "latin": "Fī 'amadim mumaddadah.",
        "translation": "(sedang mereka itu) diikat pada tiang-tiang yang panjang.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/104009.mp3",
        "translation_en": "In extended columns."
      }
    ]
  },
  "105": {
    "number": 105,
    "name": "Al-Fil",
    "arabic": "الفِيلُ",
    "meaning": "Gajah",
    "versesCount": 5,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 601,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَـٰبِ ٱلْفِيلِ",
        "latin": "A lam tara kaifa fa'ala rabbuka bi'aṣḥābil-fīl.",
        "translation": "Tidakkah engkau (Muhammad) perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/105001.mp3",
        "translation_en": "Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?"
      },
      {
        "number": 2,
        "arabic": "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍۢ",
        "latin": "A lam yaj'al kaidahum fī taḍlīl.",
        "translation": "Bukankah Dia telah menjadikan tipu daya mereka itu sia-sia?",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/105002.mp3",
        "translation_en": "Did He not make their plan into misguidance?"
      },
      {
        "number": 3,
        "arabic": "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
        "latin": "Wa arsala 'alaihim ṭairan abābīl.",
        "translation": "dan Dia mengirimkan kepada mereka burung yang berbondong-bondong,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/105003.mp3",
        "translation_en": "And He sent against them birds in flocks,"
      },
      {
        "number": 4,
        "arabic": "تَرْمِيهِم بِحِجَارَةٍۢ مِّن سِجِّيلٍۢ",
        "latin": "Tarmīhim biḥijāratim min sijjīl.",
        "translation": "yang melempari mereka dengan batu dari tanah liat yang dibakar,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/105004.mp3",
        "translation_en": "Striking them with stones of hard clay,"
      },
      {
        "number": 5,
        "arabic": "فَجَعَلَهُمْ كَعَصْفٍۢ مَّأْكُولٍۭ",
        "latin": "Fa ja'alahum ka'aṣfim ma'kūl.",
        "translation": "sehingga mereka dijadikan-Nya seperti daun-daun yang dimakan (ulat).",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/105005.mp3",
        "translation_en": "And He made them like eaten straw."
      }
    ]
  },
  "108": {
    "number": 108,
    "name": "Al-Kausar",
    "arabic": "الكَوْثَرُ",
    "meaning": "Nikmat yang Berlimpah",
    "versesCount": 3,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 602,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ",
        "latin": "Innā a'ṭainākal-kauṡar.",
        "translation": "Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/108001.mp3",
        "translation_en": "Indeed, We have granted you, [O Muhammad], al-Kawthar."
      },
      {
        "number": 2,
        "arabic": "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        "latin": "Fa ṣalli lirabbika wan-ḥar.",
        "translation": "Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/108002.mp3",
        "translation_en": "So pray to your Lord and sacrifice [to Him alone]."
      },
      {
        "number": 3,
        "arabic": "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        "latin": "Inna syāni'aka huwal-abtar.",
        "translation": "Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/108003.mp3",
        "translation_en": "Indeed, your enemy is the one cut off."
      }
    ]
  },
  "112": {
    "number": 112,
    "name": "Al-Ikhlas",
    "arabic": "الإِخْلَاصُ",
    "meaning": "Keesaan Allah",
    "versesCount": 4,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 604,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        "latin": "Qul huwallāhu aḥad.",
        "translation": "Katakanlah (Muhammad), \"Dialah Allah, Yang Maha Esa.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/112001.mp3",
        "translation_en": "Say, \"He is Allah, [who is] One,\""
      },
      {
        "number": 2,
        "arabic": "ٱللَّهُ ٱلصَّمَدُ",
        "latin": "Allāhuṣ-ṣamad.",
        "translation": "Allah tempat meminta segala sesuatu.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/112002.mp3",
        "translation_en": "\"Allah, the Eternal Refuge.\""
      },
      {
        "number": 3,
        "arabic": "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        "latin": "Lam yalid wa lam yūlad.",
        "translation": "(Allah) tidak beranak dan tidak pula diperanakkan,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/112003.mp3",
        "translation_en": "\"He neither begets nor is born,\""
      },
      {
        "number": 4,
        "arabic": "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
        "latin": "Wa lam yakul lahū kufuwan aḥad.",
        "translation": "dan tidak ada sesuatu yang setara dengan Dia.",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/112004.mp3",
        "translation_en": "\"Nor is there to Him any equivalent.\""
      }
    ]
  },
  "113": {
    "number": 113,
    "name": "Al-Falaq",
    "arabic": "الفَلَقُ",
    "meaning": "Waktu Subuh",
    "versesCount": 5,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 604,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
        "latin": "Qul a'ūżu birabbil-falaq.",
        "translation": "Katakanlah, \"Aku berlindung kepada Tuhan yang menguasai subuh (fajar),\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/113001.mp3",
        "translation_en": "Say, \"I seek refuge in the Lord of daybreak\""
      },
      {
        "number": 2,
        "arabic": "مِن شَرِّ مَا خَلَقَ",
        "latin": "Min syarri mā khalaq.",
        "translation": "dari kejahatan (makhluk yang) Dia ciptakan,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/113002.mp3",
        "translation_en": "\"From the evil of that which He created\""
      },
      {
        "number": 3,
        "arabic": "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        "latin": "Wa min syarri gāsiqin iżā waqab.",
        "translation": "dan dari kejahatan malam apabila telah gelap gulita,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/113003.mp3",
        "translation_en": "\"And from the evil of darkness when it settles\""
      },
      {
        "number": 4,
        "arabic": "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ",
        "latin": "Wa min syarrin-naffāṡāti fil-'uqad.",
        "translation": "dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/113004.mp3",
        "translation_en": "\"And from the evil of the blowers in knots\""
      },
      {
        "number": 5,
        "arabic": "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        "latin": "Wa min syarri ḥāsidin iżā ḥasad.",
        "translation": "dan dari kejahatan orang yang dengki apabila dia dengki.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/113005.mp3",
        "translation_en": "\"And from the evil of an envier when he envies.\""
      }
    ]
  },
  "114": {
    "number": 114,
    "name": "An-Nas",
    "arabic": "النَّاسُ",
    "meaning": "Manusia",
    "versesCount": 6,
    "type": "Makkiyyah",
    "juz": 30,
    "page": 604,
    "bismillah": true,
    "verses": [
      {
        "number": 1,
        "arabic": "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        "latin": "Qul a'ūżu birabbin-nās.",
        "translation": "Katakanlah, \"Aku berlindung kepada Tuhannya manusia,\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114001.mp3",
        "translation_en": "Say, \"I seek refuge in the Lord of mankind,\""
      },
      {
        "number": 2,
        "arabic": "مَلِكِ ٱلنَّاسِ",
        "latin": "Malikin-nās.",
        "translation": "Raja manusia,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114002.mp3",
        "translation_en": "\"The Sovereign of mankind,\""
      },
      {
        "number": 3,
        "arabic": "إِلَـٰهِ ٱلنَّاسِ",
        "latin": "Ilāhin-nās.",
        "translation": "Sembahan manusia,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114003.mp3",
        "translation_en": "\"The God of mankind,\""
      },
      {
        "number": 4,
        "arabic": "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
        "latin": "Min syarril-waswāsil-khannās.",
        "translation": "dari kejahatan (bisikan) setan yang bersembunyi,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114004.mp3",
        "translation_en": "\"From the evil of the retreating whisperer -\""
      },
      {
        "number": 5,
        "arabic": "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
        "latin": "Allażī yuwaswisu fī ṣudūrin-nās.",
        "translation": "yang membisikkan (kejahatan) ke dalam dada manusia,",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114005.mp3",
        "translation_en": "\"Who whispers [evil] into the breasts of mankind -\""
      },
      {
        "number": 6,
        "arabic": "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
        "latin": "Minal-jinnati wan-nās.",
        "translation": "dari (golongan) jin dan manusia.\"",
        "audio": "https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/114006.mp3",
        "translation_en": "\"From among the jinn and mankind.\""
      }
    ]
  }
};


  // ==========================================================================
  // VERIFIED SHA-256 REFERENCE HASHES (114 SURAT / 6.236 AYAT)
  // ==========================================================================

/**
 * Official Reference SHA-256 Hashes for all 114 Surahs (6,236 Verses)
 * Al-Qur'an Digital Mashendig17al - Standar Kementerian Agama RI
 */

const VERIFIED_SURAH_HASHES = {
  "1": "db43488ba4e41c374a99fd500fdf4c245177d1b434bd0b431a8d5a3b7b0245e0",
  "2": "eedc29de32bed0aae74a4ad66a8144a9c14417c27e169ec4c9cf8f3f678e3b35",
  "3": "2005010409b71432d38e0af3e14b3559cff11a1d07288b56377f6dd623701423",
  "4": "e6fb35d576ac7a625081690d6a186da50a7a3cd0f33446f0ab1b7e84af6ca2a0",
  "5": "ddc0a2cbd184301ca7c1328e79698a036378d05c16e169282eba64fe9901ca43",
  "6": "29a40314f2cb6def778aff6b63ee9f26289cb7203a8b14124820f12c46e82511",
  "7": "5cfd1622578d09460d04ab7e2d54c7a55e4b482656bc57b6f929d1c490d76261",
  "8": "ef4f4f03bbaaa3c8483225cf9dfe127e9e97ed57365ca2de48659d36643ff480",
  "9": "33187850697aadd4286725f847c13d982ba1430cc75cd8f976edd40d8d2660a4",
  "10": "8870ad3e2301840c25a8cd36fbe98796dfef18a5d14d5991af19aa42ff281652",
  "11": "d58c1453319cb984f6f161c001801fee107a15ae5beb77ea7febde75566474ae",
  "12": "54990a55bcbfa87e06f606ca00c82e4bf4cbd5a720ee8995ffe4d61a9b0a7b28",
  "13": "0ec3d76510409de4f2c3c5d67dec0c1ac5d4904edea4c3151bb305dded78dc53",
  "14": "78e943ba2c2b3834df51c4be185594b90fc1a11212f70880596f199bda2efb47",
  "15": "200ca629053b1c9efc477c887045c8a4f12cf815560540c6e9795608d76e3ae0",
  "16": "2d4cce0cf7620c2f30f077551f793ff760a930d1d9503be08615cde113f23080",
  "17": "5a37a5e518d63a29b6e18c6140995d37402ca49753d4bd5ae6f66a09cc7ee6ae",
  "18": "2a992a1f33aa1f683f2c02bdedc23a824dceb9a4d5d43c5b7adc872fcf0540a8",
  "19": "c2feb64e120c34d3bb53b279fcb88a66abc7ab7ade7c5a31ddbbd5fc158f82ea",
  "20": "a4ef932a387cd68a84f652e9b69d1ec0dc33f64d4a2b35d170826d2bffbe6303",
  "21": "7e6cd19699b108b1262d661bcb634558dff4d380e4278e03fe2a8703e67e8777",
  "22": "eca9605854a7e6b835c9825df3d676577b91fc0ce6719e2fb2a7579ce8ebcb87",
  "23": "7e5fa1e3e73df7dc7a91ed9bc35ea29800ce0a19cb4cc06cc30b5e228c5a497d",
  "24": "2a57abbd067f4c1dc6b14ada82e37eb70e0057b779180cf19342158bd1d5c4d5",
  "25": "661e843f1f100c445e4c551b0ca45ebb2f7d9088af0f93aba7b97af41a240dae",
  "26": "e6cc85c4d438c0c6daf065e03caf4f775bcadb0ba1fcfa7a0017f4dbe526d019",
  "27": "4b46494c4223a1175ee88f09cbd1147eb12f91029ce4f02b156a5b89d6c9cd92",
  "28": "1ea12c479fae91d7328c7886ecd2bb9cd97af7291612572c4935d671d52b1713",
  "29": "7bdbdc90230682ec2171c717de984935d640bd882c344de5285ceb0ba999995e",
  "30": "6ab23ab4fc45388415b9adb213e458b1980fc9959869c229b6169f5ed8f1d23c",
  "31": "84c7427a56587cfeaf9be8823fcfb2212489f19e2370b5ea609389f6f5d90c8e",
  "32": "ceaf8bae379d1bd2f38c79b1d33ffba1986b52e69a8d0bee974c90318135b195",
  "33": "1d28532b20c43c01cca69d5c459fff912d1ad3d4b3088572d517cb5b64c684e1",
  "34": "f5aee2ae0e004f0a7d1aa4fbbc23fcf636814faadb7d1fa61bc37f0652f0c30c",
  "35": "c50e74a70220aa11b1b5e596b99c499d98aa17b1c93a4eb5783bd0f2e8937a06",
  "36": "0a90eb9c5a88b8da69aaae42513269f7a3c0f8b21e2e2f7a4585ed5b5695edfa",
  "37": "d822911f457029910c2397f1bdb0e95b9cbdac18f212779d3995558ad41d05c9",
  "38": "0df4b5262c8964b26e0cd59df8b2e1e9e6e6558e2323c2dcda41433706bb5624",
  "39": "8df9d9f0e761afd1f89cfd052f6a412b7553aa96a8f3bd3845b00ea845f1539d",
  "40": "982c10a8015dbedf5dbfdfb774784e5d435a49899997b61ffb69e322da4fdfad",
  "41": "041becf1e5e7d06fe009f6d14a2fd047cd27678985d8d2425535b3924bc53a9b",
  "42": "520e8084d5f28d6ba14a0048d79ce1cb12ce39d1a04955b4d9deda27faa22454",
  "43": "623b1432c4fc9c22cd7cc5c764b0f0f1444585765ecabff865a0e6e5454b0a0e",
  "44": "b45f5591d155d9656e51bd4c086d26256560e28d8ba53af569fc301f393f51a3",
  "45": "8553152283b7479c4c5feee0aac4a94729be4d454d66aece7085ab2ab3b2dbc9",
  "46": "8a61638afa255f27c31271a48a0cc550040be78d7ec41185d7a47f3c8a9dd488",
  "47": "398a0bd2539ca707de5e20efd1ba3c50e1156a244f32bc28376d80fd9f2e8860",
  "48": "dc9b6c87bc219bcdad991c77c4f76f30a5368c0172a99c3a9a9c2787b2dd2aa4",
  "49": "29a1efb5ad79b6da2dbc9c85f401792f9f26985b1c49d5d4ecf11bc23ed154fb",
  "50": "cea4537fc94199da1c9704a751e5dbfe4f1e35c5b2ae5fff6489eb4a0b9ccb38",
  "51": "1d4a561f96c4b036b933cc15027ec28e54e47d4dd676466d0d171ac942160e6b",
  "52": "a4e0b581e3c7d4fc66fc4a9168052bef45a08e050b958a0c8b18e9d3546273fc",
  "53": "d5b527410e18b28532428aa9192343bcdad376d83f3ce41dcfed65ea295d03a3",
  "54": "752ed8c6d49ee1a691a484a8672a94e8a83f8e7f68151c14246463e6de592165",
  "55": "3361ee5e278305279e81abb4102523ad02992aa378c732b23c9779d3421c47dc",
  "56": "4a776bb0f9d502c21a86f936a81521f1880595eb6dcc262583a1567768395804",
  "57": "553a3b31fe5c3a840cdbc1cd3161c0887c3a52aa4af95316ad14585afc02e73d",
  "58": "6a214526b7dc1770a2a12939cbb35011d62b9d5acfc69b3b1c2f468e3db7fd85",
  "59": "aa168d13d9c0a15bd0f9896c70c76b5af689d22311d72f9faee8cb2b7e839d87",
  "60": "d84bbb4b9a8d4186cd436bc8749111fde3e6d465a7cdbc9c0172549364544467",
  "61": "0666316b23356b5c46026b8290611c4e3a3abed779cf3fab30d07aab55f9c554",
  "62": "dd8d8c47b9f1178fc1daa8224ffec05c8aebaf0f01eda136ef7984ff5945eb48",
  "63": "8cf202e8f967b9a644d1d49d53c07eebc45aeca7b81e3ac0d922c20028d5b08d",
  "64": "a87c3210138bf75dd725081459fd7585fbb95970d8b57e8226ee21c3c85859e4",
  "65": "a88d71eb3ddedd0d34488d0bd5d6cad461e548547d270ede45463e6daa3040dd",
  "66": "7515ed5397e206c96fcffdc0c3cd87034220dd596d2322326f9459f6dd9bf66a",
  "67": "20e656b77a4e92e0639fdf5ea997b0086bb16f45a717481e8aa10e73011a338f",
  "68": "ceb83667be67c345e937644aa233beb7318703e8293d1a5fce15b836756d48fd",
  "69": "dffe044518650c8e0a87c349eb343cb0b4885b56cb4c225c27b62b6b3c5f358a",
  "70": "3a14f846e54c35aae4e736a85192ba90c32313bf108a47250be7ff2d51ad49e0",
  "71": "898c0e9a7b335a8e3280516c951e32136894aec096baa2b4568682a12b1c5edd",
  "72": "aa7b5d53c35f0605e9ddd811d335a14e18a95f22d28f1bf7e10585c2393e7640",
  "73": "67f8f1bba3c21a00922ddf1a0cb1b0c8ac9997a6ed7975be477a26d72c4ebb84",
  "74": "b45b077ccc9e18e794d016bf3af08083a867c3a1c86d7a416df08afc74af95dd",
  "75": "4b503d4af94f6d7d90b8240d84271f52d9e01810cfb5f1f41b01fdd6a120fd08",
  "76": "29615e94c9d430755453d5d0d422ffbeb897a63f05ffa5287043b1b3233b1f16",
  "77": "c5fbbc20dd80e715ccc735f8a465f2a379263cb77f3e3879b67b0a252714395b",
  "78": "f6ff136d905c294e63489b977b480db6a4142883949848dc464dbb45bcb5506d",
  "79": "32e977611a86c8625b49308f0838c218dac6ba9e925f7b44c585e04e3944fce8",
  "80": "c0a531e65081805ad5eb9b39a58cd2af4049953118955c170cad33bb09b1390e",
  "81": "88f14909910e06f48fe04a24a9db26266844da1efd392d7e9f6462f6f7c36410",
  "82": "9f0503d3b87d9f1dfaa094ec8ee7610bde52c0d6f5ce18364daa28a7ca415c31",
  "83": "1c7b76026ea75ed7596f3f6e63b20f2c90c4309af5fb44bfd6bca3c321e6a37d",
  "84": "a0bb78b90904cbdc7e92315acead813b7547e245a28f59fd34d63b4d1c98796f",
  "85": "ae57cf9bc12b142e9512f402df04525a9c5e5d878c6763d0b414d82968fb73e5",
  "86": "aced2c7135e5fca6c7975801bdf5b559f2aa99a4f20a212fc75a5a16a1da99c8",
  "87": "1062679b4dab685acc3b89bfe56a101c2e133728b315979090da4465fd528bfd",
  "88": "c40e22f4841235b195ba227b8a140fca2e983973ae2213b01b8d090c164edd75",
  "89": "f7e9d56b1acc03146de07d4e377363ce7a733778584385a9774584a1a88bbd01",
  "90": "fb2f954a37afd9448d6766bb7b9dc49c4b85b633de9d5100dcba34bd158ddd95",
  "91": "d3547d172de8b379058118dd03156057217e8eb2461d630bb9bc27d6bff4208f",
  "92": "bbf02d89044f0d81c7e411c5117880a990f02e3b07717d2bc414cf57f2b76326",
  "93": "14ed30f01d13dda02ad09781eb24866ce20c53dbeb23b3c0c9bb8164f285979d",
  "94": "0b8de383c40dd99e237fbd7a1eea7efa0cedf0dad3eaebfc22be5202c6f30d6a",
  "95": "a4a1afbb992dfa623fc6b6c4ec0e5caf5ad82f9e4a5015040153d2d0046f6098",
  "96": "cfaa6cd4784300994909ca513857f510af8fa47d3e3377a298e1e42a1add9e83",
  "97": "1a101612d1ce6c26c7680c0cd6d603d44193fbcaec8f96042140b3e02cc31eca",
  "98": "da213d80395c6b254d59608c967dd7516db7d218a196d2476383d582393793fd",
  "99": "47641e7a81a1f8f2f1c86d6ea6a88d2a9aa2eb4b2906b4fea2b8622078a90d5f",
  "100": "e08f3faf5e4daf07ebb71fa3b4d136bbff45043ddf4f344d45cd9f9e9feb837e",
  "101": "d49e880adfda031f9902bc1cdc1af76c9e979711d8f45d3511b7925157321fba",
  "102": "dc5f961a1b341aff9bec2e30378b26aa455cfa63bfca4ef0a332f04a715c995c",
  "103": "70ef05fc722889b83c7246743ae9a0c2d325aec656e1c414a356c579b6448065",
  "104": "96fbb024d76e9ff1ca8156703c08eae0e734ce4e90abc6302142f7b2e2a548bf",
  "105": "46200e995d42402c8a469d8cb1952f7d006c052474739b482a2f1a1e8eef72a9",
  "106": "5348d2c3734f9bdf66a689dcba70e192949405170efbbe67da3de815872620dd",
  "107": "b1c20bbe431c9661f51e1a1539ba83c8873e208671c0e4551bb0ec7b03361679",
  "108": "fe88119a029712a061aae9ec9910eb174be3101eb1ecc4b20090b9731e36e491",
  "109": "cbe87985224a30f13cbe6d01dc65dc878a186833876b15818ef692464c4433bf",
  "110": "36c1d33f74ad9f2dde86c86bb468e89b03b068868ede452cde5ac5971927e716",
  "111": "9c71b51cb13dcc041ded8d902265836ca8aa49ed7695aab2aaae029a561c6461",
  "112": "4ecb3f6b5ded8408770044869079b429628c9a22a4bf2d677b589f94b295bc7a",
  "113": "e05412e65c4b038e2a38dbefcb98911b91821f33b42cfda6e478b85e708d792c",
  "114": "bfe2dc62a12f581bbe59ddfb0422dc9e188254cc05adfffc445b6aaedba9e955"
};


  // ==========================================================================
  // INDEXEDDB DATABASE MANAGER (QuranOfflineDB - FULL 114 SURAT)
  // ==========================================================================

/**
 * IndexedDB Database Manager for Full Offline Quran Dataset (114 Surahs)
 * Al-Qur'an Digital Mashendig17al - Standar Kementerian Agama RI
 * 
 * Dilengkapi Verifikasi Integritas SHA-256 Kriptografis Penuh (FIPS 180-4)
 * dan Pencocokan terhadap Dataset Referensi Resmi Kemenag RI (6.236 Ayat)
 */


const DB_NAME = 'QuranOfflineDB';
const DB_VERSION = 1;
const STORE_SURAHS = 'surahs';
const STORE_META = 'sync_meta';

/**
 * Standard Pure JavaScript SHA-256 Hash Implementation (FIPS 180-4)
 * Berjalan sinkron, deterministik, tanpa dependensi eksternal, kompatibel di semua WebView & Node.
 */
function sha256(ascii) {
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
function serializeSurahForSha256(surah) {
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
function computeSurahSha256(surah) {
  const serialized = serializeSurahForSha256(surah);
  if (!serialized) return '';
  return sha256(serialized);
}

/**
 * Alias untuk kompatibilitas ke belakang
 */
function computeSurahChecksum(surah) {
  return computeSurahSha256(surah);
}

/**
 * Buka atau inisialisasi IndexedDB
 */
function openQuranDB() {
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
async function dbGetSurah(surahNumber) {
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
async function dbSaveSurah(surahData, meta) {
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
async function dbSaveAllSurahs(surahsList, quranMetadataList) {
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
async function dbGetAllSurahs() {
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
async function dbGetDownloadedSurahNumbers() {
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
async function dbDeleteAllSurahs() {
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
async function dbVerifyIntegrity(quranMetadataList) {
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
async function dbGetDatasetStatus(quranMetadataList) {
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
async function dbSeedBundledSurahs(offlineSurahsMap, quranMetadataList) {
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


  // ==========================================================================
  // INDEXEDDB AUDIO DATABASE MANAGER (QuranAudioDB - MULTI-QARI OFFLINE)
  // ==========================================================================

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
function openAudioDB() {
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
function getAudioVerseKey(qariId, surah, verse) {
  return `${qariId}_${Number(surah)}_${Number(verse)}`;
}

/**
 * Simpan blob audio ayat ke IndexedDB dengan penanganan kuota penyimpanan
 */
async function dbSaveVerseAudio(qariId, surah, verse, blob) {
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
async function dbGetVerseAudio(qariId, surah, verse) {
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
async function dbHasVerseAudio(qariId, surah, verse) {
  const blob = await dbGetVerseAudio(qariId, surah, verse);
  return blob !== null;
}

/**
 * Dapatkan jumlah ayat audio yang tersimpan untuk satu surat tertentu
 */
async function dbGetSurahAudioCount(qariId, surah) {
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
async function dbIsSurahAudioDownloaded(qariId, surah, expectedVersesCount) {
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
async function dbGetDownloadedSurahsForQari(qariId, quranMetadataList) {
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
async function dbGetQariStorageEstimate(qariId) {
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
async function dbDeleteSurahAudio(qariId, surah) {
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
async function dbDeleteAllAudioForQari(qariId) {
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
async function dbDeleteAllAudio() {
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
async function fetchAudioWithFallback(urls, timeoutMs = 12000) {
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


    // ==========================================================================
  // TAJWID COLORIZER PARSER (STANDAR MUSHAF INDONESIA & MADINAH)
  // ==========================================================================

  function colorizeTajweed(arabicText, isActive = true) {
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

    // 6. Ikhfa (Tanwin / Nun sukun bertemu huruf ikhfa: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك) -> Coral Red Sesuai Gambar Referensi
    t = t.replace(/((?:[\u064B-\u064D][\u06ED]?[اى\u0670]?|ن[\u0652]?)\s*[تثجدذزسشصضطظفقك][\u064B-\u0652]?)/g, '<span class="tajweed-ikhfa">$1</span>');

    return t;
  }

  // ==========================================================================
  // JADWAL SHOLAT INDONESIA & ARAH KIBLAT (KEMENAG RI)
  // ==========================================================================

  const INDONESIA_CITIES = [
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

  const toRad = (deg) => (deg * Math.PI) / 180;
  const toDeg = (rad) => (rad * 180) / Math.PI;

  function calculateQiblaDirection(latitude, longitude) {
    const phiK = toRad(21.422487);
    const lambdaK = toRad(39.826206);
    const phi = toRad(latitude);
    const lambda = toRad(longitude);

    const deltaL = lambdaK - lambda;
    const y = Math.sin(deltaL);
    const x = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(deltaL);

    let qibla = toDeg(Math.atan2(y, x));
    if (qibla < 0) qibla += 360;
    return Math.round(qibla * 10) / 10;
  }

  function calculatePrayerTimes(date, lat, lng, tz) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    let d = jd - 2451545.0;

    let q = 280.459 + 0.98564736 * d;
    let g = toRad((357.529 + 0.98560028 * d) % 360);
    let L = q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g);
    let R = toRad(L % 360);
    let e = 23.439 - 0.00000036 * d;
    let radE = toRad(e);

    let sinDelta = Math.sin(radE) * Math.sin(R);
    let delta = Math.asin(sinDelta);

    let RA = Math.atan2(Math.cos(radE) * Math.sin(R), Math.cos(R));
    if (RA < 0) RA += 2 * Math.PI;
    RA = toDeg(RA) / 15;
    let eqTime = (q / 15) - RA;
    while (eqTime > 1) eqTime -= 24;
    while (eqTime < -1) eqTime += 24;

    let solarNoon = 12 + tz - (lng / 15) - eqTime;

    const subuhAngle = 20.0;
    const isyaAngle = 18.0;
    const ihtiyat = 2 / 60;
    const imsakOffset = 10 / 60;

    const phi = toRad(lat);

    const getHourAngle = (angleBelowHorizon) => {
      let alt = -toRad(angleBelowHorizon);
      let cosH = (Math.sin(alt) - Math.sin(phi) * Math.sin(delta)) / (Math.cos(phi) * Math.cos(delta));
      if (cosH > 1) return null;
      if (cosH < -1) return null;
      return toDeg(Math.acos(cosH)) / 15;
    };

    let dzuhur = solarNoon + ihtiyat;

    let zenithDiff = Math.abs(toDeg(phi) - toDeg(delta));
    let tanAsharAlt = 1 / (1 + Math.tan(toRad(zenithDiff)));
    let asharAlt = Math.atan(tanAsharAlt);
    let cosHAshar = (Math.sin(asharAlt) - Math.sin(phi) * Math.sin(delta)) / (Math.cos(phi) * Math.cos(delta));
    let hAshar = toDeg(Math.acos(Math.max(-1, Math.min(1, cosHAshar)))) / 15;
    let ashar = solarNoon + hAshar + ihtiyat;

    let hMaghrib = getHourAngle(1.0);
    let maghrib = solarNoon + hMaghrib + ihtiyat;

    let hIsya = getHourAngle(isyaAngle);
    let isya = solarNoon + hIsya + ihtiyat;

    let hSunrise = getHourAngle(1.0);
    let sunrise = solarNoon - hSunrise - ihtiyat;

    let hSubuh = getHourAngle(subuhAngle);
    let subuh = solarNoon - hSubuh + ihtiyat;

    let imsak = subuh - imsakOffset;

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
      standard: "Kemenag RI (Subuh 20°, Isya 18°, Ihtiyat +2m)"
    };
  }

  function getNextPrayer(schedule) {
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

    // ==========================================================================
  // SANITASI & STANDARISASI RASM UTSMANI MADINAH AUTENTIK (KING FAHD COMPLEX)
  // ==========================================================================

  function cleanQuranArabic(text) {
    if (!text) return '';
    let s = String(text);

    // 1. Ganti SEMUA U+06E4 (ARABIC SMALL HIGH MADDA ۤ) dengan U+0653 (ARABIC MADDAH ABOVE ٓ)
    s = s.replace(/\u06E4/g, '\u0653');

    // 2. Ganti modern precomposed U+0622 (آ) dengan U+0627 + U+0653 (آ)
    s = s.replace(/آ/g, 'ا\u0653');

    // 3. Hapus tatweel yang menempel pada tanda mad (ـٓ atau ٓـ)
    s = s.replace(/\u0640*(\u0653)\u0640*/g, '$1');

    // 4. General rule untuk Mad Wajib Muttashil di seluruh 114 Surat:
    s = s.replace(/([\u064E][\u0651]?\s*ا)\u0640*([ء\u0674])/g, '$1\u0653$2');
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

    // j. Rapikan tanda waqaf jaiz, shala, qala
    s = s.replace(/\s*ۗ\s*/g, ' ۗ ');
    s = s.replace(/\s*ۖ\s*/g, ' ۖ ');
    s = s.replace(/\s*ۚ\s*/g, ' ۚ ');

    return s;
  }

  // ==========================================================================
  // FETCH SURAH DENGAN OFFLINE-FIRST CACHE & INDEXEDDB
  // ==========================================================================

/**
 * Quran API Service with Intelligent Offline-First Caching & IndexedDB
 * Mengutamakan penyimpanan IndexedDB, data bawaan offline, dan API Kemenag RI
 */

const CACHE_PREFIX = "quran_surah_v3_";

/**
 * Normalisasi dan perbaikan tanda mad Quranic autentik:
 * Menghilangkan broken tatweel (ـ) sebelum hamzah (ـء) dan menyempurnakan mad wajib / jaiz menggunakan U+0653 (جَآءَهُمْ, وَرَآءَهُ, اَنْبِيَآءَ)
 * Sesuai dengan Glyph ID 109 (Maddah Above) pada font resmi Mushaf Madinah (UthmanicHafs)
 */
function cleanQuranArabic(text) {
  if (!text) return '';
  let s = String(text);

  // 1. Ganti SEMUA U+06E4 (ARABIC SMALL HIGH MADDA ۤ) dengan U+0653 (ARABIC MADDAH ABOVE ٓ)
  s = s.replace(/\u06E4/g, '\u0653');

  // 2. Ganti modern precomposed U+0622 (آ) dengan U+0627 + U+0653 (آ)
  s = s.replace(/آ/g, 'ا\u0653');

  // 3. Hapus tatweel yang menempel pada tanda mad (ـٓ atau ٓـ)
  s = s.replace(/\u0640*(\u0653)\u0640*/g, '$1');

  // 4. General rule untuk Mad Wajib Muttashil di seluruh 114 Surat:
  s = s.replace(/([\u064E][\u0651]?\s*ا)\u0640*([ء\u0674])/g, '$1\u0653$2');
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

/**
 * Validasi ketat integritas data surat Al-Qur'an terhadap metadata resmi Kemenag RI
 * Menolak jika:
 * 1. Nomor surat salah
 * 2. Jumlah ayat tidak persis sama dengan metadata
 * 3. Nomor ayat tidak urut dari 1 hingga N
 * 4. Teks Arab atau terjemahan kosong
 */
function validateSurahIntegrity(surah, meta) {
  if (!surah || typeof surah !== 'object') {
    return { valid: false, reason: 'Data surat kosong atau bukan objek valid.' };
  }
  if (!meta || typeof meta !== 'object') {
    return { valid: false, reason: 'Metadata surat tidak ditemukan.' };
  }
  if (Number(surah.number) !== Number(meta.number)) {
    return { valid: false, reason: `Nomor surat tidak cocok: diterima ${surah.number}, seharusnya ${meta.number}.` };
  }
  if (!Array.isArray(surah.verses)) {
    return { valid: false, reason: 'Daftar ayat bukan array valid.' };
  }
  if (surah.verses.length !== meta.verses) {
    return { valid: false, reason: `Jumlah ayat tidak sesuai: diterima ${surah.verses.length}, seharusnya ${meta.verses}.` };
  }

  for (let i = 0; i < surah.verses.length; i++) {
    const v = surah.verses[i];
    const expectedNum = i + 1;
    if (!v || typeof v !== 'object') {
      return { valid: false, reason: `Ayat #${expectedNum} tidak valid.` };
    }
    if (Number(v.number) !== expectedNum) {
      return { valid: false, reason: `Urutan ayat rusak: ayat ke-${expectedNum} memiliki nomor ${v.number}.` };
    }
    if (!v.arabic || String(v.arabic).trim().length === 0) {
      return { valid: false, reason: `Teks Arab pada ayat #${expectedNum} kosong.` };
    }
    if (!v.translation || String(v.translation).trim().length === 0) {
      return { valid: false, reason: `Terjemahan pada ayat #${expectedNum} kosong.` };
    }
  }

  return { valid: true };
}

async function getSurahData(surahNumber) {
  const num = Number(surahNumber);
  const meta = QURAN_SURAH_LIST.find(s => s.number === num);

  // 1. Cek IndexedDB (Primary Storage - Zero Latency, 100% Offline)
  try {
    const dbData = await dbGetSurah(num);
    if (dbData && meta) {
      const val = validateSurahIntegrity(dbData, meta);
      if (val.valid) {
        return dbData;
      } else {
        console.warn(`[quranApi] IndexedDB Surah ${num} data invalid: ${val.reason}`);
      }
    }
  } catch (e) {
    console.warn(`[quranApi] IndexedDB lookup error for Surah ${num}:`, e);
  }

  // 2. Cek Data Bawaan Offline (Instant zero-latency fallback)
  if (OFFLINE_SURAHS[num] && meta) {
    const offlineCopy = JSON.parse(JSON.stringify(OFFLINE_SURAHS[num]));
    if (Array.isArray(offlineCopy.verses)) {
      offlineCopy.verses.forEach(v => {
        v.arabic = cleanQuranArabic(v.arabic);
      });
    }
    const val = validateSurahIntegrity(offlineCopy, meta);
    if (val.valid) {
      try { await dbSaveSurah(offlineCopy); } catch(e) {}
      return offlineCopy;
    } else {
      console.warn(`[quranApi] Bundled Surah ${num} data invalid: ${val.reason}`);
    }
  }

  // 3. Cek LocalStorage Cache (Migrasi backward-compatible)
  const cached = localStorage.getItem(`${CACHE_PREFIX}${num}`);
  if (cached && meta) {
    try {
      const parsed = JSON.parse(cached);
      if (meta.arabic) parsed.arabic = meta.arabic;
      if (Array.isArray(parsed.verses)) {
        parsed.verses.forEach(v => {
          v.arabic = cleanQuranArabic(v.arabic);
        });
      }
      const val = validateSurahIntegrity(parsed, meta);
      if (val.valid) {
        try { await dbSaveSurah(parsed); } catch(e) {}
        return parsed;
      }
    } catch (e) {
      console.warn("Error parsing cached surah:", e);
    }
  }

  // 4. Jika Online, Fetch dari API equran.id & Validasi Ketat
  if (typeof navigator === 'undefined' || navigator.onLine) {
    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${num}`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(7000)
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.data && meta) {
          const raw = result.data;
          
          // Tolak jika nomor surat API tidak cocok dengan yang diminta
          if (Number(raw.nomor) !== num) {
            console.warn(`[quranApi] DITOLAK: Nomor surat API (${raw.nomor}) tidak cocok dengan permintaan (${num})`);
          } else {
            const normalized = {
              number: Number(raw.nomor),
              name: raw.namaLatin || meta.name,
              arabic: meta.arabic || raw.nama,
              meaning: raw.arti || meta.meaning,
              versesCount: Number(raw.jumlahAyat) || meta.verses,
              type: meta.type || ((raw.tempatTurun && raw.tempatTurun.toLowerCase().includes("madin")) ? "Madaniyyah" : "Makkiyyah"),
              juz: meta.juz || 1,
              page: meta.page || 1,
              bismillah: num !== 1 && num !== 9,
              description: raw.deskripsi || "",
              audioFull: raw.audioFull ? raw.audioFull["05"] || raw.audioFull["01"] : null,
              verses: (raw.ayat || []).map((a, idx) => ({
                number: Number(a.nomorAyat) || (idx + 1),
                arabic: cleanQuranArabic(a.teksArab),
                latin: a.teksLatin || "",
                translation: a.teksIndonesia || "",
                audio: a.audio ? a.audio["05"] || a.audio["01"] : null
              }))
            };

            // Validasi integritas ketat (jumlah ayat, urutan ayat 1..N, teks arab & terjemahan tidak kosong)
            const validation = validateSurahIntegrity(normalized, meta);
            if (validation.valid) {
              try {
                await dbSaveSurah(normalized);
              } catch (dbErr) {
                console.warn('[quranApi] Gagal menyimpan surah terverifikasi ke IndexedDB:', dbErr);
              }
              return normalized;
            } else {
              console.warn(`[quranApi] DITOLAK: Respons API Surah ${num} gagal validasi integritas: ${validation.reason}`);
              // PENTING: Dilarang mengembalikan data yang gagal validasi!
            }
          }
        }
      }
    } catch (err) {
      console.info(`Surah ${num} online fetch attempt error:`, err.message);
    }
  }

  // 5. Data belum tersedia secara offline atau gagal validasi & tidak ada internet
  // PERSYARATAN INTEGRITAS: Dilarang menggunakan teks placeholder tiruan/palsu!
  // Kembalikan objek status belum diunduh yang jujur dan autentik
  return {
    number: num,
    name: meta ? meta.name : `Surah ${num}`,
    arabic: meta ? meta.arabic : "سُورَةٌ",
    meaning: meta ? meta.meaning : "Surah Al-Qur'an",
    versesCount: meta ? meta.verses : 0,
    type: meta ? meta.type : "Makkiyyah",
    juz: meta ? meta.juz : 1,
    page: meta ? meta.page : 1,
    bismillah: num !== 1 && num !== 9,
    isNotDownloaded: true,
    verses: []
  };
}


  function toArabicNumerals(num) {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).split('').map(d => arabicDigits[Number(d)] || d).join('');
  }

  function escapeQuotes(str) {
    if (!str) return '';
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ==========================================================================
  // KOMPONEN UI BERANDA (HOME SCREEN)
  // ==========================================================================

/**
 * Komponen Beranda / Home Screen
 * Mereplikasi tampilan Tampilan.1.jpeg dengan peningkatan modern,
 * kombinasi warna Biru Navy, Putih, Hitam, dan Orange.
 */


function renderHomeScreen(state) {
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


  // ==========================================================================
  // KOMPONEN UI PEMBACA (QURAN READER)
  // ==========================================================================

function renderQuranReader(surahData, settings, currentPlayingVerse, bookmarks, lastRead) {
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


  // ==========================================================================
  // KOMPONEN UI PENGATURAN (SETTINGS SCREEN & CONTACT LOG)
  // ==========================================================================

/**
 * Komponen Pengaturan Aplikasi (Settings Modal)
 * 1. Bahasa: Indonesia / Inggris
 * 2. Tema: Terang / Gelap
 * 3. Tajwid Berwarna (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad)
 * 4. Ukuran Font: Arab (22px - 42px) & Terjemahan (12px - 22px)
 * 5. Qori Murottal: Pilihan Qori Studio Master Jernih (114 Surat Lengkap)
 * 6. Fitur Layar Penuh (Fullscreen Mode)
 */

const QARI_LIST = [
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

function renderSettingsModal(settings) {
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


  // ==========================================================================
  // KOMPONEN PENGELOLA DATA OFFLINE (INDEXEDDB MODAL)
  // ==========================================================================

/**
 * Komponen Pengelola Data Al-Qur'an & Audio Murottal Offline (IndexedDB Manager)
 * Al-Qur'an Digital Mashendig17al - Standar Kementerian Agama RI
 * 
 * Mengelola unduhan 114 surat teks dan audio murottal multi-qori independen ke IndexedDB.
 */


function renderOfflineDataModal(
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

function renderVerificationResultHtml(res, isEn = false) {
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


  // ==========================================================================
  // KOMPONEN KEBIJAKAN PRIVASI & KEAMANAN DATA (PRIVACY MODAL)
  // ==========================================================================

/**
 * Komponen Modal Kebijakan Privasi & Keamanan Data (Privacy & Data Safety Modal)
 * Standar Google Play Store & Privasi Pengguna
 * Al-Qur'an Digital Mashendig17al
 */

function renderPrivacyModal(lang = 'id') {
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



  // ==========================================================================
  // MODAL TERAKHIR BACA
  // ==========================================================================

/**
 * Komponen Modal Dialog Terakhir Baca
 * Mereplikasi tampilan Tampilan.3.jpeg:
 * - Card Dialog Putih Melengkung Elegan
 * - Judul: "QS. Al-Fatihah: Ayat 1"
 * - Opsi 1: "Lihat sebagai Surah"
 * - Opsi 2: "Lihat sebagai Juz"
 */

function renderLastReadModal(lastRead, language = "id") {
  const isEn = language === "en";
  const surahName = lastRead ? lastRead.surahName : "Al-Fatihah";
  const ayahNumber = lastRead ? lastRead.ayahNumber : 1;
  const surahNumber = lastRead ? lastRead.surahNumber : 1;
  const juz = lastRead ? lastRead.juz : 1;

  return `
    <div class="modal-backdrop" id="lastReadModal" onclick="if(event.target===this) window.app.closeLastReadModal()">
      <div class="modal-dialog-white" onclick="event.stopPropagation()">
        <!-- Judul Header Sesuai Tampilan.3.jpeg -->
        <div class="lastread-modal-header">
          ${isEn ? 'Surah' : 'QS.'} ${surahName}: ${isEn ? 'Verse' : 'Ayat'} ${ayahNumber}
        </div>

        <!-- Daftar Pilihan Sesuai Tampilan.3.jpeg -->
        <div class="lastread-options-list">
          <!-- Opsi 1: Lihat sebagai Surah -->
          <button class="lastread-option-btn" onclick="window.app.jumpToLastReadSurah(${surahNumber}, ${ayahNumber})">
            <span class="lastread-option-icon">
              <!-- Ikon Buku / Surah Sesuai Tampilan.3 -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </span>
            <span>${isEn ? 'View as Surah' : 'Lihat sebagai Surah'}</span>
          </button>

          <!-- Opsi 2: Lihat sebagai Juz -->
          <button class="lastread-option-btn" onclick="window.app.jumpToLastReadJuz(${surahNumber}, ${ayahNumber}, ${juz})">
            <span class="lastread-option-icon">
              <!-- Ikon Juz Sesuai Tampilan.3 -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>
              </svg>
            </span>
            <span>${isEn ? `View as Juz (Juz ${juz})` : `Lihat sebagai Juz (Juz ${juz})`}</span>
          </button>
        </div>

        <div style="margin-top: 24px; text-align: right;">
          <button style="background: none; border: none; color: #64748B; font-weight: 700; font-size: 14px; cursor: pointer; padding: 6px 12px;" onclick="window.app.closeLastReadModal()">
            ${isEn ? 'Close' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  `;
}


  // ==========================================================================
  // MODAL DAFTAR SURAH (SURAH LIST & 30 JUZ)
  // ==========================================================================

/**
 * Komponen Daftar 114 Surah & 30 Juz
 * Navigasi komprehensif dengan pencarian instan dan filter tab
 */

function renderSurahListModal(activeTab = "surah", searchQuery = "", language = "id", lastRead = null) {
  const isEn = language === "en";
  const query = (searchQuery || "").toLowerCase().trim();

  // Single source of truth untuk penanda Terakhir Baca (hanya SATU posisi aktif secara global)
  const activeLr = (lastRead !== null && lastRead !== undefined)
    ? lastRead
    : ((window.app && window.app.state && window.app.state.lastRead)
        ? window.app.state.lastRead
        : (window.app && typeof window.app.loadLastRead === 'function' ? window.app.loadLastRead() : null));
  const activeSurahNum = activeLr ? Number(activeLr.surahNumber) : null;
  const activeAyahNum = activeLr ? Math.max(1, Number(activeLr.ayahNumber) || 1) : 1;

  const filteredSurahs = QURAN_SURAH_LIST.filter(s => {
    if (!query) return true;
    const enMeaning = (getSurahMeaning(s.number, "en") || "").toLowerCase();
    return (
      s.name.toLowerCase().includes(query) ||
      s.meaning.toLowerCase().includes(query) ||
      enMeaning.includes(query) ||
      String(s.number) === query ||
      s.arabic.includes(query)
    );
  });

  return `
    <div class="full-modal" id="surahListModal">
      <!-- Header -->
      <div class="modal-header-bar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.navigate('home')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="modal-header-title">${isEn ? "Quran Index" : "Daftar Al-Qur'an"}</div>
        </div>
      </div>

      <!-- Tab Switcher: SURAH vs JUZ -->
      <div style="display: flex; background: #0E1A29; border-bottom: 2px solid #1E293B; padding: 0 16px;">
        <button 
          style="flex: 1; padding: 12px; background: none; border: none; font-size: 14px; font-weight: 700; color: ${activeTab === 'surah' ? 'var(--color-orange-primary)' : '#94A3B8'}; border-bottom: 3px solid ${activeTab === 'surah' ? 'var(--color-orange-primary)' : 'transparent'}; cursor: pointer;"
          onclick="window.app.setSurahListTab('surah')">
          ${isEn ? "114 SURAHS" : "114 SURAH"}
        </button>
        <button 
          style="flex: 1; padding: 12px; background: none; border: none; font-size: 14px; font-weight: 700; color: ${activeTab === 'juz' ? 'var(--color-orange-primary)' : '#94A3B8'}; border-bottom: 3px solid ${activeTab === 'juz' ? 'var(--color-orange-primary)' : 'transparent'}; cursor: pointer;"
          onclick="window.app.setSurahListTab('juz')">
          30 JUZ
        </button>
      </div>

      <!-- Input Pencarian -->
      <div class="modal-search-box">
        <span class="modal-search-icon">🔍</span>
        <input 
          type="text" 
          class="modal-search-input" 
          id="surahSearchInput"
          placeholder="${isEn ? 'Search surah (e.g. Al-Baqarah, Yasin, 2)...' : 'Cari surah (misal: Al-Humazah, Yasin, 104)...'}" 
          value="${searchQuery || ''}"
          oninput="window.app.filterSurahList(this.value)"
        />
      </div>

      <!-- Daftar List -->
      <div class="surah-list-scroll">
        ${activeTab === 'surah' ? `
          <!-- List 114 Surah -->
          ${filteredSurahs.map(s => {
            const surahMeaning = isEn ? getSurahMeaning(s.number, "en", s.meaning) : s.meaning;
            const surahType = s.type === 'Makkiyyah' ? (isEn ? 'Meccan' : 'Makkiyyah') : (isEn ? 'Medinan' : 'Madaniyyah');
            const versesLabel = isEn ? 'Verses' : 'Ayat';
            const isLastRead = activeSurahNum !== null && Number(s.number) === activeSurahNum;
            return `
            <div class="surah-list-item" onclick="window.app.loadSurah(${s.number})">
              <div class="surah-item-left">
                <div class="surah-item-number">${s.number}</div>
                <div>
                  <div class="surah-item-name" style="display: flex; align-items: center; flex-wrap: wrap; gap: 6px;">
                    <span>${s.name}</span>
                    ${isLastRead ? `<span class="badge-surah-last-read" style="background: rgba(249, 115, 22, 0.18); color: #F97316; font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(249, 115, 22, 0.35);">📌 ${isEn ? 'Verse' : 'Ayat'} ${activeAyahNum}</span>` : ''}
                  </div>
                  <div class="surah-item-meta">
                    ${surahMeaning} • <span style="color: ${s.type === 'Makkiyyah' ? '#FB923C' : '#38BDF8'};">${surahType}</span> • ${s.verses} ${versesLabel}
                  </div>
                </div>
              </div>
              <div class="surah-item-arabic">${s.arabic}</div>
            </div>
            `;
          }).join('')}
          ${filteredSurahs.length === 0 ? `
            <div style="text-align: center; padding: 40px 20px; color: #94A3B8;">
              ${isEn ? `No surahs found matching "${searchQuery}".` : `Tidak menemukan surah dengan kata kunci "${searchQuery}".`}
            </div>
          ` : ''}
        ` : `
          <!-- List 30 Juz -->
          ${QURAN_JUZ_LIST.map(j => `
            <div class="surah-list-item" onclick="window.app.loadJuz(${j.juz}, ${j.startSurah}, ${j.startAyat})">
              <div class="surah-item-left">
                <div class="surah-item-number" style="background: rgba(249, 115, 22, 0.15); border-color: var(--color-orange-primary);">
                  ${j.juz}
                </div>
                <div>
                  <div class="surah-item-name">${j.name}</div>
                  <div class="surah-item-meta">
                    ${isEn ? `Starts Surah ${j.startSurah} Verse ${j.startAyat} • Page ${j.page}` : `Mulai Surah ${j.startSurah} Ayat ${j.startAyat} • Halaman ${j.page}`}
                  </div>
                </div>
              </div>
              <div style="color: var(--color-orange-primary); font-weight: 700; font-size: 13px;">
                ${isEn ? 'Open →' : 'Buka &rarr;'}
              </div>
            </div>
          `).join('')}
        `}
      </div>
    </div>
  `;
}


  // ==========================================================================
  // SMART SEARCH, NORMALISASI ARAB & EJAAN, KAMUS SINONIM & INDEKS TEMATIK
  // ==========================================================================

/**
 * Data Indeks Tematik, Ayat Pilihan Offline, Normalisasi Ejaan & Kamus Sinonim
 * Standar Rasm Utsmani & Terjemahan Kemenag RI
 */

// Helper: Hapus Harakat / Tashkeel dari Teks Arab (Regex Unicode)
function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
}

// Helper: Normalisasi Huruf Arab untuk Pencarian Fleksibel
function normalizeArabic(text) {
  if (!text) return '';
  return removeHarakat(text)
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[\s\u200C-\u200F]+/g, ' ')
    .trim();
}

// Normalisasi Ejaan Kata Serapan Bahasa Indonesia
const SPELLING_REPLACEMENTS = [
  [/\bsholat\b/gi, 'shalat'],
  [/\bsolat\b/gi, 'shalat'],
  [/\bsalat\b/gi, 'shalat'],
  [/\brizki\b/gi, 'rezeki'],
  [/\brejeki\b/gi, 'rezeki'],
  [/\bdzikir\b/gi, 'zikir'],
  [/\btaubat\b/gi, 'tobat'],
  [/\bsyurga\b/gi, 'surga'],
  [/\bqiamat\b/gi, 'kiamat'],
  [/\binfaq\b/gi, 'infak'],
  [/\bshaum\b/gi, 'puasa'],
  [/\bshodaqoh\b/gi, 'sedekah'],
  [/\bsodaqoh\b/gi, 'sedekah'],
  [/\balquran\b/gi, 'qur\'an'],
  [/\bhadist\b/gi, 'hadis'],
  [/\brida\b/gi, 'rida'],
  [/\bridho\b/gi, 'rida'],
  [/\bshobrun\b/gi, 'sabar'],
  [/\biklas\b/gi, 'ikhlas']
];

function normalizeSpelling(text) {
  if (!text) return '';
  let str = text.toLowerCase();
  for (const [pattern, replacement] of SPELLING_REPLACEMENTS) {
    str = str.replace(pattern, replacement);
  }
  return str;
}

// Kamus Sinonim & Konteks (Semantic Mapping)
const SYNONYM_DICTIONARY = {
  // Emosi, Ketenangan Hati & Mental
  "galau": ["tenang", "tenteram", "janganlah kamu bersedih", "kesulitan", "dada", "mengingat Allah", "kelapangan"],
  "stres": ["tenang", "tenteram", "janganlah kamu bersedih", "kesulitan", "kelapangan", "kemudahan"],
  "stress": ["tenang", "tenteram", "janganlah kamu bersedih", "kesulitan", "kelapangan", "kemudahan"],
  "cemas": ["tenang", "tenteram", "janganlah takut", "beriman", "hati"],
  "gelisah": ["tenang", "tenteram", "mengingat Allah", "zikir", "hati"],
  "insecure": ["tenang", "kemuliaan", "janganlah kamu bersedih", "derajat", "bertawakal"],
  "sedih": ["janganlah kamu bersedih", "kelapangan", "kesulitan", "kesabaran", "pertolongan"],
  "takut": ["janganlah takut", "berlindung", "pertolongan Allah", "aman"],
  
  // Keluarga & Jodoh
  "jodoh": ["pasangan", "kawin", "istri", "suami", "tenteram", "mawaddah", "keluarga"],
  "menikah": ["pasangan", "kawin", "nikah", "istri", "suami", "tenteram", "mawaddah"],
  "kawin": ["nikah", "pasangan", "istri", "suami"],
  "pernikahan": ["pasangan", "kawin", "nikah", "istri", "suami", "tenteram"],
  "keluarga": ["istri", "anak", "keluarga", "kerabat", "rumah tangga", "keturunan"],
  
  // Keuangan, Usaha & Muamalah
  "hutang": ["utang", "riba", "kelapangan", "rezeki", "pinjaman"],
  "utang": ["utang", "riba", "kelapangan", "rezeki", "kemudahan"],
  "bangkrut": ["utang", "kesulitan", "kelapangan", "kemudahan", "rezeki"],
  "miskin": ["rezeki", "fakir", "miskin", "sedekah", "kelapangan"],
  "kaya": ["rezeki", "harta", "nikmat", "bersyukur"],
  "bisnis": ["jual beli", "perdagangan", "harta", "rezeki"],
  
  // Orang Tua & Keturunan
  "orang tua": ["ibu-bapak", "kedua orang tua", "menyusui", "berbakti"],
  "ibu": ["ibu-bapak", "kedua orang tua", "menyusui", "mengandung", "rahim"],
  "ayah": ["ibu-bapak", "kedua orang tua", "bapak", "ayah"],
  "bapak": ["ibu-bapak", "kedua orang tua", "bapak"],
  "anak": ["keturunan", "anak", "penyejuk mata", "buah hati"]
};

// 6 Kategori Indeks Tematik Terstruktur
const THEMATIC_CATEGORIES = [
  {
    id: "akhlak",
    icon: "💖",
    title: "Akhlak & Obat Hati",
    gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 63, 94, 0.05))",
    borderColor: "rgba(244, 63, 94, 0.3)",
    tagQuery: "sabar",
    topics: [
      { label: "Sabar", query: "sabar" },
      { label: "Syukur", query: "syukur" },
      { label: "Ikhlas", query: "ikhlas" },
      { label: "Mengatasi Sedih/Gelisah", query: "galau" },
      { label: "Larangan Mengumpat", query: "pengumpat" }
    ]
  },
  {
    id: "ibadah",
    icon: "🕌",
    title: "Ibadah & Syariah",
    gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.05))",
    borderColor: "rgba(16, 185, 129, 0.3)",
    tagQuery: "shalat",
    topics: [
      { label: "Shalat", query: "shalat" },
      { label: "Puasa", query: "puasa" },
      { label: "Zakat", query: "zakat" },
      { label: "Sedekah", query: "sedekah" },
      { label: "Haji", query: "haji" }
    ]
  },
  {
    id: "muamalah",
    icon: "⚖️",
    title: "Muamalah & Kehidupan",
    gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.05))",
    borderColor: "rgba(245, 158, 11, 0.3)",
    tagQuery: "rezeki",
    topics: [
      { label: "Rezeki", query: "rezeki" },
      { label: "Harta", query: "harta" },
      { label: "Jual Beli", query: "jual beli" },
      { label: "Riba", query: "riba" },
      { label: "Keluarga & Pernikahan", query: "jodoh" }
    ]
  },
  {
    id: "akidah",
    icon: "🌌",
    title: "Akidah & Akhirat",
    gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.05))",
    borderColor: "rgba(99, 102, 241, 0.3)",
    tagQuery: "tauhid",
    topics: [
      { label: "Tauhid", query: "tauhid" },
      { label: "Hari Kiamat", query: "kiamat" },
      { label: "Surga", query: "surga" },
      { label: "Neraka", query: "neraka" },
      { label: "Malaikat", query: "malaikat" }
    ]
  },
  {
    id: "sejarah",
    icon: "📜",
    title: "Kisah & Sejarah",
    gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(2, 132, 199, 0.05))",
    borderColor: "rgba(14, 165, 233, 0.3)",
    tagQuery: "nabi",
    topics: [
      { label: "Kisah Para Nabi", query: "nabi" },
      { label: "Ashabul Kahfi", query: "kahfi" },
      { label: "Luqman", query: "luqman" },
      { label: "Fir'aun", query: "fir'aun" }
    ]
  },
  {
    id: "doa",
    icon: "🤲",
    title: "Doa-Doa Pilihan",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(147, 51, 234, 0.05))",
    borderColor: "rgba(168, 85, 247, 0.3)",
    tagQuery: "doa",
    topics: [
      { label: "Doa Orang Tua", query: "orang tua" },
      { label: "Doa Sapu Jagat", query: "sapu jagat" },
      { label: "Doa Memohon Keturunan", query: "keturunan" },
      { label: "Doa Kemudahan", query: "kemudahan" }
    ]
  }
];

// Bank Ayat Tematik Pilihan Offline (Otentik Standar Kemenag RI)
const THEMATIC_VERSES = [
  // --- AYAT KURSI (2:255) ---
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 255,
    juz: 3,
    arabic: "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ ۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌ ۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ ۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖ ۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ ۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَ ۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
    latin: "Allāhu lā ilāha illā huw(a), al-ḥayyul-qayyūm(u), lā ta'khużuhū sinatuw wa lā naum(un), lahū mā fis-samāwāti wa mā fil-arḍ(i), man żallażī yasyfa'u 'indahū illā bi'iżnih(ī), ya'lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭūna bisyai'im min 'ilmihī illā bimā syā'(a), wasi'a kursiyyuhus-samāwāti wal-arḍ(a), wa lā ya'ūduhū ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm(u).",
    translation: "Allah, tidak ada tuhan selain Dia, Yang Mahahidup lagi terus-menerus mengurus (makhluk-Nya). Dia tidak dilanda oleh kantuk dan tidak pula oleh tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya, kecuali apa yang Dia kehendaki. Kursi-Nya (ilmu dan kekuasaan-Nya) meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi lagi Mahaagung.",
    translation_en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    keywords: ["ayat kursi", "kursi", "2:255", "tauhid", "perlindungan", "keagungan allah", "hayyul qayyum"]
  },

  // --- KUN FAYAKUN (36:82, 2:117) ---
  {
    surahNumber: 36,
    surahName: "Ya Sin",
    ayahNumber: 82,
    juz: 23,
    arabic: "اِنَّمَآ اَمْرُهٗٓ اِذَآ اَرَادَ شَيْـًٔا اَنْ يَّقُوْلَ لَهٗ كُنْ فَيَكُوْنُ",
    latin: "Innamā amruhū iżā arāda syai'an ay yaqūla lahū kun fayakūn(u).",
    translation: "Sesungguhnya ketetapan-Nya, jika Dia menghendaki sesuatu, hanyalah berkata kepadanya, 'Jadilah!' Maka, jadilah sesuatu itu.",
    translation_en: "His command is only when He intends a thing that He says to it, 'Be,' and it is.",
    keywords: ["kun fayakun", "kun fa yakun", "36:82", "kehendak allah", "penciptaan", "mukjizat", "kekuasaan"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 117,
    juz: 1,
    arabic: "بَدِيْعُ السَّمٰوٰتِ وَالْاَرْضِۗ وَاِذَا قَضٰىٓ اَمْرًا فَاِنَّمَا يَقُوْلُ لَهٗ كُنْ فَيَكُوْنُ",
    latin: "Badī'us-samāwāti wal-arḍ(i), wa iżā qaḍā amran fa innamā yaqūlu lahū kun fayakūn(u).",
    translation: "(Allah) Pencipta langit dan bumi. Apabila Dia hendak menetapkan sesuatu, Dia hanya berkata kepadanya, 'Jadilah!' Maka, jadilah sesuatu itu.",
    translation_en: "Originator of the heavens and the earth. When He decrees a matter, He only says to it, 'Be,' and it is.",
    keywords: ["kun fayakun", "pencipta", "2:117", "kekuasaan allah"]
  },

  // --- SABAR (2:153, 2:45) ---
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 153,
    juz: 2,
    arabic: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ اِنَّ اللّٰهَ مَعَ الصّٰبِرِيْنَ",
    latin: "Yā ayyuhallażīna āmanusta'īnū biṣ-ṣabri waṣ-ṣalāh(ti), innallāha ma'aṣ-ṣābirīn(a).",
    translation: "Wahai orang-orang yang beriman, mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Sesungguhnya Allah beserta orang-orang yang sabar.",
    translation_en: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    keywords: ["sabar", "shalat", "salat", "pertolongan", "2:153", "kesabaran", "akhlak"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 45,
    juz: 1,
    arabic: "وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ وَاِنَّهَا لَكَبِيْرَةٌ اِلَّا عَلَى الْخٰشِعِيْنَۙ",
    latin: "Wasta'īnū biṣ-ṣabri waṣ-ṣalāh(ti), wa innahā lakabīratun illā 'alal-khāsyi'īn(a).",
    translation: "Jadikanlah sabar dan salat sebagai penolongmu. Sesungguhnya hal itu sungguh berat, kecuali bagi orang-orang yang khusyuk,",
    translation_en: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].",
    keywords: ["sabar", "shalat", "penolong", "khusyuk", "2:45"]
  },

  // --- SYUKUR (14:7) ---
  {
    surahNumber: 14,
    surahName: "Ibrahim",
    ayahNumber: 7,
    juz: 13,
    arabic: "وَاِذْ تَاَذَّنَ رَبُّكُمْ لَىِٕنْ شَكَرْتُمْ لَاَزِيْدَنَّكُمْ وَلَىِٕنْ كَفَرْتُمْ اِنَّ عَذَابِيْ لَشَدِيْدٌ",
    latin: "Wa iż ta'ażżana rabbukum la'in syakartum la'azīdannakum wa la'in kafartum inna 'ażābī lasyadīd(un).",
    translation: "(Ingatlah) ketika Tuhanmu memaklumkan, 'Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu, tetapi jika kamu mengingkari (nikmat-Ku), sesungguhnya azab-Ku benar-benar sangat keras.'",
    translation_en: "And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'",
    keywords: ["syukur", "bersyukur", "nikmat", "bertambah", "14:7", "akhlak", "rezeki"]
  },

  // --- IKHLAS (98:5) ---
  {
    surahNumber: 98,
    surahName: "Al-Bayyinah",
    ayahNumber: 5,
    juz: 30,
    arabic: "وَمَآ اُمِرُوْٓا اِلَّا لِيَعْبُدُوا اللّٰهَ مُخْلِصِيْنَ لَهُ الدِّيْنَ ەۙ حُنَفَآءَ وَيُقِيْمُوا الصَّلٰوةَ وَيُؤْتُوا الزَّكٰوةَ وَذٰلِكَ دِيْنُ الْقَيِّمَةِۗ",
    latin: "Wa mā umirū illā liya'budullāha mukhliṣīna lahud-dīna ḥunafā'a wa yuqīmuṣ-ṣalāta wa yu'tuz-zakāta wa żālika dīnul-qayyimah(ti).",
    translation: "Padahal mereka tidak diperintahkan kecuali agar beribadah kepada Allah dengan memurnikan ketaatan (ikhlas) kepada-Nya dalam (menjalankan) agama yang lurus, menegakkan salat, dan menunaikan zakat. Yang demikian itulah agama yang lurus.",
    translation_en: "And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah. And that is the correct religion.",
    keywords: ["ikhlas", "ibadah", "ketaatan", "shalat", "zakat", "98:5", "tauhid"]
  },

  // --- MENGATASI SEDIH / GELISAH / HATI TENANG / GALAU (13:28, 94:5-6, 9:40) ---
  {
    surahNumber: 13,
    surahName: "Ar-Ra'd",
    ayahNumber: 28,
    juz: 13,
    arabic: "الَّذِيْنَ اٰمَنُوْا وَتَطْمَىِٕنُّ قُلُوْبُهُمْ بِذِكْرِ اللّٰهِ ۗ اَلَا بِذِكْرِ اللّٰهِ تَطْمَىِٕنُّ الْقُلُوْبُ ۗ",
    latin: "Allażīna āmanū wa taṭma'innu qulūbuhum biżikrillāh(i), alā biżikrillāhi taṭma'innul-qulūb(u).",
    translation: "(yaitu) orang-orang yang beriman dan hati mereka menjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.",
    translation_en: "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
    keywords: ["galau", "tenang", "tenteram", "hati", "mengingat allah", "zikir", "obat hati", "stres", "gelisah", "13:28"]
  },
  {
    surahNumber: 94,
    surahName: "Al-Insyirah",
    ayahNumber: 5,
    juz: 30,
    arabic: "فَاِنَّ مَعَ الْعُسْرِ يُسْرًاۙ",
    latin: "Fa inna ma'al-'usri yusrā(n).",
    translation: "Maka, sesungguhnya beserta kesulitan ada kemudahan.",
    translation_en: "For indeed, with hardship [will be] ease.",
    keywords: ["galau", "kesulitan", "kemudahan", "kelapangan", "stres", "insecure", "94:5", "obat hati"]
  },
  {
    surahNumber: 94,
    surahName: "Al-Insyirah",
    ayahNumber: 6,
    juz: 30,
    arabic: "اِنَّ مَعَ الْعُسْرِ يُسْرًاۗ",
    latin: "Inna ma'al-'usri yusrā(n).",
    translation: "Sesungguhnya beserta kesulitan ada kemudahan.",
    translation_en: "Indeed, with hardship [will be] ease.",
    keywords: ["galau", "kesulitan", "kemudahan", "kelapangan", "94:6"]
  },
  {
    surahNumber: 9,
    surahName: "At-Taubah",
    ayahNumber: 40,
    juz: 10,
    arabic: "اِذْ يَقُوْلُ لِصَاحِبِهٖ لَا تَحْزَنْ اِنَّ اللّٰهَ مَعَنَا ۚ",
    latin: "Iż yaqūlu liṣāḥibihī lā taḥzan innallāha ma'anā...",
    translation: "Ketika dia berkata kepada sahabatnya, 'Janganlah kamu bersedih, sesungguhnya Allah bersama kita.'",
    translation_en: "When he said to his companion, 'Do not grieve; indeed Allah is with us.'",
    keywords: ["la tahzan", "janganlah kamu bersedih", "sedih", "galau", "pertolongan", "9:40"]
  },

  // --- LARANGAN MENGUMPAT & GHIBAH (49:12, 104:1) ---
  {
    surahNumber: 49,
    surahName: "Al-Hujurat",
    ayahNumber: 12,
    juz: 26,
    arabic: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اجْتَنِبُوْا كَثِيْرًا مِّنَ الظَّنِّۖ اِنَّ بَعْضَ الظَّنِّ اِثْمٌ وَّلَا تَجَسَّسُوْا وَلَا يَغْتَبْ بَّعْضُكُمْ بَعْضًاۗ اَيُحِبُّ اَحَدُكُمْ اَنْ يَّأْكُلَ لَحْمَ اَخِيْهِ مَيْتًا فَكَرِهْتُمُوْهُۗ وَاتَّقُوا اللّٰهَۗ اِنَّ اللّٰهَ تَوَّابٌ رَّحِيْمٌ",
    latin: "Yā ayyuhallażīna āmanujtanibū kaṡīram minaẓ-ẓann(i), inna ba'ḍaẓ-ẓanni iṡmuw wa lā tajassasū wa lā yagtab ba'ḍukum ba'ḍā(n)...",
    translation: "Wahai orang-orang yang beriman, jauhilah banyak prasangka! Sesungguhnya sebagian prasangka itu dosa. Janganlah mencari-cari kesalahan orang lain dan janganlah ada di antara kamu yang menggunjing sebagian yang lain. Apakah ada di antara kamu yang suka memakan daging saudaranya yang sudah mati? Tentu kamu merasa jijik kepadanya. Bertakwalah kepada Allah. Sesungguhnya Allah Maha Penerima Tobat lagi Maha Penyayang.",
    translation_en: "O you who have believed, avoid much [negative] assumption. Indeed, some assumption is sin. And do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead? You would detest it. And fear Allah; indeed, Allah is Accepting of repentance and Merciful.",
    keywords: ["pengumpat", "ghibah", "menggunjing", "prasangka", "larangan mengumpat", "49:12", "akhlak"]
  },
  {
    surahNumber: 104,
    surahName: "Al-Humazah",
    ayahNumber: 1,
    juz: 30,
    arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍۙ",
    latin: "Wailul likulli humazatil lumazah(tin).",
    translation: "Celakalah setiap pengumpat lagi pencela,",
    translation_en: "Woe to every scorner and mocker,",
    keywords: ["pengumpat", "pencela", "humazah", "104:1", "akhlak", "celaka"]
  },

  // --- IBADAH & SYARIAH: SHALAT, PUASA, ZAKAT, SEDEKAH, HAJI ---
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 43,
    juz: 1,
    arabic: "وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ وَارْكَعُوْا مَعَ الرَّاكِعِيْنَ",
    latin: "Wa aqīmuṣ-ṣalāta wa ātuz-zakāta warka'ū ma'ar-rāki'īn(a).",
    translation: "Tegakkanlah salat, tunaikanlah zakat, dan rukuklah beserta orang-orang yang rukuk.",
    translation_en: "And establish prayer and give zakah and bow with those who bow [in worship and obedience].",
    keywords: ["shalat", "salat", "zakat", "rukuk", "ibadah", "2:43"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 183,
    juz: 2,
    arabic: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ",
    latin: "Yā ayyuhallażīna āmanū kutiba 'alaikumuṣ-ṣiyāmu kamā kutiba 'alallażīna min qablikum la'allakum tattaqūn(a).",
    translation: "Wahai orang-orang yang beriman, diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.",
    translation_en: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
    keywords: ["puasa", "shaum", "ramadhan", "takwa", "ibadah", "2:183"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 261,
    juz: 3,
    arabic: "مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللّٰهُ يُضٰعِفُ لِمَنْ يَّشَآءُ ۗ وَاللّٰهُ وَاسِعٌ عَلِيْمٌ",
    latin: "Maṡalullażīna yunfiqūna amwālahum fī sabīlillāhi kamaṡali ḥabbatin ambatat sab'a sanābila fī kulli sumbulatim mi'atu ḥabbah(tin)...",
    translation: "Perumpamaan orang-orang yang menginfakkan hartanya di jalan Allah adalah seperti sebutir benih yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan (pahala) bagi siapa yang Dia kehendaki. Dan Allah Mahaluas lagi Maha Mengetahui.",
    translation_en: "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills. And Allah is all-Encompassing and Knowing.",
    keywords: ["sedekah", "infak", "infaq", "zakat", "harta", "pahala", "lipat ganda", "2:261"]
  },
  {
    surahNumber: 22,
    surahName: "Al-Hajj",
    ayahNumber: 27,
    juz: 17,
    arabic: "وَاَذِّنْ فِى النَّاسِ بِالْحَجِّ يَأْتُوْكَ رِجَالًا وَّعَلٰى كُلِّ ضَامِرٍ يَّأْتِيْنَ مِنْ كُلِّ فَجٍّ عَمِيْقٍ ۙ",
    latin: "Wa ażżin fin-nāsi bil-ḥajji ya'tūka rijālaw wa 'alā kulli ḍāmiriy ya'tīna min kulli fajjin 'amīq(in).",
    translation: "Serukanlah manusia untuk (mengerjakan) haji, niscaya mereka akan datang kepadamu dengan berjalan kaki dan mengendarai unta kurus yang datang dari segenap penjuru yang jauh,",
    translation_en: "And proclaim to the people the hajj [pilgrimage]; they will come to you on foot and on every lean camel; they will come from every distant pass -",
    keywords: ["haji", "ibadah haji", "baitullah", "mekkah", "ka'bah", "22:27"]
  },

  // --- REZEKI & MUAMALAH (65:2-3, 2:275) ---
  {
    surahNumber: 65,
    surahName: "At-Talaq",
    ayahNumber: 2,
    juz: 28,
    arabic: "وَمَنْ يَّتَّقِ اللّٰهَ يَجْعَلْ لَّهٗ مَخْرَجًا ۙ",
    latin: "Wa may yattaqillāha yaj'al lahū makhrajā(n).",
    translation: "Siapa yang bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya,",
    translation_en: "And whoever fears Allah - He will make for him a way out,",
    keywords: ["rezeki", "jalan keluar", "takwa", "kesulitan", "kelapangan", "hutang", "65:2"]
  },
  {
    surahNumber: 65,
    surahName: "At-Talaq",
    ayahNumber: 3,
    juz: 28,
    arabic: "وَّيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۗ وَمَنْ يَّتَوَكَّلْ عَلَى اللّٰهِ فَهُوَ حَسْبُهٗ ۗ اِنَّ اللّٰهَ بَالِغُ اَمْرِهٖ ۗ قَدْ جَعَلَ اللّٰهُ لِكُلِّ شَيْءٍ قَدْرًا",
    latin: "Wa yarzuqhu min ḥaiṡu lā yaḥtasib(u), wa may yatawakkal 'alallāhi fahuwa ḥasbuh(ū), innallāha bāligu amrih(ī), qad ja'alallāhu likulli syai'in qadrā(n).",
    translation: "dan menganugerahinya rezeki dari arah yang tidak dia duga. Siapa yang bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)-nya. Sesungguhnya Allahlah yang menuntaskan urusan-Nya. Sungguh, Allah telah membuat ketentuan bagi setiap sesuatu.",
    translation_en: "And will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
    keywords: ["rezeki", "rezeki tak terduga", "tawakal", "cukup", "kemudahan", "hutang", "muamalah", "65:3"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 275,
    juz: 3,
    arabic: "وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰوا ۗ",
    latin: "Wa aḥallallāhul-bai'a wa ḥarramar-ribā...",
    translation: "Padahal Allah telah menghalalkan jual beli dan mengharamkan riba.",
    translation_en: "While Allah has permitted trade and has forbidden interest.",
    keywords: ["jual beli", "riba", "muamalah", "utang", "hutang", "perdagangan", "2:275"]
  },

  // --- KELUARGA & PERNIKAHAN / JODOH (30:21) ---
  {
    surahNumber: 30,
    surahName: "Ar-Rum",
    ayahNumber: 21,
    juz: 21,
    arabic: "وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ",
    latin: "Wa min āyātihī an khalaqa lakum min anfusikum azwājal litaskunū ilaihā wa ja'ala bainakum mawaddataw wa raḥmah(tan), inna fī żālika la'āyātil liqaumiy yatafakkarūn(a).",
    translation: "Di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
    translation_en: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
    keywords: ["jodoh", "menikah", "pasangan", "suami", "istri", "keluarga", "sakinah", "mawaddah", "rahmah", "tenteram", "30:21"]
  },

  // --- AKIDAH & AKHIRAT: TAUHID, KIAMAT, SURGA, NERAKA, MALAIKAT ---
  {
    surahNumber: 112,
    surahName: "Al-Ikhlas",
    ayahNumber: 1,
    juz: 30,
    arabic: "قُلْ هُوَ اللّٰهُ اَحَدٌۚ",
    latin: "Qul huwallāhu aḥad(un).",
    translation: "Katakanlah (Nabi Muhammad), 'Dialah Allah Yang Maha Esa.'",
    translation_en: "Say, 'He is Allah, [who is] One,'",
    keywords: ["tauhid", "maha esa", "akidah", "allah", "112:1"]
  },
  {
    surahNumber: 99,
    surahName: "Az-Zalzalah",
    ayahNumber: 1,
    juz: 30,
    arabic: "اِذَا زُلْزِلَتِ الْاَرْضُ زِلْزَالَهَاۙ",
    latin: "Iżā zulzilatil-arḍu zilzālahā.",
    translation: "Apabila bumi diguncangkan dengan guncangan yang dahsyat,",
    translation_en: "When the earth is shaken with its [final] earthquake,",
    keywords: ["kiamat", "hari kiamat", "gempa", "akhirat", "99:1"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 25,
    juz: 1,
    arabic: "وَبَشِّرِ الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ اَنَّ لَهُمْ جَنّٰتٍ تَجْرِيْ مِنْ تَحْتِهَا الْاَنْهٰرُ ۗ",
    latin: "Wa basysyirillażīna āmanū wa 'amiluṣ-ṣāliḥāti anna lahum jannātin tajrī min taḥtihal-anhār(u)...",
    translation: "Sampaikanlah kabar gembira kepada orang-orang yang beriman dan beramal saleh bahwa untuk mereka (disediakan) surga-surga yang di bawahnya mengalir sungai-sungai.",
    translation_en: "And give good tidings to those who believe and do righteous deeds that they will have gardens beneath which rivers flow...",
    keywords: ["surga", "jannat", "sungai", "kenikmatan", "amal saleh", "2:25", "akhirat"]
  },
  {
    surahNumber: 67,
    surahName: "Al-Mulk",
    ayahNumber: 6,
    juz: 29,
    arabic: "وَلِلَّذِيْنَ كَفَرُوْا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۗ وَبِئْسَ الْمَصِيْرُ",
    latin: "Wa lillażīna kafarū birabbihim 'ażābu jahannam(a), wa bi'sal-maṣīr(u).",
    translation: "Orang-orang yang kufur kepada Tuhannya akan mendapat azab (neraka) Jahanam. Itulah seburuk-buruk tempat kembali.",
    translation_en: "And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination.",
    keywords: ["neraka", "jahanam", "azab", "siksaan", "67:6", "akhirat"]
  },
  {
    surahNumber: 35,
    surahName: "Fatir",
    ayahNumber: 1,
    juz: 22,
    arabic: "اَلْحَمْدُ لِلّٰهِ فَاطِرِ السَّمٰوٰتِ وَالْاَرْضِ جَاعِلِ الْمَلٰٓىِٕكَةِ رُسُلًا اُولِيْٓ اَجْنِحَةٍ مَّثْنٰى وَثُلٰثَ وَرُبٰعَ ۗ",
    latin: "Al-ḥamdu lillāhi fāṭiris-samāwāti wal-arḍi jā'ilil-malā'ikati rusulan ulī ajniḥatim maṡnā wa ṡulāṡa wa rubā'(a)...",
    translation: "Segala puji bagi Allah, Pencipta langit dan bumi, yang menjadikan malaikat sebagai utusan-utusan (untuk mengurus berbagai urusan) yang mempunyai sayap, masing-masing dua, tiga, dan empat.",
    translation_en: "[All] praise is [due] to Allah, Creator of the heavens and the earth, [who] made the angels messengers having wings, two or three or four...",
    keywords: ["malaikat", "sayap", "utusan", "ciptaan", "35:1", "akidah"]
  },

  // --- KISAH & SEJARAH: ASHABUL KAHFI, LUQMAN, NABI, FIR'AUN ---
  {
    surahNumber: 18,
    surahName: "Al-Kahf",
    ayahNumber: 10,
    juz: 15,
    arabic: "اِذْ اَوَى الْفِتْيَةُ اِلَى الْكَهْفِ فَقَالُوْا رَبَّنَآ اٰتِنَا مِنْ لَّدُنْكَ رَحْمَةً وَّهَيِّئْ لَنَا مِنْ اَمْرِنَا رَشَدًا",
    latin: "Iż awal-fityatu ilal-kahfi fa qālū rabbanā ātinā mil ladunka raḥmataw wa hayyi' lanā min amrinā rasyadā(n).",
    translation: "(Ingatlah) ketika pemuda-pemuda itu berlindung ke dalam gua lalu mereka berdoa, 'Ya Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah petunjuk bagi kami dalam urusan kami.'",
    translation_en: "[Mention] when the youths retreated to the cave and said, 'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.'",
    keywords: ["kahfi", "ashabul kahfi", "gua", "pemuda", "doa kemudahan", "petunjuk", "18:10", "kisah"]
  },
  {
    surahNumber: 31,
    surahName: "Luqman",
    ayahNumber: 12,
    juz: 21,
    arabic: "وَلَقَدْ اٰتَيْنَا لُقْمٰنَ الْحِكْمَةَ اَنِ اشْكُرْ لِلّٰهِ ۗ وَمَنْ يَّشْكُرْ فَاِنَّمَا يَشْكُرُ لِنَفْسِهٖ ۚ وَمَنْ كَفَرَ فَاِنَّ اللّٰهَ غَنِيٌّ حَمِيْدٌ",
    latin: "Wa laqad ātainā luqmānal-ḥikmata anisykur lillāh(i), wa may yasykur fa innamā yasykuru linafsih(ī), wa man kafara fa innallāha ganiyyun ḥamīd(un).",
    translation: "Sungguh, Kami benar-benar telah memberikan hikmah kepada Luqman, yaitu, 'Bersyukurlah kepada Allah! Siapa yang bersyukur, sesungguhnya dia bersyukur untuk dirinya sendiri. Siapa yang kufur (tidak bersyukur), sesungguhnya Allah Mahakaya lagi Maha Terpuji.'",
    translation_en: "And We had certainly given Luqman wisdom [and said], 'Be grateful to Allah.' And whoever is grateful is grateful for [the benefit of] himself. And whoever denies [His favor] - then indeed, Allah is Free of need and Praiseworthy.",
    keywords: ["luqman", "hikmah", "syukur", "nasihat", "31:12", "kisah"]
  },
  {
    surahNumber: 10,
    surahName: "Yunus",
    ayahNumber: 90,
    juz: 11,
    arabic: "وَجَاوَزْنَا بِبَنِيْٓ اِسْرَآءِيْلَ الْبَحْرَ فَاَتْبَعَهُمْ فِرْعَوْنُ وَجُنُوْدُهٗ بَغْيًا وَّعَدْوًا ۗ حَتّٰىٓ اِذَآ اَدْرَكَهُ الْغَرَقُ قَالَ اٰمَنْتُ اَنَّهٗ لَآ اِلٰهَ اِلَّا الَّذِيْٓ اٰمَنَتْ بِهٖ بَنُوْٓا اِسْرَآءِيْلَ وَاَنَا۠ مِنَ الْمُسْلِمِيْنَ",
    latin: "Wa jāwaznā bibanī isrā'īlal-baḥra fa atba'ahum fir'aunu wa junūduhū bagyaw wa 'adwā(n)...",
    translation: "Kami memungkinkan Bani Israil menyeberangi laut. Lalu, Fir'aun dan bala tentaranya mengikuti mereka untuk berbuat zalim dan melampaui batas hingga ketika Fir'aun hampir tenggelam, dia berkata, 'Aku percaya bahwa tidak ada tuhan melainkan Tuhan yang dipercayai oleh Bani Israil dan aku termasuk orang-orang muslim (yang berserah diri).'",
    translation_en: "And We took the Children of Israel across the sea, and Pharaoh and his soldiers pursued them in tyranny and enmity until, when drowning overtook him, he said, 'I believe that there is no deity except that in whom the Children of Israel believe, and I am of the Muslims.'",
    keywords: ["fir'aun", "firaun", "musa", "tenggelam", "laut merah", "10:90", "sejarah"]
  },
  {
    surahNumber: 21,
    surahName: "Al-Anbiya'",
    ayahNumber: 87,
    juz: 17,
    arabic: "وَذَا النُّوْنِ اِذْ ذَّهَبَ مُغَاضِبًا فَظَنَّ اَنْ لَّنْ نَّقْدِرَ عَلَيْهِ فَنَادٰى فِى الظُّلُمٰتِ اَنْ لَّآ اِلٰهَ اِلَّآ اَنْتَ سُبْحٰنَكَ اِنِّيْ كُنْتُ مِنَ الظّٰلِمِيْنَ ۚ",
    latin: "Wa żan-nūni iż żahaba mugāḍiban fa ẓanna al lan naqdira 'alaihi fa nādā fiẓ-ẓulumāti al lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn(a).",
    translation: "(Ingatlah pula) Zun Nun (Yunus) ketika dia pergi dalam keadaan marah, lalu dia menyangka bahwa Kami tidak akan menyulitkannya. Maka, dia berdoa dalam kegelapan yang berlapis-lapis, 'Tidak ada tuhan selain Engkau. Mahasuci Engkau. Sesungguhnya aku termasuk orang-orang yang zalim.'",
    translation_en: "And [mention] the man of the fish, when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.'",
    keywords: ["nabi", "yunus", "doa nabi yunus", "ikan paus", "kegelapan", "kesulitan", "kelapangan", "21:87", "kisah"]
  },

  // --- DOA-DOA PILIHAN: ORANG TUA, SAPU JAGAT, KETURUNAN, KEMUDAHAN ---
  {
    surahNumber: 17,
    surahName: "Al-Isra'",
    ayahNumber: 24,
    juz: 15,
    arabic: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيٰنِيْ صَغِيْرًاۗ",
    latin: "Wakhfiḍ lahumā janāḥaż-żulli minar-raḥmati wa qur rabbirḥamhumā kamā rabbayānī ṣagīrā(n).",
    translation: "Rendahkanlah dirimu terhadap keduanya dengan penuh kasih sayang dan ucapkanlah, 'Wahai Tuhanku, sayangilah keduanya sebagaimana mereka berdua telah mendidik aku pada waktu kecil.'",
    translation_en: "And lower to them the wing of humility out of mercy and say, 'My Lord, have mercy upon them as they brought me up [when I was] small.'",
    keywords: ["doa orang tua", "orang tua", "ibu", "ayah", "bapak", "kasih sayang", "berbakti", "17:24", "doa"]
  },
  {
    surahNumber: 2,
    surahName: "Al-Baqarah",
    ayahNumber: 201,
    juz: 2,
    arabic: "وَمِنْهُمْ مَّنْ يَّقُوْلُ رَبَّنَآ اٰتِنَا فِى الدُّنْيَا حَسَنَةً وَّفِى الْاٰخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ",
    latin: "Wa minhum may yaqūlu rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā 'ażāban-nār(i).",
    translation: "Di antara mereka ada juga yang berdoa, 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat serta lindungilah kami dari azab neraka.'",
    translation_en: "And among them is he who says, 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.'",
    keywords: ["doa sapu jagat", "sapu jagat", "kebaikan dunia akhirat", "doa keselamatan", "2:201", "doa"]
  },
  {
    surahNumber: 3,
    surahName: "Ali 'Imran",
    ayahNumber: 38,
    juz: 3,
    arabic: "هُنَالِكَ دَعَا زَكَرِيَّا رَبَّهٗ ۚ قَالَ رَبِّ هَبْ لِيْ مِنْ لَّدُنْكَ ذُرِّيَّةً طَيِّبَةً ۚ اِنَّكَ سَمِيْعُ الدُّعَآءِ",
    latin: "Hunālika da'ā zakariyyā rabbah(ū), qāla rabbi hab lī mil ladunka żurriyyatan ṭayyibah(tan), innaka samī'ud-du'ā'(i).",
    translation: "Di sanalah Zakaria berdoa kepada Tuhannya. Dia berkata, 'Wahai Tuhanku, berilah aku keturunan yang baik dari sisi-Mu. Sesungguhnya Engkau Maha Mendengar doa.'",
    translation_en: "At that, Zechariah called upon his Lord, saying, 'My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of prayer.'",
    keywords: ["doa keturunan", "anak", "keturunan", "zakaria", "keluarga", "3:38", "doa"]
  },
  {
    surahNumber: 25,
    surahName: "Al-Furqan",
    ayahNumber: 74,
    juz: 19,
    arabic: "وَالَّذِيْنَ يَقُوْلُوْنَ رَبَّنَا هَبْ لَنَا مِنْ اَزْوَاجِنَا وَذُرِّيّٰتِنَا قُرَّةَ اَعْيُنٍ وَّاجْعَلْنَا لِلْمُتَّقِيْنَ اِمَامًا",
    latin: "Wallażīna yaqūlūna rabbanā hab lanā min azwājinā wa żurriyyātinā qurrata a'yuniw waj'alnā lil-muttaqīna imāmā(n).",
    translation: "Dan, orang-orang yang berkata, 'Ya Tuhan kami, anugerahkanlah kepada kami pasangan kami dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.'",
    translation_en: "And those who say, 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.'",
    keywords: ["doa keluarga", "doa keturunan", "pasangan", "jodoh", "penyejuk hati", "qurrata a'yun", "25:74", "doa"]
  },
  {
    surahNumber: 20,
    surahName: "Ta Ha",
    ayahNumber: 25,
    juz: 16,
    arabic: "قَالَ رَبِّ اشْرَحْ لِيْ صَدْرِيْۙ",
    latin: "Qāla rabbisyraḥ lī ṣadrī.",
    translation: "Dia (Musa) berkata, 'Wahai Tuhanku, lapangkanlah dadaku,",
    translation_en: "[Moses] said, 'My Lord, expand for me my breast [with assurance],'",
    keywords: ["doa kemudahan", "lapang dada", "musa", "kelapangan", "galau", "stres", "20:25", "doa"]
  },
  {
    surahNumber: 20,
    surahName: "Ta Ha",
    ayahNumber: 26,
    juz: 16,
    arabic: "وَيَسِّرْ لِيْٓ اَمْرِيْۙ",
    latin: "Wa yassir lī amrī.",
    translation: "mudahkanlah urusanku,",
    translation_en: "And ease for me my task,",
    keywords: ["doa kemudahan", "mudahkanlah urusanku", "kelapangan", "20:26", "doa"]
  }
];


  // ==========================================================================
  // PENCARIAN AL-QUR'AN (MULTI-FIELD SMART SEARCH & DIRECT JUMP)
  // ==========================================================================

/**
 * Komponen Pencarian Al-Qur'an (Search Screen)
 * Fitur Multi-Search, Direct Jump (Surah:Ayat & Nama Surah),
 * Smart Search (Normalisasi Ejaan & Kamus Sinonim Lokal),
 * dan Indeks Tematik Terstruktur 6 Kategori.
 */

function renderSearchModal(query = "", results = [], directJump = null, searchTerms = [], language = "id") {
  const isEn = language === "en";
  const placeholderText = isEn 
    ? "Search translation, english, topic, or verse (e.g.: 2:255, patience, mercy)..."
    : "Cari terjemahan, latin, topik, atau nomor (cth: 2:255, sabar, kun fayakun)...";
  const titleText = isEn ? "Quran Search" : "Pencarian Al-Qur'an";

  const popularTags = isEn ? [
    { label: "patience", query: "patience" },
    { label: "prayer", query: "prayer" },
    { label: "charity", query: "charity" },
    { label: "mercy", query: "mercy" },
    { label: "paradise", query: "paradise" },
    { label: "repentance", query: "repentance" },
    { label: "kun fayakun", query: "kun fayakun" }
  ] : [
    { label: "pengumpat", query: "pengumpat" },
    { label: "sabar", query: "sabar" },
    { label: "shalat", query: "shalat" },
    { label: "rezeki", query: "rezeki" },
    { label: "harta", query: "harta" },
    { label: "neraka", query: "neraka" },
    { label: "kiamat", query: "kiamat" },
    { label: "kun fayakun", query: "kun fayakun" }
  ];

  return `
    <div class="full-modal" id="searchModal">
      <!-- Header -->
      <div class="modal-header-bar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.navigate('home')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="modal-header-title">${titleText}</div>
        </div>
      </div>

      <!-- Search Input Box -->
      <div class="modal-search-box">
        <span class="modal-search-icon">🔍</span>
        <input 
          type="text" 
          class="modal-search-input" 
          id="globalSearchInput"
          placeholder="${placeholderText}" 
          value="${escapeHtml(query || '')}"
          oninput="window.app.executeSearch(this.value)"
        />
        ${query ? `
          <button 
            type="button" 
            onclick="window.app.executeSearch(''); const inp = document.getElementById('globalSearchInput'); if (inp) { inp.value = ''; inp.focus(); }"
            style="position: absolute; right: 28px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94A3B8; font-size: 16px; cursor: pointer; padding: 4px;"
            title="Hapus pencarian">
            ✕
          </button>
        ` : ''}
      </div>

      <!-- Rekomendasi Kata Kunci Populer (#Hashtag Chips) -->
      <div style="padding: 10px 16px; display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none;">
        ${popularTags.map(tag => `
          <button 
            type="button"
            class="search-tag-chip"
            onclick="const inp = document.getElementById('globalSearchInput'); if (inp) inp.value = '${tag.query}'; window.app.executeSearch('${tag.query}')">
            #${tag.label}
          </button>
        `).join('')}
      </div>

      <!-- Area Hasil Pencarian & Indeks Tematik -->
      <div class="surah-list-scroll" id="searchResultsArea">
        ${renderSearchResultsList(query, results, directJump, searchTerms, language)}
      </div>
    </div>
  `;
}

function renderSearchResultsList(query, results = [], directJump = null, searchTerms = [], language = "id") {
  const isEn = language === "en";
  const rawQ = (query || "").trim();

  // 1. EMPTY STATE: Tampilkan Indeks Tematik Terstruktur 6 Kategori
  if (!rawQ) {
    return `
      <!-- Hero Empty State: Judul Warna Gelap #1E293B di Latar Terang Sesuai Revisi -->
      <div class="search-empty-hero">
        <div class="search-empty-icon">📖</div>
        <div class="search-empty-title">${isEn ? "Quran Verse Search" : "Pencarian Al-Qur'an"}</div>
        <div class="search-empty-desc">
          ${isEn 
            ? "Search verses by reference (e.g. <b>2:255</b>), translation, English keywords, or explore curated Quran themes below."
            : "Cari ayat berdasarkan nomor (contoh: <b>2:255</b>), terjemahan, latin, topik, atau jelajahi tema Al-Qur'an pilihan di bawah ini."}
        </div>
      </div>

      <!-- Eksplorasi Tema Al-Qur'an (6 Kategori Tematik Terstruktur) -->
      <div class="thematic-section">
        <div class="thematic-section-header">
          <div class="thematic-section-title">
            <span>✨</span> ${isEn ? "Explore Quran Themes" : "Eksplorasi Tema Al-Qur'an"}
          </div>
          <div class="thematic-section-subtitle">
            ${isEn ? "Tap a theme to immediately discover selected verses" : "Ketuk tema untuk langsung menemukan ayat-ayat pilihan"}
          </div>
        </div>

        <div class="thematic-grid">
          ${THEMATIC_CATEGORIES.map(cat => `
            <div 
              class="thematic-card" 
              onclick="const inp = document.getElementById('globalSearchInput'); if (inp) inp.value = '${cat.tagQuery}'; window.app.executeSearch('${cat.tagQuery}')">
              <div class="thematic-card-header">
                <span class="thematic-card-icon">${cat.icon}</span>
                <span class="thematic-card-title">${cat.title}</span>
              </div>
              <div class="thematic-topic-pills">
                ${cat.topics.map(t => `
                  <span 
                    class="thematic-topic-pill"
                    onclick="event.stopPropagation(); const inp = document.getElementById('globalSearchInput'); if (inp) inp.value = '${t.query}'; window.app.executeSearch('${t.query}')">
                    ${t.label}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  let html = '';

  // 2. DIRECT JUMP CARD (Prioritas Utama Jika Cocok Surah:Ayat atau Nama Surah)
  if (directJump) {
    if (directJump.type === 'verse') {
      html += `
        <div class="direct-jump-card">
          <div class="direct-jump-badge">
            <span>🎯 ${isEn ? 'DIRECT JUMP TO VERSE' : 'LONCAT LANGSUNG KE AYAT'}</span>
            <span class="direct-jump-juz">Juz ${directJump.juz}</span>
          </div>
          <div class="direct-jump-header">
            <div>
              <div class="direct-jump-surah">${isEn ? 'Surah' : 'QS.'} ${directJump.surahName} (${directJump.surahArabic})</div>
              <div class="direct-jump-ayah-num">${isEn ? `Verse ${directJump.ayahNumber} of ${directJump.totalVerses} Verses` : `Ayat ${directJump.ayahNumber} dari ${directJump.totalVerses} Ayat`}</div>
            </div>
          </div>
          ${directJump.verseData ? `
            <div class="direct-jump-arabic">${cleanQuranArabic(directJump.verseData.arabic)}</div>
            <div class="direct-jump-trans">${highlightMatch(isEn ? (directJump.verseData.translation_en || directJump.verseData.translation) : directJump.verseData.translation, searchTerms)}</div>
          ` : ''}
          <button class="direct-jump-btn" onclick="window.app.loadSurah(${directJump.surahNumber}, ${directJump.ayahNumber})">
            ${isEn ? `Open Surah ${directJump.surahName}: Verse ${directJump.ayahNumber} ➔` : `Buka QS. ${directJump.surahName}: Ayat ${directJump.ayahNumber} ➔`}
          </button>
        </div>
      `;
    } else if (directJump.type === 'surah') {
      const sMeaning = isEn ? getSurahMeaning(directJump.surahNumber, "en", directJump.meaning) : directJump.meaning;
      html += `
        <div class="direct-jump-card direct-jump-card-surah">
          <div class="direct-jump-badge">
            <span>📖 ${isEn ? 'DIRECT TO SURAH' : 'LANGSUNG KE SURAH'}</span>
            <span class="direct-jump-juz">Juz ${directJump.juz} • ${directJump.totalVerses} ${isEn ? 'Verses' : 'Ayat'}</span>
          </div>
          <div class="direct-jump-header">
            <div>
              <div class="direct-jump-surah">${isEn ? 'Surah' : 'Surah ke-'}${directJump.surahNumber}: ${directJump.surahName}</div>
              <div class="direct-jump-meaning">${sMeaning}</div>
            </div>
            <div class="direct-jump-arabic-title">${directJump.surahArabic}</div>
          </div>
          <button class="direct-jump-btn" onclick="window.app.loadSurah(${directJump.surahNumber}, 1)">
            ${isEn ? `Open Surah ${directJump.surahName} ➔` : `Buka Surah ${directJump.surahName} ➔`}
          </button>
        </div>
      `;
    }
  }

  // 3. TIDAK DITEMUKAN (Jika tidak ada direct jump dan tidak ada hasil)
  if (!directJump && results.length === 0) {
    return `
      <div class="search-empty-hero">
        <div class="search-empty-icon">🔍</div>
        <div class="search-empty-title">${isEn ? "No Results Found" : "Tidak Ditemukan"}</div>
        <div class="search-empty-desc">
          ${isEn 
            ? `No verses matched your search keyword "<b>${escapeHtml(rawQ)}</b>".<br>Please check spelling, try broader terms, verse numbers (e.g.: <i>2:255</i>), or explore topics above.`
            : `Tidak ada ayat yang cocok dengan kata kunci "<b>${escapeHtml(rawQ)}</b>".<br>Coba periksa ejaan, gunakan kata kunci umum, nomor ayat (contoh: <i>2:255</i>), atau pilih topik dari daftar tag di atas.`}
        </div>
      </div>
    `;
  }

  // Ringkasan Jumlah Hasil
  if (results.length > 0) {
    html += `
      <div style="padding: 8px 18px; font-size: 12px; font-weight: 600; color: #64748B; display: flex; justify-content: space-between; align-items: center;">
        <span>${isEn ? `Found ${results.length} related verses` : `Ditemukan ${results.length} ayat terkait`}</span>
        ${searchTerms && searchTerms.length > 1 ? `
          <span style="font-size: 11px; color: #EA580C; max-width: 55%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            ${isEn ? 'Related:' : 'Terkait:'} ${searchTerms.slice(0, 3).join(', ')}
          </span>
        ` : ''}
      </div>
    `;
  }

  // 4. DAFTAR HASIL PENCARIAN
  html += results.map(item => `
    <div 
      class="search-result-card" 
      onclick="window.app.loadSurah(${item.surahNumber}, ${item.ayahNumber})">
      <div class="search-result-header">
        <span class="search-result-surah-tag">
          ${isEn ? 'Surah' : 'QS.'} ${item.surahName}: ${isEn ? 'Verse' : 'Ayat'} ${item.ayahNumber}
        </span>
        <span class="search-result-juz-tag">Juz ${item.juz}</span>
      </div>

      <div class="search-result-arabic">
        ${cleanQuranArabic(item.arabic)}
      </div>

      ${item.latin ? `
        <div class="search-result-latin" style="font-family: 'Georgia', serif !important; font-style: italic !important; margin-bottom: 0.50rem !important;">
          ${highlightMatch(item.latin, searchTerms)}
        </div>
      ` : ''}

      <div class="search-result-trans">
        ${highlightMatch(isEn ? (item.translation_en || item.translation) : item.translation, searchTerms)}
      </div>

      ${item.matchedReason ? `
        <div class="search-match-reason">
          <span>✓</span> ${item.matchedReason}
        </div>
      ` : ''}
    </div>
  `).join('');

  return html;
}

// Helper: Highlight kecocokan kata kunci dengan tag <mark class="search-highlight">
function highlightMatch(text, terms) {
  if (!text) return '';
  if (!terms || terms.length === 0) return text;
  
  const termList = Array.isArray(terms) ? terms : [terms];
  const validTerms = termList
    .map(t => (t || '').trim())
    .filter(t => t.length > 1)
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  if (validTerms.length === 0) return text;

  try {
    const regex = new RegExp(`(${validTerms.join('|')})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
  } catch (e) {
    return text;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}


  // ==========================================================================
  // JADWAL SHOLAT & KOMPAS KIBLAT GYROSCOPE
  // ==========================================================================

/**
 * Komponen Jadwal Sholat Standar Kemenag RI
 * Menghitung waktu sholat presisi wilayah Indonesia & Arah Kiblat
 */

function renderPrayerTimesScreen(selectedCityId, language = "id") {
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


  // ==========================================================================
  // HADITS SHAHIH (BUKHARI & MUSLIM) DATASET
  // ==========================================================================

/**
 * Dataset Hadits Shahih Pilihan (Bukhari & Muslim)
 * Sumber: Kitab Shahih Al-Bukhari & Shahih Muslim (Ash-Shahihain)
 * Tema: Niat & Ikhlas, Iman & Islam, Sabar & Ujian, Sholat & Bersuci, Sedekah & Akhlak, Doa & Dzikir, Ilmu & Adab.
 */

const SAHIH_HADITHS = [
  // =========================================================================
  // 1. TEMA: NIAT & IKHLAS
  // =========================================================================
  {
    id: 1,
    topic: "Niat & Ikhlas",
    category: "niat",
    book: "bukhari_muslim",
    title: "Segala Amal Tergantung pada Niatnya",
    narrator: "HR. Bukhari No. 1 & Muslim No. 1907",
    sanad: "Diriwayatkan dari Amirul Mukminin Umar bin Al-Khaththab radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ",
    translation: "Sesungguhnya setiap amal perbuatan tergantung pada niatnya, dan sesungguhnya setiap orang akan mendapatkan balasan sesuai dengan apa yang ia niatkan. Barangsiapa yang hijrahnya kepada Allah dan Rasul-Nya, maka hijrahnya itu kepada (ridha) Allah dan Rasul-Nya.",
    keywords: ["niat", "amal", "ikhlas", "hijrah", "bukhari 1", "muslim 1907", "umar bin khattab", "perbuatan", "balasan"]
  },
  {
    id: 2,
    topic: "Niat & Ikhlas",
    category: "niat",
    book: "muslim",
    title: "Allah Melihat Hati dan Amal, Bukan Rupa dan Harta",
    narrator: "HR. Muslim No. 2564",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    translation: "Sesungguhnya Allah tidak melihat kepada bentuk rupa kalian dan tidak pula kepada harta benda kalian, akan tetapi Dia melihat kepada hati-hati kalian dan amal-amal perbuatan kalian.",
    keywords: ["hati", "amal", "rupa", "harta", "ikhlas", "muslim 2564", "abu hurairah", "batin", "ketakwaan"]
  },
  {
    id: 3,
    topic: "Niat & Ikhlas",
    category: "niat",
    book: "bukhari_muslim",
    title: "Pahala Niat Kebaikan walau Belum Sempat Terlaksana",
    narrator: "HR. Bukhari No. 6491 & Muslim No. 131",
    sanad: "Diriwayatkan dari Abdullah bin Abbas radhiyallahu 'anhuma (Muttafaq 'Alaih)",
    arabic: "مَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ",
    translation: "Barangsiapa berniat melakukan suatu kebaikan lalu ia tidak (sempat) mengerjakannya, maka Allah tetap menuliskan baginya di sisi-Nya satu kebaikan yang sempurna. Dan jika ia berniat lalu mengerjakannya, maka Allah menuliskan baginya sepuluh kebaikan hingga tujuh ratus kali lipat atau lebih banyak lagi.",
    keywords: ["niat", "hasanah", "kebaikan", "pahala", "lipat ganda", "bukhari 6491", "muslim 131", "ibnu abbas"]
  },

  // =========================================================================
  // 2. TEMA: IMAN & ISLAM
  // =========================================================================
  {
    id: 4,
    topic: "Iman & Islam",
    category: "iman",
    book: "bukhari_muslim",
    title: "Lima Sendi Bangunan Islam (Rukun Islam)",
    narrator: "HR. Bukhari No. 8 & Muslim No. 16",
    sanad: "Diriwayatkan dari Abdullah bin Umar radhiyallahu 'anhuma (Muttafaq 'Alaih)",
    arabic: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ",
    translation: "Islam dibangun di atas lima perkara: bersaksi bahwa tidak ada tuhan yang berhak disembah selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, menunaikan ibadah haji, dan berpuasa di bulan Ramadhan.",
    keywords: ["rukun islam", "syahadat", "sholat", "zakat", "haji", "puasa", "ramadhan", "bukhari 8", "muslim 16", "ibnu umar"]
  },
  {
    id: 5,
    topic: "Iman & Islam",
    category: "iman",
    book: "bukhari_muslim",
    title: "Tiga Perkara untuk Merasakan Manisnya Iman",
    narrator: "HR. Bukhari No. 16 & Muslim No. 43",
    sanad: "Diriwayatkan dari Anas bin Malik radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاَوَةَ الإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لاَ يُحِبُّهُ إِلاَّ لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ",
    translation: "Tiga perkara yang apabila ada pada diri seseorang, ia akan merasakan manisnya iman: hendaknya Allah dan Rasul-Nya lebih ia cintai daripada selain keduanya, mencintai seseorang semata-mata karena Allah, dan benci untuk kembali kepada kekufuran sebagaimana ia benci dilemparkan ke dalam api neraka.",
    keywords: ["manisnya iman", "cinta allah", "cinta rasul", "bukhari 16", "muslim 43", "anas bin malik", "kufur"]
  },
  {
    id: 6,
    topic: "Iman & Islam",
    category: "iman",
    book: "bukhari_muslim",
    title: "Rasa Malu adalah Cabang dari Keimanan",
    narrator: "HR. Bukhari No. 9 & Muslim No. 35",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ",
    translation: "Iman itu ada tujuh puluh lebih cabang. Yang paling utama adalah ucapan 'Laa ilaaha illallaah', dan yang paling rendah adalah menyingkirkan gangguan dari jalanan, dan rasa malu adalah salah satu cabang dari keimanan.",
    keywords: ["malu", "cabang iman", "singkirkan duri", "bukhari 9", "muslim 35", "haya", "gangguan jalan"]
  },
  {
    id: 7,
    topic: "Iman & Islam",
    category: "iman",
    book: "bukhari_muslim",
    title: "Mencintai Saudara Seiman seperti Diri Sendiri",
    narrator: "HR. Bukhari No. 13 & Muslim No. 45",
    sanad: "Diriwayatkan dari Anas bin Malik radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation: "Tidak sempurna iman salah seorang di antara kalian sampai ia mencintai bagi saudaranya apa yang ia cintai untuk dirinya sendiri.",
    keywords: ["saudara", "cinta", "iman", "bukhari 13", "muslim 45", "persaudaraan", "mukmin"]
  },

  // =========================================================================
  // 3. TEMA: SABAR & UJIAN
  // =========================================================================
  {
    id: 8,
    topic: "Sabar & Ujian",
    category: "sabar",
    book: "muslim",
    title: "Kagumnya Keadaan Orang Beriman: Bersyukur & Bersabar",
    narrator: "HR. Muslim No. 2999",
    sanad: "Diriwayatkan dari Shuhaib bin Sinan Ar-Rumi radhiyallahu 'anhu",
    arabic: "عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
    translation: "Sungguh menakjubkan urusan seorang mukmin, sesungguhnya seluruh urusannya adalah kebaikan. Jika ia mendapatkan kesenangan ia bersyukur, maka itu baik baginya. Dan jika ia ditimpa kesusahan ia bersabar, maka itu pun baik baginya.",
    keywords: ["sabar", "syukur", "mukmin", "ujian", "nikmat", "kesusahan", "muslim 2999", "kebaikan"]
  },
  {
    id: 9,
    topic: "Sabar & Ujian",
    category: "sabar",
    book: "bukhari_muslim",
    title: "Rasa Sakit & Duri sebagai Penggugur Dosa",
    narrator: "HR. Bukhari No. 5641 & Muslim No. 2573",
    sanad: "Diriwayatkan dari Abu Sa'id Al-Khudri dan Abu Hurairah radhiyallahu 'anhuma (Muttafaq 'Alaih)",
    arabic: "مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حَزَنٍ وَلاَ أَذًى وَلاَ غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ",
    translation: "Tidaklah seorang muslim ditimpa keletihan, penyakit, kegelisahan, kesedihan, gangguan, bahkan hingga duri yang menusuknya, melainkan Allah akan menghapuskan dosa-dosanya dengan sebab itu.",
    keywords: ["sakit", "duri", "dosa", "sedih", "kegelisahan", "bukhari 5641", "muslim 2573", "penggugur dosa", "keletihan"]
  },
  {
    id: 10,
    topic: "Sabar & Ujian",
    category: "sabar",
    book: "bukhari_muslim",
    title: "Hakikat Orang Kuat Adalah Mampu Menahan Amarah",
    narrator: "HR. Bukhari No. 6114 & Muslim No. 2609",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    translation: "Orang yang kuat itu bukanlah orang yang jago bergulat, melainkan orang yang kuat adalah orang yang mampu mengendalikan dirinya ketika sedang marah.",
    keywords: ["marah", "emosi", "kuat", "gulat", "bukhari 6114", "muslim 2609", "menahan amarah", "pengendalian diri"]
  },
  {
    id: 11,
    topic: "Sabar & Ujian",
    category: "sabar",
    book: "bukhari_muslim",
    title: "Hakikat Sabar pada Hentakan Pertama Musibah",
    narrator: "HR. Bukhari No. 1283 & Muslim No. 926",
    sanad: "Diriwayatkan dari Anas bin Malik radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "إِنَّمَا الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى",
    translation: "Sesungguhnya hakikat kesabaran yang sempurna itu adalah ketika pertama kali musibah atau cobaan itu datang menerpa.",
    keywords: ["sabar", "musibah", "hentakan pertama", "bukhari 1283", "muslim 926", "cobaan", "ketabahan"]
  },
  {
    id: 12,
    topic: "Sabar & Ujian",
    category: "sabar",
    book: "bukhari",
    title: "Siapa yang Dikehendaki Kebaikan Diberi Ujian",
    narrator: "HR. Bukhari No. 5645",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُصِبْ مِنْهُ",
    translation: "Barangsiapa yang Allah kehendaki kebaikan baginya, maka Dia akan mengujinya dengan cobaan (agar derajatnya ditinggikan dan dosanya diampuni).",
    keywords: ["ujian", "kebaikan", "cobaan", "bukhari 5645", "musibah", "pahala ujian"]
  },

  // =========================================================================
  // 4. TEMA: SHOLAT & BERSUCI
  // =========================================================================
  {
    id: 13,
    topic: "Sholat & Bersuci",
    category: "sholat",
    book: "bukhari_muslim",
    title: "Sholat Lima Waktu Menghapuskan Dosa-Dosa",
    narrator: "HR. Bukhari No. 528 & Muslim No. 667",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ فِيهِ كُلَّ يَوْمٍ خَمْسًا، مَا تَقُولُ ذَلِكَ يُبْقِي مِنْ دَرَنِهِ؟ قَالُوا: لاَ يُبْقِي مِنْ دَرَنِهِ شَيْئًا. قَالَ: فَذَلِكَ مِثْلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهَا الْخَطَايَا",
    translation: "Tahukah kalian, seandainya ada sebuah sungai di depan pintu salah seorang dari kalian yang ia mandi di dalamnya lima kali setiap hari, apakah masih tersisa kotoran padanya? Para sahabat menjawab: Tidak tersisa sedikit pun kotoran. Beliau bersabda: Begitulah perumpamaan sholat lima waktu, dengannya Allah menghapuskan dosa-dosa.",
    keywords: ["sholat", "sungai", "dosa", "sholat lima waktu", "bukhari 528", "muslim 667", "bersih", "penghapus dosa"]
  },
  {
    id: 14,
    topic: "Sholat & Bersuci",
    category: "sholat",
    book: "bukhari_muslim",
    title: "Keutamaan Pahala Sholat Berjamaah 27 Derajat",
    narrator: "HR. Bukhari No. 645 & Muslim No. 650",
    sanad: "Diriwayatkan dari Abdullah bin Umar radhiyallahu 'anhuma (Muttafaq 'Alaih)",
    arabic: "صَلاَةُ الْجَمَاعَةِ تَفْضُلُ صَلاَةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
    translation: "Sholat berjamaah melampaui keutamaan sholat sendirian sebanyak dua puluh tujuh derajat.",
    keywords: ["berjamaah", "sholat", "27 derajat", "masjid", "bukhari 645", "muslim 650", "sholat berjamaah"]
  },
  {
    id: 15,
    topic: "Sholat & Bersuci",
    category: "sholat",
    book: "muslim",
    title: "Bersuci adalah Setengah dari Keimanan",
    narrator: "HR. Muslim No. 223",
    sanad: "Diriwayatkan dari Abu Malik Al-Asy'ari radhiyallahu 'anhu",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ مَا بَيْنَ السَّمَاوَاتِ وَالأَرْضِ",
    translation: "Bersuci (thaharah) itu adalah setengah dari keimanan, ucapan 'Alhamdulillah' memenuhi timbangan amal, dan ucapan 'Subhanallah walhamdulillah' memenuhi ruang antara langit dan bumi.",
    keywords: ["bersuci", "thaharah", "wudhu", "iman", "alhamdulillah", "muslim 223", "timbangan"]
  },
  {
    id: 16,
    topic: "Sholat & Bersuci",
    category: "sholat",
    book: "muslim",
    title: "Gugurnya Dosa Bersama Tetesan Air Wudhu",
    narrator: "HR. Muslim No. 244",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ... خَرَجَ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ...",
    translation: "Apabila seorang hamba muslim berwudhu... lalu ia membasuh wajahnya, maka keluarlah setiap dosa yang dilihat oleh matanya bersama air atau bersama tetesan air terakhir, hingga ia keluar dalam keadaan bersih dari segala dosa.",
    keywords: ["wudhu", "bersuci", "tetesan air", "gugur dosa", "muslim 244", "air wudhu"]
  },
  {
    id: 17,
    topic: "Sholat & Bersuci",
    category: "sholat",
    book: "muslim",
    title: "Dibangunkan Rumah di Surga karena Sholat Rawatib 12 Rakaat",
    narrator: "HR. Muslim No. 728",
    sanad: "Diriwayatkan dari Ummu Habibah Ramlah binti Abi Sufyan radhiyallahu 'anha",
    arabic: "مَا مِنْ عَبْدٍ مُسْلِمٍ يُصَلِّي لِلَّهِ كُلَّ يَوْمٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً تَطَوُّعًا غَيْرَ فَرِيضَةٍ، إِلاَّ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
    translation: "Tidaklah seorang hamba muslim mengerjakan shalat sunnah karena Allah setiap hari sebanyak dua belas rakaat (sholat rawatib) selain shalat fardhu, melainkan Allah akan membangunkan baginya sebuah rumah di dalam surga.",
    keywords: ["rawatib", "sunnah", "12 rakaat", "surga", "rumah surga", "muslim 728", "sholat sunnah"]
  },

  // =========================================================================
  // 5. TEMA: SEDEKAH & AKHLAK
  // =========================================================================
  {
    id: 18,
    topic: "Sedekah & Akhlak",
    category: "sedekah",
    book: "muslim",
    title: "Sedekah Tidak Mengurangi Harta & Pemaaf Menambah Kemuliaan",
    narrator: "HR. Muslim No. 2588",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلاَّ عِزًّا، وَمَا تَوَاضَعَ أَحَدٌ لِلَّهِ إِلاَّ رَفَعَهُ اللَّهُ",
    translation: "Sedekah itu tidak akan mengurangi harta. Dan tidaklah Allah menambah bagi seorang hamba yang suka memaafkan melainkan kemuliaan. Dan tidaklah seseorang bersikap rendah hati karena Allah melainkan Allah akan mengangkat derajatnya.",
    keywords: ["sedekah", "harta", "maaf", "pemaaf", "tawadhu", "kemuliaan", "muslim 2588", "infaq"]
  },
  {
    id: 19,
    topic: "Sedekah & Akhlak",
    category: "sedekah",
    book: "bukhari_muslim",
    title: "Setiap Kebaikan dan Langkah Menuju Sholat adalah Sedekah",
    narrator: "HR. Bukhari No. 2989 & Muslim No. 1009",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "كُلُّ سُلاَمَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ... وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ... وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَكُلُّ خَطْوَةٍ تَمْشِيهَا إِلَى الصَّلاَةِ صَدَقَةٌ",
    translation: "Setiap persendian manusia memiliki kewajiban sedekah setiap hari... menolong seseorang menaiki kendaraannya adalah sedekah, tutur kata yang baik adalah sedekah, dan setiap langkah yang kamu ayunkan menuju sholat adalah sedekah.",
    keywords: ["sedekah", "langkah masjid", "tutur kata baik", "sendi", "bukhari 2989", "muslim 1009", "kebaikan"]
  },
  {
    id: 20,
    topic: "Sedekah & Akhlak",
    category: "sedekah",
    book: "bukhari_muslim",
    title: "Tangan di Atas (Memberi) Lebih Baik daripada Tangan di Bawah",
    narrator: "HR. Bukhari No. 1429 & Muslim No. 1033",
    sanad: "Diriwayatkan dari Hakim bin Hizam radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى، وَابْدَأْ بِمَنْ تَعُولُ، وَخَيْرُ الصَّدَقَةِ عَنْ ظَهْرِ غِنًى",
    translation: "Tangan yang di atas (yang memberi) lebih baik daripada tangan yang di bawah (yang meminta). Dan mulailah dari orang yang menjadi tanggunganmu, dan sebaik-baik sedekah adalah yang dikeluarkan dari kelebihan harta.",
    keywords: ["tangan diatas", "memberi", "sedekah", "infaq", "meminta", "bukhari 1429", "muslim 1033"]
  },
  {
    id: 21,
    topic: "Sedekah & Akhlak",
    category: "akhlak",
    book: "bukhari_muslim",
    title: "Berkata Baik atau Diam & Memuliakan Tetangga",
    narrator: "HR. Bukhari No. 6018 & Muslim No. 47",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ جَارَهُ",
    translation: "Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam. Dan barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya.",
    keywords: ["berkata baik", "diam", "tetangga", "lisan", "akhlak", "bukhari 6018", "muslim 47", "tamu"]
  },
  {
    id: 22,
    topic: "Sedekah & Akhlak",
    category: "akhlak",
    book: "bukhari_muslim",
    title: "Silaturahmi Melapangkan Rezeki & Memanjangkan Umur",
    narrator: "HR. Bukhari No. 2067 & Muslim No. 2557",
    sanad: "Diriwayatkan dari Anas bin Malik radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، وَيُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ",
    translation: "Barangsiapa yang ingin dilapangkan rezekinya dan ditangguhkan ajalnya (dipanjangkan umurnya dengan berkah), maka hendaklah ia menyambung tali silaturahmi.",
    keywords: ["silaturahmi", "rezeki", "umur", "panjang umur", "bukhari 2067", "muslim 2557", "kerabat"]
  },
  {
    id: 23,
    topic: "Sedekah & Akhlak",
    category: "akhlak",
    book: "muslim",
    title: "Allah Senantiasa Menolong Hamba yang Menolong Saudaranya",
    narrator: "HR. Muslim No. 2699",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ... وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
    translation: "Barangsiapa melepaskan satu kesusahan seorang mukmin dari kesusahan dunia, niscaya Allah akan melepaskan darinya satu kesusahan pada hari kiamat. Dan Allah senantiasa menolong seorang hamba selama hamba tersebut menolong saudaranya.",
    keywords: ["tolong", "kesusahan", "bantu", "saudara", "kiamat", "muslim 2699", "pertolongan allah"]
  },

  // =========================================================================
  // 6. TEMA: DOA & DZIKIR
  // =========================================================================
  {
    id: 24,
    topic: "Doa & Dzikir",
    category: "dzikir",
    book: "bukhari_muslim",
    title: "Perumpamaan Orang yang Berdzikir dan yang Tidak",
    narrator: "HR. Bukhari No. 6407 & Muslim No. 779",
    sanad: "Diriwayatkan dari Abu Musa Al-Asy'ari radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لاَ يَذْكُرُ رَبَّهُ، مَثَلُ الْحَيِّ وَالْمَيِّتِ",
    translation: "Perumpamaan orang yang berdzikir mengingat Rabbnya dengan orang yang tidak mengingat Rabbnya adalah laksana perumpamaan antara orang yang hidup dengan orang yang mati.",
    keywords: ["dzikir", "hidup mati", "ingat allah", "bukhari 6407", "muslim 779", "hati hidup"]
  },
  {
    id: 25,
    topic: "Doa & Dzikir",
    category: "dzikir",
    book: "bukhari_muslim",
    title: "Dua Kalimat Ringan di Lisan Berat di Timbangan Amal",
    narrator: "HR. Bukhari No. 6682 & Muslim No. 2694",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu (Muttafaq 'Alaih)",
    arabic: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    translation: "Dua kalimat yang ringan di lisan, berat di timbangan (amal), dan dicintai oleh Ar-Rahman: 'Subhaanallaahi wa bihamdih, Subhaanallaahil 'Azhiim' (Maha Suci Allah dan dengan memuji-Nya, Maha Suci Allah Yang Maha Agung).",
    keywords: ["subhanallah", "tasbih", "timbangan amal", "ringan lisan", "bukhari 6682", "muslim 2694", "dzikir"]
  },
  {
    id: 26,
    topic: "Doa & Dzikir",
    category: "dzikir",
    book: "bukhari",
    title: "Sayyidul Istighfar (Penghulu Istighfar & Jaminan Surga)",
    narrator: "HR. Bukhari No. 6306",
    sanad: "Diriwayatkan dari Syaddad bin Aus radhiyallahu 'anhu",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    translation: "Sayyidul Istighfar adalah engkau berdoa: 'Ya Allah, Engkaulah Rabbku, tidak ada tuhan selain Engkau. Engkaulah yang menciptakanku dan aku adalah hamba-Mu... Barangsiapa membacanya di sore hari dengan yakin lalu meninggal pada malam itu, maka ia termasuk penghuni surga.'",
    keywords: ["istighfar", "sayyidul istighfar", "ampunan", "tobat", "doa", "bukhari 6306", "penghuni surga"]
  },
  {
    id: 27,
    topic: "Doa & Dzikir",
    category: "dzikir",
    book: "muslim",
    title: "Empat Kalimat Dzikir yang Lebih Dicintai daripada Seluruh Dunia",
    narrator: "HR. Muslim No. 2695",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "لأَنْ أَقُولَ: سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، أَحَبُّ إِلَيَّ مِمَّا طَلَعَتْ عَلَيْهِ الشَّمْسُ",
    translation: "Sungguh, membaca: 'Subhanallah, Walhamdulillah, Wa laa ilaaha illallah, Wallahu Akbar' lebih aku cintai daripada segala sesuatu yang terbit padanya sinar matahari (seluruh isi dunia).",
    keywords: ["tasbih", "tahmid", "tahlil", "takbir", "dunia", "dzikir utama", "muslim 2695", "empat kalimat"]
  },
  {
    id: 28,
    topic: "Doa & Dzikir",
    category: "dzikir",
    book: "bukhari",
    title: "Doa Perlindungan dari Kegelisahan, Kemalasan & Lilitan Hutang",
    narrator: "HR. Bukhari No. 2893",
    sanad: "Diriwayatkan dari Anas bin Malik radhiyallahu 'anhu",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    translation: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gelisah dan kesedihan, dari kelemahan dan kemalasan, dari sifat pengecut dan kikir, serta dari lilitan hutang dan tekanan orang-orang.",
    keywords: ["doa", "gelisah", "hutang", "sedih", "malas", "perlindungan", "bukhari 2893", "cemas"]
  },

  // =========================================================================
  // 7. TEMA: ILMU & ADAB
  // =========================================================================
  {
    id: 29,
    topic: "Ilmu & Adab",
    category: "ilmu",
    book: "muslim",
    title: "Kemudahan Jalan Menuju Surga bagi Penuntut Ilmu",
    narrator: "HR. Muslim No. 2699",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    translation: "Barangsiapa menempuh suatu jalan dalam rangka mencari ilmu, niscaya Allah akan memudahkan baginya jalan menuju surga.",
    keywords: ["ilmu", "penuntut ilmu", "surga", "belajar", "syariat", "muslim 2699", "jalan surga"]
  },
  {
    id: 30,
    topic: "Ilmu & Adab",
    category: "ilmu",
    book: "bukhari",
    title: "Sebaik-baik Manusia: Belajar Al-Qur'an dan Mengajarkannya",
    narrator: "HR. Bukhari No. 5027",
    sanad: "Diriwayatkan dari Utsman bin Affan radhiyallahu 'anhu",
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    translation: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya (kepada orang lain).",
    keywords: ["quran", "belajar quran", "mengajarkan", "terbaik", "utsman", "bukhari 5027", "guru ngaji"]
  },
  {
    id: 31,
    topic: "Ilmu & Adab",
    category: "ilmu",
    book: "muslim",
    title: "Tiga Amalan yang Pahalanya Tidak Terputus Setelah Meninggal",
    narrator: "HR. Muslim No. 1631",
    sanad: "Diriwayatkan dari Abu Hurairah radhiyallahu 'anhu",
    arabic: "إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    translation: "Apabila manusia meninggal dunia, maka terputuslah semua amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak shalih yang senantiasa mendoakannya.",
    keywords: ["tiga amalan", "ilmu bermanfaat", "sedekah jariyah", "anak sholeh", "meninggal", "muslim 1631", "pahala mengalir"]
  },
  {
    id: 32,
    topic: "Ilmu & Adab",
    category: "ilmu",
    book: "bukhari_muslim",
    title: "Adab Makan: Membaca Bismillah dan Makan dengan Tangan Kanan",
    narrator: "HR. Bukhari No. 5376 & Muslim No. 2022",
    sanad: "Diriwayatkan dari Umar bin Abi Salamah radhiyallahu 'anhuma (Muttafaq 'Alaih)",
    arabic: "يَا غُلاَمُ سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ",
    translation: "Wahai anak muda, sebutlah nama Allah (bacalah Bismillah), makanlah dengan tangan kananmu, dan makanlah makanan yang berada di dekatmu.",
    keywords: ["adab makan", "bismillah", "tangan kanan", "makan", "bukhari 5376", "muslim 2022", "adab sopan"]
  },
  {
    id: 33,
    topic: "Ilmu & Adab",
    category: "ilmu",
    book: "bukhari",
    title: "Sampaikan Dariku Walau Hanya Satu Ayat",
    narrator: "HR. Bukhari No. 3461",
    sanad: "Diriwayatkan dari Abdullah bin Amr radhiyallahu 'anhuma",
    arabic: "بَلِّغُوا عَنِّي وَلَوْ آيَةً",
    translation: "Sampaikanlah dariku walau hanya satu ayat.",
    keywords: ["dakwah", "satu ayat", "sampaikan", "ilmu", "bukhari 3461", "tabligh", "nasihat"]
  }
];


  // ==========================================================================
  // MODAL KUMPULAN HADITS SHAHIH (BUKHARI & MUSLIM)
  // ==========================================================================

/**
 * Komponen Modal Kumpulan Hadits Shahih (Bukhari & Muslim)
 * Mendukung pencarian real-time cerdas dengan penyorotan (highlight),
 * filter chip tematik & perawi (Bukhari & Muslim), font Georgia untuk terjemahan,
 * serta fitur Salin dan Bagikan.
 */


const HADITH_CATEGORIES = [
  { id: "all", label: "🌟 Semua" },
  { id: "bukhari", label: "📖 Bukhari" },
  { id: "muslim", label: "📗 Muslim" },
  { id: "niat", label: "🎯 Niat & Ikhlas" },
  { id: "iman", label: "✨ Iman & Islam" },
  { id: "sabar", label: "🛡️ Sabar & Ujian" },
  { id: "sholat", label: "🕌 Sholat & Bersuci" },
  { id: "sedekah", label: "🤲 Sedekah & Akhlak" },
  { id: "dzikir", label: "📿 Doa & Dzikir" },
  { id: "ilmu", label: "📚 Ilmu & Adab" }
];

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightHadithText(text, query) {
  if (!text) return "";
  const q = (query || "").trim();
  if (!q) return escapeHtml(text);

  const tokens = q.toLowerCase().split(/\s+/).filter(t => t.length > 0);
  if (tokens.length === 0) return escapeHtml(text);

  const safeText = escapeHtml(text);
  const sortedTokens = [...new Set(tokens)].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedTokens.map(escapeRegExp).join('|')})`, 'gi');

  return safeText.replace(pattern, '<mark class="hadith-highlight">$1</mark>');
}

function filterHadithData(activeCategory = "all", searchQuery = "") {
  const query = (searchQuery || "").toLowerCase().replace(/\s+/g, " ").trim();
  const tokens = query ? query.split(" ").filter(Boolean) : [];

  return SAHIH_HADITHS.filter(h => {
    // 1. Filter Kategori / Perawi
    let matchCategory = true;
    if (activeCategory === "all") {
      matchCategory = true;
    } else if (activeCategory === "bukhari") {
      matchCategory = h.book === "bukhari" || h.book === "bukhari_muslim" ||
        h.narrator.toLowerCase().includes("bukhari") || h.sanad.toLowerCase().includes("bukhari");
    } else if (activeCategory === "muslim") {
      matchCategory = h.book === "muslim" || h.book === "bukhari_muslim" ||
        h.narrator.toLowerCase().includes("muslim") || h.sanad.toLowerCase().includes("muslim");
    } else if (activeCategory === "sedekah") {
      matchCategory = h.category === "sedekah" || h.category === "akhlak";
    } else {
      matchCategory = h.category === activeCategory;
    }

    if (!matchCategory) return false;
    if (tokens.length === 0) return true;

    // 2. Multi-field Search Matching
    const titleStr = h.title.toLowerCase();
    const transStr = h.translation.toLowerCase();
    const topicStr = h.topic.toLowerCase();
    const narrStr = h.narrator.toLowerCase();
    const sanadStr = h.sanad.toLowerCase();
    const idStr = String(h.id);
    const kwList = Array.isArray(h.keywords) ? h.keywords : [];

    return tokens.every(token => {
      return (
        titleStr.includes(token) ||
        transStr.includes(token) ||
        topicStr.includes(token) ||
        narrStr.includes(token) ||
        sanadStr.includes(token) ||
        idStr === token ||
        kwList.some(k => k.toLowerCase().includes(token))
      );
    });
  });
}

function renderHadithCardList(filteredHadiths, query = "", settings = {}) {
  const isEn = settings && settings.language === "en";
  const arabicFs = (settings && settings.arabicFontSize) || 28;
  const transFs = (settings && settings.translationFontSize) || 14;

  if (filteredHadiths.length === 0) {
    return `
      <div class="hadith-empty-state" style="text-align: center; padding: 48px 20px; color: #94A3B8;">
        <div style="font-size: 38px; margin-bottom: 12px;">📜</div>
        <div style="font-weight: 800; color: #FFFFFF; font-size: 15px; margin-bottom: 6px; line-height: 1.5;" class="hadith-empty-title">
          ${isEn ? 'Hadith not found, try another keyword (e.g. intention, patience, prayer)' : 'Hadits tidak ditemukan, coba kata kunci lain (cth: niat, sabar, sholat)'}
        </div>
        <div style="font-size: 12px; color: #94A3B8;" class="hadith-empty-sub">
          ${isEn ? 'Use common keywords, themes, numbers, or choose a category above.' : 'Gunakan kata kunci umum, tema hadits, nomor hadits, atau pilih chip kategori di atas.'}
        </div>
      </div>
    `;
  }

  return filteredHadiths.map(h => `
    <div class="hadith-card" id="hadith-${h.id}">
      <!-- Header Kartu: Badge Topik & Badge Perawi -->
      <div class="hadith-card-header">
        <span class="hadith-topic-badge">${highlightHadithText(h.topic, query)}</span>
        <span class="hadith-narrator-badge">${highlightHadithText(h.narrator, query)}</span>
      </div>

      <!-- Judul Hadits -->
      <div class="hadith-title">${highlightHadithText(h.title, query)}</div>

      <!-- Teks Arab Standar dengan Harakat Lengkap (Tersinkronisasi Pengaturan Font Size) -->
      ${h.arabic ? `
        <div class="hadith-arabic-text" style="font-size: var(--arabic-font-size, ${arabicFs}px);">${cleanQuranArabic(h.arabic)}</div>
      ` : ''}

      <!-- Terjemahan Bahasa Indonesia Standar Font Georgia (Tersinkronisasi Pengaturan Font Size) -->
      <div class="hadith-translation-text" style="font-family: 'Georgia', serif !important; font-size: var(--translation-font-size, ${transFs}px);">
        "${highlightHadithText(h.translation, query)}"
      </div>

      <!-- Sanad & Keterangan Perawi Terpercaya -->
      <div class="hadith-sanad-text">
        📌 ${highlightHadithText(h.sanad, query)}
      </div>

      <!-- Tombol Interaktif: Salin & Bagikan -->
      <div class="hadith-actions-row">
        <button class="hadith-btn-tool" onclick="window.app.copyHadith(${h.id})" title="${isEn ? 'Copy Hadith Text' : 'Salin Teks Hadits'}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span>${isEn ? 'Copy Text' : 'Salin Teks'}</span>
        </button>

        <button class="hadith-btn-tool" onclick="window.app.shareHadith(${h.id})" title="${isEn ? 'Share to WhatsApp / Social Media' : 'Bagikan ke WhatsApp / Medsos'}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
          <span>${isEn ? 'Share' : 'Bagikan'}</span>
        </button>
      </div>
    </div>
  `).join('');
}

function renderHadithModal(activeCategory = "all", searchQuery = "", settings = {}) {
  const isEn = settings && settings.language === "en";
  const filteredHadiths = filterHadithData(activeCategory, searchQuery);

  return `
    <div class="full-modal" id="hadithModal">
      <!-- Modal Header Bar -->
      <div class="modal-header-bar">
        <div style="display: flex; align-items: center; gap: 12px;">
          <button class="btn-icon-circle" onclick="window.app.closeHadithModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div>
            <div class="modal-header-title">${isEn ? 'Sahih Hadiths' : 'Hadits Shahih'}</div>
            <div style="font-size: 10px; color: var(--color-orange-primary); font-weight: 700; letter-spacing: 0.4px;">
              ${isEn ? 'Ash-Shahihain • Bukhari & Muslim Collections' : 'Ash-Shahihain • HR. Bukhari & Muslim'}
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="hadith-count-badge" id="hadithCountBadge" style="font-size: 11px; font-weight: 700; background: rgba(56, 189, 248, 0.15); color: #38BDF8; padding: 3px 8px; border-radius: 12px;">
            ${filteredHadiths.length} ${isEn ? 'Hadiths' : 'Hadits'}
          </span>
        </div>
      </div>

      <!-- Search Box & Filter Chips -->
      <div class="hadith-search-container" style="padding: 12px 16px 8px; background: rgba(11, 25, 44, 0.5); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
        <!-- Input Pencarian Real-Time (Dilengkapi spasi 2 ketukan agar huruf tidak menempel ke garis) -->
        <div class="hadith-search-box" style="margin-bottom: 10px; border-radius: 12px; background: #0E1A29; border: 1px solid #1E3E62; padding: 2px 12px; display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 14px; opacity: 0.7; flex-shrink: 0;">🔍</span>
          <input 
            type="text" 
            class="hadith-search-input" 
            id="hadithSearchInput"
            placeholder="${isEn ? 'Search keywords, themes, titles, or hadith numbers...' : 'Cari kata kunci, tema, judul, atau nomor hadits...'}"
            value="${escapeHtml(searchQuery || '')}"
            style="width: 100%; border: none !important; outline: none !important; box-shadow: none !important; background: transparent; padding: 8px 12px !important; font-size: 13px; color: #FFF;"
            oninput="window.app.filterHadiths('${activeCategory}', this.value)"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          />
          <button 
            id="hadithSearchClearBtn"
            style="background: none; border: none; color: #94A3B8; font-size: 14px; cursor: pointer; display: ${searchQuery ? 'inline' : 'none'};" 
            onclick="window.app.clearHadithSearch('${activeCategory}')">✕</button>
        </div>

        <!-- Filter Chips Tematik & Perawi -->
        <div class="hadith-filter-chips" id="hadithFilterChips">
          ${HADITH_CATEGORIES.map(c => `
            <button 
              class="hadith-chip ${activeCategory === c.id ? 'active' : ''}"
              data-category="${c.id}"
              onclick="window.app.filterHadiths('${c.id}', document.getElementById('hadithSearchInput')?.value || '')">
              ${c.label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Kontainer Daftar Hadits -->
      <div class="screen-container" style="padding: 14px 16px 85px;">
        <div id="hadithCardsContainer">
          ${renderHadithCardList(filteredHadiths, searchQuery, settings)}
        </div>

        <!-- Footer Info LPMQ & Ash-Shahihain -->
        <div style="text-align: center; margin-top: 24px; font-size: 11px; color: #64748B;">
          <div>Rujukan Otentik: <b>Shahih Al-Bukhari & Shahih Muslim</b></div>
          <div style="margin-top: 4px;">Al-Qur'an & Hadits Indonesia Pro • Disertai Sanad, Kata Kunci & Terjemahan Resmi</div>
        </div>
      </div>
    </div>
  `;
}


  // ==========================================================================
  // MODAL KEMENAG INFO (STANDAR RESMI)
  // ==========================================================================

  function renderKemenagInfoModal() {
    return `
      <div class="modal-backdrop" id="kemenagModal" onclick="if(event.target===this) window.app.closeKemenagModal()">
        <div class="modal-dialog-white" onclick="event.stopPropagation()">
          <div class="modal-header-bar" style="padding: 16px 20px; background: none; border-bottom: 1px solid rgba(0,0,0,0.08);">
            <div style="font-weight: 800; font-size: 16px; color: #0B192C;">Standar Mushaf Al-Qur'an Indonesia</div>
          </div>
          <div style="padding: 20px; font-size: 13px; line-height: 1.6; color: #334155; max-height: 70vh; overflow-y: auto;">
            <p>Aplikasi ini disusun mengacu pada <b>Mushaf Standar Indonesia (MSI)</b> yang diterbitkan oleh <b>Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Badan Litbang dan Diklat Kementerian Agama Republik Indonesia</b>.</p>
            <p style="margin-top: 10px;">Fitur & Penyesuaian Standar:</p>
            <ul style="padding-left: 20px; margin-top: 6px;">
              <li>Teks Rasm Utsmani Madinah / Standar Kemenag RI dengan harakat presisi.</li>
              <li>Pewarnaan kaidah tajwid resmi (Ghunnah, Ikhfa, Idgham, Iqlab, Qalqalah, Mad).</li>
              <li>Terjemahan Bahasa Indonesia resmi Kementerian Agama RI dan English Sahih International.</li>
              <li>Jadwal sholat mengacu pada kriteria dan rumus hisab hisab resmi Ditjen Bimas Islam Kemenag RI.</li>
            </ul>
          </div>
          <div style="padding: 12px 20px; text-align: right; border-top: 1px solid rgba(0,0,0,0.08);">
            <button style="background: var(--color-orange-primary); color: #FFF; border: none; padding: 8px 18px; border-radius: 10px; font-weight: 700; cursor: pointer;" onclick="window.app.closeKemenagModal()">
              Tutup
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // CONTROLLER UTAMA APLIKASI (QURAN APP)
  // ==========================================================================

  class QuranApp {
  constructor() {
    if (typeof document !== 'undefined') {
      let el1 = document.getElementById("murottalAudio");
      if (!el1) {
        el1 = document.createElement("audio");
        el1.id = "murottalAudio";
        el1.style.display = "none";
        el1.preload = "none";
        if (document.body) document.body.appendChild(el1);
      }
      this.audioElement = el1;

      let el2 = document.getElementById("murottalPreloadAudio");
      if (!el2) {
        el2 = document.createElement("audio");
        el2.id = "murottalPreloadAudio";
        el2.style.display = "none";
        el2.preload = "none";
        if (document.body) document.body.appendChild(el2);
      }
      this.preloadAudioElement = el2;
    } else {
      this.audioElement = new Audio();
      this.preloadAudioElement = new Audio();
    }
    this.preloadedVerse = null;
    this._currentBlobUrl = null;
    this.state = {
      currentScreen: "home", // "home" | "reader" | "prayer" | "surahList" | "search"
      currentSurahNumber: 1, // Default Surat Al-Fatihah
      currentSurahData: OFFLINE_SURAHS[1],
      currentPlayingVerse: null,
      isPlayingFullSurah: false,
      lastRead: this.loadLastRead(),
      bookmarks: this.loadBookmarks(),
      settings: this.loadSettings(),
      selectedPrayerCity: "jkt",
      activeSurahListTab: "surah",
      searchQuery: "",
      searchResults: [],
      searchDirectJump: null,
      searchTerms: [],
      hadithActiveCategory: "all",
      hadithSearchQuery: "",
      offlineDatasetStatus: null,
      isDownloadingAllSurahs: false,
      downloadProgress: { current: 0, total: 114, percent: 0, surahName: "", statusText: "" },
      downloadAbortController: null,
      offlineVerificationResult: null,
      cachedSurahsInMemory: {},
      offlineActiveTab: 'text',
      selectedAudioQari: 'alafasy',
      downloadedAudioSurahs: [],
      audioStorageEstimate: { versesCount: 0, totalBytes: 0, sizeMb: "0.0" },
      isAudioDownloading: false,
      audioDownloadProgress: { current: 0, total: 0, percent: 0, statusText: "" },
      audioAbortController: null
    };

    this.migrateLegacyLastRead();
    this.initAudioEvents();
    this.initKeepScreenOnEvents();
    try {
      document.body.classList.remove("mode-fullscreen");
      document.documentElement.classList.remove("mode-fullscreen");
    } catch (e) {}
    this.startPrayerClock();
    this.applyThemeAndLanguage();
    this.initOfflineDataset();
    setTimeout(() => {
      try {
        this.scheduleAllPrayerAlarms();
      } catch (e) {
        console.warn("Deferred schedule prayer error:", e);
      }
    }, 1200);
  }

  // ==========================================
  // Storage & State Persistence (Android Native Bridge + LocalStorage)
  // ==========================================

  savePersistentData(key, value) {
    const valStr = typeof value === "string" ? value : JSON.stringify(value);
    try {
      localStorage.setItem(key, valStr);
    } catch (e) {
      console.warn("LocalStorage save error:", e);
    }
    if (window.AndroidBridge && typeof window.AndroidBridge.savePreference === "function") {
      try {
        window.AndroidBridge.savePreference(key, valStr);
      } catch (e) {
        console.warn("AndroidBridge save error:", e);
      }
    }
  }

  getPersistentData(key, fallback = null) {
    let raw = null;
    if (window.AndroidBridge && typeof window.AndroidBridge.getPreference === "function") {
      try {
        const nativeVal = window.AndroidBridge.getPreference(key, "");
        if (nativeVal && nativeVal.length > 0) {
          raw = nativeVal;
        }
      } catch (e) {}
    }
    if (!raw) {
      try {
        raw = localStorage.getItem(key);
      } catch (e) {}
    }
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return raw;
    }
  }

  loadLastRead() {
    const saved = this.getPersistentData("quran_last_read");
    if (saved && saved.surahNumber) {
      return saved;
    }
    // Default instalasi awal: QS. Al-Fatihah: Ayat 1
    return {
      surahNumber: 1,
      surahName: "Al-Fatihah",
      ayahNumber: 1,
      juz: 1,
      page: 1
    };
  }

  migrateLegacyLastRead() {
    try {
      const currentLr = this.getPersistentData("quran_last_read");
      const legacyMap = this.getPersistentData("quran_surahs_last_read");

      if (currentLr && currentLr.surahNumber) {
        // Pastikan quran_surahs_last_read disinkronkan hanya berisi 1 record aktif (single source of truth)
        const sNum = Number(currentLr.surahNumber);
        const aNum = Math.max(1, Number(currentLr.ayahNumber) || 1);
        this.savePersistentData("quran_surahs_last_read", { [sNum]: aNum });
      } else if (legacyMap && typeof legacyMap === "object" && Object.keys(legacyMap).length > 0) {
        // Jika quran_last_read belum ada tapi legacyMap ada, ambil entri pertama sebagai active
        const keys = Object.keys(legacyMap);
        const sNum = Number(keys[0]);
        const aNum = Number(legacyMap[sNum]) || 1;
        const sName = this.getSurahName(sNum);
        const newLr = {
          surahNumber: sNum,
          surahName: sName,
          ayahNumber: aNum,
          juz: 1,
          page: 1,
          timestamp: Date.now()
        };
        this.savePersistentData("quran_last_read", newLr);
        this.savePersistentData("quran_surahs_last_read", { [sNum]: aNum });
        if (this.state) {
          this.state.lastRead = newLr;
        }
      }
    } catch (e) {
      console.warn("Error migrating legacy last read:", e);
    }
  }

  loadBookmarks() {
    const saved = this.getPersistentData("quran_bookmarks");
    if (saved && Array.isArray(saved)) {
      return saved;
    }
    return [];
  }

  loadSettings() {
    const saved = this.getPersistentData("quran_settings");
    const hasExplicitTheme = this.getPersistentData("quran_theme_explicit") === "true";
    if (saved) {
      try { 
        const parsed = (typeof saved === 'string') ? JSON.parse(saved) : saved;
        
        // Bersihkan sisa legacy fullscreen cache jika ada
        if (parsed && parsed.fullscreen !== undefined) {
          delete parsed.fullscreen;
        }

        return {
          language: parsed.language || "id",
          theme: hasExplicitTheme ? (parsed.theme || "light") : "light",
          coloredTajweed: parsed.coloredTajweed !== false,
          fontSizeSettingsEnabled: parsed.fontSizeSettingsEnabled !== false,
          arabicFontSize: parsed.arabicFontSize ? Math.max(28, Number(parsed.arabicFontSize)) : 28,
          latinFontSize: parsed.latinFontSize || 13,
          translationFontSize: parsed.translationFontSize || 14,
          reciter: parsed.reciter || parsed.qari || "alafasy",
          qari: parsed.qari || (parsed.reciter && parsed.reciter.includes('Sudais') ? 'sudais' : 'alafasy'),
          showLatin: parsed.showLatin !== false,
          showTranslation: parsed.showTranslation !== false,
          keepScreenOn: parsed.keepScreenOn === true
        };
      } catch (e) {}
    }
    return {
      language: "id",
      theme: "light",
      coloredTajweed: true,
      fontSizeSettingsEnabled: true,
      arabicFontSize: 28,
      latinFontSize: 13,
      translationFontSize: 14,
      reciter: "alafasy",
      qari: "alafasy",
      showLatin: true,
      showTranslation: true,
      keepScreenOn: false
    };
  }

  saveSettings() {
    this.savePersistentData("quran_settings", this.state.settings);
  }

  applyThemeAndLanguage() {
    const isLight = this.state.settings.theme === "light";
    if (isLight) {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark", "dark-reader");
    } else {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark", "dark-reader");
    }
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isLight ? '#F8FAFC' : '#0B192C');
    }
    document.documentElement.setAttribute("lang", this.state.settings.language || "id");

    // Sinkronisasi Ukuran Font CSS Variables (Al-Qur'an & Hadits Shahih)
    const root = document.documentElement;
    const arabicFs = (this.state.settings && this.state.settings.arabicFontSize) || 28;
    const latinFs = (this.state.settings && this.state.settings.latinFontSize) || 13;
    const transFs = (this.state.settings && this.state.settings.translationFontSize) || 14;
    root.style.setProperty('--arabic-font-size', `${arabicFs}px`);
    root.style.setProperty('--latin-font-size', `${latinFs}px`);
    root.style.setProperty('--translation-font-size', `${transFs}px`);

    // Pastikan tidak ada sisa class mode-fullscreen
    document.body.classList.remove("mode-fullscreen");
    document.documentElement.classList.remove("mode-fullscreen");

    // Terapkan Biarkan Layar Tetap Menyala sesuai pengaturan
    if (this.state.settings && this.state.settings.keepScreenOn) {
      this.applyKeepScreenOn(true, false);
    } else {
      this.applyKeepScreenOn(false, false);
    }
    this.updateBottomNav();
    this.updateKeepScreenOnUI(!!(this.state.settings && this.state.settings.keepScreenOn));
  }

  initKeepScreenOnEvents() {
    this._wakeLockSentinel = null;

    // Dengarkan saat aplikasi kembali dari background ke foreground
    document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (this.state.settings && this.state.settings.keepScreenOn) {
          await this.applyKeepScreenOn(true, false);
        }
      }
    });
  }

  async applyKeepScreenOn(enable, showToastFeedback = false) {
    // 1. Integrasi Native Android Bridge (Window FLAG_KEEP_SCREEN_ON)
    if (window.AndroidBridge && typeof window.AndroidBridge.setKeepScreenOn === 'function') {
      try {
        window.AndroidBridge.setKeepScreenOn(enable);
        console.log('[KeepScreenOn] AndroidBridge.setKeepScreenOn called with:', enable);
      } catch (e) {
        console.warn('[KeepScreenOn] AndroidBridge setKeepScreenOn error:', e);
      }
    }

    // 2. Web Screen Wake Lock API (Chrome/Edge/PWA)
    if ('wakeLock' in navigator) {
      if (enable) {
        try {
          if (!this._wakeLockSentinel) {
            this._wakeLockSentinel = await navigator.wakeLock.request('screen');
            this._wakeLockSentinel.addEventListener('release', () => {
              this._wakeLockSentinel = null;
              console.log('[KeepScreenOn] Wake Lock was released');
            });
            console.log('[KeepScreenOn] Web Wake Lock acquired successfully');
          }
        } catch (err) {
          console.warn('[KeepScreenOn] Wake Lock request rejected:', err);
        }
      } else {
        if (this._wakeLockSentinel) {
          try {
            await this._wakeLockSentinel.release();
          } catch (e) {}
          this._wakeLockSentinel = null;
          console.log('[KeepScreenOn] Web Wake Lock released successfully');
        }
      }
    }

    if (showToastFeedback) {
      const isEn = this.state.settings && this.state.settings.language === 'en';
      if (enable) {
        this.showToast(isEn ? '💡 Screen will stay awake while reading' : '💡 Layar akan terus menyala saat membaca Al-Qur\'an', 'info');
      } else {
        this.showToast(isEn ? 'Screen will follow phone timeout settings' : 'Layar kembali mengikuti pengaturan batas waktu HP', 'info');
      }
    }

    this.updateKeepScreenOnUI(enable);
  }

  async toggleKeepScreenOn(forceState) {
    const currentState = this.state.settings && this.state.settings.keepScreenOn === true;
    const nextState = typeof forceState === "boolean" ? forceState : !currentState;

    if (!this.state.settings) {
      this.state.settings = this.loadSettings();
    }
    this.state.settings.keepScreenOn = nextState;
    this.saveSettings();

    await this.applyKeepScreenOn(nextState, true);
  }

  updateKeepScreenOnUI(isActive) {
    const switchEl = document.getElementById("switchKeepScreen");
    if (switchEl) {
      if (isActive) switchEl.classList.add("active");
      else switchEl.classList.remove("active");
    }

    const cardEl = document.getElementById("settingKeepScreenCard");
    if (cardEl) {
      if (isActive) cardEl.classList.add("active-keepscreen");
      else cardEl.classList.remove("active-keepscreen");
    }

    const badgeEl = document.getElementById("keepScreenStatusBadge");
    if (badgeEl) {
      const isEn = this.state.settings && this.state.settings.language === "en";
      badgeEl.innerText = isActive ? (isEn ? "ACTIVE" : "AKTIF") : (isEn ? "OFF" : "NONAKTIF");
      badgeEl.style.background = isActive ? "rgba(234, 88, 12, 0.2)" : "rgba(148, 163, 184, 0.2)";
      badgeEl.style.color = isActive ? "var(--color-orange-primary)" : "#94A3B8";
    }

    // Tombol di header QuranReader
    const readerBtns = document.querySelectorAll(".btn-reader-keepscreen");
    readerBtns.forEach(btn => {
      const isEn = this.state.settings && this.state.settings.language === "en";
      if (isActive) {
        btn.classList.add("active-keepscreen");
        btn.style.color = "var(--color-orange-primary)";
        btn.style.background = "rgba(234, 88, 12, 0.15)";
        btn.style.borderColor = "var(--color-orange-primary)";
        btn.title = isEn ? "Keep Screen On: ACTIVE" : "Layar Tetap Menyala: AKTIF";
      } else {
        btn.classList.remove("active-keepscreen");
        btn.style.color = "";
        btn.style.background = "";
        btn.style.borderColor = "";
        btn.title = isEn ? "Keep Screen On" : "Biarkan Layar Tetap Menyala";
      }
    });
  }

  toggleFullscreen(forceState) {
    // Alihkan panggilan legacy ke toggleKeepScreenOn
    return this.toggleKeepScreenOn(forceState);
  }

  updateFullscreenUI(isActive) {
    return this.updateKeepScreenOnUI(isActive);
  }

  toggleTajweed(forceState) {
    const currentState = this.state.settings.coloredTajweed !== false;
    const nextState = (typeof forceState === 'boolean') ? forceState : !currentState;
    this.state.settings.coloredTajweed = nextState;
    this.saveSettings();

    // 1. Update in-place UI Setting Card jika modal sedang terbuka
    const switchEl = document.getElementById("switchTajweed");
    if (switchEl) {
      if (nextState) switchEl.classList.add("active");
      else switchEl.classList.remove("active");
    }
    const cardEl = document.getElementById("settingTajweedCard");
    if (cardEl) {
      if (nextState) {
        cardEl.classList.add("active-tajweed");
        cardEl.style.borderColor = "var(--color-orange-primary)";
        cardEl.style.background = "rgba(234, 88, 12, 0.08)";
      } else {
        cardEl.classList.remove("active-tajweed");
        cardEl.style.borderColor = "rgba(255, 255, 255, 0.08)";
        cardEl.style.background = "rgba(17, 34, 51, 0.6)";
      }
    }
    const badgeEl = document.getElementById("tajweedStatusBadge");
    if (badgeEl) {
      const isEn = this.state.settings.language === 'en';
      badgeEl.innerText = nextState ? (isEn ? 'ACTIVE' : 'AKTIF') : (isEn ? 'OFF' : 'NONAKTIF');
      badgeEl.style.background = nextState ? 'rgba(234, 88, 12, 0.2)' : 'rgba(148, 163, 184, 0.2)';
      badgeEl.style.color = nextState ? 'var(--color-orange-primary)' : '#94A3B8';
    }

    // 2. Notifikasi Toast
    const msg = this.state.settings.language === 'en'
      ? (nextState ? "Colored Tajweed activated" : "Colored Tajweed deactivated")
      : (nextState ? "Tajwid Berwarna aktif!" : "Tajwid Berwarna dinonaktifkan");
    this.showToast(msg, "info");

    // 3. Render ulang jika sedang di layar pembaca
    if (this.state.currentScreen === 'reader') {
      this.render();
    }
  }

  toggleFontSizeSettings(forceState) {
    const currentState = this.state.settings && this.state.settings.fontSizeSettingsEnabled !== false;
    const nextState = typeof forceState === 'boolean' ? forceState : !currentState;

    if (!this.state.settings) {
      this.state.settings = this.loadSettings();
    }
    this.state.settings.fontSizeSettingsEnabled = nextState;
    this.saveSettings();

    this.updateFontSizeSettingsUI(nextState);

    // Notifikasi Toast
    const isEn = this.state.settings && this.state.settings.language === 'en';
    const msg = isEn
      ? (nextState ? "Font size settings shown" : "Font size settings hidden")
      : (nextState ? "Pengaturan ukuran font ditampilkan" : "Pengaturan ukuran font disembunyikan");
    this.showToast(msg, "info", 1500);
  }

  updateFontSizeSettingsUI(isActive) {
    const switchEl = document.getElementById("switchFontSize");
    if (switchEl) {
      if (isActive) switchEl.classList.add("active");
      else switchEl.classList.remove("active");
    }

    const cardEl = document.getElementById("settingFontSizeCard");
    if (cardEl) {
      if (isActive) {
        cardEl.classList.add("active-fontsize");
        cardEl.style.borderColor = "var(--color-orange-primary)";
        cardEl.style.background = "rgba(234, 88, 12, 0.08)";
      } else {
        cardEl.classList.remove("active-fontsize");
        cardEl.style.borderColor = "";
        cardEl.style.background = "";
      }
    }

    const titleEl = document.getElementById("fontSizeTitleText");
    if (titleEl) {
      titleEl.style.color = isActive ? "var(--color-orange-primary)" : "inherit";
    }

    const badgeEl = document.getElementById("fontSizeStatusBadge");
    if (badgeEl) {
      const isEn = this.state.settings && this.state.settings.language === 'en';
      badgeEl.innerText = isActive ? (isEn ? 'ACTIVE' : 'AKTIF') : (isEn ? 'OFF' : 'NONAKTIF');
      badgeEl.style.background = isActive ? 'rgba(234, 88, 12, 0.2)' : 'rgba(148, 163, 184, 0.2)';
      badgeEl.style.color = isActive ? 'var(--color-orange-primary)' : '#94A3B8';
    }

    const containerEl = document.getElementById("fontSizeSlidersContainer");
    if (containerEl) {
      if (isActive) {
        containerEl.style.display = "flex";
        containerEl.classList.add("expanded");
      } else {
        containerEl.classList.remove("expanded");
        containerEl.style.display = "none";
      }
    }
  }

  updateSetting(key, val) {
    this.state.settings[key] = val;
    this.saveSettings();

    // 1. Khusus Font Size: Update CSS Variables, angka display & preview secara in-place tanpa merombak DOM modal!
    if (key === 'arabicFontSize' || key === 'latinFontSize' || key === 'translationFontSize') {
      const root = document.documentElement;
      if (key === 'arabicFontSize') {
        root.style.setProperty('--arabic-font-size', `${val}px`);
        const disp = document.getElementById('arabicFontDisplay');
        if (disp) disp.innerText = `${val}px`;
        const prev = document.getElementById('previewArabicText');
        if (prev) prev.style.fontSize = `${val}px`;
        document.querySelectorAll('.verse-arabic-text, .hadith-arabic-text').forEach(el => el.style.fontSize = `${val}px`);
      } else if (key === 'latinFontSize') {
        root.style.setProperty('--latin-font-size', `${val}px`);
        const disp = document.getElementById('latinFontDisplay');
        if (disp) disp.innerText = `${val}px`;
        const prev = document.getElementById('previewLatinText');
        if (prev) prev.style.fontSize = `${val}px`;
        document.querySelectorAll('.verse-latin-text').forEach(el => el.style.fontSize = `${val}px`);
      } else if (key === 'translationFontSize') {
        root.style.setProperty('--translation-font-size', `${val}px`);
        const disp = document.getElementById('translationFontDisplay');
        if (disp) disp.innerText = `${val}px`;
        const prev = document.getElementById('previewTransText');
        if (prev) prev.style.fontSize = `${val}px`;
        document.querySelectorAll('.verse-translation-text, .hadith-translation-text').forEach(el => el.style.fontSize = `${val}px`);
      }
      return;
    }

    // 2. Khusus Tema: Ubah class body & toggle secara in-place dengan transisi CSS halus
    if (key === 'theme') {
      try {
        localStorage.setItem("quran_theme_explicit", "true");
        this.savePersistentData("quran_theme_explicit", "true");
      } catch(e) {}
      this.applyThemeAndLanguage();
      this.updateBottomNav();
      const settingsModal = document.getElementById("settingsModal");
      if (settingsModal) {
        const themeBtns = settingsModal.querySelectorAll('.btn-setting-toggle[onclick*="theme"]');
        themeBtns.forEach(btn => {
          const isTarget = btn.getAttribute('onclick').includes(val);
          if (isTarget) btn.classList.add('active-orange');
          else btn.classList.remove('active-orange');
        });
      }
      const msg = val === 'light' ? "Tema Terang (Light Mode) aktif!" : "Tema Gelap (Dark Mode) aktif!";
      this.showToast(msg, "info", 1800);
      return;
    }

    // 3. Khusus Qari: Toggle active-qari & badge secara in-place tanpa merusak nama qari
    if (key === 'qari') {
      const settingsModal = document.getElementById("settingsModal");
      if (settingsModal) {
        const qariCards = settingsModal.querySelectorAll('.qari-card-item');
        qariCards.forEach(card => {
          const isSelected = card.getAttribute('onclick').includes(val);
          const badge = card.querySelector('.qari-badge-container') || card.lastElementChild;
          const title = card.querySelector('.qari-name-title');
          if (isSelected) {
            card.classList.add('active-qari');
            if (badge) {
              badge.innerHTML = `<span class="qari-active-badge" style="background: linear-gradient(135deg, #EA580C, #C2410C); color: #fff; font-size: 10px; font-weight: 700; padding: 4px 9px; border-radius: 20px; box-shadow: 0 1px 4px rgba(234,88,12,0.3);">✓ ${this.state.settings.language === 'en' ? 'Active' : 'Aktif'}</span>`;
            }
            if (title) title.style.color = '#EA580C';
          } else {
            card.classList.remove('active-qari');
            if (badge) {
              badge.innerHTML = `<span class="qari-select-btn" style="border: 1px solid rgba(148, 163, 184, 0.4); color: #94A3B8; font-size: 10px; padding: 3px 8px; border-radius: 20px;">${this.state.settings.language === 'en' ? 'Select' : 'Pilih'}</span>`;
            }
            if (title) title.style.color = 'inherit';
          }
        });
      }
      const q = QARI_LIST.find(item => item.id === val);
      const name = q ? q.name : val;
      const msg = this.state.settings.language === 'en'
        ? `Reciter switched to ${name}`
        : `Qori diubah ke ${name}`;
      this.showToast(msg, "info");
      if (this.state.currentPlayingVerse) {
        this.stopAudio();
      }
      return;
    }

    // 4. Khusus Tajweed Berwarna:
    if (key === 'coloredTajweed') {
      this.toggleTajweed(val);
      return;
    }

    // 4b. Khusus Toggle Pengaturan Ukuran Font:
    if (key === 'fontSizeSettingsEnabled') {
      this.toggleFontSizeSettings(val);
      return;
    }

    // 5. Khusus Ganti Bahasa
    if (key === 'language') {
      this.applyThemeAndLanguage();
      const modalContainer = document.getElementById("settingsModalContainer");
      const settingsModal = document.getElementById("settingsModal");
      if (settingsModal && settingsModal.classList.contains("open") && modalContainer) {
        const scrollArea = settingsModal.querySelector(".screen-container");
        const scrollTop = scrollArea ? scrollArea.scrollTop : 0;
        modalContainer.innerHTML = renderSettingsModal(this.state.settings);
        const newModal = document.getElementById("settingsModal");
        if (newModal) {
          newModal.classList.add("open");
          const newScrollArea = newModal.querySelector(".screen-container");
          if (newScrollArea) {
            newScrollArea.style.scrollBehavior = "auto";
            newScrollArea.scrollTop = scrollTop;
          }
        }
      }
      this.render();
      this.updateBottomNav();
      if (val === 'en' && this.state.currentSurahData) {
        this.ensureEnglishTranslation(this.state.currentSurahData.number);
      }
      const msg = val === 'en' ? "Language switched to English!" : "Bahasa diubah ke Bahasa Indonesia!";
      this.showToast(msg, "info");
      return;
    }

    this.applyThemeAndLanguage();
    this.render();
    this.updateBottomNav();
  }

  async ensureEnglishTranslation(surahNumber) {
    const sNum = Number(surahNumber);
    if (!this.state.currentSurahData || Number(this.state.currentSurahData.number) !== sNum) return;
    const verses = this.state.currentSurahData.verses;
    if (!Array.isArray(verses) || verses.length === 0) return;

    // 1. Sudah memiliki terjemahan bahasa Inggris lengkap
    if (verses[0].translation_en) {
      if (this.state.currentScreen === "reader") {
        this.render();
      }
      return;
    }

    // 2. Cek bundel OFFLINE_SURAHS
    if (typeof OFFLINE_SURAHS !== "undefined" && OFFLINE_SURAHS[sNum] && Array.isArray(OFFLINE_SURAHS[sNum].verses)) {
      const offVerses = OFFLINE_SURAHS[sNum].verses;
      verses.forEach((v, i) => {
        if (offVerses[i] && offVerses[i].translation_en) {
          v.translation_en = offVerses[i].translation_en;
        }
      });
      if (this.state.currentScreen === "reader") {
        this.render();
      }
      return;
    }

    // 3. Cek apakah ada di IndexedDB yang tersimpan
    try {
      if (typeof dbGetSurah === "function") {
        const dbSurah = await dbGetSurah(sNum);
        if (dbSurah && Array.isArray(dbSurah.verses) && dbSurah.verses[0] && dbSurah.verses[0].translation_en) {
          verses.forEach((v, i) => {
            if (dbSurah.verses[i] && dbSurah.verses[i].translation_en) {
              v.translation_en = dbSurah.verses[i].translation_en;
            }
          });
          if (this.state.currentScreen === "reader") {
            this.render();
          }
          return;
        }
      }
    } catch (e) {}

    // 4. Unduh dari API Al-Quran Cloud (Sahih International) jika online
    try {
      if (typeof navigator !== "undefined" && !navigator.onLine) return;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 6000) : null;
      const resp = await fetch(`https://api.alquran.cloud/v1/surah/${sNum}/en.sahih`, {
        signal: controller ? controller.signal : undefined
      });
      if (timeoutId) clearTimeout(timeoutId);
      if (resp && resp.ok) {
        const json = await resp.json();
        if (json && json.data && Array.isArray(json.data.ayahs)) {
          const ayahs = json.data.ayahs;
          verses.forEach((v, idx) => {
            if (ayahs[idx] && ayahs[idx].text) {
              v.translation_en = ayahs[idx].text;
            }
          });
          if (this.state.currentScreen === "reader") {
            this.render();
          }
        }
      }
    } catch (err) {
      console.warn("Could not fetch English translation for surah " + sNum, err);
    }
  }

  // ==========================================
  // Audio Controller (Dual-Buffer Gapless Player)
  // ==========================================


  setOfflineTab(tab) {
    this.state.offlineActiveTab = tab;
    this.openOfflineModal();
  }

  async setOfflineQari(qariId) {
    this.state.selectedAudioQari = qariId;
    try {
      if (typeof dbGetDownloadedSurahsForQari === 'function') {
        this.state.downloadedAudioSurahs = await dbGetDownloadedSurahsForQari(qariId, QURAN_SURAH_LIST);
      }
      if (typeof dbGetQariStorageEstimate === 'function') {
        this.state.audioStorageEstimate = await dbGetQariStorageEstimate(qariId);
      }
    } catch (e) {}
    this.openOfflineModal();
  }

  async toggleSurahAudioDownload(surahNumber) {
    if (this.state.isAudioDownloading) {
      this.pauseAudioDownload();
      return;
    }
    const qariId = this.state.selectedAudioQari || this.state.settings.qari || 'alafasy';
    await this.startSurahAudioDownload(surahNumber, qariId);
  }

  async startSurahAudioDownload(surahNumber, qariId) {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.showToast("⚠️ Perangkat offline. Sambungkan internet untuk mengunduh audio.", "warning");
      return;
    }

    const sNum = Number(surahNumber);
    const meta = QURAN_SURAH_LIST.find(m => m.number === sNum);
    const versesCount = meta ? meta.verses : 0;
    if (!versesCount) return;

    const qari = QARI_LIST.find(q => q.id === qariId) || QARI_LIST[0];
    this.state.isAudioDownloading = true;
    this.state.audioAbortController = new AbortController();

    this.showToast(`📥 Memulai unduh audio QS. ${meta.name} (${versesCount} ayat)...`, "info");
    this.openOfflineModal();

    let successCount = 0;
    let quotaExceeded = false;
    for (let v = 1; v <= versesCount; v++) {
      if (this.state.audioAbortController?.signal.aborted) break;

      const isCached = await dbHasVerseAudio(qariId, sNum, v);
      if (isCached) {
        successCount++;
        continue;
      }

      this.state.audioDownloadProgress = {
        current: v,
        total: versesCount,
        percent: Math.round((v / versesCount) * 100),
        statusText: `Mengunduh QS. ${meta.name} ayat ${v}/${versesCount} (${qari.name})...`
      };
      this.openOfflineModal();

      const paddedSurah = String(sNum).padStart(3, "0");
      const paddedAyah = String(v).padStart(3, "0");
      const urls = qari.getUrls(paddedSurah, paddedAyah);

      const blob = await fetchAudioWithFallback(urls);
      if (blob) {
        const saveRes = await dbSaveVerseAudio(qariId, sNum, v, blob);
        if (saveRes && saveRes.success) {
          successCount++;
        } else if (saveRes && saveRes.quotaExceeded) {
          quotaExceeded = true;
          break;
        }
      }
    }

    this.state.isAudioDownloading = false;
    this.state.audioAbortController = null;
    this.state.downloadedAudioSurahs = await dbGetDownloadedSurahsForQari(qariId, QURAN_SURAH_LIST);
    this.state.audioStorageEstimate = await dbGetQariStorageEstimate(qariId);

    const isFullyDownloaded = await dbIsSurahAudioDownloaded(qariId, sNum, versesCount);

    if (quotaExceeded) {
      this.showToast("⚠️ Kuota penyimpanan perangkat penuh. Unduhan audio dihentikan.", "error");
    } else if (isFullyDownloaded) {
      this.showToast(`✅ Audio QS. ${meta.name} (${qari.name}) 100% lengkap dan siap diputar offline!`, "success");
    } else {
      this.showToast(`⚠️ Unduhan audio terhenti. Tersimpan ${successCount}/${versesCount} ayat.`, "warning");
    }
    this.openOfflineModal();
  }

  async toggleAllAudioDownload() {
    if (this.state.isAudioDownloading) {
      this.pauseAudioDownload();
      return;
    }
    const qariId = this.state.selectedAudioQari || this.state.settings.qari || 'alafasy';
    await this.startAllAudioDownload(qariId);
  }

  async startAllAudioDownload(qariId) {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.showToast("⚠️ Perangkat offline. Sambungkan internet untuk mengunduh audio.", "warning");
      return;
    }

    const qari = QARI_LIST.find(q => q.id === qariId) || QARI_LIST[0];
    const downloadedSurahs = await dbGetDownloadedSurahsForQari(qariId, QURAN_SURAH_LIST);
    const missingSurahs = QURAN_SURAH_LIST.filter(s => !downloadedSurahs.includes(s.number));

    if (missingSurahs.length === 0) {
      this.showToast(`✓ Seluruh 114 surat audio untuk ${qari.name} sudah lengkap offline!`, "success");
      return;
    }

    this.state.isAudioDownloading = true;
    this.state.audioAbortController = new AbortController();
    this.showToast(`📥 Memulai unduhan seluruh audio untuk ${qari.name}...`, "info");
    this.openOfflineModal();

    let failedVersesCount = 0;
    let quotaExceeded = false;

    for (let i = 0; i < missingSurahs.length; i++) {
      if (this.state.audioAbortController?.signal.aborted || quotaExceeded) break;
      const surah = missingSurahs[i];

      for (let v = 1; v <= surah.verses; v++) {
        if (this.state.audioAbortController?.signal.aborted) break;

        const isCached = await dbHasVerseAudio(qariId, surah.number, v);
        if (isCached) continue;

        this.state.audioDownloadProgress = {
          current: i + 1,
          total: missingSurahs.length,
          percent: Math.round(((i + (v / surah.verses)) / missingSurahs.length) * 100),
          statusText: `Mengunduh QS. ${surah.name} (${i+1}/${missingSurahs.length}), ayat ${v}/${surah.verses}...`
        };
        this.openOfflineModal();

        const paddedSurah = String(surah.number).padStart(3, "0");
        const paddedAyah = String(v).padStart(3, "0");
        const urls = qari.getUrls(paddedSurah, paddedAyah);

        const blob = await fetchAudioWithFallback(urls);
        if (blob) {
          const saveRes = await dbSaveVerseAudio(qariId, surah.number, v, blob);
          if (saveRes && saveRes.quotaExceeded) {
            quotaExceeded = true;
            break;
          }
        } else {
          failedVersesCount++;
        }
      }
    }

    const wasAborted = this.state.audioAbortController?.signal.aborted;
    this.state.isAudioDownloading = false;
    this.state.audioAbortController = null;
    this.state.downloadedAudioSurahs = await dbGetDownloadedSurahsForQari(qariId, QURAN_SURAH_LIST);
    this.state.audioStorageEstimate = await dbGetQariStorageEstimate(qariId);

    if (quotaExceeded) {
      this.showToast("⚠️ Kuota penyimpanan perangkat penuh saat mengunduh audio.", "error");
    } else if (wasAborted) {
      this.showToast("⏸️ Unduhan audio dijeda oleh pengguna.", "info");
    } else if (this.state.downloadedAudioSurahs.length === 114) {
      this.showToast(`🎉 Alhamdulillah! Seluruh 114 surat audio (${qari.name}) 100% lengkap offline!`, "success", 5000);
    } else if (failedVersesCount > 0) {
      this.showToast(`⚠️ Unduhan audio selesai dengan catatan: ${failedVersesCount} ayat gagal diunduh.`, "warning");
    } else {
      this.showToast(`✅ Proses unduhan audio untuk ${qari.name} selesai!`, "success");
    }
    this.openOfflineModal();
  }

  pauseAudioDownload() {
    if (this.state.audioAbortController) {
      this.state.audioAbortController.abort();
    }
    this.state.isAudioDownloading = false;
    this.showToast("⏸️ Unduhan audio dijeda.", "info");
    this.openOfflineModal();
  }

  async deleteSurahAudio(surahNumber) {
    const qariId = this.state.selectedAudioQari || this.state.settings.qari || 'alafasy';
    const sNum = Number(surahNumber);
    if (typeof dbDeleteSurahAudio === 'function') {
      await dbDeleteSurahAudio(qariId, sNum);
      this.showToast(`🗑️ Audio Surat #${sNum} berhasil dihapus dari memori offline.`, "info");
      this.openOfflineModal();
    }
  }

  async deleteAllAudioForCurrentQari() {
    const qariId = this.state.selectedAudioQari || this.state.settings.qari || 'alafasy';
    const qari = QARI_LIST.find(q => q.id === qariId) || { name: qariId };
    if (typeof dbDeleteAllAudioForQari === 'function') {
      await dbDeleteAllAudioForQari(qariId);
      this.showToast(`🗑️ Seluruh audio untuk ${qari.name} berhasil dihapus.`, "info");
      this.openOfflineModal();
    }
  }

  initAudioEvents() {
    this.audioElement.addEventListener("ended", () => {
      this.handleAudioEnded();
    });

    this.audioElement.addEventListener("error", (e) => {
      console.warn("Audio element error:", e);
    });

    this.preloadAudioElement.addEventListener("error", (e) => {
      console.warn("Preload audio element error:", e);
    });
  }

  handleAudioEnded() {
    if (this.state.isPlayingFullSurah && this.state.currentSurahData) {
      const nextVerseNum = (this.state.currentPlayingVerse?.verse || 0) + 1;
      const nextVerse = this.state.currentSurahData.verses.find(v => v.number === nextVerseNum);
      if (nextVerse) {
        this.playSingleVerse(this.state.currentSurahData.number, nextVerse.number, true);
        return;
      }
    }
    this.stopAudio();
  }

  async preloadNextVerse(surahNumber, verseNumber, qariId) {
    const qari = QARI_LIST.find(q => q.id === qariId) || QARI_LIST[0];
    const paddedSurah = String(surahNumber).padStart(3, "0");
    const paddedAyah = String(verseNumber).padStart(3, "0");

    let targetUrl = '';
    try {
      if (typeof dbGetVerseAudio === 'function') {
        const cachedBlob = await dbGetVerseAudio(qariId, surahNumber, verseNumber);
        if (cachedBlob) {
          targetUrl = URL.createObjectURL(cachedBlob);
        }
      }
    } catch (e) {}

    if (!targetUrl) {
      const urls = qari.getUrls(paddedSurah, paddedAyah);
      if (!urls || urls.length === 0) return;
      targetUrl = urls[0];
    }

    this.preloadedVerse = {
      surah: surahNumber,
      verse: verseNumber,
      qariId: qariId,
      url: targetUrl
    };

    this.preloadAudioElement.src = targetUrl;
    this.preloadAudioElement.preload = "auto";
    this.preloadAudioElement.load();
  }

  async playSingleVerse(surahNumber, verseNumber, continueSurah = false) {
    if (this.state.currentPlayingVerse && 
        this.state.currentPlayingVerse.surah === surahNumber && 
        this.state.currentPlayingVerse.verse === verseNumber && 
        !continueSurah) {
      if (this.audioElement.paused) {
        try {
          await this.audioElement.play();
          this.state.currentPlayingVerse.status = 'playing';
          this.updateAudioPlayingUI(surahNumber, verseNumber);
        } catch (e) {
          console.warn("[Audio] Play resume error:", e);
        }
      } else {
        this.stopAudio();
      }
      return;
    }

    const qariId = this.state.settings.qari || 'alafasy';
    const qari = QARI_LIST.find(q => q.id === qariId) || QARI_LIST[0];
    const paddedSurah = String(surahNumber).padStart(3, "0");
    const paddedAyah = String(verseNumber).padStart(3, "0");
    const sources = qari.getUrls(paddedSurah, paddedAyah);

    // Cek apakah ayat ini sudah berhasil di-preload sebelumnya (0ms Gapless Playback)
    const isPreloaded = this.preloadedVerse && 
                        this.preloadedVerse.surah === surahNumber && 
                        this.preloadedVerse.verse === verseNumber && 
                        this.preloadedVerse.qariId === qariId &&
                        this.preloadAudioElement.src;

    if (isPreloaded) {
      const oldAudio = this.audioElement;
      oldAudio.pause();
      oldAudio.onended = null;
      oldAudio.onerror = null;

      this.audioElement = this.preloadAudioElement;
      this.preloadAudioElement = oldAudio;
      this.preloadedVerse = null;

      this.audioElement.onended = () => this.handleAudioEnded();
      this.audioElement.onerror = (e) => {
        console.warn("[Audio] Error on preloaded element:", e);
      };

      this.state.currentPlayingVerse = { 
        surah: surahNumber, 
        verse: verseNumber, 
        status: 'playing' 
      };
      this.state.isPlayingFullSurah = continueSurah;

      try {
        await this.audioElement.play();
      } catch (e) {
        console.warn("[Audio] Preloaded play error:", e);
      }

      this.updateAudioPlayingUI(surahNumber, verseNumber);

      // Segera preload ayat berikutnya
      if (continueSurah && this.state.currentSurahData) {
        const nextNum = verseNumber + 1;
        const hasNext = this.state.currentSurahData.verses.some(v => v.number === nextNum);
        if (hasNext) {
          this.preloadNextVerse(surahNumber, nextNum, qariId);
        }
      }
      return;
    }

    // Pemutaran biasa (pertama kali atau loncat ayat)
    this.state.currentPlayingVerse = { 
      surah: surahNumber, 
      verse: verseNumber, 
      status: 'loading' 
    };
    this.state.isPlayingFullSurah = continueSurah;
    this.updateAudioPlayingUI(surahNumber, verseNumber);

    // Bersihkan Blob URL lama jika ada
    if (this._currentBlobUrl) {
      try { URL.revokeObjectURL(this._currentBlobUrl); } catch (e) {}
      this._currentBlobUrl = null;
    }

    // 1. Cek Offline Storage (IndexedDB QuranAudioDB) terlebih dahulu
    try {
      if (typeof dbGetVerseAudio === 'function') {
        const offlineBlob = await dbGetVerseAudio(qariId, surahNumber, verseNumber);
        if (offlineBlob) {
          this._currentBlobUrl = URL.createObjectURL(offlineBlob);
          this.audioElement.src = this._currentBlobUrl;
          this.audioElement.preload = "auto";
          this.audioElement.onended = () => this.handleAudioEnded();
          this.audioElement.onerror = () => {
            console.warn("[Audio] Offline blob playback failed, falling back to network stream...");
            playFromNetwork();
          };
          this.audioElement.load();
          try {
            await this.audioElement.play();
            if (this.state.currentPlayingVerse && this.state.currentPlayingVerse.verse === verseNumber) {
              this.state.currentPlayingVerse.status = 'playing';
              this.updateAudioPlayingUI(surahNumber, verseNumber);
              if (continueSurah && this.state.currentSurahData) {
                const nextNum = verseNumber + 1;
                const hasNext = this.state.currentSurahData.verses.some(v => v.number === nextNum);
                if (hasNext) this.preloadNextVerse(surahNumber, nextNum, qariId);
              }
            }
          } catch (e) {
            console.warn("[Audio] Offline play() rejected, trying network fallback:", e);
            playFromNetwork();
          }
          return;
        }
      }
    } catch (e) {
      console.warn("[Audio] IndexedDB check failed, proceeding to network stream:", e);
    }

    // 2. Pemutaran Online Streaming dari Network CDN
    let currentSrcIdx = 0;
    const playFromNetwork = async () => {
      if (currentSrcIdx >= sources.length) {
        this.showToast(`⚠️ Gagal memuat audio ${qari.name}. Pastikan terhubung ke internet.`, "error");
        this.stopAudio();
        return;
      }
      const src = sources[currentSrcIdx];
      this.audioElement.src = src;
      this.audioElement.preload = "auto";
      this.audioElement.onended = () => this.handleAudioEnded();
      this.audioElement.onerror = () => {
        console.warn(`[Audio] Sumber ${src} gagal dimuat, mencoba sumber alternatif...`);
        currentSrcIdx++;
        playFromNetwork();
      };
      this.audioElement.load();
      try {
        await this.audioElement.play();
        if (this.state.currentPlayingVerse && this.state.currentPlayingVerse.verse === verseNumber) {
          this.state.currentPlayingVerse.status = 'playing';
          this.updateAudioPlayingUI(surahNumber, verseNumber);
          if (continueSurah && this.state.currentSurahData) {
            const nextNum = verseNumber + 1;
            const hasNext = this.state.currentSurahData.verses.some(v => v.number === nextNum);
            if (hasNext) this.preloadNextVerse(surahNumber, nextNum, qariId);
          }
        }
      } catch (err) {
        console.warn(`[Audio] Sumber ${src} play() rejected:`, err);
        currentSrcIdx++;
        playFromNetwork();
      }
    };

    await playFromNetwork();
  }

  updateAudioPlayingUI(surahNumber, verseNumber) {
    document.querySelectorAll('.verse-item-card.active-playing').forEach(el => {
      el.classList.remove('active-playing');
    });
    document.querySelectorAll('.btn-verse-tool.playing-now').forEach(btn => {
      btn.classList.remove('playing-now');
      btn.title = "Dengarkan Audio Ayat Ini";
      btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    });

    if (this.state.currentPlayingVerse && this.state.currentPlayingVerse.verse === verseNumber) {
      const card = document.getElementById(`verse-${verseNumber}`);
      if (card) {
        card.classList.add('active-playing');
        const playBtn = card.querySelector('.btn-verse-tool[onclick*="playSingleVerse"]');
        if (playBtn) {
          playBtn.classList.add('playing-now');
          playBtn.title = "Hentikan Audio";
          playBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
        }
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    const surahPlayBtn = document.getElementById('btnPlayFullSurah');
    if (surahPlayBtn) {
      if (this.state.isPlayingFullSurah) {
        surahPlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> ${this.state.settings.language === 'en' ? 'Stop' : 'Hentikan'}`;
      } else {
        surahPlayBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> ${this.state.settings.language === 'en' ? 'Play All' : 'Putar Murottal'}`;
      }
    }

    // Update tombol Play / Off di Top Bar (Header)
    const topBarPlayBtn = document.getElementById('btnTopBarPlaySurah');
    if (topBarPlayBtn) {
      if (this.state.currentPlayingVerse) {
        topBarPlayBtn.className = "btn-icon-circle btn-top-murottal-off";
        topBarPlayBtn.title = "Matikan Murottal (OFF)";
        topBarPlayBtn.setAttribute("onclick", "window.app.stopAudio()");
        topBarPlayBtn.innerHTML = `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
              <line x1="12" y1="2" x2="12" y2="12"></line>
            </svg>
            <span style="font-size: 8.5px; font-weight: 800; margin-top: 1.5px; letter-spacing: 0.5px; line-height: 1;">OFF</span>
          </div>
        `;
      } else {
        const curSurahNum = this.state.currentSurahData ? this.state.currentSurahData.number : 1;
        topBarPlayBtn.className = "btn-icon-circle";
        topBarPlayBtn.title = "Putar Murottal Surah";
        topBarPlayBtn.setAttribute("onclick", `window.app.togglePlaySurah(${curSurahNum})`);
        topBarPlayBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        `;
      }
    }

    // Update Reciter di Floating Audio Bar jika ada
    const floatReciter = document.querySelector('.audio-bar-reciter');
    if (floatReciter) {
      const qariId = this.state.settings.qari || 'alafasy';
      const qari = QARI_LIST.find(q => q.id === qariId) || QARI_LIST[0];
      floatReciter.innerText = `🎙️ ${qari.name}`;
    }
  }

  togglePlaySurah(surahNumber) {
    if (this.state.currentPlayingVerse) {
      this.stopAudio();
      return;
    }
    const firstVerse = this.state.currentSurahData?.verses?.[0];
    if (firstVerse) {
      this.playSingleVerse(surahNumber, firstVerse.number, true);
    }
  }

  stopAudio() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.audioElement.onended = null;
      this.audioElement.onerror = null;
    }
    if (this.preloadAudioElement) {
      this.preloadAudioElement.pause();
      this.preloadAudioElement.src = '';
      this.preloadAudioElement.onended = null;
      this.preloadAudioElement.onerror = null;
    }
    if (this._currentBlobUrl) {
      try { URL.revokeObjectURL(this._currentBlobUrl); } catch (e) {}
      this._currentBlobUrl = null;
    }
    this.preloadedVerse = null;
    this.state.currentPlayingVerse = null;
    this.state.isPlayingFullSurah = false;
    this.updateAudioPlayingUI(0, 0);
  }

  async togglePrayerPhoneNotification() {
    const isAndroid = !!(window.AndroidBridge);
    const hasWebNotif = ("Notification" in window);

    if (!isAndroid && !hasWebNotif) {
      this.showToast("⚠️ Perangkat ini belum mendukung fitur notifikasi sistem.", "warning");
      return;
    }

    if (isAndroid) {
      if (typeof window.AndroidBridge.requestNotificationPermission === 'function') {
        try { window.AndroidBridge.requestNotificationPermission(); } catch(e) {}
      }
      const current = this.getPersistentData('prayer_notif_enabled') === 'true';
      const nextState = !current;
      this.savePersistentData('prayer_notif_enabled', nextState ? 'true' : 'false');

      if (nextState) {
        if (typeof window.AndroidBridge.showNotification === 'function') {
          try {
            window.AndroidBridge.showNotification(
              "🔔 Notifikasi Jadwal Sholat Aktif",
              "Pemberitahuan waktu sholat akan muncul di bilah atas HP saat tiba."
            );
          } catch(e) {}
        }
        try {
          this.scheduleAllPrayerAlarms();
        } catch(e) {}
        this.showToast("🔔 Notifikasi bilah atas HP telah aktif!", "success");
      } else {
        if (typeof window.AndroidBridge.cancelAllPrayerAlarms === 'function') {
          try {
            window.AndroidBridge.cancelAllPrayerAlarms();
          } catch(e) {}
        }
        this.showToast("🔕 Notifikasi HP dinonaktifkan", "info");
      }

      if (this.state.currentScreen === 'prayer') {
        this.render();
      }
      return;
    }

    let perm = Notification.permission;
    if (perm !== "granted") {
      try {
        perm = await Notification.requestPermission();
      } catch (e) {
        console.warn("Notification permission error:", e);
      }
    }

    if (perm === "granted") {
      const current = typeof localStorage !== 'undefined' && localStorage.getItem('prayer_notif_enabled') === 'true';
      const nextState = !current;
      localStorage.setItem('prayer_notif_enabled', nextState ? 'true' : 'false');

      if (nextState) {
        this.triggerSystemNotification(
          "🕌 Notifikasi Jadwal Sholat Aktif",
          "Pemberitahuan waktu sholat akan muncul di bilah atas HP saat tiba (tanpa suara adzan)."
        );
        this.showToast("🔔 Notifikasi HP di bilah atas telah aktif (tanpa suara adzan)", "success");
      } else {
        this.showToast("🔕 Notifikasi HP dinonaktifkan", "info");
      }

      if (this.state.currentScreen === 'prayer') {
        this.render();
      }
    } else {
      this.showToast("⚠️ Izin notifikasi belum diaktifkan. Silakan izinkan notifikasi di bilah browser/HP.", "warning");
    }
  }

  triggerSystemNotification(title, body) {
    if (window.AndroidBridge && typeof window.AndroidBridge.showNotification === 'function') {
      try {
        window.AndroidBridge.showNotification(title, body);
        return;
      } catch (e) {
        console.warn("AndroidBridge showNotification error:", e);
      }
    }

    if (!("Notification" in window) || Notification.permission !== "granted") return;

    const options = {
      body: body,
      icon: 'assets/icons/icon-192.png',
      badge: 'assets/icons/icon-192.png',
      vibrate: [200, 100, 200],
      tag: 'prayer-reminder',
      renotify: true
    };

    try {
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(title, options);
        }).catch(() => {
          new Notification(title, options);
        });
      } else {
        new Notification(title, options);
      }
    } catch (err) {
      console.warn("Could not fire notification:", err);
    }
  }

  scheduleAllPrayerAlarms() {
    if (!window.AndroidBridge || typeof window.AndroidBridge.schedulePrayerAlarm !== 'function') {
      return;
    }
    const isNotifEnabled = this.getPersistentData('prayer_notif_enabled') === 'true';
    if (!isNotifEnabled) return;

    try {
      const city = INDONESIA_CITIES.find(c => c.id === this.state.selectedPrayerCity) || INDONESIA_CITIES[0];
      const now = new Date();
      const sched = calculatePrayerTimes(now, city.lat, city.lng, city.tz);

      const prayerList = [
        { key: "subuh", name: "Subuh", time: sched.subuh },
        { key: "dzuhur", name: "Dzuhur", time: sched.dzuhur },
        { key: "ashar", name: "Ashar", time: sched.ashar },
        { key: "maghrib", name: "Maghrib", time: sched.maghrib },
        { key: "isya", name: "Isya", time: sched.isya }
      ];

      prayerList.forEach(p => {
        try {
          if (!p.time) return;
          const [h, m] = p.time.split(':').map(Number);
          const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);

          if (target.getTime() <= now.getTime()) {
            target.setDate(target.getDate() + 1);
          }

          const title = `🕌 Waktu Sholat ${p.name} Telah Tiba`;
          const message = `Waktu sholat ${p.name} (${p.time}) untuk wilayah ${city.name} dan sekitarnya telah tiba.`;
          window.AndroidBridge.schedulePrayerAlarm(p.key, title, message, target.getTime());
        } catch (singleErr) {
          console.warn(`Failed scheduling single alarm for ${p.key}:`, singleErr);
        }
      });
    } catch (err) {
      console.warn("Failed scheduling prayer alarms:", err);
    }
  }

  playAdzanPreview() {
    this.togglePrayerPhoneNotification();
  }

  // ==========================================
  // Navigasi & Tindakan Pengguna
  // ==========================================

  navigate(screen) {
    this.closeSettingsModal();
    this.closeHadithModal();
    this.state.currentScreen = screen;
    this.render();

    // Inisialisasi atau hentikan pelacakan sensor kompas kiblat
    if (screen === 'prayer') {
      const city = INDONESIA_CITIES.find(c => c.id === this.state.selectedPrayerCity) || INDONESIA_CITIES[0];
      const qibla = calculateQiblaDirection(city.lat, city.lng);
      this.startCompassTracking(qibla);
    } else {
      this.stopCompassTracking();
    }

    // Pastikan scroll kembali ke atas saat navigasi
    const sc = document.getElementById("mainScreenArea");
    if (sc) sc.scrollTop = 0;
    this.updateBottomNav();
  }

  handleAndroidBack() {
    // 1. Periksa apakah ada modal yang sedang terbuka, lalu tutup secara berurutan
    const modalCheckers = [
      {
        isOpen: () => {
          const m = document.getElementById("privacyModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closePrivacyModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("settingsModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closeSettingsModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("lastReadModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closeLastReadModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("hadithModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closeHadithModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("kemenagModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closeKemenagModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("offlineModal");
          return m && m.classList.contains("open");
        },
        close: () => this.closeOfflineModal()
      },
      {
        isOpen: () => {
          const m = document.getElementById("shareImageModal");
          return m && m.classList.contains("open");
        },
        close: () => {
          if (typeof this.closeShareImageModal === "function") this.closeShareImageModal();
        }
      }
    ];

    for (const item of modalCheckers) {
      if (item.isOpen()) {
        item.close();
        return true; // Berhasil menangani back (menutup modal)
      }
    }

    // 2. Jika sedang di Layar Pembaca (Reader), kembali ke Daftar Surah
    if (this.state.currentScreen === "reader") {
      this.navigate("surahList");
      return true;
    }

    // 3. Jika sedang di Layar Daftar Surah, Pencarian, atau Jadwal Sholat, kembali ke Beranda
    if (this.state.currentScreen !== "home") {
      this.navigate("home");
      return true;
    }

    // 4. Jika sudah berada di Beranda, kembalikan false agar Android menjalankan konfirmasi keluar
    return false;
  }

  getSurahLastReadMap() {
    // Single source of truth: HANYA surah aktif yang memiliki data
    const lr = this.state?.lastRead || this.loadLastRead();
    if (lr && lr.surahNumber) {
      return { [Number(lr.surahNumber)]: Math.max(1, Number(lr.ayahNumber) || 1) };
    }
    return {};
  }

  getSurahLastRead(surahNumber) {
    const sNum = Number(surahNumber);
    // Single source of truth: HANYA mengembalikan nomor ayat jika nomor surah sama persis
    const lr = this.state?.lastRead || this.loadLastRead();
    if (lr && Number(lr.surahNumber) === sNum) {
      return Math.max(1, Number(lr.ayahNumber) || 1);
    }
    return 1;
  }

  scrollToVerseElement(verseNumber) {
    const num = Number(verseNumber) || 1;

    let attempts = 0;
    const maxAttempts = 15;

    const performScroll = () => {
      attempts++;
      const targetEl = document.getElementById(`verse-${num}`);
      // Di layar reader, kontainer yang memiliki overflow-y adalah readerScrollArea
      const scroller = document.getElementById("readerScrollArea") || document.getElementById("mainScreenArea");

      if (!targetEl) {
        if (attempts < maxAttempts) {
          setTimeout(performScroll, 70);
        }
        return false;
      }

      // Berikan efek highlight visual pada ayat terakhir baca
      document.querySelectorAll('.verse-item-card.active-last-read').forEach(el => {
        if (el !== targetEl) el.classList.remove('active-last-read');
      });
      targetEl.classList.add("active-last-read");

      if (num === 1) {
        if (scroller) scroller.scrollTop = 0;
        try { targetEl.scrollIntoView({ behavior: "auto", block: "start" }); } catch (e) {}
        return true;
      }

      if (scroller) {
        const scrollerRect = scroller.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const offsetTop = targetRect.top - scrollerRect.top + scroller.scrollTop;
        // Beri margin atas 10px agar ayat terlihat lapang dan nyaman dibaca
        const finalTop = Math.max(0, offsetTop - 10);
        scroller.scrollTop = finalTop;
      }

      // Jalankan scrollIntoView native browser sebagai backup independen
      try {
        targetEl.scrollIntoView({ behavior: "auto", block: "start" });
      } catch (e) {}

      // Multi-pass berikutnya untuk memastikan font rendering & relayout selesai
      if (attempts < 4) {
        setTimeout(performScroll, attempts * 120);
      }

      return true;
    };

    // Jalankan segera via requestAnimationFrame dan beberapa interval terjadwal
    requestAnimationFrame(() => {
      performScroll();
      setTimeout(performScroll, 60);
      setTimeout(performScroll, 200);
      setTimeout(performScroll, 500);
    });
  }

  continueLastRead() {
    const lr = this.state.lastRead || this.loadLastRead();
    if (lr && lr.surahNumber) {
      this.loadSurah(Number(lr.surahNumber), Number(lr.ayahNumber) || 1);
    } else {
      this.loadSurah(1, 1);
    }
  }

  async loadSurah(surahNumber, scrollToVerse = null) {
    if (this.state.currentPlayingVerse) {
      this.stopAudio();
    }
    const sNum = Number(surahNumber) || 1;
    this.state.currentSurahNumber = sNum;
    this.state.currentScreen = "reader";

    // Tentukan ayat tujuan:
    // Jika scrollToVerse secara eksplisit diberikan (termasuk ayat 1), hormati nilai tersebut.
    // Hanya periksa riwayat per-surat tersimpan jika parameter scrollToVerse bernilai null/undefined.
    let targetVerse = 1;
    if (scrollToVerse !== null && scrollToVerse !== undefined) {
      targetVerse = Math.max(1, Number(scrollToVerse) || 1);
    } else {
      const savedVerse = this.getSurahLastRead(sNum);
      if (savedVerse > 1) {
        targetVerse = savedVerse;
      }
    }
    this.state.activeAyahNumber = targetVerse;

    // Ambil data surah (offline cache / API) terlebih dahulu agar render tidak me-reset DOM dua kali
    const data = await getSurahData(sNum);
    this.state.currentSurahData = data;
    if (data && !data.isNotDownloaded) {
      this.state.cachedSurahsInMemory[sNum] = data;
    }
    const currentLang = this.state.settings?.language || "id";
    const isEn = currentLang === "en";
    if (isEn) {
      await this.ensureEnglishTranslation(sNum);
    }
    this.render();

    // Langsung menuju ayat yang dituju (Terakhir Baca)
    this.scrollToVerseElement(targetVerse);
    if (targetVerse > 1) {
      const jumpMsg = isEn 
        ? `📖 Jumping to last read verse: Surah ${this.getSurahName(sNum)}: Verse ${targetVerse}` 
        : `📖 Menuju ayat terakhir baca: QS. ${this.getSurahName(sNum)}: Ayat ${targetVerse}`;
      this.showToast(jumpMsg, "info", 2500);
    }
  }

  loadJuz(juzNumber, startSurah, startAyat) {
    this.loadSurah(startSurah, startAyat);
  }

  nextSurah() {
    const current = Number(this.state.currentSurahNumber) || 1;
    if (current < 114) {
      this.loadSurah(current + 1, 1);
    } else {
      this.loadSurah(1, 1);
    }
  }

  prevSurah() {
    const current = Number(this.state.currentSurahNumber) || 1;
    if (current > 1) {
      this.loadSurah(current - 1, 1);
    } else {
      this.loadSurah(114, 1);
    }
  }

  goToNextVerse() {
    const sNum = Number(this.state.currentSurahNumber) || 1;
    const currentAyah = Number(this.state.activeAyahNumber) || 1;
    const meta = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST : []).find(s => s.number === sNum);
    const totalVerses = meta ? meta.verses : 1;

    if (currentAyah < totalVerses) {
      const nextAyah = currentAyah + 1;
      this.state.activeAyahNumber = nextAyah;
      this.scrollToVerseElement(nextAyah);
    } else {
      // Pindah ke ayat 1 surat berikutnya
      this.nextSurah();
    }
  }

  goToPrevVerse() {
    const sNum = Number(this.state.currentSurahNumber) || 1;
    const currentAyah = Number(this.state.activeAyahNumber) || 1;

    if (currentAyah > 1) {
      const prevAyah = currentAyah - 1;
      this.state.activeAyahNumber = prevAyah;
      this.scrollToVerseElement(prevAyah);
    } else {
      // Pindah ke ayat terakhir surat sebelumnya
      if (sNum > 1) {
        const prevSNum = sNum - 1;
        const prevMeta = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST : []).find(s => s.number === prevSNum);
        const lastAyahOfPrev = prevMeta ? prevMeta.verses : 1;
        this.loadSurah(prevSNum, lastAyahOfPrev);
      } else {
        this.loadSurah(114, 6);
      }
    }
  }

  getSurahName(surahNumber) {
    const s = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST : []).find(item => item.number === Number(surahNumber));
    return s ? s.name : `Surah ${surahNumber}`;
  }

  saveLastRead(surahNumber, surahNameOrAyah, ayahNumber, juz, page) {
    const sNum = Number(surahNumber) || this.state.currentSurahNumber || 1;
    let aNum = 1;
    let sName = "";
    let jNum = juz;
    let pNum = page;

    if (typeof surahNameOrAyah === "number") {
      aNum = Number(surahNameOrAyah) || 1;
      jNum = ayahNumber;
      pNum = juz;
    } else {
      aNum = Number(ayahNumber) || 1;
      sName = typeof surahNameOrAyah === "string" ? surahNameOrAyah : "";
    }

    const meta = (typeof QURAN_SURAH_LIST !== 'undefined' ? QURAN_SURAH_LIST : []).find(s => s.number === sNum);
    if (!sName) {
      sName = meta ? meta.name : this.getSurahName(sNum);
    }
    if (!jNum) {
      jNum = meta ? meta.juz : 1;
    }
    if (!pNum) {
      pNum = meta ? meta.page : 1;
    }

    // Validasi data surah dan ayat
    if (sNum < 1 || sNum > 114) {
      console.warn(`[saveLastRead] Nomor surat ${sNum} di luar jangkauan (1-114)`);
      return;
    }
    if (aNum < 1) aNum = 1;
    if (meta && meta.verses && aNum > meta.verses) {
      aNum = meta.verses;
    }

    const lr = { 
      surahNumber: sNum, 
      surahName: sName, 
      ayahNumber: aNum, 
      juz: jNum, 
      page: pNum,
      timestamp: Date.now()
    };
    this.state.lastRead = lr;
    this.state.activeAyahNumber = aNum;
    this.savePersistentData("quran_last_read", lr);

    // Gantikan posisi sebelumnya pada map (bukan menambahkan record baru), hanya 1 surat aktif
    this.savePersistentData("quran_surahs_last_read", { [sNum]: aNum });

    const isEn = this.state.settings?.language === "en";
    const lrSavedMsg = isEn 
      ? `📌 Saved! Last Read: Surah ${sName} Verse ${aNum}` 
      : `📌 Tersimpan! Terakhir Baca: QS. ${sName} Ayat ${aNum}`;
    this.showToast(lrSavedMsg, "success");

    // Perbarui tampilan status Terakhir Dibaca di halaman reader secara instan
    // Hapus status active-last-read dan reset tombol pada ayat sebelumnya
    document.querySelectorAll('.verse-item-card.active-last-read').forEach(el => {
      el.classList.remove('active-last-read');
      const oldBadge = el.querySelector('.badge-last-read-marker');
      if (oldBadge) oldBadge.remove();
      const oldBtn = el.querySelector('.btn-verse-tool.marked-last-read');
      if (oldBtn) {
        oldBtn.classList.remove('marked-last-read');
        oldBtn.innerHTML = isEn ? '📌 Last Read' : '📌 Terakhir Baca';
      }
    });

    // Sorot langsung elemen ayat di layar TANPA me-render ulang seluruh halaman
    const targetEl = document.getElementById(`verse-${aNum}`);
    if (targetEl) {
      targetEl.classList.add("active-last-read");

      // Pasang badge jika belum ada
      if (!targetEl.querySelector('.badge-last-read-marker')) {
        const badgeWrap = document.createElement('div');
        badgeWrap.className = 'badge-last-read-marker';
        badgeWrap.style.cssText = 'display: flex; align-items: center; gap: 6px; margin-bottom: 8px;';
        badgeWrap.innerHTML = `
          <span style="background: rgba(249, 115, 22, 0.22); color: #F97316; font-size: 11px; font-weight: 800; padding: 3px 9px; border-radius: 6px; border: 1px solid rgba(249, 115, 22, 0.45); display: inline-flex; align-items: center; gap: 4px;">
            ${isEn ? '📌 LAST READ' : '📌 TERAKHIR DIBACA'}
          </span>
        `;
        targetEl.insertBefore(badgeWrap, targetEl.firstChild);
      }

      // Perbarui tombol pada ayat tersebut menjadi "✓ Terakhir Baca"
      const readBtn = targetEl.querySelector('.btn-verse-tool[onclick*="saveLastRead"]');
      if (readBtn) {
        readBtn.classList.add('marked-last-read');
        readBtn.innerHTML = isEn ? '✓ Last Read' : '✓ Terakhir Baca';
      }
    }
  }

  toggleBookmarkSurah(surahNumber, surahNameOrAyah, ayahNumber) {
    const sNum = Number(surahNumber) || 1;
    let aNum = 1;
    let sName = "";
    if (typeof surahNameOrAyah === "number") {
      aNum = Number(surahNameOrAyah) || 1;
      sName = this.getSurahName(sNum);
    } else {
      sName = surahNameOrAyah || this.getSurahName(sNum);
      aNum = Number(ayahNumber) || 1;
    }
    const existsIdx = this.state.bookmarks.findIndex(b => b.surahNumber === sNum && b.ayahNumber === aNum);
    const isEn = this.state.settings?.language === "en";
    if (existsIdx >= 0) {
      this.state.bookmarks.splice(existsIdx, 1);
      this.showToast(isEn ? `Bookmark for Surah ${sName} removed` : `Bookmark QS. ${sName} dihapus`, "info");
    } else {
      this.state.bookmarks.push({ surahNumber: sNum, surahName: sName, ayahNumber: aNum, date: new Date().toISOString() });
      this.showToast(isEn ? `⭐ Surah ${sName} bookmarked!` : `⭐ QS. ${sName} ditandai di Bookmark!`, "success");
    }
    this.savePersistentData("quran_bookmarks", this.state.bookmarks);
    this.render();
  }

  /**
   * Mengambil data lengkap ayat (Arab, Latin, Terjemahan) dari memori, database offline, atau IndexedDB
   */
  async getVerseObject(surahNumber, verseNumber) {
    const sNum = Number(surahNumber);
    const vNum = Number(verseNumber);

    // 1. Cek dari currentSurahData yang sedang aktif dibaca
    if (this.state.currentSurahData && Number(this.state.currentSurahData.number) === sNum && Array.isArray(this.state.currentSurahData.verses)) {
      const v = this.state.currentSurahData.verses.find(item => Number(item.number) === vNum);
      if (v && v.arabic) return v;
    }

    // 2. Cek dari OFFLINE_SURAHS jika surat termasuk dalam bundel bawaan
    if (typeof OFFLINE_SURAHS !== 'undefined' && OFFLINE_SURAHS && OFFLINE_SURAHS[String(sNum)] && Array.isArray(OFFLINE_SURAHS[String(sNum)].verses)) {
      const v = OFFLINE_SURAHS[String(sNum)].verses.find(item => Number(item.number) === vNum);
      if (v && v.arabic) return v;
    }

    // 3. Cek dari database lokal IndexedDB
    try {
      if (typeof dbGetSurah === 'function') {
        const dbSurah = await dbGetSurah(sNum);
        if (dbSurah && Array.isArray(dbSurah.verses)) {
          const v = dbSurah.verses.find(item => Number(item.number) === vNum);
          if (v && v.arabic) return v;
        }
      }
    } catch (e) {
      console.warn('Gagal membaca surat dari IndexedDB:', e);
    }

    // 4. Fallback: Ekstraksi dari elemen kartu DOM jika sedang tampil di layar
    try {
      if (typeof document !== 'undefined') {
        const card = document.getElementById(`verse-${vNum}`);
        if (card) {
          const arabicEl = card.querySelector('.verse-arabic-text');
          const latinEl = card.querySelector('.verse-latin-text');
          const transEl = card.querySelector('.verse-translation-text');
          if (arabicEl && arabicEl.textContent.trim()) {
            return {
              number: vNum,
              arabic: arabicEl.textContent.trim(),
              latin: latinEl ? latinEl.textContent.trim() : '',
              translation: transEl ? transEl.textContent.trim() : ''
            };
          }
        }
      }
    } catch (e) {
      console.warn('Gagal membaca ayat dari DOM:', e);
    }

    return null;
  }

  /**
   * Menyusun format teks ayat untuk Salin (Clipboard) dan Bagikan (Share WhatsApp dsb.)
   * Sesuai revisi terbaru: Teks Arab berukuran proporsional, tulisan Latin dihapus,
   * menyertakan Teks Arab, Terjemahan Bahasa Indonesia, dan Sumber Kemenag RI:
   *
   * AL-QUR'AN DIGITAL INDONESIA
   *
   * QS. [Nama Surah]: [Nomor Ayat]
   *
   * [TEKS ARAB AL-QUR'AN]
   *
   * [TERJEMAHAN BAHASA INDONESIA]
   *
   * Sumber: Al-Qur'an Standar Kemenag RI
   */
  formatVerseShareText(surahNumber, verseNumber, verse) {
    const sNum = Number(surahNumber);
    const vNum = Number(verseNumber);
    const lang = this.state.settings?.language || "id";
    const isEn = lang === "en";
    const surahName = this.getSurahName(sNum) || (isEn ? `Surah ${sNum}` : `Surat ke-${sNum}`);

    // Teks Arab: bersihkan dari tag HTML dan ornamen, standarisasi harakat Rasm Utsmani
    let arabicText = '';
    if (verse && verse.arabic) {
      const rawArab = String(verse.arabic).replace(/<[^>]+>/g, '').trim();
      arabicText = typeof cleanQuranArabic === 'function' ? cleanQuranArabic(rawArab) : rawArab;
    }

    // Terjemahan: gunakan English jika mode English aktif, atau Bahasa Indonesia jika mode id
    let translationText = '';
    if (verse) {
      if (isEn && (verse.translation_en || verse.translationEn)) {
        translationText = String(verse.translation_en || verse.translationEn).trim();
      } else if (verse.translation || verse.translation_id || verse.teksIndonesia) {
        translationText = String(verse.translation || verse.translation_id || verse.teksIndonesia).trim();
      }
    }

    const header = isEn ? 'AL-QURAN DIGITAL INDONESIA' : 'AL-QUR\'AN DIGITAL INDONESIA';
    const prefix = isEn ? `Surah ${surahName}: ${vNum}` : `QS. ${surahName}: ${vNum}`;
    const source = isEn 
      ? 'Source: Ministry of Religious Affairs RI / Sahih International Translation' 
      : 'Sumber: Al-Qur\'an Standar Kemenag RI';

    const parts = [
      header,
      prefix
    ];

    if (arabicText) {
      parts.push(arabicText);
    }
    // Catatan: Tulisan Latin dihapus sesuai permintaan user pada fitur salin & bagikan
    if (translationText) {
      parts.push(translationText);
    }
    parts.push(source);

    return parts.join('\n\n');
  }

  /**
   * Menyalin teks ayat lengkap (Arab, Latin, Terjemahan) ke Clipboard
   */
  async copyVerse(surahNumber, verseNumber, fallbackArabic, fallbackTranslation) {
    const sNum = Number(surahNumber);
    const vNum = Number(verseNumber);
    const isEn = this.state.settings?.language === "en";

    let verse = await this.getVerseObject(sNum, vNum);
    if (!verse && (fallbackArabic || fallbackTranslation)) {
      verse = {
        number: vNum,
        arabic: fallbackArabic || '',
        latin: '',
        translation: fallbackTranslation || ''
      };
    }

    if (!verse || !verse.arabic) {
      this.showToast(isEn ? 'Failed to load verse data to copy.' : 'Gagal memuat data ayat untuk disalin.', 'error');
      return;
    }

    const textToCopy = this.formatVerseShareText(sNum, vNum, verse);
    let copied = false;

    // 1. Coba melalui native AndroidBridge jika tersedia di Android App
    if (typeof window !== 'undefined' && window.AndroidBridge && typeof window.AndroidBridge.copyToClipboard === 'function') {
      try {
        window.AndroidBridge.copyToClipboard(textToCopy);
        copied = true;
      } catch (e) {
        console.warn('AndroidBridge copyToClipboard error:', e);
      }
    }

    // 2. Coba melalui Web Clipboard API
    if (!copied && typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(textToCopy);
        copied = true;
      } catch (e) {
        console.warn('navigator.clipboard.writeText error:', e);
      }
    }

    // 3. Fallback execCommand('copy') untuk kompatibilitas WebView / browser lama
    if (!copied && typeof document !== 'undefined') {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        copied = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (e) {
        console.warn('execCommand copy fallback error:', e);
      }
    }

    // 4. Berikan notifikasi hasil sesuai instruksi
    if (copied) {
      this.showToast(isEn ? 'Quran verse copied successfully.' : 'Berhasil menyalin ayat Al-Qur\'an.', 'success');
    } else {
      prompt(isEn ? 'Copy the verse text below:' : 'Salin teks ayat berikut:', textToCopy);
      this.showToast(isEn ? 'Please copy text from dialog box.' : 'Silakan salin teks dari kotak dialog.', 'info');
    }
  }

  /**
   * Membagikan teks ayat lengkap (Arab, Latin, Terjemahan) ke WhatsApp / Medsos
   */
  async shareVerse(surahNumber, arg2, arg3) {
    const sNum = Number(surahNumber);
    const vNum = Number(arg3 !== undefined ? arg3 : arg2);
    const isEn = this.state.settings?.language === "en";
    const surahName = this.getSurahName(sNum) || (isEn ? `Surah ${sNum}` : `Surat ke-${sNum}`);

    let verse = await this.getVerseObject(sNum, vNum);
    if (isEn && verse && !verse.translation_en) {
      if (this.state.currentSurahData && this.state.currentSurahData.verses) {
        const curV = this.state.currentSurahData.verses.find(v => Number(v.number) === vNum);
        if (curV && curV.translation_en) {
          verse.translation_en = curV.translation_en;
        }
      }
    }

    if (!verse || !verse.arabic) {
      this.showToast(isEn ? 'Failed to load verse data to share.' : 'Gagal memuat data ayat untuk dibagikan.', 'error');
      return;
    }

    const shareText = this.formatVerseShareText(sNum, vNum, verse);
    const shareTitle = isEn ? `Surah ${surahName}: ${vNum}` : `QS. ${surahName}: ${vNum}`;
    let shared = false;

    // 1. Coba melalui native AndroidBridge jika tersedia di Android App
    if (typeof window !== 'undefined' && window.AndroidBridge && typeof window.AndroidBridge.shareText === 'function') {
      try {
        window.AndroidBridge.shareText(shareTitle, shareText);
        shared = true;
      } catch (e) {
        console.warn('AndroidBridge shareText error:', e);
      }
    }

    // 2. Coba melalui Web Share API
    if (!shared && typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText
        });
        shared = true;
      } catch (e) {
        // Jika pengguna menutup dialog share sheet, jangan dianggap error
        if (e && e.name === 'AbortError') {
          return;
        }
        console.warn('navigator.share error:', e);
      }
    }

    // 3. Fallback: jika Web Share API tidak tersedia, salin teks ke clipboard & beri tahu pengguna
    if (!shared) {
      await this.copyVerse(sNum, vNum);
      this.showToast(isEn ? 'Verse text copied to clipboard to share on WhatsApp.' : 'Teks ayat disalin ke clipboard untuk dibagikan ke WhatsApp.', 'info');
    }
  }

  /**
   * Alias kompatibilitas jika dipanggil sebagai shareVerseImage
   */
  shareVerseImage(surahNumber, verseNumber) {
    return this.shareVerse(surahNumber, verseNumber);
  }

  // ==========================================
  // Modal Handlers (Tampilan 3)
  // ==========================================

  openLastReadModal() {
    const lr = this.state.lastRead || this.loadLastRead();
    // Jika ada catatan terakhir baca yang valid, langsung lompat ke ayat yang dituju!
    if (lr && Number(lr.surahNumber) >= 1 && Number(lr.ayahNumber) >= 1) {
      this.jumpToLastReadSurah(Number(lr.surahNumber), Number(lr.ayahNumber));
      return;
    }
    const modal = document.getElementById("lastReadModalContainer");
    if (modal) {
      modal.innerHTML = renderLastReadModal(this.state.lastRead, this.state.settings?.language || "id");
      const backdrop = document.getElementById("lastReadModal");
      if (backdrop) backdrop.classList.add("open");
    }
  }

  closeLastReadModal() {
    const backdrop = document.getElementById("lastReadModal");
    if (backdrop) backdrop.classList.remove("open");
  }

  jumpToLastReadSurah(surahNumber, ayahNumber) {
    this.closeLastReadModal();
    this.loadSurah(surahNumber, ayahNumber);
  }

  jumpToLastReadJuz(surahNumber, ayahNumber, juz) {
    this.closeLastReadModal();
    this.loadSurah(surahNumber, ayahNumber);
  }

  setSurahListTab(tab) {
    this.state.activeSurahListTab = tab;
    this.render();
  }

  filterSurahList(query) {
    this.state.searchQuery = query;
    const modal = document.getElementById("surahListModal");
    if (modal) {
      modal.outerHTML = renderSurahListModal(this.state.activeSurahListTab, query, this.state.settings?.language || "id", this.state.lastRead);
      const inp = document.getElementById("surahSearchInput");
      if (inp) {
        inp.focus();
        inp.setSelectionRange(query.length, query.length);
      }
    }
  }

  executeSearch(query) {
    this.state.searchQuery = query;
    const rawQ = (query || "").trim();
    const q = rawQ.toLowerCase();
    const isEn = (this.state.settings && this.state.settings.language === 'en');

    // Update input field bila pemanggilan berasal dari klik tag atau kartu tematik
    const inp = document.getElementById("globalSearchInput");
    if (inp && inp.value !== rawQ) {
      inp.value = rawQ;
    }

    if (!rawQ) {
      this.state.searchResults = [];
      this.state.searchDirectJump = null;
      this.state.searchTerms = [];
      const resultsContainer = document.getElementById("searchResultsArea");
      if (resultsContainer) {
        resultsContainer.innerHTML = renderSearchResultsList("", [], null, [], this.state.settings?.language || "id");
      }
      return;
    }

    const normalizedQ = normalizeSpelling(q);

    // 1. Direct Jump Ayat (contoh: "2:255", "18:10", "qs 2:255", "surah 2:255")
    let directJump = null;
    const verseJumpMatch = rawQ.match(/^(?:qs\.?|surah|surat)?\s*(\d{1,3})\s*[:\s.,/-]\s*(\d{1,3})$/i);
    if (verseJumpMatch) {
      const sNum = parseInt(verseJumpMatch[1], 10);
      const aNum = parseInt(verseJumpMatch[2], 10);
      const surahInfo = QURAN_SURAH_LIST.find(s => s.number === sNum);
      if (surahInfo && aNum >= 1 && aNum <= surahInfo.verses) {
        directJump = {
          type: 'verse',
          surahNumber: sNum,
          surahName: surahInfo.name,
          surahArabic: surahInfo.arabic,
          ayahNumber: aNum,
          totalVerses: surahInfo.verses,
          juz: surahInfo.juz,
          verseData: null
        };
      }
    }

    // 2. Direct Jump Nama Surah (contoh: "Yasin", "Al-Mulk", "Al-Baqarah", "Kahfi")
    if (!directJump) {
      const cleanQ = normalizedQ.replace(/[^a-z0-9]/g, '');
      if (cleanQ.length >= 2) {
        const surahMatch = QURAN_SURAH_LIST.find(s => {
          const sClean = s.name.toLowerCase().replace(/[^a-z0-9]/g, '');
          const sAlt = s.name.toLowerCase().replace(/^al-?/, '').replace(/[^a-z0-9]/g, '');
          return sClean === cleanQ || sAlt === cleanQ;
        });
        if (surahMatch) {
          directJump = {
            type: 'surah',
            surahNumber: surahMatch.number,
            surahName: surahMatch.name,
            surahArabic: surahMatch.arabic,
            meaning: surahMatch.meaning,
            totalVerses: surahMatch.verses,
            juz: surahMatch.juz
          };
        }
      }
    }

    // 3. Smart Search: Toleransi Ejaan & Kamus Sinonim Lokal
    const searchTerms = [rawQ, q, normalizedQ];
    for (const [key, synList] of Object.entries(SYNONYM_DICTIONARY)) {
      if (normalizedQ.includes(key) || key.includes(normalizedQ)) {
        searchTerms.push(...synList);
      }
    }
    const uniqueTerms = Array.from(new Set(searchTerms.filter(t => t && t.length > 1)));
    const arabicQ = normalizeArabic(rawQ);

    // 4. Multi-Field Search Pool (THEMATIC_VERSES, OFFLINE_SURAHS, localStorage)
    const pool = [];
    const seen = new Set();

    function addVerse(v, sNum, sName, sJuz) {
      const aNum = v.number || v.ayahNumber;
      const key = `${sNum}:${aNum}`;
      if (seen.has(key)) return;
      seen.add(key);
      pool.push({
        surahNumber: sNum,
        surahName: sName,
        ayahNumber: aNum,
        juz: v.juz || sJuz || 1,
        arabic: v.arabic,
        latin: v.latin || '',
        translation: v.translation || '',
        translation_en: v.translation_en || '',
        keywords: v.keywords || []
      });
    }

    // Pool data ayat tematik pilihan offline
    THEMATIC_VERSES.forEach(v => addVerse(v, v.surahNumber, v.surahName, v.juz));

    // Pool data surah offline bawaan
    Object.values(OFFLINE_SURAHS).forEach(surah => {
      (surah.verses || []).forEach(v => addVerse(v, surah.number, surah.name, surah.juz));
    });

    // Pool data surah yang tersimpan di memori dari IndexedDB
    if (this.state.cachedSurahsInMemory) {
      Object.values(this.state.cachedSurahsInMemory).forEach(surah => {
        (surah.verses || []).forEach(v => addVerse(v, surah.number, surah.name, surah.juz));
      });
    }

    // Pool data cache surah di localStorage jika ada
    if (typeof localStorage !== 'undefined') {
      try {
        for (let i = 1; i <= 114; i++) {
          const cached = localStorage.getItem(`quran_surah_v2_${i}`);
          if (cached) {
            const parsed = JSON.parse(cached);
            const meta = QURAN_SURAH_LIST.find(s => s.number === i);
            const sName = (meta && meta.name) || parsed.name || `Surah ${i}`;
            (parsed.verses || []).forEach(v => addVerse(v, i, sName, meta ? meta.juz : 1));
          }
        }
      } catch (e) {
        // Abaikan error cache
      }
    }

    // Sambungkan data ayat jika direct jump ayat cocok
    if (directJump && directJump.type === 'verse') {
      const foundVerse = pool.find(item => item.surahNumber === directJump.surahNumber && item.ayahNumber === directJump.ayahNumber);
      if (foundVerse) {
        directJump.verseData = foundVerse;
      }
    }

    // 5. Evaluasi Pencarian Multi-Field & Pembobotan Skor
    const results = [];
    pool.forEach(item => {
      const transLower = (item.translation || '').toLowerCase();
      const latinLower = (item.latin || '').toLowerCase();
      const enLower = (item.translation_en || '').toLowerCase();
      const keywordsStr = (item.keywords || []).join(' ').toLowerCase();
      const arabicClean = normalizeArabic(item.arabic);

      let matchScore = 0;
      let matchedReason = '';

      if (directJump && directJump.type === 'verse' && item.surahNumber === directJump.surahNumber && item.ayahNumber === directJump.ayahNumber) {
        matchScore += 100;
        matchedReason = 'Ayat yang Anda tuju';
      }

      if (arabicQ && arabicQ.length >= 2 && arabicClean.includes(arabicQ)) {
        matchScore += 50;
        matchedReason = 'Potongan teks Arab cocok';
      }

      for (const term of uniqueTerms) {
        const termNorm = normalizeSpelling(term);
        if (transLower.includes(termNorm) || transLower.includes(term)) {
          matchScore += 25;
          matchedReason = `Terjemahan cocok: "${term}"`;
          break;
        }
        if (latinLower.includes(termNorm) || latinLower.includes(term)) {
          matchScore += 20;
          matchedReason = `Transliterasi latin cocok: "${term}"`;
          break;
        }
        if (keywordsStr.includes(termNorm) || keywordsStr.includes(term)) {
          matchScore += 15;
          matchedReason = `Topik / sinonim cocok: "${term}"`;
          break;
        }
        if (isEn && (enLower.includes(termNorm) || enLower.includes(term))) {
          matchScore += 20;
          matchedReason = `English translation match: "${term}"`;
          break;
        }
      }

      if (matchScore > 0) {
        results.push({ ...item, score: matchScore, matchedReason });
      }
    });

    results.sort((a, b) => b.score - a.score);

    this.state.searchResults = results;
    this.state.searchDirectJump = directJump;
    this.state.searchTerms = uniqueTerms;

    const resultsContainer = document.getElementById("searchResultsArea");
    if (resultsContainer) {
      resultsContainer.innerHTML = renderSearchResultsList(
        query,
        results,
        directJump,
        uniqueTerms,
        this.state.settings?.language || "id"
      );
    }
  }

  selectPrayerCity(cityId) {
    this.state.selectedPrayerCity = cityId;
    this.scheduleAllPrayerAlarms();
    this.render();
    if (this.state.currentScreen === 'prayer') {
      const city = INDONESIA_CITIES.find(c => c.id === cityId) || INDONESIA_CITIES[0];
      const qibla = calculateQiblaDirection(city.lat, city.lng);
      this.startCompassTracking(qibla);
    }
  }

  startCompassTracking(qiblaAngle) {
    this.state.currentQiblaAngle = Number(qiblaAngle) || 295.2;
    this.state.isCompassActive = true;
    this._lastCompassHeading = null;
    this._displayedCompassHeading = null;
    this._hasVibratedForAlignment = false;

    // 1. Prioritaskan Android Bridge native hardware sensor (Gyroscope + Magnetometer + Accelerometer)
    if (window.AndroidBridge && typeof window.AndroidBridge.startCompass === 'function') {
      try {
        window.AndroidBridge.startCompass();
      } catch (e) {
        console.warn('[Compass] AndroidBridge.startCompass error:', e);
      }
    }

    // 2. Standard HTML5 DeviceOrientation Event (untuk browser / PWA fallback)
    if (typeof window !== 'undefined') {
      if (this._orientationHandler) {
        window.removeEventListener('deviceorientationabsolute', this._orientationHandler, true);
        window.removeEventListener('deviceorientation', this._orientationHandler, true);
      }

      this._orientationHandler = (event) => {
        // Jika AndroidBridge aktif mengirim data, abaikan event web untuk menghindari data ganda
        if (this._lastAndroidBridgeHeadingTime && (Date.now() - this._lastAndroidBridgeHeadingTime < 1000)) {
          return;
        }

        let heading = null;
        if (typeof event.webkitCompassHeading !== 'undefined') {
          heading = event.webkitCompassHeading; // iOS Safari
        } else if (event.alpha !== null) {
          heading = (360 - event.alpha) % 360; // Android Chrome / WebView
        }

        if (heading !== null && !isNaN(heading)) {
          this.onCompassHeadingUpdate(heading);
        }
      };

      if ('ondeviceorientationabsolute' in window) {
        window.addEventListener('deviceorientationabsolute', this._orientationHandler, true);
      } else if ('ondeviceorientation' in window) {
        window.addEventListener('deviceorientation', this._orientationHandler, true);
      }
    }
  }

  stopCompassTracking() {
    this.state.isCompassActive = false;
    if (window.AndroidBridge && typeof window.AndroidBridge.stopCompass === 'function') {
      try {
        window.AndroidBridge.stopCompass();
      } catch (e) {}
    }
    if (typeof window !== 'undefined' && this._orientationHandler) {
      window.removeEventListener('deviceorientationabsolute', this._orientationHandler, true);
      window.removeEventListener('deviceorientation', this._orientationHandler, true);
      this._orientationHandler = null;
    }
  }

  onCompassHeadingUpdate(heading) {
    if (!this.state.isCompassActive) return;
    this._lastAndroidBridgeHeadingTime = Date.now();

    const normalizedHeading = (Number(heading) % 360 + 360) % 360;
    const qibla = this.state.currentQiblaAngle || 295.2;

    // Shortest-arc unwrapping untuk putaran halus tanpa melompat di sudut 0/360
    if (this._lastCompassHeading === null) {
      this._lastCompassHeading = normalizedHeading;
      this._displayedCompassHeading = normalizedHeading;
    } else {
      let diff = normalizedHeading - this._lastCompassHeading;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      this._displayedCompassHeading += diff;
      this._lastCompassHeading = normalizedHeading;
    }

    // Hitung selisih sudut ke arah Ka'bah
    let delta = (normalizedHeading - qibla + 360) % 360;
    if (delta > 180) delta -= 360;
    const absDelta = Math.abs(delta);
    const isAligned = absDelta <= 3.0; // Toleransi presisi ±3 derajat

    // Pembaruan DOM Kompas
    const discEl = document.getElementById('qiblaCompassDisc');
    const bezelEl = document.querySelector('.qibla-compass-bezel');
    const badgeEl = document.getElementById('qiblaStatusBadge');
    const statusTextEl = document.getElementById('qiblaStatusText');
    const headingTextEl = document.getElementById('qiblaHeadingText');

    if (discEl) {
      discEl.style.transform = `rotate(${-this._displayedCompassHeading}deg)`;
    }

    if (headingTextEl) {
      const cardinal = this.getCardinalDirection(normalizedHeading);
      headingTextEl.innerHTML = `${Math.round(normalizedHeading)}° (${cardinal})`;
    }

    if (bezelEl && badgeEl && statusTextEl) {
      if (isAligned) {
        bezelEl.classList.add('qibla-aligned');
        badgeEl.classList.add('aligned');
        statusTextEl.innerHTML = `🟢 <b>TEPAT MENGHADAP KA'BAH (${qibla.toFixed(1)}°)</b>`;

        if (!this._hasVibratedForAlignment) {
          this._hasVibratedForAlignment = true;
          if (typeof navigator !== 'undefined' && navigator.vibrate) {
            try { navigator.vibrate(40); } catch(e) {}
          }
        }
      } else {
        bezelEl.classList.remove('qibla-aligned');
        badgeEl.classList.remove('aligned');
        this._hasVibratedForAlignment = false;

        if (delta > 0) {
          statusTextEl.innerHTML = `↺ Putar HP <b>${Math.round(absDelta)}° ke Kiri</b>`;
        } else {
          statusTextEl.innerHTML = `↻ Putar HP <b>${Math.round(absDelta)}° ke Kanan</b>`;
        }
      }
    }
  }

  getCardinalDirection(deg) {
    const directions = ['Utara', 'Timur Laut', 'Timur', 'Tenggara', 'Selatan', 'Barat Daya', 'Barat', 'Barat Laut'];
    const idx = Math.round(((deg % 360) / 45)) % 8;
    return directions[idx];
  }

  openSettingsModal() {
    const modal = document.getElementById("settingsModalContainer");
    if (modal) {
      modal.innerHTML = renderSettingsModal(this.state.settings);
      const m = document.getElementById("settingsModal");
      if (m) m.classList.add("open");
    }
    this.updateBottomNav();
  }

  closeSettingsModal() {
    const m = document.getElementById("settingsModal");
    if (m) m.classList.remove("open");
    this.updateBottomNav();
  }

  openHadithModal(category = "all") {
    this.closeSettingsModal();
    this.state.hadithActiveCategory = category;
    this.state.hadithSearchQuery = "";
    const modal = document.getElementById("hadithModalContainer");
    if (modal) {
      modal.innerHTML = renderHadithModal(this.state.hadithActiveCategory, this.state.hadithSearchQuery, this.state.settings);
      const m = document.getElementById("hadithModal");
      if (m) m.classList.add("open");
    }
  }

  closeHadithModal() {
    const m = document.getElementById("hadithModal");
    if (m) m.classList.remove("open");
  }

  clearHadithSearch(category = "all") {
    this.filterHadiths(category, "");
    const inp = document.getElementById("hadithSearchInput");
    if (inp) {
      inp.value = "";
      inp.focus();
    }
  }

  filterHadiths(category, query) {
    this.state.hadithActiveCategory = category;
    this.state.hadithSearchQuery = query;

    const cardsContainer = document.getElementById("hadithCardsContainer");
    const countBadge = document.getElementById("hadithCountBadge");
    const clearBtn = document.getElementById("hadithSearchClearBtn");
    const chipsContainer = document.getElementById("hadithFilterChips");

    if (cardsContainer) {
      const filtered = filterHadithData(category, query);
      cardsContainer.innerHTML = renderHadithCardList(filtered, query, this.state.settings);
      if (countBadge) {
        countBadge.innerText = `${filtered.length} Hadits`;
      }
      if (clearBtn) {
        clearBtn.style.display = query ? "inline" : "none";
      }
      if (chipsContainer) {
        const chips = chipsContainer.querySelectorAll(".hadith-chip");
        chips.forEach(chip => {
          if (chip.getAttribute("data-category") === category) {
            chip.classList.add("active");
          } else {
            chip.classList.remove("active");
          }
        });
      }
    } else {
      const modal = document.getElementById("hadithModalContainer");
      if (modal) {
        modal.innerHTML = renderHadithModal(this.state.hadithActiveCategory, this.state.hadithSearchQuery, this.state.settings);
        const m = document.getElementById("hadithModal");
        if (m) m.classList.add("open");
      }
    }
  }

  copyHadith(id) {
    const hadith = SAHIH_HADITHS.find(h => h.id === Number(id));
    if (!hadith) return;

    const textToCopy = `[HADITS SHAHIH - ${hadith.narrator}]
Tema: ${hadith.topic} - "${hadith.title}"

${hadith.arabic ? hadith.arabic + '\n\n' : ''}"${hadith.translation}"

📌 ${hadith.sanad}
(Aplikasi Al-Qur'an Digital Indonesia)`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.showToast("📋 Kutipan hadits berhasil disalin ke clipboard!", "success");
      }).catch(() => {
        this.fallbackCopyText(textToCopy);
      });
    } else {
      this.fallbackCopyText(textToCopy);
    }
  }

  shareHadith(id) {
    const hadith = SAHIH_HADITHS.find(h => h.id === Number(id));
    if (!hadith) return;

    const shareText = `[HADITS SHAHIH - ${hadith.narrator}]
Tema: ${hadith.topic} - "${hadith.title}"

${hadith.arabic ? hadith.arabic + '\n\n' : ''}"${hadith.translation}"

📌 ${hadith.sanad}
(Aplikasi Al-Qur'an Digital Indonesia)`;

    if (navigator.share) {
      navigator.share({
        title: `Hadits Shahih: ${hadith.title}`,
        text: shareText
      }).catch(() => {});
    } else {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
      window.open(waUrl, '_blank');
      this.showToast("📤 Membuka tautan berbagi hadits...", "info");
    }
  }

  fallbackCopyText(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      this.showToast("📋 Kutipan hadits berhasil disalin ke clipboard!", "success");
    } catch (e) {
      this.showToast("Gagal menyalin hadits", "error");
    }
    document.body.removeChild(ta);
  }

  openKemenagModal() {
    const modal = document.getElementById("kemenagModalContainer");
    if (modal) {
      modal.innerHTML = renderKemenagInfoModal();
      const m = document.getElementById("kemenagModal");
      if (m) m.classList.add("open");
    }
  }

  closeKemenagModal() {
    const m = document.getElementById("kemenagModal");
    if (m) m.classList.remove("open");
  }

  openPrivacyModal() {
    const modal = document.getElementById("privacyModalContainer");
    if (modal) {
      const currentLang = (this.state && this.state.settings && this.state.settings.language) || 'id';
      modal.innerHTML = renderPrivacyModal(currentLang);
      const m = document.getElementById("privacyModal");
      if (m) setTimeout(() => m.classList.add("open"), 10);
    }
  }

  closePrivacyModal() {
    const m = document.getElementById("privacyModal");
    if (m) {
      m.classList.remove("open");
      setTimeout(() => {
        const modal = document.getElementById("privacyModalContainer");
        if (modal) modal.innerHTML = "";
      }, 300);
    }
  }

  async clearAllUserData() {
    const isEn = (this.state && this.state.settings && this.state.settings.language === 'en');
    const msg = isEn 
      ? "Are you sure you want to clear all offline Quran data, bookmarks, and settings? The app will reset to default."
      : "Apakah Anda yakin ingin menghapus seluruh data offline Al-Qur'an, bookmark, dan pengaturan? Aplikasi akan direset ke kondisi awal.";
    
    if (confirm(msg)) {
      try {
        await dbDeleteAllSurahs();
        if (typeof dbDeleteAllAudio === 'function') {
          await dbDeleteAllAudio();
        }
        localStorage.clear();
        this.showToast(isEn ? "All local data wiped successfully!" : "Semua data lokal berhasil dibersihkan!", "success");
        setTimeout(() => {
          window.location.reload();
        }, 600);
      } catch (err) {
        this.showToast("Gagal membersihkan data: " + err.message, "error");
      }
    }
  }

  toggleViewMode() {
    document.body.classList.toggle("full-width");
    const isFull = document.body.classList.contains("full-width");
    const btn = document.getElementById("viewModeToggleBtn");
    if (btn) btn.innerText = isFull ? "📱 Mode HP Mobile" : "💻 Mode Layar Lebar";
  }

  // ==========================================
  // Realtime Prayer Times Timer
  // ==========================================

  startPrayerClock() {
    let lastNotifiedKey = null;

    setInterval(() => {
      const city = INDONESIA_CITIES.find(c => c.id === this.state.selectedPrayerCity) || INDONESIA_CITIES[0];
      const now = new Date();
      const sched = calculatePrayerTimes(now, city.lat, city.lng, city.tz);
      const next = getNextPrayer(sched);

      this.state.nextPrayerInfo = {
        cityName: city.name,
        nextName: next.next.name,
        countdown: next.countdown,
        time: next.next.time
      };

      // 1. Perbarui jam di status bar jika ada
      const timeElem = document.getElementById("statusBarClock");
      if (timeElem) {
        timeElem.innerText = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      }

      // 2. Real-time update otomatis ke waktu berikutnya di Home Screen (Gambar 1)
      const homeNextElem = document.getElementById("homePrayerNextText") || document.querySelector(".prayer-mini-next");
      const homeTimeElem = document.getElementById("homePrayerTimeText") || document.querySelector(".prayer-mini-time");
      if (homeNextElem) {
        homeNextElem.innerHTML = `Menuju Waktu Sholat Berikutnya: <b>${next.next.name}</b> (${next.countdown})`;
      }
      if (homeTimeElem) {
        homeTimeElem.innerText = next.next.time;
      }

      // 3. Real-time update otomatis di Layar Jadwal Sholat jika sedang terbuka
      if (this.state.currentScreen === 'prayer') {
        const heroNext = document.getElementById("prayerHeroNext");
        const heroCountdown = document.getElementById("prayerHeroCountdown");
        if (heroNext) heroNext.innerText = `${next.next.name} • ${next.next.time}`;
        if (heroCountdown) heroCountdown.innerText = `⏳ ${next.countdown}`;

        const boxes = document.querySelectorAll(".prayer-box");
        boxes.forEach(box => {
          const nameEl = box.querySelector(".prayer-name");
          if (nameEl && nameEl.innerText.trim().startsWith(next.next.name)) {
            box.classList.add("active");
          } else {
            box.classList.remove("active");
          }
        });
      }

      // 4. Notifikasi bilah status atas HP saat waktu sholat tiba (Gambar 2 - tanpa suara adzan)
      const isNotifEnabled = typeof localStorage !== 'undefined' && localStorage.getItem('prayer_notif_enabled') === 'true';
      if (isNotifEnabled && next.passed) {
        const currentHourMin = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
        if (currentHourMin === next.passed.time && lastNotifiedKey !== next.passed.key + '_' + currentHourMin) {
          lastNotifiedKey = next.passed.key + '_' + currentHourMin;
          this.triggerSystemNotification(
            `🕌 Waktu ${next.passed.name} Telah Tiba`,
            `Waktu ${next.passed.name} (${next.passed.time}) untuk wilayah ${city.name} dan sekitarnya telah tiba.`
          );
        }
      }

      // Reschedule alarms daily at midnight
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        this.scheduleAllPrayerAlarms();
      }
    }, 1000);
  }

  // ==========================================
  // Main Render Routine
  // ==========================================

  render() {
    const mainContainer = document.getElementById("mainScreenArea");
    if (!mainContainer) return;

    // Pastikan tema selalu sinkron dengan state saat render
    const isDark = this.state.settings.theme === "dark";
    if (isDark) {
      document.body.classList.add("theme-dark", "dark-reader");
      document.body.classList.remove("theme-light");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("theme-dark", "dark-reader");
    }

    try {
      switch (this.state.currentScreen) {
        case "home":
          mainContainer.innerHTML = renderHomeScreen(this.state);
          break;
        case "reader":
          mainContainer.innerHTML = renderQuranReader(
            this.state.currentSurahData,
            this.state.settings,
            this.state.currentPlayingVerse,
            this.state.bookmarks,
            this.state.lastRead
          );
          break;
        case "surahList":
          mainContainer.innerHTML = renderSurahListModal(
            this.state.activeSurahListTab,
            this.state.searchQuery,
            this.state.settings?.language || "id",
            this.state.lastRead
          );
          const slModal = document.getElementById("surahListModal");
          if (slModal) slModal.classList.add("open");
          break;
        case "search":
          mainContainer.innerHTML = renderSearchModal(
            this.state.searchQuery,
            this.state.searchResults,
            this.state.searchDirectJump,
            this.state.searchTerms,
            this.state.settings?.language || "id"
          );
          const sModal = document.getElementById("searchModal");
          if (sModal) sModal.classList.add("open");
          break;
        case "prayer":
          mainContainer.innerHTML = renderPrayerTimesScreen(
            this.state.selectedPrayerCity,
            this.state.settings?.language || "id"
          );
          break;
        default:
          mainContainer.innerHTML = renderHomeScreen(this.state);
      }
    } catch (err) {
      console.error("Render error on screen " + this.state.currentScreen, err);
      try {
        mainContainer.innerHTML = renderHomeScreen(this.state);
      } catch (fallbackErr) {
        console.error("Fallback home render error:", fallbackErr);
      }
    }
    this.updateBottomNav();
  }

  // ==========================================
  // Modern Toast Notification System
  // ==========================================

  showToast(message, type = "info", duration = 3000) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `app-toast toast-${type}`;
    const borderCol = type === 'error' ? '#EF4444' : type === 'success' ? '#10B981' : type === 'warning' ? '#F59E0B' : '#F97316';
    toast.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      margin-top: 8px;
      background: rgba(17, 34, 51, 0.96);
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 600;
      border-radius: 12px;
      border-left: 4.5px solid ${borderCol};
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      backdrop-filter: blur(8px);
      pointer-events: auto;
      max-width: 90vw;
      transition: all 0.25s ease;
      animation: fadeInToast 0.25s ease-out;
    `;
    toast.innerHTML = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // ==========================================
  // Offline IndexedDB Quran Dataset Management
  // ==========================================

  async initOfflineDataset() {
    try {
      if (typeof dbSeedBundledSurahs === 'function') {
        await dbSeedBundledSurahs(OFFLINE_SURAHS, QURAN_SURAH_LIST);
      }
      if (typeof dbGetDatasetStatus === 'function') {
        this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
      }
    } catch (e) {
      console.warn("[OfflineDB] Init error:", e);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => {
        this.showToast("🌐 Koneksi internet aktif. Siap mengunduh sisa surat.", "success");
        this.updateOfflineModalUI();
      });
      window.addEventListener('offline', () => {
        this.showToast("⚡ Mode Offline: Membaca langsung dari IndexedDB tanpa internet.", "warning");
        this.updateOfflineModalUI();
      });
    }
  }

  async openOfflineModal() {
    try {
      if (typeof dbGetDatasetStatus === 'function') {
        this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
      }
      const qariId = this.state.selectedAudioQari || this.state.settings.qari || 'alafasy';
      if (typeof dbGetDownloadedSurahsForQari === 'function') {
        this.state.downloadedAudioSurahs = await dbGetDownloadedSurahsForQari(qariId, QURAN_SURAH_LIST);
      }
      if (typeof dbGetQariStorageEstimate === 'function') {
        this.state.audioStorageEstimate = await dbGetQariStorageEstimate(qariId);
      }
    } catch (e) {}

    const container = document.getElementById("offlineModalContainer");
    if (container) {
      container.innerHTML = renderOfflineDataModal(
        this.state.offlineDatasetStatus || {},
        this.state.isDownloadingAllSurahs,
        this.state.downloadProgress,
        this.state.offlineVerificationResult,
        this.state.settings?.language || "id",
        {
          activeTab: this.state.offlineActiveTab || 'text',
          selectedQari: this.state.selectedAudioQari || this.state.settings.qari || 'alafasy',
          qariList: QARI_LIST,
          downloadedSurahs: this.state.downloadedAudioSurahs || [],
          storageSizeMb: this.state.audioStorageEstimate?.sizeMb || "0.0",
          audioVersesCount: this.state.audioStorageEstimate?.versesCount || 0,
          isAudioDownloading: this.state.isAudioDownloading || false,
          audioProgress: this.state.audioDownloadProgress || {}
        },
        this.state.currentSurahData?.number || 1
      );
    }
  }

  closeOfflineModal() {
    const container = document.getElementById("offlineModalContainer");
    if (container) {
      container.innerHTML = "";
    }
    const homeBannerText = document.getElementById("homeOfflineSyncText");
    if (homeBannerText && this.state.offlineDatasetStatus) {
      homeBannerText.innerText = this.state.offlineDatasetStatus.isComplete 
        ? "✓ Data Offline: 114/114 Surat Siap (100%)" 
        : `Data Offline: ${this.state.offlineDatasetStatus.downloadedCount}/114 Surat Tersimpan`;
    }
  }

  updateOfflineModalUI() {
    const modal = document.getElementById("offlineDataModal");
    if (modal) {
      this.openOfflineModal();
    }
  }

  async toggleOfflineDownload() {
    if (this.state.isDownloadingAllSurahs) {
      this.pauseOfflineDownload();
    } else {
      await this.startOfflineDownload();
    }
  }

  pauseOfflineDownload() {
    if (this.state.downloadAbortController) {
      this.state.downloadAbortController.abort();
    }
    this.state.isDownloadingAllSurahs = false;
    this.showToast("⏸️ Unduhan data dijeda. Anda dapat melanjutkannya kapan saja.", "info");
    this.updateOfflineModalUI();
  }

  async startOfflineDownload() {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.showToast("⚠️ Perangkat sedang offline. Sambungkan internet untuk mengunduh dataset surat.", "warning");
      return;
    }

    // Ambil status integritas terkini untuk mendeteksi surat missing MAUPUN surat invalid
    let initialStatus = null;
    try {
      if (typeof dbGetDatasetStatus === 'function') {
        initialStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
      }
    } catch(e) {}

    const targetNumbers = (initialStatus && initialStatus.needDownloadNumbers) ? initialStatus.needDownloadNumbers : [];

    if (targetNumbers.length === 0 && initialStatus && initialStatus.isComplete) {
      this.showToast("✓ Seluruh 114 surat (6.236 ayat) sudah tersimpan lengkap dan valid di IndexedDB!", "success");
      this.state.offlineDatasetStatus = initialStatus;
      this.updateOfflineModalUI();
      return;
    }

    // Filter daftar surat yang perlu diunduh/diperbaiki (missing ATAU invalid)
    const surahsToProcess = QURAN_SURAH_LIST.filter(s => targetNumbers.includes(s.number));
    if (surahsToProcess.length === 0) {
      this.showToast("✓ Semua surat sudah tersimpan dan lolos verifikasi.", "success");
      return;
    }

    this.state.isDownloadingAllSurahs = true;
    this.state.downloadAbortController = new AbortController();
    const signal = this.state.downloadAbortController.signal;

    const totalToDownload = surahsToProcess.length;
    let completedInBatch = 0;
    let failedCount = 0;

    const initialValid = initialStatus ? initialStatus.validCount : 0;
    this.showToast(`📥 Memulai unduhan/perbaikan ${totalToDownload} surat ke database lokal...`, "info");
    this.updateOfflineModalUI();

    for (let i = 0; i < surahsToProcess.length; i++) {
      if (signal.aborted) {
        break;
      }

      const surahMeta = surahsToProcess[i];
      const sNum = surahMeta.number;
      const sName = surahMeta.name;
      const currentValid = initialValid + completedInBatch;
      const percent = Math.round((currentValid / 114) * 100);

      this.state.downloadProgress = {
        current: currentValid,
        total: 114,
        percent: percent,
        surahName: sName,
        statusText: `Mengunduh QS. ${sNum} ${sName} (${i + 1}/${totalToDownload}) • Total Valid: ${currentValid}/114...`
      };

      // Live update DOM modal jika sedang terbuka
      const pctEl = document.getElementById("offlineProgressPercent");
      const barEl = document.getElementById("offlineProgressBar");
      const textEl = document.getElementById("offlineStatusDetailText");
      const countEl = document.getElementById("offlineDownloadedCount");
      if (pctEl) pctEl.innerText = `${percent}%`;
      if (barEl) barEl.style.width = `${percent}%`;
      if (textEl) textEl.innerText = this.state.downloadProgress.statusText;
      if (countEl) countEl.innerHTML = `${currentValid} <span style="font-size: 12px; color: #94A3B8; font-weight: 600;">/ 114</span>`;

      // Mekanisme retry otomatis (maksimal 2x percobaan ulang)
      let downloadedOk = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        if (signal.aborted) break;
        try {
          const response = await fetch(`https://equran.id/api/v2/surat/${sNum}`, { signal });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const json = await response.json();
          
          if (json.code === 200 && json.data && Array.isArray(json.data.ayat)) {
            const apiData = json.data;
            const verses = apiData.ayat.map((item, idx) => ({
              number: item.nomorAyat || (idx + 1),
              arabic: item.teksArab,
              latin: item.teksLatin,
              translation: item.teksIndonesia,
              translation_en: item.teksInggris || ""
            }));

            const cleanSurah = {
              number: apiData.nomor,
              name: apiData.namaLatin || surahMeta.name,
              arabic: apiData.nama || surahMeta.arabic,
              meaning: apiData.arti || surahMeta.meaning,
              totalVerses: apiData.jumlahAyat || surahMeta.verses,
              audio: (apiData.audioFull && (apiData.audioFull['05'] || apiData.audioFull['01'])) || '',
              verses: verses
            };

            const validation = validateSurahIntegrity(cleanSurah, surahMeta);
            if (validation.valid) {
              let saveOk = false;
              if (typeof dbSaveSurah === 'function') {
                saveOk = await dbSaveSurah(cleanSurah, surahMeta);
              }
              if (saveOk) {
                this.state.cachedSurahsInMemory[sNum] = cleanSurah;
                completedInBatch++;
                downloadedOk = true;
                break; // Sukses, keluar loop retry
              } else {
                console.warn(`[OfflineDB] Gagal verifikasi simpan/baca-ulang QS. ${sNum} (attempt ${attempt})`);
              }
            } else {
              console.warn(`[OfflineDB] Validasi integritas gagal QS. ${sNum}: ${validation.reason}`);
            }
          }
        } catch (err) {
          if (signal.aborted) break;
          console.warn(`[OfflineDB] Percobaan ${attempt} gagal untuk QS. ${sNum}: ${err.message}`);
          if (attempt < 3) {
            await new Promise(r => setTimeout(r, 600)); // jeda sejenak sebelum retry
          }
        }
      }

      if (!downloadedOk && !signal.aborted) {
        failedCount++;
      }
    }

    this.state.isDownloadingAllSurahs = false;
    this.state.downloadAbortController = null;

    // Verifikasi integritas otomatis di akhir proses download
    let integrity = null;
    if (typeof dbVerifyIntegrity === 'function') {
      integrity = await dbVerifyIntegrity(QURAN_SURAH_LIST);
      this.state.offlineVerificationResult = integrity;
    }
    if (typeof dbGetDatasetStatus === 'function') {
      this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
    }

    if (integrity && integrity.isComplete) {
      this.showToast("🎉 Alhamdulillah! Seluruh 114 surat (6.236 ayat) terverifikasi 100% lengkap & valid offline!", "success", 5000);
    } else if (signal.aborted) {
      this.showToast(`⏸️ Unduhan dataset dijeda. (${completedInBatch} surat berhasil tersimpan).`, "info");
    } else {
      const validC = integrity ? integrity.validCount : completedInBatch;
      const invalidC = integrity ? integrity.invalidCount : 0;
      const totalV = integrity ? integrity.totalVerses : 0;
      this.showToast(`📊 Laporan: ${validC}/114 Surat Valid (${totalV} ayat), ${invalidC} Invalid, ${failedCount} Gagal.`, validC === 114 ? "success" : "warning", 5000);
    }

    this.updateOfflineModalUI();
    const homeBannerText = document.getElementById("homeOfflineSyncText");
    if (homeBannerText && this.state.offlineDatasetStatus) {
      homeBannerText.innerText = this.state.offlineDatasetStatus.isComplete 
        ? "✓ Data Offline: 114/114 Surat Siap (100%)" 
        : `Data Offline: ${this.state.offlineDatasetStatus.validCount}/114 Surat Tersimpan`;
    }
  }

  async downloadSingleSurah(surahNumber) {
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      this.showToast("⚠️ Perangkat sedang offline. Sambungkan internet untuk mengunduh surat ini.", "warning");
      return;
    }

    const surahMeta = QURAN_SURAH_LIST.find(s => s.number === Number(surahNumber));
    const sName = surahMeta ? surahMeta.name : `Surah ${surahNumber}`;
    this.showToast(`📥 Mengunduh QS. ${surahNumber} (${sName})...`, "info");

    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${surahNumber}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();

      if (json.code === 200 && json.data && Array.isArray(json.data.ayat)) {
        const apiData = json.data;
        const verses = apiData.ayat.map((item, idx) => ({
          number: item.nomorAyat || (idx + 1),
          arabic: item.teksArab,
          latin: item.teksLatin,
          translation: item.teksIndonesia,
          translation_en: item.teksInggris || ""
        }));

        const cleanSurah = {
          number: apiData.nomor,
          name: apiData.namaLatin || (surahMeta ? surahMeta.name : `Surah ${surahNumber}`),
          arabic: apiData.nama || (surahMeta ? surahMeta.arabic : ""),
          meaning: apiData.arti || (surahMeta ? surahMeta.meaning : ""),
          totalVerses: apiData.jumlahAyat || (surahMeta ? surahMeta.verses : verses.length),
          audio: (apiData.audioFull && (apiData.audioFull['05'] || apiData.audioFull['01'])) || '',
          verses: verses
        };

        const validation = validateSurahIntegrity(cleanSurah, surahMeta);
        if (!validation.valid) {
          this.showToast(`⚠️ Integritas QS. ${sName} tidak valid: ${validation.reason}`, "error");
          return;
        }
        let saveOk = false;
        if (typeof dbSaveSurah === 'function') {
          saveOk = await dbSaveSurah(cleanSurah, surahMeta);
        }
        if (!saveOk) {
          this.showToast(`⚠️ Gagal menyimpan atau verifikasi baca-ulang QS. ${sName}`, "error");
          return;
        }
        this.state.cachedSurahsInMemory[surahNumber] = cleanSurah;
        if (typeof dbGetDatasetStatus === 'function') {
          this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
        }
        this.showToast(`✅ QS. ${sName} berhasil divalidasi dan tersimpan permanen offline!`, "success");
        await this.loadSurah(surahNumber);
      }
    } catch (e) {
      this.showToast(`❌ Gagal mengunduh QS. ${sName}: ${e.message}`, "error");
    }
  }

  async verifyOfflineIntegrity() {
    this.showToast("🔍 Memeriksa integritas dan kelengkapan 6.236 ayat Al-Qur'an...", "info");
    try {
      if (typeof dbVerifyIntegrity === 'function') {
        const result = await dbVerifyIntegrity(QURAN_SURAH_LIST);
        this.state.offlineVerificationResult = result;
        if (result.isComplete) {
          this.showToast(`✅ Integritas data sempurna! 114 surat (${result.totalVerses} ayat) valid sesuai standar Kemenag RI.`, "success", 4000);
        } else if (result.invalidCount > 0) {
          this.showToast(`⚠️ Ditemukan ${result.invalidCount} surat tidak valid! Memperbaiki surat bawaan...`, "warning", 4000);
          if (typeof dbSeedBundledSurahs === 'function') {
            await dbSeedBundledSurahs(OFFLINE_SURAHS, QURAN_SURAH_LIST);
          }
          this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
        } else {
          this.showToast(`ℹ️ Tersedia ${result.validCount}/114 surat valid (${result.totalVerses} ayat). Kurang ${result.missingCount} surat.`, "info", 4000);
        }
        this.updateOfflineModalUI();
      }
    } catch (e) {
      this.showToast(`Gagal verifikasi: ${e.message}`, "error");
    }
  }

  async resetOfflineData() {
    const isEn = this.state.settings?.language === 'en';
    const msg = isEn 
      ? "Are you sure you want to delete and reset local Quran data? You will need internet to re-download." 
      : "Apakah Anda yakin ingin mereset database Al-Qur'an offline? Surat yang belum diunduh ulang akan memerlukan internet.";
    
    if (!confirm(msg)) return;

    try {
      if (typeof dbDeleteAllSurahs === 'function') {
        await dbDeleteAllSurahs();
      }
      this.state.cachedSurahsInMemory = {};
      if (typeof dbSeedBundledSurahs === 'function') {
        await dbSeedBundledSurahs(OFFLINE_SURAHS, QURAN_SURAH_LIST);
      }
      if (typeof dbGetDatasetStatus === 'function') {
        this.state.offlineDatasetStatus = await dbGetDatasetStatus(QURAN_SURAH_LIST);
      }
      this.state.offlineVerificationResult = null;
      this.showToast("🔄 Database berhasil direset ke surat bawaan. Siap untuk unduh ulang.", "info");
      this.updateOfflineModalUI();
    } catch (e) {
      this.showToast(`Gagal reset: ${e.message}`, "error");
    }
  }

  updateBottomNav() {
    const nav = document.getElementById("bottomNavBar");
    if (!nav) return;
    const isSettingsOpen = !!(document.getElementById("settingsModal") && document.getElementById("settingsModal").classList.contains("open"));
    const lang = this.state.settings?.language || "id";
    const isEn = lang === "en";

    let activeTab = "home";
    if (isSettingsOpen) {
      activeTab = "settings";
    } else if (this.state.currentScreen === "reader" || this.state.currentScreen === "surahList") {
      activeTab = "quran";
    } else if (this.state.currentScreen === "search") {
      activeTab = "search";
    } else if (this.state.currentScreen === "prayer") {
      activeTab = "prayer";
    } else {
      activeTab = "home";
    }

    nav.classList.remove("hidden-fullscreen");

    nav.innerHTML = `
      <button class="bottom-nav-item ${activeTab === 'home' ? 'active' : ''}" onclick="window.app.navigate('home')" title="${isEn ? 'Home' : 'Beranda'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span class="bottom-nav-label">${isEn ? 'Home' : 'Beranda'}</span>
      </button>

      <button class="bottom-nav-item ${activeTab === 'quran' ? 'active' : ''}" onclick="window.app.navigate('surahList')" title="${isEn ? 'Quran' : 'Al-Qur\'an'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
        </svg>
        <span class="bottom-nav-label">${isEn ? 'Quran' : "Al-Qur'an"}</span>
      </button>

      <button class="bottom-nav-item ${activeTab === 'search' ? 'active' : ''}" onclick="window.app.navigate('search')" title="${isEn ? 'Search' : 'Pencarian'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
        <span class="bottom-nav-label">${isEn ? 'Search' : 'Pencarian'}</span>
      </button>

      <button class="bottom-nav-item ${activeTab === 'prayer' ? 'active' : ''}" onclick="window.app.navigate('prayer')" title="${isEn ? 'Prayers' : 'Sholat'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3c-1.8 1.8-3 3.5-3 5.5h6c0-2-1.2-3.7-3-5.5Z"/>
          <path d="M5 8.5v12.5h14V8.5"/>
          <path d="M10 21v-5a2 2 0 0 1 4 0v5"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
        <span class="bottom-nav-label">${isEn ? 'Prayers' : 'Sholat'}</span>
      </button>

      <button class="bottom-nav-item ${activeTab === 'settings' ? 'active' : ''}" onclick="window.app.openSettingsModal()" title="${isEn ? 'Settings' : 'Pengaturan'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        <span class="bottom-nav-label">${isEn ? 'Settings' : 'Pengaturan'}</span>
      </button>
    `;
  }
}

  function init() {
    try {
      window.app = new QuranApp();
      window.app.render();
    } catch (err) {
      console.error("FATAL INITIALIZATION ERROR:", err);
      const main = document.getElementById("mainScreenArea");
      if (main) {
        main.innerHTML = `
          <div style="padding: 40px 20px; text-align: center; color: #FFF;">
            <div style="font-size: 32px; margin-bottom: 12px;">⚠️</div>
            <div style="font-size: 16px; font-weight: 700; color: #F97316; margin-bottom: 8px;">Gagal Memuat Aplikasi</div>
            <div style="font-size: 13px; color: #94A3B8; margin-bottom: 20px;">${err.message || 'Terjadi kesalahan saat inisialisasi.'}</div>
            <button onclick="localStorage.clear(); location.reload();" style="background: #F97316; color: #FFF; border: none; padding: 10px 20px; border-radius: 12px; font-weight: 700; cursor: pointer;">
              Reset Data & Muat Ulang
            </button>
          </div>
        `;
      }
    }

    // Pastikan scroll mouse wheel di mana saja pada layar desktop dapat menggulir konten aktif
    window.addEventListener('wheel', function(e) {
      const activeModal = document.querySelector('.full-modal.open .screen-container') || 
                          document.querySelector('.full-modal.open') ||
                          document.getElementById('mainScreenArea');
      if (activeModal) {
        activeModal.scrollTop += e.deltaY;
      }
    }, { passive: true });

    // Dukungan tombol navigasi keyboard (Panah Bawah, Panah Atas, PageDown, PageUp)
    window.addEventListener('keydown', function(e) {
      const activeScrollArea = document.querySelector('.full-modal.open .screen-container') || 
                               document.querySelector('.full-modal.open') ||
                               document.getElementById('mainScreenArea');
      if (!activeScrollArea) return;
      if (e.key === 'ArrowDown') {
        activeScrollArea.scrollTop += 60;
      } else if (e.key === 'ArrowUp') {
        activeScrollArea.scrollTop -= 60;
      } else if (e.key === 'PageDown' || e.key === ' ') {
        activeScrollArea.scrollTop += 260;
      } else if (e.key === 'PageUp') {
        activeScrollArea.scrollTop -= 260;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
