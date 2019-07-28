const whitelist = require('../config/host.whitelist');
const debug = require('debug');

const console = {
    log: debug('verify-client')
};

function verifyClient(client) {
    // TODO verify if client is authorized to access the app by checking cookies
    const host = client.origin;
    const status = whitelist.includes(host);
    console.log(`status = ${status}`);
    return true;
}

module.exports = {
    verifyClient
};
