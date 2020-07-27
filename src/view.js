
"use strict";
import { todoModel } from "./model";

const viewTodo = (() => {


    //cache dom
    const projectList = document.querySelector('.ul_plistitems');
    const todoList = document.querySelector('.todoItems');
    const todoHeader = document.querySelector('.todoHeader');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.content')

    
    function renderProjects(projects){
       projectList.innerHTML =  projects.map((item,i)=>{

        return `
        <li  data-list = ${i}>
            <h4><button class= "listitem"></button> ${item.name}</h4> 
        </li>
        `;
       }).join('');
    }


    function renderTodos(todos = []){
       todoList.innerHTML = todos.map((item,i)=>{
        

  return `
        <li data-todo = ${i}>
            <h3>${item.title}</h3>   
            ${item.dueDate} 
            ${item.priorety}
            <button id="remove" class ="listitem"></button>

        </li>
        <hr>
        ` ;

                
        
      
    
    }).join('');
    }

    function detailsProject(project = ""){
        if(!project){
            todoHeader.innerHTML = ``;
                } else{

                     todoHeader.innerHTML = `
           <button id="add" class= 'btn' data-todolist = ${project['id']}></button>
           <h1>${project['name']}</h1>

           `;
                }
          

    }

    function showModal(){
           modal.style.display = "block";
    }

    function closeModal(){
        modal.style.display = "none";
    }

    function showDetailsTodo(todo){
        
               modalContent.innerHTML = `
               <h3>${todo.title}</h3>
               <p>${todo.description}</p>
               
               
               `;



    }

   return {
       renderProjects,
       renderTodos,
       detailsProject,
       showDetailsTodo,
       showModal,
       closeModal,
    
   }

})()


export { viewTodo };