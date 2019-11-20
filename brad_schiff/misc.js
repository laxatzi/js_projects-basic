let myNums = [20, 100, 34, 68];
// convert the function in the following statement into an arrow function
/*
let doubledNums = myNums.map(function(n){
   return n *2;
});
*/
let doubledNums = myNums.map((n)=> n * 2 );
console.log(doubledNums); // [40, 200, 68, 136]

// Template Literals
let myname = 'Lambros';
console.log("Hello my name is "+myname+" and i'm a student of javascript!"); 
// the above statement can be easily written with template literals
console.log(`Hello my name is ${myname}, and i'm a student of javascript`);

