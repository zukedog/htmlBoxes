
function windowResize(){
	$("#main").height($(window).height());
}

function ready(){
	windowResize();
}

$(window).resize(windowResize);

$(document).ready(ready);
