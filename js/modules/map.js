import {switchAdFormActiveState, switchFilterFormActiveState} from './switch-page-active-state.js';
import {generateAdElement} from './create-ad-card.js';
import {setAddress} from './form.js';
import {getData} from './api.js';
import {filterAd} from './similar-list.js';
import {showAlert} from './util.js';

const SIMILAR_ADS_COUNT = 10;
const DEFAULT_LOCATION = {
  lat: 35.67194,
  lng: 139.75382,
};
const DEFAULT_MAP_SCALE = 13;

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
let similarAds = [];

const createMarker = (ad) => {
  const pinIcon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20,40],
  });

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

const renderMarkers = () => {
  markerGroup.clearLayers();
  const ads = similarAds.slice().filter(filterAd).slice(0, SIMILAR_ADS_COUNT);
  ads.map(createMarker);
};

switchAdFormActiveState(false);
switchFilterFormActiveState(false);

map.on('load', () => {
  switchAdFormActiveState(true);
  getData((ads) => {
    similarAds = ads;
    renderMarkers();
    switchFilterFormActiveState(true);
  },
  showAlert,
  );
});

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26,52],
});

const mainPinMarker = L.marker(
  DEFAULT_LOCATION,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

map.setView(DEFAULT_LOCATION, DEFAULT_MAP_SCALE);

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

const resetMap = () => {
  mainPinMarker.setLatLng(DEFAULT_LOCATION);
  map.setView(DEFAULT_LOCATION, DEFAULT_MAP_SCALE);
  setAddress(DEFAULT_LOCATION);
};

export {renderMarkers, resetMap};
