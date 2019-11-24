const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const { Pool} = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
    connectionString: connectionString,
  });

//post route
router.post('/', (req, res, next) => {
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

pool.query(text,values, (err,res) => {
  if(!err){   
    bcrypt.hash((req.body.password, 10)
        .then((hash) => {
          res.json({
            hash, 
            message:"successful"
          })
        })
        .catch((err) => {
          res.json({
            message:"error",
            err:err.stack
          })           
        })
      )
  }  
});                 
       
});  



//get route - admin can get all employees

router.get('/', (req,res) => {
const info = 'SELECT * FROM employees';

pool.query(info, (err,res) => {
if(err){
console.log(err);
}else{
console.log(res.rows);
}
})

});



module.exports = router;