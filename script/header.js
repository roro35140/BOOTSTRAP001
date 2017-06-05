function header(){
	//Apparition du header au chargement de la page
	var pos = window.pageYOffset;

	//si pos < 235 au chargement
	if (pos <= 235){
			$("header").css("margin-top", "310px");
			$("header").css("margin-bottom", "175px");
			$("#fadeUp").animate({ opacity: 1 }, { duration: 1000, queue: false });
			$("header").animate({ "margin-top": "235"}, { duration: 1000, queue: false });
			$("header").animate({ "margin-bottom": "100"}, { duration: 1000, queue: false });
	}
	//si pos > 235 au chargement
	else{	
			$("header").css("margin-top", "235px");
			$("header").css("margin-bottom", "100px");
			$("#massivelyBtn").animate({ "bottom": "0px"}, { duration: 0, queue: false });
			$("#massivelyBtn").animate({ opacity: 1 }, { duration: 0, queue: false });
	}

	//Apparition/disparition du header lors du scroll
	$(window).scroll(function(){
		//Apparition du titre et du sous-titre si position de scroll < 235px
		if($(this).scrollTop() <= 235){
			$("#fadeUp").animate({ "top": "0px"}, { duration: 500, queue: false });
			$("#fadeUp").animate({ opacity: 1 }, { duration: 500, queue: false });
		}
		//Disparition du titre et du sous-titre si position de scroll > 235px
		else{
			$("#fadeUp").animate({ "top": "75px"}, { duration: 500, queue: false });
			$("#fadeUp").animate({ opacity: 0 }, { duration: 500, queue: false });

		}

		//Apparition du boutton si position de scroll < 235px
		if($(this).scrollTop() > 236){
			$("#massivelyBtn").animate({ "bottom": "0px"}, { duration: 500, queue: false });
			$("#massivelyBtn").animate({ opacity: 1 }, { duration: 500, queue: false });
		}
		//Disparition du bouton si position de scroll > 235px
		else{
			$("#massivelyBtn").animate({ "bottom": "-50px"}, { duration: 500, queue: false });
			$("#massivelyBtn").animate({ opacity: 0 }, { duration: 500, queue: false });

		}
	});
	//script jQuery si pos < 235px
};