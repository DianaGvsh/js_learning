// 1. Create an object that describes the width and height of the rectangle, and can also calculate the area of the shape:
const rectangle = {
  width: 10,
  height: 4,
  getSquare() {
    return this.width * this.height;
  },
};
rectangle.getSquare();
// console.log(rectangle.getSquare());

// 2. Create an object that will have the price of the product and its discount, as well as two methods: for getting the price and for calculating the price with the discount:
function getPrice() {
  return this.price;
}

function getPriceWithDiscount() {
  return this.price - (this.price * parseFloat(this.discount)) / 100;
}

const price = {
  price: 10,
  discount: '15%',
  getPrice,
  getPriceWithDiscount,
};

price.getPrice(); // 10
// console.log(price.getPrice());

price.getPriceWithDiscount(); // 8.5
// console.log(price.getPriceWithDiscount());

// 3. Create an object that will have a height field and a “increase height by one” method. The method should return the new height:
// object.height = 10;
// object.inc(); // come up with your own name for the method
// object.height; // 11;

const obj = {
  height: 10,
  getHeight() {
    return parseFloat(this.height) + 1;
  },
};

obj.getHeight();
// console.log(obj.getHeight());

/**
4. Create an object “calculator”, which has a numeric property “value” and methods “double”, “add one”, “subtract one”.
Methods can be called through a dot, forming a chain of methods:

const numerator = {
   value: 1
   double: function () {...},
   plusOne: function(){...},
   minusOne: function(){...},
}

numerator.double().plusOne().plusOne().minusOne();

numerator.value // 3
 */
const numerator = {
  value: 5,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value += 1;
    return this;
  },
  minusOne: function () {
    this.value -= 1;
    return this;
  },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// 5. Create an object with a retail price and quantity of products. This object must contain a method to get the total cost of all products (price * quantity of products)
function getTotalPrice() {
  const res = this.price * this.number;
  return this;
}

const obj2 = {
  price: 3,
  number: 3,
  getTotalPrice,
};

obj2.getTotalPrice();

// 6. Create an object from the previous task. Create a second object that describes the number of parts and the price per part. For the second object, you need to know the total cost of all parts, but you cannot create new functions and methods.
// To do this, "borrow" the method from the previous object.
const obj3 = {
  price: 10,
  number: 2,
};
obj3.getTotalPrice = obj2.getTotalPrice;
obj3.getTotalPrice();

/**
7. Given an object and a function:
let sizes = {width: 5, height: 10},
getSquare = function () { return this.width * this.height};
Without changing the function or the object, get the result of the getSquare function on the sizes object
  */
let sizes = {
  width: 5,
  height: 10,
};
getSquare = function () {
  return this.width * this.height;
};

getSquare.call(sizes);

/** 8.
let element = {
height: 25
getHeight: function() { return this.height;}
};
let getElementHeight = element.getHeight;
getElementHeight(); // undefined
Modify the getElementHeight function so that you can call getElementHeight() and get 25.
  */
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};
// console.log(element.getHeight());
let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // 25
// console.log(getElementHeight());
