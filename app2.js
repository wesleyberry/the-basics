window.addEventListener('keydown', e => {
    if(event.key === 'a') {
        document.body.style.background = 'black';
    }
});

window.addEventListener('keydown', e => {
    if(event.key === 'y') {
        document.body.style.background = 'navy';
    }
});

window.addEventListener('keyup', e => {
    document.body.style.background = 'darkGrey';
});