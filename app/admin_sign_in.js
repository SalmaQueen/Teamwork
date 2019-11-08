const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("admin logged in successfully!");
    app.listen(3000);
});