//get the total score of paok team players only by using just the reduce method
var players = [
   {
     shirt_number: 20,
     name: "Adelino Vierinia",
     score: 7,
     minutes: 19000,
     team: "PAOK"
   },
   {
     shirt_number: 3,
     name: "Leo Matos",
     score: 6,
     minutes: 24000,
     team: "PAOK"
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
    team: "PAOK"
   },
 ];
const totalScore = players.reduce((acc, player) => player.team==="PAOK" ? acc + player.score  : acc, 0);

console.log(totalScore);//22
