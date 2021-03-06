// what are modules?
/*
 Good authors divide their books into chapters and sections; good programmers divide their code into
 modules.
 Like book chapters are clusters of words...modules are just clusters of code.
Good modules are highly self-contained with distinct functionality.
They can be shuffled, removed or added when appropriate without disturbing the program as a whole
*/

// Why use modules?
/*
   1.Maintainability:
   By definition a module is self-contained. A well designed module aims to lessen the dependencies on parts of the codebase a much as possible. Updating a single module is much easier when the module is decoupled from other pieces of code.

   2.Namespacing:
   In javascript, variables outside of the scope of a top-level function are global.
   Because of this, it's common to have namespace pollution, where completely unrelated code
   shares global variables.
   Modules, allow us to avoid namespace pollution by creating a private space for our variables.

   3.Reusability
*/

//How to incorporate modules into our program?
/*
   1. Module pattern

   The Module pattern is used to mimic the concept of classes, since javascript does not natively supports classes, so that we can store both public and private methods and variables inside a single object.
   This resembles the way classes are used in other programming langs like Java and Python.
   We now can create a public facing API for the methods we want to expose to the world, while, at the same time, we still encapsulating private variables and methods in a closure scope.
   We can accomplish the creation of a module pattern with the use of an anonymous closure, that will help us putt our code in an anonymous function.
   Remember that in Javascript, functions are the only way to create new scope


*/
// anonymous closure
var global = "I'm a global variable!";
(function(){
   //we keep this variables private inside this closure scope
   var myGrades = [17, 15, 19, 14, 17];

   var averageGrade = function(){
      var total = myGrades.reduce(function(sum, item){
         return sum + item
      },0);
      return "Your average grade is "+ total/myGrades.length +"!";
   }
   var failing = function(){
      var failingGrades = myGrades.filter(function(item){
         return item < 17;
      });
      return "You failed "+ failingGrades.length +" times in your goal!";
   }
   console.log(averageGrade());//16.4
   console.log(failing()); // You failed two times
   console.log(global); // I'm a global variable!
}());

/*
    With this construct, our anonymous function has its own evaluation environment or "closure", and then we immediately evaluate it. This lets us hide variables form the global namespace.
    We can use local variables inside this function without accidentally overwrite existing global variables, yet still access the global variables - as shown in the third console.log
*/
/*
   Note that the parenthesis around the anonymous function are required, because statements that begin with the keyword function are always considered to be function declarations (remember, you can’t have unnamed function declarations in JavaScript.) Consequently, the surrounding parentheses create a function expression instead
*/
// There are other module patter approaches (we wont see them here) that all have one thing in common: The use of a single global variable to wrap its code into a function, thereby creating a private namespace for itself using a closure scope.
// There are ways to ask for a module's interface without going through the global scope:
// CommonJS and AMD

// 2. CommonJS

/*
   A commonJS module is essentially a reusable piece of javascript which exports specific objects,
   making them available for other modules to REQUIRE in their programs.
   With commonJS, each javascript file stores modules in its own unique module context just like wrapping it in a closure.
   In this scope, we use the module.exports object to expose modules, and 'require' to import them. 
*/

function myModule(){
   this.hello = function(){
      return 'hello';
   }
   this.goodbye = function(){
      return 'goodbye';
   }
}

module.exports = myModule;

// we use the special object module and place a reference of our func into modules.exports.
// this lets the CommonJS system know what we want to expose so that other files can consume it.

// then when someone wants to use myModule, they can require it in their file

var myModule = require('myModule');
var myModuleInstance = new myModule();
myModuleInstance.hello(); // hello
myModuleInstance.goodbye(); // 'goodbye'

// Benefits of CommonJS approach: 
// 1. Avoid global namespace pollution
//2.  Make our dependencies explicit
// 3. The syntax is very compact

// CommonJS is all well and good, but what if we want to load modules asynchronously? The answer is called Asynchronous Module Definition, or AMD for short.

// AMD
// Loading Modules using AMD looks something like this:

define(["myModule", "myOtherModule"], function(myModule, myOtherModule) {
   console.log(myModule.hello());
});

// explain the above code
/*
   What is happening here is that the 'define' function takes as its first argument an array of each module's dependencies. These dependencies, are loaded in the background, and once loaded 'define' calls the callback function it was given.
   Next, the callback function takes, as arguments, the dependencies that were loaded. In our case 'myModule' and 'myOtherModule', allowing the function to use these dependencies. 
   Finally the dependencies themselves must also be defined using the 'define' keyword.

*/
 // for example 'myModule' might look like this:
 define([], function(){
   return {
      hello: function(){
         console.log('hello');
      },
      goodbye: function(){
         console.log('goodbye');
      }
   }
 });

 /*
   So, AMD takes a browser first approach, unlike CommonJS, alongside async behavior to get the job done.
   Aside from asynchronicity, another benefit of AMD is that your modules can be, objects, constructors, functions, strings, JSON, and many other types, While, CommonJS ONLY supports, objects as modules.

   That being said, AMD isn't compatible with filesystem, io, and other server oriented features, that are available via CommonJS, and syntax is a bit more verbose.

 */

 