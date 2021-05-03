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

*/

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
    alert('wrong password!');
  }
};

checkIn(flight, arsal);
console.log(flight);
console.log(arsal);
