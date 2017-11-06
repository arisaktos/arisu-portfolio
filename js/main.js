$(document).ready(function () {
    $(".middle-section__creations").on("click", function (e) {
        e.preventDefault();
        var imageSrc = $(this).find("img").attr("data-img");
        var imgCopy = $(this).find("img").attr("alt");
        var popup = $('<div class="my-popup"><div class="popup-photo-container"><img src="' + imageSrc + '" onload="imageLoaded(this)"><p class="imgWidth">' + imgCopy + "</p></div></div>");
        
        $(popup).prependTo("body").hide().fadeIn(200);

        $(".my-popup").on("click", function () {
            $(this).fadeOut(300, function () {
                $(this).remove()
            })
        })
    })
});

function imageLoaded(photo){
   $(".imgWidth").css({
            width: $(photo).width() + "px"});
    
}