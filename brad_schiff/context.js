let myName = "Lambros";

function callMyName(){

  if(true){
   let myName = "Brad";

  }
}

callMyName(); //Lambros
console.log(myName); 

// Context in javascript

let drivingL = {
   firstName: "John",
   lastName: "Katzini",
   driveCar() {
      function iamFunctionNotMethod(){
         console.log(this); // points to Window object 
       }
      iamFunctionNotMethod();  // EXECUTION ... Window object
     console.log(this.firstName +" "+this.lastName+" is driving a car!");
   }
 };
 
 drivingL.driveCar(); // EXECUTION ... "John Katzini is driving a car!"
 //Conclusion 
 // the 'this' keyword points to the object that is EXECUTING THE CURRENT FUNCTION

 function breathe(){
    console.log(this.firstName +" "+this.lastName+" just inhale and exhale!");
 }

 breathe.call(drivingL); // the call method is giving us a chance to control the this environment before executing a function..in the example this keyword points towards drivingL     