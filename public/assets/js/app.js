
const logoDiv = document.getElementById("logo")
const logoIcon = document.getElementById("logoIcon")
const logoText = document.getElementById("logoText")
const navItems = document.getElementById("mainNav")


let topPosition = 175;
let maxWidth = 425;
let widthPercent = 100;
let scrollPos = 0;

document.addEventListener("DOMContentLoaded", () => {

    const findPos = (obj) => {
        let curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

    navItems.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("click")
        let navItem = event.target.parentElement.id;
        console.log(navItem)
    })

    window.addEventListener("scroll", () => {

        if (window.scrollY > 150) {
            console.log("Scrolling - MaxWidth = ", maxWidth)

        }
    })



});