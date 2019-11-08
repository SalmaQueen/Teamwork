const express = require("express");
const pg = require("pg");

const connectionString = "postgres://postgres:1234@localhost:5432/Teamwork";

const pool = new pg.Pool(connectionString);
const app = express();



app.get("/", (req,res,next) => {
pool.connect((err,client,done) =>{
    if(err){
        console.log("not able to get connection" + err);
        res.status(400).send(err);
    }
    else{
        client.query("SELECT * FROM $1", [1], categories, (err,result) =>{
            done();
            if(err){
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    }
   
});
});

app.listen(4000, ()=>{
    console.log('Server is running...on Port 4000');
});

