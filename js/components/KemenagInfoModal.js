/**
 * Komponen Modal Kepatuhan Standar Kemenag RI
 * Menjelaskan Rasm Utsmani Mushaf Standar Indonesia, Tanda Waqaf Resmi, dan Alur Pentashihan LPMQ
 */
import { KEMENAG_STANDARDS } from '../data/kemenagStandards.js';

export function renderKemenagInfoModal() {
  const { mushafType, rasmRules, waqafSigns, prayerCalculationStandard, commercialTashihGuide } = KEMENAG_STANDARDS;

  return `
    <div class="modal-backdrop" id="kemenagModal" onclick="if(event.target===this) window.app.closeKemenagModal()">
      <div class="modal-dialog-white" style="max-width: 400px; max-height: 85vh; overflow-y: auto; color: #0F172A;" onclick="event.stopPropagation()">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 22px;">🇮🇩</span>
            <div style="font-size: 17px; font-weight: 800; color: #0B192C;">Standar Kemenag RI</div>
          </div>
          <button style="background: none; border: none; font-size: 22px; color: #64748B; cursor: pointer;" onclick="window.app.closeKemenagModal()">&times;</button>
        </div>

        <p style="font-size: 12px; color: #475569; line-height: 1.5; margin-bottom: 16px;">
          Aplikasi ini dirancang mengikuti pedoman <b>Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ)</b> dan <b>Ditjen Bimas Islam Kementerian Agama RI</b>.
        </p>

        <!-- 1. Ketentuan Rasm Utsmani -->
        <div style="margin-bottom: 18px;">
          <div style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary); text-transform: uppercase; margin-bottom: 8px;">
            1. Teks Rasm Utsmani Standar Indonesia
          </div>
          <div style="background: #F8FAFC; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px; font-size: 12px; color: #334155;">
            ${rasmRules.map(r => `
              <div>
                <b>• ${r.title}:</b> ${r.desc}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. Tabel Tanda Waqaf Standar Indonesia -->
        <div style="margin-bottom: 18px;">
          <div style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary); text-transform: uppercase; margin-bottom: 8px;">
            2. Tanda Waqaf Mushaf Indonesia
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${waqafSigns.map(w => `
              <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 8px 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="font-family: var(--font-arabic); font-size: 20px; font-weight: 700; color: #0B192C; width: 32px; text-align: center;">
                    ${w.sign}
                  </span>
                  <div>
                    <div style="font-size: 12px; font-weight: 700; color: #0F172A;">${w.name}</div>
                    <div style="font-size: 11px; color: #64748B;">${w.rule}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Ketentuan Jadwal Sholat -->
        <div style="margin-bottom: 18px;">
          <div style="font-size: 13px; font-weight: 800; color: var(--color-orange-primary); text-transform: uppercase; margin-bottom: 8px;">
            3. Hisab Jadwal Sholat Kemenag RI
          </div>
          <div style="background: #F8FAFC; border-radius: 12px; padding: 12px; font-size: 12px; color: #334155; line-height: 1.6;">
            <div>• <b>Sudut Subuh:</b> ${prayerCalculationStandard.subuhZenith}</div>
            <div>• <b>Sudut Isya:</b> ${prayerCalculationStandard.isyaZenith}</div>
            <div>• <b>Ihtiyat (Pengaman):</b> ${prayerCalculationStandard.ihtiyat}</div>
            <div>• <b>Imsak:</b> ${prayerCalculationStandard.imsakRule}</div>
            <div>• <b>Ashar:</b> ${prayerCalculationStandard.asrMethod}</div>
          </div>
        </div>

        <!-- 4. Panduan Pentashihan Komersil -->
        <div style="margin-bottom: 20px;">
          <div style="font-size: 13px; font-weight: 800; color: #0B192C; text-transform: uppercase; margin-bottom: 8px;">
            4. Langkah Pentashihan untuk Penjualan Komersil
          </div>
          <div style="background: #FFF7ED; border: 1px solid #FED7AA; border-radius: 12px; padding: 12px; font-size: 12px; color: #9A3412; line-height: 1.5;">
            ${commercialTashihGuide.steps.map(s => `
              <div style="margin-bottom: 6px;">${s}</div>
            `).join('')}
          </div>
        </div>

        <button 
          style="width: 100%; background: #0B192C; color: #FFF; font-weight: 700; font-size: 13px; padding: 12px; border-radius: 12px; border: none; cursor: pointer;"
          onclick="window.app.closeKemenagModal()">
          Saya Mengerti
        </button>
      </div>
    </div>
  `;
}
