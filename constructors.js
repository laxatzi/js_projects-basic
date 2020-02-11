// function Constructor

/* 
   When you use the 'new' keyword, it creates an instance of a constructor function or constructor class. 
*/

function Country(name, symbol, color){
   this.name = name;
   this.symbol = symbol;
   this.color = color;
   this.describe = function(){
      console.log(`${this.name} has a flag that is ${this.color} with a ${this.symbol} as a symbol`);
   }
}

const greece = new Country('Greece', 'white cross', "blue");
greece.describe();

// instead of a function constructor, we can use a class constructor

class Republic {
   constructor(name, year, flagColor){
      this.name = name; 
      this.year = year;
      this.flagColor = flagColor;
   } // end of constructor

      describe(){
         console.log(`${this.name} republic, founded in ${this.year} and has a ${this.flagColor} flag.`);
      }
   
}

const hellas = new Republic("Greece", 1821, "blue and white");
hellas.describe();

// This in DOM 
// there is a special 'this' context for event handlers. If an event handler is called by an eventListener, 'this' will refer to 'event.currentTarget'.
// Usually devs will simply use 'event.target' or 'event.currentTarget' to access elements in the DOM, but 'this' would also do.

// example:

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.append(button);

button.addEventListener('click', function(e){
   console.log(e.target);
})
