//SELECTORS
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const circles = document.querySelectorAll('.progress');

const progressLine = document.getElementById('progress-line')



//EVENT LISTENERS

let currentIndex = 1

//what happens when we click next button
next.addEventListener('click', () => {
    currentIndex++;
    //stops at circle 5
    if (currentIndex > circles.length) {
        currentIndex = circles.length;
    };
    //update CSS
    updateProgress();
});

//what happens when we click previous button
prev.addEventListener('click', () => {
    currentIndex--;
    //stops at circle 1
    if (currentIndex < 1) {
        currentIndex = 1;
    };
    //update CSS
    updateProgress();
});


//FUNCTIONS

function updateProgress() {
    //change progress line's width to appropriate %
    progressLine.style.width = (currentIndex - 1) / (circles.length - 1) * 100 +'%';
    //add/remove active class from a circle (forEach syntax: array.forEach(element, index, array) => {}); index(of the element) and array(that you call forEach on) are not mandatory
    circles.forEach((circle, index) => {
        if (index < currentIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        };
    });

    //freeze/unfreeze buttons
    if (currentIndex === 0) {
        prev.disabled = true;
    } else if (currentIndex === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }



}




