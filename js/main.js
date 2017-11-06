$(document).ready(function () {
    $(".middle-section__creations").on("click", function (e) {
        e.preventDefault();
        var imageSrc = $(this).find("img").attr("data-img");
        var imgCopy = $(this).find("img").attr("alt");
        var popupImg = $('<img src="' + imageSrc + '" onload="imageLoaded(this)" data-copy="'+imgCopy+'"><p class="imgWidth"></p>');
        var popup = $('.popup-photo-container');
        
        popup.html(popupImg);
    
        popup.parent().css("display", "flex").fadeIn(200);
         var imgWidth = $(popup).find("img").width();

        $(".my-popup").on("click", function () {
            $(this).fadeOut(300, function () {

            })
        })
    })
});

function imageLoaded(photo, copy){
   $(".imgWidth").css({
            width: $(photo).width() + "px"});
    $(".imgWidth").text($(photo).data('copy'));
}