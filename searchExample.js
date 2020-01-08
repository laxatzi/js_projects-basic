// storing elements in variables
const form = document.forms['search'];
const input = form['searchBox'];
const button = form.elements[1];

// form events ...events exclusive for forms
  input.addEventListener('focus', function(){console.log('focused!'), false});
  input.addEventListener('blur', function(){console.log('blured!')}, false);

