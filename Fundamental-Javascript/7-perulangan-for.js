/*
Perulangan atau dalam bahasa inggris disebut sebagai loop, adalah struktur kode program yang dipakai untuk mengulang beberapa baris perintah. Perulangan sangat memudahkan kita menjalankan perintah yang sama secara terus menerus. Di dalam JavaScript terdapat 3 struktur perulangan, yakni for, while, dan do while.
*/

// For
/*
for (start; condition; increment){
statement;
}
*/

//Start diisi dengan kondisi awal perulangan. Biasanya ini berisi perintah inisialisasi variabel counter untuk mengontrol perulangan seperti let i = 1. Variabel i di sini berperan sebagai variabel counter.

//Condition biasanya diisi operasi perbandingan, selama operasi ini menghasilkan nilai true, perulangan akan terus berjalan. Sebagai contoh, jika saya menulis i < 10, artinya perulangan akan terus berjalan selama nilai variabel i kurang dari 10.

//Increment diisi dengan instruksi untuk menaikkan nilai variabel counter. Dalam setiap perulangan, baris ini akan di eksekusi. Sebagai contoh, jika increment diisi i++, maka nilai variabel i akan naik sebanyak 1 angka dalam setiap perulangan.”

for (let i = 1; i <= 10; i++) {
  console.log("ini perulangan for ke - ", i);
}
// hasil =
// ini perulangan for ke -  1
// ini perulangan for ke -  2
// ini perulangan for ke -  3
// ini perulangan for ke -  4
// ini perulangan for ke -  5
// ini perulangan for ke -  6
// ini perulangan for ke -  7
// ini perulangan for ke -  8
// ini perulangan for ke -  9
// ini perulangan for ke -  10

for (let i = 10; i >= 1; i--) {
  console.log("ini perulangan for ke - ", i);
}
// hasil =
// ini perulangan for ke -  10
// ini perulangan for ke -  9
// ini perulangan for ke -  8
// ini perulangan for ke -  7
// ini perulangan for ke -  6
// ini perulangan for ke -  5
// ini perulangan for ke -  4
// ini perulangan for ke -  3
// ini perulangan for ke -  2
// ini perulangan for ke -  1

for (let i = 0; i <= 20; i += 2) {
  // harus i = i + 2, kalau pakai i + 2 maka akan infinity looping (i + 2 berbeda dengan i = i + 2 >> atau tulis saja i+= 2)
  console.log("ini perulangan for ke - ", i);
}
// hasil
// ini perulangan for ke -  0
// ini perulangan for ke -  2
// ini perulangan for ke -  4
// ini perulangan for ke -  6
// ini perulangan for ke -  8
// ini perulangan for ke -  10
// ini perulangan for ke -  12
// ini perulangan for ke -  14
// ini perulangan for ke -  16
// ini perulangan for ke -  18
// ini perulangan for ke -  20

// membuat perulangan yang menghasilkan nilai 10, 20, 30, dst
for (let i = 10; i <= 100; i = i + 10) {
  console.log(i);
}
// hasil
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100

// Nested For

/*
for(start1;condition1;increment1){
    statement1;
        for(start2;condition2;increment2){
        statement2;
        }
}
*/

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 2; j++)
    console.log("variabel i adalah : ", i, " variabel j adalah : ", j);
}
// hasil
// variabel i adalah :  1  variabel j adalah :  1
// variabel i adalah :  1  variabel j adalah :  2
// variabel i adalah :  2  variabel j adalah :  1
// variabel i adalah :  2  variabel j adalah :  2
// variabel i adalah :  3  variabel j adalah :  1
// variabel i adalah :  3  variabel j adalah :  2
// variabel i adalah :  4  variabel j adalah :  1
// variabel i adalah :  4  variabel j adalah :  2

// contoh perubahan feature tes
