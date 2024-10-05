// Studi Kasus 1: Kalkulator Tip
/*
Deskripsi:
Anda sedang makan di restoran dan ingin menghitung jumlah tip yang harus Anda berikan.
Buatlah sebuah fungsi yang menghitung jumlah tip berdasarkan total tagihan dan persentase tip.

Spesifikasi:
1. Fungsi harus menerima dua parameter: total tagihan dan persentase tip
2. Fungsi harus mengembalikan jumlah tip yang dihitung
3. Hasil perhitungan harus dibulatkan ke dua angka desimal

Contoh penggunaan:
calculateTip(50.00, 15) => 7.50
calculateTip(29.95, 20) => 5.99

Tantangan tambahan:
- Tambahkan validasi input untuk memastikan total tagihan dan persentase tip adalah angka positif
- Tambahkan parameter opsional untuk jumlah orang yang berbagi tagihan, dan hitung tip per orang
*/

// Implementasi fungsi Anda di sini

function calculateTip(totalPayment, tipPercent, jumlahOrang = 1) {
  if (totalPayment <= 0 || tipPercent <= 0 || jumlahOrang <= 0) {
    return "Total pembayaran, persentase tip, dan jumlah orang harus positif.";
  }
  let tip = totalPayment * (tipPercent / 100);
  let tipPerson = tip / jumlahOrang;

  tip = parseFloat(tip.toFixed(2));
  tipPerson = parseFloat(tipPerson.toFixed(2));

  return jumlahOrang > 1
    ? `Total tip: ${tip}, Tip per orang: ${tipPerson}`
    : tip;
}

console.log(calculateTip(100000, 10, 3));

// Studi Kasus 2: Pengubah Kasus Kata
/*
Deskripsi:
Anda sedang membuat aplikasi pemrosesan teks dan perlu mengubah kasus (case) dari string input.
Buatlah fungsi yang dapat mengubah string menjadi camelCase, PascalCase, snake_case, dan kebab-case.

Spesifikasi:
1. Fungsi harus menerima dua parameter: string input dan jenis kasus yang diinginkan
2. Fungsi harus mengembalikan string yang telah diubah sesuai dengan kasus yang diminta
3. Fungsi harus dapat menangani input dengan spasi, tanda hubung, dan garis bawah

Contoh penggunaan:
changeCase("hello world", "camelCase") => "helloWorld"
changeCase("hello world", "PascalCase") => "HelloWorld"
changeCase("hello world", "snake_case") => "hello_world"
changeCase("hello world", "kebab-case") => "hello-world"

Tantangan tambahan:
- Tambahkan penanganan untuk input yang sudah dalam salah satu format kasus
- Implementasikan penanganan kesalahan untuk jenis kasus yang tidak valid
*/

// Implementasi fungsi Anda di sini

function changeCase(text, x) {
  let textSplit = text.split(" ");

  if (text === "") {
    return;
  }

  if (x === "camelCase") {
    // replace kata pertama setelah spasi dengan huruf kapital lalu hilangkan spasi
    let text1 = textSplit[0].toLowerCase();
    let text2 = textSplit[1].split("");
    let text2LetterFirst = text2[0].toUpperCase();
    let text2Join = text2.shift();
    let text2Final = text2LetterFirst + text2.join("");
    console.log(text1 + text2Final);
  } else if (x === "PascalCase") {
    // replace kata pertama dari 2 kata input, ganti dengan huruf kapital lalu gabungkan
    let text1 = textSplit[0].split("");
    let text2 = textSplit[1].split("");
    let text1LetterFirst = text1[0].toUpperCase();
    let text2LetterFirst = text2[0].toUpperCase();
    text1Join = text1.shift();
    text2Join = text2.shift();
    let text1Final = text1LetterFirst + text1.join("");
    let text2Final = text2LetterFirst + text2.join("");
    console.log(text1Final + text2Final);
  } else if (x === "snake_case") {
    let textFinal = text.toLowerCase().replace(" ", "_");
    console.log(textFinal);
  } else if (x === "kebab-case") {
    let textFinal = text.toLowerCase().replace(" ", "-");
    console.log(textFinal);
  } else {
    console.log("Parameter kedua tidak diketahui");
  }
}

// Studi Kasus 3: Analisis Teks
/*
Deskripsi:
Anda sedang mengembangkan alat analisis teks untuk sebuah platform blogging.
Buatlah fungsi yang dapat menganalisis sebuah teks dan memberikan statistik tentang teks tersebut.

Spesifikasi:
1. Fungsi harus menerima satu parameter: string teks yang akan dianalisis
2. Fungsi harus mengembalikan objek dengan properti berikut:
   - wordCount: jumlah kata dalam teks
   - charCount: jumlah karakter (termasuk spasi)
   - sentenceCount: jumlah kalimat (diakhiri dengan '.', '!', atau '?')
   - paragraphCount: jumlah paragraf (dipisahkan oleh baris kosong)
   - averageWordLength: rata-rata panjang kata
   - longestWord: kata terpanjang dalam teks
3. Fungsi harus mengabaikan spasi berlebih dan baris kosong dalam perhitungan

Contoh penggunaan:
analyzeText("Hello world. This is a test.\n\nHow are you?")
=> {
     wordCount: 8,
     charCount: 39,
     sentenceCount: 3,
     paragraphCount: 2,
     averageWordLength: 3.75,
     longestWord: "Hello"
   }

Tantangan tambahan:
- Tambahkan penghitungan frekuensi kata (5 kata yang paling sering muncul)
- Implementasikan deteksi bahasa sederhana berdasarkan kata-kata umum
*/

function analyzeText(text) {
  let wordsCount = text.split(" ").length;
  let charCount = text.replaceAll(" ", "").split("").length;

  return console.log({
    wordsCount: wordsCount,
    charCount: charCount,
  });
}

analyzeText("Halo nama saya reza");

// Implementasi fungsi Anda di sini

// Studi Kasus 4: Validasi dan Formatting Nomor Telepon
/*
Deskripsi:
Anda sedang membuat sistem manajemen kontak dan perlu memvalidasi serta memformat nomor telepon.
Buatlah fungsi yang dapat memvalidasi dan memformat nomor telepon untuk berbagai negara.

Spesifikasi:
1. Fungsi harus menerima dua parameter: string nomor telepon dan kode negara (opsional, default "US")
2. Fungsi harus mengembalikan objek dengan properti:
   - isValid: boolean yang menunjukkan apakah nomor valid
   - formattedNumber: string nomor yang telah diformat (jika valid)
   - countryCode: kode negara yang terdeteksi
3. Fungsi harus dapat menangani berbagai format input (dengan atau tanpa kode negara, dengan atau tanpa tanda hubung/spasi)
4. Implementasikan aturan validasi untuk setidaknya 3 negara (mis. US, UK, dan Indonesia)

Contoh penggunaan:
validatePhone("1234567890", "US") 
=> { isValid: true, formattedNumber: "(123) 456-7890", countryCode: "US" }

validatePhone("+44 20 7123 4567") 
=> { isValid: true, formattedNumber: "+44 20 7123 4567", countryCode: "UK" }

validatePhone("081234567890") 
=> { isValid: true, formattedNumber: "+62 812-3456-7890", countryCode: "ID" }

Tantangan tambahan:
- Tambahkan lebih banyak negara dan aturan validasi
- Implementasikan pengenalan otomatis negara berdasarkan pola nomor
*/

// Implementasi fungsi Anda di sini

// Studi Kasus 5: Kalkulator Pinjaman
/*
Deskripsi:
Anda diminta untuk membuat kalkulator pinjaman untuk sebuah bank online.
Buatlah fungsi yang dapat menghitung pembayaran bulanan, total pembayaran, dan rincian amortisasi untuk pinjaman.

Spesifikasi:
1. Fungsi harus menerima tiga parameter: jumlah pinjaman, jangka waktu (dalam tahun), dan suku bunga tahunan
2. Fungsi harus mengembalikan objek dengan properti:
   - monthlyPayment: pembayaran bulanan
   - totalPayment: total pembayaran selama jangka waktu pinjaman
   - totalInterest: total bunga yang dibayarkan
   - amortizationSchedule: array objek yang berisi rincian setiap pembayaran (saldo awal, pembayaran pokok, pembayaran bunga, saldo akhir)
3. Perhitungan harus menggunakan rumus amortisasi standar
4. Hasil perhitungan harus dibulatkan ke dua angka desimal

Contoh penggunaan:
calculateLoan(200000, 30, 3.92)
=> {
     monthlyPayment: 944.09,
     totalPayment: 339872.40,
     totalInterest: 139872.40,
     amortizationSchedule: [
       { month: 1, beginningBalance: 200000.00, principal: 284.09, interest: 660.00, endingBalance: 199715.91 },
       { month: 2, beginningBalance: 199715.91, principal: 285.03, interest: 659.06, endingBalance: 199430.88 },
       // ... (lanjutan untuk semua bulan)
     ]
   }

Tantangan tambahan:
- Tambahkan opsi untuk pembayaran ekstra atau pelunasan dini
- Implementasikan perbandingan antara berbagai skenario pinjaman (mis. jangka waktu atau suku bunga yang berbeda)
*/

// Implementasi fungsi Anda di sini

// Studi Kasus 6: Generator dan Validator Password
/*
Deskripsi:
Anda diminta untuk mengembangkan sistem manajemen password untuk sebuah aplikasi keamanan.
Buatlah dua fungsi: satu untuk menghasilkan password yang kuat, dan satu lagi untuk memvalidasi kekuatan password.

Spesifikasi Generator Password:
1. Fungsi harus menerima parameter opsional untuk panjang password (default 12)
2. Password yang dihasilkan harus memenuhi kriteria berikut:
   - Minimal satu huruf besar
   - Minimal satu huruf kecil
   - Minimal satu angka
   - Minimal satu karakter khusus (!@#$%^&*)
3. Fungsi harus mengembalikan string password yang dihasilkan

Spesifikasi Validator Password:
1. Fungsi harus menerima satu parameter: string password yang akan divalidasi
2. Fungsi harus mengembalikan objek dengan properti:
   - isStrong: boolean yang menunjukkan apakah password kuat
   - score: skor kekuatan password (0-100)
   - feedback: array string yang berisi saran untuk meningkatkan kekuatan password
3. Kriteria untuk password yang kuat:
   - Minimal 8 karakter
   - Mengandung huruf besar dan kecil
   - Mengandung angka
   - Mengandung karakter khusus
   - Tidak mengandung kata-kata umum atau pola yang mudah ditebak

Contoh penggunaan:
const generatedPassword = generatePassword(16);
console.log(generatedPassword); // Contoh: "P@ssw0rd!Str0ng"

const validationResult = validatePassword("weakpass");
console.log(validationResult);
// {
//   isStrong: false,
//   score: 30,
//   feedback: [
//     "Password terlalu pendek",
//     "Tambahkan huruf besar",
//     "Tambahkan angka",
//     "Tambahkan karakter khusus"
//   ]
// }

Tantangan tambahan:
- Implementasikan opsi untuk menghasilkan password yang mudah diingat (mis. menggunakan kata-kata acak)
- Tambahkan pengecekan terhadap database password yang umum atau yang pernah diretas
*/

// Implementasi fungsi Anda di sini

// SANGAT MUDAH

// 1. Buat fungsi yang mencetak "Hello, World!" ke konsol
function helloWorld() {
  console.log("Hello, World!");
}

// 2. Buat fungsi yang menerima nama sebagai parameter dan mencetak salam
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 3. Buat fungsi yang mengembalikan hasil penjumlahan dua angka
function add(a, b) {
  return a + b;
}

// MUDAH

// 4. Buat fungsi untuk menghitung luas persegi panjang
function rectangleArea(length, width) {
  return length * width;
}

// 5. Buat fungsi untuk mengkonversi Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 6. Buat fungsi untuk menentukan apakah sebuah angka ganjil atau genap
function isEven(number) {
  return number % 2 === 0;
}

// MENENGAH

// 7. Buat fungsi untuk menghitung faktorial sebuah angka
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 8. Buat fungsi untuk membalik string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 9. Buat fungsi untuk menghitung jumlah vokal dalam sebuah string
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;
}

// SULIT

// 10. Buat fungsi untuk menghasilkan angka Fibonacci ke-n
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 11. Buat fungsi untuk memeriksa apakah sebuah kata adalah palindrome
function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanWord === cleanWord.split("").reverse().join("");
}

// 12. Buat fungsi untuk mengurutkan array menggunakan algoritma bubble sort
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// SANGAT SULIT

// 13. Buat fungsi untuk menyelesaikan masalah "Tower of Hanoi"
function towerOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, auxRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// 14. Buat fungsi untuk menghitung nilai pi menggunakan Metode Monte Carlo
function estimatePi(iterations) {
  let insideCircle = 0;
  for (let i = 0; i < iterations; i++) {
    const x = Math.random();
    const y = Math.random();
    if (x * x + y * y <= 1) insideCircle++;
  }
  return (4 * insideCircle) / iterations;
}

// 15. Buat fungsi untuk melakukan deep clone pada objek kompleks
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

// SANGAT KOMPLEKS

// 16. Buat fungsi untuk menyelesaikan masalah "N-Queens"
function solveNQueens(n) {
  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const solutions = [];

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  function backtrack(row) {
    if (row === n) {
      solutions.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  backtrack(0);
  return solutions;
}

// 17. Buat fungsi untuk mengimplementasikan algoritma kompresi Huffman
class HuffmanNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function buildHuffmanTree(text) {
  const freqMap = new Map();
  for (let char of text) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  const pq = Array.from(freqMap, ([char, freq]) => new HuffmanNode(char, freq));
  pq.sort((a, b) => a.freq - b.freq);

  while (pq.length > 1) {
    const left = pq.shift();
    const right = pq.shift();
    const parent = new HuffmanNode(null, left.freq + right.freq);
    parent.left = left;
    parent.right = right;
    pq.push(parent);
    pq.sort((a, b) => a.freq - b.freq);
  }

  return pq[0];
}

function generateHuffmanCodes(root) {
  const codes = new Map();
  function traverse(node, code) {
    if (node.char) {
      codes.set(node.char, code);
      return;
    }
    traverse(node.left, code + "0");
    traverse(node.right, code + "1");
  }
  traverse(root, "");
  return codes;
}

function huffmanCompress(text) {
  const root = buildHuffmanTree(text);
  const codes = generateHuffmanCodes(root);
  let compressed = "";
  for (let char of text) {
    compressed += codes.get(char);
  }
  return compressed;
}

// Penggunaan:
// const text = "this is an example for huffman encoding";
// console.log(huffmanCompress(text));
