export default function user(state = {}, action = {}) {
    switch(action.type) {
        case "USER_LOGGED_IN":
        		console.log("USER_LOGGED_IN", action.user);
            return action.user;
        case "USER_LOGGED_OUT":
            return {};
        default:
            return state;
    }
}