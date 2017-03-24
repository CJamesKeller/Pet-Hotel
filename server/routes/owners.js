var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');



router.post('/add', function(req, res){
  console.log('add activated', req.body);
  res.send(req.body);
  res.sendStatus(200);
});

module.exports = router;
