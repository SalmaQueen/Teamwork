const express = require("express");
const app = express();

app.get("/", (req,res) => {
    req.params.gifTitle;
    req.params.gifId;  
    res.json(200);
    app.listen(3000);
});
