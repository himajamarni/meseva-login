import axios from 'axios';

class loginService {
  verifyLogin(username,password) {
    return axios.post('/api/verify',
  {
    username: username,
    password: password,
  });
  }

  getData() {
    return axios.get('/api/verify');

  }
}

export default loginService;
