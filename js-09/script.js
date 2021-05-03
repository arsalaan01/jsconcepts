'use strict';
/*

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('AI312');
createBooking('AI312', 2, 800);
createBooking('AI312', 2);
createBooking('AI312', 5);
createBooking('AI312', undefined, 1000);



const flight = 'LH234';
const arsal = {
  name: 'Arsalaan Ali',
  passport: 23231487645,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23231487645) {
    alert('Checked In');
  } else {
    alert('wrong passport!');
  }
};

checkIn(flight, arsal);
console.log(flight);
console.log(arsal);

// is the same as doing
const flightNum = flight;
const passenger = arsal;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(arsal);
checkIn(flight, arsal);



// First class Functions or first class citizens

// addEventListener will be higher order funciton in below example because it's recieving a func as a parameter in it where greet is a callback func
const greet = () => console.log('Hey Arsalaan');
btnClose.addEventListener('click', greet);

function count() {
  //higher order func
  let counter = 0;
  return function () {
    // returned function
    counter++;
  };
}


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//js ae uses all the times
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Arsalaan'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Arsalaan');
greeterHey('GeekMozo');

greet('Hello')('Arsalaan');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Arsalaan');

*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Arsalaan Ali');
lufthansa.book(345, 'Paul Hudson');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//does not work
//book(23,'Sarah Williams');
// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 113, 'Mary Cooper');

// apply method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method
//book.call(eurowings,23,'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Hopper');

//bind function for one specific airline

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Mathew Paul');
bookEW23('Martha Paul');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(25));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(25));
