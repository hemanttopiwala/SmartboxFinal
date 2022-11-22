const mongoose = require('mongoose');

const BoxSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },

  boxid: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Box', BoxSchema);
