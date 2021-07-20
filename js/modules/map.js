import {switchPageActiveState} from './switch-page-active-state.js';
import {generateAdElement} from './create-ad-card.js';
import {setAddress} from './form.js';

const DEFAULT_LOCATION = {
  lat: 35.67194,
  lng: 139.75382,
};
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

switchPageActiveState(false);

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
  DEFAULT_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

map.setView(DEFAULT_LOCATION, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.addTo(map);
mainPinMarker.on('moveend', (evt) => {
  setAddress({
    lat: evt.target.getLatLng().lat.toFixed(5),
    lng: evt.target.getLatLng().lng.toFixed(5),
  });
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

const resetMap = () => {
  mainPinMarker.setLatLng(DEFAULT_LOCATION);
  map.setView(DEFAULT_LOCATION, 13);
  setAddress(DEFAULT_LOCATION);
};

export {createMarker, resetMap};
