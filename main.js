$(document).ready(function(){
	$(".helper").on("mousedown", initResize);//enable vertical Helper
	
	$(".content[split=\"false\"]").append('<div class="tabBar"></div>');//<div class="subTabBar"></div>
	$(".content[split=\"false\"]").append('<div class="contentBody" ondrop="drop(event)" ondragenter="dragenter(event)" ondragleave="dragleave(event)" ondragover="hover(event)"></div>');
	
	$(".tabBar").append('<div class=tab draggable="true" ondragstart="drag(event)" dat=\"{}\">tab1</div>');
	$(".tabBar").append('<div class=tab draggable="true" ondragstart="drag(event)">tab3</div>').attr("dat",'{"Test":"bob"}');
	$(".tabBar").append('<div class=tabFill></div>');
	//$(".tab").attr("dat",'{"Test":"bob"}');
	//$(".contentBody").html('<div class="thinRow"><div class="side"></div><div class="middle"></div><div class="side"></div></div><div class="row"><div class="side"></div><div class="middle"></div><div class="side"></div></div><div class="thinRow"><div class="side"></div><div class="middle"></div><div class="side"></div></div>');
});

function initResize(f){
	var me = this;
	var dir = "height";
	var screen = "screenY";
	
	if($(me).attr("or")=="vertical"){
		dir = "width";
		screen = "screenX";
	}
	
	var prevHeight = $(me).prev()[dir]();
	var nextHeight = $(me).next()[dir]();
	var st = f[screen];
	$(document).on("mousemove", function(e){
		//$(me).prev()[dir]((prevHeight+(e[screen]-st))+"px");
		//$(me).next()[dir]((nextHeight-(e[screen]-st))+"px");
		$(me).prev()[dir]((prevHeight+(e[screen]-st))/$(".content.main")[dir]()*100+"%");
		$(me).next()[dir]((nextHeight-(e[screen]-st))/$(".content.main")[dir]()*100+"%");
	});
	
	$(document).one("mouseup", function(){
		$(document).unbind();
	});
}