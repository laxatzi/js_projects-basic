
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
  console.log('END of "sum of range" exercise');
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
           let namesArr = ['Lambros', 'Antonis', 'Kassandra', 'Diogenis'];
           let anotherNamesArr = ['Stella', 'Vicky', 'Antonia'];
           let petsArr = ['dog', 'cat', 'canary'];
     
//my functions 
            function reverseArray(arr)    {
              return arr.map((el, index)=> arr[arr.length-1-index]); // algorith to reverse index order
            }
      
//[...el] clones the array, .map(el.pop, el) pops the array (returns the last element of the array) and push it to a new array, which results in a reversed array.and the 2nd argument to map makes sure that pop is executed with el as this, like as if you would have done el.pop() 
           function reverseArrayInPlace(arr){
             return [...arr].map(arr.pop, arr); //? why the second arg?*
           }
      //? *When you pass on a function reference (so without executing it), which is later used for execution, then that function reference has no trace at all of the object you want to have it executed on: it is just a plain function. In the above code you might as well have put [].pop instead of a.pop: it would be exactly the same function. When the implementation of map executes that function, it does not know on which array it should be executed. And if you don't tell that, it will fail. The second argument to map gives the necessary info to map.

//*The below function is similar with the reverseArrayInPlace function but without mutating original array
//*find out why
              //  function reverseArrayInPlace(arr){
              //        return arr.map(arr.pop, [...arr]);
              // }

//test
            console.log("This is the reversed array: " + reverseArray(namesArr));
            console.log("This is the reversed array: " + reverseArray( arrayNum));
            console.log("This is the original array: " + namesArr);
            console.log("This is the original array: " + arrayNum);
            console.log("This is the original array: " + anotherNamesArr);
            console.log("This is the reversed in place array: " + reverseArrayInPlace(anotherNamesArr));
            console.log("This is the original array after function being called: (array empty because of pop mutating it)" + anotherNamesArr);
            console.log('END of "reversing array" exercise');

     }//block
     