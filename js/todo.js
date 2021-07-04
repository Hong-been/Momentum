const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector("#todo-list");

const toDos=[];
const TODOS_KEY="todos";

function delToDo(event){
    const li= event.target.parentNode;
    li.remove();
}
function saveToDos(){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newToDo;
    const del=document.createElement("button");
    del.innerText="❌";
    del.addEventListener("click",delToDo);
    
    li.appendChild(span);
    li.appendChild(del);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);

    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parseToDos=JSON.parse(saveToDos);
    parseToDos.array.forEach(element => {
        console.log("Hello", element);
    });
}