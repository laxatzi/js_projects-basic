//PROMISES
/*
   A promise in javascript is exactly what it sounds like- you use it to make a promise to do something
   usually asynchronously.
   When the tasks completes, you either fulfill your promise or fail to do so.
   Promise is a constructor function, so you need to use the 'new' keyword to create one. It takes a function, as its argument, with two params- 'resolve' and 'reject'. This are methods used to determine the outcome of the promise.
*/
// Example of a Promise constructor

const myPromise = new Promise(
   (resolve, reject)=>{
      if(Math.random() * 100 <= 90){
         resolve('Hello, promises!');  // logged statement to check state changes
      }
      reject(new Error('Sorry, we failed. Miserably'));
   }
);
// #Constructor accepts a function with two parameters...this function is called an 'executor' and describes 
// the computation to be done. 

// #resolve: marks successful completion of the executor 
// resolve is a function itself ... when the computation is successful we send the value back

// #reject: marks unsuccessful completion of the executor
// reject is a function itself too ... when the computation is UNsuccessful ... thus fails or encounters an error, we signal that by passing the error object to the reject function

// #Using Promises 
/* 
We stored the created promise, in the above example, in a const variable named 'myPromise'
HOW CAN WE ACCESS THE VALUE PASSED BY resolve and reject FUNCTIONS?
*/

// Then method

// two functions
const whenResolved = (resolvedValue)=> console.log(resolvedValue);
const whenRejected = (error)=> console.log(error);
// the above two functions will be passed as callbacks to the then() method in the bellow line

myPromise.then(whenResolved, whenRejected); 

// first callback will be invoked when the promise is resolved
// second callback will be invoked when the promise is rejected

// NOTE:
/*
    Once a promise reaches a final state, the state wont change, that is the computation wont be done again even if you attach .then handler multiple times thus...
   A promise can resolved or rejected once. It cannot resolved again if succeeded or rejected (changing state from success to failure) and vice versa.
   To verify this you can see the console.log statement on line 6
   When running the code with BOTH .then handlers the code will be logged only ONCE
   The promise 'caches' the result so next time will give the same cached result
   ALSO:
   notice that promises fire immediately . They start execution as soon as we declare them and bind them in variables. 
   To ensure that promises doesn't fire immediately we wrap them in a function
*/

// Handle a fulfilled Promise with then.

/*
    Promises are most useful when you have a process that takes an unknown amount of time in
    your code (i.e something asynchronous), often a server request.
    When you make a server request it takes some amount of time, and after it completes you usually 
    want to do something with the response from the server.
    This can be achieved by using the 'then' method. The 'then' method is executed immediately after 
    your promise is fulfilled with 'resolve'.
*/
// example
myPromise.then(result => {
   // do something
})

// 'result' comes from the argument given to the 'resolve' method.

// exercise
// Add the 'then' method to your promise. Use result as the parameter of its callback function and log 
// 'result' to the consol.

const makeServerRequest = new Promise((resolve, reject) =>{
   // responseFromServer is set to true, representing a successful response from the server
   let responseFromServer = true;

   if(responseFromServer){
      resolve("We got the data!");
   }else{
      reject("Where is the data?");
   }
});

// add the 'then' method here
makeServerRequest.then(result => {
   console.log(result); 
});