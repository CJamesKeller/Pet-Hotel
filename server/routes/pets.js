var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var pg = require ('pg');

//config object configures connection to database
var config = {
  database: 'chi', // name of database
  host: 'localhost', // hwere is your database
  port: '5432', // port for the database
  max: 10, // how many connections are allowed simultaneously
  idleTimeoutMilli: 30000 // 30 seconds to try to connect
};

var pool = new pg.Pool(config);

router.post('/add', function (req, res) {
  console.log(req.body);
});



module.exports = router;
