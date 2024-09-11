// Array

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Banana
console.log(fruits.length); // 3

fruits.push("date"); // Menambahkan elemen di akhir array
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry', 'date' ]

fruits.pop(); // Menghapus elemen terakhir
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry' ]

fruits.unshift("kiwi"); // Menambahkan elemen di awal array
console.log(fruits); // [ 'kiwi', 'Apple', 'Banana', 'Cherry' ]

fruits.shift(); // Menghapus elemen awal
console.log(fruits); // [ 'Apple', 'Banana', 'Cherry' ]

// Metode Array

fruits.forEach((fruit) => console.log(fruit));
// Apple
// Banana
// Cherry

const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // [ 'APPLE', 'BANANA', 'CHERRY' ]

const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); // [ 'Banana', 'Cherry' ]

const found = fruits.find((fruit) => fruit.startsWith("B"));
console.log(found); // Banana

const findIndex = fruits.findIndex((fruit) => fruit.startsWith("A"));
console.log(findIndex); // 0

console.log(fruits.includes("Apple")); // true
console.log(fruits.includes("Strawberry")); // false

const slice = fruits.slice(2, 3);
console.log(slice); // [ 'Cherry' ]

fruits.splice(1, 1, "blackberry", "grape");
console.log(fruits); // [ 'Apple', 'blackberry', 'grape', 'Cherry' ]

const moreFruits = fruits.concat(["Kiwi", "Watermelon"]);
console.log(moreFruits); // [ 'Apple', 'blackberry', 'grape', 'Cherry', 'Kiwi', 'Watermelon' ]

const join = fruits.join(" ");
console.log(join); // Apple blackberry grape Cherry

for (const fruit of fruits) {
  console.log(fruit);
  // Apple
  // blackberry
  // grape
  // Cherry
}

for (const index in fruits) {
  console.log(fruits[index]);
  console.log(index);
  // 0
  // blackberry
  // 1
  // grape
  // 2
  // Cherry
  // 3
}

console.log("======");

// Object

const person = {
  name: "Reza",
  age: 26,
  greet() {
    console.log("Hello");
  },
};

console.log(person);
person.greet();
