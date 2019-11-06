let request = require("request");
let base_url = "http://localhost:3000";

describe ("Hello World Server", () =>{
    describe("GET /", ()=>{
        it("returns status code 200", () => {
            request.get(base_url, (error, response,body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
            
        });
        it("returns Hello World", () => {
            request.get(base_url, (error, response,body) => {
                expect(body).toBe("Hello World");
                done();
            });
            
        });
    });
});