function buildContainer(anchor){
	var container = document.createElement("div");
	container.className = "preferredSearchToolbarContainer";
	container.id = "preferredSearchToolbar";
	container.style.position = "absolute";
	var computedStyle = window.getComputedStyle(anchor, null);
	container.style.top = computedStyle.height;
	container.style.left = "0px";
	container.onblur = function(evt){
		if(container != undefined){
			container.parentNode.removeChild(container);
		}
	}
	requestSearches(container);	
	return container;
}

function buildErrorRow(container){
	var div = document.createElement("div");
	div.className = "preferredVoice";
	container.appendChild(div);
	var span = appendRowText("error");
	div.appendChild(span);
}

function buildRows(response, container){
	var arrayResults = toArrayResults(response);
	console.log(arrayResults);
	for(var i=0 ; i<arrayResults.length && i<10 ; i++){
		var search = arrayResults[i];
		var div = document.createElement("div");
		div.className = "preferredVoice";
		container.appendChild(div);
		var span = appendRowText(search.address);
		div.appendChild(span);
	}	
}

function appendRowText(address){
	var addressSpan = document.createElement("span");
	addressSpan.className = "preferredVoiceText";
	if(address != "error"){
		addressSpan.innerHTML = address;
		addressSpan.onclick = function(event){
			searchWidget.searchTerm = event.srcElement.textContent;
		}
	}else{
		addressSpan.innerHTML = "preferred searches functionality is not available for user guest";
	}
	
	return addressSpan;
}

function requestSearches(container){
var xmlHttpRequest = new XMLHttpRequest();
	
	xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/RetrievePreferredSearches");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	xmlHttpRequest.onreadystatechange = function(){
		 if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
			 	if(this.responseText != ""){
			 		var xmlHttpResponse = JSON.parse(this.responseText);
			 		buildRows(xmlHttpResponse, container);
			 	}
			 	else{
			 		buildErrorRow(container);
			 	}
			 		
		    	
		 }
	}
	
	xmlHttpRequest.send();
}

function toArrayResults(searches){	
	var array = [];
	var i=0;
	
	for(var search in searches){
		i++;
		array.push(searches[i]);
	}
	
	array.sort(function(item1, item2){
		return item1.weight < item2.weight;
	})
	
	return array;
}