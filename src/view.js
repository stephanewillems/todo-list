import { todoModel } from "./model";

const viewTodo = (() =>{


    //cache DOM
    let projDiv = document.querySelector('.projectcontent');
    

    //Create DomElements
    let inputProj = document.createElement('button');
    let projects = document.createElement('div');
    let projectsList = document.createElement('ul');
    
    //add Classes
    inputProj.classList.add('btn');
    projects.classList.add('projects');
    projectsList.classList.add('ul_plistitems');

    //Add elements to DOM
    projDiv.appendChild(inputProj);
    projDiv.appendChild(projects);
    projects.appendChild(projectsList);


    function createProject(id,name,desc,task,counter){

//      ADD REMOVE BUTTON NEXT TO LI ( CHECK VIEW AND CONTROLLER + CSS)

        let list = document.createElement('li');
        let del = document.createElement('button');
        del.classList.add('removeP');
        list.setAttribute("id",id);
        list.classList.add('p_listitems');
        list.innerHTML= name;
        list.appendChild(del);
        projectsList.appendChild(list);
   
    
    }

    //show todo function



    





return {
            createProject,
}


})()


export { viewTodo };