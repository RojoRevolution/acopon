document.addEventListener("DOMContentLoaded", () => {

    const logoDiv = document.querySelector(".logo");
    const headerGradientDiv = document.querySelector(".headerGradient");
    const sloganText = document.querySelector(".introText");
    const navItems = document.getElementById("mainNav");
    const headerLogoEl = document.getElementById("headerLogo");

    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sideMenu = document.querySelector('.sidenav')
    const closeBtn = document.querySelector('.closebtn')


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
        // console.log(event.className)
        let navItem = event.target.parentElement.className;
        // console.log(navItem)
        switch (navItem) {
            case "home":
                window.scrollTo(0, findPos(home))
                break;
            case "about":
                window.scrollTo(0, findPos(about))
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
        if (window.scrollY >= 200) {
            logoDiv.style.opacity = "0";
            sloganText.style.opacity = "0";
        }
        if (window.scrollY >= 400) {
            headerGradientDiv.classList.remove("hide");
            headerLogoEl.classList.remove("hide");
        }
        if (window.scrollY <= 200) {
            headerGradientDiv.classList.add("hide");
            headerLogoEl.classList.add("hide");
            logoDiv.style.opacity = "1";
            sloganText.style.opacity = "1";

        }
    })

    mobileMenuBtn.addEventListener('click', () => {
        sideMenu.style.width = "250px";
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.style.width = "0px"
    });

    mobileMenu.addEventListener('click', (event) => {
        let mobileNavItem = event.target.className;
        console.log(mobileNavItem)
        switch (mobileNavItem) {
            case "home":
                window.scrollTo(0, findPos(home))
                sideMenu.style.width = "0px"
                break;
            case "about":
                sideMenu.style.width = "0px"
                window.scrollTo(0, findPos(about))
                break;
            case "location":
                sideMenu.style.width = "0px"
                window.scrollTo(0, findPos(location))
                break;
            case "onTap":
                sideMenu.style.width = "0px"
                window.scrollTo(0, findPos(onTap))
                break;
        }
    })

});