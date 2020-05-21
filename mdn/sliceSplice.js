// slice and splice methods exercises - Solutions in MDN respective pages
  // Slice
    // Return value is: A NEW array containing the extracted elements, selected from 'begin' to 'end'(end NOT included), where 'begin' and 'end' represent the index of elements in the array. The original array will NOT be modified.

    // #1-- Return a portion of an existing array
    {
      let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
      let citrus;
       // slice fruits so the new array citrus contains only 'orange' and 'lemon'

    }// block


   // #2 -- Using slice in object references
    {
      // Using slice, create newCar from myCar.
            let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
            let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
            let newCar = myCar.slice(0, 2)

      // Display the values of myCar, newCar, and the color of myHonda referenced from both arrays.

      // Change the color of myHonda
      
      // Display the color of myHonda referenced from both arrays. (myCar color and newCar color)
   }//block


   // #3 -- Using slice in array-like object
   {
      // elaborate on ...
   }// block

   // Splice
      // Returns an array containing the deleted elements. 
      // If only one element is removed, an array of one element is returned.
      // If no elements are removed, an empty array is returned
      // The splice method changes(mutates) the content of an array 
      // by removing/replacing existing elements and/or adding new elements in place
  {
     //code here
  }//block
