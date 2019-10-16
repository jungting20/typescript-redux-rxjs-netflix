import { combineReducers } from 'redux';
import Home, { HomeState } from './module/Home';

const rootReducer = combineReducers({ Home });
export default rootReducer;

export type State = {
  Home: HomeState;
};
