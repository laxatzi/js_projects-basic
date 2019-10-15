// Example of a Promise constructor

const myPromise = new Promise(
   (resolve, reject)=>{
      if(Math.random() * 100 <= 90){
         resolve('Hello, promises!');
      }
      reject(new Error('Sorry, we failed. Miserably'));
   }
);
// Constructor accepts a function with two parameters...this function is called an 'executor' and describes 
// the computation to be done. 

// resolve: marks successful completion of the executor 
// resolve is a function itself ... when the computation is successful we send the value back

// reject: marks unsuccessful completion of the executor
// reject is a function itself too ... when the computation is UNsuccessful ... thus fails or encounters an error, we signal that by passing the error object to the reject function


