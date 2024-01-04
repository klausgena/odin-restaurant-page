import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import header from './templates/header.js';
import footer from './templates/footer.js';
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
	const contact = document.getElementById("contact");
	contact.classList.remove("underline");
	target.className = "underline";
	menuPage();
    } else if (target.id == "contact") {
	const menu = document.getElementById("menu");
	menu.classList.remove("underline");
	target.className = "underline";
	contactPage();
    } else {
	const contact = document.getElementById("contact");
	const menu  = document.getElementById("menu");
	contact.classList.remove("underline");
	menu.classList.remove("underline");
	homePage();
    }
};
homePage();
footer();

