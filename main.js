/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/logic/projects.js":
/*!*******************************!*\
  !*** ./src/logic/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/logic/todos.js");


class Project {
    constructor(name = "Project Name", todos = []) {
        this.name = name;
        this.todos = todos;
    }

    addTodo(todoItem) {
        if (todoItem instanceof _todos__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.todos.push(todoItem);
        } 
        else {
            throw new Error("Invalid todo item provided. Please provide an instance of TodoItem.");
        }
    }

    getTodo(index) {
        return this.todos[index];
    }

    removeTodo(index) {
        this.todos.splice(index, 1);
    }



    updateTodo(todoItem, index) { 
        if (this.todos[index] instanceof _todos__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            this.todos[index] = todoItem;
        } else {
            throw new Error("Invalid todo item provided or index out of bounds.");
        }
    }

}

/***/ }),

/***/ "./src/logic/todos.js":
/*!****************************!*\
  !*** ./src/logic/todos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoItem)
/* harmony export */ });
class TodoItem {
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



}

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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/projects.js */ "./src/logic/projects.js");
/* harmony import */ var _logic_todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/todos.js */ "./src/logic/todos.js");



const project = new _logic_projects_js__WEBPACK_IMPORTED_MODULE_0__["default"]("new project");

project.addTodo(new _logic_todos_js__WEBPACK_IMPORTED_MODULE_1__["default"]());



console.log(project);

project.addTodo(new _logic_todos_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
console.log(project);


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw4Q0FBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQVE7QUFDakQ7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4QztBQUNBLG9CQUFvQiwwREFBTztBQUMzQjtBQUNBLG9CQUFvQix1REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFRO0FBQzVCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvbGlzdC8uL3NyYy9sb2dpYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9Ub2RvbGlzdC8uL3NyYy9sb2dpYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9Ub2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi90b2Rvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJQcm9qZWN0IE5hbWVcIiwgdG9kb3MgPSBbXSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kb0l0ZW0pIHtcclxuICAgICAgICBpZiAodG9kb0l0ZW0gaW5zdGFuY2VvZiBUb2RvSXRlbSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kb0l0ZW0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9kbyBpdGVtIHByb3ZpZGVkLiBQbGVhc2UgcHJvdmlkZSBhbiBpbnN0YW5jZSBvZiBUb2RvSXRlbS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZG8oaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2Rvc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVG9kbyhpbmRleCkge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZVRvZG8odG9kb0l0ZW0sIGluZGV4KSB7IFxyXG4gICAgICAgIGlmICh0aGlzLnRvZG9zW2luZGV4XSBpbnN0YW5jZW9mIFRvZG9JdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9kb3NbaW5kZXhdID0gdG9kb0l0ZW07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2RvIGl0ZW0gcHJvdmlkZWQgb3IgaW5kZXggb3V0IG9mIGJvdW5kcy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJOZXcgVGFza1wiLCBkZXNjcmlwdGlvbiA9IFwiRGVzY3JpcHRpb25cIiwgZHVlRGF0ZSA9IG5ldyBEYXRlKCksIHByaW9yaXR5ID0gMSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIHNldCB0aXRsZSh2YWx1ZSkgeyBcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGl0bGUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSdzdHJpbmcnICYmIHZhbHVlLnRyaW0oKSE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVzY3JpcHRpb24gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdWUgZGF0ZSBtdXN0IGJlIGEgdmFsaWQgZGF0ZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICAgIH1cclxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID49IDEgJiYgdmFsdWUgPD0gMykge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUHJpb3JpdHkgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0RvbmUgPSF0aGlzLmlzRG9uZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9sb2dpYy9wcm9qZWN0cy5qcyc7XHJcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL2xvZ2ljL3RvZG9zLmpzJztcclxuXHJcbmNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChcIm5ldyBwcm9qZWN0XCIpO1xyXG5cclxucHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvSXRlbSgpKTtcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2cocHJvamVjdCk7XHJcblxyXG5wcm9qZWN0LmFkZFRvZG8obmV3IFRvZG9JdGVtKCkpO1xyXG5jb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==