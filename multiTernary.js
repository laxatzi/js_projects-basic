// Use Multiple Conditional (Ternary) Operators

// Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.

function checkSign(num) {
   if(num > 0){
     return "number is positive";
   }
   else if(num === 0){
     return "number is zero";
   }
   else {
     return "number is negative";
   }
 }

 // recreate the conditional with ternary operators

 function checkSignWithTernary(num) {
   return num > 0 ? "number is positive" : num === 0 ? "number is zero" : "number is negative";
}