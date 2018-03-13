import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/api/users", { user }).then(res => {
      		console.log('res', res.data.user);
      		return res.data.user;
      	})
  }
};
