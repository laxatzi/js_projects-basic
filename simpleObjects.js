// simple js exercises regarding objects


/*
Make an object that represents a dog called myDog, which contains the properties "name"(a string), "legs", "tails"and "friends".
You can set these object properties to whatever values you want, as long "name"is a string, "legs"and "tails"are numbers, and "friends"is an array.

*/

var myDog = {
   "name" : "Rocky",
   "legs": 4,
   "tails": 1,
   "friends": [
      "Diego",
      "Lamby",
      "Arkas",
      "Me"
   ]
}

// Using objects for lookups

/*Convert the switch statement into an object called lookup. Use it to look up valand assign the associated string to the resultvariable.
*/

// setup
function phoneticLookup(val) {
   var result= "";

   // Switch statement

   //  switch(val){
   //     case "alpha":
   //     result= "Adams";
   //     break;
   //     case "bravo":
   //        result = "Boston";
   //        break;
   //    case "charlie" :
   //    result= "Chicago";
   //    break;
   //    case "delta":
   //       result = "Denver"
   //       break;
   //    case "echo":
   //       result = "Easy";
   //       break;
   //    case "foxtrot":
   //       result = "Frank";
   //  }

      var lookup = {
         "alpha":"Adams",
         "bravo": "Boston",
         "charlie": "Chicago",
         "delta": "Denver",
         "echo": "Easy",
         "foxtrot": "Frank"
      }
      result = lookup[val];
   return result;
}


// Testing Objects for Properties

// Modify the function checkObj to test myObj for checkProp. If the property is found, return that property's value. If not, return "Not Found"

var myObj ={

   gift: "pony",
   pet: "puppy"
}

function checkObj(checkProp) {
   // your code here
   if(myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
   }
   else {
      return "Not Found";
   }
   
}

// JavaScript Object Notation or JSONis a related data interchange format used to store data.

/* Add a new album to the myMusic array. Add artist and title strings,
 release_year ,number, and a formats array of strings.
 */
var myMusic = [
   {
     "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
         "CD",
         "LP",
         "8T"

               ],
"gold": true
   },
   {
      "artist": "Themis Adamantidis",
      "title": "Ta voriadakia",
      "release_year": 1982,
      "formats": [
         "CD",
         "LP"
      ],
      "gold": true
   }

]