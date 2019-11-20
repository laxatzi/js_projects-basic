// store elements in variables
let todo_form = document.getElementById('todo_item-form');
let todo_input = document.getElementById('todo_item');
let todo_list = document.getElementById('todo_list');

todo_form.addEventListener('submit', (evt)=>{
   evt.preventDefault();
   createTodo(todo_input.value);
   todo_input.value = "";
   todo_input.focus();
})

function createTodo(arg){
    let somethingTodo = `<li>${arg} <button onclick="deleteTodo(this)">Delete</button></li>`;
    todo_list.insertAdjacentHTML('beforeend', somethingTodo);
}

function deleteTodo(elementToDelete){
    elementToDelete.parentElement.remove();
}
