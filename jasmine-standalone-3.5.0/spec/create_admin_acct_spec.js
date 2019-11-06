describe("admin account", () => {
    let body;
    let response;
  
    beforeEach(() => {
      body = new Body();
      response = new Response();
    });

});

describe("create admin account", () => {
    describe("POST /", () => {
        it("create admin account", () => {
            expect(body).toContain("name", "password");                          
        });
    });

    describe("GET /", () => {
        it("returns 'admin account created successfully'", () => {
            expect(response).toContain('admin account created successfully');        
                         
        });
    });
});
