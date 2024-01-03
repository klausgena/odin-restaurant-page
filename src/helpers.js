function createImage (imageSrc, parent, width, height) {
	const myImage = new Image(width, height);
	const parentDiv = document.getElementById(parent);
	myImage.src = imageSrc;
	parentDiv.appendChild(myImage);
}
function createElement(element, text, parent, elementID) {
	const myElement = document.createElement(element);
	const parentDiv = document.getElementById(parent);
    myElement.textContent = text;
    if (elementID) {
	myElement.setAttribute("id", elementID);
    };
	parentDiv.appendChild(myElement);
}
function createElsFromArr(el, arr, parent) {
    arr.forEach(
	(item) => createElement(el, item, parent)
    );
}
export {createImage, createElement, createElsFromArr};



