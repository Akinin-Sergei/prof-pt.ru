var swiper__gallery = new Swiper(".slider__video-gallery", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "1",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    initialSlide: 0,
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        }
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        }
    }
});




/*===MAP===*/
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [52.941336, 36.031399],
        zoom: 18
        // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
    }),
        myPlacemark = new ymaps.Placemark([52.941336, 36.031399], {
            // Свойства.
            balloonContent: 'Головной офис',
            hintContent: 'Центр грузоподъемных технологий"'
        }, {
            // Опции.
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/map_point.svg',
            // Размеры метки.
            iconImageSize: [70, 70],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -50]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark)
}




/*===FOOTER__DARK===*/
if ($(window).width() < 780) {
    $('.footer').addClass('dark__footer');
}