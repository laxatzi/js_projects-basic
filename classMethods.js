//Class Methods in ES6

//ES6 introduced a shorthand that does not require the keyword function for a function assigned to a method's name. One type of class method is the prototype method, which is available to objects of the class.
//For Example:

class Rectangle{
   constructor(height, width){
   this.height = height;
   this.width = width;
   }

   get area(){
      return this.calcArea();
   }

   calcArea(){
      return this.height * this.width;
   }
}

const square = new Rectangle(10,24);
console.log(square.area); // 240 

// in the above code 'area' is a GETTER and 'calcArea' is a METHOD