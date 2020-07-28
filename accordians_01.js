//accordian behavior//
$(document).ready(function () {
    $('.collapseBody').hide();
    $('.collapseButton').click(function () {
        $('.collapseBody').slideToggle("slow");
    }),
    $('.collapseBody2').hide();
    $('.collapseButton2').click(function() {
        $('.collapseBody2').slideToggle("slow");
    });
});
//top three list items from #news section (cloned)//
$(function() {
    var cloneFunction = $("#topNews").clone();
    $("#topNewsClone").html(cloneFunction);
  });

//Carousel Attempts
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
function moveLeft() {
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