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