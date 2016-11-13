function addHeightAfterResize() {
    if($("body").hasClass("hello__page")) {
        var heightBody = $(document).height();

        $(".hello_bg").css(
            "height", heightBody
        );
    }
}

$(window).on("load resize", function() {
    addHeightAfterResize();


    setTimeout($(".hello_bg").fadeOut(10000), 5000);
});