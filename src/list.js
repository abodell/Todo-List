class List {
    constructor(title) {
        this.title = title;
        this.tasks = [];
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

    removeTask(index) {
        this.tasks.splice(index,1);
    }

}

export default List;