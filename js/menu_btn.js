$(".menu_btn").click(function () {
    $(".menu_btn_inner_bg").toggle();
    $(".menu_btn_inner").toggle();
    $("html").toggleClass("hidden");
    $(".top_bar").toggleClass("top_click");
    $(".mid_bar").toggleClass("mid_click");
    $(".bot_bar").toggleClass("bot_click");
    $(this).toggleClass("menu_btn_click");
});