export default function user(state = {}, action = {}) {
    switch(action.type) {
        case "USER_LOGGED_IN":
            console.log('action.user',action.user)
            return action.user;
        case "USER_LOGGED_OUT":
            return {};
        case "GET_USER_CREDENTIALS":
        	return state;
        default:
            return state;
    }
}