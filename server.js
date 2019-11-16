<<<<<<< HEAD
const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

<<<<<<< HEAD
const app = express();
=======
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
=======
const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);
>>>>>>> develop

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

<<<<<<< HEAD
let pool = new pg.Pool(config);

app.get('/', function (req, res) {
    pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection" + err);
           res.status(400).send(err); 
       } 
       pool.query("SELECT * FROM categories where category_name='jokes'", [1], function(err,result) {
          //call `done()` to release the client back to the pool
           done(); 
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(res.rows);
           
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
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
>>>>>>> admin_create_emp_acct
>>>>>>> develop
