
import { projectInfoDOM, projectList, newProjectFormDOM, removeProjectFormDOM } from './DOMLogic/projects.js';
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
const projectToolsDOM = document.createElement("div");
projectToolsDOM.classList.add("project-tools");
const addProjectBtnDOM = document.createElement("button");
addProjectBtnDOM.classList.add("btn");
addProjectBtnDOM.classList.add("btn-add-project");
addProjectBtnDOM.textContent = "+ New Project";
projectToolsDOM.appendChild(addProjectBtnDOM);

// sidebar - remove project button
const removeProjectDOM = document.createElement("div");
removeProjectDOM.classList.add("project-remove");
const removeProjectBtnDOM = document.createElement("button");
removeProjectBtnDOM.classList.add("btn");
removeProjectBtnDOM.classList.add("btn-remove-project");
removeProjectBtnDOM.textContent = "- Remove Project";
// remove button only appears when a project is selected
projectToolsDOM.appendChild(removeProjectBtnDOM);



let projectListDOM = document.createElement("div");

// Listener for add project button
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
        projectToolsDOM.removeChild(projectFormDOM);
        // Enable the add project button
        addProjectBtnDOM.style.pointerEvents = "auto";
    });

    // Append the form to the sidebar 
    projectToolsDOM.appendChild(projectFormDOM);

    // Disable the add project button until the form is submitted
    addProjectBtnDOM.style.pointerEvents = "none";


});

// Listener for the remove project button  
removeProjectBtnDOM.addEventListener("click", () => {
    // Remove selected project
    const selectedProjectDOM = document.querySelector(".project-selected");
    if (selectedProjectDOM !== null) {
        const selectedProjectID = selectedProjectDOM.getAttribute("id");
        if (confirm("Delete selected project?") == true) {
            removeProjectFormDOM(selectedProjectID);
        }
        
        // Re-render the project list
        projectListDOM.innerHTML = "";
        sidebarDOM.removeChild(projectListDOM);
        projectListDOM = renderProjectList(projectList);
        projectListDOM.classList.add("project-list");
        sidebarDOM.appendChild(projectListDOM);
    }
    else {
        alert("No project selected.");
    }
});

sidebarDOM.appendChild(projectToolsDOM);

// sidebar - project list
projectListDOM = renderProjectList(projectList);
projectListDOM.classList.add("project-list");
sidebarDOM.appendChild(projectListDOM);
document.body.appendChild(sidebarDOM);

function renderProjectList(projectList) {
    const projectListDOM = document.createElement("div");
    let index = 0;
    projectList.forEach((p) => {
        const projectDOM = document.createElement("div");
        projectDOM.classList.add("project");
        // ID for removing project
        projectDOM.setAttribute("id", index);
        index++;
        // Project name appears in sidebar
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



