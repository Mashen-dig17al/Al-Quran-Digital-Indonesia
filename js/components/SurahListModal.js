/**
 * Komponen Daftar 114 Surah & 30 Juz
 * Navigasi komprehensif dengan pencarian instan dan filter tab
 */
import { QURAN_SURAH_LIST, QURAN_JUZ_LIST } from '../data/quranMetadata.js';
import { getSurahMeaning } from '../data/i18n.js';

export function renderSurahListModal(activeTab = "surah", searchQuery = "", language = "id", lastRead = null) {
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
