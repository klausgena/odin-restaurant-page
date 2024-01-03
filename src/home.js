import {createElement, createImage, createElsFromArr} from './helpers.js';
import headerImage from './img/20231230_0085.jpg';
import bioImage from './img/bio.jpg';
import yaml from './data/home.yaml';

export default function () {
    const heroSlogan1 = "All you can't eat - and less!";
  // todo create textcontent:  const subTitle = "Eats what's left on someone else's plate, if nobody gets there first. A thrilling experience!";
    createElement('div', '', 'content', 'hero');
    createImage(headerImage, 'hero', 1920, 1280); 
    createElement('h2', heroSlogan1, 'hero');
    createElement('div', '', 'content', 'text');
    createElement('div', '', 'text', 'description');
    createElement('div', '', 'text', 'bio');
    createElement('div', '', 'text', 'reviews');
    createElement('h2', yaml.description.title, 'description');
    createElsFromArr('p', yaml.description.content, 'description');
    createImage(bioImage, 'bio', 300, 450);
    createElement('p', yaml.bio, 'bio');
    createElsFromArr('h3', yaml.reviews, 'reviews');
    
};
