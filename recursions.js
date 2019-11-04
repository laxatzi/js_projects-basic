// RECURSION is simply when a function calls itself

// recursion example: function returns the factorial of an integer

function factorial(x){
   if(x < 0) return; //1. TERMINATION: factorial a neg number is not possible
   if(x === 0) return 1; //2. BASE: factorial can't go beyond 0
   return x * factorial(x-1); // 3. RECURSION returning value of x multiplied by value of whatever                                     factorial(x-1) evaluates to 
}

console.log(factorial(3)); // 6

//The three key features of recursion

    // 1. Termination condition
    // if (something bad happens){STOP};
   
   // 2. Base case: if(this happens){ Yah! We are done! }; 

   /* Base case is the minimum goal of our recursive function
      The base case (usually within an if statement) tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.
  */

   //3. The actual recursion
   // Our function calling itself


   // Now that our function has finally returned, everything will unwind.
   //since recursion is simply a group of NESTED function calls.
   // With nested functions, the most inner nested function wil be returned first
   /*
       factorial(0) returns 1
       factorial(1) returns 1* factorial(0), or just 1*1
       factorial(2) returns 2* factorial(1), or just 2*1*1
       factorial(3) returns 3* factorial(2, of 3*2*1*1 = 6
*/

//EXAMPLE 2: REVERSING A STRING

function revStr(str){
   if(str === '') return '';  // Base case
   return revStr(str.substr(1)) + str[0]; // recursion
}
// no termination case here: we can't get a string that has negative characters
console.log(revStr('dog'));// god

// break it down line by line
/* 
   str.substr(1) === 'og'
   str[0] === 'd'
   so ...
   revStr('dog') returns revStr('og')+'d';
   revStr('og') return revStr('g' ) + 'o';
   revStr('g') return revStr('') + 'g';
   revStr('') return '' ; 

   Since the above are NESTED function calls ... the inner function return first.
   So when we unwind the group of functions =>
   1 revStr('') returns '' => '';
   2 revStr('g') returns revStr('') + 'g' =>'g'
   3 revStr('og') returns revStr('g') + 'o' => 'go' 
   4 revStr('dog') returns revStr('go') +'d' => 'god'
   5  
*/

// another example
// Multiply the elements from 0 to n (inclusive in an array) to create the product (γινόμενον) of 
// those elements

// above task with a for loop
function multiply(arr, n){
   let product = arr[0];
   for(let j=0; j<=n; j++){
      product *= arr[j];
   }
   return product;
}

console.log(multiply([2,3], 1)); // 12

// same task with recursion function

function multi(arr2, i){
   if(i<=0) return arr2[0];
   return multi(arr2, i-1)* arr2[i];
}

console.log(multi([4,5,6], 2)); // 120

// Exercise: 

/*
We have defined a function named rangeOfNums with two params.
The function should return an array of integers which begins 
with a number represented by the startNum parameter, and ends 
with the number represented by the endNum parameter.
The starting number will always be less than or equal to the ending one.
Use recursion function
*/

function rangeOfNums(startNum, endNum){
    if(endNum< startNum) return ;
    else if(endNum - startNum === 0) return [startNum];
    else {
       return rangeOfNums(startNum, endNum-1).concat(endNum);
    }
}

console.log(rangeOfNums(3,6)); //[3,4,5,6]

// Exercise
/*
    We have defined a function called countdown with two params.
    The function should take an array in the myArray param and append the numbers 'n'
    through 1 based on the 'n' parameter.
    For example, calling this function with n=5, will pad the array with the numbers
    [5,4,3,2,1] inside of it.

*/
/*
function countdown(myArray, n){
   if(n<1) return;
   else if(n === 1) return [1];
   else {
      var counting =  countdown(myArray, n-1 );
      counting.unshift(n);
      return counting;
   }
 }
var myArr = [];
 console.log(countdown(myArr, 10));
 */
function finalCountdown(myArr, num){

      if(num <= 0){
        return;
      }
      else{
        myArray.push(num);
        finalCountdown(myArray, num - 1);
      }
   }
   var myArr = [];
   console.log(finalCountdown(myArr,7));