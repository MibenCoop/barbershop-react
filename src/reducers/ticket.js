export default function ticket(state = [], action = {}) {
    switch(action.type) {
        case "BOOKED_TICKET":
            return [...state, {
                _id: action.ticket._id,
                time: action.ticket.time,
                date: action.ticket.date,
                userId: action.ticket.userId
            }];
        case "UNBOOK_TICKET":
            return {};
        default:
            return state;
    }
}