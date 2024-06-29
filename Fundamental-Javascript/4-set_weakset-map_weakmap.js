// Tipe data Set
/*
Set adalah tipe data himpunan. Set ini mirip seperti array yang bisa menampung banyak data, akan tetapi data tersebut harus unik (tidak bisa menampung data ganda). Sama seperti symbol, tipe data set diperkenalkan di ES6
*/

let foo = new Set();
// Perintah new dan istilah method merupakan bagian dari pemrograman object JavaScript.

foo.add("Reza");
foo.add(26);
foo.add("Fardan");
foo.add(true);
foo.add("Reza"); // tipe data set yang tidak mengizinkan ada data ganda

console.log(foo); // Set(4) { 'Reza', 26, 'Fardan', true }

// Isi dari set juga bisa ditulis pada saat deklarasi
let bar = new Set(["Tes", 1, "Tes Tes", true]);

console.log(bar); // Set(4) { 'Tes', 1, 'Tes Tes', true }

// Ciri khas lain dari tipe data set adalah, tidak bisa mengakses element secara individu. Misalnya kalau di array, kita bisa menulis foo[0] untuk mengakses element pertama array, tapi hal yang sama tidak tersedia di set.

let baz = new Set(["Tes", 1, "Tes Tes", true]);

// Cek element
// Memeriksa ada atau tidaknya sebuah nilai di dalam set menggunakan method has()
console.log(baz.has("Tes")); // true
console.log(baz.has(1)); // true
console.log(baz.has("Tes 123")); // false

console.log(baz.size); // 4

// Menghapus 1 element di dalam set, gunakan method delete().
// Jika ingin menghapus semua element set, gunakan method clear()

baz.delete("Tes");
console.log(baz); // Set(3) { 1, 'Tes Tes', true }

baz.clear();
console.log(baz); // Set(0) {}

/* -----------------------------------------------------------*/

// Tipe data WeakSet
/*
Tipe data weakset mirip seperti tipe data set. Bedanya, element yang diisi harus berbentuk object, tidak bisa tipe data primitif seperti number, string atau boolean. Selain itu beberapa method seperti clear() dan size juga tidak tersedia.
*/

let siswa = new WeakSet();

let reza = { nama: "Reza" };
let fardan = { nama: "Fardan" };

siswa.add(reza);
siswa.add(fardan);

console.log(siswa.has(reza)); // true
console.log(siswa.has(fardan)); // true

siswa.delete(reza);
console.log(siswa); // WeakSet {{nama: 'Reza'},{nama: "Fardan"}}

/* -----------------------------------------------------------*/

// Tipe data Map

/*
Setiap element map terdiri dari pasangan key dan value. Key berfungsi sebagai nomor urut atau label dari map, sedangkan nilainya tersimpan di dalam value
*/
let a = new Map();

// Menambahkan element dengan method set
a.set(10, 20); // key = 10, value = 20
a.set("nama", "Reza");
a.set("huruf", ["a", "b", "c"]);

console.log(a); // Map(3) { 10 => 20, 'nama' => 'Reza', 'huruf' => [ 'a', 'b', 'c' ] }

// Mengakses element dengan method get
console.log(a.get(10)); // 20
console.log(a.get("nama")); // Reza
console.log(a.get("huruf")); // [ 'a', 'b', 'c' ]

/*
Mirip seperti set, tipe data map juga memiliki method has() untuk memeriksa element, delete() untuk menghapus 1 element, clear() untuk menghapus seluruh element, serta size untuk menghitung jumlah element
*/

console.log(a.has(10)); //true
console.log(a.has("nama")); //true
console.log(a.has("huruf")); //true

a.delete("huruf");
console.log(a); // Map(2) { 10 => 20, 'nama' => 'Reza' }

/* -----------------------------------------------------------*/

// Tipe data WeakMap

/*
Tipe data weakmap mirip seperti map. Bedanya, key element harus berbentuk object, tidak bisa menggunakan tipe data primitif seperti number, string atau boolean. Selain itu beberapa method seperti clear() dan size juga tidak tersedia
*/

let b = new WeakMap();

let o1 = {};
let o2 = { 1: "Hai" };
console.log(b);

b.set(o1, "Halo");
b.set(o2, "Anyeong");
console.log(b);

// Mengakses element dengan method get()
console.log(b.get(o1)); // Halo
console.log(b.get(o2)); // Anyeong

// Menghapus element dengan method delete()
b.delete(o1);
console.log(b.get(o1)); // undefined
console.log(b.get(o2)); // Anyeong
