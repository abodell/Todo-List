import Task from './task';

const createBtn = document.getElementById('addtask');
const popupForm = document.getElementById('popup-form');
const content = document.getElementById('content');

// will handle all of the operations on our page
export const operationHandler = (() => {
    // activate our form to popup when the user clicks the add task button
    function infoPopup() {
        popupForm.style.display = 'flex';
        content.style.filter = 'opacity(5%)';
        content.style.filter = 'blur(10px)';
    }

    // create a new Task object when the form is submitted    

    createBtn.addEventListener('click', infoPopup);
})();