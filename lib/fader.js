/**
 * fader.js
 *
 * @copyright Sam Hicks 2012
 * @link http://github.com/samhicks
 */

(function($) {

    $.fn.fader = function (options) {

        var slides = $(this).children();
        var numberOfSlides = slides.length;
        var settings = $.extend({
            'speed' : 2000,
            'easing' : 'linear'
        }, options);

        slidePosition();
        slideOrder();
        fade(slides.eq(0));
        
        // Stack slides
        function slidePosition () {
            slides.css ({
                'position' : 'absolute',
                'left' : 0
            })
        };

        // Slide order
        function slideOrder () {
            for (var zindex = numberOfSlides, index = 0; zindex > 0; zindex--, index++) {
                slides.eq(index).css('z-index', zindex);
            };
        };

        // Fade out active slide
        function fade (activeSlide) {
            activeSlide.fadeOut(settings.speed, settings.easing, shiftToBottom);
        };

        // Move faded slide to bottom of stack
        function shiftToBottom () {
            var index, slide, zIndex, activeSlide;

            for (index = 0; index < numberOfSlides; index++) {

                slide = slides.eq(index);
                zIndex = parseInt(slide.css('z-index'));

                if (zIndex === numberOfSlides) {
                    slide.css('z-index', 1);
                    unHide(slide);
                } else {
                    slide.css('z-index', ++zIndex);

                    // Check the new zIndex value
                    if (zIndex === numberOfSlides) {
                        activeSlide = slide;
                    };
                };
            };

            if (typeof activeSlide === 'undefined') {
                throw new Error('Active slide is not defined');
            }

            fade(activeSlide);
        };

        // Unhide inactive slide
        function unHide (slide) {
            slide.show ();
        };

    };

})(jQuery);
