const todoForm = document.getElementById("todo_form");
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById("todo_list");

function handleToDoSubmit(e){
  e.preventDefault(); 
  const newTodo = todoInput.value;
  console.log("todoInput.value", todoInput.value)
  todoInput.value = "";
  console.log("newTodo", newTodo ,":", "todoInput.value", todoInput.value ,)
}


todoForm.addEventListener("submit", handleToDoSubmit)