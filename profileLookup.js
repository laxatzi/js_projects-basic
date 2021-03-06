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

]; //end of contacts array


function lookUpProfile(name, prop){
  // Only change code below this line
   for (var j = 0; j < contacts.length; j++){   // looping through the objects
   if (contacts[j].firstName === name) {  // here firstName property plays the role of a 'key' thus, if param 'name' equals firstName the object exists
       if (contacts[j].hasOwnProperty(prop)) { // So if name is true (object exist)...we examine the second param (prop) with the use of the hasOwnProperty method
           return contacts[j][prop];
       } else {
           return "No such property";
       }
   }
}// end of loop

return "No such contact";  //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned. We want to stop the loop if firstName doesn't match name param thus the return is out of the loop

}//end of function



