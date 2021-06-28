import {generateAdTimes} from './generate-ad-times.js';

const createAdCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const typeTranslations = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const generateAdElement = (ad) => {
  const adCard = createAdCardTemplate.cloneNode(true);
  adCard.querySelector('.popup__title').textContent = ad.offer.title;
  adCard.querySelector('.popup__text--address').textContent = ad.offer.address;
  adCard.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adCard.querySelector('.popup__type').textContent = typeTranslations[ad.offer.type];
  adCard.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adCard.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adCard.querySelector('.popup__features').textContent = ad.offer.features;
  adCard.querySelector('.popup__description').textContent = ad.offer.description;
  adCard.querySelector('.popup__photo').src = ad.offer.photos;
  adCard.querySelector('.popup__avatar').src = ad.author.avatar;

  return adCard;
};

const generateAdCardFragment = (number) => {
  const fragment = document.createDocumentFragment();
  generateAdTimes(number).forEach((ad) => {
    const adCard = generateAdElement(ad);
    fragment.appendChild(adCard);
  });
  return fragment;
};

export {generateAdCardFragment};
