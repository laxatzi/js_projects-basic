// generators are reusable but you need to initialize them first 

// create generator
function * generator(arg="Nothing"){
   yield arg;
}

// initialize generator
const gen1 = generator(); 

console.log(gen1.next().value);//Nothing
