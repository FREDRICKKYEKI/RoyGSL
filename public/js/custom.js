$(document).ready(function () {
  ("use strict");

  /*==================================
* Author        : "ThemeSine"
* Template Name : Listrace directory HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2.0 slick carousel
2.1. slick infinite carousel
3. welcome animation support
4. feather icon
5. counter
6. parallaxie
======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  // 2.0 slick carousel

  $(".testimonial-carousel").slick({
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 1500,
    // the magic
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // 2.1. slick infinite carousel
  $(".marquee").slick({
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });

  // 3. welcome animation support

  $(window).load(function () {
    $(".welcome-hero-txt h2,.welcome-hero-txt p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-serch-box")
      .removeClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".welcome-hero-txt h2,.welcome-hero-txt p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-serch-box")
      .addClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  // 4. feather icon

  feather.replace();

  // 5. counter
  $(window).on("load", function () {
    $(".counter").counterUp({
      delay: 10,
      time: 3000,
    });
  });

  // 6. parallaxie
  $(".parallaxie").parallaxie();

  // 7. nivo-slider
  $(window).load(function () {
    $("#slider").nivoSlider({
      effect: "boxRainGrowReverse", // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
      slices: 15, // For slice animations
      boxCols: 8, // For box animations
      boxRows: 4, // For box animations
      animSpeed: 1000, // Slide transition speed
      pauseTime: 20000, // How long each slide will show
      startSlide: 0, // Set starting Slide (0 index)
      directionNav: true, // Next & Prev navigation
      controlNav: true, // 1,2,3... navigation
      controlNavThumbs: false, // Use thumbnails for Control Nav
      pauseOnHover: false, // Stop animation while hovering
      manualAdvance: false, // Force manual transitions
      prevText: "Prev", // Prev directionNav text
      nextText: "Next", // Next directionNav text
      randomStart: false, // Start on a random slide
      beforeChange: function () {}, // Triggers before a slide transition
      afterChange: function () {}, // Triggers after a slide transition
      slideshowEnd: function () {}, // Triggers after all slides have been shown
      lastSlide: function () {}, // Triggers when last slide is shown
      afterLoad: function () {}, // Triggers when slider has loaded
    });
  });
});
