// contoh 1

console.log(nama); // hasilnya reference error
let nama = "Reza";
console.log(nama);

sayHello(); // Reza

//contoh 2

sayHello(); // Hello

const sayHello = function () {
  console.log("Hello");
};

sayHello(); // Hello

// contoh 3

function outer() {
  console.log(innerVar);

  let innerVar = "saya di dalam outer";
}

outer(); // reference error

// contoh 4

console.log(myFunc); // referenceError: Cannot access 'myFunc' before initialization
console.log(myArrow); // ReferenceError: Cannot access 'myArrow' before initialization

const myFunc = function () {
  console.log("Fungsi ekspresi");
};

const myArrow = () => {
  console.log("Fungsi Arrow");
};

myFunc(); // Fungsi ekspresi
myArrow(); // Fungsi Arrow"
