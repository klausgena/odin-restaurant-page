import {createElement, createImage, createElsFromArr} from './helpers.js';
import contactImage from './img/20231230_0075.jpg';

export default function () {
    const heroSlogan1 = "Love to get in touch, do you?";
    createElement('div', '', 'content', 'hero');
    createImage(contactImage, 'hero', 1920, 1280); 
    createElement('h2', heroSlogan1, 'hero');
    createElement('div', '', 'content', 'text');
    // insert form: name, e-mail, message, submit
    const form = document.createElement('form');
    const name = document.createElement('input');
    name.setAttribute("placeholder", "insert name");
    const nameLabel = document.createElement('label');
    nameLabel.textContent="Your name:";
    const email = document.createElement('input');
    const emailLabel = document.createElement('label');
    emailLabel.textContent="Your email:";
    const message = document.createElement('input');
    const messageLabel = document.createElement('label');
    messageLabel.textContent="Your message:";
    const button = document.createElement('button');
    email.setAttribute("type", "email");
    button.setAttribute('type', 'submit');
    button.value = 'send';
    button.textContent = 'Send';
    form.appendChild(nameLabel);
    form.appendChild(name);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(messageLabel);
    form.appendChild(message);
    form.appendChild(button);
    const textDiv = document.getElementById("text");
    alert('dodod');
    textDiv.appendChild(form);
};
