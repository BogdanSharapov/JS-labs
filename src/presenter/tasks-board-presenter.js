import TasksListComponent from '../view/tasks-list-component.js';
import TaskComponent from '../view/task-component.js';
import TaskBoardComponent from '../view/tasks-board-component.js';
import { render, RenderPosition } from '../framework/render.js';
import {Status, StatusLabel } from '../const.js';

export default class TasksBoardPresenter {
  tasksBoardComponent = new TaskBoardComponent()
  taskListComponent = new TasksListComponent("");


  constructor({ boardContainer, tasksModel }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }


  init() {
    this.boardTasks = [...this.tasksModel.getTasks()];

    render(this.tasksBoardComponent, this.boardContainer);
    function getTasksByStatus(task){
      currentModel = tasksModel.getTasks
      
      return task = tasks.status(); 
    };
    const filteredTasks = 
    for (let i = 0; i < 4; i++) {

      const taskListComponent = new TasksListComponent();
      render(tasksListComponent, this.tasksBoardComponent.getElement());

      for (let j = 0; j<this.boardTasks.length;j++)
      {
        const taskComponent = new TaskComponent({})
      }

      /*let currentStatus = Status.BA
      CKLOG;
      switch (i) {
        case 1:
          currentStatus = Status.PROCESSING;

          break;
        case 2:
          currentStatus = Status.DONE;
          break;
        case 3:
          currentStatus = Status.BASKET;
          break;

        default:
          currentStatus = Status.BACKLOG;
          break;*/
      }

      console.log("currentStatus = " + currentStatus);
      const tasksListComponent = new TasksListComponent(currentStatus);
      render(tasksListComponent, this.tasksBoardComponent.getElement());
      
      for (let j = 0; j < this.boardTasks.length; j++) {
        const taskStatus = this.boardTasks[j].status;
        if (taskStatus == currentStatus)
        {
          console.log(taskStatus +" == " + currentStatus);

          const taskComponent = new TaskComponent({ task: this.boardTasks[j] });
          render(taskComponent, tasksListComponent.getElement());
        }      
      }
    }

  }
}
