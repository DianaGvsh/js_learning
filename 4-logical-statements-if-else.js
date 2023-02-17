// 1. What is a and why?
let a = 0 || 'string'; // 'string', returns the first true
let a1 = 1 && 'string'; //'string', returns the first false or the last true
let a2 = null || 25; // 25, returns the first true
let a3 = null && 25; // null, returns the first false
let a4 = null || 0 || 35; // 35, returns the first true
let a5 = null && 0 && 35; // null, returns the first false

// 2. What will be displayed in the console
console.log(12 + 14 + '12'); // '2612', string
console.log(3 + 2 - '1'); // 4, number
console.log('3' + 2 - 1); // 31, number
console.log(true + 2); // 3, number
console.log(+'10' + 1); // 11, number
console.log(undefined + 2); // NaN, number
console.log(null + 5); // 5, number
console.log(true + undefined); // NaN, number

// 3. Create an arbitrary variable, assign a value to it and write a condition, if the variable is equal to "hidden", assign it the value "visible", otherwise - "hidden"
let text = 'hidden';
if (text === 'hidden') {
  text = 'visible';
} else text = 'hidden';
console.log(text);

// 4. Create a variable and give it a number. Using if, write the condition:
// - if the variable is zero, assign 1 to it;
// - if less than zero - the string “less then zero”;
// - if greater than zero - using the “assignment” operator, multiply the variable by 10 (use short notation).
let value4 = 1;
if (value4 === 0) {
  value4 = 1;
} else if (value4 < 0) {
  value4 = 'less then zero';
} else {
  value4 *= 10;
}
console.log(value4);

// 5. There is an object
let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};
// Write a condition if the age of the car is more than 5 years, then you need to display the message 'Need Repair' in the console and change the needRepair property in the car object to true; otherwise change to false.
if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else car.needRepair = false;
console.log(car);

// 6. There is an object
let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};
// Write a condition if item has a discount field and there is a value that is not a NaN and there is also a price field whose value is also not a NaN, then create the priceWithDiscount field in the item object and write the price there including the discount and display it in the console, note that the fields discount and price are strings and you need to get numbers from them in order to perform the calculation. Otherwise, if there is no discount field, then simply output the price field to the console.
const price = parseFloat(item.price);
const discount = parseFloat(item.discount);

if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - price * (discount / 100);
  console.log(priceWithDiscount);
} else {
  console.log(price);
}

// 7. There is the following code:
let product = {
  name: 'Яблоко',
  price: '10$',
};
let min = 10; // min price
let max = 20; // max price
// Write a condition if the price of a product is greater than or equal to the minimum price and less than or equal to the maximum price, then display the name of this product in the console, otherwise display in the console that no products were found.
product.priceNumber = parseFloat(product.price);
if (min <= product.priceNumber && product.priceNumber <= max) {
  console.log(product.name);
} else console.log('товаров не найдено');
console.log(product);
