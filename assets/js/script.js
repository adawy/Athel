$(document).ready(function () {
    $('.openNav').click(function () {
        $(this).parent().find('.menu').addClass('openNavDiv');
    })
    $('.closeNav').click(function (e) {
        e.preventDefault();
        $(this).parent().removeClass('openNavDiv');
    })
    $('header .navContainer .nav a').click(function(e){
        $('.menu').removeClass('openNavDiv')
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
    $(window).on('load', function () {
        $('#loader').addClass('fade-out');
        setTimeout(function () {
            $('#loader').remove(); // Fully remove from DOM
        }, 500);
    });
});