/*  -------------------------------------------------------------------------
PixelPerfect

Pixelperfect is a JQuery script to provide an easy way to place an image in the background of a webpage in development to check design details. 
This script is released under the ___________ license
The source of this code can be found at https://github.com/marceloguzman/pixelperfect


Example of use:

1- Add JQuery and JQuery UI to your web page:

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js" type="text/javascript"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js" type="text/javascript"></script>


2- Add this script your web page after the JQuery and JQuery UI scripts:

<script src="pp.js" type="text/javascript"></script>

3- Follow the on-screen instructions the first time the script window appears

-------------------------------------------------------------------------- */

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


function create_shortcuts (){

	//  -------------------------------------------------------------------------------
	// http://www.openjs.com/scripts/events/keyboard_shortcuts/  Version : 2.01.B, By Binny V A, License : BSD
	shortcut = {'all_shortcuts':{},'add': function(shortcut_combination,callback,opt) {var default_options = {'type':'keydown','propagate':false,'disable_in_input':false,'target':document,'keycode':false};if(!opt) opt = default_options;else {for(var dfo in default_options) {if(typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];}}var ele = opt.target;if(typeof opt.target == 'string') ele = document.getElementById(opt.target);var ths = this;shortcut_combination = shortcut_combination.toLowerCase();var func = function(e) {e = e || window.event;if(opt['disable_in_input']) { var element;if(e.target) element=e.target;else if(e.srcElement) element=e.srcElement;if(element.nodeType==3) element=element.parentNode;if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;}if (e.keyCode) code = e.keyCode;else if (e.which) code = e.which;var character = String.fromCharCode(code).toLowerCase();if(code == 188) character=","; if(code == 190) character="."; var keys = shortcut_combination.split("+");var kp = 0;var shift_nums = {"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":"\"",",":"<",".":">","/":"?","\\":"|"};var special_keys = {'esc':27,'escape':27,'tab':9,'space':32,'return':13,'enter':13,'backspace':8,'scrolllock':145,'scroll_lock':145,'scroll':145,'capslock':20,'caps_lock':20,'caps':20,'numlock':144,'num_lock':144,'num':144,'pause':19,'break':19,'insert':45,'home':36,'delete':46,'end':35,'pageup':33,'page_up':33,'pu':33,'pagedown':34,'page_down':34,'pd':34,'left':37,'up':38,'right':39,'down':40,'f1':112,'f2':113,'f3':114,'f4':115,'f5':116,'f6':117,'f7':118,'f8':119,'f9':120,'f10':121,'f11':122,'f12':123};var modifiers = { shift: { wanted:false, pressed:false},ctrl : { wanted:false, pressed:false},alt  : { wanted:false, pressed:false},meta : { wanted:false, pressed:false}};                        if(e.ctrlKey)modifiers.ctrl.pressed = true;if(e.shiftKey)modifiers.shift.pressed = true;if(e.altKey)modifiers.alt.pressed = true;if(e.metaKey)   modifiers.meta.pressed = true;                        for(var i=0; k=keys[i],i<keys.length; i++) {if(k == 'ctrl' || k == 'control') {kp++;modifiers.ctrl.wanted = true;} else if(k == 'shift') {kp++;modifiers.shift.wanted = true;} else if(k == 'alt') {kp++;modifiers.alt.wanted = true;} else if(k == 'meta') {kp++;modifiers.meta.wanted = true;} else if(k.length > 1) {if(special_keys[k] == code) kp++;} else if(opt['keycode']) {if(opt['keycode'] == code) kp++;} else { if(character == k) kp++;else {if(shift_nums[character] && e.shiftKey) { character = shift_nums[character]; if(character == k) kp++;}}}}if(kp == keys.length && modifiers.ctrl.pressed == modifiers.ctrl.wanted &&modifiers.shift.pressed == modifiers.shift.wanted &&modifiers.alt.pressed == modifiers.alt.wanted &&modifiers.meta.pressed == modifiers.meta.wanted) {callback(e);if(!opt['propagate']) { e.cancelBubble = true;e.returnValue = false;if (e.stopPropagation) {e.stopPropagation();e.preventDefault();}return false;}}};this.all_shortcuts[shortcut_combination] = {'callback':func, 'target':ele, 'event': opt['type']};if(ele.addEventListener) ele.addEventListener(opt['type'], func, false);else if(ele.attachEvent) ele.attachEvent('on'+opt['type'], func);else ele['on'+opt['type']] = func;},'remove':function(shortcut_combination) {shortcut_combination = shortcut_combination.toLowerCase();var binding = this.all_shortcuts[shortcut_combination];delete(this.all_shortcuts[shortcut_combination]);if(!binding) return;var type = binding['event'];var ele = binding['target'];var callback = binding['callback'];if(ele.detachEvent) ele.detachEvent('on'+type, callback);else if(ele.removeEventListener) ele.removeEventListener(type, callback, false);else ele['on'+type] = false;}}
	//  --------------------------------------------------------------------------------

	shortcut.add("Alt+X",function() {toggleLayout('');return false;});
	shortcut.add("Shift+E",function() {ppDialog(msg);return false;});

	shortcut.add("Alt+Z",			function() {toggle_menu();		return false;});	
	shortcut.add("page_up",			function() {hideimage();		return false;});	
	shortcut.add("shift+page_up",	function() {toggle_opacity();	return false;});	
	shortcut.add("Shift+home",		function() {oopacity('plus');	return false;});
	shortcut.add("Shift+end",		function() {oopacity('minus');	return false;});
	shortcut.add("insert",			function() {reset();			return false;});
	shortcut.add("delete",			function() {move_to('left');		return false;});
	shortcut.add("page_down",		function() {move_to('right');		return false;});	
	shortcut.add("home",			function() {move_to('up');			return false;});
	shortcut.add("end",				function() {move_to('down');		return false;});

}


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
	loading_image();	
	create_shortcuts();
	setup();
});
