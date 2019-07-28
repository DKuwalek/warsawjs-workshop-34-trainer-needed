const { registerClient } = require('../services/client.manager');
const { deleteClient } = require('../services/client.manager');
const { broadcast } = require('../services/client.manager');
module.exports = (socket) => {
    // const payload = JSON.stringify({ obiad: '13:15' });
    // console.log('message is coming');
    // socket.send(payload);
    // console.log(payload);

    registerClient(socket);
    socket.on('open', () => {
        console.log('open');
    });
    socket.on('close', () => {
        console.log('close');
        //
        deleteClient(socket);
    });
    socket.on('message', (payload) => {
        try {
            broadcast(payload);
            // const data = JSON.parse(payload);
            console.log('message is coming');
            console.log(payload);
        } catch (err) {
            console.error(err);
        }
    });
    socket.on('error', () => {
        console.log('error');
        deleteClient(socket);
    });
};
