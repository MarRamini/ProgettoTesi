function routeRating(){
	var body = document.getElementsByTagName("body")[0];
	var rateRouteContainer = document.getElementById("routeRatingContainer");
	if(typeof rateRouteContainer == undefined || rateRouteContainer == null){
		var rateRouteContainer = document.createElement("div");
		rateRouteContainer.id = "routeRatingContainer"
		rateRouteContainer.className = "rateRouteContainer";
		rateRouteContainer.classList.add("opened");
		body.appendChild(rateRouteContainer);
		
		var routeRatingDiv = document.createElement("div");
		routeRatingDiv.className = "routeRating";
		rateRouteContainer.appendChild(routeRatingDiv);
		
		var closeButton = document.createElement("div");
		closeButton.className = "closeButton";
		routeRatingDiv.appendChild(closeButton);
		closeButton.onclick = function(event){
			body.removeChild(rateRouteContainer);
		}
		
		var firstRowDiv = document.createElement("div");
		firstRowDiv.className = "routeRatingRow";
		routeRatingDiv.appendChild(firstRowDiv)
		
		var textDiv = document.createElement("div");
		textDiv.className = "textRatingDiv";
		textDiv.textContent = "How much do you like the route found?"
			firstRowDiv.appendChild(textDiv);
		
		var ratingDiv = document.createElement("div");
		ratingDiv.className = "ratingDiv";
		firstRowDiv.appendChild(ratingDiv);
		
		for(i=0 ; i<5 ; i++){
			var div = document.createElement("div");
			div.className = "ratingStarDiv";
			div.id = "ratingStarDiv" + i;
			
			enableMouseEvents(div, null);		
			
			div.onclick = function(event){
				submitValutation(event.target);
			}
			
			ratingDiv.appendChild(div);
		}
	}
	else{
		body.appendChild(rateRouteContainer);
	}	
}

function enableMouseEvents(div, oldValutation){
	console.log("enableMouseEvents", oldValutation)
	//colors stars when hovering with mouse
	div.onmouseover = function(event){
		var target = event.target;
		var targetId = target.id;
		var stars = document.getElementsByClassName("ratingStarDiv");
		for(var y=0 ; y<stars.length ; y++){
			stars[y].style.backgroundPositionX = "0px";
		}
		var targetNumber = targetId.slice(13,14);
		for(j=0 ; j<=targetNumber ; j++){
			document.getElementById("ratingStarDiv" + j).style.backgroundPositionX = "14px";
		}
	}
	
	//reset stars color when mouse goes out of the stars
	div.onmouseout = function(event){
		console.log("onmouseout", oldValutation)
		var stars = document.getElementsByClassName("ratingStarDiv");
		for(var y=0 ; y<stars.length ; y++){
			if(oldValutation != null && y < oldValutation){
				stars[y].style.backgroundPositionX = "14px";
			}
			else{
				stars[y].style.backgroundPositionX = "0px";
			}			
		}
	}	
}

function submitValutation(target){	
	console.log("valutation submitted")
	var targetId = target.id;
	var targetNumber = targetId.slice(13,14);
	var valutation = parseInt(targetNumber) + 1;
	var stars = document.getElementsByClassName("ratingStarDiv");
	
	for(var j=0 ; j<stars.length ; j++){
		enableMouseEvents(stars[j], valutation); //change mouseout event with oldValutation
	}
	console.log("onsubmit", valutation)
	
	persistRoute(routePoints.stops.features, valutation);
}

function persistRoute(routePoints, valutation){	
	
	var startPoint =  {
		label: routePoints[0].attributes.Match_addr,
		latitude: routePoints[0].geometry.latitude,
		longitude: routePoints[0].geometry.longitude
	}
	
	var endPoint = {
		label: routePoints[routePoints.length -1].attributes.Match_addr,
		latitude: routePoints[routePoints.length -1].geometry.latitude,
		longitude: routePoints[routePoints.length -1].geometry.longitude
	}
	
	var jsonRoutePoints = {
		startPoint: startPoint,
		endPoint: endPoint,
		intermediatePoints: []
	}
	
	for(i=1 ; i<routePoints.length -1 ; i++){
		var intermediatePoint = {
			label: routePoints[i].attributes.label,
			latitude: routePoints[i].geometry.latitude,
			longitude: routePoints[i].geometry.longitude
		}
		jsonRoutePoints.intermediatePoints.push(intermediatePoint);
	}
	
	var jsonString = JSON.stringify(jsonRoutePoints);
	
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/PersistRoute");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttpRequest.send("txtJsonRoute=" + encodeURIComponent(jsonString) + "&txtRouteValutation=" + encodeURIComponent(valutation));
}