const items = [
   {name: 'Bike', price: 100},
   {name: 'TV', price: 170},
   {name: 'Album', price: 10},
   {name: 'Book', price: 5},
   {name: 'SmartPhone', price: 700},
   {name: 'Laptop', price: 1000}
]

// filter method 
//filters out all the items we don't want in the new array... items in the old array stay immutable

const threeDigitItems = items.filter((item)=>{
   return item.price >=100 && item.price <1000;
})

console.log(threeDigitItems.length);// 3

// Map Method
//This method allows you to take one array and convert it to a new array so all the items in the array looks different 

// let's say we want to get the name of every item in a new array
const nameOfItems = items.map((item)=>{
   return item.name;
})
console.log(nameOfItems);// ["Bike", "TV", "Album","Book", "SmartPhone", "Laptop"]

// Find method
// This method allows you to find a single object in an array

const foundItem = items.find((item)=>{
    return item.name === 'Book';
});

console.log(foundItem);


// forEach method
// unlike the previous methods forEach doesn't actually returns anything

items.forEach((item)=>{
    console.log(item.name);
});
// it works very similarly to the for loop but it takes a function as a param instead


// Some method
// This method differs from the previous ones in that it returns a boolean instead of a brand new array

// In our example let's check if some of the items in the items array has a price less than 100

const hasInexpensiveItems = items.some((item)=>{  // bare in mind name convention here (it starts with has since it is a boolean)
      return item.price <= 100;
});

console.log(hasInexpensiveItems);


// Every method
// This method is very similar to the 'some' method with the difference that instead of checking for a single item it makes sure that 'every single' agrees with the condition (it returns a boolean)

const hasOnlyInexpensiveItems = items.every((item)=>{  
   return item.price <= 100;
});

console.log(hasOnlyInexpensiveItems); //false


// Reduce method
// this method has a diff syntax. It essentially replace the need for concatenating iterable in a for loop
// Let's say we want the total sum of all the item prices in the array

const  totalPrice= items.reduce((currentTotal, item)=>{  
   return item.price + currentTotal;
}, 0);

console.log(totalPrice);// 1840

//Includes method 
// This method differs in that it doesn't take a function but instead a single argument

// Let's have an array of numbers
const myNumbs = [1,2, 4, 6, 9];
const includesTwo = myNumbs.includes(2); // it merely going to check if the argument passed is inside the array
const includesSeven = myNumbs.includes(7);
console.log(includesTwo) // true
console.log(includesSeven)// false

