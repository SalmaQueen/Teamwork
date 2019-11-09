app.post("/", (req,res) => {
    req.params.username;
    req.params.password;
    req.params.gifTitle;
    req.params.image;
    res.send("gif created successfully!");
    app.listen(3000);
});
