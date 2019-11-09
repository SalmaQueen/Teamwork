const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.articles;
    req.params.gifs;
    req.params.articleCreatedDate;
    req.params.gifCreatedDate;
    res.json(200);
    app.listen(3000);
});
