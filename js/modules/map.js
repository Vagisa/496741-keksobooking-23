import {switchPageActiveState} from './switch-page-active-state.js';
import {generateAdElement} from './create-ad-card.js';
import {generateAd} from './generate-ad.js';

switchPageActiveState(false);

const address = document.querySelector('#address');
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const NUMBER_GENERATIONS = 5;

map.on('load', () => {
  switchPageActiveState(true);
});

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52],
});

const pinIcon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20,40],
});

const mainPinMarker = L.marker(
  {
    lat: 35.69530,
    lng: 139.71073,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

map.setView({
  lat: 35.69530,
  lng: 139.71073,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  address.value = `lat:${evt.target.getLatLng().lat.toFixed(5)}, lng:${evt.target.getLatLng().lng.toFixed(5)}`;
  //ads.push(evt.target.getLatLng());
});

const createMarker = (ad) => {
  const marker = L.marker(
    ad.location,
    {
      icon: pinIcon,
    },
  );
  marker.addTo(markerGroup).bindPopup(
    generateAdElement(ad),
    {
      keepInView: true,
    },
  );
  return marker;
};

new Array(NUMBER_GENERATIONS).fill(null).map(generateAd).map(createMarker);
