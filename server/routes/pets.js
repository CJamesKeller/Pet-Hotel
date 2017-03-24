//requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var pg = require ('pg');
//globals
var router = express.Router();
var pool = new pg.Pool(config);
//config object configures connection to database
var config = {
  database: 'chi', // name of database
  host: 'localhost', // hwere is your database
  port: '5432', // port for the database
  max: 10, // how many connections are allowed simultaneously
  idleTimeoutMilli: 30000 // 30 seconds to try to connect
};

//gets

  //selects data with owner pet breed and color
  router.get('/',function(req, res){
  //pool setup
  pool.connect(function(error,db,done){
    if(error){
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    }//ends if
    else{
      db.query('SELECT "pethotel_owners"."first_name", "pethotel_owners"."last_name", "pethotel_pets"."breed", "pethotel_pets"."color"'+
                'FROM "pethotel_owners"'+
                'JOIN "pethotel_pets" ON "pethotel_owners"."id" = "pethotel_pets"."owner_id";',
                function(queryError,result){
                  done();
                  if(queryError){
                    console.log("Error making query.");
                    res.sendStatus(500);
                  }//ends if
                  else{
                    res.send(result.rows);
                  }//ends else
                });//ends db.query
    }//ends else
  });//ends pool.connect
});//ends SELECT data with owner pet breed adn color


var pool = new pg.Pool(config);

router.post('/add', function (req, res) {
  console.log(req.body);
});



module.exports = router;
