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

