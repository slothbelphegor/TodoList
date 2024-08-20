import TodoItem from "../logic/todos";

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
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '3');
    priorityInput.value = todo.priority;
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
    let todoItemTextDOM = document.createElement("div");
    todoItemTextDOM.textContent = todo.toString();

    // Checkbox
    const todoItemCheckboxDOM = document.createElement("input");
    todoItemCheckboxDOM.type = "checkbox";
    todoItemCheckboxDOM.checked = todo.isDone;
    todoItemCheckboxDOM.addEventListener("change", () => {
        todo.toggleCompletion();
    });


    todoItemDOM.appendChild(todoItemCheckboxDOM);
    todoItemDOM.appendChild(todoItemTextDOM);

    // Edit todo item on click on item info
    todoItemTextDOM.addEventListener("click", () => {
        const todoInfoForm = todoInfoDetailsForm(todo);
        todoInfoForm.addEventListener("submit", (e) => {
            todoItemDOM.removeChild(todoInfoForm);
            todoItemTextDOM.textContent = todo.toString();
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
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'number');
    priorityInput.setAttribute('min', '1');
    priorityInput.setAttribute('max', '3');
    priorityInput.setAttribute('placeholder', 'Priority (1-3)');
    priorityInput.setAttribute('name', 'todoPriority');
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