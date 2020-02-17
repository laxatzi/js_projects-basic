// Curring 

/* 
   Curring is a process that involves the partial application of functions. A function is said to be curried when not all arguments have been supplied to the function, so it returns another function  that retains the arguments given and expects the remaining arguments in the future.
*/

function multiplier(x,y){
   if(y === undefined){
      return function(z){
         return x * z;
      }
   }else{
      return x * y;
   }
}

const sixTimes = multiplier(6);

console.log(multiplier(5,6)); // 30
console.log(sixTimes(5)); // 30

// Curring is useful if you find yourself constantly calling a function with the same argument.

// EXERCISE
  // create a function to calculate vat tax of 24%

function calcVat(vat,tax){
  if(tax === undefined){
     return function(x){
        return x * vat;
     }
  }else {
     return vat * tax;
  }
}

const vat24 = calcVat(.24);
console.log(vat24(56)); //13.44