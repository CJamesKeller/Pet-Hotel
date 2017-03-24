var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');
var pets = require('./routes/pets.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));
app.use('/pets', pets);

app.listen(port, function(){
  console.log('listening on port: ', port);
});
