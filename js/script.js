window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log(sidenVises);

    document.querySelector(".icon_close").addEventListener("click", closeNav);
    document.querySelector(".open_close").addEventListener("click", openNav);

}

function openNav() {
    document.querySelector(".main-menu").style.transform = "translateX(0%)";
    document.querySelector(".open_close").style.display = "none";
    document.querySelector(".icon_close").style.display = "block";

}

function closeNav() {
    document.querySelector(".main-menu").style.transform = "translateX(-182%)";
    document.querySelector(".open_close").style.display = "block";
}

function openSubNav() {
    document.querySelector('.layer').toggleClass('layer-is-visible');
}

// Menu
//	$('a.open_close').on("click", function () {
//		$('.main-menu').toggleClass('show');
//		$('.layer').toggleClass('layer-is-visible');
//	});
//	$('a.show-submenu').on("click", function () {
//		$(this).next().toggleClass("show_normal");
//	});
//
