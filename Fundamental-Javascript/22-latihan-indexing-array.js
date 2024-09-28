// Soal 1: Sangat Mudah
// Soal: Diberikan sebuah array let fruits = ['apple', 'banana', 'cherry', 'date']. Tampilkan elemen pertama dari array tersebut.

// Untuk mengakses elemen pertama dari array, gunakan indeks 0.

let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]); // Output: apple

// Soal 2: Mudah
// Soal: Diberikan sebuah array let colors = ['red', 'green', 'blue', 'yellow']. Tampilkan elemen terakhir dari array tersebut

let colors = ["red", "green", "blue", "yellow"];
console.log(colors[colors.length - 1]);

// Soal 3: Menengah
// Soal: Diberikan sebuah array let numbers = [10, 20, 30, 40, 50]. Gantilah elemen di indeks ke-2 (angka 30) menjadi 35, dan tampilkan array yang telah diubah.

// [10, 20, 35, 40, 50]

let numbers = [10, 20, 30, 40, 50];
numbers[2] = 35;
console.log(numbers);

// Soal 4: Sulit
// Soal: Diberikan sebuah array let letters = ['a', 'b', 'c', 'd', 'e']. Tukarlah elemen pertama dengan elemen terakhir, dan tampilkan array yang telah diubah.

// ['e', 'b', 'c', 'd', 'a']

let letters = ["a", "b", "c", "d", "e"];
let temp = letters[0];
letters[0] = letters[letters.length - 1];
letters[letters.length - 1] = temp;
console.log(letters);
