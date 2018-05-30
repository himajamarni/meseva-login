const mongoose = require('mongoose');
const LoginDetailSchema = new mongoose.Schema({

  username: {
    type: String,
    unique: true,
    required:true,
    trim: true
  } ,
  password:{
    type:String,
    required: true
  }
});

module.exports = mongoose.model('Login_Details', LoginDetailSchema);
