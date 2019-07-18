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