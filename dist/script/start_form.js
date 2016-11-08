$(document).ready(function(){

    // test validation user name and phone
    $(".input input").on("focus", function () {
        if($(this).val().length === 0) {
            $(".input-wrap").removeClass("error");
            $(this).closest(".input-wrap").addClass("error");
        } else {
            $(this).closest(".input-wrap").removeClass("error");
        }
    });

    $("#user_name").on('input', function() {
        if($(this).val() === "qwerty") {
            $(this).closest(".input-wrap").addClass("done");
        } else {
            $(this).closest(".input-wrap").removeClass("done").addClass("error");
        }
    });

    $("#user_phone").on('input', function() {
        if($(this).val() === "123456789") {
            $(this).closest(".input-wrap").addClass("done");
        } else {
            $(this).closest(".input-wrap").removeClass("done").addClass("error");
        }
    });
});