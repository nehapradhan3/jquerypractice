$(document).ready(function(){
  $(".tab-panels .tabs li").on('click',function(){

    var panel=$(this).closest('.tab-panels');
    //show which pannel selected
    var panelToShow = $(this).attr('rel');
    // alert(panelToShow);

    //now hide the panel
    panel.find(".panel.active").slideUp(300, showNextPanel)



      $("#"+panelToShow).slideDown(300,function(){
        $(this).addClass('active');
      });

      function showNextPanel(){
      panel.find(".tabs li.active").removeClass('active');

        $(this).addClass('active');
    };

  });

  'use strict';



    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();




});
