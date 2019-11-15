import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import App from './Component/App';
import rootReducer from './Store/index';
import { Provider } from 'react-redux';
import { getAllMovieEpic } from './Store/module/Home';

const composeEnhancers = window[
  '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
] as typeof compose;

const rootEpic = combineEpics(getAllMovieEpic);
const epcimiddleware = createEpicMiddleware();
const reducerInitializedStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epcimiddleware))
);

epcimiddleware.run(rootEpic);

render(
  <Provider store={reducerInitializedStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
