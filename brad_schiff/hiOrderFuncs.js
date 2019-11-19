// A higher order function 
// A) accepts a function as an argument
    // example
    document.addEventListener("click", myFunction);

    function myFunction(){
       // do something
    }

// B) Returns a function
      function multiplierGen(multiplier){
         return function(num){
         return num * multiplier;
         }
      }
 //multiplierGen is a higher order function since it return an anonymous function
 // in js we can set a variable to equal a function 

      let doubleMe = multiplierGen(2);
      let tripleMe = multiplierGen(3);
      let tenTimesMe = multiplierGen(10);
      
      console.log(doubleMe(5)); // 10
      console.log(tripleMe(5)); // 15
      console.log(tenTimesMe(5));// 50

// higher order function : map()
    // example

   let pets = [
      { 
         name: "Rocky",
         age: 2,
         species: "Dog"
       },
       {
         name : "Milly",
         age: 5,
         species: "Dog"
       },
       {
          name: "Zizzel",
          age: 3,
          species: "Cat"
       },
       {
          name: "Lukas",
          age: 5,
          species: "Cat"
       }
   ]

  let myPets =  pets.map(nameOnly);

   function nameOnly(pet){
      return pet.name;
   }
console.log(myPets); // ['Rocky','Milly','Zizzel','Lukas'];
   
