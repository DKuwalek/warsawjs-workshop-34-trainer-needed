function setupUI() {
    console.log('notification button setup UI');
    document.addEventListener('callForHelpEvent', () => {
        let el = document.body.querySelector('p');
        el.classList.remove('hidden');
    });
}
