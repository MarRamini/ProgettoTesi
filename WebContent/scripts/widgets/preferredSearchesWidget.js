function buildContainer(anchor){
	var container = document.createElement("div");
	container.className = "preferredSearchToolbarContainer";
	container.id = "preferredSearchToolbar";
	container.style.position = "absolute";
	var computedStyle = window.getComputedStyle(anchor, null);
	container.style.top = computedStyle.height;
	container.style.left = "0px";
	requestSearches(container);	
	return container;
}

function buildRows(response, container){
	var arrayResults = toArrayResults(response);
	console.log(arrayResults);
	for(var i=0 ; i<arrayResults.length && i<10 ; i++){
		var search = arrayResults[i];
		var div = document.createElement("div");
		div.className = "preferredVoice";
		container.appendChild(div);
		var span = appendRowText(search);
		div.appendChild(span);
	}	
}

function appendRowText(search){
	var addressSpan = document.createElement("span");
	addressSpan.className = "preferredVoiceText";
	addressSpan.innerHTML = search.address;
	addressSpan.onclick = function(event){
		searchWidget.searchTerm = event.srcElement.textContent;
	}
	return addressSpan;
}

function requestSearches(container){
var xmlHttpRequest = new XMLHttpRequest();
	
	xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/RetrievePreferredSearches");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	xmlHttpRequest.onreadystatechange = function(){
		 if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
		    	var xmlHttpResponse = JSON.parse(this.responseText);
		    	buildRows(xmlHttpResponse, container);
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