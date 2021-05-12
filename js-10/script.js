"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const user = "Steven Thomas Williams"; // username should be stv
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
//console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Arrays

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
// spread operator console.log([...arr]);

//SPLICE same as slice but mutate array and return element which got deleted
//console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE mutate array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
//console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(" - "));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdraw ${Math.abs(movement)}`);
  }
}
console.log("-----------Using forEach----------");
//continue and break doesn't work in forEach
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdraw ${Math.abs(mov)}`);
  }
});


const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); // create shallow copy of arr
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  //dogs.slice(1,3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} yeas old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Map

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});



//Map,filter and reduce

const euroToUsd = 1.1;

// const movementsUsd = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUsd = movements.map((mov) => mov * euroToUsd);
console.log(movements);
console.log(movementsUsd);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}:You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositor = [];
for (const mov of movements) if (mov > 0) depositor.push(mov);
console.log(depositor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);



// in reduce accumulator is like a snowball
console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

const calAverageHumanAge = function (ages) {
  // const humanAges = ages.map(function (age) {
  //   if (age <= 2) return 2 * age;
  //   else if (age > 2) return 16 + age * 4;
  // });
  // console.log(humanAges);
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const avg = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  return avg;
  //2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
};
const avg1 = calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
