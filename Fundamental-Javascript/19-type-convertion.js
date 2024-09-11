// koersi implisit / implicit coercion

const str = "5";
const num = 10;
console.log(str + num); // Hasil 510
console.log(Number(str) + num); // Hasil 15

// koersi eksplisit / explisit coercion

const string = "123";
const number = Number(string);
console.log(number); // Hasil 123 (sebagai Number bukan String)
