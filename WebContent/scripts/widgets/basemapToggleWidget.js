require([
	"esri/widgets/BasemapToggle",
	"esri/views/SceneView",
	"dojo/domReady!"
	], function(BasemapToggle, SceneView){
		
		var basemapToggle = new BasemapToggle({
			view: this.view,  
			nextBasemap: "satellite"  // Allows for toggling to the "satellite" basemap
		});
		
		view.ui.add(basemapToggle, "bottom-left");
	}
);

