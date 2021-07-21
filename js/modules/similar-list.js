import {renderMarkers} from './map.js';
import {debounce} from '../utils/debounce.js';

const MIDDLE_PRICE_BEGIN = 10000;
const MIDDLE_PRICE_END = 50000;
const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeSelect = document.querySelector('#housing-type');
const housingPriceSelect = document.querySelector('#housing-price');
const housingRoomsSelect = document.querySelector('#housing-rooms');
const housingGuestsSelect = document.querySelector('#housing-guests');
const featuresCheckbox = document.querySelectorAll('.map__checkbox');

mapFiltersForm.addEventListener('change', () => {
  const debouncedRenderMarkers = debounce(renderMarkers);
  const leafletCloseButton = document.querySelector('.leaflet-popup-close-button');
  if (leafletCloseButton) {
    leafletCloseButton.click();
  }
  debouncedRenderMarkers();
});

const filterAd = (ad) => {
  if (housingTypeSelect.value !== 'any' && ad.offer.type !== housingTypeSelect.value) {return false;}
  switch (housingPriceSelect.value) {
    case 'middle':
      if (ad.offer.price < MIDDLE_PRICE_BEGIN || ad.offer.price > MIDDLE_PRICE_END) {
        return false;
      }
      break;
    case 'low':
      if (ad.offer.price >= MIDDLE_PRICE_BEGIN) {
        return false;
      }
      break;
    case 'high':
      if (ad.offer.price <= MIDDLE_PRICE_END) {
        return false;
      }
      break;
  }
  if (housingRoomsSelect.value !== 'any' && ad.offer.rooms !== Number(housingRoomsSelect.value)) {return false;}
  if (housingGuestsSelect.value !== 'any' && ad.offer.guests !== Number(housingGuestsSelect.value)) {return false;}
  for (const checkbox of featuresCheckbox) {
    if (checkbox.checked && (!ad.offer.features || !ad.offer.features.includes(checkbox.value))) {
      return false;
    }
  }
  return true;
};

export {filterAd};
