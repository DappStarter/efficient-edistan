require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn protect good entire tackle segment'; 
let testAccounts = [
"0x9328fe1e9249130cfd81900bb709c8f2fbb5877fe747abf8bc397ad5aff288e5",
"0x110113e48c369b0a89b3250ebca47b7fccf6acb678b0bc494da5a8b910703e54",
"0x090b2dc7e13b11bfccaf5ab8f822dbf7a054a0ebd9fe53ca364baa89b9161547",
"0x3004eab79f2489d0c0bf5e776fc6b9f92a72a2b9a80027e35de90d6a3ec717bf",
"0x4597b5055f3b4e8051b47317e0e63cc4425978756168b0e89f2e635bfc613a4f",
"0x29b08af02db68d3ae707cffd478f76f7b79203622edd4dd7e0fdcccefd82aaab",
"0xba786a0dfff635951088d9a5dbe997fd148edea42e1fd314000ea23ea0e6db04",
"0x13d812e7fcb833a5c6d39840c2aa134229358e61ca102c4fc66d0af6ef6b2135",
"0xc9a3bf37d050c705223a72764eaf0e53f3a327ff7b4728a63e2101320f411ede",
"0x9a938ab3877da6dfb680f9b182bd1104c221ec78df0405a54cc2ef08e40a8b1a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
