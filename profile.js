
function btnClick(evt) {
	evt.preventDefault();
	
	console.log('color')
	alert(`blue green or black`)
}


let button = document.querySelector('#color');

button.addEventListener('click', btnClick);

//////////////////////////////////////////

function placeClick(evt) {
	evt.preventDefault();
	
	console.log('place')
	alert(`zions national park`)
}


let place = document.querySelector('#place');

place.addEventListener('click', placeClick);
////////////////////////////////////////

function ritClick(evt) {
	evt.preventDefault();
	
	console.log('ritual')
	alert(`smoking cigars and grillin steaks`)
}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', ritClick);
//IM PRETTY STOKED I FIGURED THIS PART OUT 