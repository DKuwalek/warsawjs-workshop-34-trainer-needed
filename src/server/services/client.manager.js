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

function broadcast(clientBroadcasting, message) {
    clients.forEach((registeredClient) => {
        if (registeredClient !== clientBroadcasting) {
            registeredClient.send(message);
        }
    });
}

module.exports = {
    registerClient,
    deleteClient,
    broadcast
};
