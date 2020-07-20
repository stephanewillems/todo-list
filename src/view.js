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
        let projectlistLi = document.querySelectorAll('.p_listitems');
        let id_li = 0;
        el.parentNode.removeChild(el);
        for(let i = 0; i< todoModel.projArr.length; i++){
            todoModel.projArr[i]["id"] = i;
            projectlistLi.setAttribute('id',i);
        }


        }


    function render(){
        todoModel.projArr.forEach((e) => {
           // console.log(`${e["id"]}&& ${e["name"]}`);
           return createProject(e["id"],e["name"],e["desc"]);
    })
        }


    //show todo function



    





return {
            createProject,
            render,
            removeProj
}


})()


export { viewTodo };