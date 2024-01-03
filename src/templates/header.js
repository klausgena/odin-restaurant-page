import {createElement, createImage} from '../helpers.js';
// TODO out of content and A links hover and stuff
export default function (headerMenuList) {
    const logo = "PRESTOPRESTO";
    createElement('nav', '', 'main', 'header-menu');
    createElement('div', '', 'header-menu', 'header-menu-left');
    createElement('div', '', 'header-menu', 'header-menu-right');
    createElement('h1', logo, 'header-menu-left');
    createElement('ul', '', 'header-menu-right', 'menu-ul');
    headerMenuList.forEach(
	(item) => createElement('li', item.toUpperCase(), 'menu-ul', item));
};
