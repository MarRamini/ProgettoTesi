function togglePreferred(){
	
	if(document.getElementById("preferredSearchToolbar") == undefined){
		var container = buildContainer();
		document.getElementsByTagName("body")[0].appendChild(container);
		requestSearches(container);	
	}
	
	
}

function buildContainer(){
	var container = document.createElement("div");
	container.className = "preferredSearchToolbarContainer";
	container.id = "preferredSearchToolbar";
	return container;
}

function buildRows(response, container){
	var cont = 0; //conta le righe (massimo 10)
	var arraySorted = sortResults(response);
	/*for(var search in response){
		if(cont < 10){
			cont ++;
			var row = document.createElement("div");
			row.className = "preferredSearchRow";
			row.innterHTML = appendRowText(search);
			container.appendChild(row);
		}
		else{}
	}*/
}

function appendRowText(search){
	var addressSpan = document.createElement("span");
	addressSpan.innerHTML = search.address;
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

function sortResults(searches){
	
	var array = [];
	console.log(searches)

	for(var search in searches){
		console.log(search);
		array.push(search);
	}
	console.log(array);
	array.sort(function(item1, item2){
		return item1<item2;
	})
	console.log(array);
	return array;
}