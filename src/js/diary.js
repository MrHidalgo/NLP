$(document).ready( function() {

    $(".note__wrap").on("click", function(e) {
        e.preventDefault();

        $(".note__wrap").removeClass("active");

        $(this).addClass("active");
    });
});