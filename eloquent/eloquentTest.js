 // Minimum
        // Write a function min that takes two arguments and returns their minimum.
        // use an alternative to Math.min method

        {
           const minArg = (a,b)=> a > b? b : a;
           console.log(minArg(45, 76)); // 45

        }// end block
 
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
     
{
        function isEven(num){
               if(num === 1)return false;
               else if(num === 0) return true;
               else if(num < 0) return isEven(num *= -1);
               return isEven(num-2);
        }
          console.log(isEven(50)); //
          console.log(isEven(75)); //
          console.log(isEven(-5)); //
}//end of block

//Letter Counting

         // Write a function countBs that takes a string as its only argument and returns
         // a number that indicates how many uppercase “B” characters there are in the
         // string.
         // Next, write a function called countChar that behaves like countBs, except
         // it takes a second argument that indicates the character that is to be counted
         // (rather than counting only uppercase “B” characters).

{
  //countBs function
              const countBs = str => str.split("").filter(elem => elem === 'B').reduce(elem => elem += 1, 0);
              //TEST
              console.log(countBs('ABB Electrical Equipment'));

  //countChar function
              const countChar = (str, char) => str.toLowerCase().split("").filter(elem => elem === char).reduce(elem => elem+= 1, 0);
        // TEST
              console.log(countChar('Serres', 's'));

 //countLowerAndUperCases function
     const countLowerAndUpperCases = (str, char, charCap) => str.split('')
     .filter(elem => elem === char || elem === charCap).reduce(elem => elem += 1, 0);
      //TEST
     console.log(countLowerAndUpperCases('Serres', 's', 'S')); 
              
}// end of block

         
