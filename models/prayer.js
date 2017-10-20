//***
// SETUP SCHEMA and MODEL then EXPORT PRAYER to index
//***
var mongoose = require('mongoose')

var prayerSchema = new mongoose.Schema({
  title:{
    type: String,
    required: 'A prayer title cannot be empty'
  },
  body:{
    type: String,
    required: 'You cannot leave an empty prayer.'
  },
  creator:{
    type: String
  },
  city:{
    type: String
  },
  state:{
    type: String
  },
  prayedFor: {
    type: Boolean,
    default: false
  }
});

// MODEL
var Prayer = mongoose.model('Prayer', prayerSchema)


// EXPORT prayer model to models/index.js
module.exports = Prayer
