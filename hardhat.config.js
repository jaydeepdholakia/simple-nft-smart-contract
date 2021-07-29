/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-ethers");
 require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.6",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
