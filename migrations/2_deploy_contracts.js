const GreenSatoshiToken = artifacts.require("GreenSatoshiToken");
const GreenMetaverseToken = artifacts.require("GreenMetaverseToken");
const STEPNNFT = artifacts.require("STEPNNFT");

module.exports = function (deployer, network, accounts) {
    // deploy GST
    deployer.deploy(GreenSatoshiToken).then(() => {
        // deploy GMT
        return deployer.deploy(STEPNNFT);
    });
};