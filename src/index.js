
import { projectInfoDOM, projectList, newProjectFormDOM } from './DOMLogic/projects.js';
import './style.css';

// header
const headerDOM = document.createElement("h1");
headerDOM.classList.add("header");
headerDOM.textContent = "Todo List";
document.body.appendChild(headerDOM);

// sidebar
const sidebarDOM = document.createElement("div");
sidebarDOM.classList.add("sidebar");

// main content
const mainContentDOM = document.createElement("div");
mainContentDOM.classList.add("main-content");
document.body.appendChild(mainContentDOM);



// sidebar - add project button
const addProjectDOM = document.createElement("div");
addProjectDOM.classList.add("project-add");
const addProjectBtnDOM = document.createElement("button");
addProjectBtnDOM.classList.add("btn");
addProjectBtnDOM.classList.add("btn-add-project");
addProjectBtnDOM.textContent = "+ New Project";
addProjectDOM.appendChild(addProjectBtnDOM);

// sidebar - remove project button

const removeProjectDOM = document.createElement("div");
removeProjectDOM.classList.add("project-remove");
const removeProjectBtnDOM = document.createElement("button");
removeProjectBtnDOM.classList.add("btn");
removeProjectBtnDOM.classList.add("btn-remove-project");

let projectListDOM = document.createElement("div");
addProjectBtnDOM.addEventListener("click", () => {
    // Create a form for the new project
    const projectFormDOM = newProjectFormDOM();
    projectFormDOM.classList.add("form")
    projectFormDOM.classList.add("form-new-project");

    // Re-render the project list on submit
    projectFormDOM.addEventListener("submit", (e) => {
        projectListDOM.innerHTML = "";
        sidebarDOM.removeChild(projectListDOM);
        projectListDOM = renderProjectList(projectList);
        projectListDOM.classList.add("project-list");
        sidebarDOM.appendChild(projectListDOM);
        addProjectDOM.removeChild(projectFormDOM);
        // Enable the add project button
        addProjectBtnDOM.style.pointerEvents = "auto";  
    });

    // Append the form to the sidebar 
    addProjectDOM.appendChild(projectFormDOM);

    // Disable the add project button until the form is submitted
    addProjectBtnDOM.style.pointerEvents = "none";  


});
sidebarDOM.appendChild(addProjectDOM);

// sidebar - project list
projectListDOM = renderProjectList(projectList);
projectListDOM.classList.add("project-list");
sidebarDOM.appendChild(projectListDOM);
document.body.appendChild(sidebarDOM);

function renderProjectList(projectList) {
    const projectListDOM = document.createElement("div");
    projectList.forEach((p) => {
        const projectDOM = document.createElement("div");
        projectDOM.classList.add("project");

        const projectNameDOM = document.createElement("h3");
        projectDOM.classList.add("project-name");
        projectNameDOM.textContent = p.name;

        // Enable active state of project
        projectDOM.addEventListener("click", () => {
            const projectListDOM = document.querySelectorAll(".project");
            projectListDOM.forEach((projectDOMInside) => {
                projectDOMInside.classList.remove("project-selected");
            });
            projectDOM.classList.add("project-selected");
        });

        // List of Todo Items: consists of item info and a checkbox
        projectNameDOM.addEventListener("click", () => {
            mainContentDOM.innerHTML = "";
            mainContentDOM.appendChild(projectInfoDOM(p));
        })

        projectDOM.appendChild(projectNameDOM);
        projectListDOM.appendChild(projectDOM);
    });
    return projectListDOM;
}



