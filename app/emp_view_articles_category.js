const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.article;
    req.params.articleCategory;  
    res.json(200);
    app.listen(3000);
});
