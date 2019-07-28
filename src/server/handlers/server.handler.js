const socketHandler = require('./socket.handler');
const clientManager = require('../services/client.manager');

module.exports = (server) => {
    server.on('headers', () => {
        console.log('headers');
    });

    server.on('connection', (socket, _request) => {
        console.log('connection');
        socketHandler(socket);
    });

    server.on('listening', () => {
        console.log('listening');
    });

    server.on('error', (data) => {
        console.log('error');
        clientManager.deleteClient(data);
    });
};
