(function() {
    const updatesScreen = document.querySelector('#updates-screen');
    let counter = 0;
    setInterval(() => {
        counter += 1;
        updatesScreen.innerHTML = counter;
    }, 1000);
})()