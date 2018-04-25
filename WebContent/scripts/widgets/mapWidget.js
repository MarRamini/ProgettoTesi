require([
	"esri/Map",
	"esri/views/SceneView",
	"esri/layers/GraphicsLayer",
	"dojo/domReady!"
],
	function(Map, SceneView, GraphicsLayer){
	  routeLayer = new GraphicsLayer();  
	
	  map = new Map({
	    basemap: "topo",
	    layers: [routeLayer]
	  });
	  
	  view = new SceneView({
	    map: map,
	    container: "mapPlaceHolder",
	    id: "mapView"
	  });
	}
);