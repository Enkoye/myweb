/*---------------------------------------------------------
* File Description : Page Loader JS file of the Template
*----------------------------------------------------------
*/
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
	
	window.onload = function() {
		fadePreLoading();
	};
	function fadePreLoading(){
		document.getElementsByClassName("container-loader-pre")[0].style.visibility = "hidden";
		document.getElementsByClassName("container-loader-pre")[0].style.opacity = "0";
		document.getElementsByClassName("container-loader-pre")[0].style.transition = "0.5s";

		var fontSize = 72;
			  
		if(window.screen.width < 700){ 
			fontSize = 32;
		}else if(window.screen.width < 1200){
			fontSize= 56;
		}
		var alt = (window.innerHeight/2)-fontSize;

		/****HAND WRITTING EFFECT******/
		var vara = new Vara(
			"#container-pageLoader",
			"./json/Satisfy/SatisfySL.json",
			[
		  		{
		    		text: "Hanna Gebre.",//Put your name 
		    		y: alt,
		    		fromCurrentPosition: { y: false },
		    		duration: 1000,
		    		id:"draw",
			        autoAnimation:false
		  		}
			],
			{
				strokeWidth: 0.5,
				color: "#fff",
				fontSize: fontSize,
				textAlign: "center"
			}
		);
		vara.ready(function(){
				setTimeout(function(){
					vara.draw("draw");
				},500);
				vara.animationEnd(function(i,o){
				    setTimeout(function(){
					    $(".container-loader").fadeOut('slow');
			        	$("body").css({"overflow":"auto"});//when the page is loaded, overflow auto	
				    },200);
				});
		});
	}
});