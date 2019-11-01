function withYield(a){
   let b = 5;
   yield a + b;
   b=6; // now b is reassigned after the first execution
   yield a * b;
}

const calculateSix = withYield(6);
console.log(calculateSix.next().value); // 6
console.log(calculateSix.next().value); // 36

// Yield returns a function only once end the next time you call the same function it moves on to the next yield statement
// in generators we always get the object as output. It always has two properties, value and done.
// value for the returned value and done to show us if the generator has completed its job.

function * generator(){
   yield 7;
}

const gen = generator();

console.log(gen.next().value); // 7
console.log(gen.next().value)//undefined
console.log(gen.next()); // [object Object]{done: true, value: undefined}
