// UTILITIES
const port = 3000
var express = require('express'),
    app = express(),
    mongoose = require('mongoose')
    prayersRoutes = require('./routes/prayers')
// ROUTES
app.get('/', function(req,res){
  res.send('HELLO FROM ROOT ROUTE');
})
app.use('/api/prayers',prayersRoutes)
// SERVER
app.listen(port, function(){
  console.log('==> Prayer App SERVER STARTED ON localhost: '+port);
})
