const slideElements = [{
        src: "img/img2.jpg",
        text: "Pierwszy tekst"
    },
    {
        src: "img/img3.jpg",
        text: "Drugi tekst"
    },
    {
        src: "img/img4.jpg",
        text: "Trzeci tekst"
    },
]
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('span')];
const time = 2000;
let activeElement = 0;

function changeDot() {
    const activeDot = dots.findIndex(dot => (dot.classList.contains('active')));
    dots[activeDot].classList.remove('active');
    dots[activeElement].classList.add('active');
}

function changeImage(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(startChanging);
        if (e.which == 37 || e.keyCode == 37) {
            activeElement -= 2;
            if (activeElement < -1) {
                activeElement = 1;
            }
            changeSlide();
        } else if (e.which == 39 || e.keyCode == 39) {
            changeSlide();
        }
        startChanging = setInterval(changeSlide, time);
    }
}

function changeSlide() {
    activeElement++;
    if (activeElement === slideElements.length) {
        activeElement = 0;
    }
    image.src = slideElements[activeElement].src;
    h1.textContent = slideElements[activeElement].text;
    changeDot();
}
let startChanging = setInterval(changeSlide, time);
window.addEventListener('keydown', changeImage);