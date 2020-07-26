
"use strict";

//data handeling, storing data and modifying it.
//IMPORTED VIEW to check amount of Li-items created 
// Length of UL is to give id-number to project.

const todoModel = (() => {

    let projArr = [];

    const _todoProject = (id, name,task = [], counter = 0) => {
        
        return {
            id,
            name,
            task,
            counter
        }
    }

    const _todoTask = (id, title, description, dueDate = Date.now(), priorety = 0, checked = false) => {
       // id = getTodoLength() - 1;
        return {
            id,
            title,
            description,
            dueDate,
            priorety,
            checked
        }
    }

    function createProject(name){
        let id;
        if(_getListLength() == 0) { id = 0}else{ id = _getListLength()}
        let project = _todoProject(id,name);
        projArr.push(project);
    }

    function _getListLength(){
        return projArr.length;
    }

    function getProjects(){
        return projArr;
    }

    function getProject(id){
        return projArr[id];
    }

    function getTodos(id){
            return projArr[id]["task"];
    }

    function removeProject(id){
        projArr.splice(id,1);
        return projArr;
    }

    function setProjectsId(){
        let idNew = 0;
        projArr.forEach((item)=>{
            item.id = idNew;
            idNew ++;
        })
    }



   


    return {
            createProject,
            removeProject,
            setProjectsId,
            getProjects,
            getProject,
            getTodos
    }
})()


export { todoModel }