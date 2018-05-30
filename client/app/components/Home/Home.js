import React from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';

const Home = () => (

<div className="Main">
<h3>Welcome Admin</h3>
<h3 className="UserEntry"><Link to = "/customerForm">User Entry</Link></h3>
<h4>Click add some user details</h4>
</div>

);

export default Home;
