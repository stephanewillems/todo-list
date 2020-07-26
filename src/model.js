
"use strict";

//data handeling, storing data and modifying it.
//IMPORTED VIEW to check amount of Li-items created 
// Length of UL is to give id-number to project.

const todoModel = (() => {

    let projArr = JSON.parse(localStorage.getItem('project')) || [];

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
        localStorage.setItem('project', JSON.stringify(projArr));
        return project;
    }

    function _getListLength(){
        return projArr.length;
    }
    function _todoLength(id){
        return projArr[id]["task"].length;
    }

    function getProjects(){
        return projArr;
    }

    function getProject(id){
        return projArr[id];
    }

    function createTodo(id,title,desc){
        let idp = _todoLength(id);
        let todo = _todoTask(idp,title,desc);
        getProject(id)["task"].push(todo);
        getProject(id)["counter"] = idp + 1;
        localStorage.setItem('project', JSON.stringify(projArr));
    }

    function getTodos(id){
            return projArr[id]["task"];
    }

    function removeProject(id){
        projArr.splice(id,1);
        localStorage.setItem('project', JSON.stringify(projArr));
        return projArr;
    }

    function removeTodo(idP,idTodo){
        return projArr[idP]["task"].splice(idTodo,1);
    }

    function setProjectsId(){
        let idNew = 0;
        projArr.forEach((item)=>{
            item.id = idNew;
            idNew ++;
        })
    }

    function setTodosId(id){
        let idNew = 0;
        projArr[id]['task'].forEach((item)=>{
            item.id = idnew;
            idNew ++;
        })
    }



   


    return {
            createProject,
            createTodo,
            removeTodo,
            setTodosId,
            removeProject,
            setProjectsId,
            getProjects,
            getProject,
            getTodos
    }
})()


export { todoModel }