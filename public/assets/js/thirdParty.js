// ============================
// Untapped JS
// ============================
!function (e, n) { var t = document.createElement("script"), a = document.getElementsByTagName("script")[0]; t.async = 1, a.parentNode.insertBefore(t, a), t.onload = t.onreadystatechange = function (e, a) { (a || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t = void 0, a || n && n()) }, t.src = e }("https://embed-menu-preloader.untappdapi.com/embed-menu-preloader.min.js", function () { PreloadEmbedMenu("menu-container", 10788, 39274) });

// ============================
// Google Maps JS
// ============================
function initMap() {
    var uluru = { lat: 30.192579, lng: -98.089101 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru,
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    map.setOptions({ styles: noPoi });
}

