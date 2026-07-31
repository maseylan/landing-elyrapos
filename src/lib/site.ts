// ponytail: satu tempat untuk semua konten landing — ganti angka/testimoni/WA di sini

export const SITE = {
  name: "Elyra POS",
  appUrl: "https://elyrapos.my.id",
  registerUrl: "https://elyrapos.my.id/register",
  // TODO: ganti dengan nomor WhatsApp asli (format internasional tanpa +)
  whatsapp: "6285163675175",
  whatsappText: "Halo! Saya ingin mengetahui Elyra POS lebih lanjut.",
};

export const NAV_MENUS = [
  {
    label: "Layanan",
    children: [
      {
        group: "Jualan Offline",
        items: [
          "Point of Sale",
          "Manajemen Stok",
          "Manajemen Meja",
          "Manajemen Karyawan",
        ],
      },
      {
        group: "Lainnya",
        items: ["Loyalty & Promosi", "Laporan & Analitik"],
      },
    ],
  },
  {
    label: "Solusi Bisnis",
    children: [
      {
        group: "",
        items: [
          { label: "Restoran", href: "/restoran" },
          { label: "Kedai Kopi", href: "/kedai-kopi" },
          { label: "Retail", href: "/retail" },
        ],
      },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Harga", href: "/pricing" },
  { label: "Hubungi Kami", href: `https://wa.me/${SITE.whatsapp}` },
  { label: "FAQ", href: "/faq" },
];

export const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80",
    title: "Semua Kebutuhan Transaksi Bisnis, Cukup Satu Aplikasi",
    subtitle: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1920&q=80",
    title: "Kendalikan Usaha Lebih Cepat dan Lebih Lincah",
    subtitle:
      "Pantau stok dan kinerja usaha secara akurat dari laporan real-time, lalu ambil keputusan tanpa menunggu lama.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    title: "Semua Data Usaha Terpantau dalam Satu Layar",
    subtitle:
      "Stok antar outlet, promosi pelanggan, dan laporan transaksi — semuanya tampil ringkas di satu sistem.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80",
    title: "Aplikasi Kasir yang Menyesuaikan Cara Kerja Bisnis Anda",
    subtitle:
      "Satu sistem yang fleksibel untuk berbagai jenis usaha. Atur sesuai kebutuhan, tanpa repot.",
  },
];

export const FEATURE_VIDEO = {
  image:
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1280&q=80",
  title: "Pantau Usaha dengan Sat-set!",
  body: "Dengan Backoffice Elyra POS, operasional dan keuangan usaha Anda lebih tertata setiap hari.",
  items: [
    "Terima pesanan dine-in, takeaway, maupun online dalam satu alur.",
    "Atur seluruh operasional usaha langsung dari Backoffice yang ringkas.",
    "Gali wawasan dari data penjualan yang selalu terbarui.",
  ],
};

export const FEATURES = [
  {
    eyebrow: "Elyra Point of Sale",
    title: "Pusatkan pencatatan transaksi Anda dengan Aplikasi Kasir Elyra",
    body: "Setiap transaksi menyimpan informasi berharga — dari produk favorit hingga jam sibuk. Elyra POS merangkumnya menjadi data siap pakai untuk menjual lebih banyak.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80",
    link: { label: "Pelajari", href: "#" },
  },
  {
    eyebrow: "Manajemen Stok",
    title: "Stok semua outlet terlihat jelas, tanpa pusing",
    body: "Ikuti pergerakan stok setiap saat, dapatkan peringatan saat barang hampir habis, dan samakan persediaan antar outlet cukup dari satu layar.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1280&q=80",
    link: { label: "Pelajari", href: "#" },
    reversed: true,
  },
  {
    eyebrow: "Manajemen Meja",
    title: "Denah meja dan pesanan jadi cepat dan tepat",
    body: "Terima pesanan dine-in, takeaway, sampai delivery dengan denah meja interaktif yang memudahkan kru Anda bekerja.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1280&q=80",
    link: { label: "Pelajari", href: "#" },
  },
];

export const FULL_BANNERS = [
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
    title: "Satu aplikasi untuk pesanan dine-in, dan takeaway",
    body: "Pesanan dari kanal mana pun tiba di alur kasir yang sama. Praktis, tanpa alur ganda.",
    link: { label: "Pelajari", href: "#" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    title: "Siap Mendampingi Jaringan Usaha yang Lebih Besar",
    body: "Kami mendampingi jaringan toko dan ritel dengan solusi POS yang disesuaikan serta tim pendamping khusus.",
    link: { label: "Konsultasi sekarang!", href: `https://wa.me/${SITE.whatsapp}` },
  },
];

export const MERCHANTS = [
  {
    name: "Restoran",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    href: "/restoran",
  },
  {
    name: "Kedai Kopi",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80",
    href: "/kedai-kopi",
  },
  {
    name: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    href: "/retail",
  },
];

export const STATS = [
  { value: "1+", label: "Tahun" },
  { value: "10+", label: "Area" },
  { value: "1K+", label: "Pebisnis" },
  { value: "1Jt+", label: "Total Transaksi" },
];

export const TESTIMONIALS = [
  {
    name: "Rizky Pratama",
    role: "Owner of Warung Kopi Senja",
    quote:
      "Kami memakai Elyra POS untuk 3 outlet sekaligus dan semuanya berjalan mulus. Dashboard real-time membuat saya bisa memantau penjualan dari mana pun saya berada.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dewi Lestari",
    role: "Owner of Bakery Lestari",
    quote:
      "Laporan stok yang rapi memberi tahu kapan barang harus diisi ulang dan jam berapa toko paling ramai. Operasional jauh lebih teratur dari sebelumnya.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Andi Wijaya",
    role: "Owner of Newsroom Café",
    quote:
      "Antrean pelanggan lebih cepat, laporan lengkap, dan saya hafal pelanggan yang datang rutin. Fitur loyalty-nya benar-benar terasa bedanya.",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Apa itu Elyra POS?",
    answer:
      "Elyra POS adalah aplikasi kasir (Point of Sale) berbasis cloud. Seluruh transaksi, stok, dan laporan usaha tersimpan terpusat dan bisa diakses kapan saja dari perangkat mana pun secara real-time.",
  },
  {
    question: "Bagaimana cara mulai memakai aplikasi kasir Elyra?",
    answer:
      "Daftar dulu di elyrapos.my.id dan verifikasi email Anda — ruang usaha langsung disiapkan otomatis. Setelah masuk, tinggal atur produk, buat outlet, lalu mulai bertransaksi.",
  },
  {
    question: "Berapa biaya berlangganan Elyra POS?",
    answer:
      "Ada paket Free untuk langkah awal, lalu Pro dan Enterprise untuk usaha yang terus tumbuh — lengkap dengan fitur lanjutan seperti program loyalty dan promosi.",
  },
  {
    question: "Bagaimana cara mendaftar Elyra POS?",
    answer:
      "Buka elyrapos.my.id/register, isi data usaha Anda, lalu verifikasi email. Butuh panduan? Tim kami siap membantu lewat WhatsApp.",
  },
];

export const SEO_ARTICLE = {
  title: "Tentang Aplikasi Kasir",
  paragraphs: [
    {
      heading: "Aplikasi Kasir Cloud: Transaksi Lancar, Efisiensi Naik",
      body: "Aplikasi kasir berbasis cloud mencatat setiap transaksi penjualan secara digital dan otomatis. Karena datanya tersimpan di server, Anda bisa memantau penjualan dari mana saja asalkan ada koneksi internet.",
    },
    {
      heading: "Aplikasi Kasir vs Mesin Kasir Konvensional",
      body: "Kalau mesin kasir konvensional cuma menghitung nominal, aplikasi kasir modern mengelola lebih banyak: produk, stok, diskon, sampai laporan laba rugi — semuanya dalam satu sistem yang mudah dipakai kasir maupun pemilik usaha.",
    },
    {
      heading: "Mengelola Penjualan Offline dan Online",
      body: "Dengan Elyra POS, penjualan di outlet dan pesanan jarak jauh berjalan dalam satu alur yang sama. Laporan langsung terlihat real-time, jadi keputusan bisnis bisa diambil lebih cepat.",
    },
  ],
};

export const FOOTER_COLUMNS = [
  {
    title: "Layanan",
    links: [
      { label: "Point of Sale", href: "#layanan" },
      { label: "Manajemen Stok", href: "#layanan" },
      { label: "Manajemen Meja", href: "#layanan" },
      { label: "Manajemen Karyawan", href: "#layanan" },
      { label: "Loyalty & Promosi", href: "#layanan" },
    ],
  },
  {
    title: "Solusi Bisnis",
    links: [
      { label: "Restoran", href: "/restoran" },
      { label: "Kedai Kopi", href: "/kedai-kopi" },
      { label: "Retail", href: "/retail" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Informasi Perusahaan", href: "#" },
      { label: "Karir", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Hubungi Kami", href: `https://wa.me/${SITE.whatsapp}` },
    ],
  },
];

// TODO: ganti harga placeholder dengan harga asli Elyra POS
const WA_DEMO_HREF = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappText)}`;

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "Gratis",
    desc: "Untuk operasional bisnis yang baru bertumbuh",
    popular: false,
    cta: { label: "Coba Gratis", href: SITE.appUrl },
  },
  {
    name: "Pro",
    price: "Rp499.000",
    desc: "Fitur lengkap untuk bisnis yang ingin lebih efisien",
    popular: true,
    cta: { label: "Jadwalkan Demo", href: WA_DEMO_HREF },
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    desc: "Solusi menyeluruh untuk bisnis berskala besar",
    popular: false,
    cta: { label: "Hubungi Kami", href: WA_DEMO_HREF },
  },
];
export const PRICING_PER = "Per outlet/bulan";

// nilai sel: "check" | "x" | teks bebas
export const PRICING_FEATURES = [
  {
    title: "POS Dasar",
    rows: [
      { name: "Aplikasi Kasir (POS)", values: ["check", "check", "check"] },
      { name: "Laporan & Dashboard Real-Time", values: ["check", "check", "check"] },
      { name: "Manajemen Stok", values: ["check", "check", "check"] },
      { name: "Promo & Diskon", values: ["check", "check", "check"] },
      {
        name: "Manajemen Karyawan",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
    ],
  },
  {
    title: "Penerimaan Pembayaran",
    rows: [{ name: "E-Wallet & QRIS", values: ["check", "check", "check"] }],
  },
  {
    title: "Operasional Toko Lanjutan",
    rows: [
      { name: "Manajemen Meja & Denah", values: ["check", "check", "check"] },
      { name: "Manajemen Bahan Baku", values: ["check", "check", "check"] },
      { name: "Inventori Lanjutan", values: ["check", "check", "check"] },
    ],
  },
  {
    title: "Manajemen Hubungan Pelanggan",
    rows: [
      { name: "Struk Email", values: ["x", "check", "check"] },
      { name: "Struk SMS", values: ["x", "check", "check"] },
      {
        name: "Database Pelanggan",
        values: ["Unlimited", "Unlimited", "Unlimited"],
      },
      { name: "Program Loyalty", values: ["check", "check", "check"] },
    ],
  },
  {
    title: "Dukungan",
    rows: [
      { name: "Edukasi & Pelatihan Online", values: ["x", "check", "check"] },
      { name: "Setup & Pelatihan Offline", values: ["x", "check", "check"] },
      { name: "Call Centre", values: ["x", "check", "check"] },
      { name: "Live Chat & WhatsApp", values: ["check", "check", "check"] },
    ],
  },
];

// items: { q, a: paragraf[], steps?: langkah bernomor }
export const FAQ_TABS = [
  {
    id: "pos",
    title: "Elyra POS",
    subs: [
      {
        name: "Pertanyaan Umum",
        items: [
          {
            q: "Apa itu Elyra POS?",
            a: [
              "Elyra POS adalah aplikasi kasir berbasis cloud yang mencatat setiap transaksi toko Anda secara digital. Laporannya lengkap — transaksi harian, manajemen stok, promosi, hingga dashboard real-time — semuanya dalam satu layanan.",
            ],
          },
          {
            q: "Tipe bisnis seperti apa yang cocok menggunakan Elyra POS?",
            a: [
              "Hampir semua jenis usaha bisa memakai Elyra POS: FnB, retail, penyedia jasa, bisnis yang baru mulai, sampai usaha bercabang banyak. Daftar dan coba gratis; tim kami akan menunjukkan fitur yang paling cocok untuk bisnis Anda.",
            ],
          },
          {
            q: "Apakah data usaha saya aman?",
            a: [
              "Data setiap usaha disimpan terpisah di server cloud kami dan hanya bisa diakses lewat login akun terverifikasi. Hak akses tiap pengguna — owner, supervisor, kasir — bisa dibatasi sesuai perannya.",
            ],
          },
          {
            q: "Apa yang harus saya siapkan untuk menggunakan Elyra POS?",
            a: [
              "Cukup perangkat dengan browser modern (Chrome, Edge, atau Safari) dan koneksi internet. Aplikasi kasir dan backoffice bisa dibuka dari ponsel, tablet, maupun desktop.",
            ],
          },
          {
            q: "Apakah saya harus membayar untuk menggunakan Elyra POS?",
            a: [
              "Ada langganan bulanan atau tahunan dengan tiga pilihan: Free, Pro, dan Enterprise. Bandingkan paket dan fiturnya di halaman Harga kami.",
            ],
          },
          {
            q: "Bagaimana cara mulai menggunakan Elyra POS?",
            a: [
              "Daftar di elyrapos.my.id/register, verifikasi email, dan ruang usaha Anda siap otomatis. Setelah masuk, Anda tinggal mengatur produk dan outlet untuk mulai bertransaksi.",
            ],
          },
          {
            q: "Apakah saya bisa mendapatkan diskon atau promo jika berlangganan?",
            a: [
              "Setelah mendaftar program coba gratis, tim kami akan menghubungi Anda. Di sana Anda bisa bertanya tentang diskon atau promo yang sedang berjalan.",
            ],
          },
        ],
      },
      {
        name: "Cara Berlangganan",
        items: [
          {
            q: "Elyra POS",
            a: [],
            steps: [
              "Daftar akun pada website kami di elyrapos.my.id.",
              "Verifikasi email Anda dan tunggu ruang usaha disiapkan secara otomatis.",
              "Masuk pada backoffice dan pilih paket Free, Pro, atau Enterprise di halaman Harga.",
              "Lakukan pembayaran sesuai pilihan langganan bulanan atau tahunan.",
              "Butuh bantuan proses pembayaran? Hubungi kami via WhatsApp.",
            ],
          },
        ],
      },
      {
        name: "Cara Menggunakan",
        items: [
          {
            q: "Elyra POS",
            a: ["Anda hanya perlu melakukan 3 langkah mudah ini untuk memulai:"],
            steps: [
              "Login ke backoffice dari browser di ponsel, tablet, atau desktop Anda.",
              "Tambahkan produk dan outlet usaha Anda.",
              "Mulai transaksi di aplikasi kasir.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "meja",
    title: "Manajemen Meja",
    subs: [
      {
        name: "Pertanyaan Umum",
        items: [
          {
            q: "Apa itu Manajemen Meja?",
            a: [
              "Manajemen Meja membantu bisnis kuliner mengatur meja lewat denah interaktif: pindah meja, gabung meja, sampai memindahkan pesanan antar meja — semua terlihat dalam satu layar.",
            ],
          },
          {
            q: "Apakah Manajemen Meja tersedia di semua paket?",
            a: [
              "Fitur meja & denah tersedia di paket Pro dan Enterprise. Lihat perbandingan lengkapnya di halaman Harga.",
            ],
          },
          {
            q: "Bagaimana cara kerja dine-in dengan meja?",
            a: [
              "Kasir membuka shift, memilih meja pada denah, menambahkan pesanan, lalu memproses pembayaran saat pelanggan selesai. Pesanan satu meja tetap terkelompok sampai meja ditutup.",
            ],
          },
        ],
      },
      {
        name: "Cara Menggunakan",
        items: [
          {
            q: "Bagaimana alur pemesanan dine-in?",
            a: [],
            steps: [
              "Kasir membuka shift di aplikasi kasir.",
              "Pelanggan datang dan memilih meja yang tersedia.",
              "Kasir memilih meja pada denah dan menambahkan pesanan.",
              "Pesanan diproses dan dihidangkan ke pelanggan.",
              "Saat pelanggan selesai, kasir memproses pembayaran dan menutup meja.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "karyawan",
    title: "Karyawan & Outlet",
    subs: [
      {
        name: "Pertanyaan Umum",
        items: [
          {
            q: "Apa itu Manajemen Karyawan?",
            a: [
              "Buat akun untuk setiap kasir dengan PIN masing-masing, batasi akses sesuai peran (owner, supervisor, kasir), dan pantau aktivitas karyawan dari backoffice.",
            ],
          },
          {
            q: "Berapa jumlah karyawan yang bisa saya daftarkan?",
            a: [
              "Tergantung paket Anda: hingga 5 karyawan per outlet untuk Starter, hingga 10 untuk Pro, dan hingga 20 untuk Enterprise.",
            ],
          },
          {
            q: "Bagaimana sistem shift bekerja?",
            a: [
              "Setiap kasir membuka shift sebelum bertransaksi dan menutupnya di akhir sesi. Setoran dihitung otomatis dari transaksi shift tersebut dan tercatat di laporan.",
            ],
          },
          {
            q: "Apakah Elyra POS mendukung banyak outlet?",
            a: [
              "Ya. Setiap outlet punya stok, karyawan, dan laporan terpisah, sementara owner tetap bisa melihat seluruh outlet dalam satu dashboard.",
            ],
          },
        ],
      },
      {
        name: "Cara Menggunakan",
        items: [
          {
            q: "Bagaimana menambahkan karyawan?",
            a: [],
            steps: [
              "Login sebagai owner di backoffice.",
              "Buat outlet dan tambahkan karyawan dengan PIN masing-masing.",
              "Karyawan login ke aplikasi kasir menggunakan PIN dan membuka shift.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "laporan",
    title: "Laporan & Analitik",
    subs: [
      {
        name: "Pertanyaan Umum",
        items: [
          {
            q: "Laporan apa saja yang tersedia?",
            a: [
              "Laporan penjualan harian dan per periode, per produk, per shift, per karyawan, sampai ringkasan laba — semua terpusat di backoffice.",
            ],
          },
          {
            q: "Apakah laporan berjalan real-time?",
            a: [
              "Ya. Dashboard dan laporan diperbarui otomatis mengikuti setiap transaksi yang terjadi di outlet Anda.",
            ],
          },
          {
            q: "Bisakah saya mengekspor laporan?",
            a: ["Bisa. Laporan bisa diunduh dari backoffice kapan saja sesuai kebutuhan."],
          },
          {
            q: "Bagaimana cara mengakses laporan?",
            a: [
              "Login ke backoffice dari browser di ponsel atau desktop. Owner bisa melihat laporan seluruh outlet dari satu tampilan.",
            ],
          },
        ],
      },
      {
        name: "Cara Menggunakan",
        items: [
          {
            q: "Bagaimana melihat laporan penjualan?",
            a: [],
            steps: [
              "Login ke backoffice.",
              "Buka menu laporan dan pilih periode yang diinginkan.",
              "Tentukan rentang tanggal, lalu tinjau atau unduh laporannya.",
            ],
          },
        ],
      },
    ],
  },
];

// ponytail: angka statistik masih placeholder, ganti saat data asli tersedia
export type BusinessPage = {
  slug: string;
  meta: { title: string; description: string };
  eyebrow: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  statImage: string;
  statText: string;
  mainTitle: string;
  features: {
    image: string;
    title: string;
    body: string;
    link?: { label: string; href: string };
  }[];
  articles?: { image: string; title: string; href: string }[];
  article: { title: string; paragraphs: { heading: string; body: string }[] };
};

export const BUSINESS_PAGES: BusinessPage[] = [
  {
    slug: "kedai-kopi",
    meta: {
      title: "Aplikasi Kasir Kedai Kopi Berbasis Cloud | Elyra POS",
      description:
        "Aplikasi kasir cafe berbasis cloud untuk kedai kopi: manajemen stok bahan baku, program loyalitas, dan laporan penjualan real-time dalam satu sistem.",
    },
    eyebrow: "Kedai Kopi",
    heroTitle: "Sajikan pengalaman terbaik di setiap cangkir dengan aplikasi kasir kedai kopi",
    heroDesc:
      "Dari latte hangat di pagi hari sampai cappuccino di malam hari, pastikan setiap pelanggan dilayani dengan cepat dan nyaman.",
    heroImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80",
    statImage:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1280&q=80",
    statText: "Lebih dari 27 ribu pesanan kopi sudah dicatat lewat Elyra POS di berbagai kota",
    mainTitle: "Terus bertumbuh dengan menu kopi inovatif, didukung data yang akurat",
    features: [
      {
        title: "Kenali pelanggan setia Anda",
        body: "Program loyalitas membantu Anda mengenal pelanggan langganan. Cermati pesanan favorit dan jam kunjungan mereka, lalu rancang promo di waktu-waktu lengang yang terasa personal.",
        image:
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#pos" },
      },
      {
        title: "Pelanggan tak perlu menunggu lama",
        body: "Pesan takeaway cukup lewat kasir, pelanggan tinggal datang dan langsung mengambil pesanannya. Alur dine-in dan takeaway tetap satu di kasir yang sama.",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1280&q=80",
      },
      {
        title: "Laporan harian jadi sumber ide menu baru",
        body: "Dari laporan harian Elyra POS, menu paling laris dan paling disukai terlihat jelas. Susun menu berikutnya berdasarkan data, bukan tebakan.",
        image:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#laporan" },
      },
      {
        title: "Stok bahan baku tidak lagi jadi tebak-tebakan",
        body: "Stok biji kopi, susu, dan gula terpantau real-time. Ada peringatan saat persediaan menipis, jadi restock bisa dijadwalkan sebelum pelanggan kehabisan.",
        image:
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#pos" },
      },
    ],
    article: {
      title: "Memajukan Kedai Kopi dengan Aplikasi Kasir Berbasis Cloud",
      paragraphs: [
        {
          heading: "Aplikasi Kasir Cafe untuk Bisnis Kopi yang Semakin Ramai",
          body: "Bisnis kedai kopi terus bertumbuh dan persaingan makin ketat. Aplikasi kasir berbasis cloud mencatat setiap transaksi secara otomatis, sehingga waktu lebih banyak untuk melayani pelanggan dan menyempurnakan racikan Anda.",
        },
        {
          heading: "Manajemen Stok Bahan Baku yang Akurat",
          body: "Dari biji kopi hingga susu dan gula — Elyra POS memantau stok bahan baku secara real-time dan memberi peringatan saat stok menipis. Anda tahu kapan harus restock tanpa menumpuk persediaan.",
        },
        {
          heading: "Kenali Pelanggan Setia Anda",
          body: "Dengan database pelanggan dan program loyalitas, Anda bisa menyapa pelanggan dengan promo yang relevan di waktu yang tepat. Pelanggan yang merasa dihargai akan kembali lagi dan lagi.",
        },
      ],
    },
  },
  {
    slug: "restoran",
    meta: {
      title: "Aplikasi Kasir Restoran Berbasis Cloud | Elyra POS",
      description:
        "Aplikasi kasir restoran dengan manajemen meja, denah interaktif, split bill, dan laporan real-time. Kelola operasional restoran Anda lebih praktis.",
    },
    eyebrow: "Restoran",
    heroTitle: "Beri layanan terbaik di kelasnya dengan aplikasi kasir restoran Elyra",
    heroDesc: "Fitur operasional lengkap untuk restoran Anda, dibalut tampilan yang mudah dipahami.",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
    statImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1280&q=80",
    statText: "Lebih dari 40 ribu pelanggan telah dilayani restoran-restoran pengguna Elyra POS",
    mainTitle: "Layanan yang membuat pelanggan betah kembali",
    features: [
      {
        title: "Pelayanan dan penjualan berjalan makin baik",
        body: "Denah meja interaktif memudahkan kasir memindah atau menggabung meja, sekaligus memastikan pesanan sampai ke pelanggan yang benar. Pantau jam kunjungan terpadat untuk menyusun jadwal kru.",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#meja" },
      },
      {
        title: "Pantau data penjualan real-time dari mana saja",
        body: "Rekap penjualan, pendapatan bersih, dan metode pembayaran bisa diintip dari perangkat pribadi Anda kapan saja.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#laporan" },
      },
      {
        title: "Dua perangkat bisa berjalan bersamaan",
        body: "Satu perangkat untuk kasir, satu lagi untuk pembayaran atau menerima pesanan — mengurangi risiko salah hitung saat restoran paling ramai.",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1280&q=80",
      },
      {
        title: "Satu meja, tagihan bisa terpisah",
        body: "Saat satu meja diisi banyak orang, pembayaran bisa dipecah per pelanggan tanpa memperlambat layanan.",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1280&q=80",
      },
      {
        title: "Shift dan setoran kasir terkelola otomatis",
        body: "Kasir buka-tutup shift dengan rapi, setoran dihitung otomatis, dan laporan per shift memudahkan Anda menilai kinerja kru.",
        image:
          "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1280&q=80",
      },
    ],
    articles: [
      {
        title: "Menata Denah Meja Agar Restoran Lebih Efisien",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
      {
        title: "5 Kiat Menjaga Pelayanan Saat Restoran Penuh",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
      {
        title: "Panduan Mengatur Shift Karyawan Restoran",
        image:
          "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
    ],
    article: {
      title: "Aplikasi Kasir Restoran Berbasis Cloud untuk Operasional yang Lebih Tertata",
      paragraphs: [
        {
          heading: "Aplikasi Kasir Restoran untuk Operasional yang Lebih Rapi",
          body: "Restoran modern butuh lebih dari sekadar mesin kasir. Dengan aplikasi kasir berbasis cloud, setiap transaksi, meja, dan pesanan tercatat otomatis dan tersinkron real-time di semua perangkat.",
        },
        {
          heading: "Manajemen Meja dan Denah Interaktif",
          body: "Denah meja digital memudahkan kasir melihat meja mana yang kosong, memindahkan pesanan antar meja, hingga memisahkan tagihan. Pelayanan jadi lebih cepat dan akurat.",
        },
        {
          heading: "Laporan Penjualan Real-Time",
          body: "Pantau pendapatan, menu terlaris, dan jam sibuk dari dashboard. Keputusan menu dan jadwal kru bisa diambil berdasarkan data yang selalu terbarui.",
        },
      ],
    },
  },
  {
    slug: "retail",
    meta: {
      title: "Aplikasi Kasir Toko Berbasis Cloud | Elyra POS",
      description:
        "Aplikasi kasir toko untuk bisnis retail: kelola ribuan produk, harga grosir & ritel, dan laporan penjualan real-time dalam satu sistem.",
    },
    eyebrow: "Retail",
    heroTitle: "Aplikasi kasir toko untuk membuka potensi penuh usaha ritel Anda",
    heroDesc: "Sistem kasir yang menyesuaikan kebutuhan Anda, dari toko kecil sampai jaringan ritel.",
    heroImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    statImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1280&q=80",
    statText: "Sampai 10 ribu produk bisa dikelola dengan ringan di Elyra POS",
    mainTitle: "Jualan Lebih Banyak, Kapan pun Dibutuhkan",
    features: [
      {
        title: "Ribuan produk, satu tampilan yang ringkas",
        body: "Produk, stok, dan harga terangkum dalam satu sistem. Pencarian produk hanya butuh hitungan detik — penting saat toko sedang ramai.",
        image:
          "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#pos" },
      },
      {
        title: "Pesanan toko dan online tetap satu alur",
        body: "Pesanan dari toko, takeaway, maupun online tiba di alur kasir yang sama dan tercatat otomatis.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80",
      },
      {
        title: "Harga grosir dan eceran bisa diatur sekaligus",
        body: "Satu produk bisa punya beberapa harga — eceran, grosir, sampai harga khusus pelanggan. Cocok untuk semua tipe pembeli.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1280&q=80",
      },
      {
        title: "Kenali pelanggan lewat data penjualan",
        body: "Lihat produk yang paling dicari dan siapa pelanggan paling setia, lalu rancang promosi dan loyalty yang tepat sasaran.",
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#pos" },
      },
      {
        title: "Keputusan bisnis berdasar fakta penjualan",
        body: "Produk terlaris, jam ramai, dan metode pembayaran favorit tampil dalam laporan real-time — bahan lengkap untuk langkah bisnis selanjutnya.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=80",
        link: { label: "Pelajari", href: "/faq#laporan" },
      },
    ],
    articles: [
      {
        title: "Tips Menertibkan Stok Toko",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
      {
        title: "Menyusun Harga Grosir dan Eceran",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
      {
        title: "Membaca Pelanggan dari Laporan Penjualan",
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1280&q=80",
        href: "#",
      },
    ],
    article: {
      title: "Kelebihan Aplikasi Kasir Digital untuk Toko Anda",
      paragraphs: [
        {
          heading: "Aplikasi Kasir untuk Bisnis Retail",
          body: "Aplikasi kasir digital menggantikan cara manual yang rawan salah hitung. Setiap transaksi tercatat otomatis, stok terupdate real-time, dan laporan tersedia setiap saat.",
        },
        {
          heading: "Manajemen Stok Real-Time",
          body: "Pantau pergerakan stok antar outlet, terima peringatan saat stok menipis, dan rekonsiliasi persediaan dalam satu layar. Tidak ada lagi barang yang tak terdeteksi.",
        },
        {
          heading: "Laporan yang Menjadi Dasar Keputusan",
          body: "Data penjualan harian, produk terlaris, hingga metode pembayaran favorit pelanggan membantu Anda menentukan strategi promosi dan pengadaan barang yang lebih tepat.",
        },
      ],
    },
  },
];
