// 1. Redo the function using an arrow function (also use an arrow function in the reduce method):
// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce(function (prev, next) {
//     return prev + next;
//   });
// }

const sum = (...params) => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
};

sum(1, 2, 3, 4); // 10
sum(); // 0
console.log(sum(1, 2, 3, 4));
console.log(sum());

// 2. Rewrite the function using an arrow function
// function convertToObject(num) {
//   const obj = {
//     value: num,
//     isOdd: Boolean(num % 2),
//   };
//   return obj;
// }

const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});

console.log(convertToObject(5));
