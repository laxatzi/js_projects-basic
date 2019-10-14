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


