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