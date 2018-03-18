import api from '../api'

export const bookedTicket = ticket => ({
    type: "BOOKED_TICKET",
    ticket
});
export const deletedTicket = id => ({
    type: "DELETE_TICKET",
    id
});

export const gettingTickets = tickets => ({
    type: "GET_TICKETS",
    tickets
});

export const getTickets = () => dispatch => 
	api.tickets.getTickets().then((tickets) => dispatch(gettingTickets(tickets)))

export const deleteTicket = id => dispatch =>
	api.tickets.deleteTicket(id).then((id) => dispatch(deletedTicket(id)))

export const bookTicket = ticket => dispatch =>  
		api.tickets.bookTickets(ticket).then(res => dispatch(bookedTicket(res)))