//. Sum of Range
{
   //. Write a range function that takes two arguments, 'start' and 'end', and returns an array containing all the numbers form start up to (including)end.
   //. Next write a 'sum; function that takes an array of numbers and returns the sum of these numbers.
   //. Run the example program and see whether it does indeed return 55
   //. Then modify your range() function to take an optional third argument that indicates the 'step' value used when building the array.
   //. if no step is given, the elements go up by increments of one.
   //. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]
   //. Make sure it also works with negative step values so that range(5, 2, -1) produces [5,4,3,2]


   function range(start, end){
      let arr = [start];
      if(start >= end){return start};
      return arr.concat(range(start+1, end));
   }

   function sum(arr){
      return arr.reduce((el, sum)=> el + sum);
   }
 
   function rangeStep(start, end, step){
      let arr = [start];
      if(start + step >= end){ return start};
      return arr.concat(range(start, end, step));
   }
   console.log(range(3,9)); // [3, 4, 5, 6, 7, 8, 9]
   console.log(sum([1,2,4])); // 7
   console.log(rangeStep(1, 10, 2)); // [1, 3, 5, 7, 9]
  // console.log(rangeStep(5, 2, -1)); // [5,4,3,2]
  console.log(sum(rangeStep(1, 10, 2))); // 25

 }// end block

   // (function(){
   //    'use strict';
   //      const factorial = (num)=>{
   //         if(num <= 0){
   //            return 1;
   //         }
   //         return (num * factorial(num - 1));
   //      }
    
   //      console.log(factorial(6)); // 720
   //  }());//end wrapper iife
