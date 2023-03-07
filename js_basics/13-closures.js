/** 1. 
Create a function that would be able to do:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Hint, the minus function must return another function.
 */
function minus(val = 0) {
  return function (num = 0) {
    return val - num;
  };
}
const res = minus();
console.log(res());
console.log(minus(2)(1));

/** 2.
Implement a function that multiplies and knows how to remember the returned result between calls:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
 */
function multiplyMaker(val = 2) {
  return function (num) {
    return (val *= num);
  };
}
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

/** 3.
Implement a module that works with a string and has methods:
a. set string
   i. if an empty value is passed, then set to an empty string
     ii. if a number is passed, cast the number to a string
b. get string
c. get string length
d. get reverse string

Example:
module.setString('abcde');
module.getString(); // 'abcde'
module.getLength(); // 5
  */
function strModule() {
  let val;
  return {
    setStr(str) {
      val = str === undefined ? '' : isNaN ? String(str) : str;
    },
    getStr() {
      return val;
    },
    getLength() {
      return val.length;
    },
    getReverseStr() {
      return val.split('').reverse().join('');
    },
  };
}

const str = strModule();
str.setStr('abcde');
console.log(str.getStr()); // 'abcde'
console.log(str.getLength()); // 5
console.log(str.getReverseStr()); // 'edcba'

/** 4.
Create a “calculator” module that can add, multiply, subtract, divide, and exponentiate. Round the final value to two decimal places (the value must be stored in a normal variable, not this).

module.setValue(10); // value = 10
module.add(5); // value += 5
modulo.multiply(2); // value *= 2
module.getValue(); // print 30 to the console (round up here)

You can also call methods by chaining:
module.setValue(10).to Power(2).getValue(); // 100
  */

function calculator() {
  let val = 0;

  return {
    setValue(num) {
      if (typeof num !== 'number' || isNaN(num)) {
        return console.error('Enter a number');
      } else val = num;
      return this;
    },
    plus(num) {
      val += num;
      return this;
    },
    minus(num) {
      val -= num;
      return this;
    },
    multiply(num) {
      val *= num;
      return this;
    },
    divide(num) {
      val /= num;
      return this;
    },
    exp(num) {
      for (let i = 1; i < num; i++) {
        val *= val;
      }
      return this;
    },
    getValue() {
      return +val.toFixed(2);
    },
  };
}

const calc = calculator();
const resCalc = calc.setValue(10).exp(2).getValue();
console.log(resCalc);
