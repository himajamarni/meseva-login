import axios from 'axios';

class formService {
  sendData(name,last_name,ph_no,address,City,district,state,zip) {
    return axios.post('/api/customers',
  {
    name: name,
    last_name: last_name,
    ph_no:ph_no,
    address:address,
    City:City,
    district:district,
    state:state,
    zip:zip

  })


  }

  getData() {
    return axios.get('/api/customers');

  }
}

export default formService;
