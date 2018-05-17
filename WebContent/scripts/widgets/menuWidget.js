/**
 * Construct and decorate the widgetMenu
 * root element with height and width is mandatory
 */

var rootId = document.currentScript.getAttribute("rootId");
var root = document.getElementById(rootId);
var userPanel = document.currentScript.getAttribute("userPanel");
var contentContainer;

buildWidget(root);

function buildWidget(root){	
	var container = buildContainer();
	if(root != null){
		root.appendChild(container);
	}
	
	if(userPanel == "true"){
		var panel = buildUserPanel();
		container.appendChild(panel);
	}
	
	contentContainer = buildContentPanel();
	container.appendChild(contentContainer);
	var closeMenu = buildClosureIcon();
	container.appendChild(closeMenu);
}

function buildContainer(){
	var container = document.createElement("div");
	container.classList.add("menuContainer");
	container.style.width = "100%";
	container.style.height = "100%";
	return container;
}

function buildUserPanel(){
	var container = document.createElement("div");
	container.classList.add("userMenuPanelContainer");
	container.style.width = "100%";
	container.style.height = "30%";
	var panel = document.createElement("div");
	panel.classList.add("userMenuPanel");
	panel.style.width = "100%";
	panel.style.height = "100%";
	
	var avatar = document.createElement("div");
	avatar.classList.add("avatar");
	avatar.id = "userAvatar";
	
	var userType = document.createElement("span");
	userType.id = "userType";
	userType.classList.add("userType");
	
	panel.appendChild(avatar);
	panel.appendChild(userType);
	container.appendChild(panel)
	return container;
}

function buildContentPanel(){
	var container = document.createElement("div");
	container.classList.add("contentContainer");
	container.style.width = "100%";
	if(userPanel == "true"){
		container.style.height = "calc(70% - 32px)"
	}
	else{
		container.style.height = "100%";	
	}
	return container;	
}

function getContentContainer(){
	return contentContainer;
}

function buildClosureIcon(){	
	var div = document.createElement("div");
	div.className = "closeMenu";
	div.onclick = function(){
		toggleMenu();
	}
	var icon = document.createElement("div");
	icon.className = "closeMenuIcon"
	div.appendChild(icon);
	return div;
}