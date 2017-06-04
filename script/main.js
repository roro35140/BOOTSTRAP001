/*Appel de la fonction parallax*/
window.addEventListener("scroll", function(){
	parallax();	
});

$(document).ready(function(){
	/*fonction d'apparition/disparition du header */
	header();
    /*Animation d'apparition du background*/
	$("#background").delay(1000).fadeIn(1000);
});