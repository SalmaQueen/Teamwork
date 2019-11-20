const express = require('express');
const createEmployeeAcctRoutes = require('./routes');



const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

createEmployeeAcctRoutes(app);


module.exports = app;