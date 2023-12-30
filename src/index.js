import homePage from './home.js';
import './style.css';

// Create content div
const contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv);
// Create homePage
homePage();
