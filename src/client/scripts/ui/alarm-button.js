
function setupUI() {
    console.log('alarm button setup UI');
    // nasluchac na klikniecie
    let baton = document.body.querySelector("#id");
    baton.addEventListener('click', (event) => {
        sendMessage('Jest wiadomość');
    });
}