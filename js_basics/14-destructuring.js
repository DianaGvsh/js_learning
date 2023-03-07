/** 1. Using the rest operator and destructuring, create a function that takes any number of arguments and returns an object containing the first argument and an array from the remainder:
func(‘a’, ‘b’, ‘c’, ‘d’) →
{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] }
 */
function func(first, ...others) {
  const obj = {
    first: first,
    arr: others,
  };
  return obj;
}

func('a', 'b', 'c', 'd');

// const getFirstAndOther = (first, ...other) => ({ first, other });

/** 2. Organize a getInfo function that takes a view object
{ name: ..., info: { employees: [...], partners: [ … ] } }
and prints the name to the console (if there is no name, show 'Unknown') and the first two companies from the partners array:
const organization = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

getInfo(organization); →
Name: Google
Partners: Microsoft Facebook
 */
const organization = {
  name: 'Google',
  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing'],
  },
};

function getInfo(obj) {
  const {
    name = 'Unknown',
    info: {
      partners: [firstPartner = '', secondPartner = '', ...others],
    },
  } = obj;
  console.log(`Name: ${name}`);
  console.log(`partners: ${firstPartner}, ${secondPartner}`);
}

getInfo(organization);

/** 3. Given a user object. Using destructuring get values from the following fields
1. name, balance, email
2. get the first and last element from the tags array
3. from the friends array, get the value of the name field from the first element of the array
If any of the fields does not have a value, then substitute the default value.
 */
let user = {
  guid: 'dd969d30-841d-436e-9550-3b0c649e4d34',
  isActive: false,
  balance: '$2,474.46',
  age: 30,
  eyeColor: 'blue',
  name: 'Tameka Maxwell',
  gender: 'female',
  company: 'ENOMEN',
  email: 'tamekamaxwell@enomen.com',
  phone: '+1 (902) 557-3898',
  tags: ['aliquip', 'anim', 'exercitation', 'non'],
  friends: [
    {
      id: 0,
      name: 'Barber Hicks',
    },
    {
      id: 1,
      name: 'Santana Cruz',
    },
    {
      id: 2,
      name: 'Leola Cabrera',
    },
  ],
};

const {
  name: userName = 'defaultName',
  balance = 'defaultBalance',
  email = 'defaultEmail',
  tags: [firstTag = 'firstTag', ...otherTags],
  friends: [{ name: firstFriendName = 'defaultName' }],
} = user;
const lastTag = otherTags[otherTags.length - 1] || 'lastTag';
console.log(userName, balance, email, firstTag, lastTag, firstFriendName);

/** 4. Using the rest operator, copy the value of the following fields tags and friends from the user object (from the previous task) into a new array
 */
const newwArr = [...user.tags, ...user.friends];
console.log(newwArr);
