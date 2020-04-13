// $(document).ready(function () {
//     var system = {
//         win: false,
//         mac: false,
//         xll: false,
//         ipad: false
//     };   
//     var p = navigator.platform;
//     system.win = p.indexOf("Win") == 0;
//     system.mac = p.indexOf("Mac") == 0;
//     system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//     system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//     let scaleValue = (1 / window.devicePixelRatio);
//     console.log(p);
    
//     if (system.win || system.mac || system.xll)
//         $("html").css({ "zoom": scaleValue });
// });
// $(window).resize(function () {
//     var system = {
//         win: false,
//         mac: false,
//         xll: false,
//         ipad: false
//     };   
//     var p = navigator.platform;
//     system.win = p.indexOf("Win") == 0;
//     system.mac = p.indexOf("Mac") == 0;
//     system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//     system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//     let scaleValue = (1 / window.devicePixelRatio);
//     console.log(p);
    
//     if (system.win || system.mac || system.xll)
//         $("html").css({ "zoom": scaleValue });
// });