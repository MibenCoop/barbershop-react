import api from '../api'
import { userLoggedIn } from './auth';
import setAuthHeader from '../utils/setAuthHeader.js'

export const signup = data => dispatch => 
        api.user.signup(data).then(user => {
                localStorage.sportbetJWT = user.token;
                setAuthHeader(user.token);
        	dispatch(userLoggedIn(user));
        })