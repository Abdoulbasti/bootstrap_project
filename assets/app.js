import './bootstrap';
//import './styles/app.scss';
//Add bootstrapp libries
import * as bootstrap from 'bootstrap';
import './styles/app.css';
import './js/color-modes'


document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        btn.style.backgroundColor = '#ffac09';
        btn.style.boxShadow = '0 0 40px #ffac09';
        btn.style.transition = '.5s ease';
    });
});

console.log("Ceci est un test du fonctionnement de javascript configurer sur bootstrap");