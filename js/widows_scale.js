$(document).ready(function () {
    let scaleValue = (1 / window.devicePixelRatio);
    if (window.innerWidth > 1279)
        $("html").css({ "zoom": scaleValue });
});
$(window).resize(function () {
    let scaleValue = (1 / window.devicePixelRatio);
    if (window.innerWidth > 1279)
        $("html").css({ "zoom": scaleValue });
});