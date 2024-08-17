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
        if (typeof value === 'number' && value >= 1 && value <= 3) {
            this._priority = value;
        } else {
            throw new Error('Priority must be a number between 1 and 3.');
        }
    }

    toggleCompletion() {
        this.isDone =!this.isDone;
    }

    toString() {
        return `${this.title} - Due Date: ${this.dueDate.toDateString()}, Priority ${this.priority}, Status: ${this.isDone? "Completed" : "Incomplete"}`
    }

}