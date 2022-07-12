class List {
    constructor(title, tasks) {
        this.title = title;
        this.tasks = tasks;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }

}

export default List;