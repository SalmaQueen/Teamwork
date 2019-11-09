const express = require("express");
const app = express();

app.post("/", (req,res) => {
    req.params.gifTitle;
    req.params.gifId;
    req.params.comments;
    res.send("comment added!");
    app.listen(3000);
});