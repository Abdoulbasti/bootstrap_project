/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './bootstrap';
import './styles/app.scss';
//Add bootstrapp libries
import * as bootstrap from 'bootstrap';
import './dashboard';
import './js/color-modes'

/*import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';*/



/*let but = document.querySelector("monButton");
let sideBarDiv = document.querySelector("hidenClass");

but.addEventListener('click', () =>{
    sideBarDiv.classList.add("visually-hidden-focusable");
});*/


/*let btnRed = document.querySelector('.btnRed');
let btnBlue = document.querySelector('.btnBlue');
let myButton = document.querySelector('.btn');
btnRed.addEventListener('click', () => { 
    myButton.classList.remove('blue');
    myButton.classList.add('red');
});
btnBlue.addEventListener('click', () => { 
    myButton.classList.remove('red');
    myButton.classList.add('blue');
});
console.log('MESSAGER DE CONSOLE POUR TESTE!');*/

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
});