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

function * generator2(arr){
   for (const element in arr){
      yield element;
   }
}

const gen3 = generator2([0,1,2]);

for(const g of gen3) {
   console.log(g); // 0 -> 1 -> 2 ->
}

console.log(gen3.next()); // {value: undefined, done:true}


// method return
function * generator4(){
   yield 1;
   yield 2;
   yield 3;
}
const gen4 = generator4();

console.log(gen.return()); // {value: undefined, done: true}
console.log(gen.return("howdy")); // {value: "howdy", done: true}
console.log(gen.next()); // {value: undefined, done: true} - all next() calls after return() will return the same output

//Return() will ignore any code in the generator function that you have. But will set the value based on a passed argument and set done to be true. Any calls next() after return() will return done-object.

// Use of generators
/*
    Previously, we used generators with a KNOWN number of iterations. But what if we don't know how many
    iterations are needed. To solve this problem it is enough to create an infinite loop in the function generator
*/
// Example of a function returning a random number
function * randomNumberFrom(...arr){
   while(true){
      yield arr[Math.floor(Math.random()*arr.length)];
   }
}

const getRandomNumber = randomNumberFrom(1,34,2,58,680);
console.log(getRandomNumber.next().value); 
