const express = require("express");
const app = express();

app.post("/", (req,res)=>{
    req.params.username;
    req.params.password;
    app.listen(3000);
});

app.get("/", (req,res)=>{
    res.send("admin account created successfully!");
    app.listen(3000);
});