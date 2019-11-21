// store elements in variables
let todoForm = document.getElementById('todo_item-form');
let todoItem = document.getElementById('todo_item');
let todoList = document.getElementById('todo_list');

todoForm.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    if(todo_item.value){
        createTodo(todo_item.value);
    }else{
        alert("Please insert something need to be done!");
    }

});

function createTodo(todo){
    let somethingTodo = `<li>${todo} <button onclick="deleteElement(this)">Delete</button></li>`;
    todoList.insertAdjacentHTML('beforeend', somethingTodo);
    todo_item.value = "";
    todo_item.value.focus();
}

function deleteElement(p){
    p.parentElement.remove();
}