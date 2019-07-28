(function (root) {
    let socket = null;

    function sendMessage(message) {
        let data = JSON.stringify(message);
        socket.send(data);
    }

    function main() {
        const url = 'ws://localhost:3000';
        socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            // Web Socket communication was initiated
            console.log('open');
        });

        socket.addEventListener('message', () => {
            console.log('message');
            document.dispatchEvent(new CustomEvent('bob'));
        });

        socket.addEventListener('close', () => {
            console.log('close');
        });

        socket.addEventListener('error', () => {
            console.log('error');
        });
        setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);
    root.sendMessage = sendMessage;

}(window));
