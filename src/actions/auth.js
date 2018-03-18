import api from '../api'
import setAuthHeader from '../utils/setAuthHeader.js'
export const userLoggedIn = user => ({
    type: "USER_LOGGED_IN",
    user
});

export const userLoggedOut = () => ({
    type: "USER_LOGGED_OUT"
});

export const getUserCredentials = () => ({
    type: "GET_USER_CREDENTIALS"
});
export const login = credentials => dispatch => api.user.login(credentials).then(user => {
  console.log('login', user);
  localStorage.barbershopJWT = user.token;
  setAuthHeader(user.token);
  dispatch(userLoggedIn(user));
});

export const logout = () => dispatch =>  {
    localStorage.removeItem("barbershopJWT");
    setAuthHeader();
    dispatch(userLoggedOut());
};