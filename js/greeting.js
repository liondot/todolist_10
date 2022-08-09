const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username){
  loginForm.classList.add(HIDDEN_CLASSNAME)
  greeting.innerText = `Hello  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form 
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);

} else {
  // show the greetings
  paintGreetings(savedUsername);
}