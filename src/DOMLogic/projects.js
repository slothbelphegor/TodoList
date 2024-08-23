import Project from '../logic/projects.js';
import TodoItem from '../logic/todos.js';
import DeleteIcon from '../icons/delete.svg'
import { newTodoForm, todoInfo, todoInfoDetailsForm } from './todos.js'


const projectList = Project.projectList;
const project = new Project("Default Project");
project.addTodo(new TodoItem());
const project2 = new Project("Housework");
project2.addTodo(new TodoItem("Sweeping", "Clean up the floor\nGet rid of trash\nWait for trash takeaway\nDone!", new Date(), 1));
const todo = project.getTodo(0);
todo.toggleCompletion();




function projectInfoDOM(project) {
    // Create a new div element for project info
    const projectInfoDOM = document.createElement("div");
    projectInfoDOM.classList.add("project-info");
    

    // The toolbar of each project
    const projectInfoToolsDOM = document.createElement("div");

    // Toolbar - Add task button
    const addTodoBtnDOM = document.createElement("button");
    addTodoBtnDOM.textContent = "Add Task";
    addTodoBtnDOM.classList.add("btn-todo-add");
    addTodoBtnDOM.addEventListener("click", () => {
        const form = newTodoForm(project);
        // Add new todo item info
        form.addEventListener("submit", () => {
            const newTodoItemDOM = todoInfo(project.todos[project.todos.length - 1]);
            newTodoItemDOM.classList.add("todo-item");
            // Remove todo item button
            const removeTodoBtnDOM = document.createElement("img");
            removeTodoBtnDOM.src = DeleteIcon;
            removeTodoBtnDOM.classList.add("btn-todo-remove");
            removeTodoBtnDOM.addEventListener("click", () => {
                project.removeTodo(todo);
                todoListDOM.removeChild(newTodoItemDOM);
            });
            projectInfoDOM.removeChild(form);
            newTodoItemDOM.appendChild(removeTodoBtnDOM);
            todoListDOM.appendChild(newTodoItemDOM);
        });
        projectInfoDOM.appendChild(form);

    });
    projectInfoToolsDOM.appendChild(addTodoBtnDOM);

    projectInfoDOM.appendChild(projectInfoToolsDOM);

    // List of Todo Items: consists of item info and a checkbox
    let todoListDOM = document.createElement("ul");
    todoListDOM.classList.add("todo-list");
    if (project.todos !== undefined) {
        project.todos.forEach((todo) => {
            const todoItemDOM = todoInfo(todo);
            todoItemDOM.classList.add("todo-item");
            // Remove todo item button
            // const removeTodoBtnDOM = document.createElement("button");
            // removeTodoBtnDOM.textContent = "Remove";
            const removeTodoBtnDOM = document.createElement("img");
            removeTodoBtnDOM.src = DeleteIcon;
            removeTodoBtnDOM.classList.add("btn-todo-remove");
            removeTodoBtnDOM.addEventListener("click", () => {
                project.removeTodo(todo);
                todoListDOM.removeChild(todoItemDOM);
            });

            todoItemDOM.appendChild(removeTodoBtnDOM);
            todoListDOM.appendChild(todoItemDOM);
            projectInfoDOM.appendChild(todoListDOM);

        });
    }

    return projectInfoDOM;

}

function newProjectFormDOM() {
    // Create a form for the new project
    const newProjectFormDOM = document.createElement("form");
    // Input field
    const newProjectNameInputDOM = document.createElement("input");
    newProjectNameInputDOM.setAttribute("type", "text");
    newProjectNameInputDOM.setAttribute("placeholder", "New Project Name Here");
    // Submit button
    const newProjectSubmitBtnDOM = document.createElement("input");
    newProjectSubmitBtnDOM.classList.add("btn");
    newProjectSubmitBtnDOM.classList.add("btn-add-project-form");
    newProjectSubmitBtnDOM.type = "submit";
    newProjectSubmitBtnDOM.value = "Add Project";
    // Cancel button
    const newProjectCancelBtnDOM = document.createElement("input");
    newProjectCancelBtnDOM.type = "button";
    newProjectCancelBtnDOM.value = "Cancel";
    newProjectCancelBtnDOM.classList.add("btn");
    newProjectCancelBtnDOM.classList.add("btn-add-project-form");
    newProjectCancelBtnDOM.addEventListener("click", () => {
        newProjectFormDOM.style.display = "none";
        // Enable the add project button
        const addProjectBtnDOM = document.querySelector(".btn-add-project");
        addProjectBtnDOM.style.pointerEvents = "auto";
    });
    // Add event listener to submit button
    newProjectSubmitBtnDOM.addEventListener("click", () => {
        if (newProjectNameInputDOM.value !== "") {
            const newProjectName = newProjectNameInputDOM.value;
            new Project(newProjectName);
        }
        else {
            alert("Please enter a valid project name.");
        }


    });
    newProjectFormDOM.classList.add("new-project-form");

    newProjectFormDOM.appendChild(newProjectNameInputDOM);
    newProjectFormDOM.appendChild(newProjectSubmitBtnDOM);
    newProjectFormDOM.appendChild(newProjectCancelBtnDOM);
    return newProjectFormDOM;
}

function removeProjectFormDOM(selectedProjectID) {
    Project.removeProject(selectedProjectID);
}



export {
    newProjectFormDOM,
    projectInfoDOM,
    removeProjectFormDOM,
    projectList
}
