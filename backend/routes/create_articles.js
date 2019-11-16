const express = require('express');

const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

const { Pool} = require('pg');

const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';


const pool = new Pool({
    connectionString: connectionString,
  });

//post route
router.post('/', (req, res, next) => {
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

module.exports = router;