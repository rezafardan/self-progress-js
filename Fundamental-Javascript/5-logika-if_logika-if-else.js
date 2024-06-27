/*
Struktur logika if dipakai untuk membuat percabangan kode program yang bergantung apakah sebuah kondisi bisa terpenuhi atau tidak. Jika kondisi terpenuhi (bernilai true), jalankan kode program.
*/

/*
if (condition) {
statement
}
*/

let hari = "Senin";

// condition dalam () harus bernilai true agar bisa menjalankan statement di dalam {}
if (hari === "Senin") {
  console.log("Hari ini adalah senin");
}
// hasil Hari ini adalah senin

/*
if (condition) {
statement 1
} else {
 statement 2
}
*/

let sekarang = "Selasa";

if (sekarang === "Selasa") {
  console.log("Pergi olahraga");
} else {
  console.log("Waktunya bersantai");
}
// hasil Pergi olahraga

// If Else If

/*
if (condition 1) {
statement 1
} else if (contition 2) {
 statement 2
} else {
 statement 3}
*/

let username = 22.3;

if (typeof username === "string") {
  console.log("Username string");
} else if (typeof username === "number") {
  console.log("Username angka");
} else {
  console.log("Username bukan string dan angka");
}
// hasil Username angka

// Nested If Else

/*
if (condition 1) {
    statement 1
        if (condition 1-1){
        statement 1-1
        }
} else if (condition 2){
    statement 2
        if (condition 2-1){
        statement 2-1
        }
} else {
    statement 3
}
*/

let tes = 7;
console.log("nilai tes = " + tes); //nilai tes = 7

if (typeof tes === "number") {
  console.log("tes bertipe number");
  if (tes >= 10) {
    console.log("nilai tes lebih besar dari 10");
  } else {
    console.log("nilai tes lebih kecil dari 10");
  }
} else if (typeof tes === "string") {
  console.log("tes bertipe string");
} else {
  console.log("tes bukan bertipe number maupun string");
}
// hasil tes bertipe number
// hasil nilai tes lebih kecil dari 10
