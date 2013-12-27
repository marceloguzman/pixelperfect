var ppclass = ".pixelperfect";


/* ---------------------------------------------------------------------- */

function saveValue(llave, valor) {

console.log ("escribo  en " + llave  + " el valor" + valor);

	switch (llave) {
	case "pxp_display":
		localStorage.ppdisplay = valor;
		break;
	case "pxp_top":
		localStorage.pptop = valor;
		break;
	case "pxp_left":
		localStorage.pptop = valor;
		break;
	case "pxp_opacity": 
		localStorage.opacity = valor;
		break;
	case "NF":
		localStorage.nf = valor;
		break;
	case "PreOpacity":
		localStorage.PreOpacity = valor;
		break;
	case "pxp_hover":
		localStorage.pphover = valor;
		break;
	case "Cpatch":
		localStorage.cpatch = valor;
		break;
	default:
		console.log("no se puede guardar: " + llave + " -> " + valor);
	}
}

/* ---------------------------------------------------------------------- */

function readValue(llave) {

console.log ("leo  un valor: " + llave );

	switch (llave) {
	case "pxp_display":
		return localStorage.ppdisplay;
		break;
	case "pxp_top":
		return localStorage.pptop;
		break;
	case "pxp_left":
		return localStorage.pptop;
		break;
	case "pxp_opacity":
		return localStorage.opacity;
		break;
	case "NF":
		return localStorage.nf;
		break;
	case "PreOpacity":
		return localStorage.PreOpacity;
		break;
	case "pxp_hover":
		return localStorage.pphover;
		break;
	case "Cpatch":
		return localStorage.cpatch;
		break;
	default:
		console.log(" no se pudo leer este valor -> " + llave);
	}
}

/* ---------------------------------------------------------------------- */

function check_web_storage (){

if(typeof(Storage)!=="undefined")
  {
  //todo esta bien - everything is ok so far
  }
else
  {
  alert ('Sorry! No web storage support or brower problem...');
  }
 
}

/* ---------------------------------------------------------------------- */
	
function toggle_menu(){
	$(".pxp_menu").animate({ height: "toggle" }, 500); 
}

/* ---------------------------------------------------------------------- */

function remove_dot(str){
	var temp = str.replace(".",""); return temp;
};	

/* ---------------------------------------------------------------------- */

function UrlExists(url){
var http = new XMLHttpRequest();http.open('HEAD', url, false);http.send();console.log ("la imagen es " + url);return http.status!=404;
}

/* ---------------------------------------------------------------------- */















window.onload = function() {
   


   if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah! JQ");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work JQ");
    }
	
	
	
	if (window.jQuery.ui) {
  // UI loaded
  alert("Yeah! UI");
   } else {
        // jQuery is not loaded
        alert("Doesn't Work UI");
    }

	
	
	
	
	
	
}
	
	
	
	
$(document).ready(function() {




});



