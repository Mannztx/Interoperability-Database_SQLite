# PRAKTIKUM PENGAMANAN API

### NAMA: FIRMAN ARDIANSYAH
### NIM: 362458302101
### KELAS: 2D TRPL

# Pendahuluan
API seringkali menjadi pintu depan menuju data dan fungsionalitas inti sebuah sistem. API yang tidak diamankan sangatlah berbahaya ibarat rumah tanpa kunci, rentan terhadap akses yang tidak sah, pencurian data, manipulasi informasi, hingga penolakan layanan. Oleh karena itu pengamanan API ini sangat penting untuk melindungi data pengguna, menjaga integritas sistem, dan mencegah penyalahgunaan sumber daya.

# Landasan Teori
## Bcrypt (Hashing dan Salting)
Bcrypt adalah fungsi hashing kata sandi yang dirancang agar lambat secara sengaja. Kelambatan ini penting karena mempersulit penyerang untuk mencoba banyak kata sandi dalam waktu singkat. Hashing merupakan proses mengubah kata sandi asli (plain-text) menjadi serangkaian karakter dengan panjang tetap yang tidak dapat diubah kembali (hash). Jika database API dicuri, penyerang hanya mendapatkan hash, bukan kata sandi asli pengguna. Salting merupakan proses penambahan data acak unik ke setiap kata sandi sebelum di hash untuk memastikan bahwa kata sandi yang sama akan menghasilkan hash yang berbeda.
## JSON Web Token (JWT)
JWT adalah standar terbuka untuk membuat token akses yang aman dan ringkas. JWT digunakan untuk otentikasi dan otorisasi setelah pengguna berhasil login. JWT adalah string yang terdiri tiga bagian yang dipisahkan oleh titik yaitu:
Header: berisi jenis token dan algoritma signing yang digunakan
Payload: berisi informasi tentang entitas dan data tambahan. (contoh: id pengguna, waktu kadaluwarsa token, dan peran pengguna)
Signature: dibuat dengan mengambil header dan payload yang sudah di encode, lalu di hash menggunakan kunci rahasia yang hanya diketahui oleh server. Signature memverifikasi bahwa token belum diubah oleh pihak ketiga.

# Tahapan Praktikum
1. Buka proyek NodeJS sebelumnya yang pernah dibuat
2. Install dependencies yang dibutuhkan (jsonwebtoken dan bcryptjs)
3. Tambahkan variabel baru (JWT_SECRET) untuk kunci rahasia JWT di file .env
4. Tambahkan kode untuk membuat tabel users pada file database.js
5. Tambahkan endpoint/rute baru untuk registrasi (/auth/registrasi) pada file server.js, dan impor 2 variabel/dependencies (bcryptjs dan JWT_SECRET)
6. Tambahkan endpoint/rute baru untuk login (/auth/login) pada file server.js
7. Buat folder baru bernama middleware kemudian buat file baru bernama authMiddleware.js didalam folder tersebut
8. Impor middleware di file server.js
9. Tambahkan authenticateToken pada rute POST/PUT/DELETE
10. Lakukan pengujian 

# Hasil Pengujian
1. Registrasi
![images/register.png]()
2. Login
![images/login.png]()
3. Akses tanpa token
![images/akses_tanpa_token.png]()
4. Akses dengan token
![images/akses_dengan_token.png]()