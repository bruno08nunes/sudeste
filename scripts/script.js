const menu = document.querySelector("#menu");
menu.addEventListener("click", clickMenu)

window.onresize = function () {
    if (window.innerWidth >= 620) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

function clickMenu() {
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}