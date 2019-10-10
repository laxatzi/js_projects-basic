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

class Meetup2 {
      organise(){
         console.log('Organizing Meetup 2');
      }
   static getMeetupFounderDetails(){
         console.log("Meeup2 founder details");
   }
}

class techMeet2 extends Meetup2 {
   organise() {
      // super.organise()
      console.log('Organising techMeet4');
      super.organise();
   }
   static getMeetUpFounderDetails(){
      console.log('techMeet2 Founder details');
      super.getMeetupFounderDetails();
   }
}

let getOrganized2 = new techMeet2();
console.log(getOrganized2.organise);
console.log(techMeet2.getMeetupFounderDetails());

