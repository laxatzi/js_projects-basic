// storing elements in variables
const form = document.forms['search'];
const input = form['searchBox'];
const button = form['button'];

// form events ...events exclusive for forms
  input.addEventListener('focus', function(){console.log('focused!'), false});
  input.addEventListener('blur', function(){console.log('blurred!')}, false);
 // button.addEventListener('click', function(evt){ console.log('everything ok'); evt.preventDefault();}, false); 

form.addEventListener('submit', makeHero, false);

function makeHero(evt){
   evt.preventDefault(); // prevent form from being submitted
   let hero = {}; // create an empty object... we gonna add properties later on
   hero.name = form.name.value; // create a name property based on the name value
   alert(JSON.stringify(hero)); // convert object to JSON and display in alert box
}
