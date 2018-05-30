import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../Actions';

class customerResults extends Component {
  render() {    
    const customers = this.props.customers;    
    let customersDisplayHTML = null;
    if (customers && customers.length > 0) {
      customersDisplayHTML = customers.map((cust, i) => {  
        console.log('test')      ;
        return (
          <div key = {i}>
            {cust.name} &nbsp;&nbsp; {cust.last_name} {cust.address} &nbsp; {cust.ph_no} &nbsp; {cust.City}&nbsp; {cust.district} &nbsp; {cust.state} &nbsp; {cust.zip}
          </div>
        );
      });
    }
    return (
      <div className="custResults">
        {customersDisplayHTML}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state;
  }
  
export default connect(mapStateToProps, actions)(customerResults);