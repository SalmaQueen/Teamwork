let request = require("request");
let createAdmin = require("../app.js")
let base_url = "http://localhost:3000/";

describe("create admin account", () => {
    describe("POST /", () => {
        it("create admin account", () => {
            request.post(base_url, (error,request,body) =>{
                expect(body).toContain("name", "password");
                done();
            })
        });
    });

    describe("GET /", () => {
        it("returns 'admin account created successfully'", () => {
            request.get(base_url, (error, response, body) => {
                expect(body).toBe('admin account created successfully');
                helloWorld.closeServer();
                done();
            });
        });
    });
});