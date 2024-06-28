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
// 90 * 5 = 450
// 85 * 5 = 425
// 80 * 5 = 400
// 75 * 5 = 375
// 70 * 5 = 350
// 65 * 5 = 325
// 60 * 5 = 300
// 55 * 5 = 275
// 50 * 5 = 250
// 45 * 5 = 225
// 40 * 5 = 200
// 35 * 5 = 175
// 30 * 5 = 150
// 25 * 5 = 125
// 20 * 5 = 100
// 15 * 5 = 75
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
