import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from "react-router-dom";
import loginService from './loginService';
class login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      loginError:''
    };
    this.loginService = new loginService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value});

  }

  handleSubmit(event) {
    event.preventDefault();
    const promise = this.loginService.verifyLogin(this.state.username,
                              this.state.password);

    const _this = this;
    promise.then(function (response) {
      // _this.setState({
      //   customers: response.data,
      // });
      console.log(response);
      console.log(response.data.length);

      // success condition
      if(response.data.length != 0){
         _this.setState({
           loginError:false,
         });
        _this.props.history.push('/Home');
      }


      // error condition
       if(response.data.length ==0){
          _this.setState({
            loginError:true,
          });
       }
      // _this.setState({
      //   loginError: true,
      // });


    })
    .catch(function (error) {
      console.log(error);
      console.log('Error while verifying user login');
    });
    //this.props.history.push('/');
    //console.log(this)
  }


  render(){
       return(
    <div className = "loginContainer">
       
         <form className="loginForm" onSubmit={this.handleSubmit}>
         <div className = "box-header">
         <h2> Login </h2>
         </div>
         <label className = "userName">Username:</label>
         <input type ="text" className = "form-control" name="username" value={this.state.username}
         onChange={this.handleChange} required/>
         <br/>
				 <label className = "password">Password:</label>
         <input type="password" name="password" value={this.state.password}
          onChange={this.handleChange}/>
          <br/>
         <input type="submit" name="login"  value="login"/>
         </form>
         {
           this.state.loginError ?
           <div><h3>Enter Valid username or password</h3></div>
         : null
         }
    </div>
  );
  }
}

 export default login;
