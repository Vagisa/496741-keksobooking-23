import {renderMarkers} from './map.js';
import {debounce} from '../utils/debounce.js';

const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');

mapFiltersForm.addEventListener('change', () => {
  const debouncedRenderMarkers = debounce(renderMarkers);
  const leafletCloseButton = document.querySelector('.leaflet-popup-close-button');
  if (leafletCloseButton) {
    leafletCloseButton.click();
  }
  debouncedRenderMarkers();
});

const prioritizeAd = (ad) => {
  let priority = 0;
  if (ad.offer.type === housingTypeSelect.value) {priority += 3;}
  if (ad.offer.price === housingPriceSelect.value) {priority += 2;}
  switch (housingPriceSelect.value) {
    case 'middle':
      if (ad.offer.price >= 10000 && ad.offer.price <= 50000) {
        priority += 2;
      }
      break;
    case 'low':
      if (ad.offer.price < 10000) {
        priority += 2;
      }
      break;
    case 'high':
      if (ad.offer.price > 50000) {
        priority += 2;
      }
      break;
    default:
      priority += 2;
  }
  if (ad.offer.rooms === Number(housingRoomsSelect.value)) {priority += 1;}
  if (ad.offer.guests === Number(housingGuestsSelect.value)) {priority += 1;}
  if (ad.offer.features) {
    ad.offer.features.forEach((feature) => {
      if (document.querySelector(`#filter-${feature}`).checked) {priority += 1;}
    });
  }

  return priority;
};

const compareAds = (firstAd, secondAd) => {
  const priorityFirst = prioritizeAd(firstAd);
  const prioritySecond = prioritizeAd(secondAd);

  return prioritySecond - priorityFirst;
};

export {compareAds};
