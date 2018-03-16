import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './rootReducer';
import App from './App';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render( 
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>   
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();