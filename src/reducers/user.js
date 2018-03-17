export default function user(state = {}, action = {}) {
		console.log('action', action);
    switch(action.type) {
        case "USER_LOGGED_IN":
        		console.log("USER_LOGGED_IN", action.user);
            return action.user;
        case "USER_LOGGED_OUT":
            return {};
        case "GET_USER_CREDENTIALS":
        		console.log("!!!!!!!!!!!!!!!", state);
        		return state;
        default:
            return state;
    }
}