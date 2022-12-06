/** @format */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import { TasksState } from '../../store/tasks.reducer';
import { SvgClose } from '../../Svg/SvgClose';
import { useDispatch } from 'react-redux';
import { openCommentsModal } from '../../store/tasks.actions';
import './CommentsModal.scss';
import { CommentModel } from '../../data/types';

export const CommentsModal = (props: any) => {
  const { tasks } = useSelector(
    (state: AppState) => state.tasksState as TasksState
  );
  const [state, setState] = useState<any[]>();
  const [currentTaskCommentsState, setCurrentTaskComments] = useState<any>();
  const [modal, setModalOpen] = useState<boolean>(false);
  const [opened, setOpened] = useState<any[]>([]);
  const [data, setData] = useState<string>('');
  const [id, setId] = useState<number>(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTaskComments: any = getCurrentTask();
    setCurrentTaskComments(currentTaskComments[0].comments);
  }, []);

  useEffect(() => {
    let arr: any[] = [];
    let res;
    if (currentTaskCommentsState) {
      res = getFiniteValue(currentTaskCommentsState, arr);
    }

    setState(res);
  }, [currentTaskCommentsState]);

  function getFiniteValue(obj: any, array: any[]) {
    let level = 0;
    let newItem: any;
    let parentId = 0;
    getProp(obj, parentId);
    function getProp(o: any, parentId: number) {
      for (let i = 0; i <= o.length - 1; i++) {
        let object = o[i];
        newItem = {
          id: object.id,
          text: object.text,
          parentId: parentId,
          comments: object.comments,
        };
        array.push(newItem);
        for (let k in object) {
          if (Array.isArray(object[k])) {
            level += 1;
            getProp(object[k], object.id);
          }
        }
      }
    }
    return array;
  }

  const getCurrentTask = () => {
    let tasksArray: any[] = [];
    for (let i = 0; i <= 2; i++) {
      tasksArray.push(tasks[i].items);
    }
    let cuurentTask = tasksArray.flat().filter((el: any) => el.id === props.taskId);
    console.log('cuurentTask', cuurentTask);
    return cuurentTask;
  };

  const addNewComment = (parentId: number) => {
    setModalOpen(true);
    setId(parentId);
  };

  const addNew = () => {
    setModalOpen(false);
    let comments = addRecursively(currentTaskCommentsState, id);
    let newarr: any[] = [];
    let res = getFiniteValue(comments, newarr);
    setState([...res]);
  };

  const openChildren = (id: number) => {
    const openedElements = JSON.parse(JSON.stringify(state));
    const filtered = openedElements.filter((el: any) => {
      if (el.parentId === id) return el.id;
    });
    const sett = filtered.map((el: any) => {
      return el.id;
    });
    opened?.push([...sett]);
    setOpened(opened.flat());
  };
  const closeModal = () => {
    dispatch(openCommentsModal(false, ''));
  };

  const addRecursively = (obj: any, parentId: number) => {
    getProp(obj);
    function getProp(o: any) {
      for (let i = 0; i <= obj.length - 1; i++) {
        let object = o[i];
        for (let k in object) {
          if (k === 'id') {
            if (object[k] === parentId) {
              let newComment = {
                id: state && state?.length + 1,
                text: data,
                parentId: parentId,
                comments: [],
              };
              object['comments'].push(newComment);
            }
          }
          if (Array.isArray(object[k]) && object[k].length > 0) {
            getProp(object[k]);
          }
        }
      }
    }
    return obj;
  };
  return (
    <div
      className="modal-dialog"
      id="modal">
      <div>
        <div className="_flex-container comments-modal-container">
          <h3>
            {props.taskId} {getCurrentTask()[0].title} Comments
          </h3>
          <SvgClose closeModal={closeModal} />
        </div>
        <>
          {state &&
            state?.map((el: any) => {
              return (
                <div
                  className="comment-item"
                  style={{
                    width: '100%',
                    display: el.parentId !== 0 && !opened?.includes(el.id) ? 'none' : 'inline-block',
                  }}>
                  <div
                    style={{ margin: '10px', marginLeft: `${el.parentId * 10 + 10}px` }}
                    className="main-comm">
                    {el.text}
                  </div>
                  {el.comments && el.comments.length > 0 && (
                    <div
                      style={{ margin: '10px', marginLeft: `${el.parentId * 10 + 10}px` }}
                      onClick={() => {
                        openChildren(el.id);
                      }}
                      className="open-comments">
                      Open comments {el.comments.length}
                    </div>
                  )}
                  {el.comments && el.comments.length === 0 && (
                    <div
                      style={{ margin: '10px', marginLeft: `${el.parentId * 10 + 10}px` }}
                      className="open-comments">
                      Comments 0
                    </div>
                  )}
                  <button
                    className="add-new-comment"
                    style={{ margin: '10px', marginLeft: `${el.parentId * 10 + 10}px` }}
                    onClick={() => addNewComment(el.id)}>
                    Reply
                  </button>
                </div>
              );
            })}

          {modal ? (
            <div
              className="modal-dialog modal-edding"
              id="modal">
              <div className="modal-edding-container">
                <div className="_flex-container comments-modal-container">
                  <h3>New Comment</h3>
                  <SvgClose closeModal={() => setModalOpen(false)} />
                </div>

                <textarea
                  defaultValue={data}
                  onChange={(e) => setData(e.target.value)}></textarea>
                <button onClick={addNew}>new</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </>
      </div>
    </div>
  );
};
