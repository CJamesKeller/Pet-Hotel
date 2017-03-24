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

// router.post('/add', function(req, res){
//   console.log(req.body);
//   var title = req.body.title;
//   var author = req.body.author;
//   var publisher = req.body.publisher;
//   pool.connect(function(error, db, done){
//     if(error){//if there is an error connecting to the database, it alerts in console
//       console.log("Error connecting to DB");
//       res.sendStatus(500);
//     } else {//else it will query the client since it connected without error
//       // after it runs the select query, it will return either a result or an error
//       db.query('INSERT INTO "books" ("author", "title", "publisher")' +
//                'VALUES ($1, $2, $3);',
//                [author, title, publisher],
//                function(error, result){
//         //the pool has been set with a max of 10, done returns the connection back to the available pool
//         done();
//         if (error) {//if query error, send console and error response
//           console.log('query error');
//           res.sendStatus(500);
//         } else {//if success, console result of call, send the rows property of result
//           console.log(result);
//           res.sendStatus(201);
//         }
//       });
//     }
//   });
// });

router.post('/add', function(req, res){
  console.log('add activated', req.body);
  res.send(req.body);
  res.sendStatus(200);
});

module.exports = router;
