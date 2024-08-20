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
        } else {
            throw new Error('Title must be a non-empty string.');
        }
    }

    get description() {
        return this._description;
    }
    set description(value) {
        if (typeof value ==='string' && value.trim()!== '') {
            this._description = value;
        } else {
            throw new Error('Description must be a non-empty string.');
        }
    }

    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        if (value instanceof Date &&!isNaN(value)) {
            this._dueDate = value;
        } else {
            throw new Error('Due date must be a valid date.');
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