export default function ticket(state = {}, action = {}) {
    switch(action.type) {
        case "BOOKED_TICKET":
        		console.log("BOOKEDTICKET", action.ticket);
            return action.ticket;
        case "UNBOOK_TICKET":
            return {};
        default:
            return state;
    }
}