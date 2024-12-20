// ===COOKEI===
$.cookie('test_var', 'test_value', { expires: 30 });

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
    cookiewin = document.getElementsByClassName('cookie_notice')[0];
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    // показываем    
    cookiewin.style.display = "block";
    // закрываем по клику
    document.getElementById("cookie_close").addEventListener("click", function (e) {
        e.preventDefault();
        cookiewin.style.display = "none";
        // записываем cookie на 1 день, с которой мы не показываем окно
        let date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
    });
};

// ===HEADER_SCROLL===
var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});




// ===BURGER_MENU===
$('.burger__menu').on('click', function (e) {
    $('.burger__menu-icon').toggleClass('open');
    $('.burger__menu-body').toggleClass('open');
    $('body').toggleClass('lock');
});



// ===SEARCH_MENU===
if ($(window).width() > 650) {
    $('#search-menu').on('click', function (e) {
        $('.search_box').addClass('search-menu-open');
        $('.nav__menu').addClass('search-menu-open');
    });

    $(document).click(function (e) {
        if (!$('.search_box').is(e.target) && $('.search_box').has(e.target).length === 0) {
            $('.search_box').removeClass("search-menu-open");
            $('.nav__menu').removeClass('search-menu-open');
        };
    });
};



// ===FOOTER_BOTTOM===
if ($(document).height() <= $(window).height()) {
    $(".footer").addClass("fixed-bottom");
};



// Ограничения на ввод данных в формах
if ($('.input-number').length !== 0) {
    $('body').on('input', '.input-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
};

if ($('.input-ru').length !== 0) {
    $('body').on('input', '.input-ru', function () {
        this.value = this.value.replace(/[^а-яё\s]/gi, '');
    });
};



// Маска для телефона
if ($('.input__phone').length !== 0) {
    $('.input__phone').mask('+7 (999) 999-99-99');
};



// ===Poppup===
$('.contact__btn').on('click', function (e) {
    e.preventDefault();
    $('.contacts__form-poppup').toggleClass('poppup__open');
    $('body').toggleClass('lock');
});



// ===SCROLL TO TOP=== 
$(function scrollToTop() {

    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 700) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    });

});
