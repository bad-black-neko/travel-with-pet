ymaps.ready(function () {
  var myMap = new ymaps.Map("YMapsID", {
    center: [0, 0],
    zoom: 1
  });


  var myPlacemarkRussia = new ymaps.Placemark([55.55, 37.37], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/lapa.png',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42],
    // iconCaption: 'Russia'
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
  });

  myMap.geoObjects.add(myPlacemarkTurkey);

});