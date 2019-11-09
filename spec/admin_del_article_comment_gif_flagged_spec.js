const request = require("request");
const base_url = "http://localhost:3000/";
 
 
describe("admin can delete flagged gifs, comments and articles as inappropriate", () => {
    describe("DELETE /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("return a sucessful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('gif deleted');
                done();
            });
        });

        it("return a sucessful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('comment deleted');
                done();
            });
        });
    
        it("return a sucssful response message", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe('article deleted');
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
