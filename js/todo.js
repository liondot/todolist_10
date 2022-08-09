const todoForm = document.getElementById("todo_form");
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById("todo_list");


function deleteToDo(event){
  const target = event.target.parentNode;
  console.log(target)
  target.remove()
}


function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault(); 
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo)
}


todoForm.addEventListener("submit", handleToDoSubmit)