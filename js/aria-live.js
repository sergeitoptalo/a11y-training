(function() {
    const updatesScreen = document.querySelector('.updates-screen');
    let message = 'A new event has been added to the upcoming events section';

    setInterval(() => {
        updatesScreen.innerHTML = message;
        updatesScreen.classList.add('is-active');
        setTimeout(() => {
            updatesScreen.classList.remove('is-active');
        }, 7000);
    }, 20000);
})()