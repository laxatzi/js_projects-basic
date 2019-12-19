// function to calculate the mean of any number of arguments

function mean(values, callback){
   var total = 0;
   for(var i = 0; i<values.length; i++){
      if(typeof callback === "function"){ //check if callback argument is a function
         total += callback(values[i]);
      }else{    // if callback not a function, argument is ignored and total calculate using just the values from the array, given in the first argument
         total += values[i];
      }
   }
   return total/values.length;
}
function square(n){
   return Math.sqrt(n);
}
var myNums = [4,9,16,25];
var anotherNum = [5];

console.log(mean(myNums, square)); // 3.5
console.log(mean(myNums, anotherNum)); // 13.5 (anotherNum array is ignored altogether)