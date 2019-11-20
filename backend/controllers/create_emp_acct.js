// const express = require('express');
// const ctrl = require('../routes/create_emp_acct');

// const bcrypt = require('bcrypt');

// const { Pool} = require('pg');
// const connectionString = 'postgres://nduta:e1234f@localhost:5432/Teamwork';

// const pool = new Pool({
//     connectionString: connectionString,
// });

// //create one employee account

// // exports.createEmployeeAcct = (req, res, next) => {
// //     const employee = new Employee ({
// //         firstName:req.body.first_name,
// //         lastName:req.body.last_name,
// //         email:req.body.email,
// //         password:req.body.password,     
// //         gender:req.body.gender,
// //         jobRole:req.body.job_role,
// //         department:req.body.department,
// //         address:req.body.address,   
// //         empId:req.body.emp_id,   
// //         dbRole:req.body.db_role
// //     });    

                     
    
// //   const text = 'INSERT INTO employees(first_name,last_name,email,password, gender, job_role, department, address, emp_id, db_role) VALUES($1,$2,$3,$4,$5, $6, $7, $8, $9, $10) RETURNING *'; 
  
// //   pool.query(text,employee, (err,res) => {
// //     if(!err){   
// //       bcrypt.hash((req.body.password, 10)
// //           .then((hash) => {
// //             res.json({
// //               hash, 
// //               message:"successful"
// //             })
// //           })
// //           .catch((err) => {
// //             res.json({
// //               message:"error",
// //               err:err.stack
// //             })           
// //           })
// //         )
// //     }  
// //   });                 
         
// // }; 

// //get route - admin can get all employees



// module.exports = ctrl;