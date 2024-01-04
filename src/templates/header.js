import {createElement, createImage} from '../helpers.js';
export default function (headerMenuList) {
    const logo = "PRESTOPRESTO";
    createElement('nav', '', 'main', 'header-menu');
    createElement('div', '', 'header-menu', 'header-menu-left');
    createElement('div', '', 'header-menu', 'header-menu-right');
    createElement('h1', logo, 'header-menu-left');
    createElement('ul', '', 'header-menu-right', 'menu-ul');
	    const rightMenu = document.getElementById('menu-ul');
    headerMenuList.forEach(
	(item) => {
	    let link = document.createElement("a");
	    let li = document.createElement("li");
	    link.textContent = item.toUpperCase();
	    link.setAttribute("id", item);
	    li.appendChild(link);
	    rightMenu.appendChild(li);
	    	})
}
