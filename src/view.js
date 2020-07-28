
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
        let prio = item.priorety;

  return `
        <li class="singleTodo" data-todo = ${i}>
            detail
            <h3>${item.title}</h3>   
            <p class="duedate">${item.dueDate}</p>             
            <p class="${_addclass(prio)}">${_switchPriorety(prio)}</p>
            <button id="remove" class ="listitem"></button>
            <input type="checkbox">

        </li>
        <hr>
        ` ;

                
        
      
    
    }).join('');
    }

    function _addclass(exp){
        let prio;
       
        switch (exp){
            case "1":
                prio = "hprio";
               
                break;
            case "2":
                prio = "mprio";
                
                break;
            case "3":
                prio = 'lprio';
                break;
                


        }
        return prio;
    }

    function _switchPriorety(exp){
        let prio;
       
        switch (exp){

            case "0":
                prio = "no prio";
                break;
            case "1":
                prio = "High Prio";
               
                break;
            case "2":
                prio = "medium Prio";
                
                break;
            case "3":
                prio = "Low Prio"
                


        }
        return prio;
    }

    function detailsProject(project = ""){
        if(!project){
            todoHeader.innerHTML = ``;
                } else{

                     todoHeader.innerHTML = `
           <button id="add" class= 'btn' data-todolist = ${project['id']}></button>
           <h1 class="titleProject">${project['name']}</h1>

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