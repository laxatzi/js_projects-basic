// Recursive Functions 

/* 
   A recursive function is one that invokes itself until a certain condition is met.
   A common example is a function that calcs the factorial of a number
*/

function factorial(x){
   if(x<0) return;
   if(x === 0) return 1;
   if(x>0){
      return x * factorial(x-1);
   }
}

console.log(factorial(21)); // 120
