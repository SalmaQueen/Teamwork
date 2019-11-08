const express = require('express');

const pg = require("pg");


const app = express();

let config = {
  user: 'nduta',
  database: 'Teamwork', 
  password: '123456', 
  port: 5432, 
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

let pool = new pg.Pool(config);

app.get('/', function (req, res) {
    pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection" + err);
           res.status(400).send(err); 
       } 
       pool.query('SELECT * FROM categories', [1], function(err,result) {
          //call `done()` to release the client back to the pool
           done(); 
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(res.rows);
           pool.end();
       });
       
    });        
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});