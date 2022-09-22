const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

let toDos = [];

function saveToDo() {
    localStorage.setItem("todoKey",JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintNewToDo(newtodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button")
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    li.id = newtodo.id;
    span.innerText = newtodo.text;
    button.innerText = 'X';
    button.addEventListener("click",deleteToDo);
}


function stopSubmit(event) {
   event.preventDefault();
   const newToDo = todoInput.value;
   todoInput.value="";
   const newToDoObj = {
      text:newToDo,
      id: Date.now(),
   };
   toDos.push(newToDoObj);
   paintNewToDo(newToDoObj);
   saveToDo();
}
todoForm.addEventListener("submit",stopSubmit)

const savedToDos = localStorage.getItem("todoKey");

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintNewToDo);
 }