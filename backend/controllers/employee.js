const employee = require('../db/index');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
      (hash) => {
        const employee = new Employee({
          email: req.body.email,
          password: hash
        });
        employee.save().then(
          () => {
            res.status(201).json({
              message: 'added successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    );
  };

  exports.login = (req, res, next) => {
    Employee.findOne({ email: req.body.email }).then(
      (employee) => {
        if (!employee) {
          return res.status(401).json({
            error: new Error('not found!')
          });
        }
        bcrypt.compare(req.body.password, employee.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            const token = jwt.sign(
              { empId: emp._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' });
            res.status(200).json({
              empId: emp._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  } 