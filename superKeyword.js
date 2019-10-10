// #Two  more examples on extends and super()

class Meetup {
   constructor(organizer){
      this.organizer = organizer;
   }
}

class techMeet extends Meetup {
   constructor(organizer){
      super(organizer);
   }
}

let getOrganized = new techMeet("Let's get organized");
console.log(getOrganized.organizer);

/*
  Explanation:

- We can pass the argument from child 
  constructor to parent constructor 
  through super() method like above code 
  snippet.

- We can override the parent class properties 
  inside constructor of child class.

 */

 // one more example

