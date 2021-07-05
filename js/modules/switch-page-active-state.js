const switchPageActiveState = (active) => {
  const adForm = document.querySelector('.ad-form');
  const adFormHeader = document.querySelector('.ad-form-header');
  const adFormElements = document.querySelectorAll('.ad-form__element');
  const mapFilters = document.querySelector('.map__filters');
  const mapFiltersElements = document.querySelectorAll('.map__filter');
  const mapFeatures = document.querySelector('.map__features');

  if (active) {
    adForm.classList.remove('ad-form--disabled');
    adFormHeader.disabled = false;
    adFormElements.forEach((element) => element.disabled = false);
    mapFilters.classList.remove('map__filters--disabled');
    mapFiltersElements.forEach((element) => element.disabled = false);
    mapFeatures.disabled = false;
  } else {
    adForm.classList.add('ad-form--disabled');
    adFormHeader.disabled = true;
    adFormElements.forEach((element) => element.disabled = true);
    mapFilters.classList.add('map__filters--disabled');
    mapFiltersElements.forEach((element) => element.disabled = true);
    mapFeatures.disabled = true;
  }
};

export {switchPageActiveState};
