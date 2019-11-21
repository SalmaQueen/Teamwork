const employees = require('./employee');

const { Pool} = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
    connectionString: connectionString,
  });

module.exports = app => {  
  app.use('/v1/create_employee', employees)   
  app.use('/v1/employees', employees)
  app.use('/v1/one_employee', employees)
}
