// Section with Editor
$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "SlideShow") {
    $this.SlideShowActive();
  }else if($this.data('section') == "AboutInfo") {
    $this.AboutInfo();
  }else if($this.data('section') == "FeaturedProductCarousel") {
    $this.FeaturedProductCarousel();
  }else if($this.data('section') == "BannerActivation") {
    $this.BannerActivation();
  }else if($this.data('section') == "SubascribeSection") {
    $this.SubascribeSection();
  }else if($this.data('section') == "FeaturedProduct") {
    $this.FeaturedProduct();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.brand-slider').BrandLogoActive();
  }else if($this.data('section') == "TabWithProduct") {
    $this.TabWithProduct();
  }else if($this.data('section') == "LatestBlog") {
    $this.LatestBlog();
  }else if($this.data('section') == "TestimonialActive") {
    $this.TestimonialActive();
  }else if($this.data('section') == "AboutInfo2") {
    $this.AboutInfo2();
  }else if($this.data('section') == "FullWidthBanner") {
    $this.FullWidthBanner();
  }else if($this.data('section') == "AboutInfo3") {
    $this.AboutInfo3();
  }else{}   
}

// Slideshow active js
$.fn.SlideShowActive = function() {
  var $SlideShowVAR = $('.hero-slider');
  $SlideShowVAR.slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    
    fade: true,
    
    
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });
  $("img.lazyload").lazyload();
};


// About Info active js
$.fn.AboutInfo = function() {

  /*--
        Commons Variables
    -----------------------------------*/
  var windows = $(window);
  var windowWidth = windows.width();

  /*--
      About Image Animation
  	-----------------------------------*/
  var $aboutImage = $('.about-image');
  $aboutImage
  .on('mouseenter', function() {
    var $this = $(this);
    $this.on('mousemove', function(event){
      var moveX = ((windowWidth / 2) - event.pageX) * 0.1;
      var moveY = ((windowWidth / 2) - event.pageY) * 0.1;
      $this.find('.shape').css('transform', ' translateX(' + moveX + 'px) translateY(' + moveY + 'px)');
      $this.find('img').css('transform', ' translateX(' + -moveX + 'px) translateY(' + -moveY + 'px)');
    });
  })
  .on('mouseleave', function() {
    var $this = $(this);
    $this.find('.shape').css('transform', ' translateX(0px) translateY(0px)');
    $this.find('img').css('transform', ' translateX(0px) translateY(0px)');
  });



  $("img.lazyload").lazyload();
};


// Featured Product Slider active js
$.fn.FeaturedProductCarousel = function() {
  var $ProductCarousel = $('.product-slider-4');
  $ProductCarousel.slick({
    infinite: true,
    slidesToScroll: 1,
    
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    
    dots: false
  });
  $("img.lazyload").lazyload();
};


// Banner active js
$.fn.BannerActivation = function() {
  $("img.lazyload").lazyload();
};

// Subscribe active js
$.fn.SubascribeSection = function() {
  $("img.lazyload").lazyload();
};

// Featured Product active js
$.fn.FeaturedProduct = function() {
  $("img.lazyload").lazyload();
};

// Brand Logo active js
$.fn.BrandLogoActive = function() {
  var $BrandLogoCarousel = this;
  $BrandLogoCarousel.slick({
    infinite: true,
    arrows: false,
    dots: false,
    
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $("img.lazyload").lazyload();
};

// Tab With Product active js
$.fn.TabWithProduct = function() {
  var $TabWithProductVAR = $('.tab-content-slider-container');
  $TabWithProductVAR.slick({
    infinite: true,
    slidesToScroll: 1,
    
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
    
    dots: false
  });
  $("img.lazyload").lazyload();
};

// Latest Blog active js
$.fn.LatestBlog = function() {
  var $LatestBlogActive = $('.blog-slider');
  $LatestBlogActive.slick({
    infinite: true,
      arrows: true,
      dots: false,
      
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>'
  });
  $("img.lazyload").lazyload();
};

//Testimonial active js
$.fn.TestimonialActive = function() {
  // Testimonial Slider
  $('.testimonial-image-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">prev</button>',
    nextArrow: '<button class="slick-next">next</button>',
    asNavFor: '.testimonial-content-slider'
  });
  $('.testimonial-content-slider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-image-slider'
  });
  $("img.lazyload").lazyload();
};

// About Info 2 active js
$.fn.AboutInfo2 = function() {
  $("img.lazyload").lazyload();
};

// Full width banner active js
$.fn.FullWidthBanner = function() {
  $("img.lazyload").lazyload();
};

// About Info 3 active js
$.fn.AboutInfo3 = function() {
  /*--
          Imageloaded & Masonry
      -----------------------------------*/
  var $masonryGird = $('.masonry-grid');
  $masonryGird.imagesLoaded( function() {
    $masonryGird.masonry({
      // options
      itemSelector: '.masonry-grid > *',
    });
  });

  $("img.lazyload").lazyload();
};

(function($) {
  "use strict";

  jQuery(document).ready(function(){

    /*--
        Commons Variables
    -----------------------------------*/
    var windows = $(window);
    var windowWidth = windows.width();
    var mainWrapper = $('.main-wrapper');


    /*--
      Header Cart
  	-----------------------------------*/
    var cartToggle = $('.header-cart-toggle');
    var miniCart = $('.header-mini-cart');
    // Toggle Header Cart
    cartToggle.on("click", function() {
      miniCart.slideToggle();
    });
    // Closing the Header Cart by clicking in the menu button or anywhere in the screen
    $('body').on('click', function (e) {
      var target = e.target;
      if (!$(target).is('.header-cart-toggle') && !$(target).parents().is('.header-cart-toggle')) {
        miniCart.slideUp();
      }
    });
    // Prevent closing Header Cart upon clicking inside the Header Cart
    $('.header-mini-cart').on('click', function(e) {
      e.stopPropagation();
    });


    /*--
      Header Currency
  	-----------------------------------*/
    var currencyToggle = $('.switcher-currency-trigger');
    var header_Currency = $('.switcher-dropdown');
    // Toggle Header Cart
    currencyToggle.on("click", function() {
      header_Currency.slideToggle();
    });
    // Closing the Header Cart by clicking in the menu button or anywhere in the screen
    $('body').on('click', function (e) {
      var target = e.target;
      if (!$(target).is('.switcher-currency-trigger') && !$(target).parents().is('.switcher-currency-trigger')) {
        header_Currency.slideUp();
      }
    });
    // Prevent closing Header Cart upon clicking inside the Header Cart
    $('.switcher-dropdown').on('click', function(e) {
      e.stopPropagation();
    });    
    
    /*--
      User Menu
  	-----------------------------------*/
    var userToggle = $('.user-menu-active');
    var user_menu = $('.user-dropdown');
    // Toggle Header Cart
    userToggle.on("click", function() {
      user_menu.slideToggle();
    });
    // Closing the Header Cart by clicking in the menu button or anywhere in the screen
    $('body').on('click', function (e) {
      var target = e.target;
      if (!$(target).is('.user-menu-active') && !$(target).parents().is('.user-menu-active')) {
        user_menu.slideUp();
      }
    });
    // Prevent closing Header Cart upon clicking inside the Header Cart
    $('.user-dropdown').on('click', function(e) {
      e.stopPropagation();
    });
    
    

    /*--
      Mobile Menu
  	-----------------------------------*/
    var mainMenuNav = $('.main-menu');
    mainMenuNav.meanmenu({
      meanScreenWidth: '991',
      meanMenuContainer: '.mobile-menu',
      meanMenuClose: '<span class="menu-close"></span>',
      meanMenuOpen: '<span class="menu-bar"></span>',
      meanRevealPosition: 'right',
      meanMenuCloseSize: '0',
    });


        // Single Product Slider
        $('.single-product-slider').slick({
        infinite: true,
        dots: false,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        });
        // Single Product Slider
        $('.single-product-thumb-slider-syn').slick({
        infinite: true,
        dots: false,
      
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
        {
        breakpoint: 479,
        settings: {
        arrows: false,
        vertical: false,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        }
        },
        ]
        });

      

      /*--
      Perfect Scrollbar
  -----------------------------------*/
      $('.custom-scroll').each(function(){
      const ps = new PerfectScrollbar($(this)[0],);
  });

  /*--
      Nice Select
  -----------------------------------*/
  $('.nice-select').niceSelect();


  $('body').on('click', '.product-view-mode button', function(e) {
    e.stopPropagation();
    var $this = $(this);
    var $modeClass = $this.data('mode');
    var $productWrap = $this.closest('body').find('.shop-product-wrap');

    $('.product-view-mode button').removeClass('active');
    $this.addClass('active');

    $productWrap.removeClass('grid-3 grid-4 list').addClass($modeClass).find('.product-item').removeClass('list');

    if($modeClass === 'list') {
      $productWrap.find('.product-item').addClass('list');
    }

  });

  /*----- 
      Shipping Form Toggle
  --------------------------------*/ 
  $('[data-shipping]').on('click', function(){
    if( $('[data-shipping]:checked').length > 0 ) {
      $('#shipping-form').slideDown();
    } else {
      $('#shipping-form').slideUp();
    }
  })

  /*----- 
      Payment Method Select
  --------------------------------*/
  $('[name="payment-method"]').on('click', function(){

    var $value = $(this).attr('value');

    $('.single-method p').slideUp();
    $('[data-method="'+$value+'"]').slideDown();

  })


  /* ----------------------------------------------
        ScrollUp
    ---------------------------------------------- */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '800', // Distance from top before showing element (px)
    topSpeed: 900, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
  });

        
    
 /* ********************************************
    STICKY sticky-header
 ******************************************** */
    var hth = $('.header-section').height();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > hth){  
            $('#sticky-header').addClass("sticky");
        }
        else{
            $('#sticky-header').removeClass("sticky");
        }
    });  
    
 
    
        /* Header Search */

        $(".search-toggle").on('click', function (e) {
            e.stopPropagation();
            $(this).toggleClass('open');
            $(this).siblings('.header-search-form').slideToggle("400");
        })
        /*----------  Slideup While clicking On Dom  ----------*/
        function clickDom() {
            $('body').on('click', function (e) {
                $('.header-search-form').slideUp('500');
              	$(".search-toggle").removeClass('open');
            });
            $('.header-search-form').on('click', function (e) {
                e.stopPropagation();
            })
        };

        clickDom();  
  
    


          if($('.rellax').length){
            var rellax = new Rellax('.rellax');
          }


    
  

});

})(jQuery);
