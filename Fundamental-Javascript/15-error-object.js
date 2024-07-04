/*
Blok Try-Catch-Finally
Sebelum masuk ke error object, kita akan bahas sebuah blok percabangan yang nantinya akan dipakai untuk memproses error object tersebut. Percabangan yang dimaksud adalah blok try-catch-finally
*/

try {
  // blok kode program yang akan dijalankan (berkemungkinan error)
} catch {
  // blok ini akan diproses jika terjadi error
} finally {
  // blok ini selalu diproses apapun hasil dari blok try
}

try {
  let foo = 100;
  console.log(foo);
} catch {
  console.log("Terjadi error");
} finally {
  console.log("Ini akan selalu dijalankan");
}

// Menangkap Error Object

/* 
Uncaught ReferenceError", yang bisa diartikan sebagai "ReferenceError tidak tertangkap". Bagaimana cara "menangkapnya"?Inilah fungsi utama dari blok catch dari struktur try-catch-finally. Penggunaan kata catch memang bertujuan untuk "menangkap" Error object yang salah satunya bernama ReferenceError object
*/

try {
  console.log(reza); // tidak ada variabel dengan nama reza tetapi langsung disuruh console.log(reza)
} catch (e) {
  console.log(e.name); // ReferenceError
  console.log(e.message); //reza is not defined
  console.log(e); // ReferenceError: reza is not defined
}

/*
“Jenis-jenis Error Object
JavaScript memiliki 6 jenis Error object bawaan:
EvalError: Error dari kesalahan fungsi eval().
RangeError: Error karena angka yang di luar jangkauan.
ReferenceError: Error karena referensi yang tidak ditemukan. 
SyntaxError: Error karena kesalahan perintah.
TypeError: Error karena salah tipe data.
URIError: Error dari kesalahan fungsi encodeURI().
Semua object ini bisa ditangkap oleh blok catch dan memiliki property name dan message.”
*/

const cekKabisat = (tahun) => {
  if (!Number.isInteger(tahun)) {
    throw new TypeError(`${tahun} bukan angka tahun`);
  } else if (tahun <= 0) {
    throw new RangeError(`Harus tahun selesai masehi`);
  } else if (tahun % 4 == 0) {
    return `${tahun} adalah tahun kabisat`;
  } else {
    return `${tahun} bukan tahun kabisat`;
  }
};

try {
  console.log(cekKabisat(2024));
  console.log(cekKabisat(1998));
  console.log(cekKabisat(-20));
  console.log(cekKabisat("a"));
} catch (e) {
  console.log(e);
}
