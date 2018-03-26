import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import decode from "jwt-decode";

import App from './App';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth.js'
import setAuthHeader from './utils/setAuthHeader.js'


//For working footer
document.getElementById('root').style.height = "100%";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
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