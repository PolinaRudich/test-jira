/** @format */

import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import {
    openAddEditTaskModalAction,
    openCommentsModal,
    setFilteredArrayTasks,
} from '../store/tasks.actions';
import './TaskCard.scss';
import { CountDown } from '../components/Countdown/Countdown';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { TasksState } from '../store/tasks.reducer';
import { PrioritySignSvg } from '../Svg/SvgPrioritySign';

export const convertDates = (date: Date | string) => {
    let newDate = '';
    if (typeof date === 'string') {
        for (let i = 0; i < 10; i++) {
            newDate += date[i];
        }
        return newDate;
    } else {
        return `${date.getFullYear()}-${date.getMonth().toString().length === 2 ? date.getMonth() : `0` + date.getMonth().toString()
            }-${date.getDay().toString().length === 2 ? date.getDay() : `0` + date.getDay().toString()}`;
    }
};

export type Props = {
    item: any;
    index: any;
};
const TaskCard = ({ item, index, taskId }: any) => {
    const dispatch = useDispatch();
    const { filteredTasks } = useSelector(
        (state: AppState) => state.tasksState as TasksState
    );

    const getIdsOfFilteredTasks = () => {
        let ids: any[] = [];
        filteredTasks.forEach((el) => {
            ids.push(el.id);
        });
        return ids;
    };

    return (
        <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}>
            {(provided) => (
                <div
                    className={`task-card ${item.status === 0 ? 'q' : 'dev'} ${item.status === 2 && 'done-status'
                        } ${filteredTasks && getIdsOfFilteredTasks().includes(item.id) ? 'filtered' : 'unfiltered'
                        }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <div className="_flex-container title-card">
                        {item.taskNumber}
                        {item.priority === 1 || (item.priority === '1' && <PrioritySignSvg />)}
                    </div>
                    <div className="task-info">
                        <div
                            className={` ${item.status === 0 ? 'q' : 'dev'} ${item.status === 2 && 'done-status'
                                } `}>
                            <p className="title-card">{item.title}</p>
                            <p>{item.description}</p>
                            {item.dateCreation && item.dateEnding && (
                                <p>{convertDates(item.dateCreation) + ' - ' + convertDates(item.dateEnding)}</p>
                            )}
                            {item.length > 0 &&
                                item.files.map((el: any) => {
                                    return <p>{el.name}</p>;
                                })}
                        </div>
                    </div>
                    <div
                        className="_flex-container"
                        style={{ justifyContent: 'space-between' }}>
                        <button
                            className="edit-task"
                            onClick={() => {
                                dispatch(openAddEditTaskModalAction(true, true, item, index, taskId));
                            }}>
                            edit
                        </button>
                        <button
                            className="edit-task"
                            onClick={() => {
                                dispatch(openCommentsModal(true, item.id));
                            }}>
                            comments
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};
export default TaskCard;
