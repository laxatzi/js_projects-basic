// Sort method is fine for strings but not so for numbers
    // e.g
    let numbers = [4,6,12,18,29, 34];
    console.log(numbers);
    console.log(numbers.sort());  //(6) [12, 18, 29, 34, 4, 6]
   // the reason that the sort() method doesn't work well with number arrs is that it's way of sorting out array numbers is to convert them first to strings.
   // To sort things out we can use a callback function
   function sortNumbs(a,b){
      return a-b;
   }
   var sortedNumbers = numbers.sort(sortNumbs);
   var evenNumbers = sortedNumbers.filter(function(n){
      return n % 2 === 0; // return even numbers
   });
   // so now we can insert the sortNumbs() function as a callback
   console.log(sortedNumbers);
   console.log(evenNumbers);