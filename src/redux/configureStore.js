/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers, {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
/* eslint-enable no-underscore-dangle */
