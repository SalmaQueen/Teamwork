const request = require("request");
const base_url = "http://localhost:3000/";
 
 
describe("employee can deletegifs", () => {
    describe("GET /", () => {
        it("return a response status code of 200", () => {
            request.get(base_url,(error,response,body) =>{
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("return a successful message body", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('gif deleted');
                done();
            });
        });
        it("send message body with gif title", () => {
            request.post(base_url, (error,request,body) => {
                expect(body).toContain(gifTitle);
                done();
            });
        });
        it("send message body with gif id", () => {
            request.post(base_url, (error, request,body) => {
                expect(body).toContain(gifId);
            });
        });
    });
});
