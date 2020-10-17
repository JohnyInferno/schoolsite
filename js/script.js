var header = $('.header');
var exp_section = $('.exp');
var bonuses_section = $('.bonuses');


jQuery(document).ready(function($) {
    $('.popup-link').magnificPopup({
        type: 'inline'
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > bonuses_section.offset().top) {
        header.addClass('header-white');
    }

    if ($(this).scrollTop() < bonuses_section.offset().top) {
        header.removeClass('header-white');
    }
})

$('.pricing__item').click(function(){
    if ($(this).hasClass('pricing__item-pressed')){
        $(this).removeClass('pricing__item-pressed');
    } else {
        if ($('.pricing__item').is('pricing__item-pressed')){
            $(this).removeClass('pricing__item-pressed');
        }
        $(this).addClass('pricing__item-pressed')
    }
})