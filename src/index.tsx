import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import App from './Component/App';
import rootReducer from './Store/index';
import { Provider } from 'react-redux';
import { getAllMovieEpic } from './Store/module/Home';

const rootEpic = combineEpics(getAllMovieEpic);
const epcimiddleware = createEpicMiddleware();
const reducerInitializedStore = createStore(
  rootReducer,
  applyMiddleware(epcimiddleware)
);

epcimiddleware.run(rootEpic);

render(
  <Provider store={reducerInitializedStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
