const toDoForm=document.querySelector("#todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector("#todo-list");

let toDos=[];
const TODOS_KEY="todos";

function delToDo(event){
    const li= event.target.parentNode;
    li.remove();
    toDos=toDos.filter((todo)=>String(todo.id)!==li.id);
    saveToDos();
}

function saveToDos(){
    window.localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newToDoObj){
    const li=document.createElement("li");
    li.id=newToDoObj.id;
    const span=document.createElement("span");
    span.innerText=newToDoObj.text;
    const del=document.createElement("button");
    del.classList.add("del-button");
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

    const newToDoObj={
        text: newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}
