export default function ticket(state = [], action = {}) {
    switch(action.type) {
        case "GET_MASTERS":
            if ( action.masters !== 0) {        
                return action.masters;
            } else {
                return [];
            }
        default:
            return state;
    }
}