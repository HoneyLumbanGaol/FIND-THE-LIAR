# Find the Liar

**Find the Liar** adalah game investigasi berbasis web. Pemain berperan sebagai detektif yang harus menemukan karakter yang memberikan informasi tidak benar berdasarkan bukti, waktu, lokasi, pesan, dan kesaksian.

Pemain tidak langsung diberi tahu siapa pembohongnya. Semua keputusan harus dibuat berdasarkan informasi yang dikumpulkan selama investigasi.

## Fitur Utama

- Sistem kasus misteri dengan urutan kasus acak.
- Case briefing pada awal permainan.
- Beberapa level investigasi dari Beginner sampai Expert.
- Karakter dengan cerita dan kesaksian berbeda.
- Sistem Investigation Points yang terbatas.
- Detective Score dan Investigation Combo.
- Evidence Found dan progress bukti.
- Timer investigasi selama 4 menit.
- Evidence Board untuk menghubungkan karakter, bukti, waktu, dan lokasi.
- Sistem hint dengan pengurangan poin.
- Accusation System untuk memilih tersangka dan alasan pendukung.
- Case Report setelah pemain memberikan kesimpulan.
- Case Rating berdasarkan kualitas investigasi.
- Achievement untuk investigasi yang baik.
- Tampilan responsif untuk desktop dan perangkat mobile.

## Alur Permainan

### 1. Case Briefing

Pemain menerima informasi awal mengenai kasus, seperti:

- Nama kasus
- Ringkasan kejadian
- Waktu kejadian
- Level kesulitan
- Jumlah karakter yang terlibat

### 2. Investigation

Pemain dapat memilih beberapa alat investigasi:

- **Inspect Evidence** — membaca CCTV, pesan, struk, access log, foto, dan peta.
- **Interview** — berbicara dengan karakter dan mengajukan pertanyaan lanjutan.
- **Check Location** — memeriksa posisi karakter berdasarkan waktu.
- **Timeline** — melihat urutan kejadian berdasarkan waktu.
- **Check Messages** — membaca pesan pribadi yang berkaitan dengan kasus.

### 3. Evidence Board

Pemain dapat memilih dua kartu untuk mencoba menghubungkan informasi, misalnya:

```text
Bella
  ↓
Pesan Bella
  ↓
14:35
  ↓
Kantin
```

Jika hubungan yang dipilih mendukung kontradiksi, pemain mendapatkan **Deduction Point** dan bonus skor.

### 4. Accusation

Setelah mengumpulkan informasi, pemain dapat:

1. Membuka menu **Make an Accusation**.
2. Memilih karakter yang dianggap berbohong.
3. Memilih bukti pendukung.
4. Mengirim kesimpulan investigasi.

Pemain dianjurkan mengumpulkan bukti terlebih dahulu agar skor dan rating lebih tinggi.

## Sistem Investigation Points

Setiap tindakan membutuhkan Investigation Points:

| Tindakan | Biaya |
| --- | ---: |
| Inspect Evidence | 1 poin |
| Interview | 2 poin |
| Check Location | 2 poin |
| Timeline | 2 poin |
| Check Messages | 1 poin |
| Open a Hint | 4 poin |

Pemain harus menentukan informasi mana yang paling penting untuk diperiksa karena jumlah poin terbatas.

## Sistem Skor

Skor dipengaruhi oleh:

- Jumlah bukti yang ditemukan.
- Jumlah karakter yang diwawancarai.
- Pertanyaan lanjutan yang digunakan.
- Hubungan yang berhasil dibuat di Evidence Board.
- Ketepatan tersangka.
- Kecepatan menyelesaikan kasus.
- Jumlah hint yang digunakan.
- Investigation Combo.

Jawaban benar memberikan bonus berdasarkan bukti dan deduction point. Kesimpulan yang salah mengurangi skor dan menghasilkan rating rendah.

## Level Investigasi

### Level 1 — Beginner

- 4 karakter.
- Satu kebohongan utama.
- Kontradiksi relatif mudah ditemukan.

### Level 2 — Intermediate

- 5 karakter.
- Beberapa informasi terlihat mencurigakan.
- Pemain harus membandingkan kesaksian dan bukti waktu.

### Level 3 — Advanced

- 6 karakter.
- Kesaksian saling berhubungan.
- Pemain perlu memakai bukti lokasi dan timeline.

### Level 4 — Expert

- 6 karakter.
- Informasi dapat berisi fakta, asumsi, dan kebohongan sebagian.
- Pemain harus lebih teliti saat membandingkan cerita.

## Contoh Bukti

Game dapat menampilkan bukti seperti:

- CCTV
- Pesan pribadi
- Struk pembelian
- Access log
- Foto kegiatan
- Peta lokasi
- Daftar kehadiran
- Timeline kejadian

Setiap bukti berisi waktu, lokasi, atau informasi yang dapat dibandingkan dengan pernyataan karakter.

## Case Report

Setelah accusation dikirim, pemain menerima laporan akhir.

### Jika benar

Laporan menampilkan:

- Status **CASE SOLVED!**
- Nama pembohong yang ditemukan.
- Penjelasan kontradiksi.
- Kronologi kejadian yang sebenarnya.
- Detective Score.
- Evidence Found.
- Case Rating.
- Achievement yang berhasil dibuka.

### Jika salah

Laporan menampilkan:

- Status **WRONG SUSPECT**.
- Penjelasan bahwa bukti belum mendukung kesimpulan.
- Kesempatan untuk meninjau ulang investigasi.

## Achievement

Achievement yang tersedia:

- **Sharp Eyes** — menemukan seluruh bukti.
- **Master Detective** — menyelesaikan kasus tanpa menggunakan hint.
- **Quick Thinker** — menyelesaikan kasus dalam waktu singkat.
- **Evidence Hunter** — berhasil membuat hubungan bukti pada Evidence Board.

## Struktur File

```text
find-the-liar/
├── index.html   # Struktur halaman, case briefing, panel investigasi, dan modal
├── style.css    # Tema ruang investigasi, layout, animasi, dan responsive design
├── script.js    # Data kasus, state game, evidence, interview, scoring, dan accusation
└── README.md    # Dokumentasi project
```

## Cara Menjalankan

### Opsi 1: Membuka langsung

Buka file berikut di browser:

```text
index.html
```

### Opsi 2: Menggunakan server lokal

Jika Python tersedia, jalankan perintah berikut dari folder project:

```bash
python -m http.server 8000
```

Kemudian buka alamat berikut di browser:

```text
http://localhost:8000
```

## Teknologi

Game dibuat menggunakan:

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts: Space Grotesk dan DM Mono
- Emoji sebagai elemen visual karakter dan bukti

Game tidak membutuhkan database atau backend. Seluruh logic investigasi berjalan langsung di browser.

## Tujuan Edukasi

Find the Liar dirancang untuk melatih pemain dalam:

- Berpikir kritis.
- Membandingkan kesaksian.
- Memeriksa konsistensi waktu dan lokasi.
- Menghubungkan bukti yang berbeda.
- Membedakan fakta, asumsi, dan kebohongan.
- Mengambil keputusan berdasarkan bukti, bukan sekadar tebakan.

> Trust no one. Check everything.
