/**
 * Komponen Modal Kumpulan Hadits Shahih (Bukhari & Muslim)
 * Mendukung pencarian real-time cerdas dengan penyorotan (highlight),
 * filter chip tematik & perawi (Bukhari & Muslim), font Georgia untuk terjemahan,
 * serta fitur Salin dan Bagikan.
 */

import { SAHIH_HADITHS } from '../data/hadithData.js';
import { cleanQuranArabic } from './QuranReader.js';

export const HADITH_CATEGORIES = [
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

export function highlightHadithText(text, query) {
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

export function filterHadithData(activeCategory = "all", searchQuery = "") {
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

export function renderHadithCardList(filteredHadiths, query = "", settings = {}) {
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

export function renderHadithModal(activeCategory = "all", searchQuery = "", settings = {}) {
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
