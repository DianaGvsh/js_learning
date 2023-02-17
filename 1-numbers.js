// 1. Get Pi from Math and round it up to 2 decimal places
const pi = Number(Math.PI.toFixed(2));
console.log(pi);

// 2. Using Math, find the maximum and minimum numbers from the given series 15, 11, 16, 12, 51, 12, 13, 51
const minNum = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNum, maxNum);

// 3. Work with Math.random:
// a. Get a random number and round it up to two decimal places
// b. Get a random integer from 0 to X. X is any arbitrary number.

const random = Number(Math.random().toFixed(2));

const X = 20;
const randomX = Math.round(Math.random() * X);
console.log(randomX);

// 4. Check calculation result 0.6 + 0.7
const fixNum = Number(0.6 + 0.7).toFixed(1);
console.log(fixNum);

// 5. Get number from string '100$'
const numFromStr = parseFloat('100$');
console.log(numFromStr);
