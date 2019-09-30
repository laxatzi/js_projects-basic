//Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = function(arr) {
   "use strict";
   // change code below this line
   const squaredIntegers = arr.filter(function(num){
     return num>0 && num % parseInt(num)===0
   }).map(function(num){
     return Math.pow(num, 2);
   });
   // change code above this line
   return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);//[16, 1764, 36]

// Let's try in ES6
const realNumbs = [5, 6.8, -3.6, 45, 8, 8.34, -4];
const squareNumbList = (arr)=> {
const squaredNumbs= arr.filter((num)=> num>0 && num % parseInt(num)===0).map((num)=>Math.pow(num,2));
return squaredNumbs;
}

console.log(squareNumbList(realNumbs));//[25, 2025, 64]


// Alternative way of checking for integers
const realNumbs = [5, 6.8, -3.6, 45, 8, 8.34, -4];
const squareNumbList = (arr)=> {
const squaredNumbs= arr.filter((num)=> num>0 && Number.isInteger(num).map((num)=>Math.pow(num,2));
return squaredNumbs;
}

console.log(squareNumbList(realNumbs));//[25, 2025, 64]

