const request = require('request');
const base_url = "http://localhost:3000/";

describe("admin sign in", () => {
    describe("GET/",()=> {
        it("return status code 200", () =>{
            request.get(base_url,(error,response,body)=>{                
                expect(response.statusCode).toBe(200);
                done();
            });            
        });
<<<<<<< HEAD:spec/support/create_admin_test_spec.js
        it("return message body", () =>{
=======
        it("return success message", () =>{
>>>>>>> admin_sign_in:spec/admin_sign_in_spec.js
            request.get(base_url,(error,request,body)=>{                
                expect(body).toBe("admin logged in successfully!");
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