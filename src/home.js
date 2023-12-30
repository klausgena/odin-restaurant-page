import {createElement, createImage} from './helpers.js';
import headerImage from './img/20231230_0075.jpg';
export default function () {
const text = "All the non-food you can eat. Eats what's left on someone else's plate, if nobody gets there first. A thrilling experience!";
createImage(headerImage, 'content', 1000, 600); 
createElement('h1', 'No Food', 'content');
createElement('p', text, 'content');
};

