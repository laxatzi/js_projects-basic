// forEach()
// the forEach() method is an alternative to the more verbose one bellow

var colors = ['red', 'green', 'blue'];
var newColors = ['orange', 'cyan', 'porfyra'];
for(var j=0; j<colors.length; j++){
   console.log("Color at position "+ j +" is color "+colors[j])
}

newColors.forEach(function(color, index){
   console.log("Color at position "+ index +" is color "+color);
})
//map() method
//the map() method iterates over an array and takes a callback function as a parameter that is invoked on each item in the array.

var numbers = [4, 9, 16];
function square(n){
   return Math.sqrt(n);
}

console.log(numbers.map(square));
// reduce() method
// the reduce() method iterates like the map method but this time it cumulatively combines each result to return a single value. 
console.log(numbers.reduce(function(prev, next){
   return prev + next;
})
); // 29



