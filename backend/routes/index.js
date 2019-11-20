const employees = require('./employee');


module.exports = app => {
  app.use('api/v1/employees', employees)  
}
