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
  const popupPhotos = adCard.querySelector('.popup__photos');
  adCard.querySelector('.popup__title').textContent = ad.offer.title;
  adCard.querySelector('.popup__text--address').textContent = ad.offer.address;
  adCard.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adCard.querySelector('.popup__type').textContent = typeTranslations[ad.offer.type];
  adCard.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adCard.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adCard.querySelector('.popup__features').textContent = ad.offer.features;
  adCard.querySelector('.popup__description').textContent = ad.offer.description;
  if (ad.offer.photos) {
    ad.offer.photos.forEach((url, index) => {
      let photo = adCard.querySelector('.popup__photo');
      if (index > 0) {
        photo = adCard.querySelector('.popup__photo').cloneNode();
      }
      photo.src = url;
      popupPhotos.appendChild(photo);
    });
  } else {
    adCard.querySelector('.popup__photo').remove();
  }
  adCard.querySelector('.popup__avatar').src = ad.author.avatar;

  return adCard;
};

export {generateAdElement};
