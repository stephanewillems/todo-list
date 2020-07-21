
"use strict";

//data handeling, storing data and modifying it.
import { viewTodo } from "./view"; //IMPORTED VIEW to check amount of Li-items created 
// Length of UL is to give id-number to project.

const todoModel = (() => {

    let projArr = [];
    let counterP = 0;
    const _todoProject = (id, name, desc, task = [], counter = 0) => {
        id = getListLength() - 1;
        return {
            id,
            name,
            desc,
            task,
            counter
        }
    }

    const _todoTask = (id, title, description, dueDate = Date.now(), priorety = 0, checked = false) => {
        id = getTodoLength() - 1;
        return {
            id,
            title,
            description,
            dueDate,
            priorety,
            checked
        }
    }



    function addTask(id, todo) {

        //todo.id = proj.task.length;
        projArr[id].task.push(todo);
        _todoProject.counter++;
       console.log(projArr[id]);
    }

    function doneTodo(todo) {
        return !todo.checked ? todo.checked = true : todo.checked = false;
    }

    //Create new project

    function newProject(name, desc, task, counter) {
        let project = _todoProject(name, desc, task, counter);
        projArr.push(project);
        return project;
    }
//create new todo
    function newTodo(title, description, dueDate , priorety) {

        let todo = _todoTask(title, description, dueDate, priorety);
        return todo;
    }


    function getProject(id) {
        return projArr[id];
        //return projArr[id];
    }



    function removeTodo(proj, todo) {
        return proj.task.splice(todo.id, 1);

    }
    function getTodoLength() {
        return document.querySelectorAll('.todos>ul>li').length;
    }

    function getListLength() {
        return document.querySelectorAll('.projects>ul>li').length;
    }

    function removeProject(id) {
        return projArr.splice(id, 1);

        //console.log(projArr[id]);


    }
    function setId(item) {
        return projArr.indexOf(item);
    }



    return {
        doneTodo,
        removeTodo,
        getListLength,
        newProject,
        getProject,
        removeProject,
        getTodoLength,
        projArr,
        newTodo,
        addTask
    }
})()


export { todoModel }