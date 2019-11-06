let express = require('express');
let app = express();


app.get('/', (res, req) => {
  res.send('Admin account created successfully');
});

let server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

exports.closeServer = function(){
  server.close();
};

exports = module.exports = {};