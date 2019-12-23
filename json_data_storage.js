// JSON
// javascript object notation or JSON was invented by Doublas Crockford in 2001. It is a popular lightweight data-storage format that is used for data-serialization and configuration.
// Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON. Differs with object literal syntax in that property names must be quoted and not using functions to create methods
//JSON exists as a string — useful when you want to transmit data across a network. It needs to be converted to a native JavaScript object when you want to access the data.
// It is often used to exchange info between web servers(and web services in general). It's intention is to be both human and machine readable.
//A JSON object can be stored in its own file, which is basically just a text file with an extension of .json

// example of a  JSON object 
/*
var PAOK = '{
     "Location":"Thessaloniki",
     "Origin":"Constantinople",
     "birth-date": 1926,
     "titles": 10,
     "captains":["Vierihnia", "Krespo", "Pelkas"]
}'
*/

// Since ECMAScript 5, there has been a global JSON object that has access to parse, and stringify methods

// parse()
   // the parse method takes a JSON string and returns a javascript object:
      JSON.parse(batman);

// stringify()
   // the stringify method takes a javascript object and returns a string of JSON data.
   JSON.stringify(batman);
// in this case the quote marks are escaped and any method the object has is simply ignored since 
// these method are useful when passing date to and from a web server using AJAX requests or 
// when using localStorage to store date on a user's machine.


