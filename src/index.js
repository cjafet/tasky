import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';

// import our store reducers
import tasksReducer from './reducers';

const rootReducer = (state = {}, action) => {
  return {
    tasks: tasksReducer(state.tasks, action),
  };
};

// Will add the store to the provider wrapper as props
// const store = createStore(tasks, devToolsEnhancer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));



// Read store current state
console.log("Store state: ",store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
