$(document).ready(function(){
	$(".win").height(window.innerHeight);//set window Height
	
	$(".helper[or=\"vertical\"]").on("mousedown", initResizeV);//enable vertical Helper
	$(".helper[or=\"horizontal\"]").on("mousedown", initResizeH);
	
	$(".content[split=\"false\"]").append('<div class="tabBar"></div>');//<div class="subTabBar"></div>
	$(".content[split=\"false\"]").append('<div class="contentBody" ondrop="drop(event)" ondragenter="dragenter(event)" ondragleave="dragleave(event)" ondragover="hover(event)"></div>');
	
	$(".tabBar").append('<div class=tab draggable="true" ondragstart="drag(event)" dat=\"{}\">tab1</div>');
	$(".tabBar").append('<div class=tab draggable="true" ondragstart="drag(event)">tab3</div>').attr("dat",'{"Test":"bob"}');
	$(".tabBar").append('<div class=tabFill></div>');
	//$(".tab").attr("dat",'{"Test":"bob"}');
	$(".contentBody").html('<div class="thinRow"><div class="side"></div><div class="middle"></div><div class="side"></div></div><div class="row"><div class="side"></div><div class="middle"></div><div class="side"></div></div><div class="thinRow"><div class="side"></div><div class="middle"></div><div class="side"></div></div>');
	

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


