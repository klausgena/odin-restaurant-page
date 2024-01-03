import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import header from './templates/header.js';
import footer from './templates/footer.js';
// TODO HEADER AND FOOTER oUT OF CONTENT DIV
// Create content div
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
const mainDiv = document.getElementById("main");
// Create header
const navItems = ['menu', 'contact'];
header(navItems);
// Create content div
mainDiv.appendChild(contentDiv);
// Add header event listener
const menu = document.getElementById("header-menu");
menu.onclick = function(event) {
    let target = event.target;
    const content = document.getElementById("content");
    content.textContent = "";
    if (target.id == "menu") {
	menuPage();
    } else if (target.id == "contact") {
	contactPage();
    } else {
	homePage();
    }
};
homePage();
footer();

