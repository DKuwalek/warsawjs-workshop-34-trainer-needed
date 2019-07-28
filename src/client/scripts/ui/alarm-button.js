
function setupUI() {
    let callHelpButton = document.body.querySelector('#callHelpButton');
    callHelpButton.addEventListener('click', () => {
        sendMessage('Attendee needs help');
    });
}
