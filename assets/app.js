import './bootstrap';
//import './styles/app.scss';
//Add bootstrapp libries
import * as bootstrap from 'bootstrap';
import './styles/app.scss';
import './styles/app.css';
import './js/color-modes';
import './js/dashboard';

console.log("TEST FONCTIONNEMENT JS");

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

/*let btnRed = document.querySelector('.btnRed');
let btnBlue = document.querySelector('.btnBlue');
let myButton = document.querySelector('.btn');

btnRed.addEventListener('click', () => { 
    myButton.classList.remove('yellow');
    myButton.classList.add('red');
});

btnBlue.addEventListener('click', () => { 
    myButton.classList.remove('red');
    myButton.classList.add('yellow');
});*/

const mybtn = document.querySelector('.mybtn');
mybtn.addEventListener('click', () => {
    mybtn.style.backgroundColor = '#ffac09';
    mybtn.style.boxShadow = '0 0 40px #ffac09';
    mybtn.style.transition = '.5s ease';
});
console.log("TEST FONCTIONNEMENT JS");