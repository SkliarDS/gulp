
ymaps.ready(init);
function init() {
   
    let map_resort = new ymaps.Map('main_map', {
        center: [55.751355888195356, 37.6188314338379],
        zoom: 14
    });

    let placemark = new ymaps.Placemark([55.751355888195356, 37.6188314338379], {
        iconCaption: 'BonThai',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/icons/marker.svg',
        iconImageSize: [63, 63],
    });
    map_resort.geoObjects.add(placemark);

    map_resort.controls.remove('geolocationControl');
    map_resort.controls.remove('searchControl');
    map_resort.controls.remove('trafficControl');
    map_resort.controls.remove('typeSelector');
    map_resort.controls.remove('fullscreenControl');
    map_resort.controls.remove('zoomControl');
    map_resort.controls.remove('rulerControl');
    map_resort.behaviors.disable(['scrollZoom']);
}
