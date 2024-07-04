/*
NodeList adalah istilah khusus untuk menyebut kumpulan berbagai node. NodeList ini mirip seperti array, tapi bukan array. Di dalam JavaScript, ia termasuk kategori collection.

*/

let foo = document.childNodes[0];
let bar = document.childNodes[1];

console.log(foo.nodeName);
console.log(foo.nodeType);
console.log(foo.childNodes);
console.log(foo.childNodes.length);
console.log("==========");
console.log(bar.nodeName);
console.log(bar.nodeType);
console.log(bar.childNodes);
console.log(bar.childNodes.length);
