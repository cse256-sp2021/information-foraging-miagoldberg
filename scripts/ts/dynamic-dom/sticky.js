export function setupSticky() {
    window.onscroll = function() {checkSticky()};

}

function checkSticky() {
    var header = document.getElementById("main-menu-container");

    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        /*header.top = document.getElementById("mturk-top-banner-drop-down-content").offsetHeight + 43;*/
    } else {
        header.classList.remove("sticky");
    }
}