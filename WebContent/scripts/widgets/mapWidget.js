var basemap = document.currentScript.getAttribute("basemap");

require([
	"esri/Map",
	"esri/views/SceneView",
	"esri/layers/GraphicsLayer",
	"esri/layers/SceneLayer",
	"dojo/domReady!"
],
	function(Map, SceneView, GraphicsLayer, SceneLayer){
	  routeLayer = new GraphicsLayer();  
	  
	  if(basemap == "null"){
		  basemap = "topo";
	  }
	  
	  map = new Map({
	    basemap: basemap,
	    ground: "world-elevation",
	    layers: [routeLayer]
	  });
	  
	  view = new SceneView({
	    map: map,
	    container: "mapPlaceHolder",
	    id: "mapView"
	  });
	  
      sceneLayer = new SceneLayer({
          portalItem: {
              //id: "327d6b60509f4ddab12ee5a424fac7de"
              id: "2342ab7928834076a1240fb93c60e978"
          },
          elevationInfo: {
            mode: "absolute-height",
            offset: 6
          }
      });
      
      /*sceneLayer = new SceneLayer({
          url: "http://scene.arcgis.com/arcgis/rest/services/Hosted/Building_Berlin1/SceneServer",
          layerId: 0
      });*/
      
      map.add(sceneLayer);
	  
	  view.ui.components.forEach(function(component){
		  if(component != "attribution"){
			  view.ui.move(component, "top-right");
		  }
		  
	  })
	  
	  map.on("load", function(){
		  map.graphics.enableMouseEvents();
	  })
	  
	}
);