const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    req.params.username;
    req.params.password;
    res.send("admin logged in successfully!");
    app.listen(3000);
});