function parallax() {
	//import des information css du background
	var $scroll = document.getElementById("background");
	//calcul de la position du background selon le scrolling de la page
	var yPos = window.pageYOffset / $scroll.dataset.speed;
	yPos = -yPos;
	//mise en place du background-position
	var coords = '0% '+ yPos + 'px';
	//modification du css
	$scroll.style.backgroundPosition = coords;
}
