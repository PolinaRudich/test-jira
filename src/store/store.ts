/** @format */

import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TasksReducer, TasksState } from './tasks.reducer';
export default function configureStore(): Store<AppState, any> {
  return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}
export interface AppState {
  tasksState: TasksState | undefined;
}

const rootReducer = combineReducers<AppState>({
  tasksState: TasksReducer,
});
