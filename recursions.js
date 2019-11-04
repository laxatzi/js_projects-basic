// RECURSION is simply when a function calls itself

// recursion example: function returns the factorial of an integer

function factorial(x){
   if(x<0) return; //1. TERMINATION: factorial a neg number is not possible
   if(x === 0) return 1; //2. BASE: factorial can't go beyond 0
   return x * factorial(x-1); // 3. RECURSION returning value of x multiplied by value of whatever                                     factorial(x-1) evaluates to 
}

console.log(factorial(3)); // 6

//The three key features of recursion

    // 1. Termination condition
    // if (something bad happens){STOP};
   
   // 2. Base case: if(this happens){ Yah! We are done! }; 
   // Base cases are usually within an if statement
   // Base case is the minimum goal of our recursive function
   

   //3. The actual recursion
   // Our function calling itself
