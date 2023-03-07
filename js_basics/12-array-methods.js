/** 1.
Based on the array [1,2,3,5,8,9,10] form a new array,
each element of which will store information about the number and its parity:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
 */
const arr = [1, 2, 3, 5, 8, 9, 10];
const newArr = arr.map((num) => ({ digot: num, odd: Boolean(num % 2) }));
console.log(newArr);

/** 2.
Check if the array [12, 4, 50, 1, 0, 18, 40] contains zero elements. If yes, return true.
 */
const arr2 = [12, 4, 50, 1, 0, 18, 40];
const isNull = arr2.some((num) => num === 0);
console.log(isNull);

/** 3. 
Check if all array elements are longer than 3 characters ['yes', 'hello', 'no', 'easycode', 'what']. If yes, return true
 */
const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];
const isLength = arr3.every((str) => str.length > 3);
console.log(isLength);

/** 4.
An array of objects is given, where each object contains information about the letter and its position in the string {letter: “a”, position_in_sentence: 1}:

[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Write a function that will collect and return a string from the elements of the array, based on the index of each letter. For example:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
 */
const charArr = [
  { char: 'a', index: 12 },
  { char: 'w', index: 8 },
  { char: 'Y', index: 10 },
  { char: 'p', index: 3 },
  { char: 'p', index: 2 },

  { char: 'N', index: 6 },
  { char: ' ', index: 5 },
  { char: 'y', index: 4 },
  { char: 'r', index: 13 },
  { char: 'H', index: 0 },

  { char: 'e', index: 11 },
  { char: 'a', index: 1 },
  { char: ' ', index: 9 },
  { char: '!', index: 14 },
  { char: 'e', index: 7 },
];

// const returnStr = charArr
//   .sort((prevChar, nextChar) => prevChar.index - nextChar.index)
//   .map((char) => char.char)
//   .join('');
// console.log(returnStr);

function getStr(arr) {
  const cloned = charArr.slice();
  return cloned
    .sort((prev, next) => prev.index - next.index)
    .reduce((acc, { char }) => acc + char, '');
}
console.log(getStr(charArr));

/** 5.
Sort the array of arrays so that the smallest arrays are placed first (the size of an array is determined by its length): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
 */
const arr5 = [[14, 45], [1], ['a', 'c', 'd']];
const newArr5 = arr5.sort(
  (prevArr, nextArr) => prevArr.length - nextArr.length
);
console.log(newArr5);

/** 6.
Given an array of objects:
[{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}]
Sort them by increasing number of cores.
 */
const prods = [
  {
    cpu: 'intel',
    info: {
      cores: 2,
      сache: 3,
    },
  },
  {
    cpu: 'intel',
    info: {
      cores: 4,
      сache: 4,
    },
  },
  {
    cpu: 'amd',
    info: {
      cores: 1,
      сache: 1,
    },
  },
  {
    cpu: 'intel',
    info: {
      cores: 3,
      сache: 2,
    },
  },
  {
    cpu: 'amd',
    info: {
      cores: 4,
      сache: 2,
    },
  },
];
const newProds = prods.sort(
  (prevProd, nextProd) => prevProd.info.cores - nextProd.info.cores
);
console.log(newProds);

/** 7.
Create a function that will accept an array of products and two prices. The function should return all products whose price is in the specified range, and sort from cheap to expensive:
let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}];

filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 */
let products = [
  { title: 'prod1', price: 5.2 },
  { title: 'prod2', price: 0.18 },
  { title: 'prod3', price: 15 },
  { title: 'prod4', price: 25 },
  { title: 'prod5', price: 18.9 },
  { title: 'prod6', price: 8 },
  { title: 'prod7', price: 19 },
  { title: 'prod8', price: 63 },
];

function filterCollection(products, minPrice, maxPrice) {
  const newProducts = products
    .filter((product) => minPrice <= product.price && product.price <= maxPrice)
    .sort((prevProduct, nextProduct) => prevProduct.price - nextProduct.price);
  return newProducts;
}

filterCollection(products, 15, 30);
console.log(filterCollection(products, 15, 30));
