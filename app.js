const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/categories', (req, res, next) => {
    const categories = [
      {
        _id: '1',
        categoryName: 'jokes',        
      },
      {
        _id: '2',
        categoryName: 'business',        
      },
    ];
    res.status(200).json(categories);
  });

module.exports = app;