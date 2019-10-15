//alert("Line by line comments on the ES6 lesson on Promises. As the lessons contain concepts not previously discussed, I had to do my own research and these comments are what I came up with. Again if anything is wrong, feel free to leave a comment on the code.")

// Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function ~ mozilla.org

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future
// ~ mozilla.org

// Note: Asynchronous means: not simultaniously (all at the same time) so basically the events happen one AFTER the other

function asyncFunc(work) {

   // asyncFunc is the function name
   
   // (work) is the function parameter
   
       return new Promise(function(resolve, reject) {
   
   // A Promise object is created using the new keyword and its constructor. This constructor takes as its argument a function, called the "executor function". This function should take two functions as parameters. The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value. The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object ~ mozilla.org     
   
           if (work === "")
               reject(Error("Nothing Here"));
               
   // An "if statement" stating that if the "work" parameter of the "asyncFunc" function is === (identical to) "" (meaning left blank) then call the "reject" function which then returns an Error object
   
   // When Error is used like a function -- without new, it will return an Error object. Therefore, a mere call to Error will produce the same output that constructing an Error object via the new keyword would ~ mozilla.org
   
   // "Nothing" is added as an Error "message parameter" which can be added as "a human-readable description of the error"
   
   // If you erase the characters Work 1 from the below asyncFunc call, you will see it print in the console: Error: Nothing
             
           setTimeout(function() {
               resolve(work);
           }, 1000);
           
   // setTimeout method used to add a 1 second delay to the "resolve" function
   
   // So if we don't get an error, after a 1 second delay the "resolve" function is called and the promise is fulfilled with a value     
           
       });
   }
   
   /* 
   
   A Promise is in one of these states:
       ~pending: initial state, neither fulfilled nor rejected
       ~fulfilled: meaning that the operation completed successfully.
       ~rejected: meaning that the operation failed.
   
   A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called. 
   (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)
   ~ mozilla.org
   
   
   The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise ~ mozilla.org
   
   
   So the .then() syntax is:
   
   p.then(onFulfilled[, onRejected]);
   
   p.then((value) => { // fulfillment }, (reason) => { // rejection });
   
   */
   
   asyncFunc("Work 1") // Task 1
   
   // call "asyncFunc" with "Work 1" as the argument. 
   // This "Work 1" will be the value/result once resolved/fulfilled
   
   .then(function(result) {
   
   // so first we have our ".then(onFulfilled," part which is a function called if the Promise is fulfilled. This function has one argument: the fulfillment value.
   
       console.log(result);
       
   // console logs the result/fulfillment value which here is "Work 1"
   // remember the 1 second delay    
       
       return asyncFunc("Work 2"); // Task 2
       
   // it also calls the "asyncFunc" a second time and gives "Work 2" as the argument this time  
       
   }, function(error) {
   
   // this is the ", onRejected)" part which is a function called if the Promise is rejected. This function has one argument: the rejection reason
   // again erase the characters Work 1 to see 
   
       console.log(error);
   
   // console logs the rejection reason which would be: Error: Nothing   
       
   })
   .then(function(result) {
   
   // This appears to be the ".then(onFulfilled," part for the second calling of the "asyncFunc" function
   
       console.log(result);
       
   // logged result will be "Work 2" after the 1 second delay of the first call    
       
   }, function(error) {
   
   // the ", onRejected)" part for the second calling of the "asyncFunc" function
   
       console.log(error);
       
   // logged error would be the same: Error: Nothing
   // again erase the characters Work 2 to see   
       
   });
   
   console.log("End");
   
   // will immediately console log "End" on running
   
   // still a confusing mess
   
   // oh well
