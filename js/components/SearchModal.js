/**
 * Komponen Pencarian Al-Qur'an (Search Screen)
 * Fitur Multi-Search, Direct Jump (Surah:Ayat & Nama Surah),
 * Smart Search (Normalisasi Ejaan & Kamus Sinonim Lokal),
 * dan Indeks Tematik Terstruktur 6 Kategori.
 */
import { QURAN_SURAH_LIST } from '../data/quranMetadata.js';
import { THEMATIC_CATEGORIES } from '../data/thematicVerses.js';
import { cleanQuranArabic } from './QuranReader.js';
import { getSurahMeaning } from '../data/i18n.js';

export function renderSearchModal(query = "", results = [], directJump = null, searchTerms = [], language = "id") {
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

export function renderSearchResultsList(query, results = [], directJump = null, searchTerms = [], language = "id") {
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
export function highlightMatch(text, terms) {
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
