/*---------------------------------------------------------
* Template Name    : Sophia | Responsive Personal Template
* Author           : CasanovasThemes
* Version          : 1.0.0
* Created          : March 2020
* File Description : Audio Js file of the template
*----------------------------------------------------------
*/
// Whole-script strict mode syntax
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
	var playPause = 0;
	var link=document.createElement('link');
	link.type="text/css";
	link.rel="stylesheet";
	link.href="audio/audio.css";
	
	$('body').append('<audio loop volume="0.1" id="audio"><source src="audio/audio.mp3" type="audio/mpeg"></audio>');
	$('body').append('<button type="button" class="site-sound" title="Toggle sound">'
		+ '<span class="pulsing-ui"></span>'
		+ '<span class="soundOn"></span>'
		+ '</button>'
		+ '<span class="sound-txt">SOUND</span>');

	document.getElementsByTagName('head')[0].appendChild(link);
	document.getElementsByClassName("soundOn")[0].style.display = "none";
	
	document.getElementsByClassName("site-sound")[0].addEventListener("click", function(){
		playPause++;
		if ( playPause % 2 !== 0) {
			document.getElementById("audio").play();
			document.getElementsByClassName("pulsing-ui")[0].classList.add(".soundOn");
			document.getElementsByClassName("soundOn")[0].style.display = "block";
		}else if (playPause % 2 === 0){
			document.getElementById("audio").pause();
			document.getElementById("audio").currentTime = 0;
			document.getElementsByClassName("pulsing-ui")[0].classList.remove(".soundOn");
			document.getElementsByClassName("soundOn")[0].style.display = "none";
		}
	});
	
	document.getElementsByClassName("site-sound")[0].addEventListener("mouseover", function(){
		document.getElementsByClassName("pulsing-ui")[0].classList.add(".soundOn");
		document.getElementsByClassName("soundOn")[0].style.display = "block";
	});
	document.getElementsByClassName("site-sound")[0].addEventListener("mouseout", function(){
		if (document.getElementById("audio").paused === true){
			document.getElementsByClassName("pulsing-ui")[0].classList.remove(".soundOn");
			document.getElementsByClassName("soundOn")[0].style.display = "none";
		}
	});
	window.addEventListener("resize",function(){
		if (window.innerWidth <= 700) {
			document.getElementById("audio").pause();
			document.getElementsByClassName("pulsing-ui")[0].classList.remove(".soundOn");
			document.getElementsByClassName("soundOn")[0].style.display = "none";
		}else if (document.getElementById("audio").paused === true) {
			document.getElementsByClassName("soundOn")[0].style.display = "none";
			playPause = 0;
		}
	});
});