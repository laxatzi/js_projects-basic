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
document.forms.hero.powers[0].checked = true;// remember that 'forms' is a native method ...here we check checkbox field by default... in html5 the equivalent is 'checked'

// radio buttons
// only one button can be checked in a group that has the same name
// we can access all the radio buttons in that group using one name

form.radio_type;
// since it is an array-like object we can use bracket notation to access each individual button
form.radio_type[1];

// each radio button has a value property that is equal to its value attr ... we can use this to set a name attr property to the radio button that is selected

for(let i = 0; i<form.radio_type.length; i++){ // iterate through radio buttons to see which is checked
   if (form.radio_type[i].checked) hero.radio_type = form.radio_type[i].value; // if checked ...
   break; // escape loop since there is no point of checking for another value...only one in radio buttons
}

// usability feedback
form.name.addEventListener("blur", validate, false);
function validate(evt){
   // get the first letter on the name input 
   let firstLetter = form.name.value[0];
   // get ref to the label for the name input
   let label = document.querySelector('label[for="name"]');
   if(firstLetter.toUpperCase() === "X"){
      label.classList.add('error');
      label.textContent = "'X' cannot be the first letter of a name!";
   }else{ // error has NOT happened/ error has been FIXED
      label.classList.remove('error');
      label.textContent = "Name: ";
   }
}

