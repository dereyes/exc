jQuery.noConflict()(function ($) {
    
    $(document).ready(function() {
        
        // mobile menu
        $('#mobile-nav li.menu-item-has-children').prepend('<i class="arrow-more"></i>');
        $('#mobile-nav-icon').click(function(){
            $('#mobile-nav-container').slideToggle(500, function() {});
            $(this).toggleClass('open');
	    });
        $('#mobile-nav .arrow-more').click(function(){
            $(this).parent().find('.sub-menu').first().slideToggle(500, function() {});
            $(this).toggleClass('open');
        });
        
        //fixed header
        function setFixedHeader(){
             var scroll = $(window).scrollTop();
             if (scroll >= 400) {
                if ($("#wrapper").hasClass("fixed")){}else{
                    $("#wrapper").addClass("fixed");
                    $(".fixed #header").hide().slideDown(600, function() {});
                }
             }else{
                 $("#wrapper").removeClass("fixed");
             }
         }
        
        // Scroll to a Specific Div
        $(this).find('.scroll-to-target a, .lists-of-questions li a').on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
               scrollTop: $(target).offset().top - 150
             }, 1000);
        });
        
        
        
        $(window).load(function(){
           setFixedHeader(); 
        });
        
        $(window).scroll(function(){
           setFixedHeader(); 
        });
        
        // Home Carousel
        if ($('.home-carousel').length) {
        	$('.home-carousel > .vc_col-sm-12 > .vc_column-inner > .wpb_wrapper').slick({
                dots: true,
                arrows: true,
                infinite: false,
  				adaptiveHeight: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
        
        // Carousel Logos
        if ($('.carousel-logos').length) {
            $('.carousel-logos .wpb_image_grid_ul li').removeClass('isotope-item');
            $('.carousel-logos .wpb_image_grid_ul').slick({
                dots: false,
                arrows: true,
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 6,
                responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
              ]
            });
        }
        
        
        //fitvids
        $("#main").fitVids();

    });
});