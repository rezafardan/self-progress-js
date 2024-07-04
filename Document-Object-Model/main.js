/*
NodeList adalah istilah khusus untuk menyebut kumpulan berbagai node. NodeList ini mirip seperti array, tapi bukan array. Di dalam JavaScript, ia termasuk kategori collection.
*/

// console.log(foo.nodeName);
// console.log(foo.nodeType);
// console.log(foo.childNodes);
// console.log(foo.childNodes.length);
// console.log("==========");
// console.log(bar.nodeName);
// console.log(bar.nodeType);
// console.log(bar.childNodes);
// console.log(bar.childNodes.length);

let pNode = document.childNodes[1].childNodes[2].childNodes[3];
let emNode = document.childNodes[1].childNodes[2].childNodes[3].childNodes[1];
let hSatu = document.childNodes[1].childNodes[2].childNodes[1];
let bodyNode = document.childNodes[1].childNodes[2];

let newPNode = document.createElement("del");
let newTextNode = document.createTextNode("PHP");
newPNode.appendChild(newTextNode);

// pNode adalah letak node element P
// di kasih insert before dengan 2 argument
// argument pertama adalah element yang akan di masukkan
// argument kedua adalah element akan dimasukkan sebelum element mana ?
pNode.insertBefore(newPNode, emNode);

let newPNodeDua = document.createElement("p");
let newTextNodeDua = document.createTextNode("Paragraf pengganti");
newPNodeDua.appendChild(newTextNodeDua);

// bodyNode adalah letak node body
// di kasih replaceChild dengan 2 argument
// argument pertama adalah element yang akan dimasukkan
// argument kedua adalah element mana yang akan direplace ?
bodyNode.replaceChild(newPNodeDua, hSatu);

console.log(bodyNode);

let pEl = document.childNodes[1].childNodes[2].childNodes[3];
let bNode = document.childNodes[1].childNodes[2];

let ol = document.createElement("ol");
let li1 = document.createElement("li");
li1.appendChild(document.createTextNode("Javascript"));
let li2 = document.createElement("li");
li2.appendChild(document.createTextNode("PHP"));
let li3 = document.createElement("li");
li3.appendChild(document.createTextNode("Rust"));

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);
console.log(ol);

bNode.insertBefore(ol, pEl);
