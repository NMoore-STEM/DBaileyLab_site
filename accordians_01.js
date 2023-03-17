// Bailey Lab Website Script
$(document).ready(function() {
//top three list items from #news section (cloned)//
    $(function() {
        var cloneFunction = $("#topNews").clone();
        $("#topNewsClone").html(cloneFunction);
    });
//accordian behavior//
    $(function () {
        $('.collapseBody').hide();
        $('.collapseButton').on('click', function () {
            $('rect.vert').toggle();
            $('.collapseBody').slideToggle("slow");
        }),
        $('.collapseBody2').hide();
        $('.collapseButton2').on('click', function() {
            $('rect.vert2').toggle();
            $('.collapseBody2').slideToggle("fast");
        });
    });

//To Top button on full publication list page//
    var bTop = $('#buttonToTop')
    $(function(){
        $(document).on('scroll', function(){
            if ($(document).scrollTop() > 450) {
                bTop.addClass('reveal');
            } else {
                bTop.removeClass('reveal');
            }
        });
        //Click event to scroll to top
        bTop.on('click', function(){
            $('html, body').animate({scrollTop : 0},250);
            return false;
        });

    });
//----------Carousel code
    var disableLeft = $('#carousel_NavLeft').off('click');
        disableRight = $('#carousel_NavRight').off('click');
        cReel = $('#carouselReel')
    $(function(){
        $('#carousel_NavLeft').on('click', function(){
            if ((cReel.css('left')) < '0px'){
                cReel.animate({
                    left: '+=685px'
                }, 200, 'swing');
            } else {
                disableLeft;
            }
        });
        $('#carousel_NavRight').on('click', function(){
            if ((cReel.css('left')) > '-3900px'){
                cReel.animate({
                    left: '-=685px'
                }, 200, 'swing');
            } else {
                disableRight;
            }
        })
    });
//-----MOBILE menu button----//
    $(function(){
        $('#mobileMenu').on('click', function(){
            $('.menuClosed').toggleClass('menuOpen');
            $('#mobileMenu').toggleClass('menuButtonOpen');
        });
        $('.button').on('click', function(){
            $('.menuClosed').removeClass('menuOpen');
            $('#mobileMenu').removeClass('menuButtonOpen');
        })
    });
})