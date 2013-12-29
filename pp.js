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




function hideimage() {
$(ppclass).toggle();if($(ppclass).is(":visible")) {saveValue('pxp_display', 'block')} else {saveValue('pxp_display', 'none')}
}

function toggle_opacity() {
if($(ppclass + '  img').css('opacity') < 1) {saveValue('pxp_opacity', 1);saveValue('PreOpacity', $(ppclass + '  img').css('opacity'));$(ppclass + '  img').fadeTo(1, 1); } else { $(ppclass + '  img').fadeTo(1, readValue('PreOpacity'));saveValue('pxp_opacity', readValue('PreOpacity')); } Copacity = readValue('pxp_opacity'); 
}	

function loading_image(){
	$('body').before('<div id="pxp_load" style="opacity:0.7;z-index: 9999999; width:100%; position: absolute; top:0; left:0; display:block;"><div style="text-align: center;"><img src="data:image/gif;base64,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"></div></div>');
}


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
