
var rootId = document.currentScript.getAttribute("rootId");
var root = document.getElementById(rootId);
var labelMargin = document.currentScript.getAttribute("labelMargin");
var isPassword = document.currentScript.getAttribute("isPassword");
var name = document.currentScript.getAttribute("name");
var type = document.currentScript.getAttribute("barType");

buildWidget(root);

function buildWidget(root){
	var container = buildContainer();
	root.appendChild(container);
	var textBox = buildTextBox(container);
	//var editButton = buildEditButton(textBox, container);
	//container.appendChild(editButton);
}

function buildContainer(){
	var containerDiv = document.createElement("div");
	containerDiv.className = "editableTextBoxContainer";
	containerDiv.style.borderBottom = "1px solid black";
	containerDiv.style.display = "flex";
	containerDiv.style.float = "right";
	containerDiv.style.marginRight = "5px";
	var widthDefect = parseInt(containerDiv.style.marginRight.replace("px", "")) + parseInt(labelMargin.replace("px", ""));
	containerDiv.style.width = "calc(100% - " + widthDefect + "px)";
	return containerDiv;
}

function buildTextBox(container){
	var textBox = document.createElement("input");
	textBox.setAttribute("name", name);
	textBox.setAttribute("type", type);
	if(isPassword == "true"){
		textBox.type = "password";
		textBox.id = "editablePasswordTextBox";
		textBox.onfocus = function(){	
			console.log("focus")
			var visibilityWidget = buildVisibilityWidget(textBox);
			visibilityWidget.style.right = "15px";
			visibilityWidget.style.bottom = "-4px";
		}
		
		textBox.onblur = function(){
			var containerChildren = container.children;
			for(var i=0 ; i<containerChildren.length ; i++){
				if(containerChildren[i].className === "visibilityToggleWidget"){
					container.removeChild(containerChildren[i]);
				}
			}
		}
	}
	textBox.className = "editableTextBox";
	textBox.style.width = "100%";
	textBox.style.border = "none";
	container.appendChild(textBox);
}

function buildEditButton(textBox, container){
	var button = document.createElement("div");
	button.className = "editableTextBoxEditButton"
	button.style.width = "10px";
	button.style.height = "10px";
	button.style.display = "inline-flex";
	button.style.float = "right";
	var newTextBox = document.createElement("input");
	newTextBox.setAttribute("name", name);
	newTextBox.setAttribute("type", type);
	newTextBox.className = "editableTextBox";
	newTextBox.id = "editablePasswordTextBox";
	newTextBox.style.width = "100%";
	newTextBox.style.border = "none";		
	newTextBox.type = "password";	
	
	newTextBox.onblur = function(){
		textBox.innerHTML = newTextBox.value;
		container.replaceChild(textBox, newTextBox);
		var containerChildren = container.children;
		for(var i=0 ; i<containerChildren.length ; i++){
			if(containerChildren[i].className === "visibilityToggleWidget"){
				container.removeChild(containerChildren[i]);
			}
		}
	}
	if(isPassword == "true"){
		button.onclick = function(event){
			event.preventDefault();
			newTextBox.value = textBox.innerHTML;
			container.replaceChild(newTextBox, textBox);
			var visibilityWidget = buildVisibilityWidget(newTextBox);
			visibilityWidget.style.right = "15px";
			visibilityWidget.style.bottom = "-4px";
			container.focus();
			newTextBox.focus();
		}
	}
	else{
		button.onclick = function(){
			var newTextBox = document.createElement("input");
			newTextBox.setAttribute("name", name);
			newTextBox.setAttribute("type", type);
			newTextBox.className = "editableTextBox";
			newTextBox.type = type;
			newTextBox.style.width = "100%";
			newTextBox.style.border = "none";
			newTextBox.onblur = function(){
				textBox.innerHTML = newTextBox.value;
				container.replaceChild(textBox, newTextBox);
			}
		
		
			newTextBox.value = textBox.innerHTML;
			container.replaceChild(newTextBox, textBox);
			container.focus();
			newTextBox.focus();
		}
	}
	
	return button;
}

function toggleEditContentTooltip(positionX, positionY){
	//apro un div
	var tooltipDiv = document.createElement("div");
	tooltipDiv.className = "editTooltip formContainer";
	
	//stile come contextMenu chrome	
	tooltipDiv.style.position = "absolute";
	tooltipDiv.style.border = "1px solid lightgray";
	tooltipDiv.style.height = "200px";
	tooltipDiv.style.right = positionX + "px";
	tooltipDiv.style.top = positionY + "px";
	tooltipDiv.style.borderRadius = "5px";
	tooltipDiv.style.backgroundColor = "white";
	
	//appendo a body
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(tooltipDiv);
	body.classList.add("obscured");	
}
