// Javascript iterators

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