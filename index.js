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
const items = document.querySelectorAll(".tahap");

// check if an element is in viewport
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    let isVisible = elemTop < window.innerHeight && elemBottom <= 530;
    return isVisible;
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isScrolledIntoView(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}

// listen for events
// window.addEventListener("load", callbackFunc);
// window.addEventListener("resize", callbackFunc);
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