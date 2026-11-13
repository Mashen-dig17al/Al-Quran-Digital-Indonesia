/**
 * Al-Qur'an Indonesia Pro - Main Application Controller
 * Mengatur Navigasi, Audio Player, State Management, Local Storage & Renderer
 */
import { QURAN_SURAH_LIST } from './data/quranMetadata.js';
import { OFFLINE_SURAHS } from './data/offlineSurahs.js';
import { getSurahData, validateSurahIntegrity } from './api/quranApi.js';
import { INDONESIA_CITIES, calculatePrayerTimes, calculateQiblaDirection, getNextPrayer } from './data/prayerTimes.js';
import { renderHomeScreen } from './components/HomeScreen.js';
import { renderQuranReader, cleanQuranArabic } from './components/QuranReader.js';
import { renderLastReadModal } from './components/LastReadModal.js';
import { renderSurahListModal } from './components/SurahListModal.js';
import { renderSearchModal, renderSearchResultsList } from './components/SearchModal.js';
import { renderPrayerTimesScreen } from './components/PrayerTimesScreen.js';
import { renderSettingsModal, QARI_LIST } from './components/SettingsModal.js';
import { renderHadithModal, renderHadithCardList, filterHadithData } from './components/HadithModal.js';
import { SAHIH_HADITHS } from './data/hadithData.js';
import { renderKemenagInfoModal } from './components/KemenagInfoModal.js';
import { renderPrivacyModal } from './components/PrivacyModal.js';
import { 
  dbGetSurah, 
  dbSaveSurah, 
  dbSaveAllSurahs, 
  dbGetAllSurahs, 
  dbGetDownloadedSurahNumbers, 
  dbDeleteAllSurahs, 
  dbGetDatasetStatus, 
  dbVerifyIntegrity, 
  dbSeedBundledSurahs 
} from './data/quranDb.js';
import { renderOfflineDataModal, renderVerificationResultHtml } from './components/OfflineDataModal.js';
import { t, getSurahMeaning } from './data/i18n.js';
import { 
  openAudioDB,
  dbSaveVerseAudio, 
  dbGetVerseAudio, 
  dbHasVerseAudio, 
  dbGetSurahAudioCount, 
  dbIsSurahAudioDownloaded, 
  dbGetDownloadedSurahsForQari, 
  dbGetQariStorageEstimate, 
  dbDeleteSurahAudio, 
  dbDeleteAllAudioForQari, 
  dbDeleteAllAudio, 
  fetchAudioWithFallback 
} from './data/quranAudioDb.js';
import { 
  removeHarakat, 
  normalizeArabic, 
  normalizeSpelling, 
  SYNONYM_DICTIONARY, 
  THEMATIC_CATEGORIES, 
  THEMATIC_VERSES 
} from './data/thematicVerses.js';

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

// Inisialisasi Aplikasi Saat Window Ready
window.addEventListener("DOMContentLoaded", () => {
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
});
