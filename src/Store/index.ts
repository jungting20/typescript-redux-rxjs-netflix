import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import Home from './module/Home';

const rootReducer = combineReducers({ Home });
export default rootReducer;

export type State = {
  Home: StateType.HomeState;
};
