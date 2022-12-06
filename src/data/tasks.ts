/** @format */

import { TaskModel } from './types';

export const taskDataFirstProject: TaskModel[] = [
    {
        id: '1',
        taskNumber: 1,
        title: 'Add phone verification functionality',
        description: 'Optimization, validation, button blocking',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '2',
        taskNumber: 2,
        title: 'Add modal windows',
        description: 'For comments in the section such and such',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 1,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '3',
        taskNumber: 3,
        title: 'Code refactoring',
        description: 'Description of the third problem',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 2,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '4',
        taskNumber: 4,
        title: 'Fix styles for the page with all users',
        description: 'Adaptability, refactoring',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '0',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
];

export const taskDataSecondProject: TaskModel[] = [
    {
        id: '1',
        taskNumber: 1,
        title: 'Fix bugs in the plugin',
        description: 'Fix validation, styles',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '2',
        taskNumber: 2,
        title: 'ix bugs in the plugin',
        description: 'ix bugs in the plugin',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '3',
        taskNumber: 3,
        title: 'ix bugs in the plugin',
        description: 'ix bugs in the plugin',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 2,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '4',
        taskNumber: 4,
        title: 'ix bugs in the plugin',
        description: 'ix bugs in the plugin',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '0',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
];

export const taskDataThirdProject: TaskModel[] = [
    {
        id: '1',
        taskNumber: 1,
        title: 'ix bugs in the plugin',
        description: 'Fix validation, styles',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '2',
        taskNumber: 2,
        title: 'Fix validation, styles',
        description: 'Fix validation, styles',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 1,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '3',
        taskNumber: 3,
        title: 'Fix validation, styles',
        description: 'Fix validation, styles',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 2,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
    {
        id: '4',
        taskNumber: 4,
        title: 'Fix validation, styles',
        description: 'Fix validation, styles',
        dateCreation: new Date('2022-03-25'),
        timeInWork: 24,
        dateEnding: new Date('2022-03-30'),
        priority: '1',
        files: [],
        status: 0,
        isPossibleToAddSubTasks: true,
        comments: [
            {
                id: 1,
                text: 'first',
                comments: [
                    { id: 3, text: 'third', comments: [] },
                    {
                        id: 4,
                        text: 'forth',
                        comments: [
                            { id: 5, text: 'fifth', comments: [] },
                            { id: 6, text: 'six', comments: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                text: 'second',
                comments: [],
            },
        ],
    },
];

let first: any;
let second: any;
let third: any;
const setDataIntoLocal = async () => {
    if (
        typeof window.localStorage.getItem('taskDataFirstProject') !== 'string' ||
        window.localStorage.getItem('taskDataFirstProject')?.length === 2 ||
        !window.localStorage.getItem('taskDataFirstProject')
    ) {
        window.localStorage.setItem('taskDataFirstProject', JSON.stringify(taskDataFirstProject));
    }

    if (
        typeof window.localStorage.getItem('taskDataSecondProject') !== 'string' ||
        window.localStorage.getItem('taskDataSecondProject')?.length === 2 ||
        !window.localStorage.getItem('taskDataSecondProject')
    ) {
        window.localStorage.setItem('taskDataSecondProject', JSON.stringify(taskDataSecondProject));
    }

    if (
        typeof window.localStorage.getItem('taskDataThirdProject') !== 'string' ||
        window.localStorage.getItem('taskDataThirdProject')?.length === 2 ||
        !window.localStorage.getItem('taskDataThirdProject')
    ) {
        window.localStorage.setItem('taskDataThirdProject', JSON.stringify(taskDataThirdProject));
    }
}



export const selectDataByProjectId = async (id: number) => {
    await setDataIntoLocal()
    first = window.localStorage.getItem('taskDataFirstProject');
    second = window.localStorage.getItem('taskDataSecondProject');
    third = window.localStorage.getItem('taskDataThirdProject');
    switch (id) {
        case 1: {
            return first && JSON.parse(first);
        }
        case 2: {
            return second && JSON.parse(second);
        }
        case 3: {
            return third && JSON.parse(third);
        }
        default: {
            return [];
        }
    }
};

export const getByStatus = (statusId: number, data: TaskModel[] | any) => {
    let newArr: any = [];
    for (let k in data) {
        newArr.push(data[k]);
    }
    let res: any[] = [];
    let arr: any[] = [];
    if (data) {
        if (Array.isArray(data)) {
            res = [...data].filter((el: any) => {
                return el.status === statusId;
            });
        } else {
            for (let r in data) {
                arr.push(data[r].items);
            }

            res = [...arr.flat()].filter((el: any) => {
                return el.status === statusId;
            });
        }
    }
    return res;
};
