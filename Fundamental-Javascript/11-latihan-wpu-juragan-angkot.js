// Juragan Angkot

// 1. ada tempat penumpang
// 2. varialel penumpang adalah array

/*
1. fungsi penumpang naik
dengan fungsi tambahPenumpang() dengan 2 parameter yaitu (namaPenumpang, arrayPenumpang)
aturan : 
jika angkot kosong penumpang duduk di kursi pertama
penumpang berikutnya duduk di kursi kedua dst
jika ada kursi kosong (penumpang turun), maka penumpang berikutnya akan duduk di kursi yang kosong tersebut
asumsi kursi tidak akan penuh
nama penumpang tidak boleh sama

2. fungsi penumpang turun
dengan fungsi hapusPenumpang()

*/

// let penumpang = ["Adi", undefined, "Putra"];
// function tambahPenumpang(namaPenumpang, tes) {
//   // jika angkot kosong
//   if (penumpang.length == 0) {
//     // tambah penumpang di awal array
//     penumpang.push(namaPenumpang);
//     // kembalikan isi array dan keluar dari function
//     return penumpang;
//     //else
//   } else {
//     // telusuri seluruh kursi dari awal
//     for (let i = 0; i < penumpang.length; i++) {
//       // jika ada kursi kosong
//       if (penumpang[i] == undefined) {
//         // tambah penumpang dari kursi tersebut
//         penumpang[i] = namaPenumpang;
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika sudah ada nama yang sama
//       } else if (penumpang[i] == namaPenumpang) {
//         // tampilkan pesan kesalahannya
//         console.log("Maaf nama ", penumpang[i], "sudah ada");
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//         // jika seluruh kursi terisi
//       } else if (i == penumpang.length - 1) {
//         // tambah penumpang di akhir array
//         penumpang.push(namaPenumpang);
//         // kembalikan isi array dan keluar dari function
//         return penumpang;
//       }
//     }
//   }
// }

// console.log(tambahPenumpang("Reza"));
// console.log(tambahPenumpang("Fardan"));
// console.log(tambahPenumpang("Jojo"));
// console.log(tambahPenumpang("Adi"));

let penumpang = [];
let tambahPenumpang = function (namaPenumpang) {
  if (penumpang.length == 0) {
    // jika array didalam penumpang isi nya 0 maka
    penumpang.push(namaPenumpang); // nama penumpang di tambahkan ke array penumpang
    return penumpang; // tampilkan nilai dari array penumpang
  } else {
    // jika tidak maka
    for (let i = 0; i < penumpang.length; i++) {
      // cek isi dari array penumpang dengan index
      if (penumpang[i] === namaPenumpang) {
        // jika didalam index penumpang ada nama yang sama dengan nama penumpang maka
        console.log(penumpang[i], "Sudah ada"); // beritahu bahwa nama penumpang dari index sudah ada
        return penumpang; // tampilkan nilai dari array penumpang
      } else if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
    }
    penumpang.push(namaPenumpang);
    return penumpang;
  }
};

let hapusPenumpang = function (namaPenumpang) {
  if (penumpang.length == 0) {
    console.log("Belum ada penumpang di dalam angkot");
    return;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        penumpang.splice(penumpang.indexOf(namaPenumpang), 1, undefined);
        console.log(namaPenumpang, "Berhasil dihapus");
      } else if (penumpang[i] !== namaPenumpang) {
        console.log("Tidak ada nama ", namaPenumpang, " di dalam Angkot");
        break;
      }
    }
    return penumpang;
  }
};

console.log(tambahPenumpang("Reza"));
console.log(tambahPenumpang("Fardan"));
console.log(tambahPenumpang(undefined));
console.log(tambahPenumpang("Adi"));
console.log(tambahPenumpang("Putra"));
console.log(tambahPenumpang(undefined));

console.log(tambahPenumpang("Reza"));
console.log(tambahPenumpang("Fardan"));
console.log(tambahPenumpang("Aisyah"));

console.log(hapusPenumpang("Reza"));
console.log(tambahPenumpang("Damput"));
console.log(tambahPenumpang("Damput"));
console.log(tambahPenumpang("Ajis"));
console.log(hapusPenumpang("Adi"));
console.log(tambahPenumpang("Solikah"));
console.log(tambahPenumpang("Lohan"));
console.log(hapusPenumpang("Reza"));
