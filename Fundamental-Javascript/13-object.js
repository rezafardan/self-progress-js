/*
Object Sebagai Tipe DataDalam kaitan object sebagai tipe data, object mirip seperti array, yakni tipe data bentukan yang terdiri dari kumpulan tipe data lain. Object bisa diisi data string, number, boolean, bahkan object lain. Namun berbeda dengan array, object bisa memiliki function sendiri.Object ini juga bisa disebut sebagai container, yakni wadah yang digunakan untuk menampung berbagai data.
*/

let namaObject = {
  property1: "isi_property1",
  property2: "isi_property2",
  property3: "isi_property3",

  method1: function () {
    "isi method 1";
  },

  method2: function () {
    "isi method 2";
  },
};

console.log(namaObject);
// {
//     property1: 'isi_property1',
//     property2: 'isi_property2',
//     property3: 'isi_property3',
//     method1: [Function: method1],
//     method2: [Function: method2]
//   }

// Property dan cara mengakses property

let mahasiswa = {
  nama: "Reza",
  jurusan: "Teknik Informatika",
  ipk: 3.6,
  semester: 4,
  "alamat rumah": "Kepanjen",
};

// mengakses object dengan bracket notation biasanya dipakai saat mengakses object property dengan nama mengandung spasi atau karakter khusus
console.log(mahasiswa["alamat rumah"]); // Kepanjen
// console.log(mahasiswa.alamat rumah); // Error
console.log(mahasiswa["nama"]); // Reza
console.log(mahasiswa.nama); // Reza

// Menambah property

let siswa = {};
siswa.nama = "Reza";
console.log(siswa); // { nama: 'Reza' }

siswa["alamat lengkap"] = "Kepanjen";
console.log(siswa["alamat lengkap"]); // Kepanjen

// Method

siswa.pergi = (tempat) => `Pergi ke ${tempat}`;
console.log(siswa);

// let mahasiswa = {
//   nama: "Reza",
//   jurusan: "Teknik Informatika",
// };

// spread operator tidak bisa dipakai untuk mengcopy nested object. Object terdalam tetap akan di copy by reference
let mahasiswaBaru = { ...mahasiswa };

mahasiswaBaru.jurusan = "Ekonomi Manajemen";
console.log(mahasiswa.jurusan);
console.log(mahasiswaBaru.jurusan);

let mobil = {
  nama: "Toyota Avanza",
  tipe: "MVP",
  harga: 300000000,
  warna: "Merah",
};

for (let prop in mobil) {
  //   console.log(mobil);
  //   console.log(prop);
  console.log(mobil[prop]);
}
