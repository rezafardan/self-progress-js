// Function
/*
Function di dalam JavaScript juga cukup unik, karena bisa disimpan ke dalam variabel dan dijadikan sebagai argument. Istilah programmingnya, function di JavaScript disebut sebagai first-class citizen
*/

// Contoh penulisan function

/*
function namafunction (parameter1, parameter2){
    statement1;
    statement2;
    return value;
}
*/

/*
Setelah keyword function, diikuti dengan namafunction yang menjadi nama dari fungsi tersebut. Penulisan nama function mengikuti aturan dari identifier (sama seperti variabel), diantaranya tidak boleh diawali angka dan tidak boleh mengandung spasi.

Setiap function bisa memiliki 1 atau beberapa parameter. Parameter adalah variabel yang berfungsi untuk menampung nilai input ke dalam function. Argument ditulis di dalam tanda kurung setelah function_name. Sebuah function bisa memiliki beberapa parameter dan dipisah dengan karakter koma.

Blok function ditandai dengan kurung kurawal. Di sinilah kode program yang membentuk function ditulis. Perintah return dipakai sebagai output function. Di dalam JavaScript, argument dan perintah return bersifat opsional dan boleh tidak ditulis.
*/

/*
Function pagi() terdiri dari 2 baris perintah console.log(). Function ini tidak memiliki parameter, namun tetap harus ditulis dengan tanda kurung kosong. Inilah yang membedakan sebuah fungsi dengan identifier lain seperti variabel. Jika kita menemukan perintah yang diikuti tanda kurung, besar kemungkinnan itu sebuah function.Menulis function seperti ini disebut juga function declaration atau proses pendeklarasian fungsi.
*/
function pagi() {
  console.log("Selamat pagi");
  console.log("Good morning");
}

// Pemanggilan fungsi
pagi();
// Selamat pagi
// Good morning

/* 
Menjalankan fungsi dengan cara seperti ini dikenal dengan istilah memanggil fungsi atau calling a function. Istilah lain adalah running, executing, invoking, atau dispatching a function.
*/
pagi();
pagi();
pagi();
// Selamat pagi
// Good morning
// Selamat pagi
// Good morning
// Selamat pagi
// Good morning

console.log(pagi());
// undefined
// karena fungsi belum mempunyai pengembalian nilai (return)

// contoh fungsi yang bisa mengembalikan nilai
function malam() {
  return "Selamat malam";
}

console.log(malam());
// Selamat malam

// contoh fungsi yang pengembalian nilai ditampung pada suatu variabel
function sore() {
  let salam = "Selamat sore";
  return salam;
}

sore();
// tidak muncul apa apa karena fungsi sore() pengembalian nilai ada di dalam variabel
console.log(sore());
// Selamat sore

// Mengembalikan array

function namaSiswa() {
  let nama = ["Reza", "Fardan", "Adi", "Putra"];
  return nama;
}

namaSiswa();
// tidak muncul apa apa karena fungsi sore() pengembalian nilai ada di dalam variabel
console.log(namaSiswa());
// [ 'Reza', 'Fardan', 'Adi', 'Putra' ]

let dataSiswa = namaSiswa();
for (let isi of dataSiswa) {
  console.log(isi);
}
// Reza
// Fardan
// Adi
// Putra

// Parameter dan Argument Function

// parameternya adalah nama dan nomer
function dataMahasiswa(nama, nomer) {
  return "Selamat datang " + nama + "Anda nomer : " + nomer;
}
// argumentnya adalah "Reza" string
let mahasiswa1 = dataMahasiswa("Reza", 2);
console.log(mahasiswa1);
// Selamat datang RezaAnda nomer : 2

// Banyak parameter
function rataRata(a, b, c, d) {
  let nilai = (a + b + c + d) / 4;
  return nilai;
}

console.log(rataRata(4, 2, 4, 2));
// 3
console.log(rataRata(4, 2, 4));
// NaN
/*
itu karena parameter ke-4 tidak di definisikan maka secara otomatis akan di isi dengan nilai Undifined (number + undifined = NaN), akan tetapi jika argument berlebih dari parameter maka argument kelebihannya akan diabaikan
*/

function jumlahOrang(a = 1, b = 1, c, d) {
  return a + b + c + d;
}

// Contoh kegunaan undefined adalah agar nilai diparameter a dan b tidak berubah karena sudah didefinisikan diawal
console.log(jumlahOrang(undefined, undefined, 2, 2));
// 6

// Argument Object
/*
Arguments object adalah sebutan untuk 'object' yang menampung seluruh argument pada saat pemanggilan function. Arguments object sebenarnya lebih mirip seperti array, oleh karena itu boleh dibilang bahwa kita sedang membahas tentang array khusus bernama arguments.
*/

// menggunakan arguments
function rata2() {
  let totalArgument = arguments.length;
  hasil = 0;
  for (let i = 0; i < totalArgument; i++) {
    hasil = hasil + arguments[i];
  }

  return hasil / totalArgument;
}

console.log(rata2(20, 20));
// 20

// menggunakan spread operator / rest parameter
function cobaRata2(...arg) {
  let totalArgument = arg.length;
  let hasil = 0;
  for (let isi of arg) {
    hasil = hasil + isi;
  }
  return hasil / totalArgument;
}

console.log(cobaRata2(2, 2, 5));
// 3

// Variabel Scope Function

let foo = "Belajar";

function a() {
  return console.log(foo);
}

a();
//3

function b() {
  let bar = "Tes Belajar"; // local variabel
}

// // console.log(bar);
// // Uncaught ReferenceError: a is not defined

let x = 5;
let y = 10;

function tes(x, y) {
  x = 1;
  y = 2;
  console.log(x, y);
}

console.log(tes());

// Source WPU

// global scope / window scope
// parameter akan selalu menjadi local scope

const z = 1;

function qq(z) {
  console.log(z);
  return;
}

console.log(qq(2)); // undefined

// Hoisting
/*
Hoisting merupakan hal yang unik dari JavaScript, yang jika tidak diketahui bisa menjadi bug atau mendatangkan error. JavaScript hoisting berkaitan dengan cara JavaScript mengeksekusi kode program, yang bisa "mengangkat" pendefinisian variabel dan function ke baris paling atas.
*/
