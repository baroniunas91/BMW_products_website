"use strict";

//Smooth scrolling
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(document).ready(function () {
    //68mm wheel caps
    $('[data-fancybox="gallery1"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
    //60mm wheel caps
    $('[data-fancybox="gallery2"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
    //56mm wheel caps
    $('[data-fancybox="gallery3"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
    //82mm hood emblem
    $('[data-fancybox="gallery4"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
    //74mm hood emblem
    $('[data-fancybox="gallery5"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
    //video
    $('[data-fancybox="gallery6"]').fancybox({
        loop: true,
        animationEffect: "zoom",
    });
})
