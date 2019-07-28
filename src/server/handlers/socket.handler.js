const { registerClient } = require('../services/client.manager');
const { deleteClient } = require('../services/client.manager');
const { broadcast } = require('../services/client.manager');

module.exports = (socket) => {
    registerClient(socket);
    socket.on('open', () => {
        console.log('open');
    });

    socket.on('close', () => {
        console.log('close');
        deleteClient(socket);
    });

    socket.on('message', (message) => {
        try {
            broadcast(message);
            console.log(message);
        } catch (err) {
            console.error(err);
        }
    });
    socket.on('error', (err) => {
        console.log('error', err);
        deleteClient(socket);
    });
};
