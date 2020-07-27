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
const closeBtn = document.querySelector('.close');


//eventlisteners
btn.addEventListener('click', addProject);
list.forEach((item)=>{
    item.addEventListener('click', detailRemove);
})

todosList.forEach((item)=>{
    item.addEventListener('click', addTodo);
    item.addEventListener('click', removeTodo);
    item.addEventListener('click', detailTodo);
})

closeBtn.addEventListener('click',closeModal);





//functions
function startData(){
    let name = "example";
    let project = todoModel.createProject(name);
    viewTodo.renderProjects(todoModel.getProjects());
    viewTodo.detailsProject(project);
    todoModel.createTodo(project.id,"exampletodo","description");
    viewTodo.renderTodos(project['task']);
    console.table(todoModel.getProjects());
}




function addProject(e){
    let name = prompt("what is name of project?");
    if (name === ""){
        return;
    }else{
        let project = todoModel.createProject(name);
       
        viewTodo.renderProjects(todoModel.getProjects());
        viewTodo.detailsProject(project);
        viewTodo.renderTodos(project['task']);
        
        console.table(todoModel.getProjects());

    }
    
    
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
        viewTodo.renderTodos();
        viewTodo.detailsProject();
    }else{
       return;
    }
}


function addTodo(e){
    if(e.target.matches('button[id=add]')){
        let id = e.target.dataset.todolist;
        let project = todoModel.getProject(id);
        let title = prompt('what is the title of the todo?');
        let desc = prompt('add a description:')
        let prio = prompt('priority');
        todoModel.createTodo(id,title,desc,prio);
        viewTodo.renderTodos(project['task']);
    }
    
}


function removeTodo(e){
    let btn = document.querySelector('.todoHeader>button');
    let id  = btn.dataset.todolist;
    if(e.target.matches('button[id=remove]')){
        console.log(id);
        let project = todoModel.getProject(id);
        todoModel.removeTodo(btn.dataset.todolist,e.target.parentNode.dataset.todo);
        todoModel.setTodosId(id);
        viewTodo.renderTodos(project['task']);
        console.log(todoModel.getTodos(id));
    }
}

function detailTodo(e){

    if(e.target.matches('li')){
        let btn = document.querySelector('.todoHeader>button');
        let todoid = e.target.dataset.todo;
        let projectid = btn.dataset.todolist;
        let todo = todoModel.getTodo(projectid,todoid);
        viewTodo.showModal();
        viewTodo.showDetailsTodo(todo);
        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click',closeModal);
        
       //console.log(btn.dataset.todolist,e.target.dataset.todo);
    }
}


function closeModal(){
    viewTodo.closeModal()
}

return {
    startData
}
  

})()
//controlTodo.startData();
window.onload = (event) => {
    //controlTodo.startData();
    let existing = localStorage.getItem('project'); // JSON To variable
    existing = existing ? JSON.parse(existing) : {}; // JSON to array
    viewTodo.renderProjects(existing);
    

  }