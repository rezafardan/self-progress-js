// global scope
// Variabel yang dideklarasikan di luar fungsi atau blok kode memiliki global scope. Ini berarti variabel tersebut dapat diakses dari mana saja dalam kode

let x = 1;

function cekx() {
  console.log(x);
}

cekx(); // 1

// function scope
// Variabel yang dideklarasikan di dalam fungsi hanya dapat diakses di dalam fungsi tersebut

function ceky() {
  let localscope = "tes tes tes";
  console.log(localscope);
}

ceky(); // tes tes tes
// console.log(localscope); // ReferenceError: localscope is not defined

// block scope
// Variabel yang dideklarasikan dengan let atau const di dalam blok kode (seperti dalam {}) hanya dapat diakses di dalam blok tersebut

if (true) {
  let blockscope = "saya block scope";
  console.log(blockscope);
}

// console.log(blockscope); // ReferenceError: blockscope is not defined

// scopeExercise1

let globalVar = "Global Scope";

function testFunction() {
  let functionVar = "Function Scope";
  console.log(globalVar);
  console.log(functionVar);
}

testFunction();
console.log(globalVar);
// console.log(functionVar); // ReferenceError: functionVar is not defined

if (true) {
  let blockVar = "Block scope";
  const anotherBlockVar = "Another block scope";
  console.log(blockVar); // Apa yang akan dicetak di sini?
  console.log(anotherBlockVar); // Apa yang akan dicetak di sini?
}

// console.log(blockVar); // ReferenceError: blockVar is not defined

console.log("=========");

function outerFunction() {
  let outerVar = "Outer Scope";

  function innerFunction() {
    let innerVar = "Inner Scope";
    console.log(outerVar);
    console.log(innerVar);
  }

  innerFunction();
  console.log(outerVar);
  //   console.log(innerVar);
}

outerFunction();
