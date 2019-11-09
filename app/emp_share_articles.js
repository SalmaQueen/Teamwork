const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.articleTitle; 
    req.params.articleId;     
    res.json(200);
    app.listen(3000);
});

