import fs from 'fs';
import path from 'path';

const css = fs.readFileSync('css/app.css', 'utf-8');
const js = fs.readFileSync('js/app.bundle.js', 'utf-8');

// Injeksi base64 Font Resmi KFGQPC Uthmanic Hafs (fonts.qurancomplex.gov.sa)
let embeddedFontCss = '';
const fontPath = 'assets/fonts/UthmanicHafs.woff2';
if (fs.existsSync(fontPath)) {
  const fontB64 = fs.readFileSync(fontPath).toString('base64');
  embeddedFontCss = `
    @font-face {
      font-family: 'UthmanicHafs';
      src: url('data:font/woff2;charset=utf-8;base64,${fontB64}') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'KFGQPC Uthmanic Script HAFS';
      src: url('data:font/woff2;charset=utf-8;base64,${fontB64}') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
  `;
}

const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover">
  <meta name="theme-color" content="#0B192C">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <title>Al-Qur'an Digital Indonesia - Standar Kemenag RI</title>
  <style>
${embeddedFontCss}
${css}

    /* Optimalisasi Mobile HP Penuh */
    @media (max-width: 600px) {
      body {
        margin: 0;
        padding: 0;
        background: #0B192C !important;
      }
      .app-viewport {
        max-width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important;
        max-height: 100dvh !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        padding-top: env(safe-area-inset-top, 0px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
        padding-left: env(safe-area-inset-left, 0px);
        padding-right: env(safe-area-inset-right, 0px);
      }
      .status-bar {
        display: none !important;
      }
      .desktop-controls-bar {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <main class="app-viewport">
    <!-- Status Bar untuk desktop view -->
    <header class="status-bar">
      <div style="display: flex; align-items: center; gap: 6px;">
        <span id="statusBarClock">11:24</span>
      </div>
      <div class="status-bar-icons">
        <span style="font-size: 10px; font-weight: 800;">5G</span>
        <span style="font-size: 11px; font-weight: 700; background: rgba(255,255,255,0.2); padding: 1px 5px; border-radius: 8px;">89</span>
      </div>
    </header>

    <section class="screen-container" id="mainScreenArea">
      <div style="padding: 60px 20px; text-align: center; color: #FFF;">
        <div style="font-size: 36px; margin-bottom: 12px;">📖</div>
        <div style="font-size: 16px; font-weight: 700; color: #F97316;">Memuat Al-Qur'an Digital Indonesia...</div>
      </div>
    </section>

    <div id="lastReadModalContainer"></div>
    <div id="settingsModalContainer"></div>
    <div id="offlineModalContainer"></div>
    <div id="kemenagModalContainer"></div>
    <div id="hadithModalContainer"></div>
    <div id="privacyModalContainer"></div>
    <div id="shareImageModalContainer"></div>
    <div id="toastContainer" class="toast-container"></div>

    <!-- Permanent Audio Elements for Murottal Playback -->
    <audio id="murottalAudio" style="display:none;" preload="none"></audio>
    <audio id="murottalPreloadAudio" style="display:none;" preload="none"></audio>

    <!-- Bottom Navigation Bar (Gaya Native APK) -->
    <nav class="bottom-nav-bar" id="bottomNavBar"></nav>
  </main>

  <aside class="desktop-controls-bar">
    <button id="viewModeToggleBtn" style="background: #1E3E62; border: 1px solid #3B82F6; color: #FFF; font-weight: 700; font-size: 12px; padding: 8px 14px; border-radius: 20px; cursor: pointer;" onclick="window.app && window.app.toggleViewMode()">
      💻 Layar Lebar
    </button>
    <button style="background: rgba(249, 115, 22, 0.2); border: 1px solid var(--color-orange-primary); color: var(--color-orange-primary); font-weight: 700; font-size: 12px; padding: 8px 14px; border-radius: 20px; cursor: pointer;" onclick="window.app && window.app.openKemenagModal()">
      🇮🇩 Standar Kemenag
    </button>
    <button style="background: #122238; border: 1.5px solid #F97316; color: #FFF; font-weight: 700; font-size: 12px; padding: 8px 14px; border-radius: 20px; cursor: pointer;" onclick="window.app && window.app.openSettingsModal()">
      ⚙️ Pengaturan
    </button>
  </aside>

  <script>
${js}
  </script>
</body>
</html>`;

fs.writeFileSync('alquran-mobile.html', html, 'utf-8');
console.log('✅ alquran-mobile.html successfully created!');

const androidPath = 'android/app/src/main/assets/www/index.html';
if (fs.existsSync('android/app/src/main/assets/www')) {
  fs.writeFileSync(androidPath, html, 'utf-8');
  console.log('✅ android/app/src/main/assets/www/index.html successfully updated!');
  
  // Salin assets/fonts ke android jika ada
  const androidFontsDir = 'android/app/src/main/assets/www/assets/fonts';
  if (!fs.existsSync(androidFontsDir)) {
    fs.mkdirSync(androidFontsDir, { recursive: true });
  }
  if (fs.existsSync('assets/fonts')) {
    const fontFiles = fs.readdirSync('assets/fonts');
    fontFiles.forEach(file => {
      const src = path.join('assets/fonts', file);
      const dst = path.join(androidFontsDir, file);
      if (fs.statSync(src).isFile()) {
        fs.copyFileSync(src, dst);
      }
    });
    console.log('✅ Android assets/fonts synchronized successfully!');
  }
}
console.log('File size:', (html.length / 1024).toFixed(1), 'KB');
