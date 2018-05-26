require([
	"esri/widgets/BasemapToggle",
	"esri/views/SceneView",
	"dojo/domReady!"
	], function(BasemapToggle, SceneView){
		
		var basemapToggle = new BasemapToggle({
			view: this.view,  
			nextBasemap: "satellite",  // Allows for toggling to the "satellite" basemap
			titleVisible: true
		});
		
		view.ui.add(basemapToggle, "bottom-left");
	}
);

