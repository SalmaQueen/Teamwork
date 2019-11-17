const express = require('express');
const createEmployeeAcctRoutes = require('./routes/create_emp_acct');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/v1/create_emp_acct', createEmployeeAcctRoutes);



module.exports = app;