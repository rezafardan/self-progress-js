// While
/*
Perulangan kedua yang akan kita bahas adalah while. Perulangan ini mirip seperti for, tapi dengan memisahkan bagian start, condition, dan increment.
*/

/*
start;
while (condition) {
    statement;
    increment;
}
*/

let i = 100;
while (i > 0) {
  console.log(i + " * 5 = " + i * 5);
  i = i - 5;
}
// hasil
// 100 * 5 = 500
// 95 * 5 = 475
// ..
// ..
// 10 * 5 = 50
// 5 * 5 = 25

let y = 1;
while (y <= 10) {
  if (y === 5) {
    break;
  }
  console.log("Cek perulangan while break ke-" + y);
  y = y + 1;
}
// Cek perulangan while break ke-1
// Cek perulangan while break ke-2
// Cek perulangan while break ke-3
// Cek perulangan while break ke-4

// Do While
/*
Perulangan do while sangat mirip seperti perulangan while. Bedanya, dalam perulangan do while kondisi di cek di akhir blok kode program
*/

/*
start;

do {
statement;
increment;
} while (condition)
*/

/*
Konsekuensi dari pemeriksaan yang dilakukan di akhir adalah, blok perulangan setidaknya akan diproses 1 kali, meskipun kondisi tersebut sudah tidak dipenuhi sejak awal. 
*/
let x = 1;

do {
  console.log(x + " kuadrat = " + x * x);
  x = x + 1;
} while (x <= 10);
// 1 kuadrat = 1
// 2 kuadrat = 4
// ..
// ..
// 9 kuadrat = 81
// 10 kuadrat = 100
