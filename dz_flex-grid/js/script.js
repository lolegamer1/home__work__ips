window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    const animatedBlock = document.getElementById('animatedBlock');
    if (!animatedBlock) {
        return;
    }

    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset + window.innerHeight > animatedBlock.offsetTop + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded');
                reached = true;
            }

        }
    })
}

const button = document.querySelector('#buttonUp');
button.addEventListener('click', scrollToStart);
function scrollToStart(event) {
  event.preventDefault();
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth',
  })
}

const windowOuterWidth = window.outerWidth;
const burgerTrigger = document.getElementById('burger');
const navTrigger = document.getElementById('navTrigger');
console.log(burgerTrigger);
burgerTrigger.addEventListener('click',function(event) {
  navTrigger.classList.toggle('adaptiv_higt');
});

const crossActiv = document.querySelectorAll('stick');
console.log(crossActiv);
burgerTrigger.addEventListener('click',function(event) {
  crossActiv.classList.toggle('burger_cross');
});
