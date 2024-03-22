const daftarGambar = [
    { src: "OIP.jpeg", alt: "Gambar 1", penjelasan: "Attack on Titan." },
    { src: "mappa-10th-anniversary-exhibition.jpg", alt: "Gambar 2", penjelasan: "Jujutsu Kaisen." },
    { src: "th.jpeg", alt: "Gambar 3", penjelasan: "Yuri on Ice." }
];

// Array indeks gambar sesuai urutan yang diinginkan
const urutanGambar = [0, 1, 2];
let indeksGambarSekarang = 0;

const gambar = document.getElementById("gambar");
const penjelasan = document.getElementById("penjelasan");

function ubahGambar() {
    // Ambil indeks gambar berikutnya sesuai urutan
    indeksGambarSekarang = (indeksGambarSekarang + 1) % urutanGambar.length;
    const indeksGambar = urutanGambar[indeksGambarSekarang];

    // Ambil gambar sesuai indeks yang sudah ditentukan
    const randomImage = daftarGambar[indeksGambar];
    gambar.src = randomImage.src;
    gambar.alt = randomImage.alt;
    penjelasan.textContent = randomImage.penjelasan;
}

document.getElementById("ubahGambarBtn").addEventListener("click", ubahGambar);

