const socketHandler = require('./socket.handler');
const clientManager = require('../services/client.manager');

module.exports = (server) => {
    //  Start handshake do komunikacji na socketach
    //  nasluchuj na event headers podczas hadshake
    server.on('headers', () => {
        console.log('headers');
    });

    //  nasluchuj na event, ktory zdarzy sie gdy handshake sie zakonczy
    //  wtedy kiedy serwer zwróci poprawny status z kodem 101
    server.on('connection', (socket, _request) => {
        console.log('connection');
        socketHandler(socket);
    });

    //  Inne nasluchiwania
    server.on('listening', () => {
        console.log('listening');
    });

    server.on('error', (data) => {
        console.log('error');
        clientManager.deleteClient(data);
    });
};
