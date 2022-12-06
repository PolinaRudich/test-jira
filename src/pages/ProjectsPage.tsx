/** @format */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { getByStatus, selectDataByProjectId } from '../data/tasks';
import { AppState } from '../store/store';
import { setCurrentProjectTasksAction } from '../store/tasks.actions';
import { TasksState } from '../store/tasks.reducer';
import './ProjectPage.scss';
export const ProjectPage = () => {
    const delay = (time: number) => {
        return new Promise(resolve => setTimeout(resolve, time));
    };
    const navigate = useNavigate();
    const [hide, setHide] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setHide(false);
    }, [])
    const onClickFunction = async (id: number) => {
        setHide(true);
        await delay(2000);
        gotoCurrentProject(id)
    }
    const gotoCurrentProject = async (id: number) => {


        const columnsFromBackend = {
            '0': {
                title: 'Queue',
                items: getByStatus(0, await selectDataByProjectId(id)),
            },
            '1': {
                title: 'Development',
                items: getByStatus(1, await selectDataByProjectId(id)),
            },
            '2': {
                title: 'Done',
                items: getByStatus(2, await selectDataByProjectId(id)),
            },
        };
        navigate(`${id}`);
        dispatch(setCurrentProjectTasksAction(columnsFromBackend, id) as any);
    };
    return (
        <div className="_flex-container projects-container" style={{ opacity: hide ? '0' : '1'}}>
            {projects.map((project: any) => {
                return (
                    <div
                        onClick={() => onClickFunction(project.id)}
                        className="project-item">
                        {project.name}
                    </div>
                );
            })}
        </div>
    );
};
