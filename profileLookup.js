/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties of a contact found to match name then return "No such property"

*/
//Setup
var contacts = [
   {
       "firstName": "Akira",
       "lastName": "Laine",
       "number": "0543236543",
       "likes": ["Pizza", "Coding", "Brownie Points"]
   },
   {
       "firstName": "Harry",
       "lastName": "Potter",
       "number": "0994372684",
       "likes": ["Hogwarts", "Magic", "Hagrid"]
   },
   {
       "firstName": "Sherlock",
       "lastName": "Holmes",
       "number": "0487345643",
       "likes": ["Intriguing Cases", "Violin"]
   },
 {
   "firstName": "Lambros",
   "lastName": "Hatzinikolaou",
   "number": "0487345222",
   "likes": ["History", "Web Development", "Dogs"]
 }

]; //end of contacts


function lookUpProfile(name, prop){
       for(var i=0; i<contacts.length; i++){
         for(var j=0; j<contacts[i].length; j++){
           if(name===contacts[i].firstName && prop === contacts[i][j]){
             return contacts[i][j];
           }
           else if(name=== contacts[i].firstName){
             return "No such property";
           }
           else {
             return "No such contact";
           }
         }
       }
   }


