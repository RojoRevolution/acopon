document.addEventListener("DOMContentLoaded", () => {

    const logoDiv = document.getElementById("logo")
    const logoIcon = document.getElementById("logoIcon")
    const logoText = document.getElementById("logoText")
    const navItems = document.getElementById("mainNav")
    const headerLogoEl = document.getElementById("headerLogo")

    // Navigation Elements


    // Content Elements
    const home = document.getElementById("home")
    const about = document.getElementById("about")
    const location = document.getElementById("location")
    const onTap = document.getElementById("onTap")


    // Find Scroll position
    const findPos = (obj) => {
        let curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            console.log("Y Position: ", curtop)
            return [curtop];
        }
    }

    // Event listener for all nav items using event delegation
    navItems.addEventListener('click', (event) => {
        let navItem = event.target.parentElement.className;
        switch (navItem) {
            case "home":
                window.scrollTo(0, findPos(home))
                break;
            case "about":
                window.scrollTo(0, findPos(about))
                // window.scrollTo(0, 500)
                break;
            case "location":
                window.scrollTo(0, findPos(location))
                break;
            case "onTap":
                window.scrollTo(0, findPos(onTap))
                break;
        }
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 400) {
            headerLogoEl.classList.remove("hide")
        }
        if (window.scrollY <= 400) {
            headerLogoEl.classList.add("hide")
        }

    })



});