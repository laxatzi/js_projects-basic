
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
 
   
   console.log(range(2,19)); // [3, 4, 5, 6, 7, 8, 9]
   console.log(sum([1,2,4,3])); // 10
   //console.log(rangeStep(1, 10, 2)); // [1, 3, 5, 7, 9]
  // console.log(rangeStep(5, 2, -1)); // [5,4,3,2]
  console.log(sum(range(1, 10))); // 55

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


//.Reversing an Array
{
   //.Arrays have a reverse method that changes the array by inverting the order of its elements.
    //. Write two functions 'reverseArray' and 'reverseArrayInPlace'.
    //. The first takes an array as argument and produces a new array that has the same elements in the inverse order.
    //. The second does what the reverse method does: it modifies the array given as argument by reversing its elements. 
    //. Do not use the standard reverse() method.
     // my arrays
    let arrayNum = [1,2,3,4,5];
    let anotherArrayNum = [6,7,8,9,10];
   //my functions
    function reverseArray(arr){
      let newArray =  arr.slice().sort((a,b)=> b-a);
      return newArray;
    }
 
    function reverseArrayInPlace(arr){
      return arr.sort((a,b)=> b-a);
    }
    //test
   console.log(reverseArray(arrayNum)); 
   console.log(arrayNum);
   console.log(reverseArrayInPlace(anotherArrayNum));
   console.log(anotherArrayNum);

 }//block
 

