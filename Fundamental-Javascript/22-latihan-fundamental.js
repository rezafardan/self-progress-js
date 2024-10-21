// 1. JavaScript Fundamentals

// Latihan 1: Variabel dan Tipe Data
// Deklarasikan variabel untuk menyimpan nama, umur, dan apakah Anda seorang programmer (boolean).
// Cetak semua variabel tersebut ke console.
const nama = "Reza Fardan";
const umur = 26;
const programmer = true;
console.log(
  `Nama saya adalah ${nama}, umur saya adalah ${umur}, dan apakah saya seorang programmer, jawabanya adalah ${programmer}`
);

// Latihan 2: Operasi Matematika
// Buat program untuk menghitung luas persegi panjang.
// Gunakan let untuk panjang dan lebar, hitung luas, dan cetak hasilnya.
let panjang = 2;
let lebar = 3;
console.log(`Luas = ${panjang * lebar}`);

// Latihan 3: String Manipulation
// Buat variabel untuk nama depan dan nama belakang.
// Gabungkan keduanya menjadi nama lengkap dan cetak dengan format "Nama saya adalah [nama lengkap]".
let namaDepan = "Reza";
let namaBelakang = "Fardan";
console.log("Nama Saya adalah " + namaDepan + " " + namaBelakang);

// Latihan 4: Conditional Statements
// Buat program yang memeriksa apakah sebuah angka ganjil atau genap.
// Gunakan prompt() untuk input dan alert() untuk output.
// let angka = prompt();
// if (angka % 2 === 0) {
//   alert("Genap");
// } else {
//   alert("Ganjil");
// }

// Latihan 5: Loops
// Buat program yang mencetak angka 1 sampai 10 menggunakan loop for.
// Kemudian, cetak angka genap dari 1 sampai 20 menggunakan loop while.
for (let x = 1; x <= 10; x++) {
  console.log(x);
}
let i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// 2. Functions dan Scope

// Latihan 1: Basic Function
// Buat fungsi untuk menghitung keliling lingkaran. Gunakan const PI = 3.14.
function kelilingLingkaran(r) {
  const PI = 3.14;
  return 2 * PI * r;
}
console.log(kelilingLingkaran(4));

// Latihan 2: Function dengan Multiple Parameters
// Buat fungsi untuk menghitung BMI (Body Mass Index).
// BMI = berat / (tinggi * tinggi), dengan berat dalam kg dan tinggi dalam meter.

function bmi(berat, tinggi) {
  return berat / (tinggi * tinggi);
}
// console.log(bmi(50, 2));

// Latihan 3: Return Value
// Buat fungsi yang menerima dua angka dan mengembalikan nilai terbesar.

function returnValue(number1, number2) {
  if (number1 > number2) {
    console.log(number1);
  } else {
    console.log(number2);
  }
}
console.log(returnValue(4, 2));

// Latihan 4: Arrow Function
// Ubah salah satu fungsi di atas menjadi arrow function.

const keliling = (r) => {
  const PI = 3.14;
  return 2 * PI * r;
};
console.log(keliling(4));

// Latihan 5: Scope
// Buat variabel global dan local dengan nama yang sama.
// Tunjukkan perbedaan penggunaannya di dalam dan di luar fungsi.

let x = "Reza";

function cekNama() {
  let x = "Fardan";
  return console.log(x);
}

console.log(x);
console.log(cekNama());

// 3. Arrays dan Objects

// Latihan 1: Array Manipulation
// Buat array berisi 5 nama buah. Tambahkan 2 buah di awal dan 2 di akhir array.

let fruits = ["Pisang", "Nanas", "Stroberry", "Mangga", "Apel"];

fruits.push("Salak", "Cerry");
fruits.unshift("Berry", "Semangka");

console.log(fruits);

// Latihan 2: Array Iteration
// Gunakan loop untuk mencetak semua elemen array buah tersebut.

fruits.forEach((fruit) => console.log(fruit));

// Latihan 3: Array Methods
// Gunakan metode map() untuk membuat array baru berisi panjang karakter setiap nama buah.

let panjangFruits = fruits.map((fruits) => fruits.length);
console.log(panjangFruits);

// Latihan 4: Object Creation
// Buat objek yang merepresentasikan sebuah buku dengan properti judul, penulis, dan tahun terbit.
let books = {
  judul: "Buku 1",
  penulis: "Reza",
  tahun: "2024",
};

// Latihan 5: Object Method
// Tambahkan metode ke objek buku yang mengembalikan string formatnya.

console.log(books.judul);

// 4. Asynchronous JavaScript

// Latihan 1: setTimeout
// Buat program yang mencetak "Hello" setelah 2 detik dan "World" setelah 4 detik.

function hello() {
  setTimeout(console.log(Hello), 3000);
}

// Latihan 2: Promises
// Buat promise yang mensimulasikan pengambilan data. Resolve jika berhasil, reject jika gagal.

// Latihan 3: Async/Await
// Ubah fungsi promise di atas menjadi fungsi async dan gunakan dengan await.

// Latihan 4: Fetch API
// Gunakan Fetch API untuk mengambil data dari https://jsonplaceholder.typicode.com/todos/1

// Latihan 5: Error Handling
// Implementasikan error handling pada fungsi async/await di atas menggunakan try/catch.

// 5. DOM Manipulation

// Latihan 1: Selecting Elements
// Buat file HTML dengan beberapa elemen. Pilih elemen menggunakan berbagai metode (getElementById, querySelector, dll).

// Latihan 2: Modifying Content
// Ubah teks dan HTML dari elemen yang dipilih.

// Latihan 3: Creating and Removing Elements
// Buat elemen baru, tambahkan ke DOM, kemudian hapus setelah beberapa detik.

// Latihan 4: Event Listeners
// Tambahkan event listener ke sebuah button yang mengubah warna background halaman ketika diklik.

// Latihan 5: Form Handling
// Buat form sederhana dan tangani submit event untuk mencegah default action dan memproses input.

// 6. Proyek Sederhana

// Proyek 1: To-Do List
// Buat aplikasi to-do list sederhana dengan fitur menambah, menandai selesai, dan menghapus tugas.

// Proyek 2: Kalkulator
// Buat kalkulator web dengan operasi dasar (tambah, kurang, kali, bagi).

// Proyek 3: Fetch dan Tampilkan Data
// Buat aplikasi yang mengambil data dari API (misalnya daftar pengguna) dan menampilkannya dalam tabel.

// Proyek 4: Game Sederhana
// Buat game tebak angka sederhana dengan JavaScript.

// Proyek 5: Validasi Form
// Buat form pendaftaran dengan validasi menggunakan JavaScript (cek email, password strength, dll).
