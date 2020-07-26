/*---------------------------------------------------------
* File Description : Ripples Options JS file
*----------------------------------------------------------
*/
$( document ).ready(function() {
	"use strict";
	$(window).resize(function(){
		ripples();
	});
	ripples();
	function ripples(){
		if (window.innerWidth < 800) {
			$("#home").ripples('destroy');
		}else{
			$(".scrollDown")[0].style.display = "none";
			$("#home").ripples({
		    	resolution: 1000,
		    	dropRadius: 10,
				perturbance: 0.02,
		    });
		}
	}
});