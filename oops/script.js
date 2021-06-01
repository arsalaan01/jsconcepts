'use strict';

/*
// OOP using the constructor function

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

// Static Methods

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey();
//arsalaan.hey();

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

// Object creation using ES6 Approach

// class expression
//const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exist

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are also first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter Junior', 1965);
PersonCl.hey();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 451],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

*/
