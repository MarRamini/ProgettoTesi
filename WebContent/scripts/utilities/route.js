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
	      
	      pois.sort(function(startPoint, point){ //ordino pois in base alla vicinanza con il punto di start
	    	  var latitudeA = startPoint.geometry.latitude;
	    	  var longitudeA = startPoint.geometry.longitude;
	    	  var latitudeB = point.geometry.latitude;
	    	  var longitudeB = point.geometry.longitude;
	    	  
	    	  var distance = Math.sqrt(Math.pow(latitudeB - latitudeA, 2) - Math.pow(longitudeB - longitudeA, 2));
	    	  return distance;
	      });
	     
	      pois.forEach(function(poi){
	    	  routePoints.stops.features.push(poi)
	      })
	      
	      routePoints.stops.features.push(endPoint);
	      
	      routeTask.solve(routePoints).then(function(data){
	  		var routeResult = data.routeResults[0].route;
	  	    routeResult.symbol = routeSymbol;
	  	    map.layers.items[0].add(routeResult);
	  	  });
	});
}