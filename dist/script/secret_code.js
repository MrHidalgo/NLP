$(document).ready(function(){


    // test method for secret code validation [11111]
    $(".modal__input").on("input", function(e) {
        var strClass = "modal__btn-wrap";

       if($(this).val() === "11111") {
           $("." + strClass).addClass(strClass + "_unlock");
       } else {
           $("." + strClass).removeClass(strClass + "_unlock");
       }
    });
});