import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Reducer from '../Reducer';
import Header from '../Header/Header';


let store = null;

class App extends React.Component {
  componentWillMount() {
    const defaultAppState = {      
      customers: [],
    };
    store = createStore(
      Reducer,
      defaultAppState,
      applyMiddleware(thunk)
    );
  }

  render() {
    return (
      <div>      
          <Header />
          <main>
            <Provider store={store}>
              <div>
                {this.props.children}
              </div>                 
            </Provider>
          </main>
              
      </div>
    )
  }
}

module.exports = App;
