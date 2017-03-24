var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var config = {
  database: 'chi', // name of database
  host: 'localhost', // hwere is your database
  port: '5432', // port for the database
  max: 10, // how many connections are allowed simultaneously
  idleTimeoutMilli: 30000 // 30 seconds to try to connect
};

var pool = new pg.Pool(config);

router.post('/add', function(req, res){
  console.log(req.body);
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  pool.connect(function(error, db, done){
    if(error){//if there is an error connecting to the database, it alerts in console
      console.log("Error connecting to DB");
      res.sendStatus(500);
    } else {//else it will query the client since it connected without error
      // after it runs the select query, it will return either a result or an error
      db.query('INSERT INTO "pethotel_owners" ("first_name", "last_name")' +
               'VALUES ($1, $2);',
               [firstName, lastName],
               function(error, result){
        //the pool has been set with a max of 10, done returns the connection back to the available pool
        done();
        if (error) {//if query error, send console and error response
          console.log('query error');
          res.sendStatus(500);
        } else {//if success, console result of call, send the rows property of result
          console.log(firstName);
          res.sendStatus(201);
        }
      });
    }
  });
});


module.exports = router;
