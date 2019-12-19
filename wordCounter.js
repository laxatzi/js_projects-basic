var sentence = "The second, in importance, palace of Constantinople was the palace of Voukoleon port";
var words = sentence.split(' ');
var wordSum = words.reduce(function(prev, word){
   return prev + word.length;
},0);


var avgWordLength = wordSum / words.length;
console.log(parseInt(avgWordLength));