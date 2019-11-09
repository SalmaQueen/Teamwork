const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.gifTitle;
    req.params.gifId;
    res.send("gif deleted!");
    app.listen(3000);
});
