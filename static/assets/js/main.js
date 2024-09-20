(function ($) {
  'use strict';

  var imJs = {
      m: function (e) {
          imJs.d();
          imJs.methods();
      },
      d: function (e) {
          this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')
      },
      methods: function (e) {
          imJs.swiperActivation();
          imJs.vedioActivation();
          imJs.myAudio(); 
          imJs.metismenu(); 
          imJs.sideMenu(); 
          imJs.stickySidebar(); 
          imJs.searchOpton(); 
      },
      swiperActivation: function (){
        $(document).ready(function() {
          var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
            grabCursor: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints:{
              1168:{
                slidesPerView: 4,
              },
              992:{
                slidesPerView: 3,
              },
              768:{
                slidesPerView: 2,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });

        $(document).ready(function() {
          var swiper = new Swiper(".mySwiper2", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 3000,
            },
            grabCursor: true,
            breakpoints:{
              1168:{
                slidesPerView: 4,
              },
              992:{
                slidesPerView: 3,
              },
              768:{
                slidesPerView: 2,
              },
              600:{
                slidesPerView: 2,
              },
              0:{
                slidesPerView: 1,
              },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".mySwiper3", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 1500,
            autoplay: {
              delay: 3000,
            },
            breakpoints:{
              1168:{
                slidesPerView: 3,
              },
              992:{
                slidesPerView: 2,
              },
              768:{
                slidesPerView: 2,
              },
              600:{
                slidesPerView: 2,
              },
              0:{
                slidesPerView: 1,
              },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });

        $(document).ready(function() {
          var swiper = new Swiper(".rts-bannerSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            grabCursor: true,
            autoplay: false,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });





        $(document).ready(function() {
          var swiperthumb = new Swiper(".SlideThumb", {
            spaceBetween: 0,
            slidesPerView: 3,
            mousewheel: false,
          });
          var swiper = new Swiper(".rts-heroSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 1500,
            loop: true,
            grabCursor: true,
            autoplay: false,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              formatFractionCurrent: function (number) {
              return '0' + number;
              },
              formatFractionTotal: function (number) {
              return '0' + number;
              }

              },
            thumbs: {
              swiper: swiperthumb,
            },
          });
        });


        $(document).ready(function() {
          var swiper = new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            grabCursor: true,
            autoplay: false,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".swiper-container-h8", {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 1500,
            loop: true,
            grabCursor: true,
            autoplay: false,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              formatFractionCurrent: function (number) {
              return '0' + number;
              },
              formatFractionTotal: function (number) {
              return '0' + number;
              }

              },
          });
        });
        $(document).ready(function (){
          const rtTrendingSlider1 = new Swiper(".rt-treding-slider10", {
            slidesPerView: 1,
            loop: true,
            slideToClickedSlide: true,
            direction: "vertical",
            autoplay: {
              delay: 2000,
            },
            speed: 800,
          });
        });

      }, 
      vedioActivation: function (e) {
        $(document).ready(function(){
          $('.popup-youtube, .popup-vimeo').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          });
        });
      },
      myAudio: function (e){
        $(document).ready (function(){
          function myFunction() {
            var x = document.getElementById("myAudio").duration;
           
          };
          $(function() {
            $('audio').audioPlayer();
        });
        
        });
      },
      // metismenu
      metismenu:function(){
        $('#mobile-menu-active').metisMenu();
      },
       // side menu desktop
       sideMenu:function(){
        $(document).on('click', '.menu-btn', function () {
          $("#side-bar").addClass("show");
          $("#anywhere-home").addClass("bgshow");
        });
        $(document).on('click', '.close-icon-menu', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '#anywhere-home', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '.onepage .mainmenu li a', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
      },
       // side menu desktop
       stickySidebar: function(e) {
        if ($("#sidebar").length) {
        var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
        var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));
      
        var maxY = footTop - $('#sidebar').outerHeight();
      
        $(window).scroll(function(evt) {
          var y = $(this).scrollTop();
          if (y > top) {
            if (y < maxY) {
              $('#sidebar').addClass('fixed').removeAttr('style');
            } else {
              $('#sidebar').removeClass('fixed').css({
                position: 'absolute',
                top: (maxY - top) + 'px'
              });
            }
          } else {
            $('#sidebar').removeClass('fixed');
          }
        });
      }
      },
      // Search Bar show & hide
      searchOpton:function(){
        $(document).on('click', '.search-icon', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-area input', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-inner before', function () {
          $(".search-input-area").addClass("show");
        });
        $('html').click(function (e) {
          if (!$(e.target).hasClass('show')) {
            $(".search-input-area").removeClass("show");
          }
          $(document).on('click', '.search-close-icon', function () {
            $(".search-input-area").removeClass("show");
          });
        });
      },
      
  }

  $(window).on("scroll", function() {
    var ScrollBarPostion = $(window).scrollTop();
    if (ScrollBarPostion > 150) {
      $(".echo-header-area").addClass("header-sticky");      
    } else {
      $(".echo-header-area").removeClass("header-sticky");
      $(".echo-header-area .echo-header-top").removeClass("remove-content");     
    }
  });

  var swiper = new Swiper(".echo-hm2-video-Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  	/* magnificPopup img view */
	$('.echo-hm2-img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

  // Day 
  var rts_date = $('#echo-date');
  if(rts_date.length){
    const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    const month = ["Jan","Feb","March","April","May","June","July","August","Sept","Oct","Nov","Dec"];
    const d = new Date();
    let day = weekday[d.getUTCDay()];
    let mdate = d.getDate();
    const year = d.getFullYear().toString().substr(2, 2);
    let mname = month[d.getMonth()];
    document.getElementById("echo-date").innerHTML = '<strong>'+day+'</strong>'+ ', ' + mdate+ ' ' + mname + '  '+ year ;
  }

  // stickySidebar
    if (typeof $.fn.theiaStickySidebar !== "undefined") {
      $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
        additionalMarginTop: 130,
      });
    }

  
    var rts_light = $('.rts-dark-light');
        if(rts_light.length){
        var toggle = document.getElementById("rts-data-toggle");
        var storedTheme = localStorage.getItem('echo-theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
            toggle.onclick = function() {
            var currentTheme = document.documentElement.getAttribute("data-theme");
            var targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }
            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('echo-theme', targetTheme);
        };
    }


  var win=$(window);
  var totop = $('.scroll-top-btn');    
  win.on('scroll', function() {
      if (win.scrollTop() > 150) {
          totop.fadeIn();
      } else {
          totop.fadeOut();
      }
  });
  totop.on('click', function() {
      $("html,body").animate({
          scrollTop: 0
      }, 500)
  });

  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  imJs.m();
})(jQuery, window)