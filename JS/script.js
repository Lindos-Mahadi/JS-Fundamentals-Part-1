// Remember we are gonna use strict mode in all scripts now !

'use strict';

// PROBLEM

// We work for a company building a smart home thermomiter. Our most recent task is this : "Given an array of temperatures of one day, calculate the temperature amplitude. keep in mind theat sometimes there might be a sensor error"

// Test data:
// § Data 1: [3, -2, -6 , 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//---What is temp amplitude? answer: difference between highest and lowest temp
//---What is the X days? answer: index + 1How to compute max and min temperatures?
//---Whats a sensor error? and what to do?

// 2) Breaking Up into sub-problem
//---How to ignore errors?
//---Find max value in temp array
//---Find min value in temp array
//---Substract min from max (amplitude and return it)

const dataOne = [3, -2, -6, 'error', 9, 13, 17, 15, 14, 9, 5];

console.log(`${dataOne} `);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(dataOne);
console.log(amplitude);
