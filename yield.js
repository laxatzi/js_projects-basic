function withYield(a){
   let b = 5;
   yield a + b;
   b=6; // now b is reassigned after the first execution
   yield a * b;
}

const calculateSix = withYield(6);
console.log(calculateSix.next().value); // 6
console.log(calculateSix.next().value); // 36
