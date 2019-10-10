// The instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

'esversion: 6';
class Car {
  constructor(make, model, year){
  this.make = make,
  this.model = model,
  this.year = year 
 }
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);    // expected output: true

console.log(auto instanceof Object);    // expected output: true because ....see console.log below...since Car is instanceof Object so would be auto.

console.log(Car.prototype instanceof Object);