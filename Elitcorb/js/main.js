$(function () {
  "use strict";

  // Slider Height
  var winH    = $(window).height(),
      upperH  = $('.upper-bar').innerHeight(),
      navH    = $('.navbar').innerHeight();

  $('.slider, .carousel-item').height(winH - ( upperH + navH ));

  // Features section
  $(".work ul li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.work .images img').css('opacity', 1);
    } else {
      $('.work .images img').css('opacity', '0.09');
      $($(this).data('class')).css('opacity', '1');
    }
  });

  // Scroll To top
  var scrollButton = $('#scroll-top');
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 700) {
      scrollButton.show(800);
    } else {
      scrollButton.hide(800);
    }
    scrollButton.click(function(){
      $('html,body').animate({scrollTop: 0}, 600);
    });
  });

  // Nice scroll
  $("html").niceScroll({
    cursorcolor: "#08526d",
    cursorwidth: "8px",
    cursorborder: "1px solid #08526d",
    scrollspeed: 100
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});
