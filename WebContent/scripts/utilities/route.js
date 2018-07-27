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
	    "esri/core/Collection",
	    "dojo/on",
	    "dojo/domReady!"
	], function(Map, SceneView, RouteTask, RouteParameters, FeatureSet, urlUtils, on, Collection){
	    
		
		/*var routeTask = new RouteTask({
	       url: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
	     });	*/    
	     
	     var directionsParameters = directionsWidget.viewModel;
	     
	     directionsWidget.stopSymbols.middle.size = 0;
	     
	    // directionsWidget.stopSymbols.middle = null;
	   	 // Setup the route parameters	   
	     
	   /*  directionsParameters.routeParameters = new RouteParameters({
	        findBestSequence: true,
	        preserveFirstStop: true,
	        preserveLastStop: true,
	        returnStops: true,
	        outSpatialReference: { // autocasts as new SpatialReference()
	          wkid: 3857
	        }
	      });*/
	     
	    // console.log("widget", directionsWidget)
	     
	    /* directionsWidget.routeSymbol = {
	        type: "simple-line", // autocasts as SimpleLineSymbol()
	        color: [0, 0, 255, 0.5],
	        width: 5
	      }; */
	      
	      var i = 1
	      pois.forEach(function(poi){
	    	  directionsParameters.stops.add(poi, i);
	    	  i++;
	      })
	      
	      //directionsParameters.stops.add(endPoint);
	      
	      console.log("directions", directionsWidget)
	      directionsWidget.getDirections().then(function(data){
	    	  map.layers.items[0].removeAll() 
	    	  var routeResult = data.routeResults[0].route;
	    	  routeResult.id = "routeResult";
	    	  map.layers.items[0].add(routeResult);
	      });
	      
	     /* routeTask.solve(routePoints).then(function(data){
	    	map.layers.items[0].removeAll() 
	  		var routeResult = data.routeResults[0].route;
	    	var directions = data.routeResults[0].directions;
	    	//buildDirectionsWidget(directions);
	  	    routeResult.symbol = routeSymbol;
	  	    
	  	    map.layers.items[0].add(routeResult);
	  	    view.goTo({
	  	    	center: startPoint.geometry,
	            speedFactor: 0.1,
	            easing: "linear",
	            zoom: 15
	  	    });
	      });*/
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