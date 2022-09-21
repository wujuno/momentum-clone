const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const NEWUSER_KEY = "newusername";
const HIDDEN = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(NEWUSER_KEY,username);
    paintGreeting(username);
}

loginForm.addEventListener("submit",onLoginSubmit);

function paintGreeting(username){
    greeting.innerText = `Hellow ${username}`;
    greeting.classList.remove(HIDDEN);
    
}
const savedusername = localStorage.getItem(NEWUSER_KEY);
if (savedusername === null) {
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreeting(savedusername);
}