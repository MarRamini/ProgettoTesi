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
	     var routePoints = new RouteParameters({
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
	    	  routePoints.stops.features.push(poi)
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
	});
	 routeRating();
}

function routeRating(){
	var body = document.getElementsByTagName("body")[0];
	var rateRouteContainer = document.createElement("div");
	rateRouteContainer.className = "rateRouteContainer";
	body.appendChild(rateRouteContainer);
	
	var routeRatingDiv = document.createElement("div");
	routeRatingDiv.className = "routeRating";
	rateRouteContainer.appendChild(routeRatingDiv);
	
	var textDiv = document.createElement("div");
	textDiv.className = "textRatingDiv";
	textDiv.textContent = "How much do you like the route found?"
	routeRatingDiv.appendChild(textDiv);
	
	var ratingDiv = document.createElement("div");
	ratingDiv.className = "ratingDiv";
	routeRatingDiv.appendChild(ratingDiv);
	
	for(i=0 ; i<5 ; i++){
		var div = document.createElement("div");
		div.className = "ratingStarDiv";
		div.id = "ratingStarDiv" + i;
		div.onmouseover = function(event){
			var target = event.target;
			var targetId = target.id;
			var stars = document.getElementsByClassName("ratingStarDiv");
			console.log(stars.length)
			for(y=0 ; y<stars.length ; y++){
				stars[y].style.backgroundPositionX = "0px";
			}
			var targetNumber = targetId.slice(13,14);
			console.log(targetNumber)
			for(j=0 ; j<=targetNumber ; j++){
				document.getElementById("ratingStarDiv" + j).style.backgroundPositionX = "14px";
			}
		}
		ratingDiv.appendChild(div);
	}
	
	//todo: appendere bottone con salvataggio oppure onclick sulla stella
}