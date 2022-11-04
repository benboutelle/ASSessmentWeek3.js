console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert(`thanks for submitting`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver(img) {
	mouseover.addEventListener(`mouseover`, img)
}
//need to add ul in to theis function 