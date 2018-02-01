require([
  "esri/widgets/Search",					 
  "esri/views/SceneView",
  "esri/Map",
  "dojo/domReady!",
], 
  function(Search, SceneView, Map){			
      var searchWidget = new Search({
          view: this.view,
          container: "searchBox"
      });
      
      view.then(function(){
    	  searchWidget.on("select-result", function(){						    		  
    		  var location = searchWidget.resultGraphic.geometry;
    		  
    		  view.goTo({
    	          center: location,
    	          tilt: 60,
    	          scale: 2500,
    	          zoom: 18
    	        });
    		  
    		  var position = {latitude: location.latitude, longitude: location.longitude};
  	          var filters;
  	        
  	          searchRevenues(position, filters);
    	  })
      });
  }
);  