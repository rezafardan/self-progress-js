let text = "lorem ipsum dolor sir amet";

console.log(text.length); // 26

let str = "Javascript";

console.log(str.length); // 10
console.log(str[0]); // J

let testTrim = "      Tes Trim      ";
console.log(testTrim.trim()); // Tes Trim

// concat = menggabungkan string

let firstname = "Reza";
let lastname = "Fardan";

console.log(firstname + " " + lastname);
console.log(`${firstname} ${lastname}`);

let textTes = "Javascript";
console.log(textTes.slice(0, 4)); // Java
console.log(textTes.substring(0, 4)); // Java

let replacement = "Reza Fardan";
console.log(replacement.replace("Fardan", "Putra")); // Reza Putra

let arr = ["reza", "fardan", "adi", "putra"];

console.log(arr.join()); //reza,fardan,adi,putra
console.log(arr.join(" ")); // reza fardan adi putra

let tesSplit = "reza-fardan-adi-putra";
console.log(tesSplit.split()); // [ 'reza-fardan-adi-putra' ]
console.log(tesSplit.split("-")); // [ 'reza', 'fardan', 'adi', 'putra' ]

// mencari index dari text
let sentence = "lorem ipsum dolor sir amet";
console.log(sentence.indexOf("dolor")); // 12
console.log(sentence.lastIndexOf("sir")); // 18
console.log(sentence.includes("sir")); // true

let tes1 = "javascript";
let result = tes1[0].toLocaleUpperCase() + tes1.slice(1);
console.log(result); // Javascript

//STRING MANIPULATION
let greeting = "bELANDA";

//Indexing string
// console.log(greeting[6])

//Property
let countString = greeting.length;
// greeting[9]
const lastWord = greeting[greeting.length - 2];
console.log(lastWord);

//split (string to array)
const buah = "apel,jeruk,nanas";
const negara = "indonesia malaysia singapore";

const buahArr = buah.split(",");
const negaraArr = negara.split(" ");

//toUpperCase (huruf kapital)
const nama = "RiZal";
const upperName = nama.toUpperCase();

//toLowerCase
const lowerName = nama.toLowerCase();

const startChar = "ZAL";
const lowerStartChar = startChar.toLowerCase();

//Startwith
console.log(lowerName.startsWith(lowerStartChar), "perbandingan");

//END WITH
const email = "rizal@gmail.id";
console.log(email.endsWith(".id"), "perbandingan");

//includes
const char = "Saya sedang Belajar javascript";
const search = "belajar";

console.log(char.includes(search), "search");

//trim
const emailName = "  rizal@gmai.com  ";
const trimEmailName = emailName.trim();
console.log(trimEmailName.length);
console.log(emailName.length);

//replace
const kalimat = "Saya sedang belajar javascript, Saya makan bakso";
const replaceWord = "Aku";
const newKalimat = kalimat.replace("Saya", replaceWord);
console.log(newKalimat);

//replaceAll
const newKalimatAll = kalimat.replaceAll("Saya", replaceWord);
console.log(newKalimatAll);

console.log(lowerName);

const firstName = "Rizal";
const lastName = "Prasetya";

const numA = 1;
const numB = 10;
console.log(`jumlah ${numA + numB}`);

//Date and Time
// const now = Date();
const monthArr = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];
const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); //0-12
const date = now.getDate();
const day = now.getDay(); //0-6 start from Sunday
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

//Sun, 2-Jun-2024
const dateManipulation = `${dayArr[day]}, ${date}-${monthArr[month]}-${year}`;

const dateCustomDB = "2000-12-01 16:04";
const newDateCustomDB = new Date(dateCustomDB);
console.log(newDateCustomDB, "halo");
// coba cari hari
const stringDate = dateCustomDB.split(" ");
const fullDate = stringDate[0];
const time = stringDate[1];

const convertFullDate = fullDate.split("-");
const yearFullDate = Number(convertFullDate[0]);
const monthFullDate = Number(convertFullDate[1]);
const dateFulldate = Number(convertFullDate[2]);

console.log(dateFulldate, "halo");
// console.log(convertFullDate.)

const dateCustom = new Date(yearFullDate, monthFullDate - 1, dateFulldate);
console.log(dayArr[dateCustom.getDay()], "halo");

// const dateCustom = new Date(2020, 1, 28)
// console.log(dateCustom, 'date')

//Logic in programming
//- Conditional Stetment
//- Switch Case
//- Looping in JS
const password = "rahasia123";

if (password === "rahasia123") {
  console.log("Anda berhasil Login");
} else {
  console.log("Anda Gagal Login");
}

//Nilai 100 - 80 = A
//Nilai 79 - 70 = B
//Nilai 69 - 50 =C
//Nilai <40 = D

const nilai = prompt("Masukan Nilai Anda?");
const convertNilai = Number(nilai);

if (convertNilai <= 100 && convertNilai >= 80) {
  alert("A");
} else if (convertNilai < 80 && convertNilai >= 70) {
  alert("B");
} else if (convertNilai < 70 && convertNilai >= 60) {
  alert("C");
} else if (convertNilai < 60 && convertNilai >= 50) {
  alert("D");
} else if (convertNilai < 50 && convertNilai > 0) {
  alert("E");
} else {
  alert("Tidak Sesuai");
}
console.log(nilai, "nilai");

const emailAkun = "rizal@gmail.com";
const passwordAkun = "adminadmin";

if (emailAkun == "rizal@gmail.com") {
  if (password == "admin900") {
    console.log("Anda Berhasil Login");
  } else {
    console.log("Password Salah");
  }
} else {
  console.log("Email Belum terdaftar");
}

//Switch Case
const hari = "Minggu";
//enum
//senin,selasa,rabu,kamu

switch (hari) {
  case "Senin":
    console.log("Hari Kerja");
    break;
  case "Selasa":
    console.log("Hari Kerlas");
    break;
  case "Minggu":
    console.log("Hari Libur");
    break;
  default:
    console.log("Hari Libur");
}
//
