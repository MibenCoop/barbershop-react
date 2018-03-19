export default function ticket(state = [], action = {}) {
    switch(action.type) {
        case "BOOKED_TICKET":
            return [...state, {
                _id: action.ticket._id,
                time: action.ticket.time,
                date: action.ticket.date,
                userId: action.ticket.userId
            }];
        case "DELETE_TICKET":
            let newState = state.slice();
            let indexToRemove = newState.findIndex(obj => obj._id === action.id);
            newState.splice(indexToRemove , 1);
            return newState;
        case "GET_TICKETS":
            if ( action.tickets.n !== 0) {        
                return action.tickets;
            } else {
                return [];
            }
        default:
            return state;
    }
}