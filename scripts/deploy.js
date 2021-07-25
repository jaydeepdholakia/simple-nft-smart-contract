
async function main() {
    const [deployerAcc] = await ethers.getSigners()
    const contract = await ethers.getContractFactory("MyCryptoLions");
    const MyCryptoLions = await contract.deploy("MyCryptoLions", "MLC");

    console.log("Deploying contract with address: ", deployerAcc.address);
    console.log("Contract Deployed at: ", MyCryptoLions.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });