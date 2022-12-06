/** @format */

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TaskModel } from '../../data/types';
import { AppState } from '../../store/store';
import {
    closeModal,
    createTaskModalAction,
    editExistingTaskModalAction,
    openAddEditTaskModalAction,
} from '../../store/tasks.actions';
import { TasksState } from '../../store/tasks.reducer';
import { SvgArrowdown } from '../../Svg/SvgArrowdown';
import { SvgFile } from '../../Svg/SvgFile';
import './AddTaskModal.scss';
import save from 'save-file';
import { SvgClose } from '../../Svg/SvgClose';
import { convertDates } from '../TaskCard';
import InputMask from 'react-input-mask';
import { SvgDeleteFile } from '../../Svg/SvgDeleteFile';
import { Toggle } from '../../components/Toggle/Toggle';
export type AddTaskModalProps = {
    isEditing: boolean;
};
export const AddTaskModal = () => {
    const [files, setFiles] = useState<any>([]);
    const { isEdit, editingTask, tasks, taskId } = useSelector(
        (state: AppState) => state.tasksState as TasksState
    );
    const [priorityCurrentItem, setPriority] = useState<string>('0');
    const [numberOfSubTask, setNumberOfSubTask] = useState<number>();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<any>();
    useEffect(() => {
        isEdit && setFiles(editingTask.files);
        isEdit && setPriority(editingTask.priority);
    }, []);

    const onChangeInputFile = async (e: any) => {
        handleFileInputChange(e);
    };

    const deleteFileFromList = (fileName: string) => {
        let newFiles = files.filter((file: any) => !file.fileName.includes(fileName));
        setFiles(newFiles);
    };

    const getBase64 = (file: File) => {
        return new Promise((resolve) => {
            let fileInfo;
            let baseURL: any = '';
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const handleFileInputChange = (e: any) => {

        let file = e.target.files[0];

        getBase64(file)
            .then((result) => {
                file['base64'] = result;
                setFiles([...files, { file: file.base64, fileName: file.name }]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const editExistingTask = (data: TaskModel) => {
        let newItem = {
            id: taskId,
            title: data.title,
            description: data.description,
            taskNumber: editingTask.taskNumber,
            dateCreation: data.dateCreation,
            dateEnding: data.dateEnding,
            timeInWork: data.timeInWork,
            priority: priorityCurrentItem,
            files: files,
            status: editingTask.status,
            isPossibleToAddSubTasks: data.isPossibleToAddSubTasks,
            comments: data.comments,
        };
        dispatch(editExistingTaskModalAction(newItem));
        reset();
    };

    const setIdToSubTak = (mainTaskNumber: number) => {
        let array: any[] = [];
        for (let i = 0; i <= 2; i++) {
            tasks[i] &&
                tasks[i].items.forEach((el: any) => {
                    if (el.taskNumber.toString().includes(mainTaskNumber.toString())) {
                        if (
                            el.taskNumber.toString().length > 1 &&
                            +el.taskNumber.toString().split('')[0] === mainTaskNumber
                        ) {
                            array.push(el);
                        }
                    }
                });
        }
        if (array.length === 0) {
            let tn = `${mainTaskNumber}2`;
            setNumberOfSubTask(+tn);
        } else {
            let tn = `${mainTaskNumber}${array.length + 2}`;
            setNumberOfSubTask(+tn);
        }
    };

    const createTask = (data: TaskModel) => {
        let countItems = 0;
        for (let i = 0; i <= 2; i++) {
            tasks[i].items.forEach((el: any) => {
                if (el.taskNumber.toString().length === 1) {
                    countItems += 1;
                }
            });
        }
        let newItem = {
            id: (countItems + 1).toString(),
            title: data.title,
            description: data.description,
            taskNumber: numberOfSubTask ? numberOfSubTask : countItems + 1,
            dateCreation: data.dateCreation,
            dateEnding: data.dateEnding,
            timeInWork: data.timeInWork,
            priority: priorityCurrentItem,
            files: files,
            status: 0,
            isPossibleToAddSubTasks: data.isPossibleToAddSubTasks,
            comments: data.comments,
        };
        dispatch(createTaskModalAction(newItem));
        dispatch(closeModal(false));
    };
    function dataURLtoFile(dataurl: string, filename: string) {
        var arr: any = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }
    const downloadFile = (file64: any, fileName: string) => {
        let fl = dataURLtoFile(file64, fileName);
        save(fl, `${fileName}`);
    };

    const changePriority = (priority: string) => {
        console.log(priority)
        setPriority(priority);
    }

    return (
        <form
            onSubmit={isEdit ? handleSubmit(editExistingTask) : handleSubmit(createTask)}
            className="modal-dialog"
            id="modal">
            <div className="modal-container">
                <div className="_flex-container">
                    <p>{`${isEdit ? `Edit task ${editingTask.taskNumber}` : 'Create new task'}`}</p>
                    <SvgClose closeModal={closeModal} />
                </div>

                <div className="_grid-container">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        {...register('title')}
                        className="title"
                        defaultValue={isEdit && editingTask ? editingTask.title : ''}
                    />
                </div>
                <div className="_grid-container">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        {...register('description')}
                        className="description"
                        defaultValue={isEdit && editingTask ? editingTask.description : ''}
                    />
                </div>
                <div className="_grid-container">
                    <label htmlFor="date-creation">Date creation</label>
                    <InputMask
                        mask="9999-99-99"
                        required={true}
                        {...register('dateCreation')}
                        className="date-creation"
                        defaultValue={isEdit && editingTask ? convertDates(editingTask.dateCreation) : ''}
                    />
                </div>
                <div className="_grid-container">
                    <label htmlFor="date-ending">Date ending</label>
                    <InputMask
                        mask="9999-99-99"
                        required={true}
                        {...register('dateEnding')}
                        defaultValue={isEdit && editingTask ? convertDates(editingTask.dateEnding) : ''}
                    />
                </div>
                <div className="_grid-container">
                    <label htmlFor="time-in-work">Time in work</label>
                    <input
                        type="text"
                        {...register('timeInWork')}
                        className="time-in-work"
                        defaultValue={
                            isEdit && editingTask && editingTask.timeInWork ? editingTask.timeInWork : ''
                        }
                    />
                </div>
                <div className="_grid-container priority-container">
                    <label htmlFor="priority">Priority</label>
                    <Toggle changePriority={changePriority} priority={priorityCurrentItem} />
                    {/* <input
                        type="text"
                        {...register('priority')}
                        className="priority"
                        defaultValue={isEdit && editingTask ? editingTask.priority : ''}
                    /> */}
                </div>
                <div className="_grid-container">
                    <label htmlFor="files">Files</label>
                    <div
                        style={{ position: 'relative' }}
                        className="file-container">
                        <span>
                            <SvgFile />
                            <input
                                type="file"
                                onChange={(e) => onChangeInputFile(e)}
                                className="files"
                            />
                        </span>
                        <div>
                            {' '}
                            {files.length > 0 &&
                                files.map((file: any, fileId: any) => (
                                    <div className=" file-item">
                                        <a key={fileId}>{file.fileName}</a>
                                        <SvgDeleteFile deleteFunc={deleteFileFromList} fileName={file.fileName} />
                                        <SvgArrowdown
                                            download={downloadFile}
                                            file={file.file}
                                            fileName={file.fileName}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="_flex-container _flex-container_buttons">
                    <button
                        type="submit"
                        className="save-button">
                        save
                    </button>
                    {isEdit && editingTask.taskNumber.toString().length < 2 && (
                        <button
                            className="save-button"
                            onClick={() => {
                                dispatch(
                                    openAddEditTaskModalAction(
                                        true,
                                        false,
                                        undefined,
                                        tasks['0'].items[tasks['0'].items.length],
                                        ''
                                    )
                                );
                                reset();
                                setIdToSubTak(editingTask.taskNumber);
                            }}>
                            add subtask
                        </button>
                    )}
                </div>
            </div>
        </form>
    );
};
