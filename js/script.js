/* =========================================
                Preloader
========================================= */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
========================================= */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
                Progress bars
========================================= */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =========================================
                responsive tabs
========================================= */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});

/* =========================================
               Portfolio
========================================= */
$(window).on('load', function () {
    
    // Initialize Isotope
    $("#isotope-container").isotope({
    });
    
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function() {
       
        //get filter value
        var filterValue = $(this).attr('data-filter');
        
        //filter portfolio items
        
         $("#isotope-container").isotope({
             filter: filterValue
         });  
        
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
        
        
    });
    
});


/* =========================================
               Magnifier
========================================= */
$(function () {
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
});


/* =========================================
               Testimonials
========================================= */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =========================================
               counterup
========================================= */
$(function () {
    
    $(".counter").counterUp({
    delay: 10,
    time: 2000,
    });
});

/* =========================================
              clients
========================================= */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* =========================================
                Google map
========================================= */
$(window).on('load', function () {
    
    // variables for google map
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLating = {lat:40.712685, lng: -74.005920};
    //rendering google map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLating
    });
});




















































































