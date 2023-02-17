let string = 'some test string';
// 1. Get the first and last letters of a string
const firstLetter = string[0];
const lastLetter = string[string.length - 1];
console.log(firstLetter, lastLetter);

// 2. Make first and last letters uppercase
const firstLastUpper_ES5 =
  string[0].toUpperCase() +
  string.slice(1, -1) +
  string[string.length - 1].toUpperCase();

const firstLastUpper_ES6 = `${string[0].toUpperCase()}${string.slice(
  1,
  -1
)}${string[string.length - 1].toUpperCase()}`;
console.log(firstLastUpper_ES5);
console.log(firstLastUpper_ES6);

// 3. Find the position of the word 'string' in a string
const stringIndex = string.indexOf('string');
console.log(stringIndex);

// 4. Find the position of the second space (“manually” do not count anything)
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

// 5. Get string from 5th character of length 4 letters
const stringShort = string.slice(5, 5 + 4);
console.log(stringShort);

// 6. Get string from 5th to 9th characters
const stringLong = string.slice(5, 10);
console.log(stringLong);

// 7. Get a new string from the original by removing the last 6 characters (that is, the original string without the last 6 characters)
const newString = string.slice(0, -6);
console.log(newString);

// 8. From two variables a=20 and b=16 get a string variable that will contain the text “2016”
const a = 20;
const b = 16;
string = String(a) + String(b);
console.log(string);
