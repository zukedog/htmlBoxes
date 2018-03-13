// JavaScript Document
function drag(ev) {
	var me = this;
	ev.dataTransfer.setData("text", ev.target);
	console.log($(ev.target).attr("dat"));
}

function dragenter(ev) {
	console.log("Enter");
}

function dragleave(ev){
	console.log("Leave");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
	console.log(ev.dataTransfer.mozSourceNode);
	$(ev.target).append("<p>Tested</p>");
	console.log(ev);
	dragleave(ev);
}

function hover(ev){
	ev.preventDefault();
}