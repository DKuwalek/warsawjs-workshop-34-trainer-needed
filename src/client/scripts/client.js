(function (root) {
    let socket = null;

    function sendMessage(message) {
        let data = JSON.stringify(message);
        socket.send(data);
    }

    function main() {
        const url = 'ws://localhost:3000';

        // TODO extract socket initialization using Object.assign(a, b)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        socket = new WebSocket(url);

        socket.addEventListener('open', () => {
            // Web Socket communication was confirmed by the server
            console.log('open');
        });

        socket.addEventListener('message', () => {
            console.log('Dispatching the "callForHelpEvent"');
            document.dispatchEvent(new CustomEvent('callForHelpEvent'));
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
