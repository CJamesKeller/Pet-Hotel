var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');

router.get('/', function( req, res){
  console.log('index.js hits base url');
  res.sendFile(path.resolve('index.html'));
});


module.exports = router;
