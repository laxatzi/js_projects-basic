// Immediately Invoded Function Expressions (IIFE)(pronounced "iffy"), are functions that are invoked as soon as are defined.
// this is easily achieved by following the below syntax
(function(){
   var temp = "world";
   console.log("Hello "+ temp);
}());

// the last pair of parenthesis invoke the function. The function has to be made into an expression. We achieve this by putting the whole declaration inside a parenthesis.
// IIFEs are a good way of performing a task while keeping any variables wrapped up within the scope of the function. So global namespace is not polluted with lots of variable names

// Elaborate on function Expressions and function Declarations 

// Function Declaration. 
/* 
   A declared function is one that is meant to be executed later, after  it's been invoked.
  Function Declarations must  start with the 'function' statement. 
       e.g
       function numTwo(){
          return 2;  
       }

       Above function is only declared here. For it to be used it must be firstly invoked 
       numTwo(); // 2
*/

// Function Expression  
 /* 
       Function expressions are functions that are stored in a variable. This variable now acts like a function. Functions stored in variables are anonymous. The don't need a name since we invoke them by using variable name.
 */

 // Example of a Function Expression
   // function expressions are not hoisted 
     // console.log(funExpr()); // TypeError: funExpr is not a function
     //   var funExpr = function() { return 5; }

// Example of a Function Declaration
  // function declarations are hoisted
  console.log(funDecl()); // 5
  function funDecl() { return 5; }

// Conclusion
   /* 
       Function Expressions are meant to be used as IIFEs, closures and function arguments
   */

   // variables that are placed inside an IIFE are available while the IIFE is invoked, and no more, thus temporarily. 
   // example:

   var a = 1;
   var b = 2; 
   (function(){
      var varInExpr = a;
      a = b;
      b = varInExpr;

   }()); // end of IIFE

   console.log(a); // 2
   console.log(b); // 1
   // console.log(varInExpr); // ReferenceError: varInExpr is not defined

// examples of IIFE uses

  // Code initialization
     // With IIFE we initialize code that will only run once. So there is no need to create reusable code blocks. 
     // Bellow function logs a welcome message to the console. Then it eliminates the temp variables
     (function() { 
        var name = "Maria"; // supposedly name is obtained from a cookie
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var date = new Date(); 
        var today = days[date.getDay()];
       console.log("Welcome back "+name+". Today is "+ today);
     }()); // end of IIFE
   
  // Safe Use of Strict Mode
     //Placing "strict use"; at the beginning of a file will enforce strict mode on all code in the file, and if you are using other peoples code there is no guarantee that they have coded in strict mode. To avoid this use strict mode in an IIFE

      (function(){
         "use strict";
         // code here

      }());// end of IIFE
  // Self-contained Modules
      /* 
         Use IIFE to create self-contained modules of code -- private scope 
      */
       // module A
      (function(){
        
            var name = "Anthony";
            console.log("Hello from "+name);
      }()); // end of IIFE
      // Module B
      (function(){
         var name = "Brian";
         console.log("Hello from "+name);
      }()); // end of IIFE

      // >> Hello from Anthony
      // >> Hello from Brian
      