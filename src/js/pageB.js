import '../css/pageB/style.scss';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!./plugin.js';

$(document).ready(function() {

	$('<BUTTON/>',{  
	        text:'返回A页面',  
	        class:'link'
	    }).appendTo('body'); 

	$(".link").on("click",function(){  
	    window.history.back();  
	}); 

	let div  = document.createElement('div');
	div.innerHTML = '<h2>Hello,I am a dog</h2>';
	document.body.appendChild(div);
	$('h2').showBlue();
});
