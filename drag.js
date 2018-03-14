// JavaScript Document
function drag(ev) {
	var me = this;
	ev.dataTransfer.setData("type", "tab");
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
	console.log(data=="");
	console.log(ev.dataTransfer.types)
	$(ev.target).append("<p>Tested</p>");
	console.log(ev);
	dragleave(ev);
}

function hover(ev){
	if (ev.dataTransfer.getData("type")=="tab"){
		ev.preventDefault();
	}
}