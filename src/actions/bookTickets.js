import api from '../api'

export const bookedTicket = ticket => ({
    type: "BOOKED_TICKET",
    ticket
});

export const unbookedTicket = () => ({
    type: "UNBOOK_TICKET"
});


export const bookTicket = ticket => dispatch =>  api.tickets.bookTickets(ticket).then(res => {
	dispatch(bookedTicket(ticket));
});