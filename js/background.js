
$(document).ready(function () {
    if (window.innerWidth > 1279)
        $(".mask").height(parseInt($("html").height()) - parseInt($("footer").height()));
});
$(window).resize(function () {
    if (window.innerWidth > 1279)
        $(".mask").height(parseInt($("html").height()) - parseInt($("footer").height()));
});
$(window).scroll(function () {
    if (window.innerWidth > 1279)
        $(".mask").height(parseInt($("html").height()) - parseInt($("footer").height()));
});