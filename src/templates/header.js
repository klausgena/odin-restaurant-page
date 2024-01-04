import {createElement, createImage} from '../helpers.js';
export default function (headerMenuList) {
    const logo = "PRESTOPRESTO";
    createElement('nav', '', 'main', 'header-menu');
    createElement('div', '', 'header-menu', 'header-menu-left');
    createElement('div', '', 'header-menu', 'header-menu-right');
    createElement('h1', logo, 'header-menu-left');
    createElement('ul', '', 'header-menu-right', 'menu-ul');
    headerMenuList.forEach(
	(item) => {
	    let link = document.createElement("a");
	    link.textContent = item.toUpperCase();
	    createElement('li', link, 'menu-ul', item);
	})
}
