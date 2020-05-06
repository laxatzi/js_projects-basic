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

       //Exercises

   {
      // Minimum
        // Write a function min that takes two arguments and returns their minimum.
        // use an alternative to Math.min method

         const minOfTwo = (a,b)=> Math.min(a,b);
         console.log(minOfTwo(3,6)); // 3
         const minimumOfTwo = (a,b)=> a>b?b:a;
         console.log(minimumOfTwo(-4, -19)); // 
   }    

   {
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

   }
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