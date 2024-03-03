import { assert } from "chai";
import { addTested } from "./../app/calculator.js";


describe("Calcultator tests using ASSERT interface from CHAI module: ", function () {

  describe("Check addTested Function: ", function () {
    it("Check the returned value using: assert.equal(value,'value'): ", function () {
      let result = addTested("text");
      assert.equal(result, "text tested");
    });
      
    it("Check the returned value using: assert.typeOf(value,'value'): ", function () {
      let result = addTested("text");
      assert.typeOf(result, "string");
    });
      
    it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
      let result = addTested("text");
      assert.lengthOf(result, 11);
    });
  });

});
