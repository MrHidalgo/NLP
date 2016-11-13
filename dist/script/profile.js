$(document).ready( function() {

    $(".goals__btn-main").on("click", function(e) {
        e.preventDefault();

        if($(this).closest(".goals__btn-item").hasClass("active")) {
            $(".goals__btn-item, .form__message").removeClass("active");
            return false;
        }

        $(".goals__btn-item").removeClass("active");

        $(this).closest(".goals__btn-item").addClass("active");
        $(".form__message").addClass("active");
    });



    var blockGoals = '<div class="goals__wrap"> ' +
        '<textarea name="form__message" class="form__message form__message_profile"></textarea> ' +
        '<div class="goals__btn">' +
            '<ul class="goals__btn-list"> ' +
                '<li class="goals__btn-item">' +
                    '<a href="javascript:void(0);" class="goals__btn-main goals__btn-liked">' +
                        '<i class="icon goals__btn-icon"></i></a></li> ' +
                '<li class="goals__btn-item">' +
                    '<a href="javascript:void(0);" class="goals__btn-main goals__btn-edit">' +
                        '<i class="icon goals__btn-icon"></i></a></li> ' +
                '<li class="goals__btn-item">' +
                    '<a href="javascript:void(0);" class="goals__btn-main goals__btn-delete">' +
                        '<i class="icon goals__btn-icon"></i></a></li></ul></div></div>';


    $(".btn-add").on("click", function(e) {
        e.preventDefault();

        $('.goals').append(blockGoals);
    });
});