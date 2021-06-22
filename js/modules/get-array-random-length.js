import {returnRandomNumber} from './modules/return-random-number.js';

const getArrayRandomLength = (initialArrayElements) =>
{
  const firstElement = returnRandomNumber(0, initialArrayElements.length - 1);
  let secondElement = returnRandomNumber(1, initialArrayElements.length);

  if (firstElement === secondElement) {
    secondElement =+ 1;
  }
  if (firstElement > secondElement) {
    return initialArrayElements.slice(secondElement, firstElement);
  }
  return initialArrayElements.slice(firstElement, secondElement);
};

export {getArrayRandomLength};
