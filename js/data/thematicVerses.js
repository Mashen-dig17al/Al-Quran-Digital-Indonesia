/**
 * Data Indeks Tematik, Ayat Pilihan Offline, Normalisasi Ejaan & Kamus Sinonim
 * Standar Rasm Utsmani & Terjemahan Kemenag RI
 */

// Helper: Hapus Harakat / Tashkeel dari Teks Arab (Regex Unicode)
export function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
}

// Helper: Normalisasi Huruf Arab untuk Pencarian Fleksibel
export function normalizeArabic(text) {
  if (!text) return '';
  return removeHarakat(text)
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[\s\u200C-\u200F]+/g, ' ')
    .trim();
}

// Normalisasi Ejaan Kata Serapan Bahasa Indonesia
export const SPELLING_REPLACEMENTS = [
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

export function normalizeSpelling(text) {
  if (!text) return '';
  let str = text.toLowerCase();
  for (const [pattern, replacement] of SPELLING_REPLACEMENTS) {
    str = str.replace(pattern, replacement);
  }
  return str;
}

// Kamus Sinonim & Konteks (Semantic Mapping)
export const SYNONYM_DICTIONARY = {
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
export const THEMATIC_CATEGORIES = [
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
export const THEMATIC_VERSES = [
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
