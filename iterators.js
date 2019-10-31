// Javascript iterators

// Lets say we have the bellow array and want to get back all the individual values in the array for printing them on the screen, manipulating them, or for performing some action on them

const myFavAuthors = [
   "Alexandros Papadiamantis",
   "Andreas Karkavitsas",
   "Gregorios Xenopoylos",
   "Ioannis Kondilakis"
];

for(favAuthor of myFavAuthors){
   console.log(favAuthor);
}
