const TYPES_OF_HOUSIN = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CONVENIENCES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PICTURES = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const ARRAY_LENGTH = 10;
const NUMBER_GENERATIONS = 10;

const returnRundomNumber = function (firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return NaN;
  }

  if (firstNumber > secondNumber) {
    return NaN;
  }

  return Math.round(Math.random() * (secondNumber - firstNumber) + firstNumber);
};

const returnRundomFloat = function (firstNumber, secondNumber, numberOfSings = 0) {
  const rendomNumber = Math.random() * (secondNumber - firstNumber) + firstNumber;

  if (firstNumber < 0 || secondNumber < 0 || numberOfSings < 0) {
    return NaN;
  }

  if (firstNumber > secondNumber) {
    return NaN;
  }

  const multiplicator = Math.pow(10, numberOfSings);

  return Math.round(rendomNumber * multiplicator) / multiplicator;
};

const getRandomArrayElement = (elements) => elements[returnRundomNumber(0, elements.length - 1)];

const getArrayRandomLength = (initialArrayElements) =>
{
  const FIRST_ELEMENT = returnRundomNumber(0, initialArrayElements.length - 1);
  let secondElement = returnRundomNumber(1, initialArrayElements.length);

  if (FIRST_ELEMENT === secondElement) {
    secondElement =+ 1;
  }
  if (FIRST_ELEMENT > secondElement) {
    return initialArrayElements.slice(secondElement, FIRST_ELEMENT);
  }
  return initialArrayElements.slice(FIRST_ELEMENT, secondElement);
};

const  IMAGES = new Array(ARRAY_LENGTH).fill(null).map((elem, index) =>
  `img/avatars/user${(index + 1).toString().padStart(2, '0')}.png`);

const generate = () => ({
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
    features: getArrayRandomLength(CONVENIENCES),
    description: 'Просторное светлое помещение с видом на море.',
    photos: getArrayRandomLength(PICTURES),
  },
});

const generateTimes = (number) => (
  new Array(number).fill(null).map(generate)
);

generateTimes(NUMBER_GENERATIONS);
