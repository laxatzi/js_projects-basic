// JSON objects
/* You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id(like 2548), a property prop(like "artist"or "tracks"), and a value(like "Addicted to Love") to modify the data in this collection.

If propisn't "tracks"and valueisn't empty (""), update or set the valuefor that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If propis "tracks"but the album doesn't have a "tracks"property, create an empty array before adding the new value to the album's corresponding property.

If propis "tracks"and valueisn't empty (""), push the valueonto the end of the album's existing tracksarray.

If valueis empty (""), delete the given propproperty from the album.
*/

// Hints:  Use bracket notation when accessing object properties with variables.

//SETUP

var collection = {
   "2548": {
      "album": "fotia moy",
      "artist": "Xaroulis-Thivaios",
      "tracks": [
         "fotia moy",
         "to kaphleio"
      ]
   },
   "2468": {
      "album": "Ta tragoydia mia stalia",
      "artist": "Miltos Pasxalidis",
      "tracks": [
         "Ta tragoydia mia stalia",
         "O Trelos"
      ]
   },
   "1245":
   {
      "artist": "Xainides",
      "tracks": []
   },
   "5439": {
            "album": "Kapote gnoriza mia limni"
        }

};

// Keep a copy of the collection for testing
var collectionCopy   = JSON.parse(JSON.stringify(collection));

// function
function updateRecords(id, prop, value){
   //code goes here
   if(prop==="tracks" && value !== "" ){
      if(collection[id][prop]){
         collection[id][prop].push(value);
      }else{
         collection[id][prop]= [value];
      }
   }
   else if(value !== ""){
         collection[id][prop]="value";
      }
   else {
      delete collection[id][prop];
   }
   
      return collection;
   }
   
   
   