
"use strict";
import { todoModel } from "./model";

const viewTodo = (() => {


    //cache dom
    const projectList = document.querySelector('.ul_plistitems');
    const todoList = document.querySelector('.todoItems');
    const todoHeader = document.querySelector('.todoHeader');

    
    function renderProjects(projects){
       projectList.innerHTML =  projects.map((item,i)=>{

        return `
        <li  data-list = ${i}>
            ${item.name} <button class= "listitem"></button>
        </li>
        `;
       }).join('');
    }


    function renderTodos(todos = []){
       todoList.innerHTML = todos.map((item,i)=>{
        

  return `
        <li data-todo = ${i}>
            ${item.title}  <button id="remove" class ="listitem"></button>

        </li>
        
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
    

   return {
       renderProjects,
       renderTodos,
       detailsProject
   }

})()


export { viewTodo };