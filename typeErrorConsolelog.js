
// getting the TypeError:console.log is not a function

console.log() // no respect for the semicolon here

//IIFE function 
(function(){

   // code here
});
// here we have a iife following a console.log WITHOUT a semicolon conclude the statement
// So the code is trying to pass 'function(){}' as an argument to the 'return value' which itself is not a type function but rather type undefined (see line 17)

// this is because js interprets this as 'console.log()(function(){}());' 
// 'console.log' however IS a function (see line 18)

console.log(typeof console.log()); // undefined
console.log(typeof console.log); // function

// if you didn't have the console object you'd see 
// ReferenceError: console is not defined

// if you had the console obj but NOT the log method you'd see
 // TypeError: console.log is not a function

// However what we have is: TypeError: console.log(...) is not a function
// Note the (...) after the function name. With those is referring to the return value of the function

// the two expressions are not considered separated due to the lack of the semicolon at the end of line 4
//it is because of console.log()() its console.log(...) 3 dots not a function error, otherwise it should been just console.log is not function (only if it wasn't but actually it is.
// If something’s not a function then that function is always referred to by its function name, e. g. object.method, if you’re using the return value, especially in a chained method, it’ll be object.method(...). It kinda takes the experience to know why you should always use semicolons, and how to interpret JavaScript error messages correctly.
