/** @format */

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { openAddEditTaskModalAction } from '../../store/tasks.actions';
import { TasksState } from '../../store/tasks.reducer';
import { SvgPlus } from '../../Svg/SvgPlus';
import './AddNewTaskButton.scss';
export const AddNewTaskButton = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: AppState) => state.tasksState as TasksState);
  return (
    <>
      <div
        className="add-new-button"
        onClick={() =>
          dispatch(
            openAddEditTaskModalAction(
              true,
              false,
              undefined,
              tasks['0'].items[tasks['0'].items.length],
              ''
            )
          )
        }>
        <SvgPlus />
      </div>
    </>
  );
};
