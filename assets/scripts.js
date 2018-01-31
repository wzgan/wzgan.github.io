      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      });

      function handleResize() {
      var h = $(window).height();
      $('.fullpage').css({'height':h+'px'});
      }
      $(function(){
      handleResize();

      $(window).resize(function(){
      handleResize();
      });
      });



      jQuery(document).ready(function($) {
 
    $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800,'swing');
    });
    });


 // animation
$(window).scroll(function() {
    $('h2,h3').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+600) {
        $(this).addClass("animated slideInDown");
      }
    });


  });
$(function(){
        $("#typed").typed({
            strings: ["Passionate Programmer","Practical Developer","Enthusiastic Hacker","Proactive Learner","Spiritual Soul"],

            stringsElement: null,
            // typing speed
            typeSpeed: 0,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "",

        });

    });
