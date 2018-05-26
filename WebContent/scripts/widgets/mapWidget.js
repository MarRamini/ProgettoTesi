var basemap = document.currentScript.getAttribute("basemap");

require([
	"esri/Map",
	"esri/views/SceneView",
	"esri/layers/GraphicsLayer",
	"dojo/domReady!"
],
	function(Map, SceneView, GraphicsLayer){
	  routeLayer = new GraphicsLayer();  
	  
	  if(basemap == "null"){
		  basemap = "topo";
	  }
	  
	  map = new Map({
	    basemap: basemap,
	    layers: [routeLayer]
	  });
	  
	  view = new SceneView({
	    map: map,
	    container: "mapPlaceHolder",
	    id: "mapView"
	  });
	}
);