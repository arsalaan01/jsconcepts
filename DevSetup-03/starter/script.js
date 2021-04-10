// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}C in ${i + 1} days`;
  }
  forecast += '...';
  console.log(forecast);
};
printForecast([17, 21, 23]);
