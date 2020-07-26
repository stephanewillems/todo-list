//im(port { viewTodo } from "./view";

"use strict";

import { todoModel } from "./model";
import { viewTodo } from "./view";
//import { viewTodo } from "./view";


//interaction with button

const controlTodo = (()=>{
//cachedome
const btn = document.querySelector('.btn');
const list = document.querySelectorAll('.ul_plistitems');
const todosList = document.querySelectorAll('.todos');
//eventlisteners
btn.addEventListener('click', addProject);
list.forEach((item)=>{
    item.addEventListener('click', detailRemove);
})

todosList.forEach((item)=>{
    item.addEventListener('click', addTodo);
})

//functions

function addProject(e){
    let name = prompt("what is name of project?");
    let project = todoModel.createProject(name);
    viewTodo.renderProjects(todoModel.getProjects());
    viewTodo.detailsProject(project);
    viewTodo.renderTodos(project['task']);
    console.table(todoModel.getProjects());
}

function detailRemove(e){
    let id = e.target.dataset.list;
    let idParent = e.target.parentNode.dataset.list;
    if(e.target.matches('li')){

       viewTodo.detailsProject(todoModel.getProject(id));
       viewTodo.renderTodos(todoModel.getTodos(id));
       
    }else if(e.target.matches('button')){

        todoModel.removeProject(idParent);
        viewTodo.renderProjects(todoModel.getProjects());
        todoModel.setProjectsId();

    }else{
       return;
    }
}


function addTodo(e){
    if(e.target.matches('button[id=add]')){
        let id = e.target.dataset.todolist;
        let project = todoModel.getProject(id);
        let title = prompt('what is the title of the todo?');
        todoModel.createTodo(id,title, "test");
        viewTodo.renderTodos(project['task']);
    }
    
}
  

})()

window.onload = (event) => {
    let existing = localStorage.getItem('project'); // JSON To variable
    existing = existing ? JSON.parse(existing) : {}; // JSON to array
    viewTodo.renderProjects(existing);
    

  }