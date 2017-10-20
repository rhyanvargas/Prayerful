//***
// CONNECT TO MONGODB and EXPORT TO PRAYERS ROUTE
//***

var mongoose = require('mongoose')
// debug
mongoose.set('debug',true)
// connect
mongoose.connect('mongodb://localhost/prayer_app')
// promise
mongoose.Promise = Promise

// recieve model from prayer.js and export to prayers.js route
module.exports.Prayer = require('./prayer')
