/**
 * @param startPoint: starting point of the route
 * @param endPoint: endingPoint of the route
 * @return void
 */
function calculateRoute(startPoint, endPoint, pois){
	require([
		"esri/Map",
	    "esri/views/SceneView",
	    "esri/tasks/RouteTask",
	    "esri/tasks/support/RouteParameters",
	    "esri/tasks/support/FeatureSet",
	    "esri/core/urlUtils",
	    "dojo/on",
	    "dojo/domReady!"
	], function(Map, SceneView, RouteTask, RouteParameters, FeatureSet, urlUtils, on){
		 //Point the URL to a valid route service
	     var routeTask = new RouteTask({
	       url: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
	     });
		  
	   	 // Setup the route parameters
	     routePoints = new RouteParameters({
	        stops: new FeatureSet(),
	        findBestSequence: true,
	        preserveFirstStop: true,
	        preserveLastStop: true,
	        returnStops: true,
	        outSpatialReference: { // autocasts as new SpatialReference()
	          wkid: 3857
	        }
	      });
	     
	      var routeSymbol = {
	        type: "simple-line", // autocasts as SimpleLineSymbol()
	        color: [0, 0, 255, 0.5],
	        width: 5
	      }; 
	      
	      routePoints.stops.features.push(startPoint);
	     
	      pois.forEach(function(poi){
	    	  routePoints.stops.features.push(poi);
	      })
	      
	      routePoints.stops.features.push(endPoint);
	      
	      routeTask.solve(routePoints).then(function(data){
	    	map.layers.items[0].removeAll() 
	  		var routeResult = data.routeResults[0].route;
	  	    routeResult.symbol = routeSymbol;
	  	    routeResult.id = "routeResult";
	  	    map.layers.items[0].add(routeResult);
	      });
	      routeCalculated = true;	
	     
	      if(username != "guest"){
	    	 if(document.getElementById("routeRatingContainer") == undefined){
	    		 routeRating(); 
	    	 }
	    	 else{
	    		 document.getElementById("routeRatingContainer").classList.remove("closed");
	    		 document.getElementById("routeRatingContainer").classList.add("opened");	    		 
	    	 }
	      }	      
	});	
}

function routeRating(){
	var body = document.getElementsByTagName("body")[0];
	var rateRouteContainer = document.createElement("div");
	rateRouteContainer.id = "routeRatingContainer"
	rateRouteContainer.className = "rateRouteContainer";
	rateRouteContainer.classList.add("opened");
	body.appendChild(rateRouteContainer);
	
	var routeRatingDiv = document.createElement("div");
	routeRatingDiv.className = "routeRating";
	rateRouteContainer.appendChild(routeRatingDiv);
	
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
		
		enableMouseEvents(div);		
		
		//prevents further mouseover, mouseout events
		div.onclick = function(event){
			var target = event.target;
			var targetId = target.id;
			var stars = document.getElementsByClassName("ratingStarDiv");
			for(var y=0 ; y<stars.length ; y++){
				disableMouseEvents(stars[y]);
			}
		}
		
		ratingDiv.appendChild(div);
	}
	
	var buttons = document.createElement("div");
	buttons.className = "submitButtons routeRatingRow";
	routeRatingDiv.appendChild(buttons);
	
	var resetButton = document.createElement("button");
	resetButton.className = "valutationResetButton";
	resetButton.type = "button";
	resetButton.textContent = "Reset Valutation";
	buttons.appendChild(resetButton);
	
	resetButton.onclick = function(event){
		var stars = document.getElementsByClassName("ratingStarDiv");
		for(var y=0 ; y<stars.length ; y++){
			stars[y].style.backgroundPositionX = "0px";
			enableMouseEvents(stars[y]);
		}
	}
	
	var submitButton = document.createElement("button");
	submitButton.className = "valutationSubmitButton";
	submitButton.type = "button";
	submitButton.textContent = "Submit Valutation";
	buttons.appendChild(submitButton);
	
	submitButton.onclick = function(event){
		var valutation = 0;
		var stars = document.getElementsByClassName("ratingStarDiv");
		for(var j=0 ; j<stars.length ; j++){
			if(stars[j].style.backgroundPositionX === "14px"){
				valutation ++;
			}
		}
		
		persistRoute(routePoints.stops.features, valutation);
		document.getElementById("routeRatingContainer").classList.remove("opened");
		document.getElementById("routeRatingContainer").classList.add("closed");
	}
}

function enableMouseEvents(div){
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
		var stars = document.getElementsByClassName("ratingStarDiv");
		for(var y=0 ; y<stars.length ; y++){
			stars[y].style.backgroundPositionX = "0px";
		}
	}	
}

function disableMouseEvents(div){
	div.onmouseout = null;
	div.onmouseover = null;
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