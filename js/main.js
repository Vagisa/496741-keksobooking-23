import {generateAdCardFragment} from './modules/create-ad-card.js';

const NUMBER_GENERATIONS = 1;
const mapCanvas = document.querySelector('#map-canvas');

const adFragment = generateAdCardFragment(NUMBER_GENERATIONS);

mapCanvas.appendChild(adFragment);
