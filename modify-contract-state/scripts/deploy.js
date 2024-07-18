 async function main() {
    const ModifyVariable  = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10, "initialString");
    await contract.deployed();

    console.log("ModifiedVariable deployed to:", contract.address);
 }

 main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });