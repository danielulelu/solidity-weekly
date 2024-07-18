async function main() {
  const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
  const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
  const contract = ModifyVariable.attach(contractAddress);

  // Modify the uint state variable x to 1337
  const tx1 = await contract.modifyToLeet();
  await tx1.wait();
  console.log("Modified x to 1337");

  // Modify the string state variable y to "newString"
  const tx2 = await contract.modifyString("newString");
  await tx2.wait();
  console.log("Modified y to newString");

  // Check new values
  const newX = await contract.x();
  console.log("New value of x:", newX.toNumber());

  const newY = await contract.y();
  console.log("New value of y:", newY);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
