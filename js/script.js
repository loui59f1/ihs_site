document.addEventListener("DOMContentLoaded", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector("#closebtn").addEventListener("click", closeNav);
    document.getElementById("openbtn").addEventListener("click", openNav);
    document.querySelector(".icon_submenu").addEventListener("click", openLocalNav);
    document.querySelector("#localclosebtn").addEventListener("click", closeLocalNav);

}

function openNav() {
    document.getElementById("burger-menu").style.width = "80%";
}

function closeNav() {
    document.getElementById("burger-menu").style.width = "0%";
}


function openLocalNav() {
    document.getElementById("local-burger-menu").style.width = "80%";
}

function closeLocalNav() {
    document.getElementById("local-burger-menu").style.width = "0%";
}
