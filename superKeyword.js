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