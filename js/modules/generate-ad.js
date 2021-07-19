import {returnRandomNumber, returnRandomFloat} from './return-random-number.js';
import {getRandomArrayElement} from './get-random-array-element.js';
import {getArrayRandomLength} from './get-array-random-length.js';

const typesOfHousin = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const conveniences = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const pictures = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

let avatarIndex = 1;
const getAvatarUrl = () => {
  if (avatarIndex > 10) {
    return '';
  }
  const url = `img/avatars/user${(avatarIndex).toString().padStart(2, '0')}.png`;
  avatarIndex++;
  return url;
};

const generateAd = () => {
  const location = {
    lat: returnRandomFloat(35.65000, 35.70000, 5),
    lng: returnRandomFloat(139.70000, 139.80000, 5),
  };
  return {
    author: {
      avatar: getAvatarUrl(),
    },
    location: location,
    offer: {
      title: 'Объявление',
      address: `${location.lat}, ${location.lng}`,
      price: returnRandomNumber(0, 1000000),
      type: getRandomArrayElement(typesOfHousin),
      rooms: returnRandomNumber(1, 10),
      guests: returnRandomNumber(0, 100),
      checkin: `${returnRandomNumber(12, 14)}:00`,
      checkout: `${returnRandomNumber(12, 14)}:00`,
      features: getArrayRandomLength(conveniences),
      description: 'Просторное светлое помещение с видом на море.',
      photos: getArrayRandomLength(pictures),
    },
  };
};
/*
const generateAdTimes = (number) => (
  new Array(number).fill(null).map(generateAd)
);
*/
export {generateAd};
