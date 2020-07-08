"use strict";

import dropDownMenuData from './data/dropdownMenuData.js';
import caps_68_data from './data/caps_68_data.js';
import caps_60_data from './data/caps_60_data.js';
import caps_56_data from './data/caps_56_data.js';
import badges_82_data from './data/badges_82_data.js';
import badges_74_data from './data/badges_74_data.js';
import renderDropDownMenu from './renderDropDownMenu.js';
import renderCaps from './renderCaps.js';

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

renderDropDownMenu('.dropdown-menu', dropDownMenuData);
renderCaps('.wheel-caps-68', caps_68_data);
renderCaps('.wheel-caps-60', caps_60_data);
renderCaps('.wheel-caps-56', caps_56_data);
renderCaps('.hood-badges-82', badges_82_data);
renderCaps('.hood-badges-74', badges_74_data);
