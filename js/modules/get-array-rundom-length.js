import {returnRundomNumber} from './modules/return-rundom-number.js';

const getArrayRundomLength = (initialArrayElements) =>
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

export {getArrayRundomLength};
