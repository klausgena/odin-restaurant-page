import {createElement, createImage, createElsFromArr} from './helpers.js';
import menuData from './data/menu.csv';
import menuImage from './img/20231230_0027.jpg';

export default function () {
    const heroSlogan1 = "What's on the menu?";
    createElement('div', '', 'content', 'hero');
    createImage(menuImage, 'hero', 1920, 1280); 
    createElement('h2', heroSlogan1, 'hero');
    createElement('div', '', 'content', 'text');
    // table from header row
    createElement('table', '', 'text', 'menu-table');
    createElsFromArr('th', menuData[0], 'menu-table');
    menuData.forEach((item) => {
	if (item != menuData[0]) {
	createElement('tr','','menu-table');
	    createElsFromArr('td', item, 'menu-table');
	}
    });
};
