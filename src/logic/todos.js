export default class TodoItem {
    constructor(title = "New Task", description = "Description", dueDate = new Date(), priority = 1) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }
    
    get title() {
        return this._title;
    }
    set title(value) { 
        if (typeof value ==='string' && value.trim()!== '') {
            this._title = value;
        } 
    }

    get description() {
        return this._description;
    }
    set description(value) {
        if (typeof value ==='string' && value.trim()!== '') {
            this._description = value;
        } 
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        if (value instanceof Date &&!isNaN(value)) {
            this._dueDate = value;
        } 
    }

    get priority() {
        return this._priority;
    }
    set priority(value) {
            this._priority = value;
        
    }

    toggleCompletion() {
        this.isDone =!this.isDone;
    }

    toString() {
        return `${this.title} - Due Date: ${this.dueDate}, Priority ${this.priority}, Status: ${this.isDone? "Completed" : "Incomplete"}`
    }

}