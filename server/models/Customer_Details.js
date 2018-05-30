const mongoose = require('mongoose');

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
});

const TestSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Test1');
