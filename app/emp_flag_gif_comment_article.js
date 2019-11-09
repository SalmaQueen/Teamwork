const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.articleId;
    req.params.gifId;
    req.params.commentId;  
    res.json(200);
    app.listen(3000);
});
