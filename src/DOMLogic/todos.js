import TodoItem from "../logic/todos";
import EditIcon from "../icons/pencil.svg";


function todoInfoDetailsForm(todo) {
    // Get form element
    const form = document.createElement('form');

    // Input field for task name
    const todoNameInput = document.createElement('input');
    todoNameInput.setAttribute('type', 'text');
    todoNameInput.setAttribute('name', 'todoName');
    todoNameInput.value = todo.title;
    const todoNameInputLabel = document.createElement('label');
    todoNameInputLabel.textContent = 'Task Name: ';
    todoNameInputLabel.setAttribute('for', 'todoName');
    form.appendChild(todoNameInputLabel);
    form.appendChild(todoNameInput);

    // Input field for task description
    const todoDescriptionInput = document.createElement('textarea');
    todoDescriptionInput.value = todo.description;
    todoDescriptionInput.setAttribute('name', 'todoDescription');
    const todoDescriptionInputLabel = document.createElement('label');
    todoDescriptionInputLabel.textContent = 'Description: ';
    todoDescriptionInputLabel.setAttribute('for', 'todoDescription');
    form.appendChild(todoDescriptionInputLabel);
    form.appendChild(todoDescriptionInput);

    // Priority input
    // const priorityInput = document.createElement('input');
    // priorityInput.setAttribute('type', 'number');
    // priorityInput.setAttribute('min', '0');
    // priorityInput.setAttribute('max', '3');
    // priorityInput.value = todo.priority;
    const priorityInput = document.createElement('select');
    const priorityOptions = [('0',"None"),('1',"Needed"), ('2', "Important"), ('3', "Urgent")].map((priorityText, priorityValue) => {
        const option = document.createElement('option');
        option.textContent = priorityText;
        option.value = priorityValue;
        return option;
    });
    priorityInput.append(...priorityOptions);

    priorityInput.setAttribute('name', 'todoPriority');
    const priorityInputLabel = document.createElement('label');
    priorityInputLabel.textContent = 'Priority: ';
    priorityInputLabel.setAttribute('for', 'todoPriority');
    form.appendChild(priorityInputLabel);
    form.appendChild(priorityInput);

    // Due date input
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.value = todo.dueDate.toISOString().split('T')[0];
    dueDateInput.setAttribute('name', 'todoDueDate');
    const dueDateInputLabel = document.createElement('label');
    dueDateInputLabel.textContent = 'Due Date: ';
    dueDateInputLabel.setAttribute('for', 'todoDueDate');
    form.appendChild(dueDateInputLabel);
    form.appendChild(dueDateInput);

    // Submit button
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Confirm');
    submitButton.addEventListener('click', function () {
        todo.title = todoNameInput.value;
        todo.description = todoDescriptionInput.value;
        todo.dueDate = new Date(dueDateInput.value);
        todo.priority = parseInt(priorityInput.value);
    });
    form.appendChild(submitButton);

    return form;

}

function todoInfo(todo) {
    const todoItemDOM = document.createElement("li");

    // Item info
    let todoItemNameDOM = document.createElement("div");
    todoItemNameDOM.textContent = todo.title;
    todoItemNameDOM.classList.add("todo-item-name");

    let todoItemPriorityDOM = document.createElement("div");
    todoItemPriorityDOM.textContent = `Priority: ${todo.priority}`;
    todoItemPriorityDOM.classList.add("todo-item-priority");

    let todoItemDueDOM = document.createElement("div");
    todoItemDueDOM.classList.add("todo-item-due");

    let todoItemDueDateDOM = document.createElement("div");
    todoItemDueDateDOM.textContent = `${todo.dueDate.toISOString().split('T')[0]}`;
    todoItemDueDateDOM.classList.add("todo-item-due-date");

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


    todoItemDOM.appendChild(todoItemCheckboxDOM);
    todoItemDOM.appendChild(todoItemNameDOM);
    todoItemDOM.appendChild(todoItemPriorityDOM);
    todoItemDOM.appendChild(todoItemDueDOM);

    const todoItemEditBtn = document.createElement("img"); 
    todoItemEditBtn.src = EditIcon;
    todoItemEditBtn.classList.add("btn-todo-edit");
    todoItemDOM.appendChild(todoItemEditBtn);
    
    // Edit todo item on click on edit button
    todoItemEditBtn.addEventListener("click", () => {
        const todoInfoForm = todoInfoDetailsForm(todo);
        todoInfoForm.addEventListener("submit", (e) => {
            todoItemDOM.removeChild(todoInfoForm);
            todoItemNameDOM.textContent = todo.title;
            todoItemPriorityDOM.textContent = `Priority: ${todo.priority}`;
            todoItemDueDateDOM.textContent = `${todo.dueDate.toISOString().split('T')[0]}`;
            todoItemDueTimeDOM.textContent = todo.dueDate.toLocaleTimeString();
        });
        todoItemDOM.appendChild(todoInfoForm);
    });
    return todoItemDOM;
}



function newTodoForm(project) {
    // Get form element
    const form = document.createElement('form');


    // Input field for task name
    const todoNameInput = document.createElement('input');
    todoNameInput.setAttribute('type', 'text');
    todoNameInput.setAttribute('name', 'todoName');
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
    const priorityOptions = [('0',"None"),('1',"Needed"), ('2', "Important"), ('3', "Urgent")].map((priorityText, priorityValue) => {
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
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('placeholder', 'Due date');
    dueDateInput.setAttribute('name', 'todoDueDate');
    const dueDateInputLabel = document.createElement('label');
    dueDateInputLabel.textContent = 'Due Date: ';
    dueDateInputLabel.setAttribute('for', 'todoDueDate');
    form.appendChild(dueDateInputLabel);
    form.appendChild(dueDateInput);



    // Submit button
    const submitButton = document.createElement('input');
    submitButton.type ='submit';
    submitButton.value = 'Add Task';
    submitButton.addEventListener('click', function () {
        const todoName = todoNameInput.value;
        const todoDescription = todoDescriptionInput.value;
        const todoDueDate = new Date(dueDateInput.value);
        const todoPriority = parseInt(priorityInput.value);
        const newTodo = new TodoItem(todoName, todoDescription, todoDueDate, todoPriority);

        if (project.addTodo(newTodo)) {
            // Clear form inputs
            todoNameInput.value = '';
            todoDescriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = '';

            alert("Tasks added successfully");
        }
    });
    form.appendChild(submitButton);

    return form;
}

export {
    newTodoForm,
    todoInfo,
    todoInfoDetailsForm,
}