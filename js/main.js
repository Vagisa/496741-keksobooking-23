import {generateAdCardFragment} from './modules/create-ad-card.js';
import {switchPageActiveState} from './modules/switch-page-active-state.js';

const NUMBER_GENERATIONS = 1;
const mapCanvas = document.querySelector('#map-canvas');

const adFragment = generateAdCardFragment(NUMBER_GENERATIONS);

mapCanvas.appendChild(adFragment);
switchPageActiveState(false);
switchPageActiveState(true);
