var sales = [100, 128, 170];
var totalSales= sales.reduce(function(prev, next){
   return prev + next;
}, 0);

var totalTaxedSales = sales.map(function(sale){
   return sale * 1.15;
}).reduce(function(prev,next){
    return prev + next;
}, 0);
console.log(totalSales.toFixed(2)); // 398
console.log(totalTaxedSales.toFixed(2));   // 457.69
