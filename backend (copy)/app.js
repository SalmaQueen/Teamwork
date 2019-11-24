const express = require('express');
//const pg = require('pg');
const { Pool, Client } = require('pg')
const connectionString = 'postgres://umpqdziw:alGaz5U5ChubwGxWPXLeyEpxfYMSvtWS@salt.db.elephantsql.com:5432/umpqdziw'

const app = express();


const pool = new Pool({
    connectionString: connectionString,
  });
  pool.query('SELECT NOW() as Omera', (err, res) => {
    console.log(err, res)
    pool.end()
  });

  const client = new Client({
    connectionString: connectionString,
  });
  client.connect();

  client.query('SELECT * FROM pg_catalog.pg_tables', (err, res) => {
    console.log(err, res)
    client.end()
  });


app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

app.post('/api/v1/write_article', (req, res, next) => {
  const values = [ req.body.user_id, 
                   req.body.article_title,
                   req.body.article_content,
                   req.body.article_author                     
                 ]
  pool.query(`INSERT INTO article(user_id, article_title, article_content, article_author`,               
           values, (q_err, q_res) => {
          if(q_err) return next(q_err);
          res.json(q_res.rows)
    })
})

module.exports = app;