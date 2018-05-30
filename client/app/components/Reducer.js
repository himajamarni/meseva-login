
const Reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      var newState = cloneState(state);      
      newState.customers = action.data.customers;      
      return newState;

    case 'ADD_CUSTOMER':
        var newState = cloneState(state);        
        newState.customers = newState.customers.slice();
        newState.customers.push(action.data.customer);        
        return newState;
    
    default:
      return state;
  }
};

const cloneState = (state) => {
  var newState = Object.assign({}, state);
  return newState;
};

module.exports = Reducer;