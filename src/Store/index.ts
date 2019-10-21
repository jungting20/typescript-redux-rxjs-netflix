import { combineReducers } from 'redux';
import Home, { HomeState } from './module/Home';

const rootReducer = combineReducers({ Home });
export default rootReducer;

//이런식으로 만들면 store에서 props로 뿌려줄때 {Home:Home:{}} 이렇게 뿌려줌 그래서 타입을 이렇게 생성해야 함 아 진짜 헷갈린다
export type State = {
  Home: HomeState;
};
