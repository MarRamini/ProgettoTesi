require([
	"esri/widgets/BasemapToggle"
	], function(BasemapToggle){
		
		var basemapToggle = new BasemapToggle({
			view: view,  
			nextBasemap: "satellite"  // Allows for toggling to the "satellite" basemap
		});
		
		view.ui.add(basemapToggle, "bottom-left");
	}
);

