import api from '../api'

export const bookedTicket = ticket => ({
    type: "BOOKED_TICKET",
    ticket
});
export const unbookedTicket = () => ({
    type: "UNBOOK_TICKET"
});

export const gettingTickets = (tickets) => ({
    type: "GET_TICKETS",
    tickets
});

export const getTickets = () => dispatch => 
		api.tickets.getTickets().then((tickets) => { 
			//TODO Rename
			console.log('getTickets');
			return dispatch(gettingTickets(tickets));
			//TODO For return into Dashboard component(if get not from redux )
		})

export const bookTicket = ticket => dispatch =>  
		api.tickets.bookTickets(ticket).then(res => dispatch(bookedTicket(res)))