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
 
	  view.ui.add(track, "top-left");
  
	  // The sample will start tracking your location
	  // once the view becomes ready
	  view.then(function() {
		track.on("track", function(){
			var location = track.graphic.geometry;
	
	        view.goTo({
	          center: location,
	          tilt: 60,
	          scale: 2500,
	          zoom: 18
	        });
	        
	        var position;
	        var filters;
	        
	        searchRevenues(position, filters);
	    });
    	
        track.start();
      });
   }
);