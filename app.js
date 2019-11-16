<<<<<<< HEAD
const Category = require('./models/Category');

app.get('/api/category/:id', (req, res, next) => {
    Category.findOne({
      _id: req.params.id
    }).then(
      (category) => {
        res.status(200).json(category);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });
=======
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.post('/api/employees', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Employee created successfully!'
    });
});

app.put('/api/employees', (req, res, next) => {
        console.log(req.body);
        res.status(201).json({
          message: 'Employee created successfully!'
        });
});

module.exports = app;
>>>>>>> develop
