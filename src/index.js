import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import decode from "jwt-decode";
import rootReducer from './rootReducer';
import App from './App';
import setAuthHeader from './utils/setAuthHeader.js'
import { userLoggedIn } from './actions/auth.js'

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

//For working footer
document.getElementById('root').style.height = "100%";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

if (localStorage.barbershopJWT) {
    const payload = decode(localStorage.barbershopJWT);
    const user = { 
    	token: localStorage.barbershopJWT,
    	email: payload.email
    };
    setAuthHeader(localStorage.barbershopJWT);
    store.dispatch(userLoggedIn(user));
}
ReactDOM.render( 
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>   
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();