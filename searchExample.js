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

// looking through the html doc we see that all checkbox elements have the same name property of 'powers'. so we can iterate over this collection of nodes using a for loop to see if each checkbox is checked.

// Checkbox object has a native checked property that checks if checkbox is checked or not
 
hero.powers = []; // create a powers property for our 'hero' obj that starts as an empty array. we then iterate over each checkbox to see if it's been checked. it it's been we add the value property of the checked checkbox to the powers array using the push method.

for(let i =0; i < form.powers.length; i++){
   if(form.powers[i].checked) hero.powers.push(form.powers[i].value);
}

// make immortality a standard power
document.forms.hero.powers[0].checked = true;// remember that 'forms' is a native method 