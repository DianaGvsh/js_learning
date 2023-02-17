// 1. Based on the string "i am in the easycode" make a new string where the first letters of each word will be in upper case. Use for or while.
let str = 'i am in the easycode';
let res = '';
for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
}
console.log(str);
console.log(res);

// 2. The string "tseb eht ma i" is given. Using cycles, make a reverse string (that is, the last letter becomes the first etc.).
let str2 = 'tseb eht ma i';
let res2 = '';
for (let j = str2.length - 1; j >= 0; j--) {
  res2 += str2[j];
}
console.log(str2);
console.log(res2);

// 3. The factorial of a number is the product of all natural numbers from 1 to n inclusive: 3! = 3*2*1.5! = 5*4*3*2*1. Calculate the factorial of 10 using loops. Use for.
const someNumber = 10;
let result = 1;
for (let n = 1; n <= someNumber; n++) {
  result *= n;
}
console.log(result);

// 4. Based on the string "JavaScript is a pretty good language" make a new string where each word starts with a capital letter and the spaces are removed. Use for.
let str4 = 'JavaScript is a pretty good language';
let res4 = '';
for (let r = 0; r < str4.length; r++) {
  if (r === 0 || str4[r - 1] === ' ') {
    res4 += str4[r].toUpperCase();
  } else if (str4[r] !== ' ') {
    res4 += str4[r];
  }
}
console.log(str4);
console.log(res4);

// 5. Find all odd numbers in an array from 1 to 15 inclusive and print them to the console. Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Use for of.
let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let m of someArray) {
  if (m % 2) {
    console.log(m);
  }
}

// 6. Given an object:
let list = {
  name: 'denis',
  work: 'easycode',
  age: 29,
};
// Iterate over the object and if the value in the property is a string, then rewrite it all in upper case. Use for in.
for (let key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list);
