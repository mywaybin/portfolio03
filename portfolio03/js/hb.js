$(function () {

    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    // mainSlide
    $('.mainSlide').slick({
        //slidesToShow: 2,
        //arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle('on');
    });

    $('.main_pro_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.mainProduct .arrows .Prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows .Next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    });

});