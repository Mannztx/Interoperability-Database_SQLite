// Sesi praktikum
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5173;
// let idSeq = 4;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/status', (req, res) => {
    res.json({
        ok: true,
        service: 'film-api',
        time: new Date().toISOString()
    });
});

// // Middleware fallback untuk menangani rute 404NotFound
// app.use((req, res) => {
//     res.status(404).json({ error: 'Rute tidak ditemukan' });
// });

// Start server
app.listen(port, () => {
    console.log(`Server Running on localhost:  ${port}`);
});


//dummy data
app.get('/', (req, res) => {
    res.send('Selamat Datang di Server Node.js Tahap awal, Terimakasih');
});

// Implementasi Operasi Baca
// Daftar film awal
let movies = [
    {id: 1, title: 'Avenger', director: 'Peter Jackson', year: 2010},
    {id: 2, title: 'Spiderman', director: 'Peter Jackson', year: 2004},
    {id: 3, title: 'Perjuangan Mendapatkan Santriwati', director: 'Firman Ardiansyah', year: 2025},
];
// console.log(movies);

// Mengembalikan daftar semua film
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Mengembalikan detail satu film berdasarkan id
app.get('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).send('Movie not found');
    }
});


// Implementasi Operasi Tulis (CRUD)

// Membuat film baru
app.post('/movies', (req, res) => {
    const {title, director, year} = req.body || {};
    if(!title || !director || !year) {
        returnres.status(400).json({error:'title, director, year wajib di isi'});
    }
    const newMovie = {id: movies.length + 1, title, director, year};
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// Memperbarui data film berdasarkan id
app.put('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movieIndex = movies.findIndex(m => m.id === id);
    if (movieIndex === -1) {
        returnres.status(404).json({error: 'Movie tidak ditemukan'});
    }
    const {title, director, year} = req.body || {};
    const updatedMovie = {id, title, director, year};
    movies[movieIndex] = updatedMovie;
    res.json(updatedMovie);
});

// Menghapus film berdasarkan id
app.delete('/movies/:id', (req, res) => {
    const id = Number(req.params.id);
    const movieIndex = movies.findIndex(m => m.id === id);
    if (movieIndex === -1) {
        returnres.status(404).json({error: 'Movie tidak ditemukan'});
    }
    movies.splice(movieIndex, 1);
    res.status(204).send();
});


// Tugas Praktikum 2

// Daftar director/sutradara awal
let directors = [
    {id: 1, name: 'Petter Jackson', birthYear: 1961},
    {id: 2, name: 'Firman Ardiansyah', birthYear: 2006},
];

// Mengembalikan daftar semua sutradara
app.get('/directors', (req, res) => {
    res.json(directors);
});

// Mengembalikan detail satu sutradara berdasarkan id
app.get('/directors/:id', (req, res) => {
    const id = Number(req.params.id);
    const director = directors.find(m => m.id === parseInt(req.params.id));
    if (director) {
        res.json(director);
    } else {
        res.status(404).send('Director not found');
    }
});

// Memperbarui data sutradara berdasarkan id
app.post('/directors', (req, res) => {
    const {name, birthYear} = req.body || {};
    if(!name || !birthYear) {
        returnres.status(400).json({error:'name & birtYear wajib di isi'});
    }
    const newDirector = {id: directors.length + 1, name, birthYear};
    directors.push(newDirector);
    res.status(201).json(newDirector);
});

// Memperbarui data sutradara berdasarkan id
app.put('/directors/:id', (req, res) => {
    const id = Number(req.params.id);
    const directorIndex = directors.findIndex(m => m.id === id);
    if (directorIndex === -1) {
        returnres.status(404).json({error: 'Director not found'});
    }
    const {name, birthYear} = req.body || {};
    const updatedDirector = {id, name, birthYear};
    directors[directorIndex] = updatedDirector;
    res.json(updatedDirector);
});

// Menghapus sutradara berdasarkan id
app.delete('/directors/:id', (req, res) => {
    const id = Number(req.params.id);
    const directorIndex = directors.findIndex(m => m.id === id);
    if (directorIndex === -1) {
        returnres.status(404).json({error: 'Director not found'});
    }
    directors.splice(directorIndex, 1);
    res.status(204).send();
});