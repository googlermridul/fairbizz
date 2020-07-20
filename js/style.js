$(document).ready(function() {

   /*-- NAVIGRATION --*/
   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   $(".nav-link").click(function(){
      $(".navbar-collapse").collapse("hide");
      $("#hamburger").removeClass("active");
   });

   $(".nav-item > a").click(function() {
      $(".nav-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(window).scroll(function() {
      var st = $(this).scrollTop();
      if( st > 200 ) {
         $(".navbar").css({
            background: "#0668de"
         });
         $(".collapse").css({
            background: "#0668de"
         });
      } else {
         $(".navbar").css({
            background: "none"
         });
         $("#hamburger").click(function() {
            $(".navbar").css({
               background: "#0668de"
            });
         })
      }
   });


   /*-- SERVICES SECTION CAROUSEL PLUGIN --*/
   $('#seviceSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: true,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         768: {
            items:3
         }
      }
   });


   /*-- CASE SECTION CAROUSEL PLUGIN --*/
   $('#caseSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         768: {
            items:3
         },
         992: {
            items:4
         }
      }
   });

   /*-- PARTNER SECTION CAROUSEL PLUGIN --*/
   $('#partnerSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:2
         },
         552: {
            items:3
         },
         768: {
            items:4
         },
         992: {
            items:6
         }
      }
   });

   /*-- CONTACT SECTION CAROUSEL PLUGIN --*/
   $('#testmonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 33,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         }
      }
   });

   /*-- FAQ SECTION --*/
   $(".faq-body1").slideUp();
   $(".faq-body3").slideUp();

   $(".faq-header1").click(function() {
      $(".faq-header1 .fa").toggleClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body1").slideToggle();
      $(".faq-body2, .faq-body3").slideUp();
      $(".faq-header1, .faq-body1").toggleClass("active-bg");
      $(".faq-header2, .faq-body2, .faq-header3, .faq-body3").removeClass("active-bg");
   });
   $(".faq-header2").click(function() {
      $(".faq-header2 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header3 .fa").removeClass("active");
      $(".faq-body2").slideToggle();
      $(".faq-body1, .faq-body3").slideUp();
      $(".faq-header2, .faq-body2").toggleClass("active-bg");
      $(".faq-header1, .faq-body1, .faq-header3, .faq-body3").removeClass("active-bg");
   });
   $(".faq-header3").click(function() {
      $(".faq-header3 .fa").toggleClass("active");
      $(".faq-header1 .fa").removeClass("active");
      $(".faq-header2 .fa").removeClass("active");
      $(".faq-body3").slideToggle();
      $(".faq-body1, .faq-body2").slideUp();
      $(".faq-header3, .faq-body3").toggleClass("active-bg");
      $(".faq-header2, .faq-body2, .faq-header1, .faq-body1").removeClass("active-bg");
   });

   /*-- SCROLL UP --*/
   $(window).scroll(function() {
      if ( $(this).scrollTop()>100 ) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      };
   });

   $(".scroll-up").click(function() {
      $("html").animate({scrollTop: 0}, 1000);
      return false;
   });

   AOS.init({
      duration: 1200
   });

})
