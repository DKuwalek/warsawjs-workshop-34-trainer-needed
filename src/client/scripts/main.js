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
        const url = 'ws://localhost:3000';
        socket = new WebSocket(url);
        // clientManager = new Cli

        // wyslac msg 
        socket.addEventListener("open", () => {
            //komunikacja jest zainicjowana
            //TODO do zainstalowania dodatek | Turbo console log
            console.log('open');
            // const payload = { action: 'alarm' };
            // socket.send(JSON.stringify(payload));
            // debugger;
        });

        socket.addEventListener("message", () => {
            //komunikacja jest zainicjowana
            //TODO do zainstalowania dodatek | Turbo console log
            console.log('message');
            document.dispatchEvent(new CustomEvent('bob'));
        });

        socket.addEventListener("close", () => {
            //komunikacja jest zainicjowana
            //TODO do zainstalowania dodatek | Turbo console log
            console.log('close');
        });

        socket.addEventListener("error", () => {
            //komunikacja jest zainicjowana
            //TODO do zainstalowania dodatek | Turbo console log
            console.log('error');
        });
        setupUI();
    }

    root.addEventListener('DOMContentLoaded', main);
    root.sendMessage = sendMessage;

}(window));
