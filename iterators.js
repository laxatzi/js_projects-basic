// Javascript iterators
// An iterable is a data structure 

// Lets say we have the bellow array and want to get back all the individual values in the array for printing them on the screen, manipulating them, or for performing some action on them

const myFavAuthors = [
   "Alexandros Papadiamantis",
   "Andreas Karkavitsas",
   "Gregorios Xenopoylos",
   "Ioannis Kondilakis"
];

for(let favAuthor of myFavAuthors){
   console.log(favAuthor);
}

// How about looping through a more complex data structure
/*
const myFavoriteAuthors = {
   allAuthors: {
      greek_fiction:[
         "Alexandros Papadiamantis",
         "Andreas Karkavitsas",
         "Gregorios Xenopoylos",
         "Ioannis Kondilakis"
      ],
      international_fiction:[
         "Goerge Simenon",
         "Andrea Camilleri",
         "Emil Zola",
         "Frank Kern"
      ],
      philosophy:[
         "Marcus Aurelius",
         "Aristotle",
         "Arrianus",
         "Viktor Frankl"
      ]
   }
}

for (let myFavAuthor of myFavoriteAuthors){
   console.log(myFavAuthor);
}
*/
// Now i get "TypeError: myFavoriteAuthors is not iterable"
// We want some kind of method through which we can expose all our internal data sequentially.

const myFavoriteAuthor = {
   allAuthors: {
      greek_fiction:[
         "Alexandros Papadiamantis",
         "Andreas Karkavitsas",
         "Gregorios Xenopoylos",
         "Ioannis Kondilakis"
      ],
      international_fiction:[
         "Goerge Simenon",
         "Andrea Camilleri",
         "Emil Zola",
         "Frank Kern"
      ],
      philosophy:[
         "Marcus Aurelius",
         "Aristotle",
         "Arrianus",
         "Viktor Frankl"
      ]
   },
   getAllAuthors() {
      const authors = [];
      for(const author of this.allAuthors.greek_fiction){
         authors.push(author);
      }
      for(const author of this.allAuthors.international_fiction){
         authors.push(author);
      }
      for (const author of this.allAuthors.philosophy){
         authors.push(author);
      }
      return author;

   }// end of method
} // end of obj


console.log(myFavoriteAuthor.allAuthors.greek_fiction);

//It’s a simple approach. It accomplishes our current task of getting all the authors. However, a few problems can arise with this implementation.

//The developer will have to know the exact name and return type of the method that returns all the data.
// What about if another developer returns an array of objects instead an array of strings in the above example e.g [{name: "Alexandros Papadiamantis"}, {name: "Ioannis Kondilakis"}, ...]
// What if someone creates a similar obj with a diff name

// So We make a rule that the name of the method and the return type will be fixed and unchangeable
// we call the built in method 'iteratorMethod'
// This is the basic idea behind the Symbol.iterator ECMA's method

// Symbol.iterator makes myFavoriteAuthor variable iterable and thus let for..of work.
/*
    1. When for..of starts it calls the method once (or gives an error if not found). The method must return an iterator-an object with the method next.
    2. Onward for..of works only with the return object.
    3. When for..of wants the next value it calls the next() method on that object
    4. The result of next must have the form of {done: boolean, value: any} where done=true means that the iteration is finished otherwise value is the next value
*/

// here is the full implementation




