const debug = require('debug');

const clients = [];

const console = {
    log: debug('client-manager:log')
};

function registerClient(client) {
    console.log('register client');
    clients.push(client);
}

function deleteClient(client) {
    console.log('delete client');
    clients.splice(client);
}

function broadcast(koko, message) {
    clients.forEach((clie) => {
        if (clie !== koko) {
            clie.send(message);
        }
    });
}

module.exports = {
    registerClient,
    deleteClient,
    broadcast
};
