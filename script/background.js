function parallax() {
	/*import des information css du background*/
	var $scroll = document.getElementById("background");
	/*calcul de la position du background selon le scrolling de la page*/
	var yPos = window.pageYOffset / $scroll.dataset.speed;
	yPos = -yPos;
	
	var coords = '0% '+ yPos + 'px';
	
	$scroll.style.backgroundPosition = coords;
}

window.addEventListener("scroll", function(){
	parallax();	
});