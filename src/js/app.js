import { animation } from './modules/animation.js';
import { burgerMenu } from './modules/burger.js';
import * as flsFunctions from './modules/functions.js';
import { checkLocation } from './modules/locationListener.js';
import { scrollToElement } from './modules/scroll.js';

flsFunctions.isWebp();

checkLocation();

scrollToElement();

animation();

burgerMenu();
