// Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.
const AVG_TEMPERATURES = {
   today: 77.5,
   tomorrow: 79
 };
 // creating a second object to stress the parameter importance (see bellow)
 const AVG_TEMPS = {
   today: 60,
   tomorrow: 70
 }
 
 function getTempOfTmrw(avgTemperatures) {
   "use strict";
   // change code below this line
   const {tomorrow:tempOfTomorrow} =avgTemperatures; // we assign to the parameter instead of the Const object so that our function is reusable as it should be...code works with AVG_TEMPERATURES instead
   // change code above this line
   return tempOfTomorrow;
 }
 
 console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
 console.log(getTempOfTmrw(AVG_TEMPS)); // should be 70