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

// return can be also be used in generators...but, contrary to yield, return will escape code

function * generator() {
   yield 1;
   return 2;
   yield 3; // this yield will never be reached
}
const gen = generator();

console.log(gen.next()); // [object Object] {value:1, done: false}
console.log(gen.next()); // [object Object] {value:2, done:true}
console.log(gen.next()); // [object Object] {value:undefined, done: true}

// yield delegator
// yield with asterisk ...can delegate it's work to another generator. This way you can chain as many generator as  you want

function * anotherDelegator(i){
   yield i + 1;
   yield i + 2;
   yield i + 3;
}

function * generator(i){
   yield * anotherDelegator(i);
}

var gen = generator(2);

console.log(gen.next().value); // 3
console.log(gen.next().value); // 4
console.log(gen.next().value); //5
