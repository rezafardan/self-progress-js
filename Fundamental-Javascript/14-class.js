/*
Class dan object menjadi fondasi paling dasar dari object oriented programming, keduanya serupa tapi tak sama. Class adalah blueprint atau "cetakan" untuk object. Bisa disebut juga kalau object adalah implementasi konkret dari sebuah class.
*/

class Mobil {}

// let mobilReza = new Mobil();

console.log(mobilReza);

/*
Proses pembuatan object dari class dikenal dengan instantiation. Dalam kamus bahasa inggris, instantiation berarti membuat sesuatu yang berwujud dari yang abstrak.

JavaScript juga memiliki operator instanceof untuk memeriksa apakah suatu object merupakan instance dari sebuah class tertentu atau tidak
*/

console.log(mobilReza instanceof Mobil); // true

// Untuk bisa menambah property ke dalam class, harus menggunakan method khusus bernama constructor. Method constructor otomatis berjalan saat pembuatan object (saat proses instantiation)

class Motor {
  constructor() {
    // Isi constructor
    this.nama = "Vario";
    this.type = "Matic";
  }
}

// Di dalam class, semua property harus ditulis menggunakan constructor(). Kita juga tidak bisa langsung membuat property seperti variabel biasa, tapi harus menggunakan object khusus bernama this

// This adalah keyword khusus sebagai pengganti object yang di buat dari class Mobil. Penjelasan tentang this memang sedikit rumit, untuk sementara boleh dianggap dalam membuat property class, kita harus menggunakan perintah this.namaProperty

// fungsi dari this dalam pembuatan class. Keyword this berfungsi sebagai pengganti object yang nantinya di buat dari class Mobil. Peran this tidak terbatas di dalam constructor saja, tapi juga bisa dipakai di luar constructor.

// Parameter constructor

class Rumah {
  constructor(pemilik, luas, harga) {
    this.pemilik = pemilik;
    this.luas = luas;
    this.harga = harga;
  }
  jual() {
    return `Rumah ${this.pemilik} Dijual`;
  }
}
let rumahReza = new Rumah("Reza", "200 Meter", 200000000);

console.log(rumahReza); // Rumah { pemilik: 'Reza', luas: '200 Meter', harga: 200000000 }

// Getter dan Setter

class Mobil {
  constructor(nama, tipe, harga) {
    this.nama = nama;
    this.tipe = tipe;
    this.harga = harga;
  }

  get namaMobil() {
    return this.nama.toUpperCase();
  }

  set namaMobil(x) {
    this.nama = "Mobil" + x;
  }
}

let mobilReza = new Mobil("Jazz", "Matic", 200000000);
console.log(mobilReza.namaMobil);

mobilReza.namaMobil = "Brio";
console.log(mobilReza.namaMobil);

// Inheritance of Class / Pewarisan Class

class A {
  // kode class A
}

class B extends A {
  // kode class B
}

class C extends B {
  // kode class C
}

class Mobil {
  infoMobil() {
    return "Ini class mobil";
  }
}

class Bus extends Mobil {
  infoBus() {
    return "ini class bus";
  }
}

// let busReza = new Bus();

console.log(busReza.infoMobil()); // Ini class mobil
console.log(busReza.infoBus()); // ini class bus

// Karena class Bus merupakan turunan dari class Mobil, maka object busBobi bisa mengakses method infoBus() dan juga method infoMobil()

// Keyword super juga harus dipakai jika ingin mengakses property milik parent class. Dan ini menjadi sedikit kompleks karena di JavaScript property class harus di deklarasikan dari dalam constructor

class Mobil {
  constructor(nama) {
    this.nama = nama;
  }
  infoMobil() {
    return `Mobil ${this.nama}`;
  }
}

class Bus extends Mobil {
  constructor(nama) {
    super(nama);
  }
  infoBus() {
    return `Bus ${this.nama}`;
  }
}

let busReza = new Bus("Scania K360");

console.log(busReza.infoBus());
console.log(busReza.infoMobil());
