// contoh komentar 1 baris

/* 
contoh
komentar
beberapa
baris
*/

// variabel var sudah jarang digunakan lagi pada javascript ES6 dikarenakan kelemahan pada konsep scope (pembatasan hak akses)
var a = 1;
console.log(a); // hasil 1

// javascript ES6 sekarang lebih sering menggunakan variabel let
let b = 2;
console.log(b); //hasil 2

// variabel let dapat diubah nilainya / ditimpa nilainya
b = 4;
console.log(b); // hasil 4 karena nilai sudah diubah

// konstanta (const) adalah variabel yang tidak bisa diubah nilainya sepanjang kode program
const c = 3;
console.log(c); //nilai 3
