'use strict';
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
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

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(pow(2, 3)); // 8

function myObject() {
  this.property1 = 'value1';
  this.property2 = 'value2';
  var newValue = this.property1;
  this.performMethod = function () {
    myMethodValue = newValue;
    return myMethodValue;
  };
}
var myObjectInstance = new myObject();
alert(myObjectInstance.performMethod());

function showStatistics(name, team, position, average, homeruns, rbi) {
  document.write('<p><strong>Name:</strong> ' + arguments[0] + '<br />');
  document.write('<strong>Team:</strong> ' + arguments[1] + '<br />');

  if (typeof arguments[2] === 'string') {
    document.write('<strong>Position:</strong> ' + position + '<br />');
  }
  if (typeof arguments[3] === 'number') {
    document.write('<strong>Batting Average:</strong> ' + average + '<br />');
  }
  if (typeof arguments[4] === 'number') {
    document.write('<strong>Home Runs:</strong> ' + homeruns + '<br />');
  }
  if (typeof arguments[5] === 'number') {
    document.write('<strong>Runs Batted In:</strong> ' + rbi + '</p>');
  }
}
showStatistics('Mark Teixeira');
showStatistics('Mark Teixeira', 'New York Yankees');
showStatistics('Mark Teixeira', 'New York Yankees', '1st Base', 0.284, 32, 101);

function showStatistics(args) {
  document.write('<p><strong>Name:</strong> ' + args.name + '<br />');
  document.write('<strong>Team:</strong> ' + args.team + '<br />');
  if (typeof args.position === 'string') {
    document.write('<strong>Position:</strong> ' + args.position + '<br />');
  }
  if (typeof args.average === 'number') {
    document.write('<strong>Average:</strong> ' + args.average + '<br />');
  }
  if (typeof args.homeruns === 'number') {
    document.write('<strong>Home Runs:</strong> ' + args.homeruns + '<br />');
  }
  if (typeof args.rbi === 'number') {
    document.write('<strong>Runs Batted In:</strong> ' + args.rbi + '</p>');
  }
}

showStatistics({
  name: 'Mark Teixeira',
});

showStatistics({
  name: 'Mark Teixeira',
  team: 'New York Yankees',
});

showStatistics({
  name: 'Mark Teixeira',
  team: 'New York Yankees',
  position: '1st Base',
  average: 0.284,
  homeruns: 32,
  rbi: 101,
});

const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve('There is a count value.');
  } else {
    reject('There is no count value');
  }
});

console.log(countValue);

let countValue = new Promise(function (resolve, reject) {
  resolve('Promise resolved');
});

// executes when promise is resolved successfully

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log('You can call multiple functions this way.');
  });

// returns a promise
let countValue = new Promise(function (resolve, reject) {
  reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue
  .then(function successValue(result) {
    console.log(result);
  })

  // executes if there is an error
  .catch(function errorValue(result) {
    console.log(result);
  });

// returns a promise
let countValue = new Promise(function (resolve, reject) {
  // could be resolved or rejected
  resolve('Promise resolved');
});

// add other blocks of code
countValue.finally(function greet() {
  console.log('This code is executed.');
});

let arr = ['John', 'Smith'];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

const user = {
  name: 'Alex',
  address: '15th Park Avenue',
  age: 43,
  department: {
    name: 'Sales',
    Shift: 'Morning',
    address: {
      city: 'Bangalore',
      street: '7th Residency Rd',
      zip: 560001,
    },
  },
};

const { department } = user;
const {
  department: { address },
} = user;
