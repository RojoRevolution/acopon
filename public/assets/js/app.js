
const logoIcon = document.getElementById("logoIcon")
const logoText = document.getElementById("logoText")
let topPosition = 175;
let maxWidth = 425;

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {

        if (window.scrollY <= 300) {
            console.log("Scrolling - MaxWidth = ", maxWidth)
            maxWidth -= 25;
            // hideLogo();
            logoText.classList.add('disp-none');
            // logoIcon.classList.add('logoScroll');
            // logoIcon.style.top = "20px";
            // logoIcon.style.maxWidth = `${maxWidth}px`;
        }
    })

    // const hideLogo = () => {
    //     logoText.className.add('disp-none');

    // }


});