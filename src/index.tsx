import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './Component/App';
import rootReducer from './Store/index';
import { Provider } from 'react-redux';

const reducerInitializedStore = createStore(rootReducer);

console.log(reducerInitializedStore.getState(), 'asdsadsad');

render(
  <Provider store={reducerInitializedStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
