// mewarisi dari object prototipe

const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
rabbit.hops = true;

console.log(rabbit);
console.log(rabbit.eats);
console.log(rabbit.hops);

console.log("======");

// menggunakan fungsi konstruktor

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

function Dog(name) {
  Animal.call(this, name); // Memanggil constructor animal
}

Dog.prototype = Object.create(Animal.prototype); // Mewarisi metode dari animal
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const dog = new Dog("Rex");

console.log(dog);
dog.speak();
dog.bark();

console.log("======");

// menggunakan kelas es6

class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  speak() {
    console.log(`${this.nama} bersuara`);
  }
}

class Anjing extends Hewan {
  kencing() {
    console.log(`${this.nama} kencing`);
  }
}

const anjing = new Anjing("Loli");
console.log(anjing);
anjing.speak();
anjing.kencing();
