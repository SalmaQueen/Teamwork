const request = require("request");
const base_url = "http://localhost:3000/";
 
 
<<<<<<< HEAD:spec/admin_del_article_comment_gif_flagged_spec.js
describe("admin can delete flagged gifs, comments and articles as inappropriate", () => {
    describe("DELETE /", () => {
        it("return a response status code of 200", () => {
=======
describe("employee can flag gifs, comments and articles as inappropriate", () => {
    describe("GET /", () => {
        it("return a successful response status code of 200", () => {
>>>>>>> emp_flag_gif_comment_article:spec/emp_flag_gif_comment_article_spec.js
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
<<<<<<< HEAD:spec/admin_del_article_comment_gif_flagged_spec.js

        it("return a sucessful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('gif deleted');
=======
        it("return a successful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.body).toBe('gif flagged');
>>>>>>> emp_flag_gif_comment_article:spec/emp_flag_gif_comment_article_spec.js
                done();
            });
        });

<<<<<<< HEAD:spec/admin_del_article_comment_gif_flagged_spec.js
        it("return a sucessful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('comment deleted');
                done();
            });
        });
    
        it("return a sucssful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('article deleted');
=======
        it("return a successful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.body).toBe('article flagged');
                done();
            });
        });

        it("return a successful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.body).toBe('comment flagged');
>>>>>>> emp_flag_gif_comment_article:spec/emp_flag_gif_comment_article_spec.js
                done();
            });
        });

        it("send message body with gif id", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(gifId);
                done();
            });
        });

        it("send message body with article id", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(articleId);
            });
        });

        it("send message body with comment id", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(commentId);
            });
        });
       
    });
});
