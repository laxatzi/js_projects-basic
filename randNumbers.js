//The Math.random() method #

var rand = Math.random();
console.log(rand);

// The number the Math.random() method generates is inclusive of 0 (as in, it could sometimes be 0, though I’ve never personally seen that happen), but exclusive of 1 (as in, it will never reach 1).



// Getting numbers bigger than 0 #

// What if you wanted to get integers, or whole numbers, instead of floats?

// To do that, we can multiply whatever Math.random() returns by a number that’s a power of ten. The bigger the number you multiple by, the more digits in the number.

var randomOverZero = function(num){
   return Math.random() * num;
}

