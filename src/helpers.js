function createImage (imageSrc, parent, width, height) {
	const myImage = new Image(width, height);
	const parentDiv = document.getElementById(parent);
	myImage.src = imageSrc;
	parentDiv.appendChild(myImage);
}
function createElement(element, text, parent) {
	const myHeader = document.createElement(element);
	const parentDiv = document.getElementById(parent);
	myHeader.textContent = text;
	parentDiv.appendChild(myHeader);
}
export {createImage, createElement};



