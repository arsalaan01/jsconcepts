'use strict';

// OOP using the constructor function

/*

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create a function inside bcz will create copy for every object
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const arsalaan = new Person('Arsalaan', '1996');
console.log(arsalaan);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returned {}

const jimmy = new Person('Jimmy', 2006);
const james = new Person('James', 2000);
console.log(jimmy, james);

const jay = 'Jay';

console.log(arsalaan instanceof Person);
console.log(jay instanceof Person);

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

arsalaan.calcAge();
jimmy.calcAge();

console.log(arsalaan.__proto__);
console.log(arsalaan.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(arsalaan));
console.log(Person.prototype.isPrototypeOf(jimmy));
console.log(Person.prototype.isPrototypeOf(Person));

//prototype is kind of .prototypeoflinkedobjects

Person.prototype.species = 'Homo Sapiens';
console.log(arsalaan.species, jimmy.species);

console.log(arsalaan.hasOwnProperty('firstName'));
console.log(arsalaan.hasOwnProperty('species'));

console.log(arsalaan.__proto__);
// Object.prototype (top of prototype chain)
console.log(arsalaan.__proto__.__proto__);
console.log(arsalaan.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 5, 4, 3, 5, 6, 7, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const myCar = new Car('BMW', 220);
myCar.accelerate();

const myCar1 = new Car('Audi', 200);
myCar1.brake();
