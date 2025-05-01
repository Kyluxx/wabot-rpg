# Luxx RPG Bot

Bot WhatsApp berbasis Role-Play-Game (RPG) yang memungkinkan pemain untuk menikmati fitur-fitur RPG melalui platform WhatsApp.

## Fitur Utama

- **Sistem Karakter**: Buat dan kembangkan karakter dengan statistik yang berbeda
- **Gathering & Crafting**: Kumpulkan resource dan buat berbagai item
- **PvE & PvP**: Bertarung melawan monster atau pemain lain
- **Ekonomi**: Sistem perdagangan dengan mata uang Gmoney
- **Guild System**: Buat atau bergabung dengan guild untuk bermain bersama
- **Zona**: Jelajahi area berbeda dengan tingkat risiko dan reward berbeda
- **Monster System**: Bertarung dengan berbagai jenis monster di setiap zona
- **Quest System**: Selesaikan misi dan dapatkan hadiah


## Cara Instalasi

### Metode 1: Instalasi Lokal

1. Clone repository ini
   ```
   git clone https://github.com/Kyluxx/rpg-wabot.git
   ```

2. Instal dependencies
   ```
   npm install
   ```

3. Salin file `.env.example` ke `.env` dan sesuaikan konfigurasi

4. Jalankan aplikasi
   ```
   npm run dev
   ```

5. Scan QR code yang muncul untuk menghubungkan dengan WhatsApp

### Metode 2: Menggunakan Docker

1. Clone repository ini
   ```
   git clone https://github.com/Kyluxx/rpg-wabot.git
   ```

2. Buat file `.env` dengan variabel yang diperlukan
   ```
   ADMIN_NUMBER=628xxxxxxxxxx
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   ```

3. Jalankan dengan Docker Compose
   ```
   docker-compose up -d
   ```

4. Lihat log untuk QR code
   ```
   docker-compose logs -f app
   ```

5. Scan QR code yang muncul untuk menghubungkan dengan WhatsApp

## Perintah Bot

| Perintah | Deskripsi |
|----------|-----------|
| !daftar | Mendaftar sebagai pemain baru |
| !profil | Melihat status karakter |
| !gather [type] | Mengumpulkan resource tertentu |
| !craft [item] | Membuat item dari resource |
| !serang [monster/player] | Menyerang monster atau pemain |
| !pasar | Melihat marketplace |
| !guild | Melihat atau mengelola guild |
| !help | Menampilkan semua perintah yang tersedia |
| !monster | Menampilkan daftar monster dan statistiknya |
| !quest | Melihat quest yang tersedia |
| !storyline | Melihat quest chain/cerita yang tersedia |

## Todo & Roadmap

### Fitur yang Sudah Diimplementasikan ✅

- **Persiapan Awal**: Pengaturan lingkungan Node.js, repository Git, dan struktur database
- **Autentikasi & Koneksi**: QR code login, penerimaan dan pengiriman pesan
- **Sistem Manajemen Pemain**: Pendaftaran, login, dan profil pemain
- **Fitur Utama Game**: Sistem karakter, pertarungan PvE, gathering resource, crafting, dan zona
- **Ekonomi & Perdagangan**: Marketplace, transaksi antar pemain, mata uang Gmoney, dan sistem judi
- **Interaksi Sosial**: Sistem guild/clan, chat antar pemain, notifikasi
- **Mini-Game**: Dungeon sederhana, sistem loot, PvP tekstual, quest harian dan mingguan
- **Admin & Monitoring**: Dashboard admin, monitoring, backup database
- **Sistem Quest Dinamis**: Quest generator, tracking otomatis, quest chain, dan achievement system
- **Item Development**: Item Tier 3 (Journeyman) dan Tier 4 (Adept)

### Fitur yang Sedang Dikembangkan 🚧

- **Item & Crafting Kompleks**:
  - [ ] Item Tier 5-8 (Expert hingga Elder items)
  - [ ] Sistem enchantment item
  - [ ] Sistem upgrade/refinement item
  - [ ] Sistem set item dengan bonus
  - [ ] Sistem crafting lanjutan
  - [ ] Item khusus dengan efek unik

- **Sistem Quest Lanjutan**:
  - [ ] Sistem quest guild
  - [ ] Event quest dan seasonal quest

- **Expansion Content**:
  - [ ] Sistem pet/companion
  - [ ] Housing/Land system
  - [ ] Sistem profesi lanjutan
  - [ ] PvP arena dan turnamen

## Dashboard Admin

Bot ini dilengkapi dengan dashboard admin yang dapat diakses melalui:

```
http://localhost:6765/admin
```

Gunakan username dan password yang telah dikonfigurasi di file `.env` untuk login.

## Struktur Folder

```
gicell-senpai-bot/
├── src/                 # Kode sumber aplikasi
│   ├── controllers/     # Controller untuk menangani perintah
│   ├── models/          # Model database
│   ├── routes/          # Routes untuk API dan admin dashboard
│   ├── utils/           # Utilitas dan helper
│   ├── data/            # Data seed untuk database
│   ├── index.js         # Entry point aplikasi
│   ├── database.js      # Konfigurasi database
│   └── whatsapp.js      # Konfigurasi koneksi WhatsApp
├── logs/                # Log aplikasi
├── session/             # Data sesi WhatsApp
├── .env.example         # Contoh file konfigurasi
├── package.json         # Konfigurasi NPM
├── Dockerfile           # Konfigurasi Docker
└── docker-compose.yml   # Konfigurasi Docker Compose
```

## Teknologi yang Digunakan

- Node.js
- Baileys/WhiskeySockets (WhatsApp Web API)
- MongoDB
- Express.js (untuk dashboard admin)
- Jest (untuk testing)

## Kontribusi

Kami sangat menghargai kontribusi dari para pengembang untuk memperbaiki dan meningkatkan Luxx RPG Bot.

### Cara Berkontribusi

1. **Fork Repository**
   - Fork repository ini ke akun GitHub Anda

2. **Clone Repository yang Sudah di-Fork**
   ```
   git clone https://github.com/username-anda/rpg-wabot.git
   ```

3. **Buat Branch Baru**
   ```
   git checkout -b fitur-baru
   ```

4. **Lakukan Perubahan**
   - Tambahkan fitur baru atau perbaiki bug
   - Pastikan kode mengikuti standar yang ada

5. **Commit Perubahan**
   ```
   git commit -m "Menambahkan fitur: deskripsi singkat"
   ```

6. **Push ke Branch Anda**
   ```
   git push origin fitur-baru
   ```

7. **Buat Pull Request**
   - Buat Pull Request dari branch Anda ke branch `main` repository utama
   - Jelaskan perubahan yang telah Anda lakukan

### Panduan Kontribusi

- Pastikan kode yang Anda tulis mengikuti standar kode yang telah ada
- Tambahkan komentar pada fungsi-fungsi penting
- Uji perubahan sebelum melakukan pull request
- Update dokumentasi jika diperlukan

## Lisensi

MIT

## Author

Rizky Pratama # rpg-wabot
Gicell Senpai Developer # rpg-wabot
