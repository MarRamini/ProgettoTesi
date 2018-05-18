function togglePreferred(anchor){
	var preferredSearchesElement = document.getElementById("preferredSearchToolbar")
	if(preferredSearchesElement == undefined){		
		var container = buildContainer(anchor);
		anchor.appendChild(container);
		container.focus();
	}
	else{
		preferredSearchesElement.parentNode.removeChild(preferredSearchesElement);
	}
}
