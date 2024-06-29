// Perulangan For biasa

let nama = ["Reza", "Fardan", "Adi", "Putra"];

for (let i = 0; i < nama.length; i = i + 1) {
  console.log(nama[i]);
}
// Reza
// Fardan
// Adi
// Putra

// Perulangan For Of
/*
ECMAScript 6 memperkenalkan perulangan for of yang bisa dipakai untuk memproses array, atau lebih tepatnya memproses iterable objects. Iterable object sendiri merujuk ke object yang isinya memiliki banyak element, termasuk array, set dan map.
*/

let nomors = [1, 2, 3, 4, 5];

for (let nomor of nomors) {
  console.log(nomor);
}
// 1
// 2
// 3
// 4
// 5

// For of untuk Map

let data = new Map([
  ["nama", "reza"],
  ["no", 1],
  ["alamat", "kepanjen"],
]);

for (let isi of data) {
  console.log(isi);
}
// [ 'nama', 'reza' ]
// [ 'no', 1 ]
// [ 'alamat', 'kepanjen' ]

/*
Untuk tipe data map, perulangan for of mengembalikan hasil berbentuk array ke dalam variabel penampung. Ini karena satu element map terdiri dari pasangan key dan value. Jika kita ingin mengakses key dan value secara terpisah, bisa dilakukan dengan menulis nomor index array [0] dan [1]
*/

for (let isi of data) {
  console.log(isi[0]);
}
// nama
// no
// alamat

for (let isi of data) {
  console.log(isi[1]);
}
// reza
// 1
// kepanjen
