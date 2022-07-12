import Task from './task';

let tasks = [];

const createBtn = document.getElementById('addtask');
const popupForm = document.getElementById('popup-form');
const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('desc');
const dueDate = document.getElementById('duedate');
const priority = document.getElementById('priority');
const taskList = document.getElementById('tasklist');

// will handle all of the operations on our page
export const operationHandler = (() => {
    // activate our form to popup when the user clicks the add task button
    function infoPopup() {
        popupForm.style.display = 'flex';
        content.style.filter = 'opacity(5%)';
        content.style.filter = 'blur(10px)';
    };

    // Task factory
    function createTask() {
        const newTitle = title.value;
        const newDesc = description.value;
        const newDate = dueDate.value;
        const newPriority = priority.value;
        return new Task(newTitle, newDesc, newDate, newPriority);
    };

    function addToList(task) {
        tasks.push(task);
    }
    
    function styleCard(task) {
        const taskDiv = document.createElement('div');
        const leftCard = document.createElement('div');
        const cardTop = document.createElement('div');
        const cardDesc = document.createElement('div');
        const rightCard = document.createElement('div');
        const removeBtn = document.createElement('button');
        taskDiv.classList.add('task');
        leftCard.classList.add('left-card');
        cardTop.classList.add('card-top');
        cardDesc.classList.add('card-desc');
        rightCard.classList.add('right-card');
        removeBtn.classList.add ('removebtn');
        cardTop.innerHTML = task.getTitle() + '\t' + task.getDate() + '\t' + task.getPriority();
        cardDesc.innerHTML = task.getDesc();
        leftCard.appendChild(cardTop);
        leftCard.appendChild(cardDesc);
        taskDiv.appendChild(leftCard);
        removeBtn.textContent = 'Remove';
        rightCard.appendChild(removeBtn);
        taskDiv.appendChild(removeBtn);
        taskList.appendChild(taskDiv);
    }

    function displayTasks() {
        popupForm.style.display = 'none';
        content.style.filter = 'none';
        for (let i = 0; i < tasks.length; i++) {
            styleCard(tasks[i]);
        }
    }

    function addTask(event) {
        event.preventDefault();
        const task = createTask();
        addToList(task);
        clearTasks();
        displayTasks();
    }

    function clearTasks() {
        taskList.innerHTML = '';
    }

    createBtn.addEventListener('click', infoPopup);
    popupForm.addEventListener('submit', addTask);
})();

/*<div class = 'task'>
    <div class="left-card">
        <div class = 'card-top'>
            Title
            Due Date
            Priority
        </div>
        <div class = 'card-desc'>
            asdfghjklqwertyuiopzxcvbn
        </div>
    </div>
    <div class = 'right-card'>
        <button type = 'button' class = 'removebtn'>Remove</button>
    </div>
</div>*/