/**
    
* Template Name: Potato - Personal Portfolio Template
* Version: 1.4
* Author: Themetrading
* Email: themetrading@gmail.com
* Developed By: Themetrading
* First Release: 9 September 19
* Author URL: www.themetrading.com

**/

//----------------------------------------------
// Cache jQuery Selector
// Navbar scrolling
// Fact Counter For Achivement Counting
// When document is Scrollig, do
// LightBox / Fancybox
// Youtube video
// Testimonial
// Scroll Top
// Elements Animation
// Gallery With Filters List
// Contact Form Validation
//----------------------------------------------

(function ($) {
    "use strict";
	
	// Cache jQuery Selector
	//------------------------
	var $body 			= $("body"),
		$window   		= $(window),	
		$testimonial 	= $('.feedback'),
		$contact 		= $('#contact-form')

	 $body.scrollspy({
	    target: ".navbar-collapse",
	    offset: 20

	  });

	// Share Toggle js
	//--------------------------------------
		$(document).ready(function(){
		  $(".share-tab").click(function(){
			$(".share-item").slideToggle("slow");
		  });
		});
	// Portfolio Filter js
	//----------------------------------------
		$(document).ready(function(){
		  $(".btn-filter span").click(function(){
			$(".btn-filter .controls").slideToggle("slow");
		  });
		});
	
	
	 // Auto active class adding with navigation
	 //----------------------------------------------
    $window.on('load', function () {
        var current = location.pathname;
        var $path = current.substring(current.lastIndexOf('/') + 1);
        $('.list-unstyled a').each(function (e) {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($path == $this.attr('href')) {
                $this.addClass('active');
            } else if ($path == '') {
                $('.list-unstyled li:first-child > a').addClass('active');
            }
        })
    })
	
	// Navbar scrolling
	//-------------------------------------
    $window.on("scroll",function () {

      var bodyScroll = $window.scrollTop(),
        navbar = $(".main-nav"),
        logo = $(".main-nav .navbar-brand> img");

      if(bodyScroll > 100){

        navbar.addClass("nav-scroll");

      }else{

        navbar.removeClass("nav-scroll");
      }
    });

	// Testimonial
	//------------------------------------
	 $('.feedback').owlCarousel({
	     loop: true,
	     autoplay: true,
	     autoplayTimeout: 3000,
	     margin: 0,
	     nav: false,
	     dots: true,
		 navText: [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>' ],
	     responsive:{

	        0:{
	          items:1
	        },
	        600:{
	          items:1
	        },
	        1024:{
	          items:1
	        },
	        1200:{
	          items:1
	        }
	      }
	      
	  });
	
    //Typed Text
    //------------------------------------
	$(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000
        });
    });

	
	// Fact Counter For Achivement Counting
	//----------------------------------------
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .count.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-num").attr("data-stop"),
					r = parseInt($t.find(".count-num").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-num").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-num").text(this.countNum);
						}
					});
				}	

				//set skill building height
				
				var size = $(this).children('.progress-bar').attr('aria-valuenow');
				$(this).children('.progress-bar').css('width', size+'%');

			});
		}
	}
	
	// When document is Scrollig, do	
	//---------------------------------
	$window.on('scroll', function() {
		factCounter();
	});

	// LightBox / Fancybox
	//--------------------------------
	$('[data-fancybox="gallery"]').fancybox({
		 animationEffect: "zoom-in-out",
		 transitionEffect: "slide",
		 transitionEffect: "slide",
	});

	// Youtube video
	//--------------------------------------
	jQuery(function(){
      jQuery("a.video-popup").YouTubePopUp();
      //jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
     });

	// Scroll Top
	//----------------------------------
	$(window).scroll(function(){ 
	  if ($(this).scrollTop() > 500) { 
	    $('#scroll').fadeIn(); 
	  } else { 
	    $('#scroll').fadeOut(); 
	  } 
	}); 
	$('#scroll').click(function(){ 
	  $("html, body").animate({ scrollTop: 0 }, 1000); 
	  return false; 
	});

	
	// Elements Animation
	//-----------------------
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	
	// Put slider space for nav not in mini screen
	//----------------------------------------------------
	if(document.querySelector('.nav-on-top') !== null) {
		var get_height = jQuery('.nav-on-top').height();
		if(get_height > 0 && $window.width() > 100){
			jQuery('.nav-on-top').next().css('margin-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 100){
				jQuery('.nav-on-top').next().css('margin-top', '0');
			}
			else {
				jQuery('.nav-on-top').next().css('margin-top', get_height);
			}
		});
	 }
	 if(document.querySelector('.nav-on-banner') !== null) {
		var get_height = jQuery('.nav-on-banner').height();
		if(get_height > 0 && $window.width() > 100){
			jQuery('.page-banner').css('padding-top', get_height);
		}
		$window.on('resize', function(){
			if($window.width() < 100){
				jQuery('.page-banner').css('padding-top', '0');
			}
			else {
				jQuery('.page-banner').css('padding-top', get_height);
			}
		});
	}
	
	// Gallery With Filters List
	//---------------------------------
		var containerEl = document.querySelector('.image-gallery');

        var mixer = mixitup(containerEl);


    // Contact Form Validation
	//-----------------------------------------
	if($contact.length){
	    $contact.validate({  //#contact-form contact form id
	      rules: {
	        name: {
	          required: true    // Field name here
	        },
	        email: {
	          required: true, // Field name here
	          email: true
	        },
	        subject: {
	          required: true
	        },
	        message: {
	          required: true
	        }
	      },
	      
	      messages: {
	                name: "Please enter your Name", //Write here your error message that you want to show in contact form
	                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
	                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
	                message: "Please write your Message" //Write here your error message that you want to show in contact form
	            },

	            submitHandler: function (form) {
	                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
	                $.ajax({
	                    type: "POST",
	                    url: "email.php",
	                    data: $(form).serialize(),
	                    success: function () {
	                        $('#send').removeAttr('disabled').attr('value', 'Send');
	                        $( "#success").slideDown( "slow" );
	                        setTimeout(function() {
	                        $( "#success").slideUp( "slow" );
	                        }, 5000);
	                        form.reset();
	                    },
	                    error: function() {
	                        $('#send').removeAttr('disabled').attr('value', 'Send');
	                        $( "#error").slideDown( "slow" );
	                        setTimeout(function() {
	                        $( "#error").slideUp( "slow" );
	                        }, 5000);
	                    }
	                });
	                return false; // required to block normal submit since you used ajax
	            }

	    });
	  }

})(jQuery);