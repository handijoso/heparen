//Showing content/element while scrolling
let windowHeight = window.innerHeight;

const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
            console.log("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);


// define variables
const items = document.querySelectorAll(".timeline .tahap");

// check if an element is in viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

const theory = document.querySelector(".subject-theory")
const practical = document.querySelector(".subject-prac")
const createImg = document.querySelector(".subject-img");

theory.addEventListener("click", () => {
    createImg.classList.add("subject-anime")
    createImg.setAttribute("src", "Heparen-Dark-Blue.png");
    setTimeout(() => createImg.classList.remove("subject-anime"), 1000)
})

practical.addEventListener("click", () => {
    createImg.classList.add("subject-anime")
    createImg.setAttribute("src", "praktek.jpeg");
    setTimeout(() => createImg.classList.remove("subject-anime"), 1000)
})