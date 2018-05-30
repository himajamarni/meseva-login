const mongoose = require('mongoose');

const CustomerDetailSchema = new mongoose.Schema({
  ph_no: Number,
  name: String,
  last_name: String,
  address: String,
  City : String,
  district: String,
  state:String,
  zip:Number
});

module.exports = mongoose.model('Customer_Details', CustomerDetailSchema);
