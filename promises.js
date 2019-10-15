// Example of a Promise constructor

const myPromise = new Promise(
   (resolve, reject)=>{
      if(Math.random() * 100 <= 90){
         resolve('Hello, promises!');
      }
      reject(new Error('Sorry, we failed. Miserably'));
   }
);


