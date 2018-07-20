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
	        returnDirections: true,
	        directionsLengthUnits: "meters",
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
	    	var directions = data.routeResults[0].directions;
	    	buildDirectionsWidget(directions);
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