
"use strict";
import { todoModel } from "./model";

const viewTodo = (() =>{


    //cache DOM
    const projDiv = document.querySelector('.projectcontent');
    const todoDiv = document.querySelector('.todos');
 
    

    //Create DomElements
    const inputProj = document.createElement('button');
    const projects = document.createElement('div');
    const projectsList = document.createElement('ul');
    const todoList =  document.createElement('ul');
    const inputTodo = document.createElement('button');
    const titleTlist = document.createElement('h1');
   
    
    //add Classes
    inputProj.classList.add('btn');
    projects.classList.add('projects');
    projectsList.classList.add('ul_plistitems');
    inputTodo.classList.add('btn');
    titleTlist.classList.add('titleList');
    todoList.classList.add('todoItems');
    //Add elements to DOM
    projDiv.appendChild(inputProj);
    projDiv.appendChild(projects);
    projects.appendChild(projectsList);
   
    todoDiv.appendChild(titleTlist);
    todoDiv.appendChild(inputTodo);
    todoDiv.appendChild(todoList);

    
    //set display 
    inputTodo.style.display = "none";


    function createProject(id,name,desc,task,counter){
        
        let list = document.createElement('li');
        let del = document.createElement('button');
        del.classList.add('removeP');
        list.setAttribute("id",id);
        list.classList.add('p_listitems');
        list.innerHTML= name;
        list.appendChild(del);
        projectsList.appendChild(list);
   
    
    }


    function removeProj(id){
        let el = document.getElementById(id);  
        el.parentNode.removeChild(el);
          }
          
          
    function setIds(){
            let projectlistLi = document.querySelectorAll('.p_listitems');
            let id_li = 0;
          projectlistLi.forEach((item)=>{
                item.id = id_li;
                id_li ++;
          })

        }


    function renderTodo(todos){
            todoList.innerHTML= todos.map((todo,i)=>{

                return `
                <li data-index = ${i}>
                    ${todo["title"]}
                </li>
                
                
                `;

            }).join('');
    
        }


    //show todo function

   /*  function createTodo(id,title,description,dueDate){
        
        //add checkbox

        let list = document.createElement('li');
        let del = document.createElement('button');
        del.classList.add('removeP');
        list.setAttribute("id",id);
        list.classList.add('p_listitems');
        list.innerHTML= title;
        list.appendChild(del);
       todoList.appendChild(list); 
   
    
    }*/


    function showTodo(project){
        const title = document.querySelector('.titleList');
        title.innerHTML = project["name"]; 
        let id = project["id"];
        inputTodo.style.display = "block";
        inputTodo.setAttribute("data-project",id);
        

    }



    





return {
            createProject,
            renderTodo,
            removeProj,
            setIds,
            showTodo,
            inputTodo
}


})()


export { viewTodo };