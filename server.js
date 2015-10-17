var express=require('express');
var app=express();
var path=require('path');
var searchData=require('./public/dist/search.js');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

app.use(cookieParser());
app.use('/search',searchData);
app.use(express.static('public/dist/image/'));
app.use(function (req, res, next) {
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
      res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
      console.log('New cookie created');
      mongoose.connect('mongodb://localhost/test');
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function (callback) {
      });
      var userSchema = mongoose.Schema({
          name: Number
      });
      var User = mongoose.model('User', userSchema);
      var addUser = new User({ name: 1});
      addUser.save(function (err, addUser) {
      });
       addUser.name = randomNumber;
  }
  else
  {
    console.log('Cookie all ready exists', cookie);
  }
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/index.html'));
});

app.get('/default.css',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/default.css'));
});

app.get('/action.js',function(req, res){
    res.sendFile(path.join(__dirname + '/public/dist/action.js'));
});

app.listen(1339);
console.log('The port is working');