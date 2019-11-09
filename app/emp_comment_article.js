const express = require("express");
const app = express();

app.post("/", (req,res) => {
    req.params.articleTitle;
    req.params.articleId;
    req.params.comments;
    res.send("comment added!");
    app.listen(3000);
});
