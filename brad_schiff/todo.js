// store getElementById values to variables for cleaner code
let todo_form = document.getElementById('todo_item-form');
let todo_input = document.getElementById('todo_item');
let todo_list = document.getElementById('todo_list');

// add submit event listener
todo_form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    createItem(todo_input.value);
});

// create item to list
function createItem(par){
   let obligation = `<li>${par} <button>Delete</button></li>`;
   todo_list.insertAdjacentHTML('beforeend', obligation);
}