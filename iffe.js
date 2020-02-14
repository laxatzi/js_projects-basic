// Immediately Invoded Function Expressions (IIFE)(pronounced "iffy"), are functions that are invoked as soon as are defined.
// this is easily achieved by following the below syntax
(function(){
   var temp = "world";
   console.log("Hello "+ temp);
}());

// the last pair of parenthesis invoke the function. The function has to be made into an expression. We achieve this by putting the whole declaration inside a parenthesis.
// IIFEs are a good way of performing a task while keeping any variables wrapped up within the scope of the function. So global namespace is not polluted with lots of variable names


