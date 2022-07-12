import Task from './task';
import List from './list';

let allTasks = [];
let lists = [new List('All'), new List('Today')];

const createBtn = document.getElementById('addtask');
const popupForm = document.getElementById('popup-form');
const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('desc');
const dueDate = document.getElementById('duedate');
const priority = document.getElementById('priority');
const taskList = document.getElementById('tasklist');
const todayBtn = document.getElementById('Today');
const listTitle = document.getElementById('list-title');
const addBtn = document.getElementById('addbtn');
const allBtn = document.getElementById('All');
const listPopupForm = document.getElementById('list-popup');
const listTextBox = document.getElementById('list-create');
const projectList = document.getElementById('project-list');

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
    // adds a list to the page
    function addList(event) {
        event.preventDefault();
        console.log(lists);
        const list = createList();
        lists.push(list);
        listTextBox.value = '';
        clearLists();
        displayLists();
    }
    // removes lists from dom
    function clearLists() {
        projectList.innerHTML = '';
    }
    // creates our button for each of our lists
    function displayLists() {
        listPopupForm.style.display = 'none';
        addBtn.style.display = 'flex';
        for (let i = 2; i < lists.length; i++) {
            let listBtn = document.createElement('button');
            listBtn.setAttribute('id', (lists[i].title.toLowerCase()) + 'btn');
            listBtn.textContent = lists[i].title;
            projectList.appendChild(listBtn);
        }
    }
    // adds a task to our task list
    function addToTasks(task, activePage) {
        
        allTasks.push(task);
    }
    // contains all of the styling for our task cards
    function styleCard(task) {
        const taskDiv = document.createElement('div');
        if (task.priority == 'High') {
            taskDiv.style.backgroundColor = '#E85B5B';
        } else if (task.priority == 'Medium') {
            taskDiv.style.backgroundColor = '#E8C45B'; 
        } else {
            taskDiv.style.backgroundColor = '#5BE864';
        }
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
        cardTop.innerHTML = task.getTitle().toUpperCase() + '\t\t' + task.getDate();
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
    // add a task to the page
    function addTask(event) {
        event.preventDefault();
        const task = createTask();
        addToTasks(task);
        clearTasks();
        displayAllTasks();
        clearInputs();
    }
    // resets the inputs for the form
    function clearInputs() {
        title.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = 'Low';
    }
    // clears all of the tasks from the dom
    function clearTasks() {
        taskList.innerHTML = '';
    }

    // need to determine which list we are looking at


    createBtn.addEventListener('click', infoPopup);
    popupForm.addEventListener('submit', addTask);
    addBtn.addEventListener('click', listFormPopup);
    listPopupForm.addEventListener('submit', addList);
})();