import {createElement} from '../framework/render.js';


function createTaskListComponent(listName) {
    return (
        `<ul id="list_title">
                 <div id="${listName}_title">${listName}</div>
          </ul>`
      );
}


export default class TaskListComponent {
  constructor(listName) {
    this.listName = listName;
  }

  getTemplate() {
    return createTaskListComponent(this.listName);
  }

  

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
