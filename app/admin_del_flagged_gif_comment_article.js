const express = require("express");
const app = express();

app.delete("/", (req,res) => {
    req.params.articleId;
    req.params.gifId;
    req.params.commentId; 
    req.params.articleFlagId;
    req.params.gifFlagId;
    req.params.commentFlagId;
    res.json(200);
    app.listen(3000);
});

