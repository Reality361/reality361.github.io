"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* ===============================================================
		GLIGHTBOX
	=============================================================== */
    const lightbox = GLightbox({
        touchNavigation: true,
    });

    /* ===============================================================
		MASONRY WITH IMAGES LOADED
	=============================================================== */
    const masonryGrid = document.querySelector(".masonry-wrapper");
    if (masonryGrid) {
        var msnry = new Masonry(masonryGrid, {
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
            percentPosition: true,
            transitionDuration: 300,
        });
        imagesLoaded(masonryGrid).on("progress", function () {
            msnry.layout();
        });
    }

    /* ===============================================================
		NAVBAR TOGGLING
	=============================================================== */
    document
        .querySelector(".navbar-toggler")
        .addEventListener("click", function () {
            document.querySelector(".sidebar").classList.toggle("active");
            document.querySelector(".page-holder").classList.toggle("active");
        });
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
