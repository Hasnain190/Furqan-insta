// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import anime from 'animejs/lib/anime.es.js';

const inp = document.querySelector('#anime-input');

anime({
    targets: inp,


    value: [22, 9999],
    round: 1,
    easing: 'easeInOutExpo',
    loop: true,
    duration: 2000

})