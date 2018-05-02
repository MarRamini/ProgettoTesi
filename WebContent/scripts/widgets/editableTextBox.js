
var rootId = document.currentScript.getAttribute("rootId");
var root = document.getElementById(rootId);
var labelMargin = document.currentScript.getAttribute("labelMargin");

buildWidget(root);

function buildWidget(root){
	var container = buildContainer();
	root.appendChild(container);
	var textBox = buildTextBox();
	container.appendChild(textBox);
}

function buildContainer(){
	var containerDiv = document.createElement("div");
	containerDiv.className = "editableTextBoxContainer";
	containerDiv.style.borderBottom = "1px solid black";
	containerDiv.style.display = "flex";
	containerDiv.style.float = "right";
	containerDiv.style.marginRight = "2px";
	var widthDefect = parseInt(containerDiv.style.marginRight.replace("px", "")) + parseInt(labelMargin.replace("px", ""));
	containerDiv.style.width = "calc(100% - " + widthDefect + "px)";
	return containerDiv;
}

function buildTextBox(){
	var textBox = document.createElement("input");
	textBox.className = "editableTextBox";
	textBox.style.width = "100%";
	textBox.style.border = "none";
	return textBox;
}
