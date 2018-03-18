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

// export const getTickets = () => dispatch => 
// 	console.log("getTickets");
// 		api.tickets.getTickets().then((tickets) => { 
// 			//TODO Rename
// 			tickets.map((ticket) => {
// 					//TODO Try in one dispatch, not by one
// 					return dispatch(gettingTickets(ticket));
// 			});
// 			//TODO For return into Dashboard component(if get not from redux )
// 			return tickets;
// 		})

export const bookTicket = ticket => dispatch =>  
		api.tickets.bookTickets(ticket).then(res => dispatch(bookedTicket(res)))