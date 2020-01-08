// storing elements in variables
const form = document.forms['search'];
const input = form['searchBox'];
const button = form['button'];

// form events ...events exclusive for forms
  input.addEventListener('focus', function(){console.log('focused!'), false});
  input.addEventListener('blur', function(){console.log('blurred!')}, false);
//   button.addEventListener('click', function(evt){ console.log('everything ok'); evt.preventDefault();}, false); we can use a name here too

  form.addEventListener('submit', checkSubmit, false);

  function checkSubmit(evt){
     alert('Submitted');
     evt.preventDefault();
  }

