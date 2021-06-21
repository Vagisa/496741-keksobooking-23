import {returnRundomNumber} from './modules/return-rundom-number.js';

const getRandomArrayElement = (elements) => elements[returnRundomNumber(0, elements.length - 1)];

export {getRandomArrayElement};
