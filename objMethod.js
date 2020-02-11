// A 'Method' is a function inside an object. A method uses 'this' to refer to the properties of the object

const america = {
   name: "United States of America",
   yearFounded: 1776,

   describe(){
      console.log(`${this.name}, was founded in ${this.yearFounded}`);
   }
}

america.describe();

// In a NESTED Object, 'this', refers to the current obj scope of the method. In the following example, 'this.symbol' within 'details' object refers to 'details.symbol'

const italy = {
   name: "Rupublic of Italy",
   yearFounded: 1861,
   details: {
      flag_colors: "Green, White, and Red",
      currency: "Euro",
      printDetails(){
         console.log(`The flag of Italy has three colors, ${this.flag_colors}, and the currency is ${this.currency}`);
      }
   }
}

italy.details.printDetails();