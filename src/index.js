import Task from './task';
import List from './list';

let allTasks = [];

const createBtn = document.getElementById('addtask');
const popupForm = document.getElementById('popup-form');
const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('desc');
const dueDate = document.getElementById('duedate');
const priority = document.getElementById('priority');
const taskList = document.getElementById('tasklist');
const todayBtn = document.getElementById('todaybtn');
const listTitle = document.getElementById('list-title');
const addBtn = document.getElementById('addbtn');
const allBtn = document.getElementById('all');
const listPopupForm = document.getElementById('list-popup');
const listTextBox = document.getElementById('#list-create');

// will handle all of the operations on our page
export const operationHandler = (() => {
    // activate our form to popup when the user clicks the add task button
    function infoPopup() {
        popupForm.style.display = 'flex';
        content.style.filter = 'opacity(5%)';
        content.style.filter = 'blur(10px)';
    };
    // create our popup for when the user wants to create a new list
    function listFormPopup() {
        addBtn.style.display = 'none';
        listPopupForm.style.display = 'flex';
    }

    // Task factory
    function createTask() {
        const newTitle = title.value;
        const newDesc = description.value;
        const newDate = dueDate.value;
        const newPriority = priority.value;
        return new Task(newTitle, newDesc, newDate, newPriority);
    };

    // List Factory
    function createList() {
        const newTitle = listTextBox.value;
        return new List(newTitle);
    }

    function addToList(task) {
        allTasks.push(task);
    }
    
    function styleCard(task) {
        const taskDiv = document.createElement('div');
        const leftCard = document.createElement('div');
        const cardTop = document.createElement('div');
        const cardDesc = document.createElement('div');
        const rightCard = document.createElement('div');
        const removeBtn = document.createElement('button');
        removeBtn.addEventListener('click', removeTask);
        taskDiv.id = allTasks.indexOf(task);
        taskDiv.classList.add('task');
        leftCard.classList.add('left-card');
        cardTop.classList.add('card-top');
        cardDesc.classList.add('card-desc');
        rightCard.classList.add('right-card');
        removeBtn.classList.add ('removebtn');
        cardTop.innerHTML = task.getTitle().toUpperCase() + '\t' + task.getDate() + '\t' + task.getPriority();
        cardDesc.innerHTML = task.getDesc();
        leftCard.appendChild(cardTop);
        leftCard.appendChild(cardDesc);
        taskDiv.appendChild(leftCard);
        removeBtn.textContent = 'Remove';
        rightCard.appendChild(removeBtn);
        taskDiv.appendChild(removeBtn);
        taskList.appendChild(taskDiv);
    }

    function displayAllTasks() {
        popupForm.style.display = 'none';
        content.style.filter = 'none';
        for (let i = 0; i < allTasks.length; i++) {
            styleCard(allTasks[i]);
        }
    }

    function removeTask(event) {
        const task = allTasks[event.target.id];
        allTasks.splice(allTasks.indexOf(task), 1);
        clearTasks();
        displayAllTasks();
    }

    function addTask(event) {
        event.preventDefault();
        const task = createTask();
        addToList(task);
        clearTasks();
        displayAllTasks();
        clearInputs();
    }

    function clearInputs() {
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = 'Low';
    }

    function clearTasks() {
        taskList.innerHTML = '';
    }



    createBtn.addEventListener('click', infoPopup);
    popupForm.addEventListener('submit', addTask);
    addBtn.addEventListener('click', listFormPopup);
})();