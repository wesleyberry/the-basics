document.title = 'Hello World';
let button = document.getElementById('submit');

button.addEventListener('click', e => {
    e.preventDefault();
    console.log('clicked');
});

document.getElementById('box1').addEventListener('mouseover', e => {
    e.preventDefault();
    console.log('Moused over box 1');
});