
// #ECMAScript 6: Inheritance

//  But what about inheritance? What about 
//  accessing the super class?

class Hello {
   constructor(greet){
      this.greet = greet;
   }
   greet(){
      return this.greet;
   }
}



class World extends Hello {
   constructor(){
      super("Hello");
   }

   greetWorld(){
      return super.greet()+ ", World!";
   }
}

const greeter = new World("Hello");  // here the constructor should be the subclass world, provided that we want the greetWorld function to be instansinated (see below)

console.log(greeter.greet); // output: "Hello"
console.log(greeter.greetWorld()); // output: "Hello, World!"