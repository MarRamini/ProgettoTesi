require([
	  "esri/Map",
	  "esri/views/SceneView",
	  "esri/widgets/Directions",
	  "esri/core/urlUtils",
	  "dojo/domReady!"
	], function(Map, SceneView, Directions, urlUtils) {
	
		  directionsWidget = new Directions({
		    view: view,
		    id: "directionsWidget",
		    container: "routingForm",
		    routeServiceUrl: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
		  });
		  
		  console.log(directionsWidget)
		 // view.ui.add(directionsWidget, "bottom-left");
		  
		  directionsWidget.viewModel.stops.on("after-add", function(event){
			  var stops = directionsWidget.viewModel.stops;		
			  if(stops.length == 1){	
				  directionsWidget.view.goTo({
	    	          center: stops.getItemAt(0).geometry,
	    	          tilt: 60,
	    	          scale: 2500,
	    	          zoom: 18
	    	      });
			  }
			  if(stops.length == 2){
				  startPoint = stops.getItemAt(0);
				  stopPoint = stops.getItemAt(1);
				  searchRouteRevenues(startPoint, stopPoint, filters);
			  }
		  });
	}
);

/**
 * add a proxy rule for routing
 */
require(["esri/core/urlUtils"], function(urlUtils) {
	  urlUtils.addProxyRule({
	    urlPrefix: "route.arcgis.com",
	    proxyUrl: "http://localhost:8080/ProgettoTesi/proxy.jsp"
	  });
});