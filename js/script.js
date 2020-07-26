/*---------------------------------------------------------
* File Description : Main Js file of the template
*----------------------------------------------------------
*/
// Whole-script strict mode syntax
"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("inner-popUp").style.zoom="85%";
    document.getElementById("inner-popUp").style.MozTransform = "scale(0.85)";
    document.getElementById("inner-popUp").style.msTransform = "scale(0.85)";
    for(var t = 0; t < document.getElementsByClassName("container-allPage").length; t++){
      document.getElementsByClassName("container-allPage")[t].style.zoom="85%";
      document.getElementsByClassName("container-allPage")[t].style.msTransform = "scale(0.85)";
      if (navigator.userAgent.indexOf("Firefox") > 0) {
        document.getElementsByClassName("container-allPage")[t].style.MozTransform = "scale(0.85)";
        document.getElementsByClassName("container-allPage")[t].style.MozTransformOrigin = "top";
        document.getElementById("nav-container").style.maxWidth = "1200px";
        document.getElementsByClassName("container-header")[0].style.maxWidth = "none";
        document.getElementById("titles-wrap").style.maxWidth = "1200px";
        document.getElementById("titles-wrap").style.MozTransformOrigin = "left";
      }
    }
  var client = document.getElementsByClassName("client")[0];
  var stylesClient = client.currentStyle || window.getComputedStyle(client);
  var marginPaddingClient = 82;
  var intervalInner;
  var innerPercent = false;
  var firstTime = 0;
  var nClients = document.getElementsByClassName("client").length;
  var widthIndividualClient;
  changeHeaderScroll();
  heightHome();
  colorActiveMenu();
  msieversion();
  sliderClients();
  appendLiClients();
  //MENU MOBILE (Openning and closing menu):
  var openOrClose = 1;
  var nActualWork;
  var leftOfClient;
  var waitingTimeScroll;
 
  translateClients();

  document.getElementById("ico-menu").addEventListener("click", openCloseMenu);
  document.getElementById("a-home").addEventListener("click", openCloseMenu);
  document.getElementById("a-about-me").addEventListener("click", openCloseMenu);
  document.getElementById("a-services").addEventListener("click", openCloseMenu);
  document.getElementById("a-work").addEventListener("click", openCloseMenu);
  document.getElementById("a-clients").addEventListener("click", openCloseMenu);
  document.getElementById("a-blog").addEventListener("click", openCloseMenu);
  document.getElementById("a-contact-me").addEventListener("click", openCloseMenu);

  for (var i = 0; i < document.getElementsByClassName("logo").length; i++) {
    document.getElementsByClassName("logo")[i].addEventListener("click", function() {
      document.location.href = "#home";
    });
  }
  
  var lengthContentWork = document.getElementsByClassName("contentWork").length;
  
  document.getElementById("close").addEventListener("click", closeblogPopUp);
  
  //open pop-up:
  function closeblogPopUp(){
    document.getElementById('pop-up-blog').scrollTop = 0;
    document.getElementById("pop-up-blog").style.display = "none";
    document.getElementsByTagName("BODY")[0].style.overflow = "auto";

    //show text 'read more':
    var lengthText = document.getElementsByClassName("text-bold").length;
    for (var i = 0; i < lengthText; i++) {
      document.getElementsByClassName("text-bold")[i].style.display = "block";
    }
    var lengthContentWork = document.getElementsByClassName("contentWork").length;
    for (var i = 0; i < lengthContentWork; i++) {
      document.getElementsByClassName("contentWork")[i].style.display = "none";
    }
  }
  function openCloseMenu(){
    if (window.innerWidth <=1050) {
      document.getElementById("ico-menu").classList.toggle("change");
      openOrClose = openOrClose + 1;// if is pair is closed and if is odd is openned.
      if (openOrClose % 2 != 0) {//It's closed
        document.getElementById("list-nav").style.opacity = "0";
        document.getElementById("list-nav").style.height = "0";
        setTimeout(function(){
          document.getElementById("list-nav").style.display = "none";
        }, 500);
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          document.getElementById("header_nav").classList.add("header-nav-color");
        }else{
          document.getElementById("header_nav").classList.remove("header-nav-color");
          document.getElementById("header_nav").style.background = "transparent";
        }
      } else if (openOrClose % 2 == 0){//It's oppned
        document.getElementById("list-nav").style.display = "block";
        document.getElementById("list-nav").style.height = "440px";
        document.getElementById("list-nav").style.opacity = "1";
        document.getElementById("header_nav").classList.add("header-nav-color");
      }
    }else{
      document.getElementById("list-nav").style.height = "100%";
      document.getElementById("list-nav").style.opacity = "1";
    }
  }
  function changeHeaderScroll(){
    //Change the background of the header nav on scroll:
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("header_nav").classList.add("header-nav-color");
      document.getElementById("nav-container").style.borderBottom = "none";
    }else{
      document.getElementById("header_nav").classList.remove("header-nav-color");
      document.getElementById("header_nav").style.background = "transparent";
      document.getElementById("nav-container").style.borderBottom = "1px solid rgba(224, 224, 224, 0.1)";
    }
    //show and hide arrowUp on scroll:
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
      document.getElementById("arrowUp").style.display = "block";
    }else{
      document.getElementById("arrowUp").style.display = "none";
    }
  }
  //Calculate Height Home
  function heightHome(){
    var height_screen = window.innerHeight;   
    document.getElementById("home").style.height = height_screen+"px";   
    document.getElementsByClassName("titles")[0].style.height = height_screen+"px";  
  }
  //Transition skills - width bar-inner:
  window.onscroll = function(){
    skillsAnimation();
  }
  function skillsAnimation(){
    changeHeaderScroll();//call function on scroll
    var height_screen = window.innerHeight;
    var width_screen = window.innerWidth;
    colorActiveMenu();
    var height_skills = document.getElementById("skills");
    var height_works = document.getElementById("work");

    var lengthTitleSections = document.getElementsByClassName("span-wrapper").length;
    if (innerPercent == false) { 
      if (isElementInViewport(height_skills)) {  
        firstTime++;
        onetime();
        document.getElementsByClassName("bar-inner")[0].style.width = "90%";
        document.getElementsByClassName("bar-inner")[1].style.width = "95%";
        document.getElementsByClassName("bar-inner")[2].style.width = "70%";
        document.getElementsByClassName("bar-inner")[3].style.width = "80%";
        document.getElementsByClassName("bar-inner")[4].style.width = "75%";      
        document.getElementsByClassName("bar-inner")[5].style.width = "85%";
        
      }
    }
  }
  function onetime(){
    //number percentage:
    if (firstTime <= 1) {
      intervalInner = setInterval(function(){
        var percentage_0 = new Array(6);
        for (var i = 0; i < 6; i++) {
          percentage_0[i] = (document.getElementsByClassName("bar-inner")[i].offsetWidth / document.getElementsByClassName("bar-inner")[i].parentElement.offsetWidth) * 100;
          document.getElementsByClassName("bar-value")[i].innerHTML = Math.round(percentage_0[i]) + "%";
        }
      }, 50);
    }
  }
  function stopIntervalInner(){
    clearInterval(intervalInner);
  }
  function colorActiveMenu(){

    var c = document.getElementById("list-nav").childElementCount;
    //change color of the links of the top menu if section is in viewport:
    if (document.body.scrollTop >= document.getElementById("contact").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("contact").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-contact-me").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("blog").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("blog").offsetTop - 2){
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-blog").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("clients").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("clients").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-clients").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= document.getElementById("work").offsetTop - 2 || document.documentElement.scrollTop >= document.getElementById("work").offsetTop - 2) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-work").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("services").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("services").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-services").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("about").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("about").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-about-me").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }else if (document.body.scrollTop >= (document.getElementById("home").offsetTop  - 2) || document.documentElement.scrollTop >= (document.getElementById("home").offsetTop - 2) ) {
      for (var i = 0; i < c; i++) {
        if(document.getElementById("list-nav").children[i] == document.getElementById("a-home").parentElement){
          document.getElementById("list-nav").children[i].classList.add("li-active");
        }else{
          document.getElementById("list-nav").children[i].classList.remove("li-active");
        }
      }
    }
  }
  window.onresize = function(){
    skillsAnimation();
    colorActiveMenu();
    sliderClients();
    var n = 0;
    // Code for Chrome, Safari, Opera
    document.getElementsByClassName("wrapper-clients")[0].style.WebkitTransform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)"; 
    // Code for IE9
    document.getElementsByClassName("wrapper-clients")[0].style.msTransform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)"; 
    // Standard syntax
    document.getElementsByClassName("wrapper-clients")[0].style.transform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)";   
    translateClients();
    if (window.innerWidth > 1050) {
      heightHome();
      document.getElementById("list-nav").style.height = "100%";
      document.getElementById("list-nav").style.display = "flex";
      changeHeaderScroll();
      waitingTimeScroll = 0;
      document.getElementById("list-nav").style.opacity = "1"; 
    }else if (window.innerWidth <= 1050){
      if (document.getElementsByClassName("bar1")[0].style.marginTop == 0) {//the ico-menu is in mode 'X' so the menu will be oppenned
        document.getElementById("list-nav").style.display = "none";
      }else {
        document.getElementById("list-nav").style.display = "block";
      }
      waitingTimeScroll = 600;
      if (openOrClose % 2 == 0){
        document.getElementById("list-nav").style.opacity = "1";
      }else if (openOrClose % 2 != 0 ) {
        document.getElementById("list-nav").style.opacity = "0";
      }
    }
    hideLinksClients();
    document.getElementsByClassName("button-nav")[0].style.background = "#ab5256";
    document.getElementsByClassName("button-nav")[0].style.width = "45px";
    for (var i = 1; i < nClients; i++) {
      document.getElementsByClassName("button-nav")[i].style.background = "#e3dbd5";
      document.getElementsByClassName("button-nav")[i].style.width = "35px";
    }
  };
  /*Detect the browser and if is explorer asign file css*/
  function msieversion(){
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);

    if ( isIE ) {
      //IE specific code goes here
      var lengthCol = document.getElementsByClassName("col").length;
      var link=document.createElement('link');
      link.type="text/css";
      link.rel="stylesheet";
      link.href="css/explorer.css";
      document.getElementsByTagName('head')[0].appendChild(link);
    }else{
      //Other Browser
    }
  }
  /*Translate Clients*/
  function translateClients(){
    if (window.innerWidth <= 700) {
      leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 1;
    }else if (window.innerWidth <= 1050) {
      leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 2;
    }else if (window.innerWidth > 1050) {
      leftOfClient = document.getElementsByClassName("bodySection")[0].offsetWidth / 3;
    }
    for (var i = 0; i < nClients; i++) {
      let j = i;
      document.getElementsByClassName("button-nav")[j].addEventListener("click", function() {
        document.getElementsByClassName("button-nav")[j].style.background = "#ab5256";
        document.getElementsByClassName("button-nav")[j].style.width = "45px";
        for (var g = 0; g < nClients; g++) {
          if (g != j){
            document.getElementsByClassName("button-nav")[g].style.background = "#e3dbd5";
            document.getElementsByClassName("button-nav")[g].style.width = "35px";
          }
        }
        if (window.innerWidth > 1050) {//3 clients on screen
          if (j == nClients -1 || j == nClients -2){
            document.getElementsByClassName("li-nav-client")[i].style.display = "none";
            var n = nClients - 3;
          }else {
            var n = j;
          }
        }else if(window.innerWidth > 700) {//2 clients on screen
          if (j == nClients -1){
            var n = nClients - 2;
          }else {
            var n = j;
          }
        }else if (window.innerWidth <= 700) {//1 client on screen
          var n = j;
        }
        // Code for Chrome, Safari, Opera
        document.getElementsByClassName("wrapper-clients")[0].style.WebkitTransform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)"; 
        // Code for IE9
        document.getElementsByClassName("wrapper-clients")[0].style.msTransform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)"; 
        // Standard syntax
        document.getElementsByClassName("wrapper-clients")[0].style.transform = "translate3d("+(-leftOfClient*n)+"px, 0px, 0px)";   
      });
    }
  }
  /*Slider clients*/
  function sliderClients(){
    if (window.innerWidth <= 700) {
      widthIndividualClient = (document.getElementsByClassName("bodySection")[0].offsetWidth / 1) - marginPaddingClient;
    }else if (window.innerWidth <= 1050) {
      widthIndividualClient = (document.getElementsByClassName("bodySection")[0].offsetWidth / 2) - marginPaddingClient;
    }else if (window.innerWidth > 1050) {
      widthIndividualClient = (document.getElementsByClassName("bodySection")[0].offsetWidth / 3) - marginPaddingClient
    } 
    var widthWrapperClients = (widthIndividualClient + 8 + marginPaddingClient)  * nClients;
  
    for (var i = 0; i < nClients; i++) {
      document.getElementsByClassName("client")[i].style.width = (widthIndividualClient+"px");
    }
    document.getElementsByClassName("wrapper-clients")[0].style.width = widthWrapperClients+"px";
  }
  function appendLiClients(){
    for (var i = 0; i < nClients; i++) {
      var v  = document.getElementById("ul-nav-clients").appendChild(document.createElement("LI"));
      v.className += "li-nav-client";
      var z = document.getElementsByClassName("li-nav-client")[i].appendChild(document.createElement("DIV"));
      z.className += "button-nav";
    }
    hideLinksClients();
    document.getElementsByClassName("button-nav")[0].style.background = "#ab5256";
    document.getElementsByClassName("button-nav")[0].style.width = "45px";
  }
  function hideLinksClients(){
    for (var i = 0; i < nClients; i++) {
      if (window.innerWidth > 1050) {//3 clients on screen
        if (i == nClients -1 || i == nClients -2){
          document.getElementsByClassName("li-nav-client")[i].style.display = "none";
        }
      }else if(window.innerWidth > 700) {//2 clients on screen
        if (i == nClients -1){
          document.getElementsByClassName("li-nav-client")[i].style.display = "none";
        }else if (i == nClients -2){
          document.getElementsByClassName("li-nav-client")[i].style.display = "inline-block";
        }
      }else {
        if (i == nClients -1 || i == nClients -2){
          document.getElementsByClassName("li-nav-client")[i].style.display = "inline-block";
        }
      }
    }
  }
  //Check if an element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
  }
});