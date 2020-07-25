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
$(document).ready(function() {
    var $firstSlide = $('#carouselReel').find('div:first');
    var width = $firstSlide.width();

    $firstSlide.animate({marginLeft: -width}, 1000, function(){
        
    }
}