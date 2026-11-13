/**
 * Komponen Modal Dialog Terakhir Baca
 * Mereplikasi tampilan Tampilan.3.jpeg:
 * - Card Dialog Putih Melengkung Elegan
 * - Judul: "QS. Al-Fatihah: Ayat 1"
 * - Opsi 1: "Lihat sebagai Surah"
 * - Opsi 2: "Lihat sebagai Juz"
 */

export function renderLastReadModal(lastRead, language = "id") {
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
