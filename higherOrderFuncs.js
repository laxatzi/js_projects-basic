/*
JavaScript Array map() Method
The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values
*/

/*
    .reduce()
Just like .map(), .reduce() also runs a callback for each element of an array. What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce()
SYNTAX: array.reduce(function(total, currentValue), initialValue)
*/

/*
The filter() method 
creates a new array with all elements that pass the test implemented by the provided function
Syntax: array.filter(function(currentValue, index, arr), thisValue) *index, arr and thisValue are optional

*/

// Combining .map(), .reduce(), and .filter()

//get the total score of force users only
var players = [
   {
     shirt_number: 20,
     name: "Adelino Vierinia",
     score: 7,
     minutes: 19000,
     team: "PAOK",
   },
   {
     shirt_number: 3,
     name: "Leo Matos",
     score: 6,
     minutes: 24000,
     team: false,
   },
   {
     shirt_number: 10,
     name: "Daniel Podense",
     score: 16,
     minutes: 25000,
     team: "Olympiakos"
   },
   {
     shirt_number: 20,
     name: "Petros Mandalos",
     score: 12,
     minutes: 22000,
     team:"AEK"
   },
   {
     shirt_number: 47,
     name: "Chuba Akpom",
     score: 9,
     minutes: 14500,
    team: "PAOK",
   },
 ];
// use the ES5 syntax// 
/*  var paokScorersGoals = players.filter(function(player){
    return player.team==="PAOK";
 }).map(function(player){
   return player.score; } 
 ).reduce(function(accum, player){
     return accum + player;
 }, 0);    */

// using ES6 syntax
const paokScorersGoals = players.filter((player)=> player.team === "PAOK").map(
   (player)=> player.score).reduce((accum, player)=> accum + player, 0);
