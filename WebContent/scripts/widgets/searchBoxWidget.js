var rootID = document.currentScript.getAttribute("rootID");
var root = document.getElementById(rootID);

buildWidget();

function buildWidget(){	
	root.appendChild(buildBar());
	root.appendChild(buildIcon());
}

function buildBar(){
	var input = document.createElement("div");
	input.classList.add("searchBoxBar");
	input.id = "searchBar";
	return input;
	/*var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("name", "search");
	input.classList.add("searchBoxBar");
	input.id = "searchBar";
	input.style.height = "14px";
	input.style.width = "auto";
	input.placeholder = "Find your address";
	return input;*/
}

function buildIcon(){
	var container = document.createElement("div");
	container.classList.add("searchIconContainer");
	container.style.width = "32px";
	container.style.height = "32px";
	container.style.float = "right";
	var icon = document.createElement("div");
	icon.classList.add("searchIcon");
	icon.style.width = "14px";
	icon.style.height = "14px";
	container.appendChild(icon);
	return container;
}