$(document).ready(function() {
    $(".burger__icon").click(function() {
        $(this).hide();
        $(".burger__icon_close").show();
        $(".burger__block").addClass("open");
    })
    $(".burger__icon_close").click(function() {
        $(this).hide();
        $(".burger__icon").show();
        $(".burger__block").removeClass("open");
    });
});