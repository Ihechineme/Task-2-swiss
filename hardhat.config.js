require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x3176ec41c047b4910885c7179168eaa89c27bb16ea8e472a79654ea39e9992c0"],
    },
  },
};
