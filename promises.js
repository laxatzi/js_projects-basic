// Example of a Promise constructor

const myPromise = new Promise(
   (resolve, reject)=>{
      if(Math.random() * 100 <= 90){
         resolve('Hello, promises!');
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
     If a promise has been executed and you later add a callback 
*/