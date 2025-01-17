const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");


describe("Faucet", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory("Faucet");
    const faucet = await Faucet.deploy();

    const [owner] = await ethers.getSigners();

    let withdrawalAmount = ethers.utils.parseEther("1", "ether");

    console.log("Signer 1 address: ", owner.address);
    return { faucet, owner, withdrawalAmount };
  }

  //   first test
  it("should deploy and set the owner correctly", async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables);

    expect(await faucet.owner()).to.equal(owner.address);
  });

  //   second test for withdrawal amount test
  it("should deploy and set the owner correctly", async function () {
    const { faucet, withdrawAmount } = await loadFixture(
      deployContractAndSetVariables
    );
    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted;
  });
});
