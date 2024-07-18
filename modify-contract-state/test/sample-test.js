// import testing libraries: https://www.chaijs.com/guide/styles/
import { expect, assert } from "chai";

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  it("should change x to 1337", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10, "initialString");

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);
  });

  it("should change y to a new string", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10, "initalString");

    // modify y from "initialString" to "leetString" via this function!
    await contract.modifyString("newString");

    // getter for state variable y
    const newY = await contract.y();
    assert.equal(newY, "newString");
  });
});
