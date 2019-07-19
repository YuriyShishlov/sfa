function OnCompleteJs() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
}

function OnSuccessJs() {
    var urlMy = $(this).attr("data-myurl");
    var titleMy = $(this).attr("data-mytitle");
    var currentState = window.history.state;
    document.title = titleMy;
    window.history.pushState(currentState, titleMy, urlMy);
    return false;
}

$(document).ready(function ($) {
    $('.popup_open').click(function () {
        $('.fixed_overlay').fadeIn();
        return false;
    });

    $('.popup_close').click(function () {
        $(this).parents('.fixed_overlay').fadeOut();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.fixed_overlay').fadeOut();
        }
    });

    $('.fixed_overlay').click(function (e) {
        if ($(e.target).closest('.modal_container').length == 0)
        {
            $(this).fadeOut();
        }
    });
});