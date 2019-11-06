const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("admin account created successfully!");
    app.listen(3000);
});