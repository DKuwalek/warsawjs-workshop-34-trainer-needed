(function (root) {
    function setupServer() {
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
    Object.assign(root.app, {setupServer, sendMessage});
    }
}(window))