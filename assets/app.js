import './bootstrap';
//import './styles/app.scss';
//Add bootstrapp libries
import * as bootstrap from 'bootstrap';
import './styles/app.css';
import './js/color-modes'


let btnRed = document.querySelector('.btnRed');
let btnBlue = document.querySelector('.btnBlue');
let myButton = document.querySelector('.btn');

btnRed.addEventListener('click', () => { 
    myButton.classList.remove('yellow');
    myButton.classList.add('red');
});

btnBlue.addEventListener('click', () => { 
    myButton.classList.remove('red');
    myButton.classList.add('yellow');
});

console.log("AUTRES CHOSES");