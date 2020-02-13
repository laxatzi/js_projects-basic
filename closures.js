// A closure keeps a reference to a free variable that was created inside the scope of another function, bit is then kept alive and used in another part of the program.

// function scope
var outside = "I am a global variable";
function fun(){
   var inside = "I am a global variable";
}
//console.log(outside); // "I am a global variable";
//console.log(inside);// Error: inside is not defined;

// we are unable to access the variable inside outside of the function.

// But we can gain access to it using a closure
// example
function temple(){
   var weapons = "Katana, Bo, Shuriken, Yuri";

      function innerSanctum(){
         var stealth = "Cho Ho, Henso-Jutsu, Shinobi-Iri";
         return "Ninja Skills "+ weapons + " "+stealth;
      }
      return innerSanctum();
}// end of temple

var ninja = temple(); // When the 'temple()' function is called, it can be assigned to a ninja variable that will have access to the information contained in the 'weapons' and 'stealth' variables outside the 'temple()' function.
// the 'ninja' variable here, represents a Closure, as it has access to variables created inside the 'temple()' function

console.log(ninja); // Ninja Skills Katana, Bo, Shuriken, Yuri Cho Ho, Henso-Jutsu, Shinobi-Iri

// another Closure Example

function closure(){
   var inside = "created inside";
   return inside;
}

//console.log(inside); // Error: inside in not defined

// but we can  create a closure by invoking the closure function which will return the value of 'inside' and make it available outside the function:

var createdOutside = closure();
console.log(createdOutside); // created inside; --works fine

// a function can form a closure that maintains access to all the variables created in the original function's scope by returning a function instead of a single value
// example
function toFahrenheit(){
   var a= 1.8;
   var b = 23;
   return function(c){
      return c*a + b;
   }
} // and of function
// Now a new function can be created by invoking this function and assigning the return value to a variable. This new function can then be invoked with its own argument, but the variables inside the higher function are still remembered

var calcCtoF = toFahrenheit();
console.log(calcCtoF(30)); // 77
console.log(calcCtoF(4)); //30.2


