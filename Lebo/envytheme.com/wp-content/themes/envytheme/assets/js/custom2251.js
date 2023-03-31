(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Custom Payment JS
        $(".custom-work-payment-btn button").html("Proceed to Payment");
        $(".custom-work-payment-btn input").attr("placeholder", "Enter Amount i.e. 500");
        $(".et-custom-fields input").attr("placeholder", "Enter Payment Notes");

		// My account page link for custom payment
		$(".woocommerce-MyAccount-navigation-link--custom-work-payment a").attr("href", "https://envytheme.com/item/custom-work-payment/")

        $('.custom-work-payment-btn .single_add_to_cart_button').prop('disabled', true);
        function validateNextButton() {
            var buttonDisabled = $('.et-custom-fields input').val().trim() === '' || $('.custom-work-payment-btn .alg_open_price').val().trim() === '';
            $('.item-details .cart .single_add_to_cart_button').prop('disabled', buttonDisabled);
          }

          $('.et-custom-fields input').on('keyup', validateNextButton);
          $('.custom-work-payment-btn .alg_open_price').on('keyup', validateNextButton);

          $(".custom-work-payment-btn .alg_open_price").attr({
            "min" : 10
         });

		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

		$( "#notifino-close1" ).click(function() {
            let date = new Date(Date.now() + 604800); date = date.toUTCString(); document.cookie = "ET_USER=true; expires=" + date;
        });

        $('a.btn-pricing-link, .et-item-sidebar .text-right a').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 100
            }, 1000);
            e.preventDefault();
        });

        // Items Details Multiple Data
        var selected_license = $('.widget-license select option:selected').val();
        $('.add_to_card #variation_id').val(selected_license);

        $(document).on('change','.widget-license select' ,function(){
            var selected_license = $('.widget-license select option:selected').val();
            $('.add_to_card #variation_id').val(selected_license);
        });

        $('.item_choose_services .form-check-input').click(function(){
            var selected = new Array();

            $(".item_choose_services .form-check-input:checked").each(function () {
                selected.push(this.value);
            });

            $('.add_to_card #services_items_id').val(selected.join(","));
        });

        //Tooltip
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })

		jQuery('.single-item .yith-wcwl-add-to-wishlist a').each(function(){
			envytheme(jQuery(this), 'html');
        });
        jQuery('.et-cart a').each(function(){
			envytheme(jQuery(this), 'html');
		});
        jQuery('.tf-cart').each(function(){
			envytheme_tf(jQuery(this), 'html');
        });
        jQuery('.top-header .left-nav .menu li a').each(function(){
			envytheme_menu(jQuery(this), 'html');
		});

		jQuery('.customWorkModal .form-group small.text-muted span').each(function(){
			envytheme_menu(jQuery(this), 'html');
		});

		jQuery('.contact-form .form-group small.text-muted span').each(function(){
			envytheme_menu(jQuery(this), 'html');
		});

        // Mean Menu
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "1350"
        });

        // Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click',function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });

        // Related item slider
        $('.related-item-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: false,
            margin: 30,
            navText: [
                "<i class='flaticon-left-arrow'></i>",
                "<i class='flaticon-arrow-pointing-to-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });

        $('.partner-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
			margin: 30,

            responsive: {
                0: {
                    items: 2
                },
				576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });

		// Filter Btn
		$(".filter-btn").click(function(){
			$(".shop-sidebar").toggleClass("show", 1000);
		});
		$(".filter-btn").click(function(){
			$(".filter-btn").toggleClass("x", 1000);
		});


        // Tabs
        $('.pricing-tab ul.tabs, .items-tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.pricing-tab ul.tabs li a, .items-tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.pricing-tab, .items-tab'),
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });

        // WOW
        new WOW().init();



        // Select JS
        $('select').niceSelect();

		// // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

        $(".coupon-title").click(function(){
            $(".coupon-form .coupon").toggle();
        });
	});


	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
    });


    // Testimonials slider
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
            $('.banner-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                margin: 30,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 1,
                    },
                    992: {
                        items: 1,
                    },
                    1200: {
                        items: 2,
                    }
                }
            });

            $('.testimonials-slider').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                autoplay: true,
                responsive:{
                    0:{
                        items:1,
                    },
                    768:{
                        items:2
                    },
                    1200:{
                        items:4
                    },
                    1366:{
                        items:5
                    }
                }
            });

            $('.partner-slides').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: true,
                smartSpeed: 750,

                responsive: {
                    0: {
                        items: 3,
                        margin: 30,
                    },
                    768: {
                        items: 4,
                    },
                    576: {
                        items: 5,
                        margin: 30,
                    },
                    1200: {
                        items: 6,
                        margin: 20,
                    }
                }
            });
            $('.product-item-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                autoplayHoverPause: true,
                autoplay: true,
                margin: 30,
                navText: [
                    "<i class='flaticon-left-arrow'></i>",
                    "<i class='flaticon-arrow-pointing-to-right'></i>"
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    992: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    }
                }
            });
			
			
        	$('[data-toggle="tooltip"]').tooltip();

            $('.js-sticky-widget').stickySidebar({
                topSpacing: 85,
                bottomSpacing: 85
            });
        });
    });

    function envytheme(element, content) {
        if(content=='html'){
            var tipText = element.html();
        } else {
            var tipText = element.attr('title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    function envytheme_tf(element, content) {
        if(content=='html'){
            var tipText = element.attr('title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    function envytheme_menu(element, content) {
        if(content=='html'){
            var tipText = element.attr('data-title');
        }
        element.on('mouseover', function(){
            if(jQuery('.envytheme').length == 0) {
                element.before('<span class="envytheme" style="display: none;">'+tipText+'</span>');
                var tipWidth = jQuery('.envytheme').outerWidth();
                var tipPush = -(tipWidth/2 - element.outerWidth()/2);
                jQuery('.envytheme').css('margin-left', tipPush);
                jQuery('.envytheme').fadeIn();
            }
        });
        element.on('mouseleave', function(){
            jQuery('.envytheme').fadeOut();
            jQuery('.envytheme').remove();
        });
    }

    $('#etModal').modal();

    function afterModalTransition(e) {
    e.setAttribute("style", "display: none !important;");
    }
    $('#etModal').on('hide.bs.modal', function (e) {
        setTimeout( () => afterModalTransition(this), 200);
    })


}(jQuery));


function openPage(id){
    const p = document.querySelector("[tab-name='"+id+"']");
    const tabs = document.querySelectorAll(".tabs .tabcontent");
    for(var  x =0; x < tabs.length; x++)
        tabs[x].classList.add("d-none");
    if(p !== null){
      p.classList.remove("d-none");
    }
}

