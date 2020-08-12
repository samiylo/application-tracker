import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'; //compose combines different middleware.
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import companyReducer from './reducers/companyReducer'
import App from './App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(companyReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,

  document.getElementById('root')
);

