/** @format */

import {
  closeModalInterface,
  CLOSE_MODAL,
  createTaskModalActionInterface,
  CREATE_TASK,
  editExistingTaskModalActionInterface,
  EDIT_TASK,
  openAddEditTaskModalActionInterface,
  openCommentsModalInterface,
  OPEN_ADD_EDIT_TASK,
  OPEN_COMMENTS_MODAL,
  setCurrentProjectTasksActionInterface,
  setFilteredArrayTasksInterface,
  SET_CURRENT_PROJECT_TASKS,
  SET_FILTERED_ARRAY_TASKS,
} from './interfaces';

export const setCurrentProjectTasksAction = (
  tasks: any,
  currentProjectId: number
): setCurrentProjectTasksActionInterface => ({
  type: SET_CURRENT_PROJECT_TASKS,
  tasks: tasks,
  currentProjectId: currentProjectId,
});

export const openAddEditTaskModalAction = (
  isOpen: boolean,
  isEdit: boolean,
  editingTask: any,
  indexInList: number,
  taskId: string
): openAddEditTaskModalActionInterface => ({
  type: OPEN_ADD_EDIT_TASK,
  isOpen: isOpen,
  isEdit: isEdit,
  editingTask: editingTask,
  indexInList: indexInList,
  taskId: taskId,
});

export const editExistingTaskModalAction = (task: any): editExistingTaskModalActionInterface => ({
  type: EDIT_TASK,
  task: task,
});

export const createTaskModalAction = (task: any): createTaskModalActionInterface => ({
  type: CREATE_TASK,
  task: task,
});

export const closeModal = (closed: boolean): closeModalInterface => ({
  type: CLOSE_MODAL,
  closed: closed,
});

export const setFilteredArrayTasks = (filteredTasks: any[]): setFilteredArrayTasksInterface => ({
  type: SET_FILTERED_ARRAY_TASKS,
  filteredTasks: filteredTasks,
});

export const openCommentsModal = (
  isOpenCommentsModal: boolean,
  taskId: string
): openCommentsModalInterface => ({
  type: OPEN_COMMENTS_MODAL,
  isOpenCommentsModal: isOpenCommentsModal,
  taskId: taskId,
});

export type TasksActions =
  | setCurrentProjectTasksActionInterface
  | openAddEditTaskModalActionInterface
  | editExistingTaskModalActionInterface
  | createTaskModalActionInterface
  | closeModalInterface
  | setFilteredArrayTasksInterface
  | openCommentsModalInterface;
