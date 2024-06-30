/*
Arrow notation adalah alternatif penulisan dari function expression. Disebut sebagai arrow notation, karena kita menggunakan karakter panah (arrow) => untuk membuat function. Arrow notation sendiri merupakan salah satu fitur baru di ECMAScript 6 yang memanfaatkan teknik menyimpan function ke dalam variabel.
*/

function kuadrat1(a) {
  return a * a;
}

console.log(kuadrat1(5));

const kuadrat2 = (b) => {
  return b * b;
};

console.log(kuadrat2(5));

const kuadrat3 = (c) => c * c;

console.log(kuadrat3(3));

const salam = () => "Selamat malam";

console.log(salam());
