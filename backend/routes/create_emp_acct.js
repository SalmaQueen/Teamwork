const express = require('express');
const router = express.Router();

const { Pool} = require('pg');
const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

const pool = new Pool({
    connectionString: connectionString,
  });


//get route, check whether employee already exista
router.get('/', (req,res,next) => {

  // if(!NaN(req.params.id)){
  //   Employee.findOne({
  //     _id:req.params.id
  //   }).then((employee) => {
  //     if(employee){
  //       delete employee.password;
  //       res.status(200).json(user)
  //     }else{
  //       resError(res,404, "Employee not Found")
  //     }    
  //   });     
  // } else{
  //   resError(res, 500, "Invalid ID");
  // }
 
  const info = 'SELECT * FROM employees';
  pool.query (info, (err,res) => {
    if(err){   
      console.log(err.stack);  
  }  else {
      console.log(res.rows);         
    }
  })
});

// //post route to create new employee
// router.post('/', (req, res, next) => {
//     const values = [   
//       req.body.first_name,
//       req.body.last_name,
//       req.body.email,
//       req.body.password,      
//       req.body.gender,
//       req.body.job_role,
//       req.body.department,
//       req.body.address,   
//       req.body.emp_id,   
//       req.body.db_role
//     ];                    
  
//   const text = 'INSERT INTO employees(first_name,last_name,email,password, gender, job_role, department, address, emp_id, db_role) VALUES($1,$2,$3,$4,$5, $6, $7, $8, $9, $10) RETURNING *'; 

//   pool.query(text,values, (err,res) => {
//       if(err){   
//           console.log(err.stack);  
//       }  else {
//           console.log(res.rows[0]);         
//         }        
//   });
  
// });

module.exports = router;