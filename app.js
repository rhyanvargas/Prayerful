// UTILITIES

var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

mongoose.connect = ('mongodb://localhost/prayerful', {useMongoClient: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// MODEL CONFIG - MONGOOSE
// var userSchema = new mongoose.Schema({
// })

// var prayerSchema = new mongoose.Schema({
// })
// var likesSchema = new mongoose.Schema({
// })

// ROUTES
app.get('/', function(req,res){
  res.render('index');
})

app.listen(3000, function(){
  console.log('==> SERVER STARTED http://localhost:3000');
});