const { Schema, model } = require('mongoose');

const tableSchema = new Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

module.exports = model('Table', tableSchema);
