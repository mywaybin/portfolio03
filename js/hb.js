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
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
        $('.mainVisual .main_num').text(c + 1)
    });

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
    });

    $('.mainProduct .arrows .Prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows .Next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    });

})

//tab menu

$('.mainCustomer .tab_menu>li').on('click', function (event) {
    event.preventDefault();
    var _this = $(this); //이벤트가 적용된 자신을 반환
    var idx = $(this).index(); //이벤트가 적용된 자신의 번호를 반환 0,1,2
    _this.addClass('on').siblings().removeClass('on');
    $('.mainCustomer .tab_content>li').eq(idx).addClass('on')
        .siblings().removeClass('on')
});

$('#f_link').on('change', function () {
    var link = $(this).val();
    link && window.open(link);
})