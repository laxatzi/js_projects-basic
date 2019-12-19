var sales = [100, 128, 170];
var totalSales= sales.reduce(function(prev, next){
   return prev + next;
}, 0);

var totalTaxedSales = sales.map(function(sale){
   return sale * 1.15;
}).reduce(function(prev,next){
    return prev + next;
}, 0);
console.log(toPrecision(totalSales)); // 398
console.log(toPrecision(totalTaxedSales));   // 457.69
