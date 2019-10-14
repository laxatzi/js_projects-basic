// JAVASCRIPT NAMING CONVENTIONS

// Boolean naming conventions
/*
    A prefix like 'is', 'are, or 'has' helps every javascript developer 
    to distinguish a boolean from another date type by just looking at it
*/

// examples :
var visible = true; // bad
var isVisible = true; // good

var equal = true; // bad
var areEqual = true;  // good

var encryption = true; // bad 
var hasEncryption = true; // good


// Class naming conventions
/* 
    A JavaScript class is declared with a PascalCase in contrast to other JavaScript data structures:

*/
class SoftwareDeveloper {
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
}
var me = new SoftwareDeveloper('Robin', 'Wieruch');


// Component naming conventions
/*
   Components are not everywhere in JavaScript, but commonly found in front-end frameworks like React. 
   Since a component is instantiated like a JS class, they are widely declared with Pascal Case 
*/
// bad
function userProfile(user) {
   return (
     <div>
       <span>First Name: {user.firstName}</span>
       <span>Last Name: {user.lastName}</span>
     </div>
   );
 }

 // good
function UserProfile(user) {
   return (
     <div>
       <span>First Name: {user.firstName}</span>
       <span>Last Name: {user.lastName}</span>
     </div>
   );
 }

// When a component gets used, it distinguishes itself from native HTML and web components, because its first letter is always written in uppercase.

<div>
  <UserProfile
    user={{ firstName: 'Robin', lastName: 'Wieruch' }}
  />
</div>
