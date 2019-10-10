
// #ECMAScript 6: Inheritance

//  But what about inheritance? What about 
//  accessing the super class?

class Hello {
   constructor(greet){
      this.greet = greet;
   }
   greeting(){
      return this.greet;
   }
}

greeter = new Hello("Hello");
console.log(greeter.greet); // output: "Hello"

