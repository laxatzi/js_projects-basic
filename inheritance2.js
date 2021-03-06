//Example of Inheritance with constructor
class Meetup {
   constructor(){
      console.log('inside Meetup constructor');
   }


}

class techMeet extends Meetup {
   constructor(){
      super();
      console.log('inside Meetup constructor');
   }
}

let js2 = new techMeet();
/*
 Explanation:

- Inside constructor function of child class 
 techMeet, we have to call super() method to 
 call the parent constructor first otherwise 
 JavaScript will throw error.

- super() method is nothing but constructor 
 function of Parent class.

- super() call is must in constructor of 
 derived class whether explicit presence
 of parent constructor exists or not.

*/
