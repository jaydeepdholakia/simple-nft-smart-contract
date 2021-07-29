const { expect } = require("chai");

describe("MyCryptoLions", function () {
    it("Should return the right name and symbol", async function () {
        const contract = await ethers.getContractFactory("MyCryptoLions");
        const MyCryptoLions = await contract.deploy("MyCryptoLions", "MCL");

        // await MyCryptoLions.deployed();

        expect(await MyCryptoLions.name()).to.equal("MyCryptoLions");
        expect(await MyCryptoLions.symbol()).to.equal("MCL");
    })
});