const express = require('express');
const createArticlesRoutes = require('./routes/create_articles');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/v1/create_article', createArticlesRoutes);



module.exports = app;