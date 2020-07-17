
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
