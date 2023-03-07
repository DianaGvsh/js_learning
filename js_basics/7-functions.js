/**
1. Create a 'multiply' function that will take any number of numbers and return their product
Call example:
multiply(1,2,3) => result 6 (1*2*3);
If there is no argument, return zero: multiply() // 0
 */
function multiply() {
  let value = 1;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    value *= arguments[i];
  }
  return value;
}

multiply(1, 2, 5, 11);

/**
2. Create a function that takes a string and returns a flip string:
Call examples and results
reverseString('test') // "tset"
reverseString('') // ''
reverseString(null) // llun
reverseString(undefined)// denifednu
reverseString()// denifednu
 */
function reverseString(str) {
  // if (typeof arguments[0] !== 'string') {
  //   str = String(str);
  // }
  strNew = String(str);
  let strReverse = '';
  for (let i = strNew.length - 1; i >= 0; i--) {
    strReverse += strNew[i];
  }
  return strReverse;
}
reverseString('test');
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();

/**
3. Create a function that can take a string, numbers, null or undefined as an argument and returns a string where each character is separated by a space and replaced with the unicode value of the character:
getCodeStringFromText("hello") // "104 101 108 108 111"
hint: the charCodeAt and trim methods will help you solve the problem
 */
function getCodeStringFromText(str) {
  strNew = String(str);
  let strCode = '';
  for (let i = 0; i < strNew.length; i++) {
    strCode += strNew[i].charCodeAt() + ' ';
  }
  return strCode.trim();
}
getCodeStringFromText('hello');

/**
4. Create a function 'guess the number'.
It accepts a number from 1-10 (be sure to check that the number is not greater than 10 and not less than 0).
If the number does not match the condition then return an error ("Please provide number in range 0 - 10").
If not a number, then return an error ("Please provide a valid number");
Next function generates a random number from 1-10 and compares with a given number if they match, then returns the string “You win!”, if not, then the line “You are lose, your number is 8, the random number is 5”. The numbers in the string are given as an example, you are substituting real numbers.
If a number is passed as a string, it must be converted to a number.
 */
function guessNumber(x) {
  const number = +x;
  const randomValue = +(Math.random() * 10).toFixed(0);

  if (x < 0 || x > 10) {
    return console.error('Please provide number in range 0 - 10');
  }
  if (typeof x !== 'number' || isNaN(x)) {
    return console.error('Please provide a valid number');
  }
  if (x !== randomValue) {
    return `You are lose, your number is ${x}, the random number is ${randomValue}`;
  } else return 'You win!';
}
guessNumber(5);
