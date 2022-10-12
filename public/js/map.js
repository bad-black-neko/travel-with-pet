ymaps.ready(function () {
  var myMap = new ymaps.Map("YMapsID", {
    center: [1, 1],
    zoom: 3
  });


  var myPlacemarkRussia = new ymaps.Placemark([55.55, 37.37], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/lapa.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42],
    // iconCaption: 'Russia'
    locationUrl: 'test'
  });

  myPlacemarkRussia.properties.set({
    // Подпись к диаграмме.
    iconCaption: 'Russia',
 });

  myMap.geoObjects.add(myPlacemarkRussia);

  var myPlacemarkTurkey = new ymaps.Placemark([39.55, 32.51], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/lapa.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42],
    iconCaption: 'Turkey',
    hintContent: 'Текст всплывающей подсказки',
    locationUrl: 'http://localhost:3000/'
  });

  myMap.geoObjects.add(myPlacemarkTurkey);
    
    myMap.geoObjects.events.add('click', function (e) {
        // Объект на котором произошло событие
        let target = e.get('target');
        window.location.href = target.properties.get('locationUrl');
    });

});