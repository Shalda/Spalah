$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        controls: false,
        pause: 4000,            // время между сменой слайдов в м-сек
        speed: 500,             // длительность перехода слайда в м-сек

    });
    jQuery('#scrollup img').mouseover(function () {
        jQuery(this).animate({opacity: 0.65}, 100);
    }).mouseout(function () {
        jQuery(this).animate({opacity: 1}, 100);
    }).click(function () {
        window.scroll(0, 0);
        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(document).scrollTop() > 0) {
            jQuery('#scrollup').fadeIn('fast');
        } else {
            jQuery('#scrollup').fadeOut('fast');
        }
    });
});