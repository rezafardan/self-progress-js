// Soal 1: Sangat Mudah
// Soal: Buatlah program yang memeriksa apakah suatu angka positif, negatif, atau nol.

let number = 9123;

if (number < 0) {
  console.log("Angka Negatif");
} else if (number > 0) {
  console.log("Angka Positif");
} else if (number === 0) {
  console.log("Angka Nol");
}

// Soal 2: Mudah
// Soal: Buatlah program yang memeriksa apakah suatu tahun adalah tahun kabisat atau bukan.

let year = 2025;

if (year % 400 === 0 || year % 100 === 0 || year % 4 === 0) {
  console.log("Tahun Kabisat");
} else {
  console.log("Bukan Tahun Kabisat");
}

// Soal 3: Menengah
// Soal: Buatlah program yang menentukan nilai huruf berdasarkan nilai angka.

// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Di bawah 60

// let score = 89;

// if (score >= 90 && score <= 100) {
//   console.log("Nilai A");
// } else if (score >= 80 && score <= 89) {
//   console.log("Nilai B");
// } else if (score >= 70 && score <= 79) {
//   console.log("Nilai C");
// } else if (score >= 60 && score <= 69) {
//   console.log("Nilai D");
// } else if (score < 60) {
//   console.log("Nilai F");
// } else {
//   console.log("Inputan diluar Score");
// }

let score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Nilai:", grade);

// Soal 4: Sulit
// Soal: Buatlah program yang memeriksa apakah tiga sisi dapat membentuk segitiga, dan jika iya, tentukan jenis segitiganya (sama sisi, sama kaki, atau sembarang).

// Syarat segitiga: a + b > c, a + c > b, dan b + c > a.
// Segitiga sama sisi: ketiga sisinya sama.
// Segitiga sama kaki: dua sisinya sama.
// Segitiga sembarang: tidak ada sisi yang sama.

let a = 1,
  b = 1,
  c = 2;

if (a == b && a == c) {
  console.log("Sama Sisi");
} else if (a == b || a == c || b == c) {
  console.log("Sama Kaki");
} else {
  console.log("Sembarang");
}

// Soal 5: Sangat Sulit
// Soal: Buatlah program yang menerima dua bilangan sebagai input dan menentukan operasi aritmatika apa yang perlu dilakukan (penjumlahan, pengurangan, perkalian, atau pembagian) agar hasilnya sama dengan bilangan ketiga yang diberikan.

// Program harus menentukan apakah num1 + num2, num1 - num2, num1 * num2, atau num1 / num2 menghasilkan result.

// let num1 = 20,
//   num2 = 2,
//   result = 40;

// if (result % num1 == 0 && result % num2 == 0) {
//   console.log("Perkalian");
// } else if (result * num1 == num2 || result * num2 == num1) {
//   console.log("Pembagian");
// } else if (result - num1 == num2 || result - num2 == num1) {
//   console.log("Penjumlahan");
// } else if (result + num1 == num2 || result + num2 == num1) {
//   console.log("Pengurangan");
// }

let num1 = 6,
  num2 = 3,
  result = 18;

if (num1 + num2 === result) {
  console.log("Penjumlahan");
} else if (num1 - num2 === result) {
  console.log("Pengurangan");
} else if (num1 * num2 === result) {
  console.log("Perkalian");
} else if (num1 / num2 === result) {
  console.log("Pembagian");
} else {
  console.log("Tidak ada operasi yang cocok");
}

// Soal 6: Sangat Mudah
// Soal: Buatlah program yang memeriksa apakah sebuah angka genap atau ganjil.

// Jika angka habis dibagi 2, maka itu adalah angka genap.
// Jika tidak, maka itu adalah angka ganjil.

let nomor = 12;

if (nomor % 2 == 0) {
  console.log("Angka Genap");
} else {
  console.log("Angka Ganjil");
}

// Soal 7: Mudah
// Soal: Buatlah program yang menentukan apakah suatu karakter adalah huruf vokal atau konsonan.

// Huruf vokal: 'a', 'e', 'i', 'o', 'u' (baik huruf kecil maupun besar).
// Huruf selain vokal adalah konsonan.

let char = "a";

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u" ||
  char === "A" ||
  char === "E" ||
  char === "I" ||
  char === "O" ||
  char === "U"
) {
  console.log("Vokal");
} else {
  console.log("Konsonan");
}

// Soal 8: Menengah
// Soal: Buatlah program yang memeriksa apakah suatu angka merupakan kelipatan dari 3, 5, atau keduanya.

// Jika angka habis dibagi 3 dan 5, tampilkan "Kelipatan dari 3 dan 5".
// Jika hanya habis dibagi 3, tampilkan "Kelipatan dari 3".
// Jika hanya habis dibagi 5, tampilkan "Kelipatan dari 5".
// Jika tidak, tampilkan "Bukan kelipatan dari 3 atau 5".

let num3 = 22;

if (num3 % 3 == 0 && num3 % 5 == 0) {
  console.log("Kelipatan dari 3 dan 5");
} else if (num3 % 3 == 0) {
  console.log("Kelipatan 3");
} else if (num3 % 5 == 0) {
  console.log("Kelipatan 5");
} else {
  console.log("Bukan kelipatan dari 3 atau 5");
}

// Soal 9: Sulit
// Soal: Buatlah program yang memeriksa apakah suatu kata adalah palindrom (kata yang sama jika dibaca dari depan maupun belakang).

// Palindrom adalah kata yang tetap sama jika dibalik, seperti "level" atau "madam".
// Anda perlu memeriksa apakah kata yang diberikan sama dengan versi terbaliknya.

let word = "madam";
let reserveWord = word.split("").reverse().join("");

console.log(reserveWord);

if (word != reserveWord) {
  console.log("Bukan Palindrom");
} else {
  console.log("Palindrom");
}

// Soal 10: Sangat Sulit
// Soal: Buatlah program yang menentukan kategori usia berdasarkan input umur. Kategorinya adalah:

// Bayi: 0-2 tahun
// Anak-anak: 3-12 tahun
// Remaja: 13-17 tahun
// Dewasa: 18-59 tahun
// Lansia: 60 tahun ke atas

let age = 45;

if (age >= 0 && age <= 2) {
  console.log("Bayi");
} else if (age >= 3 && age <= 12) {
  console.log("Anak-anak");
} else if (age >= 13 && age <= 17) {
  console.log("Remaja");
} else if (age >= 18 && age <= 59) {
  console.log("Dewasa");
} else if (age >= 60) {
  console.log("Lansia");
} else {
  console.log("Umur tidak valid");
}
