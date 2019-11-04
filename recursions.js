// RECURSION is simply when a function calls itself

// recursion example: function returns the factorial of an integer

function factorial(x){
   if(x<0) return; //1. TERMINATION: factorial a neg number is not possible
   if(x === 0) return 1; //2. BASE: factorial can't go beyond 0
   return x * factorial(x-1); // 3. RECURSION returning value of x multiplied by value of whatever                                     factorial(x-1) evaluates to 
}

console.log(factorial(3)); // 6

//The three key features of recursion

    // 1. Termination condition
    // if (something bad happens){STOP};
   
   // 2. Base case: if(this happens){ Yah! We are done! }; 
   // Base cases are usually within an if statement
   // Base case is the minimum goal of our recursive function
   

   //3. The actual recursion
   // Our function calling itself


   // Now that our function has finally returned, everything will unwind.
   //since recursion is simply a group of NESTED function calls.
   // With nested functions, the most inner nested function wil be returned first
   /*
       factorial(0) returns 1
       factorial(1) returns 1* factorial(0), or just 1*1
       factorial(2) returns 2* factorial(1), or just 2*1*1
       factorial(3) returns 3* factorial(2, of 3* 2*1*1 = 6
*/

//EXAMPLE 2: REVERSING A STRING

function revStr(str){
   if(str === '') return '';  // Base case
   return revStr(str.substr(1)) + str[0]; // recursion
}
// no termination case here: we can't get a string that has negative characters
console.log(revStr('dog'));// god

// break it down line by line