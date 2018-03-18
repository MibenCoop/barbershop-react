import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user)
  },
  tickets: {
  	bookTickets: data => 
  		axios.post('/api/tickets', {data}).then(res => res.data.ticket),
    deleteTicket: id => 
      axios.post('api/tickets/delete', {id}).then(res => res.data.id),
    getTickets: () => 
      axios.get('api/tickets').then(res => res.data.tickets)
  }
};
