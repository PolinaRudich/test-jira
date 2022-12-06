/** @format */

import { Reducer } from 'redux';
import {
  CLOSE_MODAL,
  CREATE_TASK,
  EDIT_TASK,
  OPEN_ADD_EDIT_TASK,
  OPEN_COMMENTS_MODAL,
  SET_CURRENT_PROJECT_TASKS,
  SET_FILTERED_ARRAY_TASKS,
} from '../store/interfaces';
import { TasksActions } from '../store/tasks.actions';

export interface TasksState {
  tasks: any[];
  currentProjectId: number;
  isEdit: boolean;
  isOpen: boolean;
  editingTask: any;
  indexInList: number;
  taskId: string;
  filteredTasks: any[];
  isOpenCommentsModal: boolean;
}

const initialState: TasksState = {
  tasks: [],
  currentProjectId: -1,
  isEdit: false,
  isOpen: false,
  editingTask: undefined,
  indexInList: -1,
  taskId: '',
  filteredTasks: [],
  isOpenCommentsModal: false,
};

export const TasksReducer: Reducer<TasksState | undefined, TasksActions> = (
  state: TasksState | undefined = initialState,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT_TASKS: {
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        tasks: action.tasks,
        currentProjectId: action.currentProjectId,
      };
    }
    case OPEN_ADD_EDIT_TASK: {
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        isEdit: action.isEdit,
        isOpen: action.isOpen,
        editingTask: action.editingTask,
        indexInList: action.indexInList,
        taskId: action.taskId,
      };
    }
    case EDIT_TASK: {
      state.tasks[action.task.status].items[state.indexInList] = action.task;
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        isOpen: false,
      };
    }
    case CREATE_TASK: {
      let countItems = 0;
      for (let i = 0; i <= 2; i++) {
        countItems += state.tasks[i].items.length;
      }
      action.task.id = (countItems + 1).toString();
      state.tasks['0'].items.push(action.task);
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        isOpen: false,
        filteredTasks: [...state.filteredTasks, action.task],
      };
    }
    case CLOSE_MODAL: {
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        isOpen: action.closed,
      };
    }
    case SET_FILTERED_ARRAY_TASKS: {
      return {
        ...state,
        filteredTasks: action.filteredTasks,
      };
    }
    case OPEN_COMMENTS_MODAL: {
      state.currentProjectId === 1 &&
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(state.tasks));
      state.currentProjectId === 2 &&
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(state.tasks));
      state.currentProjectId === 3 &&
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(state.tasks));
      return {
        ...state,
        isOpenCommentsModal: action.isOpenCommentsModal,
        taskId: action.taskId,
      };
    }
    default:
      return state;
  }
};
