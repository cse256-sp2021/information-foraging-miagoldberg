export function setupSticky() {
    window.onscroll = function() {checkSticky()};

}

function checkSticky() {
    var header = document.getElementById("main-menu-container");

    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}