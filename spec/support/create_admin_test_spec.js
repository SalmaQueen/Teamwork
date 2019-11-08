const request = require('request');
const base_url = "http://localhost:3000/";

describe("create admin account", () => {
    describe("POST /",()=> {
        it("return status code 200", () =>{
            request.get(base_url,(error,request,body)=>{                
                expect(res.statusCode).toBe(200);
                done();
            });            
        });
        it("return message body", () =>{
            request.get(base_url,(error,request,body)=>{                
                expect(body).toBe("admin account created successfully!");
                done();
            });            
        });
        
        it("sends message body with username",() => {
            request.post(base_url,(error,request,body)=> {
                expect(request).toContain(username);
                done();
            });
            
        });
        it("sends message body with password",() => {
            request.post(base_url,(error,request,body)=>{
                expect(request).toContain(password);
                done();
            });            
        });
    });
});