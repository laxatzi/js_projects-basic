//We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros

 function printFarmInventory(cows, chickens, pigs) {
   //cows
   let cowString = String(cows);
   while (cowString.length < 3) {
   cowString = "0" + cowString;
   }
 //  console.log(`${cowString} Cows`);
   // chickens
   let chickenString = String(chickens);
   while (chickenString.length < 3) {
   chickenString = "0" + chickenString;
   }
 //  console.log(`${chickenString} Chickens`);
   // pigs
   let pigString = String(pigs);
   while(pigString.length < 3){
      pigString = "0" + pigString;
   }
  // console.log(`${pigString} Pigs`);
   }
   printFarmInventory(7, 11, 17);

   function printZeroPaddedWithLabel(number, label) {
      let numberString = String(number);
      while (numberString.length < 3) {
      numberString = "0" + numberString;
      }
    //  console.log(`${numberString} ${label}`);
      }

  function printFarmInventory(cows, chickens, pigs) {
      printZeroPaddedWithLabel(cows, "Cows");
      printZeroPaddedWithLabel(chickens, "Chickens");
      printZeroPaddedWithLabel(pigs, "Pigs");
      }

      printFarmInventory(7, 11, 3);
      

      // But that name, printZeroPaddedWithLabel, is a little awkward.
      // It conflates three things—printing, zero-padding, and adding a label—into a
      // single function.
      // Instead of lifting out the repeated part of our program wholesale, let’s try
      // to pick out a single concept
      

      
   function zeroPad(number, width) {
      let string = String(number);
      while (string.length < width) {
      string = "0" + string;
      }
      return string;      
  }

  function printFarmInventory(cows, chickens) {
      console.log(`${zeroPad(cows, 3)} Cows`);
      console.log(`${zeroPad(chickens, 3)}  Chickens`);
      }

      printFarmInventory(7, 11, 3);


  //EXERCISES
  // Minimum

   {
        // Write a function min that takes two arguments and returns their minimum.
        // use an alternative to Math.min method

         const minOfTwo = (a,b)=> Math.min(a,b);
         console.log(minOfTwo(3,6)); // 3
         const minimumOfTwo = (a,b)=> a>b?b:a;
         console.log(minimumOfTwo(-4, -19)); // -19
   }    

   

  // Recursion

        // We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

        // -- zero is even
        // -- one is odd
        // -- for any other number N, its evenness is the same as N-2

        // Define a recursive function isEven that takes advantage of the above conclusions
        // The function should accept a single parameter (a positive integer) and return a Boolean

         //Test it on 50 and 75. See how it behaves on -1. Why is that? Can you think of a way to fix this?
   
         // console.log(isEven(50)); //
         // console.log(isEven(75)); //
         // console.log(isEven(-1)); // 

   
// example to bear in mind

      // function findSolution(target) {
      // function find(current, history) {
      //    if (current == target) {
      //    return history;
      //    } else if (current > target) {
      //    return null;
      //    } else {
      //    return find(current + 5, `(${history} + 5)`) ||
      //             find(current * 3, `(${history} * 3)`);
      //    }
      // }
      // return find(1, "1");
      // }

      // console.log(findSolution(24));

      {
        function isEven(n){
         
          if(n===0) return true;
          else if(n===1 ) return false;
          else if(n<0) return isEven(n *= -1);
         return isEven(n-2);
        }//end isEven
        
      //test 
      console.log(isEven(50)); // true
      console.log(isEven(75)); // false
      console.log(isEven(-1)); // false

      }// end block



//.Bean Counting

    //. Write a function countBs that takes a string as its only argument and returns
    //. a number that indicates how many uppercase “B” characters there are in the string.
    //. Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
    //. Rewrite countBs to make use of this new function.
  {
 
   const countBs = str => str.split("").filter(elem => elem === 'B').reduce(elem => elem += 1, 0);
   //TEST
   console.log(countBs('ABB Electrical Equipment'));

// create countChar function 
    const countChar = (str, char) => str.toLowerCase().split("").filter(elem => elem === char).reduce(elem => elem+= 1, 0);
        // TEST
              console.log(countChar('Serres', 's'));

  // Rewrite countBs to make use of this new function.

  // function countAllBs(str, char, charCap){
  //   const strToArr = str.split('');
  //     let numOfChars = 0;
  //     strToArr.map(elem=> {
        
  //       if(elem === char || elem===charCap){
  //         numOfChars += 1;
  //       }
  //     });
  //     return numOfChars;
  // }

  const countAllBs = (str, char, charCap) => str.split('').filter(elem => elem === char || elem === charCap).reduce(elem => elem += 1, 0); 
  
    console.log(countBs("Bombing Babe!"));
    console.log(countChar('Anasa', 'a'));
    console.log(countAllBs('The evaluation is BBB brother!', 'b', 'B'));
  }// end block
 


//. Sum of Range
  {
    //. Write a range function that takes two arguments, 'start' and 'end', and returns an array containing all the numbers form start up to (including)end.
    //. Nest write a 'sum; function that takes an array of numbers and returns the sum of these numbers.
    //. Run the example program and see whether it does indeed return 55
    //. Then modify your range() function to take an optional third argument that indicates the 'step' value used when building the array.
    //. if no step is given, the elements go up by increments of one.
    //. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]
    //. Make sure it also works with negative step values so that range(5, 2, -1) produces [5,4,3,2]

  }// end block


//.Reversing an Array
{
  //.Arrays have a reverse method that changes the array by inverting the order of its elements.
   //. Write two functions 'reverseArray' and 'reverseArrayInPlace'.
   //. The first takes an array as argument and produces a new array that has the same elements in the inverse order.
   //. The second does what the reverse method does: it modifies the array given as argument by reversing its elements. 
   //. Do not use the standard reverse() method.

}//block


//. A List
{
  //. A common data-structure is the List. A list is a nested set of objects, with the first object holding a reference to the second, the second to the third and so on...
  {
    let list = {
      value: 1,
        rest: {
          value:2,
          rest: {
            value:3,
            rest: null
          }
        }
    };

  }//block
  // ...A nice thing about lists is that they share parts of their structure. For example, if i create two new values {value:0, rest:list} and {value: -1, rest:list} they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

  //.Write a function 'arrayToList' that builds up a list structure like the one shown when given [1,2,3] as argument.
  //. Also write a listToArray function that produces an array from a list. 
  //. Then add a helper function 'prepend' which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list(with zero referring to the first element) or undefined when there is no such element.
  //. If you haven't already, also write a recursive version of nth.

}//block


//. Deep Comparison
{
  //. The == operator compares objects by identity. But sometimes you'd prefer to compare the values of their actual properties.
  
  //. Write a function 'deepEqual' that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

  //. To find out if values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces 'object' for both values, you should do a deep comparison. 
  //. But you have to take one silly exception into account: because of historical accident, typeof null also produces "object";
  //. The object.keys function will be useful when you need to go over the properties of objects to compare them.

  // code here

}//block