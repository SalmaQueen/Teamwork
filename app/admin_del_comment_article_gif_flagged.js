const express = require("express");
const app = express();

<<<<<<< HEAD:app/admin_del_comment_article_gif_flagged.js
app.delete("/", (req,res) => {
=======
app.post("/", (req,res) => {
>>>>>>> emp_flag_gif_comment_article:app/emp_flag_gif_comment_article.js
    req.params.articleId;
    req.params.gifId;
    req.params.commentId; 
    req.params.articleFlagId;
    req.params.gifFlagId;
    req.params.commentFlagId;
    res.json(200);
    app.listen(3000);
});
