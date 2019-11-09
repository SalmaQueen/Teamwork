const express = require('express');
<<<<<<< HEAD

const pg = require("pg");
=======

const pg = require("pg");

>>>>>>> develop

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

<<<<<<< HEAD
app.get('/', function (req, res,next) {
=======
app.get('/', function (req, res) {
>>>>>>> develop
    pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection" + err);
           res.status(400).send(err); 
       } 
<<<<<<< HEAD
       pool.query("SELECT * FROM categories where category_name='jokes'", [1], function(err,result) {
=======
       pool.query('SELECT * FROM categories', [1], function(err,result) {
>>>>>>> develop
          //call `done()` to release the client back to the pool
           done(); 
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(res.rows);
<<<<<<< HEAD
           
       });
       
    });        
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// const db = require('./queries');
// const port = 3000;


// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' });
// });

// app.get('/categories', db.getCategories);

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`)
// });
=======
           pool.end();
       });
       
    });        
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
>>>>>>> develop
