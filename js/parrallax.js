
let parallax = document.querySelector('.parallax');

function ScrollParallax (){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
}

window.addEventListener('scroll', ScrollParallax);