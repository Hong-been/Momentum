const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden"; 
const USERNAME_KEY="username";
const storage=window.localStorage;

function onLoginSubmit(event){
    event.preventDefault();

    const username=loginInput.value;
    storage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreeting(username);  
}

function paintGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText= `Welcome again, ${username}!`;
}

const savedUserName=storage.getItem(USERNAME_KEY);
 
if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreeting(savedUserName);
}
