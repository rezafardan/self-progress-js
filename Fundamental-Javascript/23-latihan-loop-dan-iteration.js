// 1. Buat loop for yang mencetak angka dari 1 hingga 10

// for (let a = 1; a <= 10; a++) {
//   console.log(a);
// }
// Penjelasan:

// Loop dimulai dari i = 1.
// Selama i <= 10 bernilai true, loop akan berjalan.
// Pada setiap iterasi, nilai i akan bertambah 1 (i++).
// Analogi: Anggap ini seperti Anda sedang menghitung jumlah buku di rak, mulai dari buku pertama hingga buku ke-10.

// 2. Gunakan while loop untuk mencetak angka dari 5 hingga 15

// let a = 5;
// while (a <= 15) {
//   console.log(a);
//   a = a + 1;
// }
// Penjelasan:

// Variabel i mulai dari 5.
// Selama i <= 15, loop akan berjalan, lalu i ditingkatkan setiap iterasi.
// Analogi: Ini seperti Anda menunggu lift yang dimulai dari lantai 5 dan Anda ingin mencatat setiap lantai sampai lantai 15.

// 3. Buat loop for yang mencetak hanya angka genap dari 0 hingga 20

// for (let a = 0; a <= 100; a = a + 2) {
//   console.log(a);
// }
// Penjelasan:

// Loop dimulai dari i = 0.
// Pada setiap iterasi, i bertambah 2 (i += 2), sehingga hanya angka genap yang dicetak.
// Analogi: Bayangkan Anda melompat di trotoar tetapi hanya menginjak garis yang terletak setiap dua batu loncatan.

// 4. Gunakan for...of untuk mencetak setiap elemen dari array ['apple', 'banana', 'cherry']

// let a = ["apple", "banana", "cherry"];
// for (let b of a) {
//   console.log(b);
// }
// Penjelasan:

// for...of mengiterasi setiap elemen dalam array fruits.
// Setiap elemen dicetak satu per satu.
// Analogi: Ini seperti Anda mengambil buah satu per satu dari keranjang dan menyebutkan namanya.

// 5. Buat sebuah objek person dengan properti name, age, dan city. Gunakan for...in untuk mencetak setiap properti dan nilainya

// let person = {
//   name: "reza",
//   age: "26",
//   city: "Malang",
// };
// for (let a in person) {
//   console.log(`${a} : ${person[a]}`);
// }
// Penjelasan:

// for...in mengiterasi setiap properti dalam objek person.
// Pada setiap iterasi, kita mencetak nama properti (key) dan nilainya (person[key]).
// Analogi: Bayangkan Anda sedang melihat kartu identitas seseorang dan menyebutkan setiap detail yang ada di kartu tersebut.

// 6. Buat sebuah do...while loop yang akan mencetak angka dari 10 hingga 1 (hitungan mundur)

// let a = 10;
// do {
//   console.log(a);
//   a = a - 1;
// } while (a > 0);
// Penjelasan:

// Loop dimulai dari a = 10.
// Blok kode di dalam do akan dijalankan setidaknya satu kali sebelum memeriksa kondisi a > 0.
// i dikurangi satu pada setiap iterasi (a--).
// Analogi: Ini seperti menyalakan kembang api dan menghitung mundur dari 10 hingga 1, tanpa peduli apakah kondisi awal sudah benar.

// 7. Gunakan forEach untuk mengiterasi array [2, 4, 6, 8, 10] dan cetak hasil kali dari setiap elemen dengan 2

// let a = [2, 4, 6, 8, 10];
// a.forEach((value, index) => {
//   console.log(`No.${index + 1} > ${value} * 2 adalah ${value * 2}`);
// });
// Penjelasan:

// forEach mengiterasi setiap elemen dalam array numbers.
// Pada setiap iterasi, hasil kali dari value * 2 dicetak.
// Analogi: Ini seperti menggandakan jumlah mainan yang dimiliki setiap anak dalam kelompok.

// 8. Buat loop for yang mencetak angka dari 1 hingga 10, tetapi lewati angka yang habis dibagi 3

// for (let a = 1; a <= 10; a++) {
//   if (a % 3 !== 0) {
//     console.log(a);
//   }
// }
// Penjelasan:

// Loop dimulai dari a = 1.
// Ketika a habis dibagi 3, continue akan melewatkan iterasi saat itu dan lanjut ke berikutnya.
// Analogi: Bayangkan Anda sedang menghitung kelereng, tapi setiap kelereng ketiga adalah kelereng yang rusak, jadi Anda lewati untuk tidak dihitung.

// 9. Buat loop while yang akan terus meminta pengguna memasukkan angka hingga pengguna memasukkan angka lebih dari 100

// let number;
// while (number <= 100) {
//   number = parseInt(prompt('Masukkan angka lebih dari 100: '));
// }
// Penjelasan:

// Loop akan terus berjalan hingga number > 100.
// prompt() digunakan untuk meminta input dari pengguna.
// Analogi: Ini seperti meminta seseorang melempar bola ke atas hingga melewati batas tinggi tertentu; Anda terus memintanya mencoba sampai akhirnya bola itu melebihi batas.

// 10. Buat nested loop (loop di dalam loop) untuk mencetak pola berikut:

// *
// **
// ***
// ****
// *****

// for (let a = 1; a <= 5; a = a + 1) {
//   let stars = "";
//   for (let b = 1; b <= a; b = b + 1) {
//     stars = stars + "*";
//   }
//   console.log(stars);
// }
// Penjelasan:

// Loop luar (i) menentukan jumlah baris.
// Loop dalam (j) menambahkan bintang (*) ke dalam variabel stars.
// Setiap iterasi dari loop luar mencetak stars dengan panjang bertambah.
// Analogi: Bayangkan membangun piramida dengan batu bata, di mana setiap baris berikutnya memiliki satu batu lebih banyak daripada baris sebelumnya.

// 1. (Mudah) Function untuk Menghitung Jumlah Angka dari 1 hingga n
// Buatlah sebuah function sumNumbers(n) yang menerima satu parameter n. Function ini harus menggunakan loop untuk menghitung dan mengembalikan jumlah angka dari 1 hingga n.

function menghitung(n) {
  for (let a = n; a > 0; a = a - 1) {
    console.log(a);
  }
}
menghitung(10);
