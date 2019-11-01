// generators are reusable but you need to initialize them first 

// create generator
function * generator1(arg="Nothing"){
   yield arg;
}

// initialize generator
const gen1 = generator1(); 
console.log(gen1.next().value);//Nothing
const gen2 = generator1('Everything');
console.log(gen2.next().value); // Everything... will be yield when reload

// const gen3 = new generator();  OUTPUT: TypeError: generator is not a constructor

// Methods in generators

// method next()
function * generator() {
   yield 1;
   yield 2;
   yield 3;
}

const gen = generator();

console.log(gen.next().value); // {value: 1, done: false}
console.log(gen.next().value); // {value: 2, done: false}
console.log(gen.next().value); // {value: 3, done: false}
console.log(gen.next().value); // {value: undefined, done: true}

// this method gives us the next output object every time we call it. And when it is done, next() set the done property to true and value to undefined

// not only next() we can use to iterate generator. But using for-of loop we get all the values(not the object) of our generator




