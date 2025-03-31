import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Note the change here
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
