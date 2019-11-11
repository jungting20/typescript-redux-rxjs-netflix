import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './Component/App';
import rootReducer from './Store/index';
import { Provider } from 'react-redux';

const epcimiddleware = createEpicMiddleware();
const reducerInitializedStore = createStore(
  rootReducer,
  applyMiddleware(epcimiddleware)
);

render(
  <Provider store={reducerInitializedStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
