require([
	  "esri/Map",
	  "esri/views/SceneView",
	  "esri/widgets/Directions",
	  "esri/core/urlUtils",
	  "dojo/domReady!"
	], function(Map, SceneView, Directions, urlUtils) {
	
		  directionsWidget = new Directions({
		    view: view,
		    id: "directionsWidget"
		  });
		  
		  view.ui.add(directionsWidget, "bottom-left");
		  
		  directionsWidget.viewModel.stops.on("after-add", function(event){
			  var stops = directionsWidget.viewModel.stops;			  
			  if(stops.length == 2){
				  startPoint = stops.getItemAt(0);
				  stopPoint = stops.getItemAt(1);
				  searchRouteRevenues(startPoint, stopPoint, filters);
			  }
		  });
	}
);
/*
 
 */