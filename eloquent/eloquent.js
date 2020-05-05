function printFarmInventory(cows, chickens, pigs) {
   //cows
   let cowString = String(cows);
   while (cowString.length < 3) {
   cowString = "0" + cowString;
   }
   console.log(`${cowString} Cows`);
   // chickens
   let chickenString = String(chickens);
   while (chickenString.length < 3) {
   chickenString = "0" + chickenString;
   }
   console.log(`${chickenString} Chickens`);
   // pigs
   let pigString = String(pigs);
   while(pigString.length < 3){
      pigString = "0" + pigString;
   }
   console.log(`${pigString} Pigs`);
   }
   printFarmInventory(7, 11, 17);

   function printZeroPaddedWithLabel(number, label) {
      let numberString = String(number);
      while (numberString.length < 3) {
      numberString = "0" + numberString;
      }
      console.log(`${numberString} ${label}`);
      }

  function printFarmInventory(cows, chickens, pigs) {
      printZeroPaddedWithLabel(cows, "Cows");
      printZeroPaddedWithLabel(chickens, "Chickens");
      printZeroPaddedWithLabel(pigs, "Pigs");
      }

      printFarmInventory(7, 11, 3);
      

      // But that name, printZeroPaddedWithLabel, is a little awkward.
      // It conflates three things—printing, zero-padding, and adding a label—into a
      // single function.
      // Instead of lifting out the repeated part of our program wholesale, let’s try
      // to pick out a single concept
      

      
   function zeroPad(number, width) {
      let string = String(number);
      while (string.length < width) {
      string = "0" + string;
      }
      return string;      
  }

  function printFarmInventory(cows, chickens, pigs) {
      console.log(`${zeroPad(cows, 3)} Cows`);
      console.log(`${zeroPad(chickens, 3)}  Chickens`);
      console.log(`${zeroPad(pigs, 3)} Pigs`);
      }

      printFarmInventory(7, 11, 3);