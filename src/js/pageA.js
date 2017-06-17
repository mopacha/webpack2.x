import '../css/pageA/style.scss';
import showDialogue from './dialogue.js';
import $ from 'jquery';
import 'imports-loader?jQuery=jquery!./plugin.js';
import moment from 'moment';

$('<BUTTON/>',{  
	        text:'点击跳B页面',  
	        class:'link'
	    }).appendTo('body'); 

$(".link").on("click",function(){  
    window.location.href = window.location.origin+'/pageB.html';  
});
const div  = document.createElement('div');
document.body.appendChild(div);
div.appendChild(showDialogue());

const myPromise = Promise.resolve(12);
myPromise.then((number) => {
  $('body').append('<p>' +'现在时间：'+moment().format('YYYY年MM月DD日HH:mm:ss') + '</p>');
  $('p').showBlue();
});