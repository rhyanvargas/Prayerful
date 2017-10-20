//***
// RECEIVE PRAYER MODEL and SEND PRAYERS TO app.js
//***

var express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router(),
    // get model
    db = require('../models')

// PRAYER ROUTE
router.get('/', function(req,res){
  db.Prayer.find()
  .then(function(prayers){
    res.json(prayers)
  })
  .catch(function(err){
    console.log(err);
  })
});

// export route to app.js
module.exports = router
