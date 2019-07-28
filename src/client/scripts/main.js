// import broadcast from '../../server/services/client.manager';
(function (root) {
    let socket = null;
    // console.log(broadcast);
    // let clientManager = null;

    function sendMessage(message) {
        let data = JSON.stringify(message);
        socket.send(data);
    }

    function main() {
        console.log('hello world');
        setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);

}(window));
