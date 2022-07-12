/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"operationHandler\": () => (/* binding */ operationHandler)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\nlet tasks = [];\n\nconst createBtn = document.getElementById('addtask');\nconst popupForm = document.getElementById('popup-form');\nconst content = document.getElementById('content');\nconst title = document.getElementById('title');\nconst description = document.getElementById('desc');\nconst dueDate = document.getElementById('duedate');\nconst priority = document.getElementById('priority');\nconst taskList = document.getElementById('tasklist');\n\n// will handle all of the operations on our page\nconst operationHandler = (() => {\n    // activate our form to popup when the user clicks the add task button\n    function infoPopup() {\n        popupForm.style.display = 'flex';\n        content.style.filter = 'opacity(5%)';\n        content.style.filter = 'blur(10px)';\n    };\n\n    // Task factory\n    function createTask() {\n        const newTitle = title.value;\n        const newDesc = description.value;\n        const newDate = dueDate.value;\n        const newPriority = priority.value;\n        return new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTitle, newDesc, newDate, newPriority);\n    };\n\n    function addToList(task) {\n        tasks.push(task);\n    }\n    \n    function styleCard(task) {\n        const taskDiv = document.createElement('div');\n        const leftCard = document.createElement('div');\n        const cardTop = document.createElement('div');\n        const cardDesc = document.createElement('div');\n        const rightCard = document.createElement('div');\n        const removeBtn = document.createElement('button');\n        taskDiv.classList.add('task');\n        leftCard.classList.add('left-card');\n        cardTop.classList.add('card-top');\n        cardDesc.classList.add('card-desc');\n        rightCard.classList.add('right-card');\n        removeBtn.classList.add ('removebtn');\n        cardTop.innerHTML = task.getTitle() + '\\t' + task.getDate() + '\\t' + task.getPriority();\n        cardDesc.innerHTML = task.getDesc();\n        leftCard.appendChild(cardTop);\n        leftCard.appendChild(cardDesc);\n        taskDiv.appendChild(leftCard);\n        removeBtn.textContent = 'Remove';\n        rightCard.appendChild(removeBtn);\n        taskDiv.appendChild(removeBtn);\n        taskList.appendChild(taskDiv);\n    }\n\n    function displayTasks() {\n        popupForm.style.display = 'none';\n        content.style.filter = 'none';\n        for (let i = 0; i < tasks.length; i++) {\n            styleCard(tasks[i]);\n        }\n    }\n\n    function addTask(event) {\n        event.preventDefault();\n        const task = createTask();\n        addToList(task);\n        clearTasks();\n        displayTasks();\n    }\n\n    function clearTasks() {\n        taskList.innerHTML = '';\n    }\n\n    createBtn.addEventListener('click', infoPopup);\n    popupForm.addEventListener('submit', addTask);\n})();\n\n/*<div class = 'task'>\n    <div class=\"left-card\">\n        <div class = 'card-top'>\n            Title\n            Due Date\n            Priority\n        </div>\n        <div class = 'card-desc'>\n            asdfghjklqwertyuiopzxcvbn\n        </div>\n    </div>\n    <div class = 'right-card'>\n        <button type = 'button' class = 'removebtn'>Remove</button>\n    </div>\n</div>*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, date, priority) {\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n    }\n\n    setTitle(title) {\n        this.title = title;\n    }\n\n    getTitle() {\n        return this.title;\n    }\n\n    setDesc(description) {\n        this.description = description;\n    }\n\n    getDesc() {\n        return this.description;\n    }\n\n    setPriority(priority) {\n        this.priority = priority;\n    }\n\n    getPriority() {\n        return this.priority;\n    }\n\n    setDate(date) {\n        this.date = date;\n    }\n\n    getDate() {\n        return this.date;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;