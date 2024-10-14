let text = "lorem ipsum dolor sir amet";

console.log(text.length); // 26

let str = "Javascript";

console.log(str.length); // 10
console.log(str[0]); // J

let testTrim = "      Tes Trim      ";
console.log(testTrim.trim()); // Tes Trim

// concat = menggabungkan string

let firstname = "Reza";
let lastname = "Fardan";

console.log(firstname + " " + lastname);
console.log(`${firstname} ${lastname}`);

let textTes = "Javascript";
console.log(textTes.slice(0, 4)); // Java
console.log(textTes.substring(0, 4)); // Java

let replacement = "Reza Fardan";
console.log(replacement.replace("Fardan", "Putra")); // Reza Putra

let arr = ["reza", "fardan", "adi", "putra"];

console.log(arr.join()); //reza,fardan,adi,putra
console.log(arr.join(" ")); // reza fardan adi putra

let tesSplit = "reza-fardan-adi-putra";
console.log(tesSplit.split()); // [ 'reza-fardan-adi-putra' ]
console.log(tesSplit.split("-")); // [ 'reza', 'fardan', 'adi', 'putra' ]

// mencari index dari text
let sentence = "lorem ipsum dolor sir amet";
console.log(sentence.indexOf("dolor")); // 12
console.log(sentence.lastIndexOf("sir")); // 18
console.log(sentence.includes("sir")); // true

let tes1 = "javascript";
let result = tes1[0].toLocaleUpperCase() + tes1.slice(1);
console.log(result); // Javascript
