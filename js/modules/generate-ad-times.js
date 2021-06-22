import {returnRundomNumber, returnRundomFloat} from './modules/return-rundom-number.js';
import {getRandomArrayElement} from './modules/get-random-array-element.js';
import {getArrayRundomLength} from './modules/get-array-rundom-length.js';

const TYPES_OF_HOUSIN = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CONVENIENCES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PICTURES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ARRAY_LENGTH = 10;
const  IMAGES = new Array(ARRAY_LENGTH).fill(null).map((elem, index) =>
  `img/avatars/user${(index + 1).toString().padStart(2, '0')}.png`);

const generateAd = () => ({
  author: {
    avatar: getRandomArrayElement(IMAGES),
  },
  location: {
    lat: returnRundomFloat(35.65000, 35.70000, 5),
    lng: returnRundomFloat(139.70000, 139.80000, 5),
  },
  offer: {
    title: 'Объявление',
    address: `${location.lat}, ${location.lng}`,
    price: returnRundomNumber(0, 1000000),
    type: getRandomArrayElement(TYPES_OF_HOUSIN),
    rooms: returnRundomNumber(1, 10),
    guests: returnRundomNumber(0, 100),
    checkin: `${returnRundomNumber(12, 14)}:00`,
    checkout: `${returnRundomNumber(12, 14)}:00`,
    features: getArrayRundomLength(CONVENIENCES),
    description: 'Просторное светлое помещение с видом на море.',
    photos: getArrayRundomLength(PICTURES),
  },
});

const generateAdTimes = (number) => (
  new Array(number).fill(null).map(generateAd)
);

export {generateAdTimes};
