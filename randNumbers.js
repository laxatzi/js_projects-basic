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
//example
var rand100 = randomOverZero(100);
console.log(rand100); // 65.661

// Getting a random integer #

// For that, we can use the Math.floor() method after multiplying the returned value of Math.random() by our power of ten.

var randomInteger = function (pow) {
	return Math.floor(Math.random() * pow);
};
console.log(randomInteger(34)); //23


// Getting a random integer between two numbers #
For that, we’ll create a helper function that accepts a min and max for the random number as arguments.

// Then, we’ll subtract the min from the max, and add 1 to it (otherwise the max would never be reached). We’ll multiply the returned value of Math.random() by this new number, and add the min to it. This gives us a random float between our two values.

// Finally, we’ll use Math.floor() to turn it into an integer, and return the result.

var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

// Logs something like 37
var rand = randomNumber(5, 42);
console.log(rand);