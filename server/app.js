var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');
var index = require('./routes/index.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.use('/', index);

app.listen(port, function(){
  console.log('listening on port: ', port);
});
