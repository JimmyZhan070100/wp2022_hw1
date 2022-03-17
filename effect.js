var images = ["img_1.png", "img_2.png"]
$(function () {
    var i = 0;
    $("#pic").css("background-image", "url(./src/pic/" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $("#pic").fadeOut("slow", function () {
            $(this).css("background-image", "url(./src/pic/" + images[i] + ")");
            $(this).fadeIn("slow");
        });
    }, 2000);
});