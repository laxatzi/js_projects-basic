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

// METHOD
//Identical to JavaScript functions, a method on a JavaScript class is declared with camelCase:

class SoftwareDeveloper {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   getName() {
     return `${this.firstName} ${this.lastName}`;
   }
 }
 var me = new SoftwareDeveloper('Robin', 'Wieruch');
 console.log(me.getName());
 // "Robin Wieruch"


 //PRIVATE naming conventions

 //Rarely you will find an underscore (_) in front of a variable/function/method in JavaScript. If you see one, it is intended to be private. 
 
 //Even though it cannot be really enforced by JavaScript, declaring something as private tells us about how it should be used or how it should not be used.

 //For instance, a private method in a class should only be used internally by the class, but should be avoided to be used on the instance of the class:

 class SoftwareDeveloper {
   constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.name = _getName(firstName, lastName);
   }
   _getName(firstName, lastName) {
     return `${firstName} ${lastName}`;
   }
 }
 var me = new SoftwareDeveloper('Robin', 'Wieruch');