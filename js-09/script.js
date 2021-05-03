'use strict';
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
