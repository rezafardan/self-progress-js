// DOM Selection Method

// getElementById()
// hanya boleh 1 id tertentu dalam 1 document html
// menghasilkan 1 buah element

// getElementsByTagName()
// bisa banyak tag name
// menghasilkan HTML Collection

// get ElementsByClassName()
// pakai class
// menghasilkan HTML Collection

// querySelector()
// menghasilkan HTML Collection

// querySelectorAll()
// seperti menggunakan selector pada CSS
// menghasilkan nodeList

// menggunakan const karena variabel tidak berubah
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Reza Fardan";

// mengembalikan html collection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// setiap tag name harus ada index
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
const p1 = document.getElementsByClassName("p1")[0];
p1.style.color = "red";
