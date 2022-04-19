$(document).ready(function () {
    $('.header__burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('show');
    });





    $('.copytext').click(function () {

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        $temp.remove();

    });


    $(".scrolllink").on("click", 'a', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $('.scrolllink a').click(function () {
        $('.header__burger').removeClass('open');
        $('.header__nav').removeClass('show');
    });





});