/** @format */

import './App.scss';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ProjectPage } from './pages/ProjectsPage';
import { TasksPage } from './pages/TasksPage';
import { useEffect } from 'react';
import { AddTaskModal } from './pages/AddTaskModal/AddTaskModal';
import { useSelector } from 'react-redux';
import { AppState } from './store/store';
import { TasksState } from './store/tasks.reducer';
import { AddNewTaskButton } from './components/AddNewTaskButton/AddNewTaskButton';
import Searchbar from './components/Searchbar/Searchbar';
import { useDispatch } from 'react-redux';
import { setFilteredArrayTasks } from './store/tasks.actions';
import { CommentsModal } from './pages/CommentsModal/CommentsModal';

export const App = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, tasks, isOpenCommentsModal, taskId } = useSelector(
    (state: AppState) => state.tasksState as TasksState
  );
  const location = useLocation();
  useEffect(() => {
    navigation('/projects');
  }, []);
  const getAllTasks = () => {
    let first: any;
    const isFirst = location.pathname.includes('1')
      ? 1
      : location.pathname.includes('2')
      ? 2
      : location.pathname.includes('3') && 3;
    switch (isFirst) {
      case 1: {
        first = window.localStorage.getItem('taskDataFirstProject');
        break;
      }
      case 2: {
        first = window.localStorage.getItem('taskDataSecondProject');
        break;
      }
      case 3: {
        first = window.localStorage.getItem('taskDataThirdProject');
      }
    }

    let t: any;
    t = first && JSON.parse(first);
    let array: any[] = [];
    if (Array.isArray(t)) {
      return t;
    } else {
      for (let r in t) {
        array.push(t[r].items);
      }
      return array.flat();
    }
  };

  useEffect(() => {
    dispatch(setFilteredArrayTasks(getAllTasks()));
  }, [tasks, location]);

  return (
    <div>
      <main>
        {location.pathname.includes('/projects/') && tasks && (
          <div>
            <div className="_flex-container header-container">
              {location.pathname !== '/projects' && <AddNewTaskButton />}
              <Searchbar
                Data={getAllTasks()}
                Placeholder="Please enter the name "
              />
            </div>
          </div>
        )}
        <Routes>
          <Route
            path="/projects"
            element={<ProjectPage />}
          />
          <Route
            path="/projects/:id"
            element={<TasksPage />}
          />
        </Routes>
      </main>
      {isOpen && <AddTaskModal />}
      {isOpenCommentsModal && <CommentsModal taskId={taskId} />}
    </div>
  );
};
