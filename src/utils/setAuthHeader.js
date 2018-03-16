import axios from 'axios';

export default (token = null) => {
	console.log('axios');
  if (token) {
  	console.log('iftoketn');
    axios.defaults.headers.common.authorization = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common.authorization;
  }
}
