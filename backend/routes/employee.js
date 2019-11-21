const Router = require('express-promise-router');
const db = require('../db');

const { Pool} = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
    connectionString: connectionString,
  });

const router = new Router();

module.exports = router;


//create new employee

router.post('/', async (req, res) => {  
  const values = [   
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,      
    req.body.gender,
    req.body.job_role,
    req.body.department,
    req.body.address,   
    req.body.emp_id,   
    req.body.db_role
  ];

  const text = 'INSERT INTO employees(first_name,last_name,email,password, gender, job_role, department, address, emp_id, db_role) VALUES($1,$2,$3,$4,$5, $6, $7, $8, $9, $10) RETURNING *'; 

  const rows   = await db.query(text, values)
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack))  
});



//get a specific employee
// router.get('/:emp_id', async (req, res) => {  
//   const text = 'SELECT * FROM employees WHERE emp_id = $1';  
//   const rows  = await db.query(text, [req.params.emp_id])
//   .then((res) => console.log(res.rows[0]))
//   .catch((e) => console.error(e.stack))  
// });


//get all Employees

router.get('/', async (req, res) => {  
  const text = 'SELECT * FROM employees';
  const rows  = await db.query(text)
  .then((res) => console.log(res.rows))
  .catch((e) => console.error(e.stack))  
});