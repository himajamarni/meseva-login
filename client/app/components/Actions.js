export function setCustomers(customers) {
    return {
        type: 'SET_CUSTOMERS',
        data: {
            customers: customers,
        }
    }
}

export function addCustomer(customer) {
    return {
        type: 'ADD_CUSTOMER',
        data: {
            customer: customer,
        }
    }
}