/** @format */

import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { TaskModel } from '../data/types';
import { AppState } from '../store/store';
import { useSelector } from 'react-redux';
import { TasksState } from '../store/tasks.reducer';
import { useDispatch } from 'react-redux';
import { setCurrentProjectTasksAction } from '../store/tasks.actions';
import './TasksPage.scss';

export const TasksPage = () => {
  const { tasks, currentProjectId } = useSelector(
    (state: AppState) => state.tasksState as TasksState
  );
  const dispatch = useDispatch();
  tasks && console.log(tasks);

  const t = (currentStatus: number) => {
    switch (currentStatus) {
      case 0: {
        return 0;
      }
      case 1: {
        return 1;
      }
      case 2: {
        return 2;
      }
      default: {
        return 0;
      }
    }
  };

  const getFiles = (e: any, currentTaskId: string, currentStatus: any) => {
    console.log(e.target.files, currentTaskId, currentStatus);
    tasks &&
      tasks[t(currentStatus)].items.forEach((element: TaskModel) => {
        if (element.id === currentTaskId) {
          element.files.push(e.target.files[0]);
        }
      });
  };

  const [columns, setColumns] = useState(tasks);
  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      removed.status = +destination.droppableId;
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  useEffect(() => {
    dispatch(setCurrentProjectTasksAction(columns, currentProjectId));
  }, [columns]);

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
      <div
        className="list-content-container"
        style={{
          display: 'flex',
          margin: '0 auto',
          width: 'fit-content',
        }}>
        <div className="tasks-column">
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable
                key={index}
                droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    className="tasks-list-container"
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                    <span>{column.title}</span>
                    {column.items.map((item: any, index: any) => (
                      <TaskCard
                        taskId={item.id}
                        key={index}
                        item={item}
                        index={index}
                        getFiles={getFiles}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
};
