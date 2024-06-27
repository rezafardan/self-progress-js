/*
“Array (dalam bahasa indonesia disebut juga sebagai larik) adalah tipe data yang berisi kumpulan tipe data lain. Jika kita perlu membuat banyak data yang masuk dalam satu kelompok seperti kumpulan nama siswa, akan lebih praktis menggunakan array daripada membuat variabel tersebut satu per satu.”
*/

// contoh variabel biasa tanpa array
let siswa0 = "Reza";
let siswa1 = "Andri";
let siswa2 = "Ariel";
let siswa3 = "Javas";

console.log(siswa0); // Reza
console.log(siswa1); // Andri
console.log(siswa2); // Ariel
console.log(siswa3); // Javas

// contoh menggunakan array

let siswa = ["Reza", "Andri", "Ariel", "Javas"];

console.log(siswa); // [ 'Reza', 'Andri', 'Ariel', 'Javas' ]

// menghitung jumlah array dengan method length
console.log(siswa.length); // 4 (karena ada 4 string dalam 1 array)
// array dimulai dengan index 0 (urutan pertama adalah 0 bukan 1)
// mengakses index menggunakan kurung siku []
console.log(siswa[0], siswa[2]); // Reza Ariel (karena index pertama adalah 0 dan index kedua adalah 1)
