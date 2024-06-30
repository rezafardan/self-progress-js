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
