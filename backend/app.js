const express = require('express');
const { Pool} = require('pg');

const bodyParser = require('body-parser');


const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork'

const app = express();


const pool = new Pool({
    connectionString: connectionString,
  });

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);    
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//post route
app.post('/api/v1/write_article', (req, res, next) => {
  const values = [
    req.body.emp_id,
    req.body.article_title,
    req.body.article_author,
    req.body.date_created,
    req.body.category,
    req.body.flag_id
  ];                    

const text = 'INSERT INTO articles(emp_id, article_title, article_author, date_created, category, flag_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *'; 
pool.query(text,values, (err,res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows[0]);    
  }
});
});

module.exports = app;