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


    $(".tabs__item").on("click", function(e){
        var listItemID = $(this).data("id");

        $(".tabs__item").removeClass("active");
        $(".tabs__block").removeClass("active");

        $(this).addClass("active");
        $('.tabs__block-' + listItemID).addClass("active");
    });
});