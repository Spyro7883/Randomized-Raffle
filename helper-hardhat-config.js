const { ethers } = require("hardhat");

const networkConfig = {
  4: {
    name: "rinkeby",
    subscriptionId: "18523",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    interval: "30",
    entranceFee: ethers.utils.parseEther("0.1"),
    callbackGasLimit: "500000", // 500 000
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
  },
  5: {
    name: "goerli",
    subscriptionId: "6397",
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    interval: "30",
    entranceFee: ethers.utils.parseEther("0.1"),
    callbackGasLimit: "500000", // 500 000
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.1"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    subscriptionId: "0",
    callbackGasLimit: "500000", // 500 000
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
