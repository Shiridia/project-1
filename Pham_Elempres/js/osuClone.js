$(document).ready(function(){
    $(".pippi img").hover(
        function () {
            $(this).removeClass("animated pulse");
        }
    );
    
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
});
