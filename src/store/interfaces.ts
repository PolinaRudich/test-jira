/** @format */

import { TaskModel } from '../data/types';

export const SET_CURRENT_PROJECT_TASKS = 'SET_CURRENT_PROJECT_TASKS';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const OPEN_ADD_EDIT_TASK = 'OPEN_ADD_EDIT_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_COMMENTS_MODAL = 'OPEN_COMMENTS_MODAL';
export const SET_FILTERED_ARRAY_TASKS = 'SET_FILTERED_ARRAY_TASKS';
export interface setCurrentProjectTasksActionInterface {
  type: typeof SET_CURRENT_PROJECT_TASKS;
  tasks: TaskModel[];
  currentProjectId: number;
}

// export interface ChangeTaskStatusActionInterface {
//     type: typeof CHANGE_TASK_STATUS,
//     task: TaskModel[],
//     currentProjectId: number
// };

export interface editExistingTaskModalActionInterface {
  type: typeof EDIT_TASK;
  task: TaskModel;
}

export interface openAddEditTaskModalActionInterface {
  type: typeof OPEN_ADD_EDIT_TASK;
  isOpen: boolean;
  isEdit: boolean;
  editingTask: any;
  indexInList: number;
  taskId: string;
}

export interface createTaskModalActionInterface {
  type: typeof CREATE_TASK;
  task: TaskModel;
}

export interface closeModalInterface {
  type: typeof CLOSE_MODAL;
  closed: boolean;
}

export interface openCommentsModalInterface {
  type: typeof OPEN_COMMENTS_MODAL;
  isOpenCommentsModal: boolean;
  taskId: string;
}

export interface setFilteredArrayTasksInterface {
  type: typeof SET_FILTERED_ARRAY_TASKS;
  filteredTasks: any[];
}
