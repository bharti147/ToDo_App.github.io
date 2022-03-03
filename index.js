const form =document.getElementById("form");
const input=document.getElementById("input");
const todos =document.getElementById("todos");
form.addEventListener('submit', (e)=>
 {e.preventDefault();
 
  addtodo();
 });

function addtodo(){
  const todoText =input.value;
  
  if(todoText){
  const todoEl=document.createElement('li');
  todoEl.innerText=todoText;
 
  

  todoEl.addEventListener('click',() =>
  {
      todoEl.classList.toggle('completed');
  });
  
  todoEl.addEventListener("contextmenu",(e)=>
  {
      e.preventDefault();
       todoEl.remove();
  });


  todos.appendChild(todoEl);
  input.value="";

}
}

function updateLS(){
    const todoEl=document.querySelectorAll('li');
    const todos=[];
    
}