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
//top three list items from #news section (cloned)//
$(function() {
    var cloneFunction = $("#topNews").clone();
    $("#topNewsClone").html(cloneFunction);
  });
//To Top button on full publication list page//
/* $(function() {
    var btt = $('#buttonToTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            btt.style.display('inline-block');
        } else {
            btt.style.display('none');
        }
    })
}); */

/* $(window).scroll(scrollBtt);
function scrollBtt() {
    var btt = $('#buttonToTop');

    $('.scroll_area').scroll(function() {
        if ($(window).scrollTop() > 200) {
            btt.addClass('reveal');
        } else {
            btt.removeClass('reveal');
        }
    })
}; */

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('#buttonToTop').style.display = 'inline-block';
        } else {
            $('#buttonToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#buttonToTop').click(function(){
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });

});
//*Carousel stopped working correctly after adding much more content.
/*There is an alternative which would involve having a CSS class for each
each position and using .toggleClass and toggle sequentially through an
array.  6 additional classes with incremental changes in left property will be
needed. This action should be animated through JS. */

// try manipulating div position with:

/* $(function() {
    var ofs = $('#carouselReel').offset();

    $('#carouselLeft').on('click', function() {

        if (ofs.left > '0px') {
            $('#carouselReel').animate(ofs.left += '650px', 500, swing);
        }
        $('#carouselLeft').off('click');
    });
    $('#carouselRight').on('click', function() {

        if (ofs.left <= '-3900px') {
            $('#carouselReel').animate(ofs.left -= '650px', 500, swing);
        }
        $('#carouselRight').off('click');
    });
} */

//---- .toggleClass Attempt ----//

//(one of the) BEST SOLUTION(s) FOR CAROUSEL !
/*function moveLeft() {
    if ($('#carouselReel').css('left') < '0px'){
        $('#carouselReel').animate({
            'left': '+=650px'
        }, 500, 'swing');
    } else {
            $('#carouselLeft').animate({
                'left': '=0px'
            }, 500, 'linear');
            };
}
function moveRight() {
        if ($('#carouselReel').css('left') > '-3900px'){
            $('#carouselReel').animate({
                'left': '-=650px'
            }, 500, 'swing');
        } else { 
                $('#carouselRight').off('click');
                /*$('#carouselReel').animate({
                    'left': '=3900px'
                }, 500, 'linear')*/
        /*}
}*/
//TEMP
/*var moveRight = function(){
    $('#carouselReel').animate({
        left: '-=650'
    }, 500, 'swing');
}
var moveLeft = $('#carouselReel').animate({
    left: '+=650'
}, 500, 'swing');
var n = ($('#carouselReel').css('left'));
var widthCell = $('.research1').width();
var moveOn = widthCell*3;*/
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

/* Carousel Brainstorming --------------
--need to move #carouselReel to reveal all images
--buttons/click will control the movement of this element
--heights will not change on any of these elements (aside from the scaling)
--the left attribute WILL change
--the right attribute WILL change - keep from scrolling left past value
--need to add "swipe" motion for mobile
--could add grab and drag
-------------------------------------- */
//Carousel Attempts (previous)
/*$(document).ready(function() {
    var $firstSlide = $('#carouselReel').find('div:first');
    var width = $firstSlide.width();

    $firstSlide.animate({marginLeft: -width}, 1000, function(){

    })
});*/

//Attempt at going in blind to write event for left carousel button
//$document.getElementByID('#carouselLeft'); (function() {
    /*var $firstSlide = $('#carouselReel').find('div:first');
    var width = $firstSlide.width();
    var moveBack = $('#carouselReel').find('div').animate({marginRight: -width}, 1000);
    $('#carouselLeft').onClick(moveBack);
  });*/

/*$('#carouselLeft').click(function(){
      $('#carouselReel').animate({left: -220}), 1000;
})

function moveLeft(){
    $('#carouselReel').animate.style.transform = 'left: -220px'
};
function moveRight(){
    $('#carouselReel').style.transform = 'right: -220px'
}

$('#carouselLeft').click(event) {
    $('#carouselReel').css('left', '-250px');
}*/
//Animations worked on the proper element//
/*function moveLeft() {
    $('#carouselReel').animate({
        left: '+=250'
    }, 900, 'swing');
};
function moveRight() {
    $('#carouselReel').animate({
        left: '-=250'
    }, 900, 'swing');
}


/*var tooFar = $('#carouselReel').css('position-left').value();
var tooFarRight = $('#carouselReel').clone();
var deadLeft = $('#carouselLeft').event('onclick');
//cache DOM
var $reel = $('#carouselReel');
var $slides = $reel.find('.research1');
//
var currentSlide = 1;

function moveLeft() {
    $('#carouselReel').animate({
        left: '+=250'
    }, 900, 'swing');
    /*if ($('#carouselReel').is('left' >= '0')){
        /*$('#carouselReel').css('left' >= 0)*/
    /*if ($('#carouselReel').is('left' > '0')){
    } else {
        $('#carouselReel').animate({
            left: '0'
        }, 100)*/
    /*if (tooFar <= '0'){
        moveLeft();
    } else { $reel.animate({
        left: '+0'
    }, 100, 'swing');
    }
    };

function moveRight() {
    $reel.animate({
        left: '-=250'
    }, 900, 'swing');
    /*if ($('#carouselReel').is('left', '<=', '-1500')){
        /*$('#carouselReel').value('1500');*/
    /*} else {
        $('#carouselReel').animate({
            left: '0'
        }, 100)
    };*/
    /*if (tooFar > '-1500'){
        moveRight();
    } else { if (tooFar <= '-1500')
        $reel.animate({
            left: '0'
        })
    }
};
console.log(window.pageXOffset);

/*function moveRight() {
    $this = '#carouselReel';
    $('#carouselReel').animate($this.css({
        translateX: '-250px',
    }, 900, 'swing'))
}
function moveLeft() {
    $('#carouselReel').animate.css({
        translateX: '250px',
    }, 900, 'swing')
}*/

/*function moveLeft() {
    $('#carouselReel').css('translateX', '-250px')
}*/

/*var slideWidth = $('.research1').width();
function moveLeft() {
    $('#carouselReel').animate({
        left: + slideWidth
    }, 1000, 'slow')
}*/
)
