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
  		axios.post('/api/bookTickets', {data}).then(res => console.log('res', res))
  }
};
