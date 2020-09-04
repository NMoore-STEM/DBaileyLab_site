//top three list items from #news section (cloned)//
$(function() {
    var cloneFunction = $("#topNews").clone();
    $("#topNewsClone").html(cloneFunction);
  });
  
//accordian behavior//
$(document).ready(function () {
    $('.collapseBody').hide();
    $('.collapseButton').click(function () {
        $('rect.vert').toggle();
        $('.collapseBody').slideToggle("slow");
    }),
    $('.collapseBody2').hide();
    $('.collapseButton2').click(function() {
        $('rect.vert2').toggle();
        $('.collapseBody2').slideToggle("fast");
    });
});

//To Top button on full publication list page//
$(document).ready(function(){
    $(document).scroll(function(){
        if ($(document).scrollTop() > 450) {
            $('#buttonToTop').addClass('reveal');
        } else {
            $('#buttonToTop').removeClass('reveal');
        }
    });

    //Click event to scroll to top
    $('#buttonToTop').click(function(){
        $('html, body').animate({scrollTop : 0},250);
        return false;
    });

});

//Attempt to return page to top on page refresh
function applyBeforeunload() {
    $(window).on('beforeunload', function() {
      $('body').hide();
      $(window).scrollTop(0);
    });
  }
  applyBeforeunload();
  $(document).on('click', '[samepage]', function() {
    $(window).off('beforeunload');
    setTimeout(applyBeforeunload, 1000);
  });

//----------Carousel code
var disableLeft = $('#carousel_NavLeft').off('click');
var disableRight = $('#carousel_NavRight').off('click');
$(function(){
    $('#carousel_NavLeft').on('click', function(){
        if (($('#carouselReel').css('left')) < '0px'){
            $('#carouselReel').animate({
                left: '+=685px'
            }, 200, 'swing');
        } else {
            disableLeft;
        }
    });
    $('#carousel_NavRight').on('click', function(){
        if (($('#carouselReel').css('left')) > '-3900px'){
            $('#carouselReel').animate({
                left: '-=685px'
            }, 200, 'swing');
        } else {
            disableRight;
        }
    })
}
);

//-----MOBILE menu button----//
$(document).ready(function(){
    $('#mobileMenu').on('click', function(){
        $('.menuClosed').toggleClass('menuOpen');
        $('#mobileMenu').toggleClass('menuButtonOpen');
    });
    $('.button').on('click', function(){
        $('.menuClosed').removeClass('menuOpen');
        $('#mobileMenu').removeClass('menuButtonOpen');
    })
});