import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => res.data.user),
    getUserCredentials: () => 
      axios.get("api/users").then(res => res.data.user),
    changePassword: passwords => 
      axios.post("api/users/changePassword", {passwords}).then(res => res.data.user)
  },
  tickets: {
  	bookTickets: data => 
  		axios.post('/api/tickets', {data}).then(res => res.data.ticket),
    deleteTicket: id => {
      return axios.post('api/tickets/delete', {id}).then(res => res.data.id)
    },
    getTickets: () => 
      axios.get('api/tickets').then(res => res.data.tickets)
  },
  masters: {
    getMasters: () => 
      axios.get('api/masters').then(res => res.data.masters)
  }
};
