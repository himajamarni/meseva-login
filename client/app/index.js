import React from 'react';
import { render } from 'react-dom';


import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import customerForm from './components/Form/customerForm';
import Home from './components/Home/Home';
import login from './components/login/login';
import Main from './components/Main/Main';
import './styles/styles.scss';

var routes = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={login}/>
        <Route path="/customerForm" component={customerForm}/>
        <Route path="/Home" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
);

render(routes, document.getElementById('app'));
