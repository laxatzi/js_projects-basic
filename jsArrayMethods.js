const items = [
   {name: 'Bike', price: 100},
   {name: 'TV', price: 170},
   {name: 'Album', price: 10},
   {name: 'Book', price: 5},
   {name: 'SmartPhone', price: 700},
   {name: 'Laptop', price: 1000}
]

const threeDigitItems = items.filter((item)=>{
   return item.price >=100 && item.price <1000;
})

console.log(threeDigitItems.length);// 3


