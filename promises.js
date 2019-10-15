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

// Catching promises


