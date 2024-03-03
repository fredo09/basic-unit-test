import  should  from "should";
import { addTested } from "./../app/calculator.js";


describe("Calcultator tests using SHOULD interface from CHAI module: ", function () {
  describe("Check addTested Function: ", function () {
    it("Check the returned value using: value.should.equal(value): ", function () {
      let result = addTested("text");
      should(result).equal("text tested");
    });
    it("Check the returned value using: value.should.be.a('value'): or not undefined", function () {
      let result = addTested("text");
        //should(result).be.a("string");
        //should(result).be.an("string")
        should(result).not.undefined;   //("string");
    });
    it("Check the returned value using: expect(value).to.have.lengthOf(value): ", function () {
      let result = addTested("text");
      should(result).have.lengthOf(11);
    });
  });
    
});
