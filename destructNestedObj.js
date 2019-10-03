// We can similarly destructure nested objects into variables.

// Consider the following code:

const anObj = {
   start: { x: 5, y: 6},
   end: { x: 6, y: -9 }
 };
 const { start : { x: startX, y: startY }} = anObj;
 const {end:{x:endX, y:endY}} = anObj;
 console.log(endX, endY);
 console.log(startX, startY); // 5, 6

//  Set up the exercise
// Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
   today: { min: 72, max: 83 },
   tomorrow: { min: 73.3, max: 84.6 }
 };
 
 function getMaxOfTmrw(forecast) {
   "use strict";
   // change code below this line
   const{tomorrow: {max: maxOfTomorrow}}=forecast; // we assign to the parameter instead of the Const object so that our function is reusable as it should be...code works with AVG_TEMPERATURES instead
   // change code above this line
   return maxOfTomorrow;
 }
 
 console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

