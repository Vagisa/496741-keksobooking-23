import {returnRandomNumber} from './return-random-number.js';

const getRandomArrayElement = (elements) => elements[returnRandomNumber(0, elements.length - 1)];

export {getRandomArrayElement};