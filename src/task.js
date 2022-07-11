class Task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setDesc(description) {
        this.description = description;
    }

    getDesc() {
        return this.description;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getPriority() {
        return this.priority;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }
}

export default Task;