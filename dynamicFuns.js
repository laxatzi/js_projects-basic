function party(){
   console.log("Wow, this is amazing!");
   party = function(){

         console.log("Been there, got that T-shirt");
      }
   }
party(); // Wow, this is amazing!
party(); // Been there, got that T-shirt
party(); // Been there, got that T-shirt

// Every time the function is called AFTER the first time, it will log the message "Been there, got the T-shirt"

// function assigned to another variable
// in this case the variable will MAINTAIN the original function definition and NOT be rewritten. 
// This is because the rewriting depends on the NAME of the function

function aParty(){
   console.log("This is great!");
   aParty = function(){
      console.log("Not only great, but amazing too!");
   }
}
 var beachParty = aParty; // aParty function is not invoked here

 beachParty(); // The aParty function is Now redefined even though it hasn't been called explicitly
              // This is great!
 aParty(); // Not only great, but amazing too!

 beachParty(); // This is great!  -- this function has not been redefined 
 beachParty(); // no matter how many times it is called it remains the same( hasn't been redefined) -- // This is great!

 // **
 // If any properties have been set on the function previously, these will be lost when the function redefines itself. 

 function theParty(){
    console.log("This is really great");
    theParty = function(){
       console.log("Not only great, but super amazing too!");
    }
 }

 theParty.music = "Oud music"; // set a property of the function

 theParty(); // This is really great

 console.log(theParty.music); // undefined  -- function has now been redefined, so the property doesn't exist

 