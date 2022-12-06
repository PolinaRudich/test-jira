/** @format */

import '../Searchbar/Searchbar.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../store/store';
import { setFilteredArrayTasks } from '../../store/tasks.actions';
import { TasksState } from '../../store/tasks.reducer';
const Searchbar = (props: any) => {
    const { tasks } = useSelector(
        (state: AppState) => state.tasksState as TasksState
    );
    const getAllTasks = () => {
        let array: any[] = [];
        for (let i = 0; i <= 2; i++) {
            tasks[i] !== undefined &&
                tasks[i].items.forEach((el: any) => {
                    array.push(el);
                });
        }
        return array;
    };
    const dispatch = useDispatch();
    const handleSearch = (event: any) => {
        const searchValue = event.target.value;
        const filterArray = props.Data.filter((e: any) => {
            return (
                e.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                e.taskNumber.toString().includes(searchValue)
            );
        });
        if (searchValue === '') {
            dispatch(setFilteredArrayTasks(getAllTasks()));
        } else {
            dispatch(setFilteredArrayTasks(filterArray));
        }
    };

    return (
        <div className="_flex-container search-bar">
            <div className="searchBox"></div>
            <input
                placeholder="Search..."
                type="text"
                onChange={handleSearch}
            />
        </div>
    );
};
export default Searchbar;
