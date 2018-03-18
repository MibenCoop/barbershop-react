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
    getTickets: () => 
      axios.get('api/tickets').then(res => {
        return res.data.tickets;
      })
  }
};
