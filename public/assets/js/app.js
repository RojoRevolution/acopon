document.addEventListener("DOMContentLoaded", () => {

    const logoDiv = document.getElementById("logo")
    const logoIcon = document.getElementById("logoIcon")
    const logoText = document.getElementById("logoText")
    const navItems = document.getElementById("mainNav")

    // Navigation Elements
    const homeNav = document.querySelector(".home")
    const aboutNav = document.querySelector(".about")
    const locationNav = document.querySelector(".location")
    const onTapNav = document.querySelector(".onTap")
    const OrderNav = document.querySelector(".order")

    // Content Elements
    const introSection = document.getElementById("introSection")
    const aboutSection = document.getElementById("aboutSection")
    const locationSection = document.getElementById("locationSection")
    const onTapSection = document.getElementById("onTapSection")

    // let topPosition = 175;
    // let maxWidth = 425;
    // let widthPercent = 100;
    // let scrollPos = 0;


    const findPos = (obj) => {
        let curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curtop];
        }
    }

    // aboutNav.addEventListener('click', () => {
    //     // Scroll to the y-pos of the portfolioSection
    //     console.log("CLICK ABOUT NAV")
    //     window.scrollTo(0, findPos(aboutSection))
    // })

    navItems.addEventListener('click', (event) => {
        event.preventDefault();
        let navItem = event.target.parentElement.className;
        console.log("click", navItem)
        // console.log(navItem)
        // window.scrollTo(0, findPos(navItem))

    })

    // window.addEventListener("scroll", () => {
    //     if (window.scrollY > 150) {
    //         console.log("Scrolling - MaxWidth = ", maxWidth)

    //     }
    // })



});