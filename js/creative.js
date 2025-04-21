/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // Safely get attribute value to prevent XSS
    function safeAttr(element, attrName) {
        var attrValue = $('<div>').text($(element).attr(attrName)).text();
        try {
            var url = new URL(attrValue, window.location.origin);
            return url.pathname + url.search + url.hash; // Return only the relative part of the URL
        } catch (e) {
            return ''; // Return an empty string if the URL is invalid
        }
    }

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var safeHref = safeAttr(this, 'href');
        
        if (safeHref && safeHref.length > 0) {
            var targetElement = document.querySelector(safeHref);
            if (targetElement) {
                $('html, body').stop().animate({
                    scrollTop: ($(targetElement).offset().top - 50)
                }, 1250, 'easeInOutExpo');
            }
        }
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
    
    // Safe form handling to prevent DOM text reinterpretation
    $('#contactForm').on('submit', function(event) {
        // Uncomment the following line if you're handling the form with JavaScript
        // event.preventDefault();
        
        // Safely get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        // Safely update any DOM elements with text content, not HTML
        // Example: updating a success message
        function displayMessage(message) {
            $('#form-message').text(message);
        }
    });

})(jQuery); // End of use strict
