require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dM0MA3LVQnucIOKIi6PP1JGGVTMxXSBt',
      accounts: [
        '9c2b5d1434abd56bb88cd11f1de11912e8a0c0ca0cc7857fe9a6fd3c61cf9785',
      ],
    },
  },
}