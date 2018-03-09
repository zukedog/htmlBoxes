// JavaScript Document

$(document).ready(function(){
	$(".win").height(window.innerHeight);
	$(".helper").mousedown(initResize);
	
	
	//.next  .prev
});

function initResize(){
	console.log("Dragon");
	$(this).mousemove(function(e){
		console.log(e);
		//console.log($(this).prev().height($(this).prev().height()+val));
	});
	$(this).mouseup(function(){
		$(this).unbind("mousemove");
	});
}


