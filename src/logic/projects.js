import TodoItem from "./todos";

export default class Project {
    static projectList = [];
    constructor(name = "Project Name", todos = []) {
        this.name = name;
        this.todos = todos;
        Project.projectList.push(this);
    }

    static removeProject(project) {
        Project.projectList = Project.projectList.filter((item) => item!== project);
    }

    static removeProject(index) {
        Project.projectList.splice(index, 1);
    }
    
    addTodo(todoItem) {
        if (todoItem instanceof TodoItem) {
            this.todos.push(todoItem);
            return true;
        } 
        else {
            throw new Error("Invalid todo item provided. Please provide an instance of TodoItem.");
        }
    }

    getTodo(index) {
        return this.todos[index];
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    removeTodo(todo) {
        this.todos = this.todos.filter((item) => item!== todo);
    }



    updateTodo(todoItem, index) { 
        if (this.todos[index] instanceof TodoItem) {
            this.todos[index] = todoItem;
        } else {
            throw new Error("Invalid todo item provided or index out of bounds.");
        }
    }

    showAllTodos() {
        return this.todos.map((todo) => {
            return todo.toString();
        }).join('\n');
    }

}