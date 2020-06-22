$(document).ready(function () {
    let width = $(window).width();
    if (window.innerWidth > 1529) {
        let menu_area_position = 230 + (width - 1920) / 2
        $(".menu_Area").css({ right: `${menu_area_position}px` });
    }
    else if (window.innerWidth > 1279) {
        let menu_area_position = 339 + (width - 1920) / 2;
        $(".menu_Area").css({ right: `${menu_area_position}px` });
    }
    else {
        $(".menu_Area")[0].style = "";
    }

    $('main').css("min-height",window.innerHeight-$("footer").height()-$("nav").height()-9);
});
$(window).resize(function () {
    let width = $(window).width();
    if (window.innerWidth > 1529) {
        let menu_area_position = 230 + (width - 1920) / 2
        $(".menu_Area").css({ right: `${menu_area_position}px` });
    }
    else if (window.innerWidth > 1279) {
        let menu_area_position = 339 + (width - 1920) / 2;
        $(".menu_Area").css({ right: `${menu_area_position}px` });
    }
    else {
        $(".menu_Area")[0].style = "";
    }
    setTimeout(function () {
        $('main').css("min-height",window.innerHeight-$("footer").height()-$("nav").height()-9);
    }, 100);
    
});