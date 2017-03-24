var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');
var pets = require('./routes/pets.js');
var index = require('./routes/index.js');
var owners = require('./routes/owners.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));
app.use('/pets', pets);

app.use('/', index);

app.use('/owners', owners);

app.listen(port, function(){
  console.log('listening on port: ', port);
});
