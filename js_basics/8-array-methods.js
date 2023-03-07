// 1. Create a function that takes a number n and returns an array filled with numbers from 1 to n:
function getArray(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  return numArr;
}

getArray(5); // [1,2,3,4,5,6,7,8,9,10]

// 2. Create a function that takes an array and returns a new array with duplicate elements of the input array.
function doubleArray(arr) {
  if (!Array.isArray(arr)) {
    return console.error('Please provide an array');
  }
  const arrNew = arr;
  return arrNew.concat(arrNew);
}

doubleArray([1, 2, 3]); // [1,2,3,1,2,3]

// 3. Create a function that takes an arbitrary (any) number of arrays and removes the first element from each array, and returns an array of the remaining values.
// Don't forget to check if the array is an array. This can be done using the Array.isArray(arr);
function changeCollection(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    if (!Array.isArray(arguments[i])) {
      return console.error('Please provide all elements as array');
    }
    newArr[i] = arguments[i];
    newArr[i] = newArr[i].splice(1);
  }
  return newArr;
}

changeCollection([1, 2, 3], ['a', 'b', 'c']); // [ [2,3], [‘b’, ‘c’] ]

// 4. Create a function that takes an array of users, the field that I want to check and the value for which I want to check the specified field. Check that all arguments are passed. If something is not passed then return an error object return new Error('Error message'). Return a new array with users matching the specified parameters.
// Array of users

// Result :
// [
//    {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//    },
//  ]

let users = [
  {
    _id: '5e36b779daf6e455ec54cf45',
    balance: '$3,424.84',
    picture: 'http://placehold.it/32x32',
    age: 36,
    name: 'Kari Waters123',
    gender: 'female',
  },
  {
    _id: '5e36b779dc76fe3db02adc32',
    balance: '$1,955.65',
    picture: 'http://placehold.it/32x32',
    age: 33,
    name: 'Berg Zimmerman',
    gender: 'male',
  },
  {
    _id: '5e36b779d117774176f90e0b',
    balance: '$3,776.14',
    picture: 'http://placehold.it/32x32',
    age: 37,
    name: 'Deann Winters',
    gender: 'female',
  },
  {
    _id: '5e36b779daf6e455ec54cf45',
    balance: '$3,424.84',
    picture: 'http://placehold.it/32x32',
    age: 36,
    name: 'Kari Waters',
    gender: 'female',
  },
];

function filterUsers(arr, key, name) {
  if (arguments.length !== 3) {
    return new Error('Error message');
  }

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === name) {
      res.push(arr[i]);
    }
  }
  return res;
}

filterUsers(users, 'age', 36);
