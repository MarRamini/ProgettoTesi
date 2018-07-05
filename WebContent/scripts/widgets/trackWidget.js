require([
  "esri/widgets/Track",					 
  "esri/views/SceneView",
  "esri/Map",
  "dojo/domReady!",
],
  function(Track, SceneView, Map){				      
	  var track = new Track({
	    view: this.view,
	    goToLocationEnabled: true
	  });
 
	  view.ui.add(track, "top-right");
  
	  // The sample will start tracking your location
	  // once the view becomes ready
	  view.then(function() {
		var geolocalizationActive = false;
		track.on("track", function(){
			
			geolocalizationActive = true;
			
			var location = track.graphic.geometry;
			
	        view.goTo({
	          center: location,
	          tilt: 60,
	          scale: 2500,
	          zoom: 18
	        });
	        
	        var position = {latitude: location.latitude, longitude: location.longitude};
	        lastPositionSearched = position;
	        var filters = [];
	        searchRevenues(position, filters);
	    });
		
        track.start();
        
        if(!geolocalizationActive){
        	var position = {latitude: 41.90322000000004, longitude: 12.495650000000069}
        	view.goTo({
        	  center: location,
  	          tilt: 60,
  	          scale: 2500,
  	          zoom: 18
        	});
        }
      });
   }
);