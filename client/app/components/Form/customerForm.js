import React, { Component } from 'react';
import 'whatwg-fetch';
import formService from './formService';
import {connect} from 'react-redux';
import CustomerResults from './customerResults';
import * as actions from '../Actions';

class customerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      last_name:'',
      ph_no:'',
      address:'',
      City:'',
      district:'',
      state:'',
      zip:'',
      customers: [],
    };
    this.formService = new formService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const promise = this.formService.getData();
    const _this = this;
    promise.then(function (response) {          
      _this.props.setCustomers(response.data);
      
    })
    .catch(function (error) {
      console.log(error);
      console.log('Error while getting customer details');
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const customer = {
      address: this.state.address ,
      name: this.state.name,
      ph_no: this.state.ph_no,
      City: this.state.City, 
      district: this.state.district,
      state: this.state.state,
      zip: this.state.zip,
    };    
    const promise = this.formService.sendData(this.state.name,
                              this.state.last_name,
                              this.state.ph_no,
                              this.state.address ,
                              this.state.City,
                              this.state.district,
                              this.state.state ,
                              this.state.zip);
    const _this = this;
    promise.then(function (response) {
      alert('Customer details are submitted successfully');
      _this.props.addCustomer(customer);
    })
    .catch(function (error) {
      console.log(error);
      console.log('Error while adding customer details');
    });
  }

  render() {
    const{name,last_name,ph_no,address,City,district,state,zip} = this.state;
    return (
      <div>
        <div className = "container">
          <form className="customer-form" onSubmit={this.handleSubmit}>
            <div className="row">
               <div className="col-25"><label>First Name:</label></div>
               <div className="col-75"><input type="text"  className = "form-control" name="name" value={this.state.name}
               onChange={this.handleChange}  required/></div>
            </div>

            <div className="row">
            <div className="col-25"><label>Last Name:</label></div>
            <div className="col-75"><input type="text"  className = "form-control" name="last_name" value={this.state.last_name}
             onChange={this.handleChange}  required /></div>
            </div>

            <div className="row">
            <div className="col-25"><label>Ph_No:</label></div>
            <div className="col-75"><input type ="tel" className = "form-control" name="ph_no" value={this.state.ph_no} onChange={this.handleChange}
            pattern ="^\d{10}" required/></div>
            </div>
            <div className="row">
            <div className="col-25"><label>Address:</label></div>
            <div className="col-75"><input type ="text" className = "form-control" name="address" value={this.state.address}
            onChange={this.handleChange} required/></div>
            </div>

            <div className="row">
            <div className="col-25"><label>City:</label></div>
            <div className="col-75"><input type ="text" className = "form-control" name="City" value={this.state.City}
            onChange={this.handleChange} required/></div>
            </div>

            <div className="row">
            <div className="col-25"><label>District:</label></div>
            <div className="col-75"><input type ="text" className = "form-control" name="district" value={this.state.district}
            onChange={this.handleChange} required/></div>
            </div>

            <div className="row">
            <div className="col-25"><label>State:</label></div>
            <div className="col-75"><input type ="text" className = "form-control" name="state" value={this.state.state}
            onChange={this.handleChange} required/></div>
            </div>

            <div className="row">
            <div className="col-25"><label>Zip-Code:</label></div>
            <div className="col-75"><input type ="Number" className = "form-control" name="zip" value={this.state.zip}
            onChange={this.handleChange} required/></div>
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <h3>Submitted User Details:</h3>
        <CustomerResults />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return state;
}

module.exports = connect(mapStateToProps, actions)(customerForm);