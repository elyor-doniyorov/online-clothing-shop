import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import App from './App';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

