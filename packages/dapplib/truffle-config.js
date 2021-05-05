require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name renew sad smooth half enroll ordinary tuition'; 
let testAccounts = [
"0x65173f4fc79250d977c9adf924d2976ead47835e31c841f6849046363e640f5e",
"0xcb1f7fe212c20ac7671bb60c9a6884dcd2b675495e8c51077a6615ff574de20e",
"0x81381c9a8eb5ab2ccc6d389c895f8fdf9fecab93adc5445cdbfd7f0b316615b6",
"0x8f95342c632ff92ad218248cb56a00f980477d91bc4bc1779e37cb9709447fb1",
"0x1615a9287ea181857e554751044074e600a467be8dc0585ebbaaac82546b13f8",
"0x14cde5e13ac7f750de2bb4eeecb340d1ebe9fc79ea05cd6232fd149e9432c268",
"0x5fdbd37f53be1858acd5ff2eabff58a774abe105ce20525aa139cf47471c3d65",
"0xfc1db0c34230cac717ae1de1025a5c9576b38b8123fdb1afae3972003f4fc6cd",
"0xe9fecf23c1d8901d0632d7fbef2cef683985ae8146bbe920c253061b57ac185a",
"0x41dec7046a20e3c10b2bbf8484fc043cd9ca566a5e073164477b6a9d6d6b9374"
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
