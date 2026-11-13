/**
 * Panduan Ketentuan Resmi Kementerian Agama Republik Indonesia (Kemenag RI)
 * Disusun untuk Legalitas dan Standar Komersial Aplikasi Al-Qur'an Indonesia
 */

export const KEMENAG_STANDARDS = {
  institution: "Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Balitbang Diklat Kemenag RI",
  legalBasis: [
    "Undang-Undang No. 11 Tahun 2020 tentang Cipta Kerja (Sektor Agama)",
    "Peraturan Menteri Agama (PMA) No. 44 Tahun 2016 tentang Penerbitan, Pentashihan dan Peredaran Mushaf Al-Qur'an",
    "Keputusan Menteri Agama (KMA) No. 25 Tahun 1984 tentang Penetapan Tiga Jenis Mushaf Al-Qur'an Standar Indonesia"
  ],
  mushafType: "Mushaf Standar Indonesia (MSI) Rasm Utsmani",
  rasmRules: [
    {
      title: "Rasm Utsmani Riwayat Hafsh",
      desc: "Mengikuti kaidah penulisan Rasm Utsmani riwayat Imam Hafsh dari Imam 'Ashim, dengan sistem tanda baca (dhabt) yang telah disesuaikan dengan pelafalan masyarakat muslim Indonesia."
    },
    {
      title: "Tanda Harakat (Dhabt)",
      desc: "Menggunakan tanda fathah, kasrah, dhammah, sukun berbentuk bulat kecil, dan tasydid standar LPMQ. Harakat tanwin memiliki dua bentuk: sejajar (idgham/ikhfa) dan bertingkat/rata (izhhar)."
    },
    {
      title: "Alif Khanjariyyah (Alif Kecil)",
      desc: "Menandakan mad thobi'i pada huruf yang tidak memiliki alif asli, dicetak di atas huruf hijaiyah sesuai standar Mushaf Standar Indonesia."
    }
  ],
  waqafSigns: [
    { sign: "مـ", code: "\u06D8", name: "Waqaf Lazim", rule: "Harus berhenti", example: "Tanda mim kecil berdiri, wajib berhenti untuk menghindari perubahan makna." },
    { sign: "قلى", code: "\u06D7", name: "Al-Waqfu Ula", rule: "Lebih utama berhenti", example: "Boleh washal (lanjut), namun waqaf (berhenti) jauh lebih diutamakan." },
    { sign: "ج", code: "\u06DA", name: "Waqaf Jaiz", rule: "Boleh berhenti atau lanjut", example: "Boleh berhenti dan boleh meneruskan bacaan tanpa keutamaan salah satunya." },
    { sign: "صلى", code: "\u06D6", name: "Al-Washlu Ula", rule: "Lebih utama lanjut", example: "Boleh berhenti, namun washal (melanjutkan bacaan) lebih utama." },
    { sign: "لا", code: "\u06D9", name: "Waqaf Mamnu'", rule: "Tidak boleh berhenti", example: "Dilarang berhenti jika bukan di akhir ayat, karena makna kalimat belum sempurna." },
    { sign: "∴ ∴", code: "\u06DB", name: "Waqaf Mu'anaqah", rule: "Berhenti di salah satu titik", example: "Terdapat dua pasang titik tiga, pembaca harus berhenti di salah satu tanda saja." },
    { sign: "س", code: "\u06DC", name: "Saktah", rule: "Berhenti sejenak tanpa bernafas", example: "Berhenti sekitar 1 alif (2 harakat) tanpa mengambil nafas, lalu melanjutkan." }
  ],
  translationStandard: {
    title: "Al-Qur'an dan Terjemahnya Edisi Penyempurnaan Kemenag RI",
    year: "Edisi Mutakhir LPMQ Kemenag RI",
    features: "Menggunakan ejaan Bahasa Indonesia yang disempurnakan (EYD/PUEBI), penyesuaian pilihan kata yang santun dan akurat, serta catatan kaki penjelasan kosakata mutasyabihat."
  },
  prayerCalculationStandard: {
    authority: "Direktorat Urusan Agama Islam dan Pembinaan Syariah (Ditjen Bimas Islam Kemenag RI)",
    subuhZenith: "110.0° (Sudut Depresi 20.0°)",
    isyaZenith: "108.0° (Sudut Depresi 18.0°)",
    ihtiyat: "+2 Menit Waktu Pengaman",
    imsakRule: "10 Menit sebelum Adzan Subuh berkumandang",
    asrMethod: "Madzhab Syafi'i (Standar Mayoritas Umat Islam Nusantara)"
  },
  commercialTashihGuide: {
    title: "Panduan Sertifikasi / Tashih Digital untuk Penjualan Komersil",
    steps: [
      "1. Pengajuan Surat Permohonan Pentashihan ke Kepala Lajnah Pentashihan Mushaf Al-Qur'an (LPMQ) Kemenag RI di Gedung Bayt Al-Qur'an TMII Jakarta.",
      "2. Mengirimkan dummy atau master file digital (PDF / APK / Database) seluruh 30 Juz.",
      "3. Proses Verifikasi dan Audit teks oleh Tim Pentashih LPMQ Kemenag RI.",
      "4. Terbitnya Surat Tanda Tashih Resmi (STT) bersertifikat dan ber-QR Code resmi.",
      "5. Pencantuman Tanda Tashih Kemenag RI di halaman About/Lisensi aplikasi saat rilis di Play Store / App Store."
    ]
  }
};
