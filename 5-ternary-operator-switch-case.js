// 1. Write the following condition as a switch case:
let a;
if (a === 'block') {
  console.log('block');
} else if (a === 'none') {
  console.log('none');
} else if (a === 'inline') {
  console.log('inline');
} else {
  console.log('other');
}
// result
switch (a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}
// If you need to perform the same action for different cases
switch (a) {
  case 'block':
  case 'none':
  case 'inline':
    console.log(a);
    break;
  default:
    console.log('other');
}

// 2. Write this condition as a ternary operator
let b = 'hidden';
if (b === 'hidden') {
  b = 'visible';
} else {
  b = 'hidden';
}
// result
b = b === 'hidden' ? 'visible' : 'hidden';
console.log(b);

// 3. Write this condition as a ternary operator
let c = 0;
if (c === 0) {
  c = 1;
} else if (c < 0) {
  c = 'less then zero';
} else {
  c *= 10;
}
// result
c = c === 0 ? 1 : c < 0 ? 'less then zero' : c * 10;
