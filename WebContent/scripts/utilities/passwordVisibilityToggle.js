var referredId = document.currentScript.getAttribute("referredId");
var referredElement = document.getElementById(referredId);
if(referredElement != null){
	buildVisibilityWidget(referredElement);
}

function buildVisibilityWidget(referredElement){
	var widget = document.createElement("div");
	widget.className = "visibilityToggleWidget";
	widget.style.width = "10px";
	widget.style.height = "10px";
	widget.style.backgroundImage = "url('styles/icons/eye_visible_10.png')";
	widget.style.display = "inline-flex";
	widget.style.position = "relative";
	widget.style.right = "-165px";
	widget.style.bottom = "-2px";
	widget.style.cursor = "pointer";
	referredElement.insertAdjacentElement("afterend", widget);
	
	widget.onmousedown = function(event){
		event.preventDefault();
		togglePasswordVisibility(referredElement.id, widget);
	}
	widget.onmouseup = function(event){
		event.preventDefault();
		togglePasswordVisibility(referredElement.id, widget);
	}
	widget.onmouseout = function(){
		document.getElementById(referredElement.id).type = "password";
		widget.style.backgroundImage = "url('styles/icons/eye_visible_10.png')";
	}
	return widget;
}

function togglePasswordVisibility(elementId, widget){
	var passwordElement = document.getElementById(elementId);
	if (passwordElement.type === "password") {
		passwordElement.type = "text";
		widget.style.backgroundImage = "url('styles/icons/eye_invisible_10.png')";
		
    } else {
    	passwordElement.type = "password";
    	widget.style.backgroundImage = "url('styles/icons/eye_visible_10.png')";
    }	
}