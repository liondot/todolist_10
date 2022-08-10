const todoForm = document.getElementById("todo_form");
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";
const toDos = []

function savaToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


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
  toDos.push(newTodo);
  paintToDo(newTodo);
  savaToDos();
}

function sayHello(item){
  console.log("this is the turn of", item)
}

const saveToDos = localStorage.getItem(TODOS_KEY);

todoForm.addEventListener("submit", handleToDoSubmit);

if(savaToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
  // parsedToDos.forEach((item) => {
  //   console.log("this is the turn of", item)
  // })
}