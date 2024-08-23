import TodoItem from "../logic/todos";
import EditIcon from "../icons/pencil.svg";


function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto'; // Reset height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
}

// Show description of todo
function displayDescription(todoItemDescriptionDOM, editingState) {
    todoItemDescriptionDOM.style.display = todoItemDescriptionDOM.style.display === "none" ? "block" : "none";
    adjustTextareaHeight(todoItemDescriptionDOM);
    // Disable editing if not in editing mode
    if (editingState != true)
        todoItemDescriptionDOM.style.pointerEvents = "none";
}

function todoInfoDetailsForm(todo, todoItemDOM) {
    // Get form element
    const form = document.createElement('form');

    // Input field for task name
    //const todoNameInput = document.createElement('input');
    const todoNameInput = todoItemDOM.querySelector(".todo-item-name");
    const todoNameInputNew = document.createElement('input');
    todoNameInputNew.setAttribute('type', 'text');
    todoNameInputNew.setAttribute('name', 'todoName');
    todoNameInputNew.setAttribute('required', '');
    todoNameInputNew.value = todo.title;
    //todoNameInput.removeAttribute("readonly");
    todoNameInputNew.classList.add('todo-item-name');
    todoNameInput.replaceWith(todoNameInputNew);


    // Input field for task description
    const todoDescriptionInput = todoItemDOM.querySelector(".todo-item-description");
    todoDescriptionInput.style.display = 'block';
    todoDescriptionInput.style.pointerEvents = 'auto';
    adjustTextareaHeight(todoDescriptionInput);
    todoDescriptionInput.addEventListener("input", () => {
        adjustTextareaHeight(todoDescriptionInput);
    });
    todoDescriptionInput.classList.add("todo-item-description");


    // Priority input
    const priorityInput = document.createElement("select");
    const priorityOptions = [('0', "None"), ('1', "Needed"), ('2', "Important"), ('3', "Urgent")].map((priorityText, priorityValue) => {
        const option = document.createElement('option');
        option.textContent = priorityText;
        option.value = priorityValue;
        return option;
    });
    // Hide the priority shown
    const priorityDOM = todoItemDOM.querySelector(".todo-item-priority");
    priorityDOM.style.display = 'none';

    // View the priority input
    priorityInput.append(...priorityOptions);
    priorityInput.classList.add("todo-item-priority");
    priorityInput.value = todo.priority;
    todoItemDOM.appendChild(priorityInput);

    // Convert Date object to datetime-local format
    const convertToDateTimeLocalString = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");


        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'datetime-local');
    dueDateInput.value = convertToDateTimeLocalString(todo.dueDate);
    dueDateInput.setAttribute('name', 'todoDueDate');

    // Hide the due date info
    const dueDateDOM = todoItemDOM.querySelector(".todo-item-due");
    dueDateDOM.style.display = 'none';

    // View the due date input
    dueDateInput.classList.add('.todo-item-due');
    todoItemDOM.appendChild(dueDateInput);

    // Submit button
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Confirm');
    submitButton.addEventListener('click', function () {
        todo.title = todoNameInputNew.value;
        todoNameInputNew.setAttribute('readonly', '');

        todo.description = todoDescriptionInput.value;
        todoDescriptionInput.style.pointerEvents = 'none';
        todo.dueDate = new Date(dueDateInput.value);
        todo.priority = parseInt(priorityInput.value);

        // Enable listeners for todo name
        const btnEditTodoDOM = todoItemDOM.querySelector('.btn-todo-edit');
        const editingState = btnEditTodoDOM.classList.contains("editing");
        todoNameInputNew.addEventListener('click', (event) => { displayDescription(todoDescriptionInput, editingState) });

        // Remove priority input
        priorityInput.remove();
        // Enable priority view
        priorityDOM.style.display = 'flex';

        // Remove due date input
        dueDateInput.remove();
        // Enable due date view
        dueDateDOM.style.display = 'flex';
    });
    form.appendChild(submitButton);

    // Cancel button
    const cancelButton = document.createElement('input');
    cancelButton.setAttribute('type', 'submit');
    cancelButton.setAttribute('value', 'Cancel');
    cancelButton.addEventListener('click', function () {
        todoNameInputNew.setAttribute('readonly', '');
        todoNameInputNew.value = todo.title;
        todoDescriptionInput.style.pointerEvents = 'none';
        todoDescriptionInput.value = todo.description;

        // Enable listeners for todo name
        const btnEditTodoDOM = todoItemDOM.querySelector('.btn-todo-edit');
        const editingState = btnEditTodoDOM.classList.contains("editing");
        todoNameInputNew.addEventListener('click', (event) => { displayDescription(todoDescriptionInput, editingState) });
        // Remove priority input
        priorityInput.remove();
        // Enable priority view
        priorityDOM.style.display = 'flex';

        // Remove due date input
        dueDateInput.remove();
        // Enable due date view
        dueDateDOM.style.display = 'flex';
        // Hide form
        form.remove();

        // Disable edit mode
        btnEditTodoDOM.classList.toggle("editing");
    });
    form.appendChild(cancelButton);
    return form;

}

function todoInfo(todo) {
    const todoItemDOM = document.createElement("li");

    // Item info
    // Name
    let todoItemNameDOM = document.createElement("input");
    todoItemNameDOM.setAttribute('readonly', '');
    todoItemNameDOM.setAttribute('type', 'text');
    todoItemNameDOM.value = todo.title;
    todoItemNameDOM.classList.add("todo-item-name");


    // Priority
    let todoItemPriorityDOM = document.createElement("div");
    todoItemPriorityDOM.classList.add("todo-item-priority");

    function displayPriority(priority) {
        let todoItemPriorityIconDOM = document.createElement("div");
        todoItemPriorityIconDOM.classList.add("todo-item-priority-icon");
        let todoItemPriorityTextDOM = document.createElement("div");
        todoItemPriorityTextDOM.classList.add("todo-item-priority-text");

        switch (priority) {
            case 0:
                todoItemPriorityIconDOM.classList.add("priority-none");
                todoItemPriorityTextDOM.textContent = "None";
                break;
            case 1:
                todoItemPriorityIconDOM.classList.add("priority-needed");
                todoItemPriorityTextDOM.textContent = "Needed";
                break;
            case 2:
                todoItemPriorityIconDOM.classList.add("priority-important");
                todoItemPriorityTextDOM.textContent = "Important";
                break;
            case 3:
                todoItemPriorityIconDOM.classList.add("priority-urgent");
                todoItemPriorityTextDOM.textContent = "Urgent";
                break;
        }

        todoItemPriorityDOM.appendChild(todoItemPriorityIconDOM);
        todoItemPriorityDOM.appendChild(todoItemPriorityTextDOM);
    }
    displayPriority(todo.priority);


    // Due time
    let todoItemDueDOM = document.createElement("div");
    todoItemDueDOM.classList.add("todo-item-due");

    // Date
    let todoItemDueDateDOM = document.createElement("div");
    todoItemDueDateDOM.textContent = `${todo.dueDate.toISOString().split('T')[0]}`;
    todoItemDueDateDOM.classList.add("todo-item-due-date");
    // Time
    let todoItemDueTimeDOM = document.createElement("div");
    todoItemDueTimeDOM.textContent = todo.dueDate.toLocaleTimeString();
    todoItemDueTimeDOM.classList.add("todo-item-due-time");

    todoItemDueDOM.appendChild(todoItemDueDateDOM);
    todoItemDueDOM.appendChild(todoItemDueTimeDOM);

    // Checkbox
    const todoItemCheckboxDOM = document.createElement("input");
    todoItemCheckboxDOM.type = "checkbox";
    todoItemCheckboxDOM.checked = todo.isDone;
    todoItemCheckboxDOM.classList.add("todo-item-checkbox");
    todoItemCheckboxDOM.addEventListener("change", () => {
        todo.toggleCompletion();
    });

    // Description

    let todoItemDescriptionDOM = document.createElement("textarea");
    todoItemDescriptionDOM.textContent = todo.description;
    adjustTextareaHeight(todoItemDescriptionDOM);
    todoItemDescriptionDOM.addEventListener("input", () => {
        adjustTextareaHeight(todoItemDescriptionDOM);
    });

    todoItemDescriptionDOM.classList.add("todo-item-description");
    todoItemDescriptionDOM.style.display = "none";


    // Add elements to the todo item
    todoItemDOM.appendChild(todoItemCheckboxDOM);
    todoItemDOM.appendChild(todoItemNameDOM);
    todoItemDOM.appendChild(todoItemPriorityDOM);
    todoItemDOM.appendChild(todoItemDueDOM);
    todoItemDOM.appendChild(todoItemDescriptionDOM);




    // Edit button
    const todoItemEditBtn = document.createElement("img");
    todoItemEditBtn.src = EditIcon;
    todoItemEditBtn.classList.add("btn-todo-edit");
    todoItemDOM.appendChild(todoItemEditBtn);

    // Edit todo item on click on edit button
    todoItemEditBtn.addEventListener("click", () => {
        if (todoItemEditBtn.classList.contains("editing") == false) {
            const todoInfoForm = todoInfoDetailsForm(todo, todoItemDOM);
            // Toggle edit mode - prevent duplicate forms
            todoItemEditBtn.classList.toggle("editing");
            todoInfoForm.addEventListener("submit", (e) => {
                todoItemDOM.removeChild(todoInfoForm);
                // Renew the item details on submit
                todoItemNameDOM.textContent = todo.title;
                todoItemNameDOM.setAttribute("readonly", '');
                // Show description on clicking the todo item name
                const editingState = todoItemEditBtn.classList.contains("editing");
                todoItemNameDOM.addEventListener('click', (event) => { displayDescription(todoItemDescriptionDOM, editingState) });

                todoItemPriorityDOM.innerHTML = "";
                displayPriority(todo.priority);

                todoItemDueDateDOM.textContent = `${todo.dueDate.toISOString().split('T')[0]}`;
                todoItemDueTimeDOM.textContent = todo.dueDate.toLocaleTimeString();

                todoItemDescriptionDOM.textContent = todo.description;
                // Disable edit mode
                todoItemEditBtn.classList.toggle("editing");
            });
            todoItemDOM.appendChild(todoInfoForm);
        }

    });

    // Show description on clicking the todo item name
    const editingState = todoItemEditBtn.classList.contains("editing");
    todoItemNameDOM.addEventListener('click', (event) => { displayDescription(todoItemDescriptionDOM, editingState) });

    return todoItemDOM;
}



function newTodoForm(project) {
    // Get form element
    const form = document.createElement('form');
    form.classList.add('new-todo-form');

    // Input field for task name
    const todoNameInput = document.createElement('input');
    todoNameInput.setAttribute('type', 'text');
    todoNameInput.setAttribute('name', 'todoName');
    todoNameInput.setAttribute('required', '');
    todoNameInput.setAttribute('placeholder', 'New task name');
    const todoNameInputLabel = document.createElement('label');
    todoNameInputLabel.textContent = 'Task Name: ';
    todoNameInputLabel.setAttribute('for', 'todoName');
    form.appendChild(todoNameInputLabel);
    form.appendChild(todoNameInput);

    // Input field for task description
    const todoDescriptionInput = document.createElement('textarea');
    todoDescriptionInput.setAttribute('placeholder', 'Description');
    todoDescriptionInput.setAttribute('name', 'todoDescription');
    const todoDescriptionInputLabel = document.createElement('label');
    todoDescriptionInputLabel.textContent = 'Description: ';
    todoDescriptionInputLabel.setAttribute('for', 'todoDescription');
    form.appendChild(todoDescriptionInputLabel);
    form.appendChild(todoDescriptionInput);

    // Priority input
    const priorityInput = document.createElement('select');
    const priorityOptions = [('0', "None"), ('1', "Needed"), ('2', "Important"), ('3', "Urgent")].map((priorityText, priorityValue) => {
        const option = document.createElement('option');
        option.textContent = priorityText;
        option.value = priorityValue;
        return option;
    });
    priorityInput.append(...priorityOptions);
    const priorityInputLabel = document.createElement('label');
    priorityInputLabel.textContent = 'Priority: ';
    priorityInputLabel.setAttribute('for', 'todoPriority');
    form.appendChild(priorityInputLabel);
    form.appendChild(priorityInput);

    // Due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'datetime-local');
    dueDateInput.setAttribute('placeholder', 'Due date');
    dueDateInput.setAttribute('name', 'todoDueDate');
    // Set default value (e.g., current date and time)
    const currentDate = new Date().toISOString().slice(0, 16);
    dueDateInput.setAttribute('value', currentDate);

    // Set minimum value (e.g., today's date and time)
    const minDate = new Date().toISOString().slice(0, 16);
    dueDateInput.setAttribute('min', minDate);

    dueDateInput.setAttribute('required', true); // Adding the 'required' attribute for HTML5 form validation

    const dueDateInputLabel = document.createElement('label');
    dueDateInputLabel.textContent = 'Due Date: ';
    dueDateInputLabel.setAttribute('for', 'todoDueDate');
    form.appendChild(dueDateInputLabel);
    form.appendChild(dueDateInput);



    // Submit button
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Add Task';
    submitButton.addEventListener('click', function (e) {
        if (!todoNameInput.value) {
            alert('Task name is required');
            e.preventDefault();
        }
        else if (!dueDateInput.value) {
            alert('Due date is required');
            e.preventDefault();
        }
        else {
            const todoName = todoNameInput.value;
            const todoDescription = todoDescriptionInput.value;
            const todoDueDate = new Date(dueDateInput.value);
            const todoPriority = parseInt(priorityInput.value);
            const newTodo = new TodoItem(todoName, todoDescription, todoDueDate, todoPriority);


            project.addTodo(newTodo);
            // if (project.addTodo(newTodo)) {
            //     // Clear form inputs
            //     todoNameInput.value = '';
            //     todoDescriptionInput.value = '';
            //     dueDateInput.value = '';
            //     priorityInput.value = '';
            // }
        }

    });
    form.appendChild(submitButton);

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.type = 'cancel';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', function () {
        todoNameInput.value = '';
        todoDescriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = '';
        form.remove();
    });
    form.appendChild(cancelButton);

    return form;
}

export {
    newTodoForm,
    todoInfo,
    todoInfoDetailsForm,
}