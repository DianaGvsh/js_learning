/** 1. Create functions:
- the first function takes an array and a callback (one for all calls)
- the second function (callback) processes each element of the array (each callback has its own callback)
The first function returns the string “New value: ” and the processing result:

firstFunc(['my', 'name', 'is', 'Trinity'], handler1) // → “New value: MyNameIsTrinity”

firstFunc([10, 20, 30], handler2) // → “New value: 100, 200, 300,”

firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) // → “New value: Jhon is 45, Aaron is 20,”

firstFunc(['abc', '123'], handler4) // → “New value: cba, 321,” // strings are inverted

Function names should be like in the example!
Hint: secondFunc should be represented by a function that takes one argument (each element of the array) and returns the result of processing it
 */
function firstFunc(arr, fn) {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return `New value: ${res.trim()}`;
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

function handler2(el) {
  return Number(el) * 10 + ', ';
}

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

const resFn1 = firstFunc(['my', 'name', 'is', 'Trinity'], handler1);
console.log(resFn1); // → “New value: MyNameIsTrinity”

const resFn2 = firstFunc([10, 20, 30], handler2);
console.log(resFn2); // → “New value: 100, 200, 300,”

const resFn3 = firstFunc(
  [
    { age: 45, name: 'Jhon' },
    { age: 20, name: 'Aaron' },
  ],
  handler3
);
console.log(resFn3); // → “New value: Jhon is 45, Aaron is 20,”

const resFn4 = firstFunc(['abc', '123'], handler4);
console.log(resFn4); // → “New value: cba, 321,”

/** 2. Write an analogue of the every method. Create a function 'every', it should take an array of numbers as the first argument (be sure to check that an array is passed) and a callback second argument (be sure to check that a function is passed). If one of the arguments passed does not satisfy the condition, then the function should return new Error("with an arbitrary message.")

The function should return true or false depending on the result of the callback (check if the number is greater than 5). The callback must take one element of the array, its index in the array, and the entire array.
 */

const arr = [122, 6, 8, 130, 44, 5];

function every(arr, fn) {
  if (!Array.isArray(arr))
    return new Error('The first argument expected as array');
  if (!fn || typeof fn !== 'function')
    return new Error('The second argument expected as function');

  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

function everyFn(el, index, arr) {
  return typeof el === 'number' && el > 5;
}

const res = every(arr, everyFn);
console.log(res);
