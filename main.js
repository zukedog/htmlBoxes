$(document).ready(function(){
	$(".win").height(window.innerHeight);//set window Height
	
	$(".helper[or=\"vertical\"]").on("mousedown", initResizeV);//enable vertical Helper
	$(".helper[or=\"horizontal\"]").on("mousedown", initResizeH);
	
	$(".content[split=\"false\"]").append('<div class="tabBar"></div><div class="subTabBar"></div>');


});

function initResizeH(f){
	var me = this;
	var prevHeight = $(me).prev().height();
	var nextHeight = $(me).next().height();
	var st = f.screenY;
	$(document).on("mousemove", function(e){
		$(me).prev().height((prevHeight+(e.screenY-st))+"px");
		$(me).next().height((nextHeight-(e.screenY-st))+"px");
	});
	
	$(document).one("mouseup", function(){
		$(document).unbind();
	});
}


function initResizeV(f){
	var me = this;
	var prevWidth = $(me).prev().width();
	var nextWidth = $(me).next().width();
	var st = f.screenX;
	$(document).on("mousemove", function(e){
		$(me).prev().width((prevWidth+(e.screenX-st))+"px");
		$(me).next().width((nextWidth-(e.screenX-st))+"px");
	});
	
	$(document).one("mouseup", function(){
		$(document).unbind();
	});
}


