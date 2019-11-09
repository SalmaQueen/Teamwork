const request = require("request");
const base_url = "http://localhost:3000/";
 
 
describe("employee can flag gifs, comments and articles as inappropriate", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
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
