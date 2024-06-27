// Element array juga bisa bercampur dengan tipe data lain, tidak harus 1 tipe data saja

// Contoh 1
let foo = [1, 2, 3, 4, 5];
console.log(foo); // Array [ 1, 2, 3, 4, 5 ]

// Contoh 2
let bar = ["a", "b", "c"];
console.log(bar); // Array [ "a", "b", "c" ]

// Contoh 3
let baz = ["aku", 999, true, 0.085, null];
console.log(baz); // Array [ "aku", 999, true, 0.085, null ]
console.log(typeof baz); // object”

// Cara mengakses array menggunakan indexing
console.log(foo[0]); // 1
console.log(foo[1]); // 2

console.log(bar[0]); // a
console.log(bar[1]); // b

console.log(baz[0]); // aku
console.log(baz[1]); // 999

// Mengubah element array
let test = ["Reza", "Fardan", "Adi"];
test[2] = "Putra"; // mengubah index ke-2 atau urutan ke 3 (Adi) menjadi putra

console.log(test); // [ 'Reza', 'Fardan', 'Putra' ]

// Array 2 dimensi
/*
Sebuah array tidak hanya bisa diisi tipe primitif saja (number, string, dan boolean), tapi juga bisa menampung tipe data yang lebih kompleks seperti object maupun array lain.
*/
let contoh = [
  [2, "Reza"],
  [4, "Fardan"],
  [6, "Adi"],
];
console.log(contoh); // [ [ 2, 'Reza' ], [ 4, 'Fardan' ], [ 6, 'Adi' ] ]
console.log(contoh[0][0]); // 2
console.log(contoh[0][1]); // Reza
console.log(contoh[1][0]); // 4
console.log(contoh[1][1]); // Fardan
console.log(contoh[2][0]); // 6
console.log(contoh[2][1]); // Adi

// Array destructuring
/*
Array destructuring adalah perintah khusus untuk "membuka" nilai yang tersimpan di dalam sebuah array menjadi variabel terpisah.
*/

let mahasiswa = ["Reza", "Fardan", "Adi"];

let [a, b, c] = mahasiswa;

console.log(a); // Reza
console.log(b); // Fardan
console.log(c); // Adi
