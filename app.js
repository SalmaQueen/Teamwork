let express = require('express');
let app = express();


app.get('/', (res, res) => {
  res.send('Hello World');
});

let server = app.listen(3000, () => {
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
  server.close();
};

exports = module.exports = {};