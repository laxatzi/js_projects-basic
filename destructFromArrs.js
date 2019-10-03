// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks ALL contents of an array into a comma-separated list. Consequently, you CANNOT pick or CHOOSE which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// Use destructuring assignment to swap the values of firstNum and secondNum so that firstNum receives the value stored in secondNum, and vice versa
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

//SOLUTION 
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8




